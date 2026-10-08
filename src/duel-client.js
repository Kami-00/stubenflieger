import { createDuelView } from './duel-view.js';
import { createDuelAppearancePicker } from './duel-appearance.js';
import { readViewMode, saveViewMode, updateViewButton } from './view-mode.js';
import { createMobileSettings, readMobileViewport } from './mobile-settings.js';
import { DUEL_PLAYER_IDS, DUEL_PLAYER_COLORS } from './duel-arena.js';
import { DUEL_SESSION_PREFIX, canHostStart, clampAxis, duelInput, duelResultTitle, inviteAddress, inviteRoom, isPilotOut, pilotName, remainingTime } from './duel-controls.js';

const $ = id => document.getElementById(id);
const show = (id, visible) => { $(id).hidden = !visible; };
const keys = new Set(), touch = { steer: 0, pitch: 0, fire: false };
const settingsOpen = () => $('duel-settings').open;
let view, room = null, token = null, slot = null, name = '', seq = 0;
let socket = null, phase = 'entry', players = [], hostId = null, snapshot = null, remaining = 180, countdown = 3;
let stateWinner = null, stateReason = '', busy = false, stopped = false, suspended = false, rematchPending = false;
let reconnectTimer, reconnectAttempt = 0, reconnectUntil = 0, lastMessageAt = 0, lastStateAt = 0, ping = null;
let stickPointer = null, firePointer = null, feedbackTimer, shotTimer, hitTimer, damageTimer, fireReleaseTimer;
let lastHealth = new Map(), projectileIds = new Set(), lastRenderedPhase = 'entry', operation = 0, wasSpectating = false;
let cameraMode = readViewMode(), appearanceReceived = false, appearancePending = null;
const appearancePicker = createDuelAppearancePicker(appearance => {
  if (!send({ type: 'appearance', appearance })) return false;
  appearancePending = appearance; return true;
});
function toggleCamera() {
  cameraMode = cameraMode === 'fpv' ? 'chase' : 'fpv'; saveViewMode(cameraMode);
  view?.setCameraMode(cameraMode); updateViewButton($('duel-camera-mode'), cameraMode);
  if (['playing', 'countdown', 'reconnecting'].includes(phase)) $('duel-canvas').focus({ preventScroll: true });
}
$('duel-camera-mode').onclick = toggleCamera; updateViewButton($('duel-camera-mode'), cameraMode);
const effectNames = { none: 'Ohne Effekt', mint: 'Minzspur', spark: 'Sternenstaub', confetti: 'Konfetti' };
const lobbyCards = new Map(), opponentCards = new Map();
function element(tag, className, text) {
  const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node;
}
for (const [index, id] of DUEL_PLAYER_IDS.entries()) {
  const card = element('div', 'pilot-card'); card.id = `lobby-${id}`; card.style.setProperty('--player-color', DUEL_PLAYER_COLORS[id]);
  const identity = element('div', 'pilot-identity'); identity.append(element('strong', 'pilot-name'), element('span', 'host-badge', 'Gastgeber'));
  const appearance = element('span', 'pilot-appearance'); appearance.append(element('i', 'pilot-swatch'), element('span', 'pilot-effect')); identity.append(appearance);
  card.append(element('span', 'pilot-number', String(index + 1).padStart(2, '0')), identity, element('span', 'pilot-state'));
  $('lobby-players').append(card); lobbyCards.set(id, card);
  const opponent = element('div', 'opponent-card'); opponent.id = `health-${id}`; opponent.style.setProperty('--player-color', DUEL_PLAYER_COLORS[id]);
  const heading = element('div', 'opponent-heading'); heading.append(element('span', 'opponent-label'), element('strong', 'opponent-hp'));
  const meter = element('div', 'health-meter'); meter.setAttribute('role', 'meter'); meter.setAttribute('aria-valuemin', '0'); meter.setAttribute('aria-valuemax', '100'); meter.append(element('span'));
  opponent.append(heading, meter, element('span', 'opponent-state')); $('opponents').append(opponent); opponentCards.set(id, opponent);
}

function showError(message = '') { $('duel-errors').textContent = message; show('duel-errors', Boolean(message)); }
function warning(message) { $('session-warning').textContent = message; show('session-warning', Boolean(message)); }
function feedback(message) {
  clearTimeout(feedbackTimer); $('duel-feedback').textContent = phase === 'playing' ? message : '';
  feedbackTimer = setTimeout(() => { $('duel-feedback').textContent = ''; }, 1400);
}
function saveSession() {
  if (!room || !token) return;
  try { sessionStorage.setItem(DUEL_SESSION_PREFIX + room, JSON.stringify({ token, slot, name, seq })); }
  catch { warning('Dein Platz kann nach einem Neuladen in diesem Browser verloren gehen. Lass diese Seite während des Duells geöffnet.'); }
}
function readSession(id) {
  try {
    const saved = JSON.parse(sessionStorage.getItem(DUEL_SESSION_PREFIX + id) || 'null');
    return saved && typeof saved.token === 'string' && typeof saved.name === 'string' ? saved : null;
  } catch { return null; }
}
function forgetSession() { try { if (room) sessionStorage.removeItem(DUEL_SESSION_PREFIX + room); } catch {} }
const connected = () => socket?.readyState === WebSocket.OPEN;
function send(message) {
  if (!connected()) return false;
  try { socket.send(JSON.stringify(message)); return true; } catch { return false; }
}
function spectating() { return isPilotOut(snapshot?.players?.find(player => player.id === slot), myPlayer()); }
function currentInput() { return settingsOpen() || spectating() ? { steer: 0, pitch: 0, fire: false } : duelInput(keys, touch); }
function sendInput(forceNeutral = false) {
  if (phase !== 'playing' || spectating() || !connected() || (!forceNeutral && document.hidden)) return;
  send({ type: 'input', seq: ++seq, ...(forceNeutral ? { steer: 0, pitch: 0, fire: false } : currentInput()) });
}
function clearInput() {
  clearTimeout(fireReleaseTimer);
  keys.clear(); touch.steer = touch.pitch = 0; touch.fire = false;
  const oldStick = stickPointer, oldFire = firePointer; stickPointer = firePointer = null;
  if (oldStick !== null && $('duel-stick').hasPointerCapture(oldStick)) $('duel-stick').releasePointerCapture(oldStick);
  if (oldFire !== null && $('fire-button').hasPointerCapture(oldFire)) $('fire-button').releasePointerCapture(oldFire);
  $('duel-stick-knob').style.transform = ''; $('fire-button').classList.remove('active');
  sendInput(true);
}
function myPlayer() { return players.find(player => player.id === slot); }
function statusText() {
  const status = $('connection-status');
  status.className = 'connection';
  if (!room) { status.textContent = 'Für 2–5 Piloten'; return; }
  if (connected()) {
    status.classList.add('online'); status.textContent = ping === null ? 'Verbunden' : `Verbunden · ${ping} ms`;
  } else {
    status.classList.add('lost'); status.textContent = phase === 'expired' ? 'Duell beendet' : 'Verbindung wird aufgebaut …';
  }
}
function renderHealth() {
  const participants = snapshot?.players || [];
  const health = (plane, identity) => identity?.left || identity?.eliminated || plane?.eliminated ? 0 : Math.max(0, Math.min(100, Math.round(plane?.hp ?? 100)));
  function updateMeter(meter, hp, label) {
    meter.setAttribute('aria-label', `${label}: Lebenspunkte`); meter.setAttribute('aria-valuenow', hp);
    meter.setAttribute('aria-valuetext', `${hp} von 100 Lebenspunkten`);
    meter.firstElementChild.style.width = `${hp}%`; meter.classList.toggle('low', hp <= 30);
  }
  const own = myPlayer(), ownPlane = participants.find(player => player.id === slot), ownHp = health(ownPlane, own);
  $('own-name').textContent = `${own?.name || 'Du'} · DU`; $('own-hp').textContent = ownHp;
  $('own-card').style.setProperty('--player-color', DUEL_PLAYER_COLORS[slot] || DUEL_PLAYER_COLORS.p1);
  $('own-card').classList.toggle('is-out', isPilotOut(ownPlane, own)); updateMeter($('own-meter'), ownHp, own?.name || 'Du');
  for (const [id, card] of opponentCards) {
    const identity = players.find(player => player.id === id), plane = participants.find(player => player.id === id);
    card.hidden = id === slot || (!identity && !plane);
    if (card.hidden) continue;
    const hp = health(plane, identity), out = isPilotOut(plane, identity), label = identity?.name || 'Pilot';
    card.querySelector('.opponent-label').textContent = label; card.querySelector('.opponent-label').title = label;
    card.querySelector('.opponent-hp').textContent = hp; updateMeter(card.querySelector('.health-meter'), hp, label);
    card.classList.toggle('is-out', out);
    card.querySelector('.opponent-state').textContent = identity?.left ? 'Verlassen' : out ? 'Ausgeschieden' : identity?.connected === false ? 'Verbindung fehlt' : 'Im Flug';
  }
  const alive = participants.filter(plane => !isPilotOut(plane, players.find(player => player.id === plane.id))).length;
  $('remaining-pilots').textContent = `${alive || (phase === 'countdown' ? players.filter(player => !player.left).length : 0)} im Flug`;
  $('duel-time').textContent = remainingTime(remaining);
}
function resultCopy() {
  const winner = stateWinner ?? snapshot?.winner;
  if (phase === 'expired' && stateReason === 'replaced') return { title: 'Du fliegst im anderen Fenster.', text: 'Dein Platz ist dort aktiv. Spiele dort weiter oder eröffne hier ein neues Duell.' };
  if (phase === 'expired') return { title: 'Dieses Duell ist beendet.', text: 'Der Raum ist nicht mehr verfügbar. Eröffne ein neues Duell und teile eine frische Einladung.' };
  const title = duelResultTitle(winner, players, slot);
  const reasons = {
    timeout: 'Die drei Minuten sind um. Die verbleibenden Lebenspunkte entscheiden.',
    time: 'Die drei Minuten sind um. Die verbleibenden Lebenspunkte entscheiden.',
    disconnect: 'Die Verbindung eines Piloten kam nicht rechtzeitig zurück.',
    disconnected: 'Die Verbindung eines Piloten kam nicht rechtzeitig zurück.',
    leave: 'Ein Pilot hat das laufende Duell verlassen.',
    left: 'Ein Pilot hat das laufende Duell verlassen.',
    forfeit: 'Ein Pilot hat das laufende Duell verlassen.',
    health: 'Die letzten Treffer haben die Runde entschieden.',
    damage: 'Die letzten Treffer haben die Runde entschieden.',
    knockout: 'Die letzten Treffer haben die Runde entschieden.',
    last_alive: 'Nur ein Flugzeug ist noch in der Luft. Die Runde ist entschieden.',
    server_restart: 'Das Duell wurde durch einen Neustart unterbrochen und endet unentschieden. Ihr könnt gemeinsam eine neue Runde beginnen.',
    server_error: 'Das Duell musste wegen eines Verbindungsfehlers beendet werden und wird als unentschieden gewertet. Ihr könnt eine neue Runde versuchen.',
  };
  return { title, text: reasons[stateReason || snapshot?.reason] || 'Guter Flug! Mit einer Revanche startet ihr alle wieder mit 100 Lebenspunkten.' };
}
function render() {
  const isOut = spectating(), inFlight = ['countdown', 'playing', 'reconnecting'].includes(phase);
  show('duel-entry', phase === 'entry'); show('duel-lobby', phase === 'lobby');
  show('duel-result', phase === 'finished' || phase === 'expired');
  show('duel-hud', inFlight); show('duel-help', inFlight && !isOut);
  show('duel-camera-mode', inFlight); appearancePicker.render(phase, connected(), busy);
  show('duel-spectator', inFlight && isOut);
  show('duel-countdown', phase === 'countdown');
  show('duel-feedback', phase === 'playing');
  if (phase !== 'playing') { clearTimeout(feedbackTimer); $('duel-feedback').textContent = ''; }
  show('duel-touch', phase === 'playing' && connected() && !isOut); show('duel-reticle', phase === 'playing' && connected() && !isOut);
  show('leave-duel', Boolean(room && token)); show('back-solo', !token);
  document.body.classList.toggle('playing', phase === 'playing');
  document.body.classList.toggle('spectating', isOut && inFlight);
  if (isOut && !wasSpectating) { clearInput(); feedback('Du schaust jetzt zu. Die Runde läuft weiter.'); }
  wasSpectating = isOut;
  $('create-duel').disabled = $('join-duel').disabled = busy;
  $('create-duel').textContent = busy ? 'Wird eröffnet …' : 'Duell eröffnen ↗';
  $('join-duel').textContent = busy ? 'Du kommst gleich dazu …' : 'Duell beitreten ↗';
  $('duel-name').disabled = busy;
  show('create-duel', !room); show('join-duel', Boolean(room));
  show('entry-new-duel', Boolean(room));
  $('entry-eyebrow').textContent = room ? 'DU BIST EINGELADEN' : 'DEIN PRIVATES DUELL';
  $('entry-form-title').textContent = room ? 'Steig mit ein.' : 'Bereit für Gegenwind?';
  $('entry-note').textContent = room ? 'Wähle deinen Namen. Wenn alle bereit sind, startet der Gastgeber eure Runde.' : 'Ohne Konto. Teile den Link mit bis zu vier Freunden.';
  if (room) $('invite-link').value = inviteAddress(location.origin, room);
  for (const [id, card] of lobbyCards) {
    const player = players.find(candidate => candidate.id === id && !candidate.left);
    card.querySelector('.pilot-name').textContent = player?.name ? player.name + (id === slot ? ' · DU' : '') : 'Freier Platz';
    card.querySelector('.pilot-state').textContent = !player?.name ? 'Freunde einladen' : !player.connected ? 'Verbindung fehlt' : player.ready ? 'Bereit' : 'Noch nicht bereit';
    card.querySelector('.host-badge').hidden = !player || id !== hostId;
    card.classList.toggle('is-empty', !player);
    card.classList.toggle('is-ready', Boolean(player?.ready && player?.connected));
    card.querySelector('.pilot-appearance').hidden = !player;
    card.querySelector('.pilot-swatch').style.backgroundColor = player?.appearance?.color || DUEL_PLAYER_COLORS[id];
    card.querySelector('.pilot-effect').textContent = effectNames[player?.appearance?.effect] || effectNames.none;
  }
  const participants = players.filter(player => !player.left), host = players.find(player => player.id === hostId), isHost = slot === hostId;
  $('lobby-count').textContent = `${participants.length} / 5 Piloten`;
  $('lobby-copy').textContent = isHost ? 'Lade bis zu vier Freunde ein. Wenn alle bereit sind, bestimmst du als Gastgeber, wann es losgeht.' : `${host?.name || 'Der Gastgeber'} startet die Runde, wenn mindestens zwei Piloten dabei und alle bereit sind.`;
  const ready = Boolean(myPlayer()?.ready);
  $('ready-button').textContent = ready ? 'Doch noch warten' : 'Ich bin bereit ↗';
  $('ready-button').setAttribute('aria-pressed', String(ready)); $('ready-button').disabled = !connected() || phase !== 'lobby';
  $('ready-button').className = isHost ? 'secondary wide' : 'primary';
  show('start-duel', isHost);
  $('start-duel').textContent = participants.length < 2 ? 'Auf Mitspieler warten' : `Mit ${participants.length} Piloten starten ↗`;
  $('start-duel').disabled = !connected() || phase !== 'lobby' || !canHostStart(players, hostId, slot);
  $('start-status').textContent = isHost ? participants.length < 2 ? 'Zum Start fehlt noch mindestens ein Mitspieler.' : canHostStart(players, hostId, slot) ? 'Alle sind bereit. Du kannst starten oder auf weitere Freunde warten.' : 'Alle angemeldeten Piloten müssen verbunden und bereit sein.' : ready ? 'Du bist bereit. Der Gastgeber startet eure Runde.' : 'Markiere dich als bereit, sobald du losfliegen kannst.';
  $('countdown-value').textContent = Math.max(1, Math.ceil(countdown));
  renderHealth(); statusText();
  const reconnecting = phase === 'reconnecting' || (!connected() && Boolean(token) && !['expired', 'entry'].includes(phase));
  show('duel-network', reconnecting);
  $('network-title').textContent = connected() ? 'Ein Pilot ist kurz weg …' : 'Verbindung wird wiederhergestellt …';
  $('network-copy').textContent = connected() ? 'Bis zu 20 Sekunden bleibt Zeit, zurückzukommen.' : 'Dein Platz bleibt kurz reserviert. Lass diese Seite geöffnet.';
  if (phase === 'finished' || phase === 'expired') {
    const copy = resultCopy(); $('duel-result-title').textContent = copy.title; $('duel-result-copy').textContent = copy.text;
    show('rematch-button', phase !== 'expired'); show('rematch-status', phase !== 'expired');
    const rematchPeers = players.filter(player => player.connected && !player.left), agreed = rematchPeers.filter(player => player.rematch || (player.id === slot && rematchPending)).length;
    $('rematch-button').disabled = rematchPending || !connected() || rematchPeers.length < 2 || Boolean(myPlayer()?.left);
    $('rematch-button').textContent = rematchPending ? 'Du bist für die Revanche bereit' : 'Revanche ↗';
    $('rematch-status').textContent = rematchPeers.length < 2 ? 'Für eine Revanche müssen mindestens zwei Piloten verbunden sein.' : `${agreed} / ${rematchPeers.length} für die Revanche bereit. Danach geht es zurück in die Lobby; der Gastgeber startet die neue Runde.`;
    $('result-score').replaceChildren();
    for (const plane of snapshot?.players || []) {
      const identity = players.find(player => player.id === plane.id), label = element('div', 'result-pilot'), hp = element('strong');
      label.dataset.playerId = plane.id; label.style.setProperty('--player-color', DUEL_PLAYER_COLORS[plane.id]);
      hp.textContent = Math.max(0, Math.round(plane.hp));
      label.append(element('i', 'player-dot'), element('span', 'result-name', (identity?.name || 'Pilot') + (plane.id === slot ? ' · DU' : '')), hp,
        element('small', 'result-place', plane.id === (stateWinner ?? snapshot?.winner) ? 'Gewonnen' : identity?.left ? 'Verlassen' : isPilotOut(plane, identity) ? 'Ausgeschieden' : 'Im Ziel'));
      $('result-score').append(label);
    }
  }
  if (lastRenderedPhase !== phase) {
    if (phase !== 'playing') clearInput();
    if (!settingsOpen()) {
      if (phase === 'playing') $('duel-canvas').focus({ preventScroll: true });
      if (phase === 'lobby') $('ready-button').focus({ preventScroll: true });
      if (phase === 'finished') $('rematch-button').focus({ preventScroll: true });
      if (phase === 'expired') $('new-duel').focus({ preventScroll: true });
    }
    lastRenderedPhase = phase;
  }
}

async function api(path, body) {
  let response;
  try { response = await fetch(path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), signal: AbortSignal.timeout(10000) }); }
  catch { throw new Error('Die Verbindung klappt gerade nicht. Prüfe dein Internet und versuche es noch einmal.'); }
  const result = await response.json().catch(() => ({}));
  if (!response.ok) { const error = new Error(result.error || 'Dieses Duell ist gerade nicht erreichbar.'); error.status = response.status; throw error; }
  return result;
}
async function enterRoom(resume = null) {
  if (busy) return;
  try { name = pilotName(resume?.name || $('duel-name').value); }
  catch (error) { showError(error.message); $('duel-name').focus(); return; }
  busy = true; showError(); render(); const requestId = ++operation;
  try {
    const result = await api(room ? `/api/duels/${room}/join` : '/api/duels', { name, ...(resume ? { token: resume.token } : { appearance: appearancePicker.current() }) });
    if (requestId !== operation) return;
    if (!inviteRoom(`#room=${result.room}`) || typeof result.token !== 'string' || !DUEL_PLAYER_IDS.includes(result.slot)) throw new Error('Die Einladung konnte nicht geöffnet werden. Bitte versuche es erneut.');
    room = result.room; token = result.token; slot = result.slot; seq = Number.isSafeInteger(resume?.seq) ? resume.seq : 0;
    history.replaceState(null, '', `/duel#room=${room}`);
    saveSession(); phase = 'lobby'; stopped = false; reconnectUntil = 0; reconnectAttempt = 0; players = [];
    appearanceReceived = false; appearancePending = null;
    connectSocket();
  } catch (error) {
    if (requestId !== operation) return;
    if (resume && [401, 403, 404, 410].includes(error.status)) forgetSession();
    showError(error.message);
  } finally { if (requestId === operation) { busy = false; render(); } }
}

function shotFeedback(next) {
  const ids = new Set();
  for (const projectile of next.projectiles || []) {
    ids.add(projectile.id);
    if (projectile.owner === slot && !projectileIds.has(projectile.id)) {
      $('duel-reticle').classList.add('shot'); clearTimeout(shotTimer);
      shotTimer = setTimeout(() => $('duel-reticle').classList.remove('shot'), 120);
    }
  }
  projectileIds = ids;
  for (const player of next.players || []) {
    const before = lastHealth.get(player.id);
    if (typeof before === 'number' && player.hp < before) {
      if (player.id === slot) {
        document.body.classList.add('took-hit'); clearTimeout(damageTimer);
        damageTimer = setTimeout(() => document.body.classList.remove('took-hit'), 180);
        feedback(`Du: −${Math.round(before - player.hp)} Lebenspunkte`);
      } else {
        $('duel-reticle').classList.add('hit'); clearTimeout(hitTimer);
        hitTimer = setTimeout(() => $('duel-reticle').classList.remove('hit'), 180);
        feedback(`${players.find(identity => identity.id === player.id)?.name || 'Pilot'}: −${Math.round(before - player.hp)} Lebenspunkte`);
      }
    }
    lastHealth.set(player.id, player.hp);
  }
}
function connectSocket() {
  if (!room || !token || stopped || suspended) return;
  // A dropped appearance request has no acknowledgement. The new connection
  // must restore the server's choice instead of leaving the editor locked.
  appearancePending = null; appearanceReceived = false; appearancePicker.reject();
  clearTimeout(reconnectTimer);
  if (socket) { const old = socket; socket = null; old.close(); }
  const url = new URL(`/api/duels/${room}/socket`, location.origin);
  url.protocol = location.protocol === 'https:' ? 'wss:' : 'ws:'; url.searchParams.set('token', token);
  const current = new WebSocket(url); socket = current; statusText();
  current.onopen = () => {
    if (socket !== current) return;
    reconnectAttempt = 0; reconnectUntil = 0; lastMessageAt = lastStateAt = Date.now();
    ping = null; showError(); send({ type: 'ping', sentAt: Date.now() }); render();
  };
  current.onmessage = event => {
    if (socket !== current) return;
    lastMessageAt = Date.now();
    try {
      const data = JSON.parse(event.data);
      if (data.type === 'welcome' && DUEL_PLAYER_IDS.includes(data.slot)) { slot = data.slot; saveSession(); }
      if (data.type === 'pong') { ping = Math.min(9999, Math.max(0, Date.now() - Number(data.sentAt))); statusText(); }
      if (data.type === 'error') { appearancePending = null; appearancePicker.reject(); showError(typeof data.message === 'string' ? data.message : 'Das hat gerade nicht geklappt.'); }
      if (data.type !== 'state') return;
      if (!['lobby', 'countdown', 'playing', 'finished', 'reconnecting', 'expired'].includes(data.phase)) return;
      lastStateAt = Date.now(); phase = data.phase; players = Array.isArray(data.players) ? data.players : []; hostId = data.hostId || null;
      const ownAppearance = myPlayer()?.appearance;
      if (ownAppearance && (!appearanceReceived || (appearancePending && appearancePicker.matches(ownAppearance)))) {
        appearancePicker.confirm(ownAppearance); appearanceReceived = true; appearancePending = null;
      }
      countdown = Number(data.countdown) || 3; remaining = Number.isFinite(data.remaining) ? data.remaining : 180;
      stateWinner = data.winner ?? data.snapshot?.winner ?? null; stateReason = data.reason || data.snapshot?.reason || '';
      if (phase === 'lobby' || phase === 'countdown') { rematchPending = false; lastHealth.clear(); projectileIds.clear(); }
      if (phase === 'finished') rematchPending = Boolean(myPlayer()?.rematch);
      if (data.snapshot) { shotFeedback(data.snapshot); snapshot = data.snapshot; }
      else if (phase === 'lobby' || phase === 'countdown') snapshot = null;
      if (phase === 'expired') { stopped = true; current.close(1000, 'expired'); }
      render();
    } catch { showError('Ein Spielstand konnte nicht gelesen werden. Die Verbindung wird weiter geprüft.'); }
  };
  current.onerror = () => { if (socket === current) { $('connection-status').textContent = 'Verbindung unterbrochen'; } };
  current.onclose = event => {
    if (socket !== current) return;
    socket = null; clearInput();
    if (event.code === 4009 || ['In einem anderen Fenster verbunden.', 'Verbindung ersetzt.'].includes(event.reason)) {
      // A copied tab must not repeatedly steal the same seat back from its peer.
      stopped = true; clearTimeout(reconnectTimer); forgetSession(); token = null;
      phase = 'expired'; stateReason = 'replaced'; render(); return;
    }
    render();
    if (stopped || suspended || !token || phase === 'expired') return;
    if (!reconnectUntil) reconnectUntil = Date.now() + 20_000;
    if (Date.now() >= reconnectUntil) {
      phase = 'expired'; stopped = true;
      showError('Die Verbindung kam nicht rechtzeitig zurück. Du kannst ein neues Duell eröffnen.'); render(); return;
    }
    const delay = Math.min(3000, 400 * 2 ** reconnectAttempt++);
    reconnectTimer = setTimeout(connectSocket, Math.min(delay, Math.max(0, reconnectUntil - Date.now())));
  };
}
function leaveRoom({ notify = true, forget = true } = {}) {
  operation++; busy = false; stopped = true; clearTimeout(reconnectTimer);
  clearInput(); if (notify) send({ type: 'leave' }); if (forget) forgetSession();
  if (socket) { const old = socket; socket = null; old.close(1000, 'leave'); }
  token = slot = hostId = null; players = []; snapshot = null; phase = 'entry'; ping = null; wasSpectating = false;
  stateWinner = null; stateReason = ''; lastHealth.clear(); projectileIds.clear(); rematchPending = false;
  appearancePending = null; appearanceReceived = false; appearancePicker.reject();
}
function newRoom() {
  leaveRoom(); room = null; history.replaceState(null, '', '/duel'); showError(); warning(''); render(); $('duel-name').focus();
}
async function startFromLocation() {
  room = inviteRoom(location.hash); render();
  if (location.hash && !room) showError('Diese Einladung ist nicht gültig. Du kannst hier ein neues Duell eröffnen.');
  if (room) {
    const resume = readSession(room);
    if (resume) { $('duel-name').value = resume.name; await enterRoom(resume); }
  }
}

$('duel-name-form').addEventListener('submit', event => { event.preventDefault(); void enterRoom(); });
$('ready-button').onclick = () => { showError(); send({ type: 'ready', ready: !myPlayer()?.ready }); };
$('start-duel').onclick = () => { if (canHostStart(players, hostId, slot)) { showError(); send({ type: 'start' }); } };
$('rematch-button').onclick = () => { if (send({ type: 'rematch' })) { rematchPending = true; render(); } };
$('leave-duel').onclick = newRoom; $('new-duel').onclick = newRoom;
$('entry-new-duel').onclick = newRoom;
for (const id of ['solo-link', 'back-solo', 'result-solo']) $(id).addEventListener('click', () => leaveRoom());
$('copy-invite').onclick = async () => {
  const input = $('invite-link');
  try { await navigator.clipboard.writeText(input.value); $('invite-status').textContent = 'Einladung kopiert. Schick sie bis zu vier Freunden.'; }
  catch { input.focus(); input.select(); input.setSelectionRange(0, input.value.length); $('invite-status').textContent = 'Der Link ist markiert. Kopiere ihn über das Menü deines Browsers.'; }
};
show('share-invite', typeof navigator.share === 'function');
$('share-invite').onclick = async () => {
  try { await navigator.share({ title: 'Stubenflieger · Unser Duell', text: 'Flieg mit mir ein Papierflieger-Duell!', url: $('invite-link').value }); }
  catch (error) { if (error.name !== 'AbortError') { $('invite-link').focus(); $('invite-link').select(); $('invite-status').textContent = 'Teilen ist gerade nicht möglich. Kopiere den markierten Link.'; } }
};
document.addEventListener('keydown', event => {
  if (settingsOpen() || event.defaultPrevented || event.ctrlKey || event.altKey || event.metaKey || event.isComposing) return;
  if (event.code === 'KeyV' && ['playing', 'countdown', 'reconnecting'].includes(phase) && !event.target.closest?.('input,textarea,select,[contenteditable]:not([contenteditable="false"])')) {
    event.preventDefault(); if (!event.repeat) toggleCamera(); return;
  }
  if (phase !== 'playing' || spectating() || !connected()) return;
  if (event.target.closest?.('input,textarea,select,[contenteditable]:not([contenteditable="false"]),a,button:not(#fire-button)')) return;
  if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(event.code)) {
    event.preventDefault(); keys.add(event.code); $('fire-button').classList.toggle('active', currentInput().fire);
  }
});
document.addEventListener('keyup', event => { keys.delete(event.code); $('fire-button').classList.toggle('active', currentInput().fire); });
window.addEventListener('blur', clearInput);
document.addEventListener('visibilitychange', () => { clearInput(); saveSession(); if (!document.hidden && connected()) send({ type: 'ping', sentAt: Date.now() }); });
function moveStick(event) {
  if (event.pointerId !== stickPointer) return;
  const bounds = $('duel-stick').getBoundingClientRect(), radius = bounds.width / 2 - 22;
  const dx = (event.clientX - bounds.left - bounds.width / 2) / radius, dy = (event.clientY - bounds.top - bounds.height / 2) / radius;
  const length = Math.max(1, Math.hypot(dx, dy));
  touch.steer = clampAxis(dx / length); touch.pitch = clampAxis(-dy / length);
  $('duel-stick-knob').style.transform = `translate(${touch.steer * radius}px, ${-touch.pitch * radius}px)`;
}
$('duel-stick').addEventListener('pointerdown', event => {
  if (settingsOpen() || phase !== 'playing' || spectating() || stickPointer !== null || (event.pointerType === 'mouse' && event.button !== 0)) return;
  event.preventDefault(); stickPointer = event.pointerId; $('duel-stick').setPointerCapture(stickPointer); moveStick(event);
});
$('duel-stick').addEventListener('pointermove', moveStick);
for (const kind of ['pointerup', 'pointercancel', 'lostpointercapture']) $('duel-stick').addEventListener(kind, event => {
  if (event.pointerId !== stickPointer) return; stickPointer = null; touch.steer = touch.pitch = 0; $('duel-stick-knob').style.transform = '';
});
$('fire-button').addEventListener('pointerdown', event => {
  if (settingsOpen() || phase !== 'playing' || spectating() || firePointer !== null || (event.pointerType === 'mouse' && event.button !== 0)) return;
  event.preventDefault(); firePointer = event.pointerId; $('fire-button').setPointerCapture(firePointer); touch.fire = true; $('fire-button').classList.add('active');
});
$('fire-button').addEventListener('click', event => {
  if (settingsOpen() || event.detail !== 0 || phase !== 'playing' || spectating()) return;
  // Keyboard Enter and assistive activation fire a short pulse; pointer/Space hold is handled separately.
  touch.fire = true; $('fire-button').classList.add('active'); clearTimeout(fireReleaseTimer);
  fireReleaseTimer = setTimeout(() => { if (firePointer === null) touch.fire = false; $('fire-button').classList.toggle('active', currentInput().fire); }, 120);
});
for (const kind of ['pointerup', 'pointercancel', 'lostpointercapture']) $('fire-button').addEventListener(kind, event => {
  if (event.pointerId !== firePointer) return; firePointer = null; touch.fire = false; $('fire-button').classList.toggle('active', keys.has('Space'));
});
window.addEventListener('hashchange', () => { leaveRoom(); room = null; void startFromLocation(); });
window.addEventListener('pagehide', () => {
  clearInput(); saveSession(); suspended = true; clearTimeout(reconnectTimer);
  if (socket) { const old = socket; socket = null; old.close(1000, 'pagehide'); }
});
window.addEventListener('pageshow', event => { if (event.persisted) { suspended = false; if (room && token) connectSocket(); } });
function layout() {
  clearInput();
  const { width, height, left, top } = readMobileViewport();
  Object.assign($('duel-app').style, { width: width + 'px', height: height + 'px', minHeight: height + 'px', left: left + 'px', top: top + 'px' });
  Object.assign($('duel-canvas').style, { width: width + 'px', height: height + 'px', left: left + 'px', top: top + 'px' });
  document.documentElement.style.setProperty('--mobile-viewport-height', height + 'px');
  document.documentElement.style.setProperty('--mobile-viewport-width', width + 'px');
  view?.resize();
}
$('duel-settings-button').onclick = () => {
  clearInput();
  if (!settingsOpen()) $('duel-settings').showModal();
};
$('duel-close-settings').onclick = () => $('duel-settings').close();
$('duel-settings').addEventListener('close', clearInput);
const mobileSettings = createMobileSettings({
  sideSelect: $('duel-joystick-side'), autoFullscreenInput: $('duel-auto-fullscreen'),
  fullscreenButton: $('duel-fullscreen-button'), statusNode: $('duel-fullscreen-status'),
  onSideChange: clearInput, onViewportChange: layout,
});
layout();
setInterval(() => sendInput(), 50);
setInterval(() => {
  if (suspended || !connected()) return;
  send({ type: 'ping', sentAt: Date.now() }); saveSession();
  if (!document.hidden && (Date.now() - lastMessageAt > 15000 || (phase === 'playing' && Date.now() - lastStateAt > 10000))) socket.close(4000, 'stale');
}, 5000);
let lastFrame = performance.now();
function frame(now) {
  const dt = Math.min(.1, Math.max(0, (now - lastFrame) / 1000)); lastFrame = now;
  const active = phase === 'playing' && !settingsOpen() && !spectating() && connected() && !document.hidden && Date.now() - lastStateAt < 1500;
  if (phase === 'playing' && connected()) {
    const stale = Date.now() - lastStateAt >= 1500;
    show('duel-network', stale);
    if (stale) {
      $('network-title').textContent = 'Der Spielstand kommt gerade nicht an …';
      $('network-copy').textContent = 'Wir prüfen die Verbindung. Dein Flug geht weiter, sobald die Daten wieder da sind.';
    }
  }
  view?.update(snapshot, slot, dt, { ...currentInput(), active });
  requestAnimationFrame(frame);
}
try { view = createDuelView($('duel-canvas'), () => readMobileViewport()); view.setCameraMode(cameraMode); requestAnimationFrame(frame); void startFromLocation(); }
catch { showError('Die 3D-Ansicht konnte nicht starten. Lade die Seite in einem aktuellen Browser neu.'); $('create-duel').disabled = $('join-duel').disabled = true; }

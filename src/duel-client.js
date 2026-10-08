import { createDuelView } from './duel-view.js';
import { DUEL_SESSION_PREFIX, clampAxis, duelInput, inviteAddress, inviteRoom, pilotName, remainingTime } from './duel-controls.js';

const $ = id => document.getElementById(id);
const show = (id, visible) => { $(id).hidden = !visible; };
const keys = new Set(), touch = { steer: 0, pitch: 0, fire: false };
let view, room = null, token = null, slot = null, name = '', seq = 0;
let socket = null, phase = 'entry', players = [], snapshot = null, remaining = 180, countdown = 3;
let stateWinner = null, stateReason = '', busy = false, stopped = false, suspended = false, rematchPending = false;
let reconnectTimer, reconnectAttempt = 0, reconnectUntil = 0, lastMessageAt = 0, lastStateAt = 0, ping = null;
let stickPointer = null, firePointer = null, feedbackTimer, shotTimer, hitTimer, damageTimer, fireReleaseTimer;
let lastHealth = new Map(), projectileIds = new Set(), lastRenderedPhase = 'entry', operation = 0;

function showError(message = '') { $('duel-errors').textContent = message; show('duel-errors', Boolean(message)); }
function warning(message) { $('session-warning').textContent = message; show('session-warning', Boolean(message)); }
function feedback(message) {
  clearTimeout(feedbackTimer); $('duel-feedback').textContent = message;
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
function currentInput() { return duelInput(keys, touch); }
function sendInput(forceNeutral = false) {
  if (phase !== 'playing' || !connected() || (!forceNeutral && document.hidden)) return;
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
function otherPlayer() { return players.find(player => player.id !== slot); }
function statusText() {
  const status = $('connection-status');
  status.className = 'connection';
  if (!room) { status.textContent = 'Für zwei Piloten'; return; }
  if (connected()) {
    status.classList.add('online'); status.textContent = ping === null ? 'Verbunden' : `Verbunden · ${ping} ms`;
  } else {
    status.classList.add('lost'); status.textContent = phase === 'expired' ? 'Duell beendet' : 'Verbindung wird aufgebaut …';
  }
}
function renderHealth() {
  const participants = snapshot?.players || [];
  for (const [prefix, id, fallback] of [['own', slot, 'Du'], ['opponent', slot === 'p1' ? 'p2' : 'p1', 'Gegenüber']]) {
    const identity = players.find(player => player.id === id), plane = participants.find(player => player.id === id);
    const hp = Math.max(0, Math.min(100, Math.round(plane?.hp ?? 100))), label = identity?.name || fallback;
    $(`${prefix}-name`).textContent = label + (prefix === 'own' ? ' · DU' : '');
    $(`${prefix}-hp`).textContent = hp;
    const meter = $(`${prefix}-meter`);
    meter.setAttribute('aria-label', `${label}: Lebenspunkte`); meter.setAttribute('aria-valuenow', hp);
    meter.setAttribute('aria-valuetext', `${hp} von 100 Lebenspunkten`);
    meter.firstElementChild.style.width = `${hp}%`; meter.classList.toggle('low', hp <= 30);
  }
  $('duel-time').textContent = remainingTime(remaining);
}
function resultCopy() {
  const winner = stateWinner ?? snapshot?.winner;
  const opponent = otherPlayer()?.name || 'Dein Gegenüber';
  if (phase === 'expired' && stateReason === 'replaced') return { title: 'Du fliegst im anderen Fenster.', text: 'Dein Platz ist dort aktiv. Spiele dort weiter oder eröffne hier ein neues Duell.' };
  if (phase === 'expired') return { title: 'Dieses Duell ist beendet.', text: 'Der Raum ist nicht mehr verfügbar. Eröffne ein neues Duell und teile eine frische Einladung.' };
  const title = winner === 'draw' || !winner ? 'Unentschieden.' : winner === slot ? 'Du hast gewonnen!' : `${opponent} gewinnt.`;
  const reasons = {
    timeout: 'Die drei Minuten sind um. Die verbleibenden Lebenspunkte entscheiden.',
    time: 'Die drei Minuten sind um. Die verbleibenden Lebenspunkte entscheiden.',
    disconnect: 'Die Verbindung eines Piloten kam nicht rechtzeitig zurück.',
    disconnected: 'Die Verbindung eines Piloten kam nicht rechtzeitig zurück.',
    leave: 'Ein Pilot hat das laufende Duell verlassen.',
    left: 'Ein Pilot hat das laufende Duell verlassen.',
    forfeit: 'Ein Pilot hat das laufende Duell verlassen.',
    health: 'Ein Flugzeug hat keine Lebenspunkte mehr.',
    damage: 'Ein Flugzeug hat keine Lebenspunkte mehr.',
    knockout: 'Ein Flugzeug hat keine Lebenspunkte mehr.',
    server_restart: 'Das Duell wurde durch einen Neustart unterbrochen und endet unentschieden. Ihr könnt gemeinsam eine neue Runde beginnen.',
    server_error: 'Das Duell musste wegen eines Verbindungsfehlers beendet werden und wird als unentschieden gewertet. Ihr könnt eine neue Runde versuchen.',
  };
  return { title, text: reasons[stateReason || snapshot?.reason] || 'Guter Flug! Mit einer Revanche startet ihr beide wieder mit 100 Lebenspunkten.' };
}
function render() {
  show('duel-entry', phase === 'entry'); show('duel-lobby', phase === 'lobby');
  show('duel-result', phase === 'finished' || phase === 'expired');
  show('duel-hud', ['countdown', 'playing', 'reconnecting'].includes(phase));
  show('duel-help', ['countdown', 'playing', 'reconnecting'].includes(phase));
  show('duel-countdown', phase === 'countdown');
  show('duel-touch', phase === 'playing' && connected()); show('duel-reticle', phase === 'playing' && connected());
  show('leave-duel', Boolean(room && token)); show('back-solo', !token);
  document.body.classList.toggle('playing', phase === 'playing');
  $('create-duel').disabled = $('join-duel').disabled = busy;
  $('create-duel').textContent = busy ? 'Wird eröffnet …' : 'Duell eröffnen ↗';
  $('join-duel').textContent = busy ? 'Du kommst gleich dazu …' : 'Duell beitreten ↗';
  $('duel-name').disabled = busy;
  show('create-duel', !room); show('join-duel', Boolean(room));
  show('entry-new-duel', Boolean(room));
  $('entry-eyebrow').textContent = room ? 'DU BIST EINGELADEN' : 'DEIN PRIVATES DUELL';
  $('entry-form-title').textContent = room ? 'Steig mit ein.' : 'Bereit für Gegenwind?';
  $('entry-note').textContent = room ? 'Wähle deinen Namen. Sobald ihr beide bereit seid, startet euer Duell.' : 'Ohne Konto. Den Einladungslink bekommt nur, wer mitfliegen soll.';
  if (room) $('invite-link').value = inviteAddress(location.origin, room);
  for (const id of ['p1', 'p2']) {
    const player = players.find(candidate => candidate.id === id), card = $(`lobby-${id}`);
    card.querySelector('.pilot-name').textContent = player?.name ? player.name + (id === slot ? ' · DU' : '') : 'Noch frei';
    card.querySelector('.pilot-state').textContent = !player?.name ? 'Einladung teilen' : !player.connected ? 'Verbindung fehlt' : player.ready ? 'Bereit zum Start' : 'Noch nicht bereit';
    card.classList.toggle('is-ready', Boolean(player?.ready && player?.connected));
  }
  const ready = Boolean(myPlayer()?.ready);
  $('ready-button').textContent = ready ? 'Doch noch warten' : 'Ich bin bereit ↗';
  $('ready-button').setAttribute('aria-pressed', String(ready)); $('ready-button').disabled = !connected() || phase !== 'lobby';
  $('countdown-value').textContent = Math.max(1, Math.ceil(countdown));
  renderHealth(); statusText();
  const reconnecting = phase === 'reconnecting' || (!connected() && Boolean(token) && !['expired', 'entry'].includes(phase));
  show('duel-network', reconnecting);
  $('network-title').textContent = connected() ? 'Ein Pilot ist kurz weg …' : 'Verbindung wird wiederhergestellt …';
  $('network-copy').textContent = connected() ? 'Bis zu 20 Sekunden bleibt Zeit, zurückzukommen.' : 'Dein Platz bleibt kurz reserviert. Lass diese Seite geöffnet.';
  if (phase === 'finished' || phase === 'expired') {
    const copy = resultCopy(); $('duel-result-title').textContent = copy.title; $('duel-result-copy').textContent = copy.text;
    show('rematch-button', phase !== 'expired'); show('rematch-status', phase !== 'expired');
    $('rematch-button').disabled = rematchPending || !connected();
    $('rematch-button').textContent = rematchPending ? 'Du bist für die Revanche bereit' : 'Revanche ↗';
    $('rematch-status').textContent = rematchPending ? 'Jetzt fehlt noch die Zustimmung deines Gegenübers.' : 'Für eine Revanche müssen beide zustimmen.';
    $('result-score').replaceChildren();
    for (const plane of snapshot?.players || []) {
      const label = document.createElement('span'), hp = document.createElement('strong');
      hp.textContent = Math.max(0, Math.round(plane.hp)); label.append(hp, document.createTextNode(players.find(player => player.id === plane.id)?.name || 'Pilot'));
      $('result-score').append(label);
    }
  }
  if (lastRenderedPhase !== phase) {
    if (phase !== 'playing') clearInput();
    if (phase === 'playing') $('duel-canvas').focus({ preventScroll: true });
    if (phase === 'lobby') $('ready-button').focus({ preventScroll: true });
    if (phase === 'finished') $('rematch-button').focus({ preventScroll: true });
    if (phase === 'expired') $('new-duel').focus({ preventScroll: true });
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
    const result = await api(room ? `/api/duels/${room}/join` : '/api/duels', { name, ...(resume ? { token: resume.token } : {}) });
    if (requestId !== operation) return;
    if (!inviteRoom(`#room=${result.room}`) || typeof result.token !== 'string' || !['p1', 'p2'].includes(result.slot)) throw new Error('Die Einladung konnte nicht geöffnet werden. Bitte versuche es erneut.');
    room = result.room; token = result.token; slot = result.slot; seq = Number.isSafeInteger(resume?.seq) ? resume.seq : 0;
    history.replaceState(null, '', `/duel#room=${room}`);
    saveSession(); phase = 'lobby'; stopped = false; reconnectUntil = 0; reconnectAttempt = 0; players = [];
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
        feedback(`Gegenüber: −${Math.round(before - player.hp)} Lebenspunkte`);
      }
    }
    lastHealth.set(player.id, player.hp);
  }
}
function connectSocket() {
  if (!room || !token || stopped || suspended) return;
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
      if (data.type === 'welcome' && ['p1', 'p2'].includes(data.slot)) { slot = data.slot; saveSession(); }
      if (data.type === 'pong') { ping = Math.min(9999, Math.max(0, Date.now() - Number(data.sentAt))); statusText(); }
      if (data.type === 'error') showError(typeof data.message === 'string' ? data.message : 'Das hat gerade nicht geklappt.');
      if (data.type !== 'state') return;
      if (!['lobby', 'countdown', 'playing', 'finished', 'reconnecting', 'expired'].includes(data.phase)) return;
      lastStateAt = Date.now(); phase = data.phase; players = Array.isArray(data.players) ? data.players : [];
      countdown = Number(data.countdown) || 3; remaining = Number.isFinite(data.remaining) ? data.remaining : 180;
      stateWinner = data.winner ?? data.snapshot?.winner ?? null; stateReason = data.reason || data.snapshot?.reason || '';
      if (phase === 'lobby' || phase === 'countdown') { rematchPending = false; lastHealth.clear(); projectileIds.clear(); }
      if (data.snapshot) { shotFeedback(data.snapshot); snapshot = data.snapshot; }
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
  token = slot = null; players = []; snapshot = null; phase = 'entry'; ping = null;
  stateWinner = null; stateReason = ''; lastHealth.clear(); projectileIds.clear(); rematchPending = false;
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
$('rematch-button').onclick = () => { if (send({ type: 'rematch' })) { rematchPending = true; render(); } };
$('leave-duel').onclick = newRoom; $('new-duel').onclick = newRoom;
$('entry-new-duel').onclick = newRoom;
for (const id of ['solo-link', 'back-solo', 'result-solo']) $(id).addEventListener('click', () => leaveRoom());
$('copy-invite').onclick = async () => {
  const input = $('invite-link');
  try { await navigator.clipboard.writeText(input.value); $('invite-status').textContent = 'Einladung kopiert. Schick sie deinem Mitspieler.'; }
  catch { input.focus(); input.select(); input.setSelectionRange(0, input.value.length); $('invite-status').textContent = 'Der Link ist markiert. Kopiere ihn über das Menü deines Browsers.'; }
};
show('share-invite', typeof navigator.share === 'function');
$('share-invite').onclick = async () => {
  try { await navigator.share({ title: 'Stubenflieger · Unser Duell', text: 'Flieg mit mir ein Papierflieger-Duell!', url: $('invite-link').value }); }
  catch (error) { if (error.name !== 'AbortError') { $('invite-link').focus(); $('invite-link').select(); $('invite-status').textContent = 'Teilen ist gerade nicht möglich. Kopiere den markierten Link.'; } }
};
document.addEventListener('keydown', event => {
  if (event.defaultPrevented || event.ctrlKey || event.altKey || event.metaKey || event.isComposing || phase !== 'playing' || !connected()) return;
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
  if (phase !== 'playing' || stickPointer !== null || (event.pointerType === 'mouse' && event.button !== 0)) return;
  event.preventDefault(); stickPointer = event.pointerId; $('duel-stick').setPointerCapture(stickPointer); moveStick(event);
});
$('duel-stick').addEventListener('pointermove', moveStick);
for (const kind of ['pointerup', 'pointercancel', 'lostpointercapture']) $('duel-stick').addEventListener(kind, event => {
  if (event.pointerId !== stickPointer) return; stickPointer = null; touch.steer = touch.pitch = 0; $('duel-stick-knob').style.transform = '';
});
$('fire-button').addEventListener('pointerdown', event => {
  if (phase !== 'playing' || firePointer !== null || (event.pointerType === 'mouse' && event.button !== 0)) return;
  event.preventDefault(); firePointer = event.pointerId; $('fire-button').setPointerCapture(firePointer); touch.fire = true; $('fire-button').classList.add('active');
});
$('fire-button').addEventListener('click', event => {
  if (event.detail !== 0 || phase !== 'playing') return;
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
window.addEventListener('resize', () => view?.resize());
setInterval(() => sendInput(), 50);
setInterval(() => {
  if (suspended || !connected()) return;
  send({ type: 'ping', sentAt: Date.now() }); saveSession();
  if (!document.hidden && (Date.now() - lastMessageAt > 15000 || (phase === 'playing' && Date.now() - lastStateAt > 10000))) socket.close(4000, 'stale');
}, 5000);
let lastFrame = performance.now();
function frame(now) {
  const dt = Math.min(.1, Math.max(0, (now - lastFrame) / 1000)); lastFrame = now;
  const active = phase === 'playing' && connected() && !document.hidden && Date.now() - lastStateAt < 1500;
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
try { view = createDuelView($('duel-canvas')); requestAnimationFrame(frame); void startFromLocation(); }
catch { showError('Die 3D-Ansicht konnte nicht starten. Lade die Seite in einem aktuellen Browser neu.'); $('create-duel').disabled = $('join-duel').disabled = true; }

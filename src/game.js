import { Vector3, MathUtils, Euler, Quaternion } from 'three';
import { HOUSE, getRoomAt } from './house.js';
import { flightTuning } from './aircraft.js';
import { flightForces } from './flight.js';
import { createPhysics } from './physics.js';
import { createScene } from './scene.js';
import { createProgression, calculateRunScore, CATALOG, ROOM_BONUS } from './progression.js';
import { createRunState } from './run.js';
import { createShop } from './shop.js';
import { createLeaderboard } from './leaderboard.js';
import { createKeyboardControls } from './keyboard.js';
import { createDialogs } from './dialogs.js';

const $ = id => document.getElementById(id);
const show = (id, visible) => { $(id).hidden = !visible; };
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const dialogs = createDialogs(document, $('app'));
const progression = createProgression();
const leaderboard = createLeaderboard();
const PENDING_KEY = 'stubenflieger.pending-run.v1';
const totalRooms = new Set(HOUSE.rooms.map(room => room.bonusId || room.id)).size;
const nameOf = id => CATALOG.find(item => item.id === id)?.name || id;
let keyboard, physics, view, run, tuning, equipped, shop;
let state = 'ready', paused = false, charging = false, power = 0, chargeStart = 0, dragPower = 0, launchTurn = 0;
let heading = 0, speed = 0, verticalSpeed = 0, flightTime = 0, clock = 0, endingAt = 0, endReason = '', won = false;
let chargePointer = null, stickPointer = null, chargeOrigin = { x: 0, y: 0 }, touch = { steer: 0, pitch: 0 }, input = { steer: 0, pitch: 0 };
let sensorEnabled = false, sensor = null, calibration = null, sensorAt = 0, sensorTimeout, inThermal = false, nearCeiling = false;
let sound = false, audio, rotation = 0, settled = false, launched = false, storageError = '';
let firstDiscoveryBonus = 0, rewardUntil = 0, retryStarAt = 0;
let liftUntil = 0, turboUntil = 0, magnetUntil = 0, cushion = false, recoveryUntil = 0;
const keys = new Set(), position = new Vector3(), previousPosition = new Vector3(), velocity = new Vector3();
const direction = new Vector3(), cameraGoal = new Vector3(), lookGoal = new Vector3(), lookAt = new Vector3();
const orientation = new Quaternion(), flightEuler = new Euler(0, 0, 0, 'YXZ');
const hint = message => { $('hint').textContent = message; };
$('retry').onclick = () => location.reload();
try {
  const saved = Number(localStorage.getItem('stubenflieger.rotation'));
  if ([0, 90, 180, 270].includes(saved)) rotation = saved;
} catch {}
const viewport = () => rotation % 180 ? { width: innerHeight, height: innerWidth } : { width: innerWidth, height: innerHeight };
function layout() {
  const { width, height } = viewport();
  Object.assign($('app').style, { width: width + 'px', height: height + 'px', transform: `translate(-50%, -50%) rotate(${rotation}deg)` });
  $('rotation-value').textContent = rotation + '°';
  window.dispatchEvent(new Event('gameviewportchange'));
}
$('rotate-view').onclick = () => {
  rotation = (rotation + 90) % 360;
  try { localStorage.setItem('stubenflieger.rotation', String(rotation)); } catch {}
  layout();
};
window.addEventListener('resize', layout);
layout();

function reportStorage(message) {
  storageError = message;
  $('storage-status').textContent = message;
  $('result-storage').textContent = message;
}
function recoverRun() {
  try {
    const pending = JSON.parse(sessionStorage.getItem(PENDING_KEY) || 'null');
    if (pending?.id && pending.summary) {
      progression.creditRun(pending.id, pending.summary);
      sessionStorage.removeItem(PENDING_KEY);
    }
  } catch (error) { reportStorage(error.message || 'Der letzte Run konnte noch nicht gespeichert werden.'); }
}
recoverRun();
if (!progression.getStatus().available) reportStorage(progression.getStatus().error);
function snapshotRun() {
  if (!launched || settled || !run) return;
  try { sessionStorage.setItem(PENDING_KEY, JSON.stringify({ id: run.id, summary: run.summary(flightTime), savedAt: Date.now() })); }
  catch { reportStorage('Der laufende Run kann bei einem Neuladen verloren gehen. Website-Daten sind nicht verfügbar.'); }
}
function settleRun() {
  if (!launched || settled || !run) return null;
  const summary = run.summary(flightTime);
  snapshotRun();
  try {
    const reward = progression.creditRun(run.id, summary);
    settled = true;
    try { sessionStorage.removeItem(PENDING_KEY); } catch {}
    reportStorage('');
    updateProfileLabels();
    return reward;
  } catch (error) { reportStorage(error.message); return null; }
}
window.addEventListener('pagehide', snapshotRun);
document.addEventListener('visibilitychange', () => { if (document.hidden) snapshotRun(); });

function tone(frequency, duration = .12, type = 'sine', volume = .06) {
  if (!sound) return;
  try {
    audio ??= new (window.AudioContext || window.webkitAudioContext)();
    if (audio.state === 'suspended') void audio.resume();
    const oscillator = audio.createOscillator(), gain = audio.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, audio.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(35, frequency * .55), audio.currentTime + duration);
    gain.gain.setValueAtTime(volume, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, audio.currentTime + duration);
    oscillator.connect(gain); gain.connect(audio.destination);
    oscillator.start(); oscillator.stop(audio.currentTime + duration);
  } catch {}
}
$('sound').onclick = () => {
  sound = !sound; $('sound').textContent = sound ? '♪ AN' : '♪ AUS';
  $('sound').setAttribute('aria-label', sound ? 'Ton ausschalten' : 'Ton einschalten'); tone(600);
};
function releaseInputs() {
  keyboard?.clear(); cancelCharge(); releaseStick(); keys.clear();
  touch = { steer: 0, pitch: 0 }; input = { steer: 0, pitch: 0 };
}
function updateProfileLabels() {
  const profile = progression.getProfile();
  $('wallet').textContent = profile.points.toLocaleString('de-DE') + ' P';
  for (const node of document.querySelectorAll('[data-discoveries]')) node.textContent = `Entdeckt: ${profile.discoveredStarIds.length} / ${HOUSE.collectibles.length} Sterne`;
  $('aircraft-summary').textContent = `${nameOf('plane:' + profile.equipped.form)} · ${Math.round(profile.equipped.size * 100)} % Größe · ${profile.equipped.boosts.length}/2 Boosts`;
}
function applyDoor(id, open) { physics.setDoorOpen(id, open); view.setDoorOpen(id, open); }
function prepareRun() {
  try { progression.refresh(); } catch (error) { reportStorage(error.message); }
  const profile = progression.getProfile();
  run = createRunState(HOUSE, profile); equipped = profile.equipped;
  tuning = flightTuning(equipped.form, equipped.size);
  physics.configureAircraft(equipped.form, equipped.size); physics.reset();
  view.setAircraft(equipped.form, equipped.size, equipped.effect);
  view.resetCollectibles(profile.discoveredStarIds);
  firstDiscoveryBonus = rewardUntil = retryStarAt = 0; show('star-reward', false);
  for (const door of HOUSE.doors) applyDoor(door.id, run.opened.has(door.id));
  settled = launched = false; liftUntil = turboUntil = magnetUntil = recoveryUntil = 0; cushion = false;
  heading = HOUSE.start.heading || 0; speed = verticalSpeed = flightTime = power = dragPower = launchTurn = 0;
  view.plane.position.copy(physics.plane.position); view.plane.quaternion.copy(physics.plane.quaternion);
  view.resetTrail(view.plane.position); view.updateSling(0);
  updateProfileLabels(); updateBoosts(); updateHUD();
}
function reset() {
  if (launched && !settled && !settleRun()) {
    hint('Bitte erlaube Website-Daten, damit deine Punkte vor dem Neustart gespeichert werden können.');
    if (state === 'flying') finish('Run beendet.');
    else if (state !== 'result') result();
    return;
  }
  state = 'ready'; paused = false; won = inThermal = nearCeiling = false;
  releaseInputs(); prepareRun();
  for (const id of ['stats', 'flight-controls', 'pause', 'wind-toast', 'door-progress', 'ceiling-warning']) show(id, false);
  for (const id of ['launch-panel', 'level-label', 'footer']) show(id, true);
  document.body.classList.remove('flying');
  $('mission-copy').textContent = `Sammle ${HOUSE.collectibles.length} Sterne im ganzen Haus. Sterne öffnen Türen, neue Räume bringen je ${ROOM_BONUS} Punkte. Aufwinde verbinden die Stockwerke.`;
  $('star-goal').textContent = ' / ' + HOUSE.collectibles.length;
  hint('Sterne öffnen Türen. Auch unter Tischen und Stühlen warten welche.');
  if (sensorEnabled && sensor) calibration = { ...sensor };
  followCamera(true); dialogs.close($('launch'));
}
$('reset').onclick = reset; $('again').onclick = reset; $('menu-restart').onclick = reset;
function beginCharge() {
  if (state !== 'ready' || paused || charging || dialogs.current()) return false;
  charging = true; chargeStart = performance.now(); dragPower = 0; power = .12; tone(160, .07); return true;
}
function cancelCharge() {
  if (chargePointer !== null && $('launch').hasPointerCapture(chargePointer)) $('launch').releasePointerCapture(chargePointer);
  chargePointer = null; charging = false; power = dragPower = 0;
  view?.updateSling(0); $('power-fill').style.transform = 'scaleX(0)';
  $('launch-label').textContent = 'Ziehen & loslassen'; $('power-label').textContent = 'GUMMISCHLEUDER ↗';
}
function quickLaunch() { if (beginCharge()) { power = .75; launch(); } }
function launch() {
  if (!charging || state !== 'ready' || dialogs.current()) return;
  charging = false; state = 'flying'; launched = true; leaderboard.beginRun();
  flightTime = 0; heading = (HOUSE.start.heading || 0) + launchTurn;
  speed = tuning.speed * (.75 + power * .35); verticalSpeed = .08 + power * .1;
  physics.plane.velocity.setZero(); physics.plane.collisionFilterMask = -1;
  flightEuler.set(0, -heading, 0, 'YXZ'); orientation.setFromEuler(flightEuler);
  physics.plane.quaternion.copy(orientation);
  view.resetTrail(new Vector3().copy(physics.plane.position)); view.updateSling(0);
  if (sensorEnabled && sensor) calibration = { ...sensor };
  for (const id of ['launch-panel', 'level-label', 'footer']) show(id, false);
  for (const id of ['stats', 'flight-controls', 'pause', 'door-progress']) show(id, true);
  document.body.classList.add('flying'); hint('Sterne sammeln, Türen öffnen. Im türkisen Aufwind steigen.');
  snapshotRun(); tone(480, .4, 'triangle', .12); $('game').focus({ preventScroll: true });
}

function rotateInput(x, y) {
  const angle = rotation * Math.PI / 180;
  return { x: x * Math.cos(angle) + y * Math.sin(angle), y: -x * Math.sin(angle) + y * Math.cos(angle) };
}
$('launch').addEventListener('pointerdown', event => {
  if (chargePointer !== null || !beginCharge()) return;
  event.preventDefault(); chargePointer = event.pointerId; chargeOrigin = { x: event.clientX, y: event.clientY };
  $('launch').setPointerCapture(event.pointerId);
});
$('launch').addEventListener('pointermove', event => {
  if (event.pointerId !== chargePointer || !charging) return;
  const offset = rotateInput(event.clientX - chargeOrigin.x, event.clientY - chargeOrigin.y);
  dragPower = clamp(offset.y / 130, 0, 1); launchTurn = clamp(offset.x / 250, -.45, .45);
});
$('launch').addEventListener('pointerup', event => {
  if (event.pointerId === chargePointer) { chargePointer = null; launch(); }
});
$('launch').addEventListener('pointercancel', cancelCharge);
$('launch').addEventListener('click', event => { if (event.detail === 0) quickLaunch(); });
function sensorAngles(beta, gamma, angle) {
  const b = beta * Math.PI / 180, g = gamma * Math.PI / 180, a = angle * Math.PI / 180;
  const x = -Math.cos(b) * Math.sin(g), y = Math.sin(b), z = Math.cos(b) * Math.cos(g);
  const rx = x * Math.cos(a) - y * Math.sin(a), ry = x * Math.sin(a) + y * Math.cos(a);
  return { roll: Math.atan2(-rx, Math.hypot(ry, z)) * 180 / Math.PI, pitch: Math.atan2(ry, z) * 180 / Math.PI };
}
function calibrate() {
  if (!sensor) return;
  calibration = { ...sensor }; hint('Diese Haltung ist jetzt die Mitte.');
  $('control-note').textContent = 'Kalibriert. Seitlich neigen zum Lenken, vor/zurück für die Höhe.';
}
async function enableSensor() {
  if (!window.DeviceOrientationEvent) { $('control-note').textContent = 'Keine Sensoren verfügbar. Nutze Touch oder WASD / Pfeiltasten.'; return; }
  try {
    if (typeof DeviceOrientationEvent.requestPermission === 'function' && await DeviceOrientationEvent.requestPermission() !== 'granted') {
      $('control-note').textContent = 'Sensorzugriff abgelehnt. Die Touch-Steuerung funktioniert weiter.'; return;
    }
    sensorEnabled = true; calibration = null;
    $('gyro').textContent = 'Warte auf Sensor …'; $('control-note').textContent = 'Halte dein iPhone in deiner normalen Spielhaltung.';
    clearTimeout(sensorTimeout);
    sensorTimeout = setTimeout(() => { if (!sensor) { $('gyro').textContent = 'Sensoren erneut versuchen'; $('control-note').textContent = 'Kein Sensorsignal. In Safari öffnen oder Touch nutzen.'; } }, 3000);
  } catch { $('control-note').textContent = 'Sensoren nicht verfügbar. Nutze den Touch-Kreis.'; }
}
window.addEventListener('deviceorientation', event => {
  if (!sensorEnabled || !Number.isFinite(event.beta) || !Number.isFinite(event.gamma)) return;
  sensor = sensorAngles(event.beta, event.gamma, (screen.orientation?.angle ?? window.orientation ?? 0) + rotation);
  sensorAt = performance.now();
  if (!calibration) { calibration = { ...sensor }; $('gyro').textContent = '✓ Neigung aktiv'; $('control-note').textContent = 'Aktiv. Beim Start wird deine Haltung kalibriert.'; clearTimeout(sensorTimeout); }
});
const resetCalibration = () => { sensor = calibration = null; };
window.addEventListener('orientationchange', resetCalibration); screen.orientation?.addEventListener('change', resetCalibration);
window.addEventListener('gameviewportchange', resetCalibration);
$('gyro').onclick = () => sensorEnabled && sensor ? calibrate() : void enableSensor();
$('calibrate').onclick = () => sensorEnabled && sensor ? calibrate() : void enableSensor();
function moveStick(event) {
  const rect = $('joystick').getBoundingClientRect(), radius = $('joystick').clientWidth * .32;
  const offset = rotateInput(event.clientX - rect.left - rect.width / 2, event.clientY - rect.top - rect.height / 2);
  const scale = Math.min(1, radius / (Math.hypot(offset.x, offset.y) || 1));
  touch = { steer: offset.x * scale / radius, pitch: -offset.y * scale / radius };
  $('stick').style.transform = `translate(${offset.x * scale}px,${offset.y * scale}px)`;
}
$('joystick').addEventListener('pointerdown', event => {
  if (stickPointer !== null) return;
  event.preventDefault(); stickPointer = event.pointerId; $('joystick').setPointerCapture(event.pointerId); moveStick(event);
});
$('joystick').addEventListener('pointermove', event => { if (event.pointerId === stickPointer) moveStick(event); });
function releaseStick() {
  if (stickPointer !== null && $('joystick').hasPointerCapture(stickPointer)) $('joystick').releasePointerCapture(stickPointer);
  stickPointer = null; touch = { steer: 0, pitch: 0 }; $('stick').style.transform = 'translate(0,0)';
}
$('joystick').addEventListener('pointerup', releaseStick); $('joystick').addEventListener('pointercancel', releaseStick);


function pause(value = !paused) {
  if (state !== 'flying') return;
  paused = value; keyboard?.clear(); releaseStick();
  if (paused) { snapshotRun(); dialogs.open('paused', $('resume')); } else dialogs.close($('game'));
}
$('pause').onclick = () => pause(); $('resume').onclick = () => pause(false);
$('pause-finish').onclick = () => { dialogs.close(); paused = false; finish('Run abgeschlossen. Deine Punkte kommen ins Guthaben.'); };
function suspend() {
  releaseStick(); snapshotRun();
  if (state === 'flying') { paused = true; if (!dialogs.current()) dialogs.open('paused', $('resume')); }
}
function finish(reason, success = false) {
  if (state !== 'flying') return;
  keyboard?.clear(); releaseStick(); state = 'ending'; paused = false;
  endReason = reason; won = success; endingAt = clock;
  show('wind-toast', false); show('flight-controls', false); show('pause', false); show('ceiling-warning', false);
  physics.plane.velocity.setZero(); settleRun();
  tone(success ? 740 : 120, .5, success ? 'sine' : 'triangle', .1);
}
function result() {
  state = 'result';
  const summary = run.summary(flightTime), score = calculateRunScore(summary);
  $('result-eyebrow').textContent = won ? 'DAS GANZE HAUS GESCHAFFT' : 'RUN ABGESCHLOSSEN';
  $('result-title').textContent = won ? 'Alle Sterne an Bord.' : 'Noch eine Runde?';
  $('result-copy').textContent = endReason;
  $('result-time').textContent = flightTime.toFixed(1) + ' s'; $('result-rooms').textContent = summary.roomIds.length;
  $('result-stars').textContent = `${run.stars.size} / ${HOUSE.collectibles.length}`;
  $('result-reward').textContent = `+${(score + firstDiscoveryBonus).toLocaleString('de-DE')} Punkte · davon ${firstDiscoveryBonus.toLocaleString('de-DE')} Erstfundbonus und ${summary.roomIds.length * ROOM_BONUS} Raumbonus${settled ? ' · gespeichert' : ' · noch nicht vollständig gespeichert'}`;
  leaderboard.setResult(summary); updateProfileLabels(); keyboard?.clear(); dialogs.open('result', $('again'));
}
let leaderboardReturn = 'menu', menuReturn = null, shopReturn = null;
function openMenu() {
  menuReturn = dialogs.current(); releaseInputs();
  if (state === 'flying') paused = true;
  $('menu-shop').disabled = state === 'flying' || state === 'ending';
  $('menu-shop').textContent = state === 'flying' ? 'Shop nach dem Run verfügbar' : 'Shop & Flugzeug';
  dialogs.open('menu', $('close-menu'));
}
function closeMenu() {
  if (state === 'flying' && paused) dialogs.open('paused', $('resume'));
  else if (state === 'result') dialogs.open('result', $('result-menu'));
  else dialogs.close($('menu-button'));
}
function openLeaderboard(source) {
  leaderboardReturn = source; releaseInputs();
  if (state === 'flying') paused = true;
  dialogs.open('leaderboard', $('close-leaderboard')); void leaderboard.refresh();
}
function closeLeaderboard() {
  if (leaderboardReturn === 'menu') dialogs.open('menu', $('menu-leaderboard'));
  else if (state === 'result') dialogs.open('result', $('result-leaderboard'));
  else if (state === 'flying' && paused) dialogs.open('paused', $('resume'));
  else dialogs.close($('launch'));
}
function openShop() {
  if (!['ready', 'result'].includes(state)) { hint('Den Shop kannst du vor oder nach deinem Run öffnen.'); return; }
  if (launched && !settled && !settleRun()) return;
  shopReturn = dialogs.current(); releaseInputs(); shop.render(); dialogs.open('shop', $('close-shop'));
}
function closeShop() {
  if (state === 'ready') { prepareRun(); followCamera(true); }
  if (shopReturn === 'menu') dialogs.open('menu', $('menu-shop'));
  else if (state === 'result') dialogs.open('result', $('result-shop'));
  else dialogs.close($('start-shop'));
}
shop = createShop({ container: $('shop-content'), progression, onChange: updateProfileLabels, onClose: closeShop });
$('start-shop').onclick = openShop; $('result-shop').onclick = openShop; $('menu-shop').onclick = openShop; $('close-shop').onclick = closeShop;
$('menu-button').onclick = openMenu; $('close-menu').onclick = closeMenu;
$('menu-leaderboard').onclick = () => openLeaderboard('menu'); $('result-leaderboard').onclick = () => openLeaderboard('result');
$('close-leaderboard').onclick = closeLeaderboard; $('pause-menu').onclick = openMenu; $('result-menu').onclick = openMenu;
keyboard = createKeyboardControls({ window, document, keys, getState: () => state, getDialog: () => dialogs.current(), launcher: $('launch'), actions: {
  beginCharge, cancelCharge, release: launch, quickLaunch, reset, pause: () => pause(), suspend,
  menu: openMenu, closeMenu, closeBoard: closeLeaderboard, shop: openShop, closeShop, boost: useBoost,
  board: () => { if (dialogs.current() !== 'leaderboard') openLeaderboard(dialogs.current()); }, sound: () => $('sound').click(),
} });
function updateBoosts() {
  $('boost-controls').replaceChildren();
  run.charges.forEach((boost, index) => {
    const button = document.createElement('button'); button.type = 'button';
    button.textContent = `${index + 1} · ${nameOf('boost:' + boost)}${run.used.has(boost) ? ' ✓' : ''}`;
    button.disabled = run.used.has(boost); button.onclick = () => useBoost(index);
    button.setAttribute('aria-label', `${nameOf('boost:' + boost)}${run.used.has(boost) ? ', verbraucht' : ', einmal in diesem Run'}`);
    $('boost-controls').append(button);
  });
}
function useBoost(index) {
  if (state !== 'flying' || paused || dialogs.current()) return;
  const boost = run.useBoost(index); if (!boost) return;
  if (boost === 'lift') liftUntil = clock + 1.25;
  if (boost === 'turbo') turboUntil = clock + 3;
  if (boost === 'magnet') magnetUntil = clock + 6;
  if (boost === 'cushion') cushion = true;
  updateBoosts(); tone(740, .2); hint(nameOf('boost:' + boost) + ' aktiviert.');
  $('game').focus({ preventScroll: true });
}
function updateHUD() {
  if (!run || !physics) return;
  const room = getRoomAt(physics.plane.position), summary = run.summary(flightTime), nextDoor = run.nextDoor();
  $('time').textContent = flightTime.toFixed(1) + ' s'; $('height').textContent = physics.plane.position.y.toFixed(1) + ' m';
  $('rooms').textContent = run.visited.size + ' / ' + totalRooms; $('stars').textContent = run.stars.size;
  $('run-points').textContent = (calculateRunScore(summary) + firstDiscoveryBonus).toLocaleString('de-DE');
  $('flight-level').textContent = (room?.name || 'Über dem Garten').toUpperCase();
  const missing = nextDoor ? Math.max(0, nextDoor.threshold - run.stars.size) : 0;
  $('door-progress').textContent = nextDoor ? `${nextDoor.name}: noch ${missing} ${missing === 1 ? 'Stern' : 'Sterne'}` : 'Alle Türen offen · finde die übrigen Sterne';
  $('height').classList.toggle('danger', nearCeiling);
  show('ceiling-warning', nearCeiling && state === 'flying');
}
function followCamera(immediate = false, dt = .016) {
  position.copy(physics.plane.position); direction.set(Math.sin(heading), 0, -Math.cos(heading));
  cameraGoal.copy(position).addScaledVector(direction, state === 'ready' ? -.42 : -1.45);
  if (state === 'ready') cameraGoal.x -= 1.25;
  cameraGoal.y += state === 'ready' ? .95 : .62;
  cameraGoal.copy(physics.traceCamera(position, cameraGoal, .12));
  if (immediate) view.camera.position.copy(cameraGoal);
  else {
    view.camera.position.lerp(cameraGoal, 1 - Math.exp(-dt * 9));
    view.camera.position.copy(physics.traceCamera(position, view.camera.position, .1));
  }
  lookGoal.copy(position).addScaledVector(direction, state === 'ready' ? .25 : 1.3); lookGoal.y += .08;
  if (immediate) lookAt.copy(lookGoal); else lookAt.lerp(lookGoal, 1 - Math.exp(-dt * 9));
  view.camera.lookAt(lookAt);
}
function readFlightInput(now, dt) {
  let steer = 0, pitch = 0;
  if (sensorEnabled && sensor && calibration && now - sensorAt < 1500) {
    const difference = (a, b) => (a - b + 540) % 360 - 180;
    steer = clamp(difference(sensor.roll, calibration.roll) / 28, -1, 1);
    pitch = clamp(difference(sensor.pitch, calibration.pitch) / 28, -1, 1);
    if (Math.abs(steer) < .06) steer = 0; if (Math.abs(pitch) < .06) pitch = 0;
  }
  if (stickPointer !== null) ({ steer, pitch } = touch);
  if (keys.has('ArrowLeft') || keys.has('KeyA')) steer = -1;
  if (keys.has('ArrowRight') || keys.has('KeyD')) steer = 1;
  if (keys.has('ArrowUp') || keys.has('KeyW')) pitch = 1;
  if (keys.has('ArrowDown') || keys.has('KeyS')) pitch = -1;
  input.steer = MathUtils.damp(input.steer, steer, 9, dt); input.pitch = MathUtils.damp(input.pitch, pitch, 7, dt);
}
let previousFrame = performance.now(), hudTime = 0, saveTime = 0;
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(Math.max(0, (now - previousFrame) / 1000), .04); previousFrame = now;
  if (!view) return;
  if (paused || dialogs.current()) { view.render(); return; }
  clock += dt;
  if (rewardUntil && clock > rewardUntil) { rewardUntil = 0; show('star-reward', false); }
  if (state === 'ready') {
    const aim = Number(keys.has('ArrowRight') || keys.has('KeyD')) - Number(keys.has('ArrowLeft') || keys.has('KeyA'));
    launchTurn = clamp(launchTurn + aim * .8 * dt, -.7, .7);
    heading = (HOUSE.start.heading || 0) + launchTurn;
    if (charging) {
      power = Math.max(.12, dragPower, clamp((now - chargeStart) / 1400, 0, 1));
      $('power-fill').style.transform = `scaleX(${power})`; $('launch-label').textContent = Math.round(power * 100) + ' % gespannt';
      $('power-label').textContent = 'LOSLASSEN ↗'; view.updateSling(power);
    }
    view.plane.rotation.set(0, -heading, 0, 'YXZ');
  }
  if (state === 'flying') {
    flightTime += dt; readFlightInput(now, dt);
    heading += input.steer * tuning.turnRate * dt;
    position.copy(physics.plane.position); previousPosition.copy(position);
    const thermal = HOUSE.thermals.find(item => Math.hypot(position.x - item.x, position.z - item.z) < item.r && position.y >= item.y && position.y < item.y + item.height);
    show('wind-toast', Boolean(thermal));
    if (thermal && !inThermal) tone(800, .3, 'sine', .04);
    inThermal = Boolean(thermal);
    const cruising = tuning.speed * (clock < turboUntil ? 1.65 : 1);
    speed = MathUtils.damp(speed, cruising, .75, dt);
    const { ride, x, z, targetVertical } = flightForces({ position, input, heading, speed, tuning, thermal, lift: clock < liftUntil });
    verticalSpeed = MathUtils.damp(verticalSpeed, targetVertical, 4, dt);
    velocity.set(x, verticalSpeed, z);
    flightEuler.set(Math.atan2(verticalSpeed, ride ? Math.max(2, speed) : speed) * .7, -heading, -input.steer * .42, 'YXZ');
    orientation.setFromEuler(flightEuler);
    // After a cushion contact, retrace a short safe segment before turning around.
    if (clock < recoveryUntil) {
      velocity.copy(recoveryVelocity); orientation.copy(recoveryOrientation);
    }
    const contact = physics.advance(dt, velocity, orientation);
    view.plane.position.copy(physics.plane.position); view.plane.quaternion.copy(physics.plane.quaternion);
    const rewards = new Map();
    const pickups = view.collectStars(star => {
      if (clock < retryStarAt || !physics.canCollectStar(star, previousPosition, clock < magnetUntil ? .75 : 0)) return false;
      try {
        // Persist discovery and its extra wallet credit before removing the star.
        rewards.set(star.id, progression.creditStar(run.id, star.id));
        reportStorage(''); return true;
      } catch (error) {
        retryStarAt = clock + 1; reportStorage(error.message);
        $('star-reward').textContent = 'Stern noch nicht gespeichert – bitte Website-Daten erlauben.';
        $('star-reward').dataset.first = 'false'; rewardUntil = clock + 4; show('star-reward', true);
        return false;
      }
    });
    for (const id of pickups) {
      const opened = run.collect(id);
      if (!opened) continue;
      const reward = rewards.get(id); firstDiscoveryBonus += reward.bonus;
      $('star-reward').textContent = reward.firstDiscovery ? `Erstfund! +${reward.totalPoints} Punkte` : `+${reward.totalPoints} Punkte`;
      $('star-reward').dataset.first = String(reward.firstDiscovery);
      rewardUntil = clock + 2.5; show('star-reward', true);
      for (const door of opened) applyDoor(door.id, true);
      tone(1100, .1);
      hint(opened.length ? opened.map(door => door.name).join(' · ') + ' ist jetzt offen!' : `Stern gesammelt! ${run.stars.size}/${HOUSE.collectibles.length}`);
    }
    const room = getRoomAt(physics.plane.position);
    if (room && run.enterRoom(room.id)) { hint(`${room.name} entdeckt · +${ROOM_BONUS} Punkte`); tone(880, .2); snapshotRun(); }
    if (pickups.length) { updateProfileLabels(); updateHUD(); snapshotRun(); }
    if (contact.collided) {
      if (cushion) {
        cushion = false;
        recoveryVelocity.copy(velocity).multiplyScalar(-.55); recoveryOrientation.copy(physics.plane.quaternion);
        recoveryUntil = clock + .6; heading += Math.PI;
        hint('Luftpolster! Eine Berührung abgefangen.'); tone(260, .18);
      } else finish(contact.body?.kind === 'floor' ? 'Der Boden kam näher als geplant.' : 'Ein Flügel oder der Rumpf hat ein Hindernis berührt.');
    }
    if (run.summary().complete) finish('Alle Sterne gefunden – vom Keller bis in den Garten!', true);
    const b = HOUSE.bounds, p = physics.plane.position;
    if (p.x < b.minX || p.x > b.maxX || p.z < b.minZ || p.z > b.maxZ || p.y < b.minY || p.y > b.maxY) finish('Du hast das Grundstück verlassen.');
    view.updateTrail(physics.plane.position);
    saveTime += dt; if (saveTime > 1) { saveTime = 0; snapshotRun(); }
  }
  if (state === 'ending' && clock - endingAt > .55) result();
  view.update(dt, clock); nearCeiling = view.updateCeiling(physics.plane.position);
  followCamera(false, dt); hudTime += dt; if (hudTime > .1) { hudTime = 0; updateHUD(); }
  view.render();
}
const recoveryVelocity = new Vector3(), recoveryOrientation = new Quaternion();
try {
  physics = createPhysics(HOUSE, progression.getProfile().equipped);
  view = createScene($('game'), physics, viewport);
  reset(); show('loading', false); requestAnimationFrame(frame);
} catch (error) { console.error(error); show('loading', false); dialogs.open('error'); }
$('game').addEventListener('webglcontextlost', event => {
  event.preventDefault(); keyboard.clear(); releaseStick(); snapshotRun(); paused = true;
  $('error-copy').textContent = 'Die 3D-Darstellung wurde unterbrochen. Dein letzter Punktestand wird beim Neuladen wiederhergestellt.'; dialogs.open('error');
});

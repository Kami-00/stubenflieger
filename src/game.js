import { Vector3, MathUtils } from './vendor.js';
import { LEVELS, getLevel, METERS_PER_UNIT } from './levels.js';
import { createPhysics } from './physics.js';
import { createScene } from './scene.js';
import { createLeaderboard } from './leaderboard.js';
import { createKeyboardControls } from './keyboard.js';
import { createDialogs } from './dialogs.js';

const $ = id => document.getElementById(id);
const show = (id, visible) => { $(id).hidden = !visible; };
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const dialogs = createDialogs(document, $('app'));
let keyboard;
$('retry').onclick = () => location.reload();
let rotation = 0, selectedLevel = 0;
try {
  const savedRotation = Number(localStorage.getItem('stubenflieger.rotation'));
  if ([0, 90, 180, 270].includes(savedRotation)) rotation = savedRotation;
  selectedLevel = clamp(Number(localStorage.getItem('stubenflieger.level')) || 0, 0, LEVELS.length - 1);
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
const leaderboard = createLeaderboard();
let physics, view, level;
let state = 'ready', paused = false, charging = false, power = 0, chargeStart = 0, dragPower = 0, launchTurn = 0;
let heading = 0, speed = 0, verticalSpeed = 0, flightTime = 0, clock = 0, endingAt = 0, endReason = '', won = false, blocks = 0, stars = 0;
let chargePointer = null, stickPointer = null, chargeOrigin = { x: 0, y: 0 }, touch = { steer: 0, pitch: 0 }, input = { steer: 0, pitch: 0 };
let sensorEnabled = false, sensor = null, calibration = null, sensorAt = 0, sensorTimeout, inThermal = false, nearCeiling = false;
let sound = false, audio, lastBlockSound = -10;
const keys = new Set(), position = new Vector3(), direction = new Vector3(), cameraGoal = new Vector3(), lookGoal = new Vector3(), lookAt = new Vector3();
const hint = message => { $('hint').textContent = message; };
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
  sound = !sound;
  $('sound').textContent = sound ? '♪ AN' : '♪ AUS';
  $('sound').setAttribute('aria-label', sound ? 'Ton ausschalten' : 'Ton einschalten');
  tone(600);
};
function releaseInputs() {
  keyboard?.clear(); cancelCharge(); releaseStick(); keys.clear();
  touch = { steer: 0, pitch: 0 }; input = { steer: 0, pitch: 0 };
  $('stick').style.transform = 'translate(0,0)';
}
function updateLevelLabels() {
  const number = String(level.id).padStart(2, '0');
  $('level-name').textContent = `${number} / ${level.name.toUpperCase()}`;
  $('level-tagline').innerHTML = level.rooms.length === 1 ? 'Kleine Flügel.<br>Großes Chaos.' : `${level.rooms.length} Räume.<br>Ein großer Flug.`;
  $('mission-copy').textContent = `Sammle alle ${level.collectibles.length} Flugsterne und wirf ${level.goalBlocks} Holzklötze um. ${level.rooms.length === 1 ? 'Übe im Wohnzimmer.' : 'Fliege durch die offenen Türen in die nächsten Räume.'} Türkise Aufwinde helfen dir. Raumhöhe: ${(level.ceiling * METERS_PER_UNIT).toFixed(1)} m.`;
  $('block-goal').textContent = ' / ' + level.goalBlocks;
  $('star-goal').textContent = ' / ' + level.collectibles.length;
  $('height-limit').textContent = `HÖHE · MAX. ${(level.ceiling * METERS_PER_UNIT).toFixed(1)} m`;
  $('flight-level').textContent = `LEVEL ${level.id} · ${level.rooms.length} ${level.rooms.length === 1 ? 'RAUM' : 'RÄUME'}`;
  $('level-select').value = String(selectedLevel);
}
function reset() {
  state = 'ready'; paused = false; power = dragPower = launchTurn = heading = flightTime = blocks = stars = 0;
  won = inThermal = nearCeiling = false;
  releaseInputs(); physics.reset(); view.resetCollectibles();
  view.plane.rotation.set(0, 0, 0); view.plane.position.copy(physics.plane.position);
  view.resetTrail(view.plane.position); view.updateSling(0); view.updateCeiling(view.plane.position);
  $('power-fill').style.transform = 'scaleX(0)';
  $('launch-label').textContent = 'Ziehen & loslassen'; $('power-label').textContent = 'GUMMISCHLEUDER ↗';
  $('ceiling-warning').hidden = true;
  for (const id of ['result', 'paused', 'stats', 'flight-controls', 'pause', 'wind-toast', 'menu', 'leaderboard']) show(id, false);
  for (const id of ['launch-panel', 'level-label', 'footer']) show(id, true);
  document.body.classList.remove('flying');
  $('height').classList.remove('danger');
  updateLevelLabels(); updateHUD();
  hint('Dein Zuhause. Deine Flugbahn. Sammle die goldenen Sterne.');
  if (sensorEnabled && sensor) calibration = { ...sensor };
  dialogs.close($('launch'));
}
function loadLevel(index) {
  selectedLevel = clamp(index, 0, LEVELS.length - 1);
  level = getLevel(selectedLevel);
  view?.dispose();
  physics = createPhysics(level);
  view = createScene($('game'), physics, viewport);
  physics.plane.addEventListener('collide', event => {
    if (state !== 'flying') return;
    if (event.body.kind === 'solid' || event.body.kind === 'ceiling') {
      finish(event.body.kind === 'ceiling' ? 'Die Decke war zu nah. Achte auf die roten Streifen.' : 'Ein Möbelstück oder eine Wand war im Weg.');
    } else if (event.body.kind === 'block' && clock - lastBlockSound > .08) {
      lastBlockSound = clock; speed = Math.max(3.8, speed * .97);
      tone(170, .09, 'triangle', .1); hint('Volltreffer! Die Klötze fallen.');
    }
  });
  view.camera.position.set(10, 13, 22); lookAt.set(-1, 1.8, -3);
  try { localStorage.setItem('stubenflieger.level', String(selectedLevel)); } catch {}
  reset();
}
for (const [index, item] of LEVELS.entries()) {
  const option = document.createElement('option'); option.value = String(index);
  option.textContent = `${item.id} · ${item.name} · ${item.rooms.length} ${item.rooms.length === 1 ? 'Raum' : 'Räume'}`;
  $('level-select').append(option);
}
$('next-level').onclick = () => loadLevel(selectedLevel + 1);
$('reset').onclick = reset; $('again').onclick = reset;
$('menu-restart').onclick = () => loadLevel(Number($('level-select').value));
function beginCharge() {
  if (state !== 'ready' || paused || charging || dialogs.current()) return false;
  charging = true; chargeStart = performance.now(); dragPower = 0; power = .12; tone(160, .07);
  return true;
}
function cancelCharge() {
  if (chargePointer !== null && $('launch').hasPointerCapture(chargePointer)) $('launch').releasePointerCapture(chargePointer);
  chargePointer = null; charging = false; power = dragPower = 0;
  view?.updateSling(0);
  $('power-fill').style.transform = 'scaleX(0)';
  $('launch-label').textContent = 'Ziehen & loslassen'; $('power-label').textContent = 'GUMMISCHLEUDER ↗';
}
function quickLaunch() {
  if (beginCharge()) { power = .75; launch(); }
}
function launch() {
  if (!charging || state !== 'ready' || dialogs.current()) return;
  charging = false; state = 'flying';
  leaderboard.beginRun(level.id);
  flightTime = 0; heading = launchTurn; speed = 5.5 + power * 5.5; verticalSpeed = .8 + power * .7;
  const start = level.start;
  physics.plane.position.set(start.x, start.y, start.z + power * 1.8);
  physics.plane.velocity.setZero(); physics.plane.collisionFilterMask = -1; physics.plane.wakeUp();
  view.resetTrail(new Vector3().copy(physics.plane.position)); view.updateSling(0);
  if (sensorEnabled && sensor) calibration = { ...sensor };
  for (const id of ['launch-panel', 'level-label', 'footer']) show(id, false);
  for (const id of ['stats', 'flight-controls', 'pause']) show(id, true);
  document.body.classList.add('flying'); hint('Gold sammeln. Türkis gibt Aufwind. Rot warnt vor der Decke.');
  tone(480, .4, 'triangle', .12);
  $('game').focus({ preventScroll: true });
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
  if (paused) dialogs.open('paused', $('resume')); else dialogs.close($('game'));
}
$('pause').onclick = () => pause(); $('resume').onclick = () => pause(false);
function suspend() {
  releaseStick();
  if (state === 'flying') { paused = true; if (!dialogs.current()) dialogs.open('paused', $('resume')); }
}
function finish(reason, success = false) {
  if (state !== 'flying') return;
  keyboard?.clear(); releaseStick();
  state = 'ending'; endReason = reason; won = success; endingAt = clock;
  show('wind-toast', false); show('flight-controls', false); show('pause', false);
  $('game').focus({ preventScroll: true });
  tone(success ? 740 : 120, .5, success ? 'sine' : 'triangle', .1);
  if (success) { physics.plane.velocity.setZero(); physics.plane.collisionFilterMask = 0; }
}
function result() {
  state = 'result'; blocks = physics.countFallen();
  $('result-eyebrow').textContent = won ? 'LEVEL GESCHAFFT' : 'FLUG BEENDET';
  $('result-title').textContent = won ? 'Alle Sterne an Bord.' : 'Noch eine Runde?';
  $('result-copy').textContent = won ? (selectedLevel < LEVELS.length - 1 ? 'Im nächsten Level warten mehr Räume, mehr Sterne und mehr Holztürme.' : 'Das ganze Haus gehört dir! Spiele deine Lieblingslevel noch einmal.') : `${endReason} Ziel: ${level.collectibles.length} Sterne und ${level.goalBlocks} Klötze.`;
  $('result-time').textContent = flightTime.toFixed(1) + ' s'; $('result-blocks').textContent = blocks;
  $('result-stars').textContent = `${stars} / ${level.collectibles.length}`;
  show('next-level', won && selectedLevel < LEVELS.length - 1);
  $('again').textContent = 'Dieses Level noch einmal ↗';
  leaderboard.setResult(blocks, stars, flightTime, level.id);
  keyboard?.clear(); dialogs.open('result', $(won && selectedLevel < LEVELS.length - 1 ? 'next-level' : 'again'));
}
let leaderboardReturn = 'menu', menuReturn = null;
function openMenu() {
  menuReturn = dialogs.current(); keyboard?.clear(); releaseStick();
  $('level-select').value = String(selectedLevel);
  if (state === 'flying') paused = true;
  dialogs.open('menu', $('close-menu'));
}
function closeMenu() {
  if (state === 'flying' && paused) dialogs.open('paused', $('resume'));
  else if (menuReturn === 'result') dialogs.open('result', $('result-menu'));
  else dialogs.close($('menu-button'));
}
function openLeaderboard(source) {
  leaderboardReturn = source; keyboard?.clear(); releaseStick();
  if (state === 'flying') paused = true;
  dialogs.open('leaderboard', $('close-leaderboard')); void leaderboard.refresh();
}
function closeLeaderboard() {
  if (leaderboardReturn === 'menu') dialogs.open('menu', $('menu-leaderboard'));
  else if (leaderboardReturn === 'result') dialogs.open('result', $('result-leaderboard'));
  else if (state === 'flying' && paused) dialogs.open('paused', $('resume'));
  else dialogs.close($(state === 'ready' ? 'launch' : 'game'));
}
$('menu-button').onclick = openMenu; $('close-menu').onclick = closeMenu;
$('menu-leaderboard').onclick = () => openLeaderboard('menu'); $('result-leaderboard').onclick = () => openLeaderboard('result');
$('close-leaderboard').onclick = closeLeaderboard;
$('pause-menu').onclick = openMenu; $('result-menu').onclick = openMenu;
keyboard = createKeyboardControls({ window, document, keys, getState: () => state, getDialog: () => dialogs.current(), launcher: $('launch'), actions: {
  beginCharge, cancelCharge, release: launch, quickLaunch, reset, pause: () => pause(), suspend,
  menu: openMenu, closeMenu, closeBoard: closeLeaderboard,
  board: () => { if (dialogs.current() !== 'leaderboard') openLeaderboard(dialogs.current()); }, sound: () => $('sound').click()
} });
function updateHUD() {
  $('time').textContent = flightTime.toFixed(1) + ' s';
  $('height').textContent = (clamp(physics.plane.position.y, 0, level.ceiling) * METERS_PER_UNIT).toFixed(1) + ' m';
  $('fallen').textContent = blocks; $('stars').textContent = stars;
  $('height').classList.toggle('danger', nearCeiling);
  show('ceiling-warning', nearCeiling && state === 'flying');
}
let previousFrame = performance.now(), hudTime = 0;
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min((now - previousFrame) / 1000, .04); previousFrame = now;
  if (!view) return;
  if (paused || dialogs.current()) { view.renderer.render(view.scene, view.camera); return; }
  clock += dt; view.wind(clock);
  if (state === 'ready') {
    const aimDirection = Number(keys.has('ArrowRight') || keys.has('KeyD')) - Number(keys.has('ArrowLeft') || keys.has('KeyA'));
    launchTurn = clamp(launchTurn + aimDirection * .6 * dt, -.45, .45);
    if (charging) {
      power = Math.max(.12, dragPower, clamp((now - chargeStart) / 1400, 0, 1));
      $('power-fill').style.transform = `scaleX(${power})`; $('launch-label').textContent = Math.round(power * 100) + ' % gespannt'; $('power-label').textContent = 'LOSLASSEN ↗'; view.updateSling(power);
    }
    physics.plane.position.set(level.start.x, level.start.y, level.start.z + power * 1.8); physics.plane.velocity.setZero();
    view.plane.position.copy(physics.plane.position); view.plane.rotation.set(.03, -launchTurn, 0);
    const size = viewport(), portrait = size.height > size.width;
    cameraGoal.set(portrait ? 9 : 10, portrait ? 16 : 13, portrait ? 25 : 22); lookGoal.set(portrait ? 0 : -1, portrait ? 1 : 1.8, portrait ? 11 : -3);
  }
  if (state === 'flying') {
    flightTime += dt;
    let steer = 0, pitch = 0;
    if (sensorEnabled && sensor && calibration && now - sensorAt < 1500) {
      const angleDifference = (a, b) => (a - b + 540) % 360 - 180;
      steer = clamp(angleDifference(sensor.roll, calibration.roll) / 28, -1, 1); pitch = clamp(angleDifference(sensor.pitch, calibration.pitch) / 28, -1, 1);
      if (Math.abs(steer) < .06) steer = 0; if (Math.abs(pitch) < .06) pitch = 0;
    }
    if (stickPointer !== null) ({ steer, pitch } = touch);
    if (keys.has('ArrowLeft') || keys.has('KeyA')) steer = -1;
    if (keys.has('ArrowRight') || keys.has('KeyD')) steer = 1;
    if (keys.has('ArrowUp') || keys.has('KeyW')) pitch = 1;
    if (keys.has('ArrowDown') || keys.has('KeyS')) pitch = -1;
    input.steer = MathUtils.damp(input.steer, steer, 7, dt); input.pitch = MathUtils.damp(input.pitch, pitch, 6, dt);
    heading += input.steer * 1.65 * dt;
    position.copy(physics.plane.position);
    const thermal = level.thermals.some(item => Math.hypot(position.x - item.x, position.z - item.z) < item.r && position.y < 8.4);
    show('wind-toast', thermal);
    if (thermal && !inThermal) tone(800, .4, 'sine', .045); inThermal = thermal;
    speed = clamp(speed + ((thermal ? .8 : 0) - .12 - Math.max(0, input.pitch) * .55 + Math.max(0, -input.pitch) * .6) * dt, 3.6, 11);
    const targetVertical = -.55 + input.pitch * 2.25 + (thermal ? 4.1 : 0) - (speed < 4.3 ? .65 : 0);
    verticalSpeed = MathUtils.damp(verticalSpeed, targetVertical, 2.1, dt);
    physics.plane.velocity.set(Math.sin(heading) * speed, verticalSpeed, -Math.cos(heading) * speed);
    physics.plane.force.y = physics.plane.mass * 9.82;
    view.plane.rotation.set(Math.atan2(verticalSpeed, speed), -heading, -input.steer * .6);
  }
  if (state !== 'result' && !(state === 'ending' && won)) physics.world.step(1 / 90, dt, 4);
  if (physics.enforceCeiling()) finish('Die Decke war zu nah. Achte auf die roten Streifen.');
  view.sync(); nearCeiling = view.updateCeiling(physics.plane.position);
  if (state !== 'ready') {
    view.plane.position.copy(physics.plane.position); position.copy(view.plane.position);
    direction.set(Math.sin(heading), 0, -Math.cos(heading));
    cameraGoal.copy(position).addScaledVector(direction, -5.4); cameraGoal.y += 2.55;
    const bounds = level.bounds;
    cameraGoal.x = clamp(cameraGoal.x, bounds.minX + .7, bounds.maxX - .7); cameraGoal.z = clamp(cameraGoal.z, bounds.minZ + .7, bounds.maxZ - .7); cameraGoal.y = clamp(cameraGoal.y, 1.1, level.ceiling - .6);
    lookGoal.copy(position).addScaledVector(direction, 2.8); lookGoal.y += .35;
    if (state === 'flying') {
      view.updateTrail(position); blocks = physics.countFallen();
      const pickups = view.collect(position);
      if (pickups) { stars += pickups; tone(1100, .12); hint(`Flugstern! ${stars} / ${level.collectibles.length} gesammelt.`); }
      if (stars >= level.collectibles.length && blocks >= level.goalBlocks) finish('Alle Ziele erreicht.', true);
      else if (position.y < .22) finish('Der Boden kam näher als geplant.');
    }
    if (state === 'ending') { if (!won) view.plane.rotation.z += dt * 1.2; if (clock - endingAt > 1.3) result(); }
  }
  view.camera.position.lerp(cameraGoal, 1 - Math.exp(-dt * (state === 'ready' ? 2 : 5)));
  lookAt.lerp(lookGoal, 1 - Math.exp(-dt * 6)); view.camera.lookAt(lookAt);
  hudTime += dt; if (hudTime > .1) { hudTime = 0; updateHUD(); }
  view.renderer.render(view.scene, view.camera);
}
try { loadLevel(selectedLevel); show('loading', false); requestAnimationFrame(frame); }
catch (error) { console.error(error); show('loading', false); dialogs.open('error'); }
$('game').addEventListener('webglcontextlost', event => {
  event.preventDefault(); keyboard.clear(); releaseStick(); paused = true;
  $('error-copy').textContent = 'Die 3D-Darstellung wurde unterbrochen. Lade das Spiel neu.'; dialogs.open('error');
});

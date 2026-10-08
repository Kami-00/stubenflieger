import { Group, Mesh, MeshStandardMaterial, SphereGeometry, Vector3, Quaternion } from 'three';
import { createScene } from './scene.js';
import { createPhysics } from './physics.js';
import { DUEL_HOUSE, DUEL_OPEN_DOORS, DUEL_RULES, DUEL_PLAYER_IDS, DUEL_PLAYER_COLORS } from './duel-arena.js';
import { predictDuelPlayer } from './duel-flight.js';
import { getAircraftDefinition } from './aircraft.js';
import { createFlightCamera } from './camera.js';
import { applyAircraftColor } from './aircraft-appearance.js';
import { createAircraftEffects } from './aircraft-effects.js';

// The server owns the game. This view smooths snapshots and predicts only the
// local pose for at most 100 ms; it can never award hits or alter health.
export function createDuelView(canvas) {
  const physics = createPhysics(DUEL_HOUSE, { form: 'classic', size: 1 });
  const view = createScene(canvas, physics, () => ({ width: innerWidth, height: innerHeight }));
  for (const id of DUEL_OPEN_DOORS) { physics.setDoorOpen(id, true); view.setDoorOpen(id, true); }
  view.sling.visible = false;
  const aircraft = Object.fromEntries(DUEL_PLAYER_IDS.map((id, index) => {
    const model = index === 0 ? view.plane : view.plane.clone(true);
    model.name = `Papierflieger ${id}`;
    if (index) view.scene.add(model);
    return [id, model];
  }));
  for (const [id, model] of Object.entries(aircraft)) {
    model.traverse(child => {
      if (!child.isMesh) return;
      child.material = child.material.clone();
    });
    applyAircraftColor(model, null, DUEL_PLAYER_COLORS[id]);
    model.visible = false;
  }
  const effects = Object.fromEntries(DUEL_PLAYER_IDS.map((id, index) => [id,
    index === 0 ? view.effects : createAircraftEffects(view.scene, { name: `Flugspur ${id}` }),
  ]));
  const appearances = new Map();
  const projectileGroup = new Group(); view.scene.add(projectileGroup);
  const ballGeometry = new SphereGeometry(DUEL_RULES.shotRadius, 8, 6);
  const ballMaterials = Object.fromEntries(DUEL_PLAYER_IDS.map(id => [id,
    new MeshStandardMaterial({ color: DUEL_PLAYER_COLORS[id], emissive: DUEL_PLAYER_COLORS[id], emissiveIntensity: .8, roughness: .85 }),
  ]));
  const balls = new Map(), targets = new Map();
  const direction = new Vector3(), aim = new Vector3(), targetQ = new Quaternion();
  const camera = createFlightCamera(view.camera, { traceCamera: physics.traceCamera, chaseHeight: .55, lookAhead: 2.8, levelChase: false });
  const planeLength = getAircraftDefinition('classic', 1).length;
  const reticle = document.getElementById('duel-reticle');
  let lastSnapshot = null, receivedAt = performance.now(), initialized = false, lastTick = -1, oldHp = {};
  let elapsed = 0, followingId = null;

  function resetFlight() {
    // Restoring the previous FPV model precedes applying authoritative visibility.
    camera.reset(); initialized = false; targets.clear(); oldHp = {}; followingId = null;
    for (const [id, model] of Object.entries(aircraft)) { model.visible = false; model.userData.flightCameraVisible = false; effects[id].clear(); }
    projectileGroup.clear(); balls.clear();
  }

  function update(snapshot, slot = 'p1', dt = 1 / 60, input = {}) {
    dt = Math.max(0, Math.min(.05, dt)); elapsed += dt;
    if (!snapshot && lastSnapshot) {
      lastSnapshot = null; lastTick = -1; resetFlight();
    }
    if (snapshot && snapshot !== lastSnapshot) {
      const newRound = snapshot.tick < lastTick;
      const reconnect = performance.now() - receivedAt > 750;
      if (newRound || reconnect) resetFlight();
      lastTick = snapshot.tick; receivedAt = performance.now(); lastSnapshot = snapshot;
      const participantIds = new Set(snapshot.players.map(player => player.id));
      for (const [id, mesh] of Object.entries(aircraft)) if (!participantIds.has(id)) { mesh.visible = false; mesh.userData.flightCameraVisible = false; effects[id].clear(); targets.delete(id); }
      for (const player of snapshot.players) {
        const mesh = aircraft[player.id]; if (!mesh) continue;
        const prior = targets.get(player.id);
        const fresh = !prior || !initialized || mesh.position.distanceTo(player.position) > 1.5;
        targets.set(player.id, { player, from: fresh ? new Vector3().copy(player.position) : mesh.position.clone(), fromQ: fresh ? new Quaternion().copy(player.quaternion) : mesh.quaternion.clone() });
        if (fresh) { mesh.position.copy(player.position); mesh.quaternion.copy(player.quaternion); effects[player.id].reset(player.position); }
        const appearance = player.appearance || {}, color = appearance.color ?? null, effect = appearance.effect || 'none';
        const appearanceKey = `${color}:${effect}`;
        if (appearances.get(player.id) !== appearanceKey) {
          applyAircraftColor(mesh, color, DUEL_PLAYER_COLORS[player.id]); effects[player.id].setEffect(effect); appearances.set(player.id, appearanceKey);
        }
        mesh.visible = mesh.userData.flightCameraVisible = player.hp > 0;
        if (player.hp <= 0) effects[player.id].clear();
        if (oldHp[player.id] !== undefined && player.hp < oldHp[player.id]) mesh.userData.hitUntil = elapsed + .22;
        oldHp[player.id] = player.hp;
      }
      const liveIds = new Set(snapshot.projectiles.map(item => item.id));
      for (const [id, ball] of balls) if (!liveIds.has(id)) { projectileGroup.remove(ball); balls.delete(id); }
      for (const item of snapshot.projectiles) {
        let ball = balls.get(item.id);
        if (!ball) { ball = new Mesh(ballGeometry, ballMaterials[item.owner] || ballMaterials.p1); ball.position.copy(item.position); balls.set(item.id, ball); projectileGroup.add(ball); }
        ball.userData.from = ball.position.clone(); ball.userData.target = new Vector3().copy(item.position);
      }
    }
    const age = Math.min(.1, Math.max(0, (performance.now() - receivedAt) / 1000));
    const stale = performance.now() - receivedAt > 750;
    const fraction = Math.min(1, age / .1);
    for (const [id, target] of targets) {
      const mesh = aircraft[id];
      mesh.visible = mesh.userData.flightCameraVisible = target.player.hp > 0;
      if (id === slot) {
        const predicted = input.active && target.player.hp > 0 && !target.player.recovering ? predictDuelPlayer(target.player, input, age) : target.player;
        // A short correction keeps network jitter from shaking the follow camera.
        const mix = mesh.position.distanceTo(predicted.position) > .6 ? 1 : 1 - Math.exp(-dt * 28);
        mesh.position.lerp(predicted.position, mix);
        targetQ.copy(predicted.quaternion); mesh.quaternion.slerp(targetQ, mix);
      } else {
        mesh.position.lerpVectors(target.from, target.player.position, fraction);
        mesh.quaternion.copy(target.fromQ).slerp(targetQ.copy(target.player.quaternion), fraction);
      }
      mesh.traverse(child => { if (child.isMesh) { child.material.emissive.set(elapsed < (mesh.userData.hitUntil || 0) ? '#e24b3b' : '#000000'); child.material.emissiveIntensity = .75; } });
      if (target.player.hp > 0 && !stale && !snapshot?.winner) effects[id].push(mesh.position);
      else effects[id].clear();
      if (effects[id] !== view.effects) effects[id].update(dt, elapsed);
    }
    for (const ball of balls.values()) ball.position.lerpVectors(ball.userData.from, ball.userData.target, fraction);
    // Eliminated pilots watch a surviving plane until the shared round ends.
    const nextFollow = targets.get(slot)?.player.hp > 0 ? slot
      : targets.get(followingId)?.player.hp > 0 ? followingId
      : [...targets].find(([, target]) => target.player.hp > 0)?.[0] || slot;
    if (nextFollow !== followingId) { camera.reset(); followingId = nextFollow; initialized = false; }
    const mine = aircraft[followingId];
    if (mine && targets.has(followingId)) {
      physics.plane.position.copy(mine.position); physics.plane.quaternion.copy(mine.quaternion);
      direction.set(0, 0, -1).applyQuaternion(mine.quaternion);
      camera.update({ position: mine.position, quaternion: mine.quaternion, model: mine, id: followingId, length: planeLength }, { dt, immediate: !initialized });
      initialized = true;
      if (reticle) {
        view.camera.updateMatrixWorld();
        aim.copy(mine.position).addScaledVector(direction, 8).project(view.camera);
        reticle.style.left = `${(aim.x * .5 + .5) * 100}%`;
        reticle.style.top = `${(-aim.y * .5 + .5) * 100}%`;
      }
    } else {
      camera.reset(); view.camera.up.set(0, 1, 0);
      view.camera.position.set(9, 5.2, -8); view.camera.lookAt(7, .9, 0);
    }
    view.update(dt, elapsed); view.render();
  }
  function dispose() {
    camera.dispose(); Object.values(effects).forEach(effect => effect.dispose());
    ballGeometry.dispose(); Object.values(ballMaterials).forEach(mat => mat.dispose()); view.dispose();
  }
  return { update, resize: view.resize, setCameraMode: camera.setMode, get cameraMode() { return camera.mode; }, dispose };
}

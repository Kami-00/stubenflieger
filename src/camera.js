import { Vector3, Quaternion } from 'three';

/** Shared chase/first-person camera. A plane and a Three camera both face -Z. */
export function createFlightCamera(camera, {
  traceCamera = (_from, to) => to,
  mode = 'chase', chaseDistance = 1.45, chaseHeight = .62,
  lookAhead = 1.3, levelChase = true,
} = {}) {
  const initialNear = camera.near;
  const forward = new Vector3(), goal = new Vector3(), lookGoal = new Vector3(), look = new Vector3();
  const orientation = new Quaternion(), offset = new Vector3();
  let currentMode = mode === 'fpv' ? 'fpv' : 'chase', initialized = false;
  let followedId = null, hiddenModel = null;

  function restoreModel() {
    // Visibility supplied by the owner is kept separately from the camera's
    // override so changing spectator target never resurrects a dead aircraft.
    if (hiddenModel) hiddenModel.visible = hiddenModel.userData.flightCameraVisible !== false;
    hiddenModel = null;
  }
  function setMode(nextMode) {
    const next = nextMode === 'fpv' ? 'fpv' : 'chase';
    if (next !== currentMode) { restoreModel(); currentMode = next; initialized = false; }
    const near = currentMode === 'fpv' ? .012 : initialNear;
    if (camera.near !== near) { camera.near = near; camera.updateProjectionMatrix(); }
    return currentMode;
  }
  function reset() { restoreModel(); initialized = false; followedId = null; }
  function update({ position, quaternion, heading, length = .33, model, id = model }, { dt = 1 / 60, immediate = false, ready = false } = {}) {
    if (id !== followedId || (hiddenModel && model !== hiddenModel)) { restoreModel(); initialized = false; followedId = id; }
    setMode(currentMode);
    orientation.copy(quaternion).normalize();
    if (currentMode === 'fpv') {
      if (model) {
        if (model !== hiddenModel && model.userData.flightCameraVisible === undefined) model.userData.flightCameraVisible = model.visible;
        hiddenModel = model; model.visible = false;
      }
      offset.set(0, .012, -Math.max(.1, length) * .28).applyQuaternion(orientation);
      goal.copy(position).add(offset);
      camera.position.copy(traceCamera(position, goal, .015));
      camera.quaternion.copy(orientation);
      initialized = true;
      return;
    }
    restoreModel();
    camera.up.set(0, 1, 0);
    forward.set(0, 0, -1).applyQuaternion(orientation);
    if (levelChase) {
      if (Number.isFinite(heading)) forward.set(Math.sin(heading), 0, -Math.cos(heading));
      else { forward.y = 0; forward.normalize(); }
    }
    goal.copy(position).addScaledVector(forward, ready ? -.42 : -chaseDistance);
    if (ready) goal.x -= 1.25;
    goal.y += ready ? .95 : chaseHeight;
    goal.copy(traceCamera(position, goal, .12));
    lookGoal.copy(position).addScaledVector(forward, ready ? .25 : lookAhead); lookGoal.y += .08;
    if (immediate || !initialized) { camera.position.copy(goal); look.copy(lookGoal); initialized = true; }
    else {
      const mix = 1 - Math.exp(-Math.max(0, Math.min(.1, dt)) * 9);
      camera.position.lerp(goal, mix); look.lerp(lookGoal, mix);
    }
    camera.position.copy(traceCamera(position, camera.position, .1));
    camera.lookAt(look);
  }
  function dispose() { reset(); camera.near = initialNear; camera.updateProjectionMatrix(); }
  setMode(currentMode);
  return { setMode, update, reset, dispose, get mode() { return currentMode; } };
}

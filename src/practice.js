import { Quaternion, Vec3 } from 'cannon-es';

export const PRACTICE_SPEED_MIN = .25;
export const PRACTICE_SPEED_MAX = 1;
export const PRACTICE_SPEED_DEFAULT = .5;
const EPS = 1e-8;
const clamp = (value, lo, hi) => Math.max(lo, Math.min(hi, value));
const vector = value => new Vec3(...['x', 'y', 'z'].map(axis => Number.isFinite(value?.[axis]) ? clamp(value[axis], -100, 100) : 0));
const plain = value => ({ x: value.x, y: value.y, z: value.z });
const orientation = value => {
  const result = new Quaternion(value?.x ?? 0, value?.y ?? 0, value?.z ?? 0, value?.w ?? 1);
  if (![result.x, result.y, result.z, result.w].every(Number.isFinite) || result.x ** 2 + result.y ** 2 + result.z ** 2 + result.w ** 2 < EPS) return new Quaternion();
  result.normalize(); return result;
};

export function normalizePracticeSpeed(value = PRACTICE_SPEED_DEFAULT) {
  return typeof value === 'number' && Number.isFinite(value) ? clamp(value, PRACTICE_SPEED_MIN, PRACTICE_SPEED_MAX) : PRACTICE_SPEED_DEFAULT;
}

/** Use this same timestep for input damping, steering, forces and collision. */
export function scalePracticeDelta(seconds, speed = PRACTICE_SPEED_DEFAULT) {
  return typeof seconds === 'number' && Number.isFinite(seconds) ? Math.max(0, seconds) * normalizePracticeSpeed(speed) : 0;
}

/** Exact elastic reflection; an undefined rotational contact retraces approach. */
export function reflectPracticeVelocity(velocity, normal) {
  const incoming = vector(velocity), outward = vector(normal);
  if (outward.lengthSquared() < EPS) return plain(incoming.scale(-1));
  outward.normalize();
  return plain(incoming.vsub(outward.scale(2 * Math.min(0, incoming.dot(outward)))));
}

/**
 * Prescribed-motion practice collision wrapper. Never disables collisions or
 * changes a hull. Reverse travel keeps the proven safe orientation until there
 * is clearance to rotate the real wings. Recovery time uses simulation seconds.
 */
export function createPracticeRebound(physics, { bounds = physics.level?.bounds } = {}) {
  const body = physics.plane;
  let recovery = null, history = [], stalled = 0;

  function savePose(velocity) {
    const prior = history.at(-1);
    if (prior && prior.position.distanceSquared(body.position) < .04 ** 2) return;
    history.push({ position: body.position.clone(), quaternion: body.quaternion.clone(), velocity: vector(velocity) });
    if (history.length > 100) history.shift();
  }
  function put(pose) {
    body.position.copy(pose.position); body.quaternion.copy(pose.quaternion);
    body.previousPosition.copy(body.position); body.interpolatedPosition.copy(body.position);
    body.previousQuaternion.copy(body.quaternion); body.interpolatedQuaternion.copy(body.quaternion);
    body.aabbNeedsUpdate = true; physics.world.broadphase.dirty = true;
  }
  function reset() { recovery = null; history = []; stalled = 0; savePose(new Vec3()); }

  function limits(quaternion) {
    const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
    for (const part of physics.aircraft.parts) for (const vertex of part.vertices) {
      const point = quaternion.vmult(new Vec3(...vertex));
      ['x', 'y', 'z'].forEach((axis, index) => { min[index] = Math.min(min[index], point[axis]); max[index] = Math.max(max[index], point[axis]); });
    }
    return { min, max };
  }
  function boundContact(dt, velocity, requested) {
    if (!bounds) return null;
    const from = limits(body.quaternion), to = limits(requested), coordinates = ['x', 'y', 'z'];
    let earliest = 1, normal = null;
    for (const [index, axis] of coordinates.entries()) {
      const low = bounds[`min${axis.toUpperCase()}`], high = bounds[`max${axis.toUpperCase()}`];
      if (!Number.isFinite(low) || !Number.isFinite(high)) continue;
      const minimum = Math.min(from.min[index], to.min[index]), maximum = Math.max(from.max[index], to.max[index]);
      for (const side of [-1, 1]) {
        const distance = side < 0 ? body.position[axis] + minimum - low : high - body.position[axis] - maximum;
        const approach = velocity[axis] * side * dt;
        if (distance < -.0001 || (approach > 0 && approach >= distance)) {
          const time = distance < 0 ? 0 : distance / approach;
          if (time <= earliest) { earliest = time; normal = new Vec3(); normal[axis] = -side; }
        }
      }
    }
    return normal ? { t: clamp(earliest, 0, 1), normal, body: { kind: 'bounds', obstacleId: 'practice-bounds' } } : null;
  }
  function move(dt, velocity, quaternion) {
    const boundary = boundContact(dt, velocity, quaternion);
    if (!boundary) return physics.advance(dt, velocity, quaternion);
    // Stop a millimetre inside the arena, before any part of the paper exits.
    const fraction = Math.max(0, boundary.t - .001 / Math.max(EPS, velocity.length() * dt));
    const partial = new Quaternion(); body.quaternion.slerp(quaternion, fraction, partial);
    const result = physics.advance(dt * fraction, velocity, partial);
    return result.collided ? result : { ...result, collided: true, normal: boundary.normal, body: boundary.body };
  }
  function headingOf(velocity, quaternion) {
    if (Math.hypot(velocity.x, velocity.z) > EPS) return Math.atan2(velocity.x, -velocity.z);
    const forward = quaternion.vmult(new Vec3(0, 0, -1)); return Math.atan2(forward.x, -forward.z);
  }
  function begin(velocity, normal) {
    let outgoing = vector(reflectPracticeVelocity(velocity, normal));
    const outward = vector(normal), originalSpeed = Math.max(.6, velocity.length());
    if (outward.lengthSquared() > EPS) {
      outward.normalize();
      // Gentle floor/ceiling grazes need real clearance before gravity/input
      // resumes. This prevents dozens of contacts on the same thin surface.
      const departure = Math.max(.4, originalSpeed * .3);
      outgoing = outgoing.vadd(outward.scale(Math.max(0, departure - outgoing.dot(outward))));
    }
    if (outgoing.lengthSquared() < EPS) outgoing = body.quaternion.vmult(new Vec3(0, .4, .8));
    outgoing.scale(originalSpeed / outgoing.length(), outgoing);
    const heading = headingOf(outgoing, body.quaternion), speed = Math.hypot(outgoing.x, outgoing.z);
    const target = new Quaternion(); target.setFromEuler(Math.atan2(outgoing.y, speed) * .7, -heading, 0, 'YXZ');
    recovery = { velocity: outgoing, heading, target, start: body.position.clone(), normal: outward, time: 0 };
  }
  function backtrack(velocity) {
    const origin = { position: body.position.clone(), quaternion: body.quaternion.clone() };
    // Use the nearest earlier verified route point, never the run's spawn just
    // because a chair or a corner was touched. Verify again before accepting.
    for (let index = history.length - 1; index >= 0; index--) {
      const saved = history[index];
      if (saved.position.distanceSquared(origin.position) < .12 ** 2) continue;
      put(saved);
      if (!boundContact(0, new Vec3(), saved.quaternion) && !physics.advance(0, new Vec3(), saved.quaternion).collided) {
        history = history.slice(0, index + 1); begin(saved.velocity.lengthSquared() > EPS ? saved.velocity : velocity, null); stalled = 0; return true;
      }
    }
    put(origin); return false;
  }
  function leaveTightCorner(velocity) {
    const original = { position: body.position.clone(), quaternion: body.quaternion.clone() };
    const candidates = [velocity.scale(-1), new Vec3(0, 1, 0), new Vec3(0, -1, 0), new Vec3(1, 0, 0), new Vec3(-1, 0, 0), new Vec3(0, 0, 1), new Vec3(0, 0, -1)];
    let best = null, distance = .002;
    for (const direction of candidates) {
      if (direction.lengthSquared() < EPS) continue;
      direction.normalize(); direction.scale(Math.max(.6, velocity.length()), direction); put(original);
      move(.08 / direction.length(), direction, original.quaternion);
      const travelled = body.position.distanceTo(original.position);
      if (travelled > distance) { distance = travelled; best = { position: body.position.clone(), quaternion: body.quaternion.clone(), velocity: direction }; }
    }
    put(best || original);
    if (best) { begin(best.velocity.scale(-1), null); stalled = 0; return true; }
    return false;
  }

  function advance(seconds, requestedVelocity, requestedQuaternion = body.quaternion) {
    const dt = typeof seconds === 'number' && Number.isFinite(seconds) ? clamp(seconds, 0, .1) : 0;
    const wasRecovering = Boolean(recovery), start = body.position.clone();
    const velocity = recovery ? recovery.velocity : vector(requestedVelocity);
    const quaternion = recovery ? body.quaternion.clone() : orientation(requestedQuaternion);
    if (dt === 0) return { bounced: false, recovering: wasRecovering, relocated: false,
      contact: { collided: false, body: null, normal: null }, heading: recovery?.heading ?? headingOf(velocity, body.quaternion),
      speed: Math.hypot(velocity.x, velocity.z), verticalSpeed: velocity.y, velocity: plain(velocity) };
    let contact = move(dt, velocity, quaternion), bounced = contact.collided, relocated = false;
    if (contact.collided) {
      stalled = body.position.distanceSquared(start) < .002 ** 2 ? stalled + 1 : 0;
      begin(velocity, contact.normal);
      if (stalled >= 2) relocated = backtrack(velocity) || leaveTightCorner(velocity);
    } else if (recovery) {
      stalled = 0; recovery.time += dt;
      const delta = body.position.vsub(recovery.start);
      const clearance = recovery.normal.lengthSquared() > EPS ? delta.dot(recovery.normal) : delta.length();
      if (clearance >= physics.aircraft.boundingRadius + .04) {
        const turn = move(0, new Vec3(), recovery.target);
        if (!turn.collided) recovery = null;
        else if (recovery.time > 2) relocated = backtrack(velocity) || leaveTightCorner(velocity);
      }
    }
    if (!contact.collided) savePose(velocity);
    const outgoing = recovery?.velocity || velocity;
    const heading = recovery?.heading ?? headingOf(outgoing, body.quaternion);
    return { bounced, recovering: wasRecovering || Boolean(recovery), relocated, contact,
      heading, speed: Math.hypot(outgoing.x, outgoing.z), verticalSpeed: outgoing.y, velocity: plain(outgoing) };
  }
  reset();
  return { reset, advance, get recovering() { return Boolean(recovery); } };
}

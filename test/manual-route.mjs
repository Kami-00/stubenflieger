// Headless flight rehearsal using real house collisions, pickups and flight forces.
// The pilot emits only steer/pitch inputs; it never teleports or modifies speed.
import { Vector3, Euler, Quaternion } from 'three';
import { createPhysics } from '../src/physics.js';
import { HOUSE, getRoomAt } from '../src/house.js';
import { flightTuning } from '../src/aircraft.js';
import { flightForces } from '../src/flight.js';
import { createRunState } from '../src/run.js';

export const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
export const angleDifference = (a, b) => Math.atan2(Math.sin(a - b), Math.cos(a - b));

export function simulateFlight(pilot, { dt = 1 / 60, maxSeconds = 50, power = .75, launchHeading = 0, stop } = {}) {
  const physics = createPhysics(HOUSE, { form: 'classic', size: 1 });
  const run = createRunState(HOUSE, { owned: ['plane:classic'], equipped: { form: 'classic', size: 1, boosts: [] } });
  const tuning = flightTuning('classic', 1), input = { steer: 0, pitch: 0 };
  const orientation = new Quaternion(), euler = new Euler(0, 0, 0, 'YXZ');
  const damp = (value, target, rate) => value + (target - value) * (1 - Math.exp(-rate * dt));
  const events = [], checkpoints = [];
  let heading = launchHeading, speed = tuning.speed * (.75 + power * .35), verticalSpeed = .08 + power * .1;
  physics.plane.quaternion.copy(orientation.setFromEuler(euler.set(0, -heading, 0, 'YXZ')));
  for (let frame = 0; frame < Math.ceil(maxSeconds / dt); frame++) {
    const seconds = frame * dt, previous = physics.plane.position.clone();
    const context = { seconds, position: previous, heading, speed, verticalSpeed, input, run, tuning };
    const requested = pilot(context);
    input.steer = damp(input.steer, clamp(requested.steer ?? 0, -1, 1), 9);
    input.pitch = damp(input.pitch, clamp(requested.pitch ?? 0, -1, 1), 7);
    heading += input.steer * tuning.turnRate * dt;
    speed = damp(speed, tuning.speed, .75);
    const thermal = HOUSE.thermals.find(item => Math.hypot(previous.x - item.x, previous.z - item.z) < item.r && previous.y >= item.y && previous.y < item.y + item.height);
    const forces = flightForces({ position: previous, input, heading, speed, tuning, thermal, lift: false });
    verticalSpeed = damp(verticalSpeed, forces.targetVertical, 4);
    euler.set(Math.atan2(verticalSpeed, forces.ride ? Math.max(2, speed) : speed) * .7, -heading, -input.steer * .42, 'YXZ');
    const contact = physics.advance(dt, new Vector3(forces.x, verticalSpeed, forces.z), orientation.setFromEuler(euler));
    for (const star of HOUSE.collectibles) {
      if (run.stars.has(star.id) || !physics.canCollectStar(star, previous)) continue;
      const doors = run.collect(star.id);
      for (const door of doors) physics.setDoorOpen(door.id, true);
      events.push({ seconds, star: star.id, doors: doors.map(door => door.id), position: physics.plane.position.toArray() });
    }
    const room = getRoomAt(physics.plane.position);
    if (room) run.enterRoom(room.id);
    if (frame % Math.max(1, Math.round(.25 / dt)) === 0) checkpoints.push({ seconds, position: physics.plane.position.toArray(), heading, input: { ...input } });
    const result = { seconds, position: physics.plane.position.toArray(), heading, room: room?.id, events, checkpoints, stars: [...run.stars], opened: [...run.opened] };
    if (contact.collided) return { ...result, success: false, collision: contact.body.obstacleId };
    if (stop?.({ ...context, position: physics.plane.position, room })) return { ...result, success: true };
  }
  return { success: false, collision: 'timeout', position: physics.plane.position.toArray(), events, checkpoints, stars: [...run.stars], opened: [...run.opened] };
}

export function heightInput(context, altitude) {
  return (context.tuning.sinkRate + (altitude - context.position.y) * 1.7 - context.verticalSpeed * .65) / context.tuning.pitchRate;
}

export function aimInput(context, x, z) {
  const desired = Math.atan2(x - context.position.x, -(z - context.position.z));
  return clamp(angleDifference(desired, context.heading) * 3 - context.input.steer * .4, -1, 1);
}

import { flightTuning } from './aircraft.js';
import { flightForces } from './flight.js';
import { DUEL_HOUSE, DUEL_RULES } from './duel-arena.js';

const tuning = Object.freeze(flightTuning('classic', 1));
const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
export const sanitizeDuelInput = input => ({
  steer: typeof input?.steer === 'number' && Number.isFinite(input.steer) ? clamp(input.steer, -1, 1) : 0,
  pitch: typeof input?.pitch === 'number' && Number.isFinite(input.pitch) ? clamp(input.pitch, -1, 1) : 0,
  fire: input?.fire === true,
});

// Same YXZ convention as the solo renderer: local nose -Z, yaw=-heading.
export function duelQuaternion(pitch, heading, bank = 0) {
  const c1 = Math.cos(pitch / 2), s1 = Math.sin(pitch / 2), c2 = Math.cos(-heading / 2), s2 = Math.sin(-heading / 2);
  const c3 = Math.cos(bank / 2), s3 = Math.sin(bank / 2);
  return { x: s1 * c2 * c3 + c1 * s2 * s3, y: c1 * s2 * c3 - s1 * c2 * s3,
    z: c1 * c2 * s3 - s1 * s2 * c3, w: c1 * c2 * c3 + s1 * s2 * s3 };
}

export function integrateDuelFlight(player, requested, dt, house = DUEL_HOUSE) {
  const control = sanitizeDuelInput(requested), damp = (value, target, rate) => target + (value - target) * Math.exp(-rate * dt);
  const input = { steer: damp(player.input?.steer ?? 0, control.steer, 9), pitch: damp(player.input?.pitch ?? 0, control.pitch, 7) };
  const heading = Math.atan2(Math.sin(player.heading + input.steer * tuning.turnRate * dt), Math.cos(player.heading + input.steer * tuning.turnRate * dt));
  const position = player.position;
  const thermal = house.thermals?.find(item => Math.hypot(position.x - item.x, position.z - item.z) < item.r && position.y >= item.y && position.y < item.y + item.height);
  const forces = flightForces({ position, input, heading, speed: tuning.speed, tuning, thermal, lift: false });
  const verticalSpeed = damp(player.verticalSpeed ?? 0, forces.targetVertical, 4);
  const quaternion = duelQuaternion(Math.atan2(verticalSpeed, forces.ride ? Math.max(2, tuning.speed) : tuning.speed) * .7, heading, -input.steer * .42);
  return { heading, input, verticalSpeed, quaternion, velocity: { x: forces.x, y: verticalSpeed, z: forces.z } };
}

// Local visual prediction only; collision, damage and results remain authoritative.
export function predictDuelPlayer(player, requested, seconds) {
  let remaining = Number.isFinite(seconds) ? clamp(seconds, 0, .1) : 0;
  let next = { ...player, position: { ...player.position }, quaternion: { ...player.quaternion }, input: { ...(player.input || {}) } };
  if (player.recovering || player.eliminated || player.hp <= 0) return next;
  while (remaining > 1e-9) {
    const dt = Math.min(remaining, DUEL_RULES.stepSeconds), movement = integrateDuelFlight(next, requested, dt);
    next = { ...next, ...movement, position: { x: next.position.x + movement.velocity.x * dt, y: next.position.y + movement.velocity.y * dt, z: next.position.z + movement.velocity.z * dt } };
    remaining -= dt;
  }
  delete next.velocity;
  return next;
}

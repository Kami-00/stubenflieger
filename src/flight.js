/** Directional updraft assistance makes the narrow stairwell usable both ways. */
export function flightForces({ position, input, heading, speed, tuning, thermal, lift = false }) {
  const ride = Boolean(thermal && Math.abs(input.pitch) > .25 && Math.abs(input.steer) < .35);
  const wind = thermal ? (input.pitch < -.25 ? -thermal.strength * .65 : thermal.strength) : 0;
  return {
    ride,
    x: ride ? (thermal.x - position.x) * 2 : Math.sin(heading) * speed,
    z: ride ? (thermal.z - position.z) * 2 : -Math.cos(heading) * speed,
    targetVertical: -tuning.sinkRate + input.pitch * tuning.pitchRate + wind + (lift ? 1.9 : 0),
  };
}

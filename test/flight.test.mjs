import test from 'node:test';
import assert from 'node:assert/strict';
import { flightForces } from '../src/flight.js';
import { flightTuning, AIRCRAFT_FORMS } from '../src/aircraft.js';
const thermal = { x: 7, z: 2.2, strength: 2.6 };
test('all aircraft sizes can ascend and descend the stair shaft while staying centred', () => {
  for (const form of AIRCRAFT_FORMS) for (const size of [.55, 1, 1.5]) for (const pitch of [-1, 1]) {
    const forces = flightForces({ position: { x: 7, z: 2.2 }, input: { pitch, steer: 0 }, heading: .8, speed: 4, tuning: flightTuning(form, size), thermal });
    assert.equal(forces.ride, true); assert.equal(forces.x, 0); assert.equal(forces.z, 0);
    assert.equal(Math.sign(forces.targetVertical), pitch, `${form}/${size}/${pitch}`);
  }
});
test('steering leaves an updraft and neutral flight loses less height at large size', () => {
  const setup = { position: { x: 7, z: 2.2 }, input: { pitch: 1, steer: .5 }, heading: 0, speed: 3.5, tuning: flightTuning(), thermal };
  const exit = flightForces(setup); assert.equal(exit.ride, false); assert.equal(exit.z, -3.5);
  const glide = size => flightForces({ ...setup, input: { pitch: 0, steer: 0 }, thermal: null, tuning: flightTuning('classic', size) }).targetVertical;
  assert(glide(1.5) > glide(.55)); assert(glide(1.5) < 0);
});

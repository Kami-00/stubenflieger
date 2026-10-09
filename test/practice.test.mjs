import test from 'node:test';
import assert from 'node:assert/strict';
import { Quaternion, Vec3 } from 'cannon-es';
import { createPhysics } from '../src/physics.js';
import { createPracticeRebound, normalizePracticeSpeed, scalePracticeDelta, reflectPracticeVelocity } from '../src/practice.js';
import { HOUSE } from '../src/house.js';
import { flightForces } from '../src/flight.js';
import { flightTuning } from '../src/aircraft.js';

const box = (id, size, position, rotation = [0, 0, 0]) => ({ id, kind: 'furniture', size, position, rotation });
const level = (obstacles = [], start = [0, 1, 1], bounds) => ({ obstacles, start, doors: [], bounds });
const vec = value => new Vec3(value.x, value.y, value.z);
const quaternionFor = velocity => {
  const result = new Quaternion(); result.setFromEuler(Math.atan2(velocity.y, Math.hypot(velocity.x, velocity.z)) * .7, -Math.atan2(velocity.x, -velocity.z), 0, 'YXZ'); return result;
};
function fly(physics, initialVelocity, seconds, dt = 1 / 60) {
  const rebound = createPracticeRebound(physics), hits = [], positions = [];
  let velocity = initialVelocity.clone(), noMovement = 0, longestStop = 0;
  physics.plane.quaternion.copy(quaternionFor(velocity));
  for (let time = 0; time < seconds - 1e-9; time += dt) {
    const start = physics.plane.position.clone(), result = rebound.advance(dt, velocity, quaternionFor(velocity));
    if (result.bounced) hits.push(result);
    if (result.bounced || result.recovering) velocity = vec(result.velocity);
    if (physics.plane.position.distanceTo(start) < .0001) longestStop = Math.max(longestStop, ++noMovement); else noMovement = 0;
    assert([physics.plane.position.x, physics.plane.position.y, physics.plane.position.z, result.heading, result.speed, result.verticalSpeed].every(Number.isFinite));
    assert.equal(physics.advance(0, new Vec3(), physics.plane.quaternion).collided, false, 'every resulting paper pose remains outside solid objects');
    positions.push(physics.plane.position.clone());
  }
  return { rebound, hits, positions, velocity, longestStop };
}

test('practice speed defaults to half time and clamps to 25–100 percent', () => {
  for (const value of [undefined, NaN, Infinity, '0.75', null]) assert.equal(normalizePracticeSpeed(value), .5);
  assert.equal(normalizePracticeSpeed(-1), .25); assert.equal(normalizePracticeSpeed(5), 1); assert.equal(normalizePracticeSpeed(.75), .75);
  assert.equal(scalePracticeDelta(.04), .02); assert.equal(scalePracticeDelta(.04, .25), .01); assert.equal(scalePracticeDelta(.04, 1), .04);
  assert.equal(scalePracticeDelta(NaN), 0); assert.equal(scalePracticeDelta(-1), 0);
  const samples = [.25, .5, 1].map(speed => {
    const physics = createPhysics(level([], [0, 1, 0])), rebound = createPracticeRebound(physics);
    for (let i = 0; i < 60; i++) rebound.advance(scalePracticeDelta(1 / 60, speed), new Vec3(0, 0, -1.65));
    return physics.plane.position.z;
  });
  samples.forEach((position, index) => assert(Math.abs(position + 1.65 * [.25, .5, 1][index]) < 1e-10));
});

test('reflection preserves tangent and speed for walls, floors and rotated furniture', () => {
  for (const normal of [new Vec3(0, 1, 0), new Vec3(0, 0, 1), new Vec3(Math.SQRT1_2, 0, Math.SQRT1_2)]) {
    const incoming = new Vec3(-1.3, -.4, -1.8), outgoing = vec(reflectPracticeVelocity(incoming, normal));
    assert(Math.abs(outgoing.length() - incoming.length()) < 1e-10);
    assert(Math.abs(outgoing.dot(normal) + incoming.dot(normal)) < 1e-10);
    const tangent = incoming.vsub(normal.scale(incoming.dot(normal)));
    assert(outgoing.vsub(normal.scale(outgoing.dot(normal))).distanceTo(tangent) < 1e-10);
  }
  assert.deepEqual(reflectPracticeVelocity({ x: 1, y: -.3, z: -2 }, null), { x: -1, y: .3, z: 2 });
});

test('a wall reflects and turns the actual wings without repeated zero-distance contacts', () => {
  for (const form of ['classic', 'glider', 'dart', 'stunt']) for (const size of [.55, 1.5]) {
    const physics = createPhysics(level([box('wall', [20, 5, .1], [0, 1, 0])]), { form, size });
    const result = fly(physics, new Vec3(.3, 0, -1.65), 2);
    assert.equal(result.hits.length, 1, `${form}/${size} should bounce once`);
    assert(result.velocity.z > 0); assert(physics.plane.position.z > .8);
    assert(result.longestStop <= 1); assert.equal(result.hits[0].contact.body.obstacleId, 'wall');
  }
});

test('oblique furniture uses its real world-space normal', () => {
  const q = new Quaternion(); q.setFromEuler(.1, .61, .23, 'XYZ');
  const normal = q.vmult(new Vec3(1, 0, 0)), start = normal.scale(1.1).vadd(new Vec3(0, 1, 0));
  const physics = createPhysics(level([box('tilted-cabinet', [.1, 5, 5], [0, 1, 0], [.1, .61, .23])], start.toArray()));
  const result = fly(physics, normal.scale(-1.65), 2);
  assert.equal(result.hits.length, 1); assert(result.velocity.dot(normal) > 1.5);
  assert(result.hits[0].contact.normal.dot(normal) > .9999);
});

test('a contact inside the one-millimetre safety gap departs during the same frame', () => {
  const physics = createPhysics(level([box('wall', [20, 5, .1], [0, 1, 0])]));
  const nose = Math.min(...physics.aircraft.parts.flatMap(part => part.vertices.map(vertex => vertex[2])));
  physics.plane.position.set(0, 1, .05 - nose + .0005);
  const start = physics.plane.position.clone(), rebound = createPracticeRebound(physics);
  const result = rebound.advance(1 / 60, new Vec3(0, 0, -1.65), new Quaternion());
  assert.equal(result.bounced, true);
  assert.equal(result.contact.body.obstacleId, 'wall');
  assert.equal(result.relocated, false);
  assert(result.velocity.z > 0);
  assert(physics.plane.position.z - start.z > .02, 'unused frame time must move away, not produce a stationary contact frame');
  assert(physics.plane.position.distanceTo(start) <= 1.65 / 60 + 1e-9, 'rebound must not exceed the frame travel budget');
  assert.equal(physics.advance(0, new Vec3()).collided, false);
});

test('floor and ceiling contacts rebound repeatedly without sticking or death', () => {
  const physics = createPhysics(level([box('floor', [100, .1, 100], [0, -.05, 0]), box('ceiling', [100, .1, 100], [0, 2.05, 0])], [0, 1, 0]));
  const result = fly(physics, new Vec3(.6, -.9, -.9), 12);
  assert(result.hits.some(hit => hit.contact.body.obstacleId === 'floor'));
  assert(result.hits.some(hit => hit.contact.body.obstacleId === 'ceiling'));
  assert(result.hits.length >= 4 && result.hits.length < 15);
  assert(result.longestStop <= 1);
});

test('two perpendicular walls let an approaching plane escape the corner', () => {
  const physics = createPhysics(level([box('wall-x', [.1, 8, 12], [0, 2, 0]), box('wall-z', [12, 8, .1], [0, 2, 0])], [1, 1, 1]));
  const result = fly(physics, new Vec3(-1.15, 0, -1.15), 2);
  assert(result.hits.length >= 1 && result.hits.length <= 4);
  assert(physics.plane.position.x > .5 && physics.plane.position.z > .5);
  assert(result.longestStop <= 2);
});

test('turning under low furniture retreats using a verified pose and clears the gap', () => {
  const physics = createPhysics(level([box('seat', [2, .06, .5], [0, 1.08, 0]), box('support', [2, .06, .5], [0, .92, 0])], [0, 1, .1]), { form: 'classic', size: .55 });
  const rebound = createPracticeRebound(physics), banked = new Quaternion(); banked.setFromEuler(0, 0, .8, 'YXZ');
  const first = rebound.advance(1 / 60, new Vec3(0, 0, -1), banked);
  assert(first.bounced); assert(first.velocity.z > 0);
  for (let i = 0; i < 120; i++) {
    rebound.advance(1 / 60, new Vec3(0, 0, 1), quaternionFor(new Vec3(0, 0, 1)));
    assert.equal(physics.advance(0, new Vec3()).collided, false);
  }
  assert(physics.plane.position.z > .8);
});

test('virtual boundaries reflect before any rotated paper vertex exits the arena', () => {
  const bounds = { minX: -2, maxX: 2, minY: 0, maxY: 3, minZ: -2, maxZ: 2 };
  const physics = createPhysics(level([], [0, 1.5, 0], bounds), { form: 'glider', size: 1.5 });
  const rebound = createPracticeRebound(physics); let velocity = new Vec3(1.3, .3, -1.1), contacts = 0;
  for (let i = 0; i < 900; i++) {
    const result = rebound.advance(1 / 60, velocity, quaternionFor(velocity));
    if (result.bounced) { contacts++; assert.equal(result.contact.body.kind, 'bounds'); }
    if (result.bounced || result.recovering) velocity = vec(result.velocity);
    for (const part of physics.aircraft.parts) for (const vertex of part.vertices) {
      const point = physics.plane.quaternion.vmult(new Vec3(...vertex)).vadd(physics.plane.position);
      for (const axis of ['x', 'y', 'z']) assert(point[axis] >= bounds[`min${axis.toUpperCase()}`] - 1e-7 && point[axis] <= bounds[`max${axis.toUpperCase()}`] + 1e-7, `${axis} vertex left bounds`);
    }
  }
  assert(contacts >= 5 && contacts < 25);
  rebound.reset(); assert.equal(rebound.recovering, false);
});

test('a forty-second flight through the actual open house survives every contact without resets', () => {
  const physics = createPhysics(HOUSE), tuning = flightTuning();
  for (const door of HOUSE.doors) physics.setDoorOpen(door.id, true);
  const rebound = createPracticeRebound(physics), dt = 1 / 30;
  let heading = 0, speed = tuning.speed, verticalSpeed = 0, hits = 0, distance = 0;
  for (let frame = 0; frame < 1200; frame++) {
    const input = { steer: 0, pitch: 0 }, position = physics.plane.position;
    const thermal = HOUSE.thermals.find(item => Math.hypot(position.x - item.x, position.z - item.z) < item.r && position.y >= item.y && position.y < item.y + item.height);
    speed = tuning.speed + (speed - tuning.speed) * Math.exp(-dt * .75);
    const forces = flightForces({ position, input, heading, speed, tuning, thermal });
    verticalSpeed = forces.targetVertical + (verticalSpeed - forces.targetVertical) * Math.exp(-4 * dt);
    const velocity = new Vec3(forces.x, verticalSpeed, forces.z), orientation = new Quaternion();
    orientation.setFromEuler(Math.atan2(verticalSpeed, speed) * .7, -heading, 0, 'YXZ');
    const prior = position.clone(), result = rebound.advance(dt, velocity, orientation);
    if (result.bounced || result.recovering) { heading = result.heading; speed = result.speed; verticalSpeed = result.verticalSpeed; }
    if (result.bounced) hits++;
    assert.equal(result.relocated, false, 'ordinary furniture/floor bounces must not send the pilot to an earlier place');
    const travel = prior.distanceTo(position); distance += travel;
    assert(travel > .0001 && travel < .1, 'continuous movement, without stuck frames or teleportation');
    assert.equal(physics.advance(0, new Vec3()).collided, false);
  }
  assert(hits >= 10); assert(distance > 50);
});

test('invalid time/input cannot move, corrupt, or silently reset the physical plane', () => {
  const physics = createPhysics(level()), rebound = createPracticeRebound(physics), before = physics.plane.position.clone();
  for (const dt of [NaN, Infinity, -1, 0]) {
    const result = rebound.advance(dt, { x: NaN, y: Infinity, z: 1e300 }, { x: NaN, y: 0, z: 0, w: 0 });
    assert.equal(result.contact.collided, false); assert.equal(result.contact.body, null);
    assert.deepEqual(physics.plane.position, before); assert(Number.isFinite(result.speed));
  }
  rebound.advance(.01, { x: 1e300, y: 0, z: -Infinity }, { x: NaN });
  assert([physics.plane.position.x, physics.plane.position.y, physics.plane.position.z].every(Number.isFinite));
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { Quaternion, Vec3 } from 'cannon-es';
import { HOUSE, FLOORS, FLOOR_HEIGHT } from '../src/house.js';
import { createPhysics } from '../src/physics.js';

const covers = (part, point) => point.every((value, axis) => Math.abs(value - part.position[axis]) <= part.size[axis] / 2 + 1e-8);
const shellPoints = y => [[5.5, y, 2.2], [8.5, y, 2.2], [7, y, 0], [7, y, 5]];

test('stairwell walls cover the entire storey joint instead of exposing a 15cm gap', () => {
  const walls = HOUSE.obstacles.filter(part => part.kind === 'wall');
  for (const upperFloor of [FLOORS.eg, FLOORS.og, FLOORS.dg]) {
    for (let offset = -.16; offset <= 1e-8; offset += .005) for (const point of shellPoints(upperFloor + offset)) {
      assert.ok(walls.some(part => covers(part, point)), `wall gap at ${point.join(',')}`);
    }
  }
  for (const floor of ['ug', 'eg', 'og']) {
    const side = walls.find(part => part.floor === floor && part.position[0] === 5.5 && covers(part, [5.5, FLOORS[floor] + 1.5, 2.2]));
    assert.ok(side, `${floor} stair wall exists`);
    assert.ok(Math.abs(side.position[1] + side.size[1] / 2 - (FLOORS[floor] + FLOOR_HEIGHT)) < 1e-8, `${floor} wall reaches next storey`);
  }
});

test('the former slit just below each floor is now opaque from inside the stairwell', () => {
  const physics = createPhysics(HOUSE);
  for (const upperFloor of [FLOORS.eg, FLOORS.og, FLOORS.dg]) {
    const from = { x: 7, y: upperFloor - .145, z: 2.2 };
    for (const to of [{ x: 5.2, y: from.y, z: 2.2 }, { x: 8.8, y: from.y, z: 2.2 }, { x: 7, y: from.y, z: -.3 }, { x: 7, y: from.y, z: 5.3 }]) {
      assert.equal(physics.hasLineOfSight(from, to), false, `open storey slit toward ${JSON.stringify(to)}`);
    }
  }
});

test('continuous stairwell walls retain full ascent and descent for every large airplane shape', () => {
  for (const form of ['classic', 'glider', 'dart', 'stunt']) {
    const physics = createPhysics(HOUSE, { form, size: 1.5 });
    physics.plane.position.set(7, -2.6, 2.2);
    const orientation = new Quaternion(); orientation.setFromEuler(0, 0, .18);
    physics.plane.quaternion.copy(orientation);
    const up = physics.advance(1, new Vec3(0, 11.3, 0), orientation);
    assert.equal(up.collided, false, `${form} ascent blocked by ${up.body?.obstacleId}`);
    assert.ok(Math.abs(physics.plane.position.y - 8.7) < 1e-8);
    const down = physics.advance(1, new Vec3(0, -11.3, 0), orientation);
    assert.equal(down.collided, false, `${form} descent blocked by ${down.body?.obstacleId}`);
    assert.ok(Math.abs(physics.plane.position.y + 2.6) < 1e-8);
  }
});

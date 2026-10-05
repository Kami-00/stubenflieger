import test from 'node:test';
import assert from 'node:assert/strict';
import {
  LEVELS, getLevel, getWalls, METERS_PER_UNIT, PLANE_RADIUS,
  ROOM_WIDTH, ROOM_DEPTH, DOOR_WIDTH, DOOR_HEIGHT,
} from '../src/levels.js';
import { createPhysics } from '../src/physics.js';

const roomKey = room => `${room.x},${room.z}`;
const neighbours = (a, b) =>
  (a.z === b.z && Math.abs(a.x - b.x) === ROOM_WIDTH) ||
  (a.x === b.x && Math.abs(a.z - b.z) === ROOM_DEPTH);
const containsPoint = (wall, point) => wall.size.every((size, axis) =>
  Math.abs(point[axis] - wall.position[axis]) < size / 2 - 1e-8);
const roomContains = (room, point, margin = 0) =>
  Math.abs(point.x - room.x) < ROOM_WIDTH / 2 - margin &&
  Math.abs(point.z - room.z) < ROOM_DEPTH / 2 - margin;

// Measure the union of the playable floor rectangles, including L-shaped levels.
// A bounding box alone would include inaccessible space outside the house.
function floorArea(rooms) {
  const xs = [...new Set(rooms.flatMap(room => [room.x - ROOM_WIDTH / 2, room.x + ROOM_WIDTH / 2]))].sort((a, b) => a - b);
  let area = 0;
  for (let index = 1; index < xs.length; index++) {
    const midpoint = (xs[index - 1] + xs[index]) / 2;
    const intervals = rooms.filter(room => Math.abs(room.x - midpoint) < ROOM_WIDTH / 2)
      .map(room => [room.z - ROOM_DEPTH / 2, room.z + ROOM_DEPTH / 2]).sort((a, b) => a[0] - b[0]);
    let covered = 0, end = -Infinity;
    for (const [low, high] of intervals) {
      covered += Math.max(0, high - Math.max(low, end));
      end = Math.max(end, high);
    }
    area += (xs[index] - xs[index - 1]) * covered;
  }
  return area;
}

test('levels increase the playable area, room count and collection objectives', () => {
  assert.ok(LEVELS.length >= 8);
  let previous;
  for (const level of LEVELS) {
    const rooms = new Set(level.rooms.map(roomKey));
    assert.equal(rooms.size, level.rooms.length, `level ${level.id}: repeated room`);
    assert.ok(level.collectibles.length >= 12);
    assert.ok(level.goalBlocks > 0);
    const availableBlocks = level.towers.reduce((sum, tower) => sum + tower.layers * 3, 0);
    assert.ok(level.goalBlocks <= availableBlocks, `level ${level.id}: impossible block objective`);
    assert.ok(availableBlocks <= 250, `level ${level.id}: excessive dynamic-body count`);
    assert.ok(Math.abs(level.ceiling * METERS_PER_UNIT - 2.8) < 1e-10);
    for (const room of level.rooms) {
      assert.ok(room.x - ROOM_WIDTH / 2 >= level.bounds.minX);
      assert.ok(room.x + ROOM_WIDTH / 2 <= level.bounds.maxX);
      assert.ok(room.z - ROOM_DEPTH / 2 >= level.bounds.minZ);
      assert.ok(room.z + ROOM_DEPTH / 2 <= level.bounds.maxZ);
    }
    if (previous) {
      assert.ok(level.id > previous.id);
      assert.ok(level.rooms.length > previous.rooms.length);
      assert.ok(floorArea(level.rooms) > floorArea(previous.rooms), `level ${level.id}: area did not grow`);
      assert.ok(level.collectibles.length > previous.collectibles.length);
      assert.ok(level.goalBlocks > previous.goalBlocks);
      for (const room of previous.rooms) assert.ok(rooms.has(roomKey(room)), 'a previous room disappeared');
    }
    previous = level;
  }
  assert.equal(getLevel(-20), LEVELS[0]);
  assert.equal(getLevel(LEVELS.length + 20), LEVELS.at(-1));
});

test('every room has reachable-height collectibles inside its walls', () => {
  for (const level of LEVELS) {
    const counts = new Map(level.rooms.map(room => [roomKey(room), 0]));
    assert.equal(new Set(level.collectibles.map(mark => mark.id)).size, level.collectibles.length);
    for (const mark of level.collectibles) {
      assert.ok([mark.x, mark.y, mark.z].every(Number.isFinite));
      assert.ok(mark.y > PLANE_RADIUS, `level ${level.id}: mark below the floor`);
      assert.ok(mark.y < level.ceiling - PLANE_RADIUS, `level ${level.id}: mark above the flight ceiling`);
      assert.ok(mark.x > level.bounds.minX && mark.x < level.bounds.maxX);
      assert.ok(mark.z > level.bounds.minZ && mark.z < level.bounds.maxZ);
      const rooms = level.rooms.filter(room => roomContains(room, mark, PLANE_RADIUS));
      assert.equal(rooms.length, 1, `level ${level.id}: mark outside the playable house`);
      counts.set(roomKey(rooms[0]), counts.get(roomKey(rooms[0])) + 1);
    }
    for (const count of counts.values()) assert.ok(count >= 12, `level ${level.id}: a room lacks collection targets`);
    assert.equal(level.rooms.filter(room => roomContains(room, level.start, PLANE_RADIUS)).length, 1);
  }
});

test('all rooms connect through open doors while exterior edges stay closed', () => {
  for (const level of LEVELS) {
    const walls = getWalls(level);
    const graph = new Map(level.rooms.map(room => [roomKey(room), []]));
    for (let index = 0; index < level.rooms.length; index++) {
      const room = level.rooms[index];
      for (const other of level.rooms.slice(index + 1)) {
        if (!neighbours(room, other)) continue;
        const centre = [(room.x + other.x) / 2, 3, (room.z + other.z) / 2];
        const across = room.x === other.x ? 0 : 2;
        for (const offset of [-DOOR_WIDTH / 2 + PLANE_RADIUS + .1, 0, DOOR_WIDTH / 2 - PLANE_RADIUS - .1]) {
          for (const height of [1, 3, DOOR_HEIGHT - PLANE_RADIUS - .1]) {
            const point = [...centre];
            point[across] += offset;
            point[1] = height;
            assert.ok(!walls.some(wall => containsPoint(wall, point)), `level ${level.id}: blocked doorway`);
          }
        }
        const jamb = [...centre];
        jamb[across] += DOOR_WIDTH / 2 + .1;
        assert.ok(walls.some(wall => containsPoint(wall, jamb)), 'missing door jamb');
        const header = [...centre];
        header[1] = DOOR_HEIGHT + .1;
        assert.ok(walls.some(wall => containsPoint(wall, header)), 'missing lintel');
        graph.get(roomKey(room)).push(roomKey(other));
        graph.get(roomKey(other)).push(roomKey(room));
      }
      for (const [dx, dz] of [[ROOM_WIDTH, 0], [-ROOM_WIDTH, 0], [0, ROOM_DEPTH], [0, -ROOM_DEPTH]]) {
        if (level.rooms.some(other => other.x === room.x + dx && other.z === room.z + dz)) continue;
        assert.ok(walls.some(wall => containsPoint(wall, [room.x + dx / 2, 3, room.z + dz / 2])), `level ${level.id}: exterior doorway`);
      }
    }
    const visited = new Set();
    const queue = [roomKey(level.rooms[0])];
    while (queue.length) {
      const key = queue.pop();
      if (visited.has(key)) continue;
      visited.add(key);
      queue.push(...graph.get(key));
    }
    assert.equal(visited.size, level.rooms.length, `level ${level.id}: disconnected room`);
  }
});

test('ceiling protection clamps the complete aircraft and removes upward force', () => {
  const physics = createPhysics(LEVELS.at(-1));
  const { plane, level } = physics;
  const maximum = level.ceiling - PLANE_RADIUS;
  plane.position.y = level.ceiling + 6;
  plane.previousPosition.y = level.ceiling + 5;
  plane.interpolatedPosition.y = level.ceiling + 4;
  plane.velocity.set(4, 8, -3);
  plane.force.set(7, 200, -2);
  assert.equal(physics.enforceCeiling(), true);
  assert.equal(plane.position.y, maximum);
  assert.ok(plane.previousPosition.y <= maximum);
  assert.ok(plane.interpolatedPosition.y <= maximum);
  assert.equal(plane.velocity.y, 0);
  assert.equal(plane.force.y, 0);
  assert.equal(plane.velocity.x, 4);
  assert.equal(plane.force.z, -2);
  assert.equal(physics.enforceCeiling(), false);
  assert.ok(plane.position.y * METERS_PER_UNIT < 2.8);
  const ceilings = physics.world.bodies.filter(body => body.kind === 'ceiling');
  assert.equal(ceilings.length, level.rooms.length);
  for (const ceiling of ceilings) {
    assert.ok(Math.abs(ceiling.position.y - ceiling.shapes[0].halfExtents.y - level.ceiling) < 1e-10);
  }
});

test('standing towers never award free points and a reset clears motion and score', () => {
  for (const level of LEVELS) {
    const physics = createPhysics(level);
    for (let step = 0; step < 180; step++) physics.world.step(1 / 60);
    assert.equal(physics.countFallen(), 0, `level ${level.id}: untouched tower was scored`);
    const block = physics.blocks[0];
    block.body.position.x += 2;
    block.body.velocity.set(3, 2, 1);
    block.body.angularVelocity.set(1, 2, 3);
    block.body.force.set(1, 2, 3);
    block.body.torque.set(3, 2, 1);
    assert.equal(physics.countFallen(), 1);
    block.body.position.copy(block.home);
    assert.equal(physics.countFallen(), 1, 'a fallen block should remain counted');
    physics.plane.position.y = 15;
    physics.plane.force.set(1, 2, 3);
    physics.plane.torque.set(1, 2, 3);
    physics.plane.collisionFilterMask = -1;
    physics.reset();
    assert.equal(physics.countFallen(), 0);
    assert.equal(physics.plane.position.y, level.start.y);
    assert.equal(physics.plane.collisionFilterMask, 0);
    for (const body of [physics.plane, block.body]) {
      for (const vector of [body.velocity, body.angularVelocity, body.force, body.torque]) assert.equal(vector.lengthSquared(), 0);
      assert.equal(body.previousPosition.distanceTo(body.position), 0);
      assert.equal(body.interpolatedPosition.distanceTo(body.position), 0);
    }
    assert.equal(physics.world.contacts.length, 0);
    assert.equal(physics.world.accumulator, 0);
    for (let step = 0; step < 60; step++) physics.world.step(1 / 60);
    assert.equal(physics.countFallen(), 0, `level ${level.id}: reset tower was scored`);
  }
});

function flyThrough(level, start, velocity) {
  const physics = createPhysics(level);
  physics.plane.collisionFilterMask = -1;
  physics.plane.position.set(...start);
  let solidContacts = 0;
  physics.plane.addEventListener('collide', event => {
    if (event.body.kind === 'solid') solidContacts++;
  });
  for (let step = 0; step < 70; step++) {
    physics.plane.velocity.set(...velocity);
    physics.plane.force.y = physics.plane.mass * 9.82;
    physics.world.step(1 / 60);
    physics.enforceCeiling();
  }
  return { position: physics.plane.position, solidContacts };
}

test('actual physics permits both door orientations and blocks jambs, lintels and the exterior', () => {
  const northDoor = flyThrough(getLevel(1), [0, 3, -14], [0, 0, -8]);
  assert.ok(northDoor.position.z < -22);
  assert.equal(northDoor.solidContacts, 0);
  const eastDoor = flyThrough(getLevel(2), [10, 3, -34], [8, 0, 0]);
  assert.ok(eastDoor.position.x > 18);
  assert.equal(eastDoor.solidContacts, 0);
  const jamb = flyThrough(getLevel(1), [6, 3, -14], [0, 0, -8]);
  assert.ok(jamb.position.z > -17);
  assert.ok(jamb.solidContacts > 0);
  const lintel = flyThrough(getLevel(1), [0, DOOR_HEIGHT + 1, -14], [0, 0, -8]);
  assert.ok(lintel.position.z > -17);
  assert.ok(lintel.solidContacts > 0);
  const exterior = flyThrough(getLevel(1), [0, 3, 14], [0, 0, 8]);
  assert.ok(exterior.position.z < 17);
  assert.ok(exterior.solidContacts > 0);
});

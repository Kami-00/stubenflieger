import test from 'node:test';
import assert from 'node:assert/strict';
import { Quaternion, Vec3 } from 'cannon-es';
import { createPhysics, STAR_COLLECTION_RADIUS } from '../src/physics.js';
import { HOUSE, getDoorPose } from '../src/house.js';

const box = (id, size, position, kind = 'furniture', rotation = [0, 0, 0]) => ({ id, size, position, kind, rotation });
const fixture = (obstacles = [], doors = [], start = [0, 1, 2]) => ({ obstacles, doors, start });
const fly = (physics, dt = 1, velocity = [0, 0, -4], quaternion = physics.plane.quaternion) => physics.advance(dt, new Vec3(...velocity), quaternion);

test('wing tips collide while the empty corners and space above paper remain free', () => {
  const hit = createPhysics(fixture([box('wing-tip', [0.025, 0.03, 0.05], [0.213, 1.009, 0])]));
  let events = 0;
  hit.plane.addEventListener('collide', () => events++);
  assert.equal(fly(hit).collided, true);
  assert.equal(events, 1);
  assert.equal(fly(createPhysics(fixture([box('outside-wing', [0.015, 0.05, 0.1], [0.25, 1.009, 0])]))).collided, false);
  const corner = createPhysics(fixture([box('empty-triangle-corner', [0.02, 0.02, 0.02], [0.185, 1, -0.117])], [], [0, 1, 0]));
  assert.equal(fly(corner, 0, [0, 0, 0]).collided, false, 'triangle wing must not become an enclosing box');
  assert.equal(fly(createPhysics(fixture([box('above-wing', [0.2, 0.03, 0.2], [0.15, 1.08, 0])]))).collided, false);
});

test('banked wings and scaled forms retain matching compound hulls', () => {
  const q = new Quaternion(); q.setFromEuler(0, 0, Math.PI / 2);
  const physics = createPhysics(fixture([box('banked-wing-tip', [0.025, 0.025, 0.05], [-0.009, 1.213, 0])]));
  physics.plane.quaternion.copy(q);
  assert.equal(fly(physics, 1, [0, 0, -4], q).collided, true);
  for (const size of [0.55, 1, 1.5]) {
    const p = createPhysics(fixture(), { form: 'glider', size });
    assert.equal(p.plane.shapes.length, p.aircraft.parts.length);
    p.aircraft.parts.forEach((part, i) => part.vertices.forEach((vertex, j) => {
      p.plane.shapes[i].vertices[j].vadd(p.plane.shapeOffsets[i]).toArray().forEach((value, axis) => assert.ok(Math.abs(value - vertex[axis]) < 1e-12));
    }));
  }
});

test('small aircraft passes a real gap that is too narrow for standard and large wings', () => {
  const gap = [box('left', [0.4, 2, 0.2], [-0.38, 1, 0]), box('right', [0.4, 2, 0.2], [0.38, 1, 0])];
  for (const size of [0.55, 1, 1.5]) {
    const physics = createPhysics(fixture(gap), { form: 'classic', size });
    assert.equal(fly(physics).collided, size !== 0.55);
    if (size === 0.55) assert.equal(physics.plane.position.z, -2);
  }
});

test('very fast flight cannot tunnel through thin obstacles at any supported size', () => {
  for (const size of [0.55, 1, 1.5]) {
    const physics = createPhysics(fixture([box('thin-wall', [4, 3, 0.006], [0, 1, 0], 'wall')]), { form: 'classic', size });
    const collision = fly(physics, 0.05, [0, 0, -150]);
    assert.equal(collision.collided, true);
    assert.ok(physics.plane.position.z >= physics.aircraft.length / 2);
    assert.equal(collision.body.obstacleId, 'thin-wall');
  }
});

test('turning impacts leave the rendered hull clear for a cushion retreat', () => {
  const physics = createPhysics(fixture([box('wall', [8, 4, 0.006], [0, 1, 0], 'wall')]));
  for (let i = 0; i < 24; i++) {
    physics.plane.position.set(0, 1, 0.5);
    physics.plane.quaternion.setFromEuler(0, i * Math.PI / 12, 0);
    const target = new Quaternion(); target.setFromEuler(0.4, i * Math.PI / 12 + 0.66, 0.2);
    assert.equal(fly(physics, 0.25, [0, 0, -2], target).collided, true);
    assert.equal(fly(physics, 0, [0, 0, 0]).collided, false, 'actual final pose must remain outside the wall');
    assert.equal(fly(physics, 0.1, [0, 0, 2]).collided, false, 'cushion can retreat without another contact');
  }
});

test('table and chair legs leave real low flight routes', () => {
  const table = [box('table-top', [1.6, 0.06, 1], [0, 0.76, 0])];
  for (const x of [-0.65, 0.65]) for (const z of [-0.4, 0.4]) table.push(box(`leg-${x}-${z}`, [0.05, 0.72, 0.05], [x, 0.36, z]));
  const underTable = createPhysics(fixture(table, [], [0, 0.4, 2]));
  assert.equal(fly(underTable).collided, false);
  const chair = [box('seat', [0.5, 0.045, 0.5], [0, 0.46, 0])];
  for (const x of [-0.225, 0.225]) for (const z of [-0.225, 0.225]) chair.push(box(`chair-leg-${x}-${z}`, [0.05, 0.435, 0.05], [x, 0.2175, z]));
  assert.equal(fly(createPhysics(fixture(chair, [], [0, 0.24, 2]), { form: 'classic', size: 0.55 })).collided, false);
  assert.equal(fly(createPhysics(fixture(chair, [], [0, 0.24, 2]))).collided, true);
});

test('closed doors block flight and opened doors keep their real leaf beside the opening', () => {
  const door = { id: 'test-door', size: [1.1, 2.2, 0.055], position: [0, 1.1, 0], rotation: [0, 0, 0], hinge: { position: [-0.55, 1.1, 0], angle: -Math.PI / 2 } };
  const physics = createPhysics(fixture([], [door]));
  assert.equal(fly(physics).collided, true);
  physics.reset(); physics.setDoorOpen('test-door', true);
  assert.equal(fly(physics).collided, false);
  const pose = getDoorPose(door, true), entry = physics.doorBodies.get(door.id);
  assert.deepEqual(entry.obstacle.body.position.toArray(), pose.position);
  physics.plane.position.set(-0.55, 1, 2);
  assert.equal(fly(physics).collided, true, 'the open door leaf remains solid');
  physics.reset(); assert.equal(entry.open, false);
});

test('star collection includes wing tips and the swept path between frames', () => {
  const physics = createPhysics(fixture());
  const previous = physics.plane.position.clone();
  fly(physics, 0.05, [0, 0, -100]);
  assert.equal(physics.canCollectStar({ x: 0.42, y: 1.01, z: 0 }, previous), true);
  assert.equal(physics.canCollectStar({ x: 0.54, y: 1.015, z: 0 }, previous), false);
  assert.equal(physics.canCollectStar({ x: 0, y: 1, z: 0 }, previous), true);
  assert.equal(STAR_COLLECTION_RADIUS, 0.24);
  const touch = createPhysics(fixture([], [], [0, 1, 0]));
  assert.equal(touch.canCollectStar({ x: 0.213, y: 1.009, z: 0.0819, collectRadius: 0.003 }, touch.plane.position), true);
  assert.equal(touch.canCollectStar({ x: 0, y: 0.986, z: 0, collectRadius: 0 }, touch.plane.position), true);
});

test('bank and size alter real star reach, and magnets cannot collect through walls', () => {
  const rotated = createPhysics(fixture([], [], [0, 1, 0]));
  rotated.plane.quaternion.setFromEuler(0, 0, Math.PI / 2);
  assert.equal(rotated.canCollectStar({ x: -0.009, y: 1.213, z: 0.0819, collectRadius: 0.005 }, rotated.plane.position), true);
  const small = createPhysics(fixture([], [], [0, 1, 0]), { form: 'classic', size: 0.55 });
  assert.equal(small.canCollectStar({ x: 0.47, y: 1, z: 0 }, small.plane.position), false);
  const wall = createPhysics(fixture([box('wall', [0.04, 3, 4], [0.35, 1, 0], 'wall')], [], [0, 1, 0]));
  const star = { x: 0.48, y: 1, z: 0.1 };
  assert.equal(wall.canCollectStar(star, wall.plane.position, 1.5), false);
  assert.equal(wall.hasLineOfSight(wall.plane.position, star), false);
  assert.equal(wall.hasLineOfSight([0, 1, 0], [0, 1, 1]), true);
});

test('no global height clamp stops open shafts or garden flight', () => {
  const slabs = [box('left-slab', [4, 0.14, 4], [-2.65, 3.08, 0], 'floor'), box('right-slab', [4, 0.14, 4], [2.65, 3.08, 0], 'floor')];
  const shaft = createPhysics(fixture(slabs, [], [0, -2, 0]));
  assert.equal(fly(shaft, 1, [0, 12, 0]).collided, false);
  assert.equal(shaft.plane.position.y, 10);
  assert.equal(shaft.getCeilingAt({ x: 0, y: 1, z: 0 }), Infinity);
  assert.ok(Math.abs(shaft.getCeilingAt({ x: 2, y: 1, z: 0 }) - 3.01) < 1e-10);
  const slab = createPhysics(fixture(slabs, [], [2, 1, 0]));
  assert.equal(fly(slab, 1, [0, 12, 0]).collided, true);
});

test('camera trace stops before a wall and reset clears flight motion', () => {
  const physics = createPhysics(fixture([box('wall', [4, 3, 0.12], [0, 1, 0], 'wall')]));
  const camera = physics.traceCamera([0, 1, 1], [0, 1, -2], 0.18);
  assert.ok(camera.z > 0.24);
  fly(physics); physics.reset();
  assert.deepEqual(physics.plane.position.toArray(), [0, 1, 2]);
  assert.equal(physics.plane.velocity.lengthSquared(), 0);
  assert.equal(physics.plane.previousPosition.distanceTo(physics.plane.position), 0);
});

test('the complete house starts clear, has a usable vertical stair shaft, and supplies exact geometry', () => {
  const physics = createPhysics(HOUSE);
  assert.equal(fly(physics, 0, [0, 0, 0]).collided, false, 'launch point must be clear');
  assert.equal(physics.world.bodies.length, HOUSE.obstacles.length + HOUSE.doors.length + 1);
  physics.plane.position.set(7, -2, 2.1);
  const contact = fly(physics, 1, [0, 10, 0]);
  assert.equal(contact.collided, false, `stair shaft blocked by ${contact.body?.obstacleId}`);
  assert.equal(physics.plane.position.y, 8);
});

test('every open window is a real two-way passage through the complete house', () => {
  const physics = createPhysics(HOUSE);
  for (const door of HOUSE.doors) physics.setDoorOpen(door.id, true);
  const windows = HOUSE.openings.filter(opening => opening.type === 'window' && opening.open);
  assert.ok(windows.length >= 3);
  for (const window of windows) for (const side of [-1, 1]) {
    const normal = window.horizontal ? [0, 0, 1] : [1, 0, 0], centre = window.position;
    physics.plane.position.set(centre[0] + normal[0] * 0.7 * side, centre[1], centre[2] + normal[2] * 0.7 * side);
    const orientation = new Quaternion(); orientation.setFromEuler(0, Math.atan2(normal[0] * side, normal[2] * side), 0);
    physics.plane.quaternion.copy(orientation);
    const contact = fly(physics, 0.5, normal.map(n => -n * 2.8 * side), orientation);
    assert.equal(contact.collided, false, `${window.id} blocked by ${contact.body?.obstacleId}`);
  }
});

test('all opened house doors permit both directions without neighbouring door-leaf collisions', () => {
  const physics = createPhysics(HOUSE);
  for (const door of HOUSE.doors) physics.setDoorOpen(door.id, true);
  for (const door of HOUSE.doors) for (const side of [-1, 1]) {
    const yaw = door.rotation[1], normal = [Math.sin(yaw), 0, Math.cos(yaw)], centre = door.position;
    physics.plane.position.set(centre[0] + normal[0] * 0.7 * side, centre[1], centre[2] + normal[2] * 0.7 * side);
    const orientation = new Quaternion(); orientation.setFromEuler(0, Math.atan2(normal[0] * side, normal[2] * side), 0);
    physics.plane.quaternion.copy(orientation);
    const contact = fly(physics, 0.5, normal.map(n => -n * 2.8 * side), orientation);
    assert.equal(contact.collided, false, `${door.id} blocked by ${contact.body?.obstacleId}`);
  }
});

test('every star has a clear pickup pose for the free standard plane and small plane', () => {
  for (const size of [1, 0.55]) {
    const physics = createPhysics(HOUSE, { form: 'classic', size });
    for (const open of [false, true]) {
      for (const door of HOUSE.doors) physics.setDoorOpen(door.id, open);
      for (const star of HOUSE.collectibles) {
        const reachable = [0, Math.PI / 2].some(yaw => {
          physics.plane.position.set(star.x, star.y, star.z);
          physics.plane.quaternion.setFromEuler(0, yaw, 0);
          return !fly(physics, 0, [0, 0, 0]).collided && physics.canCollectStar(star, physics.plane.position);
        });
        assert.equal(reachable, true, `${star.id} lacks a clear standard pickup pose; size ${size}, doors open: ${open}`);
      }
    }
  }
});

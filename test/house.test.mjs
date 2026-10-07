import test from 'node:test';
import assert from 'node:assert/strict';
import { Euler, Quaternion, Vector3 } from 'three';
import { HOUSE, FLOORS, getDoorPose, getRoomAt } from '../src/house.js';

const EPS = 1e-6;
function localPoint(part, position) {
  return new Vector3(position.x - part.position[0], position.y - part.position[1], position.z - part.position[2])
    .applyQuaternion(new Quaternion().setFromEuler(new Euler(...(part.rotation || [0, 0, 0]))).invert());
}
function contains(part, position, padding = 0) {
  const p = localPoint(part, position);
  return ['x', 'y', 'z'].every((axis, i) => Math.abs(p[axis]) < part.size[i] / 2 + padding - EPS);
}

test('one complete metre-scaled house has all floors, stable identifiers and finite shared geometry', () => {
  assert.deepEqual(FLOORS, { ug: -3.15, eg: 0, og: 3.15, dg: 6.3 });
  assert.deepEqual(new Set(HOUSE.rooms.map(room => room.floor)), new Set(['ug', 'eg', 'og', 'dg', 'garden']));
  for (const collection of [HOUSE.rooms, HOUSE.doors, HOUSE.obstacles, HOUSE.collectibles]) assert.equal(new Set(collection.map(item => item.id)).size, collection.length);
  for (const part of [...HOUSE.obstacles, ...HOUSE.doors]) {
    assert.ok(part.size.every(n => Number.isFinite(n) && n > 0), part.id);
    assert.ok(part.position.every(Number.isFinite), part.id);
    assert.ok(part.rotation.every(Number.isFinite), part.id);
  }
  assert.equal(getRoomAt(HOUSE.start).id, 'living');
  assert.equal(getRoomAt({ x: 2, y: -2, z: 2 }).id, 'workshop');
  assert.equal(getRoomAt({ x: 2, y: 4, z: 2 }).id, 'bedroom');
  assert.equal(getRoomAt({ x: 7, y: 8, z: 8 }).id, 'attic');
  assert.equal(getRoomAt({ x: 16, y: 5, z: 2 }).id, 'garden');
  assert.equal(getRoomAt({ x: 7, y: 12, z: 8 }).id, 'garden');
  assert.equal(getRoomAt({ x: NaN, y: 1, z: 1 }), null);
});

test('closed start room is bounded and has enough unobstructed stars to open its first door', () => {
  const initial = HOUSE.collectibles.filter(star => star.roomId === HOUSE.startRoomId);
  assert.ok(initial.filter(star => !star.under).length >= 4);
  const exits = HOUSE.doors.filter(door => door.rooms.includes(HOUSE.startRoomId));
  assert.ok(exits.length >= 2);
  assert.ok(Math.min(...exits.map(door => door.threshold)) <= 2);
  assert.ok(initial.length >= Math.min(...exits.map(door => door.threshold)));
  assert.ok(exits.every(door => !door.open));
  assert.ok(!HOUSE.obstacles.some(part => contains(part, HOUSE.start, .15)), 'launch volume must be clear');
  for (const star of initial.filter(star => !star.under)) assert.ok(!HOUSE.obstacles.some(part => contains(part, star, .08)), `start star ${star.id} must be in free space`);
  const livingWindows = HOUSE.openings.filter(opening => opening.floor === 'eg' && opening.type === 'window' && opening.open);
  assert.ok(livingWindows.every(opening => !(opening.position[0] >= 8.5 && opening.position[2] <= 7)), 'start room must not have an open escape window');
});

test('star thresholds permit continuing through the connected world without spending stars', () => {
  const accessible = new Set([HOUSE.startRoomId]);
  let previous = -1;
  while (previous !== accessible.size) {
    previous = accessible.size;
    const count = HOUSE.collectibles.filter(star => accessible.has(star.roomId)).length;
    const edges = [...HOUSE.connections, ...HOUSE.doors.filter(door => door.threshold <= count).map(door => door.rooms)];
    for (const [from, to] of edges) if (accessible.has(from) || accessible.has(to)) { accessible.add(from); accessible.add(to); }
  }
  for (const room of HOUSE.rooms) assert.ok(accessible.has(room.id), `${room.id} cannot be reached from available stars`);
  assert.ok(Math.max(...HOUSE.doors.map(door => door.threshold)) < HOUSE.collectibles.length);
});

test('door holes have real clearance and opened leaves rotate around their declared hinge', () => {
  for (const door of HOUSE.doors) {
    const opening = HOUSE.openings.find(item => item.id === door.id);
    assert.ok(opening, door.id);
    const point = { x: opening.position[0], y: opening.sill + 1.1, z: opening.position[2] };
    assert.ok(!HOUSE.obstacles.some(part => ['wall', 'trim', 'glass'].includes(part.kind) && contains(part, point, .12)), `${door.id}: fixed obstacle in doorway`);
    const closed = getDoorPose(door, false), open = getDoorPose(door, true);
    assert.deepEqual(closed.size, open.size);
    const hinge = door.hinge.position;
    const radius = pose => Math.hypot(pose.position[0] - hinge[0], pose.position[2] - hinge[2]);
    assert.ok(Math.abs(radius(open) - radius(closed)) < EPS);
    assert.ok(Math.hypot(open.position[0] - closed.position[0], open.position[2] - closed.position[2]) > .5);
    assert.ok(!contains(open, point, .06), `${door.id}: open leaf still fills its portal`);
    assert.deepEqual(door.position, closed.position, 'pose calculation must not mutate source data');
  }
});

test('open exterior windows and the sloping roof window are real holes in shared solids', () => {
  const windows = HOUSE.openings.filter(opening => opening.type === 'window' && opening.open);
  assert.equal(windows.length, 3);
  for (const opening of windows) {
    const centre = { x: opening.position[0], y: (opening.sill + opening.head) / 2, z: opening.position[2] };
    for (const offset of [-.2, 0, .2]) {
      const point = { ...centre, [opening.horizontal ? 'z' : 'x']: centre[opening.horizontal ? 'z' : 'x'] + offset };
      assert.ok(!HOUSE.obstacles.some(part => contains(part, point, .13)), `${opening.id}: blocked window volume`);
    }
  }
  const roof = HOUSE.openings.find(opening => opening.type === 'roof-window');
  assert.ok(roof?.open);
  const centre = { x: roof.position[0], y: roof.position[1], z: roof.position[2] };
  assert.ok(!HOUSE.obstacles.some(part => contains(part, centre, .16)), 'roof-window centre must be unobstructed');
  assert.ok(HOUSE.obstacles.some(part => part.kind === 'roof' && contains(part, { ...centre, z: 6.9 })), 'roof beside the window must remain solid');
});

test('the aligned stairwell has no ceiling slab or stair tread across its flight shaft', () => {
  for (let y = -2.8; y <= 9; y += .08) {
    const point = { x: 7, y, z: 2.2 };
    assert.ok(!HOUSE.obstacles.some(part => contains(part, point, .28)), `shaft blocked at y=${y.toFixed(2)}`);
  }
  for (const y of [0, 3.15, 6.3]) {
    assert.ok(!HOUSE.obstacles.some(part => part.kind === 'floor' && contains(part, { x: 7, y: y - .07, z: 2.2 })), 'floor must have a real stair opening');
    assert.ok(HOUSE.obstacles.some(part => part.kind === 'floor' && contains(part, { x: 2, y: y - .07, z: 2 })), 'normal rooms must retain a floor');
  }
  const lift = HOUSE.thermals.find(item => item.id === 'stairwell-lift');
  assert.ok(lift.y < 0 && lift.y + lift.height > 9 && lift.r >= .4);
});

test('tables and chairs expose empty underflight volumes and authored low stars', () => {
  const furniture = HOUSE.furniture.filter(item => item.kind === 'table' || item.kind === 'chair');
  assert.ok(furniture.filter(item => item.kind === 'chair').length >= 10);
  for (const item of furniture) {
    const y = FLOORS[item.floor] ?? 0;
    const point = { x: item.x + item.width / 2, y: y + Math.min(.22, item.underClearance / 2), z: item.z + item.depth / 2 };
    assert.ok(!HOUSE.obstacles.some(part => contains(part, point, .04)), `${item.id}: underflight centre filled by a collider`);
  }
  const low = HOUSE.collectibles.filter(star => star.under);
  assert.ok(low.length >= 15);
  assert.ok(low.some(star => HOUSE.furniture.some(item => item.kind === 'chair' && item.roomId === star.roomId && star.x > item.x && star.x < item.x + item.width && star.z > item.z && star.z < item.z + item.depth)), 'at least one star is really under a chair');
  for (const star of HOUSE.collectibles) assert.ok(!HOUSE.obstacles.some(part => contains(part, star, .025)), `${star.id}: collectible centre inside furniture or masonry`);
});

test('wall-backed cabinets remain next to their wall rather than floating into the room', () => {
  for (const item of HOUSE.furniture.filter(item => item.kind === 'cabinet' && item.back)) {
    const { axis, value, edge } = item.back;
    const coordinate = axis === 'x' ? item.x + (edge === 'max' ? item.width : 0) : item.z + (edge === 'max' ? item.depth : 0);
    // Wall centre lines have a 6 cm half-thickness; compare the usable wall face.
    const gap = Math.abs(coordinate - value) - .06;
    assert.ok(gap >= -.001 && gap <= .06 + EPS, `${item.id}: gap ${gap.toFixed(3)}m`);
  }
  for (let i = 0; i < HOUSE.furniture.length; i++) for (const b of HOUSE.furniture.slice(i + 1)) {
    const a = HOUSE.furniture[i];
    if (a.floor !== b.floor || a.kind === 'plant' || b.kind === 'plant') continue;
    const width = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
    const depth = Math.min(a.z + a.depth, b.z + b.depth) - Math.max(a.z, b.z);
    assert.ok(width <= EPS || depth <= EPS, `${a.id} overlaps ${b.id}`);
  }
});

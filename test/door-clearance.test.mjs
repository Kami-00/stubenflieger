import test from 'node:test';
import assert from 'node:assert/strict';
import { Euler, Quaternion, Vector3 } from 'three';
import { Quaternion as PhysicsQuaternion, Vec3 } from 'cannon-es';
import { HOUSE, getDoorPose } from '../src/house.js';
import { createPhysics } from '../src/physics.js';

const EPS = 1e-8;
const axes = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
function box(part) {
  const rotation = new Quaternion().setFromEuler(new Euler(...(part.rotation || [0, 0, 0])));
  return { ...part, center: new Vector3(...part.position), half: part.size.map(value => value / 2),
    axes: axes.map(axis => new Vector3(...axis).applyQuaternion(rotation)) };
}
// All 15 OBB separating axes, including the nine edge cross products.
function penetration(a, b) {
  const delta = b.center.clone().sub(a.center);
  let minimum = Infinity;
  for (const axis of [...a.axes, ...b.axes, ...a.axes.flatMap(x => b.axes.map(y => x.clone().cross(y)))]) {
    if (axis.lengthSq() < 1e-16) continue;
    const normal = axis.clone().normalize();
    const radius = part => part.half.reduce((sum, half, i) => sum + half * Math.abs(normal.dot(part.axes[i])), 0);
    const overlap = radius(a) + radius(b) - Math.abs(normal.dot(delta));
    if (overlap <= EPS) return 0;
    minimum = Math.min(minimum, overlap);
  }
  return minimum;
}
function doorParts(door, open) {
  const pose = getDoorPose(door, open), rotation = new Quaternion().setFromEuler(new Euler(...pose.rotation));
  // Scene signs extend to 4 cm from the leaf centre, on both sides. Check their
  // actual central footprint rather than inflating the entire hinged leaf.
  return [box({ ...pose, id: door.id }), ...[-1, 1].map(side => box({
    id: `${door.id}-sign-${side}`, size: [.54, .23, .012], rotation: pose.rotation,
    position: new Vector3(0, .37, side * (door.size[2] / 2 + .0065)).applyQuaternion(rotation).add(new Vector3(...pose.position)).toArray(),
  }))];
}
const solids = HOUSE.obstacles.map(box);
const leaves = HOUSE.doors.map(door => ({ door, states: [doorParts(door, false), doorParts(door, true)] }));

test('OBB clearance distinguishes rotated thin boxes from their overlapping bounding boxes', () => {
  const first = box({ size: [2, .2, .1], position: [0, 0, 0], rotation: [0, Math.PI / 4, 0] });
  const parallel = box({ size: [2, .2, .1], position: [.15, 0, .15], rotation: [0, Math.PI / 4, 0] });
  const crossing = box({ size: [2, .2, .1], position: [0, 0, 0], rotation: [.2, -Math.PI / 4, .1] });
  assert.equal(penetration(first, parallel), 0);
  assert(penetration(first, crossing) > .09);
  assert.equal(penetration(box({ size: [2, 2, 2], position: [0, 0, 0] }), box({ size: [2, 2, 2], position: [1.5, 0, 0] })), .5);
});

test('all 22 closed and open leaves, including both signs, clear every shared house solid', () => {
  assert.equal(leaves.length, 22);
  for (const { door, states } of leaves) for (const [open, parts] of states.entries()) for (const part of parts) for (const obstacle of solids) {
    const depth = penetration(part, obstacle);
    assert.equal(depth, 0, `${door.id} ${open ? 'open' : 'closed'}: ${part.id} intersects ${obstacle.id} by ${depth.toFixed(6)} m`);
  }
});

test('every pair of doors clears each other in all four independently purchased states', () => {
  for (let i = 0; i < leaves.length; i++) for (let j = i + 1; j < leaves.length; j++) {
    for (const [stateA, partsA] of leaves[i].states.entries()) for (const [stateB, partsB] of leaves[j].states.entries()) {
      for (const a of partsA) for (const b of partsB) assert.equal(penetration(a, b), 0, `${a.id}/${b.id} states ${stateA}/${stateB}`);
    }
  }
});

// Reference centres and swing signs from before the clearance correction.
const original = [
  ['dining-terrace', 2.45, 1.1, 0, 1], ['living-terrace', 12.3, 1.1, 0, 1],
  ['front-door', 7, 1.1, 11.905, 2], ['hall-dining', 5.5, 1.1, 5.95, -1],
  ['kitchen-hall', 5.5, 1.1, 10.65, -1], ['living-hall', 8.5, 1.1, 6.2, 1],
  ['hall-cloakroom', 8.5, 1.1, 9, 1], ['hall-stairs', 7, 1.1, 5.095, -2],
  ['dining-kitchen', 4.2, 1.1, 7, -1], ['cloakroom-wc', 11, 1.1, 8.125, 1],
  ['cloakroom-storage', 11, 1.1, 10.95, -1], ['workshop', 3.35, -2.05, 5, 1],
  ['cellar-stairs', 7, -2.05, 5, -1], ['laundry', 10.7, -2.05, 5, 1],
  ['pantry', 3.7, -2.05, 7, -1], ['utility', 10.7, -2.05, 7, -1],
  ['bedroom', 3.35, 4.25, 5, 1], ['upper-stairs', 7, 4.25, 5, -1],
  ['office', 10.7, 4.25, 5, 1], ['nursery', 3.7, 4.25, 7, -1],
  ['bathroom', 10.7, 4.25, 7, -1], ['attic-stairs', 7, 7.4, 5, -1],
];
test('twenty ordinary swing directions and all closed portal positions are preserved', () => {
  for (const [id, x, y, z, quarters] of original) {
    const door = HOUSE.doors.find(candidate => candidate.id === id), terrace = id.endsWith('-terrace');
    const expected = [x, y + (terrace ? .006 : 0), z];
    assert(door.position.every((value, axis) => Math.abs(value - expected[axis]) < EPS), `${id}: moved closed portal`);
    assert(Math.abs(door.size[1] - 2.175) < EPS, `${id}: leaf height changed`);
    assert.equal(door.size[2], .055);
    if (Math.abs(quarters) === 1) assert.equal(door.hinge.angle, quarters * Math.PI / 2, `${id}: ordinary swing reversed`);
  }
  for (const door of HOUSE.doors) {
    const opening = HOUSE.openings.find(candidate => candidate.id === door.id), normal = opening.horizontal ? 2 : 0;
    assert.notEqual(door.position, opening.position, `${door.id}: leaf and opening must not share a mutable array`);
    assert.equal(opening.position[normal], opening.fixed, `${door.id}: portal must stay on its structural wall`);
    assert.equal(opening.position[1], (opening.sill + opening.head) / 2);
  }
});

test('the main hall reaches dining, living and kitchen with either special door open or closed', () => {
  const paths = [
    ['dining', [7, 1.1, 5.95], [4.5, 1.1, 5.95]],
    ['living', [7, 1.1, 6.2], [9.5, 1.1, 6.2]],
    ['kitchen', [7, 1.1, 10.65], [4.5, 1.1, 10.65]],
    ['hall centre', [7, 1.1, 5.8], [7, 1.1, 11.3]],
  ];
  for (const size of [1, 1.5]) {
    const physics = createPhysics(HOUSE, { form: 'classic', size });
    for (const door of HOUSE.doors) physics.setDoorOpen(door.id, true);
    for (const front of [false, true]) for (const stairs of [false, true]) {
      physics.setDoorOpen('front-door', front); physics.setDoorOpen('hall-stairs', stairs);
      for (const [name, a, b] of paths) for (const reverse of [false, true]) {
        const [from, to] = reverse ? [b, a] : [a, b], dx = to[0] - from[0], dz = to[2] - from[2], length = Math.hypot(dx, dz);
        const orientation = new PhysicsQuaternion(); orientation.setFromEuler(0, Math.atan2(-dx, -dz), 0);
        physics.plane.position.set(...from); physics.plane.quaternion.copy(orientation);
        const contact = physics.advance(length / 1.65, new Vec3(dx / length * 1.65, 0, dz / length * 1.65), orientation);
        assert.equal(contact.collided, false, `${name}, size ${size}, front ${front}, stairs ${stairs}, reverse ${reverse}: ${contact.body?.obstacleId}`);
      }
    }
  }
});

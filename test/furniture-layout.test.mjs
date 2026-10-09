import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { Box3, Euler, Quaternion, Vector3 } from 'three';
import { HOUSE, FLOORS, getDoorPose } from '../src/house.js';

const EPS = 1e-8;
const unitAxes = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
function model(part) {
  const rotation = new Quaternion().setFromEuler(new Euler(...(part.rotation || [0, 0, 0])));
  const center = new Vector3(...part.position), half = part.size.map(value => value / 2), corners = [];
  for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) {
    corners.push(new Vector3(x * half[0], y * half[1], z * half[2]).applyQuaternion(rotation).add(center));
  }
  return { ...part, center, half, axes: unitAxes.map(axis => new Vector3(...axis).applyQuaternion(rotation)), bounds: new Box3().setFromPoints(corners) };
}
// AABB rejects distant pairs; all remaining pairs use the 15 OBB separating
// axes. Touching supports are allowed, positive penetration is not.
function separation(a, b) {
  const delta = b.center.clone().sub(a.center);
  let maximum = -Infinity;
  for (const axis of [...a.axes, ...b.axes, ...a.axes.flatMap(x => b.axes.map(y => x.clone().cross(y)))]) {
    if (axis.lengthSq() < 1e-16) continue;
    const normal = axis.clone().normalize();
    const radius = part => part.half.reduce((sum, half, i) => sum + half * Math.abs(normal.dot(part.axes[i])), 0);
    maximum = Math.max(maximum, Math.abs(normal.dot(delta)) - radius(a) - radius(b));
  }
  return maximum;
}
function penetration(a, b) {
  if (!a.bounds.intersectsBox(b.bounds)) return 0;
  return Math.max(0, -separation(a, b) - EPS);
}
const parts = HOUSE.obstacles.filter(part => part.roomId).map(model);
const structure = HOUSE.obstacles.filter(part => !part.roomId).map(model);
const groups = new Map(HOUSE.furniture.map(item => [item.id, parts.filter(part => part.furnitureId === item.id)]));
const byKind = (group, kind) => groups.get(group).filter(part => part.kind === kind);
const hasName = (part, name) => part.id.startsWith(`${part.roomId}-${name}-`);
const named = (group, name) => groups.get(group).find(part => hasName(part, name));
const close = (actual, expected, message) => assert(Math.abs(actual - expected) < EPS, `${message}: ${actual} != ${expected}`);

test('all furniture parts belong to unique, complete objects with exact rotated bounds inside their room', () => {
  assert.equal(groups.size, 103);
  assert.equal(groups.size, HOUSE.furniture.length);
  assert.equal(parts.length, 502);
  assert.equal(new Set(HOUSE.furniture.map(item => item.roomId)).size, 23);
  for (const part of parts) {
    assert(groups.has(part.furnitureId), `${part.id}: missing furniture object`);
    const item = HOUSE.furniture.find(item => item.id === part.furnitureId);
    assert.equal(item.roomId, part.roomId);
    assert.equal(item.floor, part.floor);
  }
  for (const item of HOUSE.furniture) {
    assert(groups.get(item.id).length, `${item.id}: empty furniture object`);
    const bounds = new Box3();
    for (const part of groups.get(item.id)) bounds.union(part.bounds);
    const room = HOUSE.rooms.find(room => room.id === item.roomId);
    for (const [axis, label] of [['x', 'X'], ['y', 'Y'], ['z', 'Z']]) {
      close(item.bounds[`min${label}`], bounds.min[axis], `${item.id}: minimum ${axis}`);
      close(item.bounds[`max${label}`], bounds.max[axis], `${item.id}: maximum ${axis}`);
      assert(bounds.min[axis] >= room.bounds[`min${label}`] - EPS, `${item.id}: below/outside room ${axis}`);
      assert(bounds.max[axis] <= room.bounds[`max${label}`] + EPS, `${item.id}: above/outside room ${axis}`);
    }
    close(item.x, bounds.min.x, `${item.id}: x`);
    close(item.z, bounds.min.z, `${item.id}: z`);
    close(item.baseY, bounds.min.y, `${item.id}: base`);
    close(item.width, bounds.max.x - bounds.min.x, `${item.id}: width`);
    close(item.depth, bounds.max.z - bounds.min.z, `${item.id}: depth`);
    close(item.height, bounds.max.y - bounds.min.y, `${item.id}: height`);
  }
  close(HOUSE.furniture.find(item => item.id === 'living-Sofa-base').height, .87, 'sofa includes its back');
  close(HOUSE.furniture.find(item => item.id === 'office-Schreibtisch').height, 1.42, 'desk includes its monitor');
});

test('every furniture object clears other objects, walls, frames, floors and sloped roof parts', () => {
  for (const part of parts) for (const obstacle of structure) {
    assert.equal(penetration(part, obstacle), 0, `${part.id} intersects ${obstacle.id}`);
  }
  for (let i = 0; i < parts.length; i++) for (let j = i + 1; j < parts.length; j++) {
    const a = parts[i], b = parts[j];
    if (a.furnitureId === b.furnitureId) continue; // Assembled arms, boards and handles share their own union.
    assert.equal(penetration(a, b), 0, `${a.furnitureId}/${a.id} intersects ${b.furnitureId}/${b.id}`);
  }
});

test('all furniture clears all 22 doors in both fully open and closed states', () => {
  assert.equal(HOUSE.doors.length, 22);
  for (const door of HOUSE.doors) for (const open of [false, true]) {
    const leaf = model(getDoorPose(door, open));
    for (const part of parts) assert.equal(penetration(part, leaf), 0, `${part.id} intersects ${door.id} (${open ? 'open' : 'closed'})`);
  }
});

test('sofa cushions fit between arms, and pillows, toilet seats and books rest on their supports', () => {
  const sofa = groups.get('living-Sofa-base'), cushions = sofa.filter(part => hasName(part, 'sofa-cushion'));
  const arms = sofa.filter(part => hasName(part, 'sofa-arm'));
  assert.equal(cushions.length, 3);
  for (const cushion of cushions) {
    close(cushion.bounds.min.y, named('living-Sofa-base', 'Sofa-base').bounds.max.y, 'cushion on base');
    for (const arm of arms) assert.equal(penetration(cushion, arm), 0, 'cushion intersects arm');
  }
  for (const roomId of ['bedroom', 'nursery']) {
    const group = `${roomId}-Bett`, mattress = named(group, 'mattress');
    close(named(group, 'pillow').bounds.min.y, mattress.bounds.max.y, `${roomId}: pillow on mattress`);
    close(named(group, 'blanket').bounds.min.y, mattress.bounds.max.y, `${roomId}: blanket on mattress`);
    const legs = groups.get(group).filter(part => hasName(part, 'bed-leg'));
    assert.equal(legs.length, 4);
    for (const leg of legs) {
      close(leg.bounds.min.y, FLOORS.og, `${roomId}: leg on floor`);
      close(leg.bounds.max.y, named(group, 'bed-base').bounds.min.y, `${roomId}: leg under frame`);
    }
  }
  for (const roomId of ['guest-wc', 'bathroom']) {
    close(named(`${roomId}-Toilette`, 'toilet-seat').bounds.min.y, named(`${roomId}-Toilette`, 'toilet-base').bounds.max.y, `${roomId}: seat on base`);
  }
  const books = parts.filter(part => part.kind === 'books');
  assert.equal(books.length, 45);
  for (const book of books) {
    const boards = byKind(book.furnitureId, 'shelf-board');
    assert(boards.some(board => Math.abs(board.bounds.max.y - book.bounds.min.y) < EPS
      && book.bounds.min.x >= board.bounds.min.x - EPS && book.bounds.max.x <= board.bounds.max.x + EPS
      && book.bounds.min.z >= board.bounds.min.z - EPS && book.bounds.max.z <= board.bounds.max.z + EPS), `${book.id}: book floats or intersects shelf`);
  }
});

test('screens have connected stands and kitchen details sit directly on their counters', () => {
  for (const [group, screenName, baseKind] of [['living-TV-Bank', 'television', 'cabinet'], ['office-Schreibtisch', 'monitor', 'tabletop']]) {
    const base = byKind(group, baseKind)[0], foot = named(group, `${screenName}-foot`), stand = named(group, `${screenName}-stand`);
    const screen = groups.get(group).find(part => new RegExp(`^${part.roomId}-${screenName}-\\d+$`).test(part.id));
    assert(base && foot && stand && screen, `${group}: missing support`);
    close(foot.bounds.min.y, base.bounds.max.y, `${group}: foot on furniture`);
    assert(separation(foot, stand) <= EPS, `${group}: stand detached from foot`);
    close(stand.bounds.max.y, screen.bounds.min.y, `${group}: screen on stand`);
  }
  for (const group of ['kitchen-Zeile-Nord', 'kitchen-Zeile-West']) {
    const base = byKind(group, 'furniture')[0];
    for (const detail of byKind(group, 'detail')) close(detail.bounds.min.y, base.bounds.max.y, `${detail.id}: on worktop`);
  }
});

test('cabinet handles project from the accessible front and remain attached', () => {
  let handles = 0;
  for (const item of HOUSE.furniture.filter(item => item.kind === 'cabinet')) {
    const body = byKind(item.id, 'cabinet')[0];
    if (!body) continue;
    const axis = item.back?.axis || (body.size[0] >= body.size[2] ? 'z' : 'x');
    const side = item.back?.edge === 'max' ? -1 : 1;
    for (const handle of byKind(item.id, 'detail').filter(part => part.id.includes('-handle-'))) {
      handles++;
      assert(separation(handle, body) <= EPS, `${handle.id}: handle detached`);
      const protrusion = side > 0 ? handle.bounds.max[axis] - body.bounds.max[axis] : body.bounds.min[axis] - handle.bounds.min[axis];
      close(protrusion, .014, `${handle.id}: visible handle on front`);
    }
  }
  assert(handles > 30);
});

test('terrace furniture rests on its paving and raised-bed plants sit above the soil', () => {
  const paving = structure.find(part => part.kind === 'paving' && part.id.startsWith('terrace-'));
  const terrace = HOUSE.furniture.filter(item => item.id.startsWith('garden-Terrassen'));
  assert.equal(terrace.length, 7);
  for (const item of terrace) {
    close(item.baseY, paving.bounds.max.y, `${item.id}: on paving`);
    for (const leg of groups.get(item.id).filter(part => part.kind.endsWith('-leg'))) close(leg.bounds.min.y, paving.bounds.max.y, `${leg.id}: not buried`);
  }
  const raisedBed = byKind('garden-Hochbeet', 'furniture')[0];
  const plants = HOUSE.furniture.filter(item => item.roomId === 'garden' && item.kind === 'plant');
  assert.equal(plants.length, 8);
  for (const plant of plants) close(byKind(plant.id, 'plant-pot')[0].bounds.min.y, raisedBed.bounds.max.y, `${plant.id}: on raised bed`);
});

test('the furniture corrections preserve all 96 established star IDs and positions', () => {
  assert.equal(HOUSE.collectibles.length, 96);
  // Reference captured before the furniture corrections, including radius and
  // under-furniture flags. Physical pickup reachability is checked in physics.test.
  assert.equal(createHash('sha256').update(JSON.stringify(HOUSE.collectibles)).digest('hex'), '2f8d91434e1aa261c8e5e58ae3345a0e08177d7bdb043294d222af0e69f60fe8');
});

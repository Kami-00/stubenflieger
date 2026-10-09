import test from 'node:test';
import assert from 'node:assert/strict';
import { Box3, Euler, Quaternion, Ray, Vector3 } from 'three';
import { HOUSE, FLOORS, getDoorPose } from '../src/house.js';

const EPS = 1e-7;
const directions = { north: [0, 0, -1], south: [0, 0, 1], east: [1, 0, 0], west: [-1, 0, 0], southwest: [-Math.SQRT1_2, 0, Math.SQRT1_2] };
const item = id => HOUSE.furniture.find(candidate => candidate.id === id);
const parts = id => HOUSE.obstacles.filter(part => part.furnitureId === id);
const kind = (id, type) => parts(id).find(part => part.kind === type);
const named = (id, name) => parts(id).find(part => part.id.startsWith(`${part.roomId}-${name}-`));
function obb(part) {
  const quaternion = new Quaternion().setFromEuler(new Euler(...(part.rotation || [0, 0, 0])));
  return { ...part, center: new Vector3(...part.position), half: part.size.map(value => value / 2), axes: [[1, 0, 0], [0, 1, 0], [0, 0, 1]].map(axis => new Vector3(...axis).applyQuaternion(quaternion)) };
}
function overlaps(a, b) {
  const delta = b.center.clone().sub(a.center);
  for (const axis of [...a.axes, ...b.axes, ...a.axes.flatMap(x => b.axes.map(y => x.clone().cross(y)))]) {
    if (axis.lengthSq() < 1e-16) continue;
    axis.normalize();
    const radius = part => part.half.reduce((sum, half, i) => sum + half * Math.abs(axis.dot(part.axes[i])), 0);
    if (Math.abs(axis.dot(delta)) >= radius(a) + radius(b) - EPS) return false;
  }
  return true;
}
const solids = HOUSE.obstacles.map(obb);
const doorStates = HOUSE.doors.flatMap(door => [false, true].map(open => obb({ ...getDoorPose(door, open), id: `${door.id} ${open ? 'open' : 'closed'}` })));
function clearZone(id, position, size, ignored = [id]) {
  const zone = obb({ position, size });
  for (const part of [...solids, ...doorStates]) {
    if (ignored.includes(part.furnitureId)) continue;
    assert(!overlaps(zone, part), `${id}: access obstructed by ${part.id}`);
  }
}
function frontZone(id, facing, { depth = .55, width = .55, along = null, ignore = [id] } = {}) {
  const furniture = item(id), b = furniture.bounds, direction = directions[facing];
  const horizontal = direction[0] !== 0, sign = horizontal ? direction[0] : direction[2];
  const face = horizontal ? (sign > 0 ? b.maxX : b.minX) : (sign > 0 ? b.maxZ : b.minZ);
  const lateral = along ?? (horizontal ? (b.minZ + b.maxZ) / 2 : (b.minX + b.maxX) / 2);
  const normal = face + sign * (depth / 2 + .015), base = FLOORS[furniture.floor] ?? 0;
  clearZone(id, horizontal ? [normal, base + .83, lateral] : [lateral, base + .83, normal], horizontal ? [depth, 1.6, width] : [width, 1.6, depth], ignore);
}

test('the functional audit covers all 103 objects and all 27 room areas, including four clear stair cores', () => {
  const inventory = { living: 6, dining: 10, kitchen: 5, hall: 3, cloakroom: 3, 'guest-wc': 3, storage: 2, stairs: 0,
    workshop: 4, laundry: 5, pantry: 3, utility: 3, 'cellar-hall': 2, 'cellar-hall-south': 1, 'cellar-core': 0,
    bedroom: 4, office: 4, nursery: 7, bathroom: 4, 'upper-hall': 2, 'upper-hall-south': 2, 'upper-core': 0,
    attic: 4, 'attic-west': 3, 'attic-east': 3, 'attic-core': 0, garden: 20 };
  assert.equal(HOUSE.furniture.length, 103);
  assert.equal(HOUSE.rooms.length, 27);
  assert.deepEqual(new Set(Object.keys(inventory)), new Set(HOUSE.rooms.map(room => room.id)));
  for (const [roomId, count] of Object.entries(inventory)) assert.equal(HOUSE.furniture.filter(furniture => furniture.roomId === roomId).length, count, roomId);
  const knownKinds = new Set(['chair', 'table', 'cabinet', 'bed', 'bath', 'sanitary', 'solid', 'plant', 'tree', 'planter', 'drying-rack']);
  for (const furniture of HOUSE.furniture) assert(knownKinds.has(furniture.kind), `${furniture.id}: needs a functional review category`);
});

test('every chair physically faces its table, television or reading shelf, with the backrest behind its seat', () => {
  const chairs = HOUSE.furniture.filter(furniture => furniture.kind === 'chair');
  assert.equal(chairs.length, 19);
  for (const chair of chairs) {
    assert(item(chair.targetId), `${chair.id}: no assigned use target`);
    const seat = kind(chair.id, 'chair-seat'), back = kind(chair.id, 'chair-back');
    const forward = new Vector3(...seat.position).sub(new Vector3(...back.position)).setY(0).normalize();
    assert(forward.distanceTo(new Vector3(...directions[chair.facing])) < EPS, `${chair.id}: metadata does not match its real backrest`);
    let bounds = item(chair.targetId).bounds;
    if (chair.id === 'living-Sessel') {
      const tv = named(chair.targetId, 'television');
      bounds = { minX: tv.position[0] - tv.size[0] / 2, maxX: tv.position[0] + tv.size[0] / 2,
        minZ: tv.position[2] - tv.size[2] / 2, maxZ: tv.position[2] + tv.size[2] / 2 };
    }
    const ray = new Ray(new Vector3(seat.position[0], 0, seat.position[2]), forward);
    const hit = ray.intersectBox(new Box3(new Vector3(bounds.minX, -1, bounds.minZ), new Vector3(bounds.maxX, 1, bounds.maxZ)), new Vector3());
    assert(hit, `${chair.id}: actual seating direction misses ${chair.targetId}`);
    assert(hit.distanceTo(ray.origin) > .25, `${chair.id}: no usable space before seat`);
    const tabletop = kind(chair.targetId, 'tabletop');
    if (tabletop) {
      const gap = tabletop.position[1] + tabletop.size[1] / 2 - (seat.position[1] + seat.size[1] / 2);
      assert(gap >= .24 && gap <= .32, `${chair.id}: unsuitable seat-to-worktop height ${gap}`);
    }
  }
  for (const [id, facing] of [['kitchen-Kuechenhocker', 'north'], ['workshop-Hocker', 'north'], ['office-Schreibtischstuhl', 'north'], ['nursery-Kinderstuhl', 'south'], ['attic-east-Bastelstuhl', 'north']]) {
    assert.equal(item(id).facing, facing, `${id}: regression of the five reversed work seats`);
  }
});

test('every cabinet handle and the entire usable front of each open shelf have unobstructed standing space', () => {
  const cabinets = HOUSE.furniture.filter(furniture => furniture.kind === 'cabinet');
  assert.equal(cabinets.length, 29);
  const blocked = [];
  for (const cabinet of cabinets) {
    assert(directions[cabinet.facing], `${cabinet.id}: missing accessible front`);
    const handles = parts(cabinet.id).filter(part => part.id.includes('-handle-'));
    try {
      if (handles.length) {
        for (const handle of handles) frontZone(cabinet.id, cabinet.facing, { along: handle.position[cabinet.facing === 'east' || cabinet.facing === 'west' ? 2 : 0] });
      } else {
        // Open shelves need access along every section, not just one centre point.
        frontZone(cabinet.id, cabinet.facing, { width: cabinet.facing === 'east' || cabinet.facing === 'west' ? cabinet.depth : cabinet.width });
      }
    } catch (error) { blocked.push(error.message); }
  }
  assert.deepEqual(blocked, []);
});

test('both toilets have free leg space, basins have a standing place, and the bath has a clear entry side', () => {
  for (const room of ['guest-wc', 'bathroom']) {
    const id = `${room}-Toilette`, seat = named(id, 'toilet-seat'), cistern = named(id, 'cistern');
    assert(seat.position[0] < cistern.position[0], `${id}: toilet must face away from its wall`);
    frontZone(id, 'west', { depth: .65, width: .65 });
    frontZone(`${room}-Waschtisch`, item(`${room}-Waschtisch`).facing, { depth: .6 });
  }
  frontZone('bathroom-Badewanne', 'south', { depth: .65, width: 1.5 });
  const cabinet = item('bathroom-Badschrank'), window = HOUSE.openings.find(opening => opening.floor === 'og' && opening.horizontal && opening.fixed === 12 && opening.from === 10.5);
  assert(cabinet.bounds.maxX < window.from, 'bathroom cabinet must not stand across the low window');
});

test('bedside tables remain beside the pillows and both beds have a clear exit', () => {
  const bed = item('bedroom-Bett'), left = item('bedroom-Nachttisch-links'), right = item('bedroom-Nachttisch-rechts');
  const pillow = named(bed.id, 'pillow'), mattress = named(bed.id, 'mattress');
  assert(left.bounds.maxX < bed.bounds.minX && right.bounds.minX > bed.bounds.maxX);
  for (const side of [left, right]) {
    assert(pillow.position[2] >= side.bounds.minZ && pillow.position[2] <= side.bounds.maxZ);
    assert(Math.abs(side.bounds.maxY - (mattress.position[1] + mattress.size[1] / 2)) < .15);
  }
  for (const facing of ['east', 'west']) frontZone(bed.id, facing, { width: 1.5, along: 1.65, depth: .55 });
  frontZone('nursery-Bett', 'south', { width: 1.7, depth: .6 });
});

test('work areas and benches expose usable fronts, and the office monitor is directly ahead of the worker', () => {
  for (const [id, facing, width, depth, along] of [
    ['kitchen-Zeile-Nord', 'south', .55, .6, .98], ['kitchen-Zeile-West', 'east', .55, .6, 8.4],
    ['laundry-Waschgeraet', 'south', .6, .6], ['laundry-Waschgeraet-2', 'south', .6, .6], ['laundry-Waeschetisch', 'south', 1.4, .6],
    ['utility-Warmwasserspeicher', 'west', .6, .6], ['utility-Heizung', 'north', 1.2, .6],
    ['hall-Sitzbank', 'west', .65, .6], ['cloakroom-Schuhbank', 'east', .6, .55], ['garden-Gartenbank', 'south', 1.8, .6],
    ['attic-Dachtisch', 'south', 1.4, .6], ['attic-Truhe-Ost', 'north', .8, .55], ['attic-Truhe-West', 'north', .8, .55],
  ]) frontZone(id, facing, { width, depth, along });
  const chair = kind('office-Schreibtischstuhl', 'chair-seat'), monitor = named('office-Schreibtisch', 'monitor');
  assert(Math.abs(chair.position[0] - monitor.position[0]) < .1);
  assert(monitor.position[2] < chair.position[2]);
  const sofa = named('living-Sofa-base', 'Sofa-base'), back = named('living-Sofa-base', 'sofa-back'), tv = named('living-TV-Bank', 'television');
  assert(back.position[0] > sofa.position[0] && tv.position[0] < sofa.position[0], 'sofa faces the television across the coffee table');
});

test('the drying rack has real gaps between seven clothes bars and preserves the authored low flight route', () => {
  const rack = parts('laundry-Waeschestaender'), bars = rack.filter(part => part.id.includes('-drying-bar-'));
  assert.equal(bars.length, 7);
  assert.equal(rack.some(part => part.kind === 'tabletop'), false);
  bars.sort((a, b) => a.position[2] - b.position[2]);
  for (let i = 1; i < bars.length; i++) assert(bars[i].position[2] - bars[i - 1].position[2] > .1);
  const star = HOUSE.collectibles.find(star => star.id === 'laundry-star-4');
  clearZone('drying-rack underflight', [star.x, star.y, star.z], [.42, .12, .3], []);
});

test('the raised bed has a visible soil surface inside its rim and eight directly rooted plants', () => {
  const bed = item('garden-Hochbeet'), soil = named(bed.id, 'soil'), border = parts(bed.id).filter(part => part.kind === 'furniture');
  assert.equal(border.length, 4);
  assert.equal(soil.color, '#66513a');
  const top = soil.position[1] + soil.size[1] / 2;
  assert(top < bed.bounds.maxY && bed.bounds.maxY - top < .08);
  const plants = HOUSE.furniture.filter(furniture => furniture.roomId === 'garden' && furniture.kind === 'plant');
  assert.equal(plants.length, 8);
  for (const plant of plants) {
    assert.equal(plant.planted, true);
    assert(!parts(plant.id).some(part => part.kind === 'plant-pot'));
    const stem = kind(plant.id, 'plant-stem');
    assert(Math.abs(stem.position[1] - stem.size[1] / 2 - top) < EPS);
    assert(stem.position[0] > soil.position[0] - soil.size[0] / 2 && stem.position[0] < soil.position[0] + soil.size[0] / 2);
    assert(stem.position[2] > soil.position[2] - soil.size[2] / 2 && stem.position[2] < soil.position[2] + soil.size[2] / 2);
  }
});

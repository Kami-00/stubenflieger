// One permanent, metre-scaled house. These exact box parts are shared by the
// renderer and physics: empty space below furniture is genuinely empty.
export const FLOOR_HEIGHT = 3.15;
export const FLOORS = { ug: -3.15, eg: 0, og: 3.15, dg: 6.3 };
const WALL = 0.12;
const DOOR_HEIGHT = 2.2;
const DOOR_THICKNESS = .055;
const rooms = [], obstacles = [], doors = [], openings = [], collectibles = [], furniture = [];
let serial = 0;

function box(id, kind, size, position, color, floor, extra = {}) {
  const part = { id: `${id}-${++serial}`, kind, size, position, rotation: [0, 0, 0], color, floor, ...extra };
  obstacles.push(part);
  return part;
}
function room(id, name, floor, x, z, w, d, color) {
  const y = FLOORS[floor] ?? 0;
  const result = { id, name, floor, color, bounds: { minX: x, maxX: x + w, minY: y, maxY: y + (floor === 'dg' ? 4.5 : FLOOR_HEIGHT), minZ: z, maxZ: z + d } };
  rooms.push(result);
  return result;
}
room('living', 'Wohnzimmer', 'eg', 8.5, 0, 5.5, 7, '#75988c');
room('dining', 'Esszimmer', 'eg', 0, 0, 5.5, 7, '#d5b387');
room('kitchen', 'Küche', 'eg', 0, 7, 5.5, 5, '#8ead9e');
room('hall', 'Eingang & Flur', 'eg', 5.5, 5, 3, 7, '#d6c4aa');
room('cloakroom', 'Garderobe', 'eg', 8.5, 7, 2.5, 5, '#bdc6b4');
room('guest-wc', 'Gäste-WC', 'eg', 11, 7, 3, 3, '#a7bdc0');
room('storage', 'Abstellraum', 'eg', 11, 10, 3, 2, '#c5b89c');
room('stairs', 'Treppenhaus · EG', 'eg', 5.5, 0, 3, 5, '#d2b694');
for (const [floor, names, ids] of [
  ['ug', ['Werkstatt', 'Waschküche', 'Vorratsraum', 'Haustechnik'], ['workshop', 'laundry', 'pantry', 'utility']],
  ['og', ['Schlafzimmer', 'Arbeitszimmer', 'Kinderzimmer', 'Bad'], ['bedroom', 'office', 'nursery', 'bathroom']],
]) {
  for (const [i, x, z] of [[0, 0, 0], [1, 8.5, 0], [2, 0, 7], [3, 8.5, 7]]) room(ids[i], names[i], floor, x, z, 5.5, 5, ['#c7a784', '#a5b9b8', '#c9b1a4', '#a2b8bd'][i]);
  const prefix = floor === 'ug' ? 'cellar' : 'upper';
  // Two rectangles describe the T-shaped hall without including other rooms.
  room(`${prefix}-hall`, floor === 'ug' ? 'Kellerflur' : 'Flur & Lesenische', floor, 0, 5, 14, 2, '#d1c1aa');
  room(`${prefix}-hall-south`, floor === 'ug' ? 'Kellerflur' : 'Lesenische', floor, 5.5, 7, 3, 5, '#d1c1aa').bonusId = `${prefix}-hall`;
  room(`${prefix}-core`, `Treppenhaus · ${floor === 'ug' ? 'Keller' : 'OG'}`, floor, 5.5, 0, 3, 5, '#d2b694');
}
// Attic rectangles leave the enclosed stair core out of its room classification.
room('attic', 'Dachspitz', 'dg', 0, 5, 14, 7, '#b58e6e');
room('attic-west', 'Dachspitz · Koffer', 'dg', 0, 0, 5.5, 5, '#b58e6e').bonusId = 'attic';
room('attic-east', 'Dachspitz · Bastelplatz', 'dg', 8.5, 0, 5.5, 5, '#b58e6e').bonusId = 'attic';
room('attic-core', 'Treppenhaus · Dach', 'dg', 5.5, 0, 3, 5, '#d2b694');
const gardenRoom = room('garden', 'Garten', 'garden', -5, -7, 24, 25, '#91aa6d');
gardenRoom.bounds.minY = -0.15; gardenRoom.bounds.maxY = 14;

const holeDoor = (a, b, id, name, threshold, from, to, swing = 1, hingeEnd = false) => ({ a, b, type: 'door', id, name, threshold, rooms: [from, to], swing, hingeEnd });
const win = (a, b, open = false, sill = .95, head = 2.3) => ({ a, b, type: 'window', open, sill, head });

function closedWindowCross(id, floor, horizontal, centre, width, height) {
  // Project beyond both glass faces so the white cross is legible from inside
  // and outside. Open windows never receive these shared visual/physical bars.
  const bar = .06, depth = .2;
  box(`${id}-cross-horizontal`, 'window-bar', horizontal ? [width, bar, depth] : [depth, bar, width], [...centre], '#fffdf5', floor);
  box(`${id}-cross-vertical`, 'window-bar', horizontal ? [bar, height, depth] : [depth, height, bar], [...centre], '#fffdf5', floor);
}

// Walls meet the next storey even beside the open stairwell, where a floor
// slab cannot conceal a short wall's exposed top edge. Roof heights are explicit.
function wall(floor, horizontal, fixed, start, end, holes = [], height = FLOOR_HEIGHT) {
  const base = FLOORS[floor], color = floor === 'ug' ? '#b5b5a4' : floor === 'dg' ? '#ded0b8' : '#e6dfca';
  const wallId = `${floor}-wall-${horizontal ? 'z' : 'x'}${fixed}-${start}`;
  const segment = (a, b, low, high, kind = 'wall', tint = color) => {
    if (b - a <= .001 || high - low <= .001) return;
    box(wallId, kind, horizontal ? [b - a, high - low, WALL] : [WALL, high - low, b - a],
      horizontal ? [(a + b) / 2, base + (low + high) / 2, fixed] : [fixed, base + (low + high) / 2, (a + b) / 2], tint, floor);
  };
  let cursor = start;
  for (const opening of [...holes].sort((a, b) => a.a - b.a)) {
    segment(cursor, opening.a, 0, height);
    const low = opening.type === 'door' ? 0 : opening.sill;
    const high = opening.type === 'door' ? DOOR_HEIGHT : opening.head;
    segment(opening.a, opening.b, 0, low);
    segment(opening.a, opening.b, high, height);
    const width = opening.b - opening.a;
    const centre = horizontal ? [(opening.a + opening.b) / 2, base + (low + high) / 2, fixed] : [fixed, base + (low + high) / 2, (opening.a + opening.b) / 2];
    openings.push({ id: opening.id || `${wallId}-window-${opening.a}`, floor, type: opening.type, open: opening.open ?? false, horizontal, fixed, from: opening.a, to: opening.b, sill: base + low, head: base + high, position: centre });
    if (opening.type === 'door') {
      const closedDirection = opening.hingeEnd ? -1 : 1;
      // Keep the whole opened leaf inside the clear opening, including its
      // thickness. A pivot on the wall edge buried half that thickness in it.
      const hingeAt = (opening.hingeEnd ? opening.b : opening.a) + closedDirection * (DOOR_THICKNESS / 2 + .005);
      const hinge = horizontal ? [hingeAt, base + DOOR_HEIGHT / 2, fixed] : [fixed, base + DOOR_HEIGHT / 2, hingeAt];
      const angle = (horizontal ? -opening.swing * closedDirection : opening.swing * closedDirection) * Math.PI / 2;
      doors.push({ id: opening.id, name: opening.name, threshold: opening.threshold, rooms: opening.rooms, floor, size: [width - .025, DOOR_HEIGHT - .025, DOOR_THICKNESS], position: [...centre], rotation: [0, horizontal ? 0 : Math.PI / 2, 0], hinge: { position: hinge, axis: 'y', angle }, color: floor === 'ug' ? '#788c82' : '#b99469', open: false });
      // Narrow trim lives outside the opening, so its usable size stays honest.
      const trim = .035;
      for (const edge of [opening.a - trim / 2, opening.b + trim / 2]) {
        box(`${opening.id}-frame`, 'trim', horizontal ? [trim, DOOR_HEIGHT, .18] : [.18, DOOR_HEIGHT, trim], horizontal ? [edge, base + DOOR_HEIGHT / 2, fixed] : [fixed, base + DOOR_HEIGHT / 2, edge], '#f1e6cc', floor, { doorFrame: true });
      }
    } else {
      if (!opening.open) {
        segment(opening.a, opening.b, low, high, 'glass', '#a5d2dc');
        closedWindowCross(`${wallId}-window-${opening.a}`, floor, horizontal, centre, width, high - low);
      }
      const trim = .035;
      for (const y of [low, high]) box(`${wallId}-sill`, 'trim', horizontal ? [width, trim, .18] : [.18, trim, width], [centre[0], base + y, centre[2]], '#fbefcf', floor);
      for (const edge of [opening.a, opening.b]) box(`${wallId}-jamb`, 'trim', horizontal ? [trim, high - low, .15] : [.15, high - low, trim], horizontal ? [edge, centre[1], fixed] : [fixed, centre[1], edge], '#fbefcf', floor);
    }
    cursor = opening.b;
  }
  segment(cursor, end, 0, height);
}

function slab(id, floor, x, z, w, d, color, y = FLOORS[floor]) {
  box(id, 'floor', [w, .14, d], [x + w / 2, y - .07, z + d / 2], color, floor);
}
for (const floor of ['ug', 'eg', 'og', 'dg']) {
  if (floor === 'ug') slab('cellar-floor', floor, 0, 0, 14, 12, '#9d9f92');
  else {
    slab('west-floor', floor, 0, 0, 5.5, 12, floor === 'dg' ? '#9d7953' : '#b99671');
    slab('east-floor', floor, 8.5, 0, 5.5, 12, floor === 'dg' ? '#a68159' : '#b99671');
    slab('hall-floor', floor, 5.5, 4, 3, 8, '#c8b391');
  }
}
// The outdoor ground has a house-shaped hole; no earth slab seals the cellar.
slab('garden-west', 'garden', -5, -7, 5, 25, '#83a363', 0);
slab('garden-east', 'garden', 14, -7, 5, 25, '#8aab69', 0);
slab('garden-north', 'garden', 0, -7, 14, 7, '#8cae6a', 0);
slab('garden-south', 'garden', 0, 12, 14, 6, '#92ad72', 0);
box('terrace', 'paving', [14, .045, 3.5], [7, -.005, -1.75], '#c6bba5', 'garden');
box('front-path', 'paving', [1.5, .045, 6], [7, -.005, 15], '#c7bfaa', 'garden');

// Ground floor, matching the accepted plan (z is the plan's vertical axis).
wall('eg', true, 0, 0, 14, [holeDoor(1.75, 3.15, 'dining-terrace', 'Esszimmer → Terrasse', 8, 'dining', 'garden', -1), holeDoor(11.5, 13.1, 'living-terrace', 'Wohnzimmer → Terrasse', 4, 'living', 'garden', -1)]);
wall('eg', true, 12, 0, 14, [win(3.5, 4.9, true), holeDoor(6.3, 7.7, 'front-door', 'Haustür', 6, 'hall', 'garden', -1, true), win(12.45, 13.5)]);
wall('eg', false, 0, 0, 12, [win(1.3, 3.1), win(9, 10.4)]);
wall('eg', false, 14, 0, 12, [win(1.2, 2.4), win(8.8, 9.5)]);
wall('eg', false, 5.5, 0, 12, [holeDoor(5.3, 6.6, 'hall-dining', 'Flur → Esszimmer', 5, 'hall', 'dining', -1), holeDoor(10, 11.3, 'kitchen-hall', 'Flur → Küche', 7, 'hall', 'kitchen', -1)]);
wall('eg', false, 8.5, 0, 12, [holeDoor(5.55, 6.85, 'living-hall', 'Wohnzimmer → Flur', 2, 'living', 'hall', 1), holeDoor(8.4, 9.6, 'hall-cloakroom', 'Flur → Garderobe', 8, 'hall', 'cloakroom', 1)]);
wall('eg', true, 5, 5.5, 8.5, [holeDoor(6.3, 7.7, 'hall-stairs', 'Flur → Treppenhaus', 9, 'hall', 'stairs', -1, true)]);
wall('eg', true, 7, 0, 5.5, [holeDoor(3.5, 4.9, 'dining-kitchen', 'Esszimmer → Küche', 7, 'dining', 'kitchen', 1)]);
wall('eg', true, 7, 8.5, 14);
wall('eg', false, 11, 7, 12, [holeDoor(7.55, 8.7, 'cloakroom-wc', 'Garderobe → Gäste-WC', 10, 'cloakroom', 'guest-wc', 1), holeDoor(10.35, 11.55, 'cloakroom-storage', 'Garderobe → Abstellraum', 12, 'cloakroom', 'storage', 1, true)]);
wall('eg', true, 10, 11, 14);

// Only these two cramped hall doors use the opposite jamb: the stair door
// opens into the stairwell; the front door opens along the hall's right side.
// Folding either leaf back 180° intersected the cross wall. Both neighbouring
// room routes and the middle of the hall now remain unobstructed.
for (const [id, outward] of [['hall-stairs', 1], ['front-door', -1]]) {
  const door = doors.find(item => item.id === id);
  door.position[2] += .095 * outward;
  door.hinge.position[2] += .095 * outward;
}
// The terrace paving is slightly raised; preserve leaf size and leave 1 mm
// underneath it, while retaining clearance below the doorway lintel.
for (const id of ['dining-terrace', 'living-terrace']) {
  const door = doors.find(item => item.id === id);
  door.position[1] += .006;
  door.hinge.position[1] += .006;
}

for (const floor of ['ug', 'og']) {
  const cellar = floor === 'ug', prefix = cellar ? 'cellar' : 'upper';
  const ids = cellar ? ['workshop', 'laundry', 'pantry', 'utility'] : ['bedroom', 'office', 'nursery', 'bathroom'];
  const thresholds = cellar ? [14, 17, 20, 23] : [17, 19, 22, 24];
  wall(floor, false, 5.5, 0, 5); wall(floor, false, 8.5, 0, 5);
  wall(floor, true, 5, 0, 14, [
    holeDoor(2.7, 4, ids[0], rooms.find(r => r.id === ids[0]).name, thresholds[0], `${prefix}-hall`, ids[0], -1),
    holeDoor(6.3, 7.7, `${prefix}-stairs`, cellar ? 'Treppenhaus → Keller' : 'Treppenhaus → Obergeschoss', cellar ? 12 : 14, `${prefix}-core`, `${prefix}-hall`, 1),
    holeDoor(10, 11.4, ids[1], rooms.find(r => r.id === ids[1]).name, thresholds[1], `${prefix}-hall`, ids[1], -1),
  ]);
  wall(floor, true, 7, 0, 5.5, [holeDoor(3, 4.4, ids[2], rooms.find(r => r.id === ids[2]).name, thresholds[2], `${prefix}-hall`, ids[2], 1)]);
  wall(floor, true, 7, 8.5, 14, [holeDoor(10, 11.4, ids[3], rooms.find(r => r.id === ids[3]).name, thresholds[3], `${prefix}-hall`, ids[3], 1)]);
  wall(floor, false, 5.5, 7, 12); wall(floor, false, 8.5, 7, 12);
  wall(floor, true, 0, 0, 14, cellar ? [win(1.1, 2.8, false, 2.1, 2.75), win(10.5, 12, false, 2.1, 2.75)] : [win(1.2, 3.2), win(10.5, 12)]);
  wall(floor, true, 12, 0, 14, cellar ? [] : [win(1.2, 3.2), win(10.5, 12)]);
  wall(floor, false, 0, 0, 12, cellar ? [] : [win(1.4, 3.1), win(8.5, 10.2, true)]);
  wall(floor, false, 14, 0, 12, cellar ? [] : [win(1.6, 3.3, true), win(9.8, 11.2)]);
}

// U-shaped stairs rise around an unobstructed centre well, with real floor holes.
for (const floor of ['ug', 'eg', 'og']) {
  const y = FLOORS[floor];
  const count = 10, rise = FLOOR_HEIGHT / 2 / count, tread = 3 / count;
  for (let i = 0; i < count; i++) {
    box('stair-left', 'stairs', [.85, .12, tread + .015], [6.125, y + rise * (i + 1) - .06, 3.85 - tread * (i + .5)], '#bba480', floor);
    box('stair-right', 'stairs', [.85, .12, tread + .015], [7.875, y + FLOOR_HEIGHT / 2 + rise * (i + 1) - .06, .85 + tread * (i + .5)], '#bba480', floor);
  }
  box('stair-middle-landing', 'stairs', [2.6, .13, .5], [7, y + FLOOR_HEIGHT / 2 - .065, .6], '#bba480', floor);
  // Slim rail pieces hug the flights and never cross the flight well.
  for (const x of [5.75, 8.25]) for (const z of [1.2, 2.35, 3.5]) box('stair-post', 'railing', [.035, .65, .035], [x, y + .7 + (x < 7 ? (3.85 - z) / 3 : 1 + (z - .85) / 3) * 1.5, z], '#776952', floor);
}

// Attic roof panels, including an actual hole through the west roof slope.
const ROOF_SLOPE = 3.1 / 7, ROOF_ANGLE = Math.atan(ROOF_SLOPE);
const roofHeight = x => 7.45 + Math.min(x, 14 - x) * ROOF_SLOPE;
wall('dg', false, 0, 0, 12, [], 1.15); wall('dg', false, 14, 0, 12, [], 1.15);
wall('dg', false, 5.5, 0, 5, [], 3); wall('dg', false, 8.5, 0, 5, [], 3);
wall('dg', true, 5, 5.5, 8.5, [holeDoor(6.3, 7.7, 'attic-stairs', 'Treppenhaus → Dachspitz', 28, 'attic-core', 'attic', 1)], 3);
function gable(z, windows) {
  const edges = [...new Set([0, 14, ...Array.from({ length: 55 }, (_, i) => (i + 1) * .25), ...windows.flatMap(w => [w.a, w.b])])].sort((a, b) => a - b);
  for (let i = 1; i < edges.length; i++) {
    const a = edges[i - 1], b = edges[i], top = Math.min(roofHeight(a), roofHeight(b)) - 6.3 - .025;
    const opening = windows.find(w => (a + b) / 2 > w.a && (a + b) / 2 < w.b);
    const segments = opening ? [[0, opening.sill], [opening.head, top]] : [[0, top]];
    for (const [low, high] of segments) if (high > low) box('gable', 'wall', [b - a, high - low, WALL], [(a + b) / 2, 6.3 + (low + high) / 2, z], '#ded0b8', 'dg');
  }
  for (const w of windows) {
    const centre = [(w.a + w.b) / 2, 6.3 + (w.sill + w.head) / 2, z];
    openings.push({ id: `dg-gable-window-${z}-${w.a}`, floor: 'dg', type: 'window', open: false, horizontal: true, fixed: z, from: w.a, to: w.b, sill: 6.3 + w.sill, head: 6.3 + w.head, position: centre });
    box('gable-window', 'glass', [w.b - w.a, w.head - w.sill, WALL], centre, '#a5d2dc', 'dg');
    closedWindowCross(`gable-window-${z}-${w.a}`, 'dg', true, centre, w.b - w.a, w.head - w.sill);
    for (const y of [w.sill, w.head]) box('gable-window-frame', 'trim', [w.b - w.a, .035, .18], [centre[0], 6.3 + y, z], '#fbefcf', 'dg');
    for (const x of [w.a, w.b]) box('gable-window-frame', 'trim', [.035, w.head - w.sill, .18], [x, centre[1], z], '#fbefcf', 'dg');
  }
  // A sloping cap closes the tiny stair-step gaps between rectangular infill
  // columns and the pitched roof; its renderer and collider share the rotation.
  for (const x of [3.5, 10.5]) box('gable-sloping-cap', 'wall', [7 / Math.cos(ROOF_ANGLE), .25, WALL], [x, roofHeight(x) - .105, z], '#ded0b8', 'dg', { rotation: [0, 0, x < 7 ? ROOF_ANGLE : -ROOF_ANGLE] });
}
gable(0, [win(1.8, 3.2, false, .6, 1.65), win(10.5, 12, false, .6, 1.65)]);
gable(12, [win(6, 8, false, .65, 1.7)]);
function roofPanel(id, x1, x2, z1, z2) {
  box(id, 'roof', [(x2 - x1) / Math.cos(ROOF_ANGLE), .14, z2 - z1], [(x1 + x2) / 2, roofHeight((x1 + x2) / 2), (z1 + z2) / 2], '#98705b', 'dg', { rotation: [0, 0, x1 >= 7 ? -ROOF_ANGLE : ROOF_ANGLE] });
}
roofPanel('roof-west-front', 0, 7, 0, 7.25); roofPanel('roof-west-back', 0, 7, 9.15, 12);
roofPanel('roof-west-eave', 0, .35, 7.25, 9.15); roofPanel('roof-west-upper', 2, 7, 7.25, 9.15);
roofPanel('roof-east', 7, 14, 0, 12);
openings.push({ id: 'attic-roof-window', type: 'roof-window', floor: 'dg', open: true, bounds: { minX: .35, maxX: 2, minZ: 7.25, maxZ: 9.15 }, position: [1.175, roofHeight(1.175), 8.2] });
for (const z of [7.25, 9.15]) box('roof-window-frame', 'trim', [1.65 / Math.cos(ROOF_ANGLE), .055, .055], [1.175, roofHeight(1.175), z], '#f3e2bf', 'dg', { rotation: [0, 0, ROOF_ANGLE] });
for (const x of [.35, 2]) box('roof-window-frame', 'trim', [.055, .055, 1.9], [x, roofHeight(x), 8.2], '#f3e2bf', 'dg');
for (const z of [6.75, 10.3]) {
  for (const x of [3.4, 10.6]) box('attic-post', 'beam', [.16, roofHeight(x) - 6.3, .16], [x, (6.3 + roofHeight(x)) / 2, z], '#74543a', 'dg');
  box('attic-crossbeam', 'beam', [8, .16, .16], [7, 8.7, z], '#74543a', 'dg');
}

function floorOf(roomId) { return rooms.find(r => r.id === roomId)?.floor || 'garden'; }
function part(roomId, id, kind, size, position, color, extra) {
  return box(`${roomId}-${id}`, kind, size, position, color, floorOf(roomId), { roomId, ...extra });
}
function record(roomId, name, x, z, w, d, height, kind, extra = {}) {
  const result = { id: `${roomId}-${name}`, name, roomId, floor: floorOf(roomId), x, z, width: w, depth: d, height, kind, ...extra };
  furniture.push(result); return result;
}
function base(roomId) { return FLOORS[floorOf(roomId)] ?? 0; }
function table(roomId, name, x, z, w, d, height = .78, color = '#be986a') {
  record(roomId, name, x, z, w, d, height, 'table', { underClearance: height - .065 });
  const y = base(roomId);
  part(roomId, name, 'tabletop', [w, .065, d], [x + w / 2, y + height - .0325, z + d / 2], color);
  for (const xx of [x + .07, x + w - .07]) for (const zz of [z + .07, z + d - .07]) part(roomId, name, 'table-leg', [.045, height - .065, .045], [xx, y + (height - .065) / 2, zz], '#806548');
}
function chair(roomId, name, x, z, w = .6, d = .65, color = '#80998c', facing = 'south') {
  const y = base(roomId), seat = .49;
  record(roomId, name, x, z, w, d, .94, 'chair', { underClearance: .435 });
  part(roomId, name, 'chair-seat', [w, .055, d], [x + w / 2, y + seat - .0275, z + d / 2], color);
  for (const xx of [x + .055, x + w - .055]) for (const zz of [z + .055, z + d - .055]) part(roomId, name, 'chair-leg', [.035, .435, .035], [xx, y + .2175, zz], '#856c4c');
  const horizontal = facing === 'south' || facing === 'north';
  part(roomId, name, 'chair-back', horizontal ? [w, .45, .045] : [.045, .45, d], [horizontal ? x + w / 2 : (facing === 'east' ? x + .0225 : x + w - .0225), y + .715, horizontal ? (facing === 'south' ? z + .0225 : z + d - .0225) : z + d / 2], color);
}
function cabinet(roomId, name, x, z, w, d, height = 1.7, back = null, color = '#b28c60', open = false) {
  const y = base(roomId); record(roomId, name, x, z, w, d, height, 'cabinet', { back });
  if (!open) {
    part(roomId, name, 'cabinet', [w, height, d], [x + w / 2, y + height / 2, z + d / 2], color);
    // Panels sit on the visible face; they do not enlarge the physical envelope.
    const alongX = w >= d;
    for (let i = 0; i < Math.max(1, Math.floor((alongX ? w : d) / .55)); i++) {
      const count = Math.max(1, Math.floor((alongX ? w : d) / .55));
      const centre = alongX ? [x + (i + .5) * w / count, y + height * .56, z + d - .012] : [x + w - .012, y + height * .56, z + (i + .5) * d / count];
      part(roomId, `${name}-handle`, 'detail', alongX ? [.12, .035, .018] : [.018, .035, .12], centre, '#554d3f');
    }
  } else {
    const alongX = w >= d;
    for (const offset of [0, (alongX ? w : d) - .045]) part(roomId, name, 'shelf-side', alongX ? [.045, height, d] : [w, height, .045], [alongX ? x + offset + .0225 : x + w / 2, y + height / 2, alongX ? z + d / 2 : z + offset + .0225], color);
    for (let h = .06; h < height; h += .43) part(roomId, name, 'shelf-board', [w, .035, d], [x + w / 2, y + h, z + d / 2], color);
    for (let i = 0; i < 5; i++) {
      const h = .43 * (i % Math.max(1, Math.floor(height / .43))) + .18;
      part(roomId, `${name}-books`, 'books', alongX ? [.24, .23, d * .72] : [w * .72, .23, .24], [alongX ? x + w * (.2 + .14 * i) : x + w / 2, y + h, alongX ? z + d / 2 : z + d * (.2 + .14 * i)], ['#759386', '#b17559', '#d2b66d', '#658491', '#b699a6'][i]);
    }
  }
}
function solid(roomId, name, x, z, w, d, height, color) {
  record(roomId, name, x, z, w, d, height, 'solid');
  part(roomId, name, 'furniture', [w, height, d], [x + w / 2, base(roomId) + height / 2, z + d / 2], color);
}
function plant(roomId, x, z, r = .3, height = 1.05) {
  const y = base(roomId); record(roomId, 'Pflanze', x - r, z - r, r * 2, r * 2, height, 'plant');
  part(roomId, 'pot', 'plant-pot', [r, .3, r], [x, y + .15, z], '#b68460');
  part(roomId, 'stem', 'plant-stem', [.035, height * .7, .035], [x, y + height * .47, z], '#627a48');
  for (let i = 0; i < 4; i++) part(roomId, 'leaf', 'foliage', [r * .85, .07, r * .52], [x + Math.cos(i * 1.8) * r * .45, y + height * (.65 + .09 * i), z + Math.sin(i * 1.8) * r * .45], ['#779551', '#52784b'][i % 2], { rotation: [0, i * 1.8, .28 * (i % 2 ? 1 : -1)] });
}
function bed(roomId, x, z, w, d) {
  const y = base(roomId); record(roomId, 'Bett', x, z, w, d, .75, 'bed');
  part(roomId, 'bed-base', 'bed', [w, .3, d], [x + w / 2, y + .24, z + d / 2], '#99704e');
  part(roomId, 'mattress', 'bed', [w - .06, .2, d - .06], [x + w / 2, y + .49, z + d / 2], '#ede1cc');
  const alongZ = d >= w;
  part(roomId, 'headboard', 'bed', alongZ ? [w, .85, .075] : [.075, .85, d], [alongZ ? x + w / 2 : x + .04, y + .425, alongZ ? z + .04 : z + d / 2], '#a47c56');
  part(roomId, 'blanket', 'bed', alongZ ? [w - .08, .06, d * .6] : [w * .6, .06, d - .08], [alongZ ? x + w / 2 : x + w * .65, y + .62, alongZ ? z + d * .65 : z + d / 2], roomId === 'nursery' ? '#87b2b0' : '#b58e9b');
  part(roomId, 'pillow', 'bed', alongZ ? [w * .7, .12, .43] : [.43, .12, d * .7], [alongZ ? x + w / 2 : x + .4, y + .66, alongZ ? z + .4 : z + d / 2], '#fff1d8');
}
function toilet(roomId, x, z) {
  const y = base(roomId); record(roomId, 'Toilette', x, z, .78, .6, .82, 'sanitary');
  part(roomId, 'cistern', 'sanitary', [.18, .82, .6], [x + .69, y + .41, z + .3], '#f5eee0');
  part(roomId, 'toilet-base', 'sanitary', [.43, .36, .35], [x + .34, y + .18, z + .3], '#ebe7db');
  part(roomId, 'toilet-seat', 'sanitary', [.57, .07, .51], [x + .315, y + .435, z + .3], '#faf5e7');
}
function basin(roomId, x, z, w, d) {
  solid(roomId, 'Waschtisch', x, z, w, d, .76, '#9baeb1');
  part(roomId, 'basin', 'sanitary', [w, .09, d], [x + w / 2, base(roomId) + .805, z + d / 2], '#f7eedc');
}
const back = (axis, value, edge) => ({ axis, value, edge });

// Ground floor furniture: wall-hugging storage and separately modelled legs.
table('dining', 'Esstisch', 1.8, 2.3, 1.8, 2.4);
for (const z of [2.5, 4]) { chair('dining', `Stuhl-west-${z}`, .85, z, .65, .6, '#ba9664', 'east'); chair('dining', `Stuhl-east-${z}`, 3.95, z, .65, .6, '#ba9664', 'west'); }
chair('dining', 'Stuhl-nord', 2.4, 1.3); chair('dining', 'Stuhl-sued', 2.4, 5.15, .6, .65, '#ba9664', 'north');
cabinet('dining', 'Geschirrschrank', 3.65, .07, 1.8, .5, 1.9, back('z', 0, 'min'));
cabinet('dining', 'Sideboard', .07, 5.35, .55, 1.3, .85, back('x', 0, 'min')); plant('dining', 1.2, 6.3);
solid('kitchen', 'Zeile-Nord', .07, 7.07, 2.63, .63, .9, '#93afa0');
solid('kitchen', 'Zeile-West', .07, 7.7, .63, 3.15, .9, '#93afa0');
cabinet('kitchen', 'Kuehlschrank', .07, 11.1, .78, .83, 1.88, back('x', 0, 'min'), '#d9ded1');
table('kitchen', 'Kuecheninsel', 1.8, 9, 2.1, .95, .9, '#d9c9a7'); chair('kitchen', 'Kuechenhocker', 1.85, 10.35, .6, .6);
part('kitchen', 'sink', 'detail', [.9, .03, .4], [.98, .925, 7.38], '#7e9797');
for (const z of [8.2, 8.65]) part('kitchen', 'hob', 'detail', [.32, .018, .32], [.385, .925, z], '#4e5b5a');
solid('living', 'Sofa-base', 13, 3, .93, 2.75, .38, '#668e7d');
part('living', 'sofa-back', 'sofa', [.2, .87, 2.75], [13.83, .435, 4.375], '#4e7566');
for (const z of [3.05, 5.45]) part('living', 'sofa-arm', 'sofa', [.93, .66, .25], [13.465, .33, z + .125], '#5d8271');
for (let i = 0; i < 3; i++) part('living', 'sofa-cushion', 'sofa', [.7, .14, .69], [13.35, .45, 3.48 + .76 * i], '#8aa48b');
table('living', 'Couchtisch', 11.15, 3.65, 1.2, 1.2, .67, '#bc9566');
cabinet('living', 'TV-Bank', 8.57, 2.65, .33, 1.75, .5, back('x', 8.5, 'min'), '#b69871');
part('living', 'television', 'detail', [.055, .72, 1.3], [8.77, .94, 3.5], '#344c50');
cabinet('living', 'Buecherregal', 9, .07, 2, .5, 1.85, back('z', 0, 'min'), '#b99466', true);
chair('living', 'Sessel', 10.1, 1.25, .85, .85, '#c18f66'); plant('living', 13.4, 6.4, .3);
cabinet('hall', 'Flurkonsole', 5.57, 7.15, .33, 1.1, .78, back('x', 5.5, 'min'));
table('hall', 'Sitzbank', 8, 10.35, .43, 1, .45); plant('hall', 5.95, 11.5, .23);
cabinet('cloakroom', 'Garderobe', 9.05, 11.4, 1.9, .53, 1.95, back('z', 12, 'max'), '#a5ad92');
table('cloakroom', 'Schuhbank', 8.57, 10.65, .43, .72, .44);
cabinet('cloakroom', 'Schuhschrank', 8.9, 7.07, 1.6, .33, .95, back('z', 7, 'min'));
toilet('guest-wc', 13.15, 8.1); basin('guest-wc', 12.4, 7.07, .9, .43);
cabinet('guest-wc', 'Handtuecher', 11.45, 9.5, 1.15, .43, 1.2, back('z', 10, 'max'), '#aec0b6');
cabinet('storage', 'Abstellregal', 12.55, 10.07, 1.38, .38, 1.55, back('z', 10, 'min'), '#af9c76', true);
cabinet('storage', 'Putzschrank', 13.5, 10.75, .43, 1.18, 1.9, back('x', 14, 'max'));

// Cellar.
table('workshop', 'Werkbank', .6, .07, 3.5, .8, .87); cabinet('workshop', 'Werkzeugschrank', 4.88, .5, .55, 2.7, 1.85, back('x', 5.5, 'max'), '#929c8b'); chair('workshop', 'Hocker', 1.8, 1.4); solid('workshop', 'Werkzeugkiste', .07, 3, .78, .8, .5, '#ba8650');
for (const x of [8.57, 9.7]) { solid('laundry', 'Waschgeraet', x, .07, 1, .98, .92, '#dfe3d8'); part('laundry', 'Waschfenster', 'detail', [.58, .58, .024], [x + .5, -3.15 + .46, 1.06], '#729498'); }
table('laundry', 'Waeschetisch', 12, .07, 1.8, .63); solid('laundry', 'Waeschekorb', 12.5, 2.3, .8, .8, .6, '#bbaf8c'); table('laundry', 'Waeschestaender', 9, 2, 1.8, .8, 1, '#bec5bd');
cabinet('pantry', 'Vorratsregal-links', .07, 7.7, .63, 3.4, 1.85, back('x', 0, 'min'), '#b49569', true);
cabinet('pantry', 'Vorratsregal-rechts', 4.8, 8.6, .63, 3.1, 1.85, back('x', 5.5, 'max'), '#b49569', true);
cabinet('pantry', 'Vorratsschrank', 1.4, 11.45, 2.5, .48, 1.65, back('z', 12, 'max'));
solid('utility', 'Warmwasserspeicher', 12.35, 7.85, 1.1, 1.1, 1.9, '#aebeb9'); solid('utility', 'Heizung', 11.8, 11.15, 1.6, .78, 1.2, '#b8b6a7');
cabinet('utility', 'Technikschrank', 8.57, 8.8, .63, 1.6, 1.7, back('x', 8.5, 'min'), '#7c9790');
cabinet('cellar-hall-south', 'Flurschrank', 6.05, 11.5, 1.9, .43, 1.35, back('z', 12, 'max'));
cabinet('cellar-hall', 'Regal-West', .07, 5.45, .33, 1.1, 1.1, back('x', 0, 'min')); cabinet('cellar-hall', 'Regal-Ost', 13.6, 5.3, .33, 1.3, 1.1, back('x', 14, 'max'));

// Upper floor.
bed('bedroom', 1.65, .07, 2, 2.55); solid('bedroom', 'Nachttisch-links', .95, .1, .5, .5, .52, '#b18c67'); solid('bedroom', 'Nachttisch-rechts', 3.85, .1, .5, .5, .52, '#b18c67');
cabinet('bedroom', 'Kleiderschrank', .07, 3.15, .58, 1.6, 2.05, back('x', 0, 'min'), '#b8aa92');
table('office', 'Schreibtisch', 9, .07, 2.8, .8); chair('office', 'Schreibtischstuhl', 10, 1.3);
part('office', 'monitor', 'detail', [1.05, .55, .045], [10.225, 4.18, .27], '#3e585a');
cabinet('office', 'Buecherregal-Nord', 13.4, .07, .53, 1.18, 1.8, back('x', 14, 'max'), '#b7986e', true); cabinet('office', 'Buecherregal-Sued', 13.4, 3.55, .53, 1.2, 1.8, back('x', 14, 'max'), '#b7986e', true);
bed('nursery', .07, 7.07, 2.4, 1.2); table('nursery', 'Kinderschreibtisch', 3, 11.15, 2.3, .78, .74); chair('nursery', 'Kinderstuhl', 3.8, 10.15, .6, .65, '#d9b269', 'north'); cabinet('nursery', 'Spielzeugschrank', 4.85, 8.7, .58, 1, 1.4, back('x', 5.5, 'max'), '#87a6a0', true);
for (const [i, x, z] of [[0, 2.1, 9.75], [1, 2.65, 10.25], [2, 3, 9.75]]) solid('nursery', `Bauklotz-${i}`, x, z, .2, .2, .2, ['#c78256', '#90a576', '#d7bc6e'][i]);
// The bathtub consists of its actual rim and bottom, not an invisible solid box.
record('bathroom', 'Badewanne', 11.75, 7.07, 2.18, 1, .65, 'bath');
part('bathroom', 'bath-bottom', 'sanitary', [2.18, .12, 1], [12.84, 3.21, 7.57], '#e7e8dc');
for (const z of [7.12, 8.02]) part('bathroom', 'bath-rim', 'sanitary', [2.18, .58, .1], [12.84, 3.5, z], '#f2efe3');
for (const x of [11.8, 13.88]) part('bathroom', 'bath-end', 'sanitary', [.1, .58, 1], [x, 3.5, 7.57], '#f2efe3');
basin('bathroom', 8.57, 9, .48, 1.15); toilet('bathroom', 13.15, 11.3); cabinet('bathroom', 'Badschrank', 12.1, 11.5, .95, .43, 1.05, back('z', 12, 'max'), '#a6bab6');
chair('upper-hall-south', 'Lesesessel', 6.05, 10.2, .9, .85, '#ac8779'); cabinet('upper-hall-south', 'Leseregal', 7.9, 8.8, .53, 2.55, 1.75, back('x', 8.5, 'max'), '#ad8e61', true);
cabinet('upper-hall', 'Konsole-West', .07, 5.4, .38, 1.2, .8, back('x', 0, 'min')); cabinet('upper-hall', 'Schrank-Ost', 13.4, 5.2, .53, 1.6, 1.4, back('x', 14, 'max'));

// Attic and garden.
for (const [i, x, z, w, d] of [[0, 1.6, .6, 1.3, .8], [1, 3.5, .5, 1.25, 1], [2, 1.9, 2, 1, .65]]) solid('attic-west', `Koffer-${i}`, x, z, w, d, .48 + i * .13, ['#9b7658', '#c3a071', '#889687'][i]);
table('attic-east', 'Basteltisch', 9.15, .07, 2.4, 1.1); chair('attic-east', 'Bastelstuhl', 9.95, 1.55);
cabinet('attic-east', 'Kniestockregal', 12.15, .35, .5, 2.3, .98, null, '#ac8d65', true);
table('attic', 'Dachtisch', 8.3, 8.1, 1.8, 1); solid('attic', 'Truhe-Ost', 10.7, 10.75, 1.3, .75, .65, '#a5855d'); solid('attic', 'Truhe-West', 2, 10.65, 1.4, .75, .58, '#aa8c62'); cabinet('attic', 'Dachschrank', 3.65, 11.5, 1.8, .43, 1.2, back('z', 12, 'max'));
table('garden', 'Terrassentisch', 5, -2.4, 2.4, 1.1, .8, '#c0ad83');
for (const x of [5.15, 6.65]) { chair('garden', `Terrassenstuhl-N-${x}`, x, -3.25, .6, .65, '#9daa84'); chair('garden', `Terrassenstuhl-S-${x}`, x, -1, .6, .65, '#9daa84', 'north'); }
chair('garden', 'Terrassenstuhl-West', 4.15, -2.15, .65, .6, '#9daa84', 'east'); chair('garden', 'Terrassenstuhl-Ost', 7.7, -2.15, .65, .6, '#9daa84', 'west');
table('garden', 'Gartenbank', -4, 4, 2.5, .65, .52);
solid('garden', 'Hochbeet', 15.65, 4.9, 1.8, 4.1, .65, '#9c865e');
for (let j = 0; j < 4; j++) for (const x of [16.1, 16.9]) plant('garden', x, 5.4 + .9 * j, .18, 1.02);
for (const [x, z, radius] of [[15.5, -3.2, 1.25], [-2, -4, 1.1], [-2.75, 13.5, .95]]) {
  part('garden', 'tree-trunk', 'tree', [.35, 3.3, .35], [x, 1.65, z], '#816442');
  for (let i = 0; i < 3; i++) part('garden', 'tree-crown', 'foliage', [radius * 1.25, radius * .9, radius * 1.1], [x + Math.cos(i * 2.1) * .45, 3.1 + i * .35, z + Math.sin(i * 2.1) * .4], ['#719754', '#89aa66', '#648c50'][i], { rotation: [0, i * .8, .08] });
}
// Visible hedges and a fence delimit the property; nothing stops a window exit.
for (const z of [-7, 18]) box('boundary-hedge', 'boundary', [24, 1.5, .25], [7, .75, z], '#6d8d59', 'garden');
for (const x of [-5, 19]) box('boundary-hedge', 'boundary', [.25, 1.5, 25], [x, .75, 5.5], '#6d8d59', 'garden');

function stars(roomId, points) {
  const floor = base(roomId);
  for (const [x, height, z, under = false] of points) collectibles.push({ id: `${roomId}-star-${collectibles.filter(s => s.roomId === roomId).length + 1}`, roomId, x, y: floor + height, z, radius: under ? .14 : .22, under });
}
stars('living', [[11.2, 1.08, 5.45], [10.1, 1.3, 4.6], [9.65, 1.15, 6.4], [12.15, 1.05, 2.5], [11.75, .29, 4.25, true], [10.52, .22, 1.68, true], [12.2, 1.6, 1.1]]);
stars('dining', [[2.7, .33, 3.55, true], [4.275, .22, 4.3, true], [4.8, 1.35, 1.55], [1.1, 1.15, 4.8], [3.7, 1.2, 6.1], [2.2, 1.4, .9]]);
stars('kitchen', [[2.9, .42, 9.45, true], [4.4, 1.3, 11.45], [2.15, .22, 10.65, true], [3.9, 1.45, 8.1], [1.2, 1.6, 8.5]]);
stars('hall', [[7, 1.3, 8.8], [7.7, 1.25, 6.45], [6.6, 1.6, 10.7], [6.2, 1.25, 9.3]]);
stars('cloakroom', [[9.8, 1.25, 9.3], [10.3, 1.3, 8.1]]); stars('guest-wc', [[12.3, 1.3, 8.65], [11.75, .65, 9.2]]); stars('storage', [[12.2, 1.3, 11.1], [12, .42, 10.6]]);
stars('workshop', [[2.35, .38, .47, true], [3.85, 1.4, 2.8], [2.1, .22, 1.725, true], [1.3, 1.3, 3.2]]);
stars('laundry', [[11.65, 1.3, 2.9], [12.8, 1.1, 1.75], [12.9, .35, .39, true], [9.8, .4, 2.4, true]]);
stars('pantry', [[2.3, 1.2, 8.1], [3.6, 1.55, 10.7], [4.15, .55, 9.6], [1.3, 1.5, 9.3]]); stars('utility', [[10, 1.25, 10.85], [11.1, 1.45, 8.7], [12, .55, 9.85]]);
stars('cellar-hall', [[4.7, 1.2, 6], [11.8, 1.3, 6]]); stars('cellar-hall-south', [[7, 1.2, 9.1], [6.4, .65, 10.4]]);
stars('bedroom', [[4.75, 1.25, 2.5], [1.1, 1.1, 2], [3.45, 1.4, 3.55], [4.4, .55, 1.3]]);
stars('office', [[10.4, .34, .47, true], [12, 1.35, 2.7], [10.3, .22, 1.625, true], [12.5, 1.6, 1.1]]);
stars('nursery', [[4.15, .33, 11.55, true], [1.65, .75, 10.8], [3.75, 1.2, 7.85], [4.1, .22, 10.475, true], [1.1, 1.35, 9.2]]);
stars('bathroom', [[10, 1.1, 10.7], [11.1, 1.5, 8.7], [12.8, .4, 7.6]]);
stars('upper-hall', [[4.5, 1.2, 6], [12.3, 1.2, 6]]); stars('upper-hall-south', [[6.6, 1.1, 11.4], [7.1, 1.5, 8.4]]);
stars('attic-west', [[2.8, 1.25, 2.8], [4.5, 1.55, 3.8]]); stars('attic-east', [[10.35, .34, .6, true], [11.9, 1.3, 3.2]]);
stars('attic', [[5.3, 1.4, 7.75], [9.2, .34, 8.6, true], [4.6, 1.15, 10], [1.2, 1.4, 8.2], [7.1, 2.15, 9.4]]);
stars('garden', [[6.2, .36, -1.85, true], [5.45, .22, -.675, true], [-2.75, .23, 4.32, true], [15.6, 1.4, 13.6], [17.9, 1.3, -1.5], [-2.1, 1.5, 10.5], [10.2, 1.65, -4], [4.2, 1.4, 13.5], [15.3, 4.6, 2.4], [-1.2, 4.6, 9.3], [-.8, 8.1, 8.2], [7.5, 11.7, 7.2]]);
for (const [id, floor] of [['cellar-core', 'ug'], ['stairs', 'eg'], ['upper-core', 'og'], ['attic-core', 'dg']]) stars(id, [[7, 1.4, 2.2], [7, 2.5, 3.3]]);

export const HOUSE = {
  id: 1, name: 'Ein ganzes Haus', startRoomId: 'living', rooms, doors, obstacles, openings, furniture, collectibles,
  thermals: [
    { id: 'stairwell-lift', x: 7, y: -3.05, z: 2.2, r: .43, height: 13, strength: 2.6 },
    { id: 'garden-east-lift', x: 16.1, y: .15, z: 1.7, r: .9, height: 10.9, strength: 2.1 },
    { id: 'garden-west-lift', x: -1.65, y: .15, z: 8.2, r: .8, height: 10.7, strength: 2.1 },
    { id: 'living-updraft', x: 12.3, y: .1, z: 5.9, r: .45, height: 2.6, strength: 1.3 },
  ],
  connections: [['cellar-core', 'stairs'], ['stairs', 'upper-core'], ['upper-core', 'attic-core'], ['cellar-hall', 'cellar-hall-south'], ['upper-hall', 'upper-hall-south'], ['attic', 'attic-west'], ['attic', 'attic-east'], ['kitchen', 'garden'], ['office', 'garden'], ['nursery', 'garden'], ['attic', 'garden']],
  start: { x: 11.2, y: 1.05, z: 6.2, heading: 0 },
  bounds: { minX: -5, maxX: 19, minY: -3.15, maxY: 14, minZ: -7, maxZ: 18 },
  towers: [],
};

export function getRoomAt(position) {
  const { x, y, z } = position;
  if (![x, y, z].every(Number.isFinite)) return null;
  const inside = room => { const b = room.bounds; return x >= b.minX && x < b.maxX && y >= b.minY - .025 && y < b.maxY && z >= b.minZ && z < b.maxZ; };
  const interior = rooms.find(room => room.floor !== 'garden' && inside(room));
  if (interior) {
    if (interior.floor === 'dg' && y > roofHeight(Math.max(0, Math.min(14, x))) + .12) return inside(gardenRoom) ? gardenRoom : null;
    return interior;
  }
  return inside(gardenRoom) ? gardenRoom : null;
}

export function getDoorPose(door, open = false) {
  const rotation = [...(door.rotation || [0, 0, 0])];
  const position = [...door.position];
  if (open && door.hinge) {
    const hinge = door.hinge.position, angle = door.hinge.angle;
    const x = position[0] - hinge[0], z = position[2] - hinge[2];
    position[0] = hinge[0] + Math.cos(angle) * x + Math.sin(angle) * z;
    position[2] = hinge[2] - Math.sin(angle) * x + Math.cos(angle) * z;
    rotation[1] += angle;
  }
  return { size: [...door.size], position, rotation };
}

import test from 'node:test';
import assert from 'node:assert/strict';
import { Euler, Quaternion, Ray, Vector3 } from 'three';
import { HOUSE } from '../src/house.js';
import { buildHouseSurfaceGeometries } from '../src/house-surface-geometry.js';

const structure = parts => parts.filter(part => ['floor', 'wall', 'roof'].includes(part.kind) || (part.kind === 'trim' && part.doorFrame === true));
const box = (id, kind, size, position = [0, 0, 0], rotation = [0, 0, 0]) => ({ id, kind, size, position, rotation });
const close = (actual, expected, label, epsilon = 1e-5) => assert(Math.abs(actual - expected) < epsilon, `${label}: ${actual} != ${expected}`);

function solids(parts) {
  return structure(parts).map(part => ({ ...part,
    centre: new Vector3(...part.position), scale: new Vector3(...part.size),
    rotationQuaternion: new Quaternion().setFromEuler(new Euler(...part.rotation)),
    inverse: new Quaternion().setFromEuler(new Euler(...part.rotation)).invert() }));
}
function triangles(parts, geometries) {
  return solids(parts).flatMap(part => {
    const geometry = geometries.get(part.id), result = [], position = geometry.attributes.position;
    for (let i = 0; i < position.count; i += 3) {
      const vertices = [0, 1, 2].map(j => new Vector3().fromBufferAttribute(position, i + j));
      const normal = vertices[1].clone().sub(vertices[0]).cross(vertices[2].clone().sub(vertices[0]));
      result.push({ id: part.id, vertices, area: normal.length() / 2, normal: normal.normalize(),
        centre: vertices[0].clone().add(vertices[1]).add(vertices[2]).multiplyScalar(1 / 3) });
    }
    return result;
  });
}
function inside(point, boxes) {
  return boxes.some(part => {
    const local = point.clone().sub(part.centre).applyQuaternion(part.inverse);
    return ['x', 'y', 'z'].every((axis, index) => Math.abs(local[axis]) < part.size[index] / 2 - 1e-8);
  });
}
function exteriorOnly(parts, surfaces) {
  const boxes = solids(parts);
  for (const triangle of surfaces) {
    assert(triangle.area > 1e-10, `${triangle.id}: degenerate triangle`);
    assert(!inside(triangle.centre.clone().addScaledVector(triangle.normal, 2e-6), boxes), `${triangle.id}: inward/occluded exterior`);
    assert(inside(triangle.centre.clone().addScaledVector(triangle.normal, -2e-6), boxes), `${triangle.id}: surface added outside source solids`);
  }
}
const surfaceArea = surfaces => surfaces.reduce((sum, triangle) => sum + triangle.area, 0);
const signedVolume = surfaces => surfaces.reduce((sum, { vertices: [a, b, c] }) => sum + a.dot(b.clone().cross(c)) / 6, 0);

function rayDistance(point, direction, surfaces) {
  const ray = new Ray(point, direction), hit = new Vector3();
  let closest = Infinity;
  for (const { vertices } of surfaces) if (ray.intersectTriangle(...vertices, false, hit)) closest = Math.min(closest, point.distanceTo(hit));
  return closest;
}
function solidRayDistance(point, direction, boxes) {
  let closest = Infinity;
  for (const part of boxes) {
    const start = point.clone().sub(part.centre).applyQuaternion(part.inverse), delta = direction.clone().applyQuaternion(part.inverse);
    let near = -Infinity, far = Infinity;
    for (const [index, axis] of ['x', 'y', 'z'].entries()) {
      if (Math.abs(delta[axis]) < 1e-12) {
        // A ray exactly along a jamb edge still touches the solid. Subtracting
        // authored decimal coordinates can otherwise reject it by ~7e-17 m.
        if (Math.abs(start[axis]) > part.size[index] / 2 + 1e-10) { far = -Infinity; break; }
      } else {
        const a = (-part.size[index] / 2 - start[axis]) / delta[axis], b = (part.size[index] / 2 - start[axis]) / delta[axis];
        near = Math.max(near, Math.min(a, b)); far = Math.min(far, Math.max(a, b));
      }
    }
    if (near <= far && far >= 0) closest = Math.min(closest, Math.max(0, near));
  }
  return closest;
}

function coplanarOverlap(a, b, axes) {
  const project = point => axes.map(axis => point.getComponent(axis));
  const area = polygon => Math.abs(polygon.reduce((sum, p, i) => {
    const q = polygon[(i + 1) % polygon.length]; return sum + p[0] * q[1] - p[1] * q[0];
  }, 0)) / 2;
  const edgeSide = (p, q, r) => (q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]);
  const cutter = b.vertices.map(project);
  if (edgeSide(...cutter) < 0) cutter.reverse();
  let polygon = a.vertices.map(project);
  for (let i = 0; i < 3 && polygon.length; i++) {
    const from = cutter[i], to = cutter[(i + 1) % 3], next = [];
    for (let j = 0; j < polygon.length; j++) {
      const p = polygon[j], q = polygon[(j + 1) % polygon.length], d = edgeSide(from, to, p), e = edgeSide(from, to, q);
      if (d >= 0) next.push(p);
      if ((d < 0 && e > 0) || (d > 0 && e < 0)) next.push(p.map((value, axis) => value + (q[axis] - value) * d / (d - e)));
    }
    polygon = next;
  }
  return area(polygon);
}

test('identical surfaces have deterministic floor ownership, world positions and original box UVs', () => {
  const parts = [box('wall', 'wall', [2, 2, 2]), box('floor', 'floor', [2, 2, 2]), box('chair', 'chair-seat', [1, .1, 1])];
  const before = structuredClone(parts), geometry = buildHouseSurfaceGeometries(parts);
  assert.deepEqual(parts, before);
  assert.deepEqual([...geometry.keys()], ['wall', 'floor']);
  assert.equal(geometry.get('wall').attributes.position.count, 0);
  assert.equal(geometry.get('floor').attributes.position.count, 36);
  for (const value of geometry.get('floor').attributes.position.array) assert(Math.abs(value) === 1);
  for (const value of geometry.get('floor').attributes.uv.array) assert(value === 0 || value === 1);
  const reversed = buildHouseSurfaceGeometries([...parts].reverse());
  assert.deepEqual(reversed.get('floor').attributes.position.array, geometry.get('floor').attributes.position.array);
});

test('touching boxes remove internal opposite faces without opening the enclosure', () => {
  for (const angle of [0, .37]) {
    const direction = [Math.cos(angle), Math.sin(angle), 0];
    const parts = [-1, 1].map(sign => box(`wall-${sign}`, 'wall', [2, 2, 2], direction.map(value => value * sign), [0, 0, angle]));
    const surfaces = triangles(parts, buildHouseSurfaceGeometries(parts));
    close(surfaceArea(surfaces), 40, 'joined cuboids surface area'); close(signedVolume(surfaces), 16, 'joined cuboids volume');
    exteriorOnly(parts, surfaces);
  }
});

test('door jamb owns the wall reveal without duplicate coplanar faces or changed clearance', () => {
  // The jamb sits outside the door hole and projects 3cm beyond both wall faces.
  // Its inner face used to coincide exactly with the wall's exposed end face.
  for (const rotation of [0, Math.PI / 2]) {
    const turn = part => ({ ...part, position: new Vector3(...part.position).applyAxisAngle(new Vector3(0, 1, 0), rotation).toArray(), rotation: [0, rotation, 0] });
    const parts = [box('wall', 'wall', [2, 2.2, .12], [-1, 1.1, 0]),
      { ...box('door-jamb', 'trim', [.035, 2.2, .18], [-.0175, 1.1, 0]), doorFrame: true },
      box('window-trim', 'trim', [.035, 1.2, .15], [4, 1.1, 0])].map(turn);
    const before = structuredClone(parts), geometry = buildHouseSurfaceGeometries(parts), surfaces = triangles(parts, geometry);
    assert.deepEqual(parts, before, 'render clipping must not change hitboxes');
    assert(!geometry.has('window-trim'), 'unrelated trims retain their existing rendering');
    const revealNormal = new Vector3(1, 0, 0).applyAxisAngle(new Vector3(0, 1, 0), rotation);
    const reveal = surfaces.filter(t => t.normal.dot(revealNormal) > .99999 && Math.abs(t.centre.dot(revealNormal)) < 1e-6);
    assert(reveal.length > 0);
    assert(reveal.every(t => t.id === 'door-jamb'), 'only the cream jamb may own the portal reveal');
    close(surfaceArea(reveal), 2.2 * .18, 'exactly one visible reveal face');
    close(signedVolume(surfaces), 2 * 2.2 * .12 + .035 * 2.2 * .06, 'wall/jamb union volume');
    exteriorOnly(parts, surfaces);
    const from = new Vector3(.15, 1.1, .041).applyAxisAngle(new Vector3(0, 1, 0), rotation);
    close(rayDistance(from, revealNormal.clone().negate(), surfaces), .15, 'opening width unchanged');
  }
});

test('wall T/cross junctions keep exactly one outer skin', () => {
  const parts = [box('a', 'wall', [3, 1, 1]), box('b', 'wall', [1, 1, 3])];
  const surfaces = triangles(parts, buildHouseSurfaceGeometries(parts));
  close(surfaceArea(surfaces), 22, 'cross outer area'); close(signedVolume(surfaces), 5, 'cross union volume');
  exteriorOnly(parts, surfaces);
});

test('storey-height walls do not retain a duplicate cap on the upper floor', () => {
  const parts = [box('wall', 'wall', [.2, 3.2, 4], [0, -1.6, 0]), box('floor', 'floor', [4, .2, 4], [0, -.1, 0])];
  const surfaces = triangles(parts, buildHouseSurfaceGeometries(parts));
  close(signedVolume(surfaces), 5.6, 'wall/slab union volume'); exteriorOnly(parts, surfaces);
  assert(surfaces.filter(t => t.id === 'wall').every(t => t.normal.y < .5), 'wall top is wholly owned by floor');
  close(surfaces.filter(t => t.id === 'floor' && t.normal.y > .5).reduce((sum, t) => sum + t.area, 0), 16, 'unbroken floor top');
  close(rayDistance(new Vector3(.017, 1, .039), new Vector3(0, -1, 0), surfaces), 1, 'floor elevation unchanged');
});

test('rotated coplanar gable caps are clipped, with analytic union area and volume', () => {
  // A square prism and a 45-degree prism have an octagonal intersection.
  const parts = [box('gable', 'wall', [1, 1, 1]), box('sloping-cap', 'wall', [1, 1, 1], [0, 0, 0], [0, 0, Math.PI / 4])];
  const surfaces = triangles(parts, buildHouseSurfaceGeometries(parts));
  const unionArea = 1 + 2 * (1 - Math.SQRT1_2) ** 2;
  close(signedVolume(surfaces), unionArea, 'rotated union volume');
  close(surfaceArea(surfaces), 2 * unionArea + 16 * (1 - Math.SQRT1_2), 'rotated union skin');
  exteriorOnly(parts, surfaces);
});

test('the whole house has only exterior triangles and unchanged collision data / star IDs', () => {
  const before = JSON.stringify(HOUSE), geometries = buildHouseSurfaceGeometries(HOUSE.obstacles);
  const surfaces = triangles(HOUSE.obstacles, geometries);
  exteriorOnly(HOUSE.obstacles, surfaces);
  assert.equal(JSON.stringify(HOUSE), before);
  assert.equal(HOUSE.collectibles.length, 96);
  assert.equal(geometries.size, structure(HOUSE.obstacles).length);
  assert(surfaces.length < 10000, 'one-time meshing must stay small enough for mobile rendering');
  // Views from authored free-space points must see exactly the original solid
  // boundary. This catches accidentally missing exterior faces independently
  // of the polygon-clipping implementation.
  const boxes = solids(HOUSE.obstacles);
  for (const star of HOUSE.collectibles) for (const direction of [new Vector3(1, 0, 0), new Vector3(-1, 0, 0), new Vector3(0, 1, 0), new Vector3(0, -1, 0), new Vector3(0, 0, 1), new Vector3(0, 0, -1)]) {
    const point = new Vector3(star.x, star.y, star.z);
    const expected = solidRayDistance(point, direction, boxes), actual = rayDistance(point, direction, surfaces);
    if (expected === Infinity) assert.equal(actual, Infinity, `${star.id}: added surface`);
    else close(actual, expected, `${star.id}: missing/moved boundary`, 2e-5);
  }
});

test('the house skin has no area shared by coplanar exterior triangles, including gables', () => {
  const surfaces = triangles(HOUSE.obstacles, buildHouseSurfaceGeometries(HOUSE.obstacles)), planes = new Map();
  for (const triangle of surfaces) {
    const key = [...triangle.normal.toArray().map(n => Math.round(n * 1e5)), Math.round(triangle.normal.dot(triangle.centre) * 1e4)].join(':');
    if (!planes.has(key)) planes.set(key, []);
    planes.get(key).push(triangle);
  }
  for (const group of planes.values()) {
    const major = group[0].normal.toArray().map(Math.abs).indexOf(Math.max(...group[0].normal.toArray().map(Math.abs)));
    const axes = [0, 1, 2].filter(axis => axis !== major);
    const bounds = group.map(triangle => axes.map(axis => {
      const values = triangle.vertices.map(v => v.getComponent(axis)); return [Math.min(...values), Math.max(...values)];
    }));
    for (let i = 0; i < group.length; i++) for (let j = i + 1; j < group.length; j++) {
      if (bounds[i].some(([min, max], axis) => Math.min(max, bounds[j][axis][1]) - Math.max(min, bounds[j][axis][0]) < 1e-7)) continue;
      const overlap = coplanarOverlap(group[i], group[j], axes);
      assert(overlap < 1e-7, `${group[i].id}/${group[j].id}: duplicate exterior area ${overlap}`);
    }
  }
});

test('all door/window apertures and the continuous stair flight shaft remain open', () => {
  const surfaces = triangles(HOUSE.obstacles, buildHouseSurfaceGeometries(HOUSE.obstacles));
  for (const opening of HOUSE.openings.filter(o => o.type === 'door' || (o.type === 'window' && o.open))) {
    const axis = opening.horizontal ? 2 : 0;
    for (const sign of [-1, 1]) {
      const point = new Vector3(...opening.position), direction = new Vector3();
      point.setComponent(axis, point.getComponent(axis) - sign * .2); direction.setComponent(axis, sign);
      assert(rayDistance(point, direction, surfaces) > .4, `${opening.id}: aperture filled`);
    }
  }
  const roof = HOUSE.openings.find(o => o.type === 'roof-window');
  assert(rayDistance(new Vector3(roof.position[0], roof.position[1] - .2, roof.position[2]), new Vector3(0, 1, 0), surfaces) > .4, 'roof window remains open');
  assert(rayDistance(new Vector3(7, -2.8, 2.2), new Vector3(0, 1, 0), surfaces) > 11.8, 'stairwell must be uninterrupted through all floors');
  for (const y of [0, 3.15, 6.3]) close(rayDistance(new Vector3(2, y + .5, 2), new Vector3(0, -1, 0), surfaces), .5, 'adjacent room retains floor');
});

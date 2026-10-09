import { BufferGeometry, Euler, Float32BufferAttribute, Matrix4 } from 'three';

// Render the boundary of the union, without altering any shared collision box.
// Keep world coordinates in the buffers: separately rounding normalized boxes
// before their transforms would pull shared roof/wall vertices apart again.
const EPSILON = 1e-7;
const STRUCTURE = new Set(['wall', 'floor', 'roof']);
const PRIORITY = { trim: 4, floor: 3, wall: 2, roof: 1 };
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const subtract = (a, b) => a.map((value, axis) => value - b[axis]);
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const distance = (point, plane) => {
  const value = dot(point, plane.normal) - plane.offset;
  return Math.abs(value) <= EPSILON ? 0 : value;
};

function boxFor(part) {
  const rotation = new Matrix4().makeRotationFromEuler(new Euler(...(part.rotation || [0, 0, 0]))).elements;
  const axes = [0, 1, 2].map(axis => rotation.slice(axis * 4, axis * 4 + 3));
  const half = part.size.map(size => size / 2);
  const extent = [0, 1, 2].map(axis => axes.reduce((sum, vector, i) => sum + Math.abs(vector[axis]) * half[i], 0));
  const planes = [];
  for (let axis = 0; axis < 3; axis++) for (const sign of [-1, 1]) {
    const normal = axes[axis].map(value => value * sign);
    planes.push({ normal, offset: dot(normal, part.position) + half[axis] });
  }
  return { part, axes, half, planes,
    min: part.position.map((value, axis) => value - extent[axis]),
    max: part.position.map((value, axis) => value + extent[axis]) };
}

function overlaps(a, b) {
  return a.min.every((value, axis) => value <= b.max[axis] + EPSILON && a.max[axis] >= b.min[axis] - EPSILON);
}

function faceFor(box, axis, sign) {
  const u = (axis + 1) % 3, v = (axis + 2) % 3;
  const normal = box.axes[axis].map(value => value * sign);
  const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
  if (sign < 0) corners.reverse();
  const polygon = corners.map(([du, dv]) => box.part.position.map((value, k) => value
    + normal[k] * box.half[axis] + box.axes[u][k] * box.half[u] * du + box.axes[v][k] * box.half[v] * dv));
  return { axis, sign, normal, offset: dot(normal, polygon[0]), polygon };
}

function clean(polygon) {
  const result = [];
  for (const point of polygon) {
    const previous = result.at(-1);
    if (!previous || Math.hypot(...subtract(point, previous)) > EPSILON) result.push(point);
  }
  if (result.length > 1 && Math.hypot(...subtract(result[0], result.at(-1))) <= EPSILON) result.pop();
  return result;
}

// Split a convex face into two convex pieces. Points exactly on a cutter belong
// to the inside; this prevents a coplanar face from also surviving as outside.
function split(polygon, plane) {
  const distances = polygon.map(point => distance(point, plane));
  if (!distances.some(value => value > 0)) return { inside: polygon, outside: [] };
  if (!distances.some(value => value < 0)) return { inside: [], outside: polygon };
  const inside = [], outside = [];
  for (let i = 0; i < polygon.length; i++) {
    const point = polygon[i], next = polygon[(i + 1) % polygon.length];
    const a = distances[i], b = distances[(i + 1) % polygon.length];
    if (a <= 0) inside.push(point);
    if (a >= 0) outside.push(point);
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
      const t = a / (a - b), intersection = point.map((value, axis) => value + (next[axis] - value) * t);
      inside.push(intersection); outside.push(intersection);
    }
  }
  return { inside: clean(inside), outside: clean(outside) };
}

function ownsSurface(a, b) {
  const rank = PRIORITY[a.kind] - PRIORITY[b.kind];
  return rank > 0 || (rank === 0 && a.id < b.id);
}

function coplanarExterior(face, cutter) {
  return cutter.planes.some(plane => dot(face.normal, plane.normal) > 1 - 1e-12 && Math.abs(face.offset - plane.offset) <= EPSILON);
}

function subtractBox(polygon, cutter) {
  const remaining = [];
  let inside = polygon;
  for (const plane of cutter.planes) {
    const pieces = split(inside, plane);
    if (pieces.outside.length >= 3) remaining.push(pieces.outside);
    inside = pieces.inside;
    if (inside.length < 3) break;
  }
  return remaining;
}

// Match BoxGeometry's UV projection, including the floor's existing orientation.
function uvFor(point, axis, sign) {
  if (axis === 0) return [.5 - sign * point[2], .5 + point[1]];
  if (axis === 1) return [.5 + point[0], .5 - sign * point[2]];
  return [.5 + sign * point[0], .5 + point[1]];
}

/**
 * Map structural part IDs to their union exterior BufferGeometry. Positions and
 * normals are world-space: use identity mesh transforms. UVs stay source-local.
 * Door jambs own their exposed reveal faces; otherwise floors take priority.
 * This removes wall faces exactly beneath the trim instead of depth-offsetting
 * either material. Furniture, window trims and collision boxes stay unchanged.
 */
export function buildHouseSurfaceGeometries(parts) {
  const boxes = parts.filter(part => STRUCTURE.has(part.kind) || (part.kind === 'trim' && part.doorFrame === true)).map(boxFor);
  const result = new Map();
  for (const box of boxes) {
    const neighbours = boxes.filter(other => other !== box && overlaps(box, other));
    const positions = [], normals = [], uvs = [];
    for (let axis = 0; axis < 3; axis++) for (const sign of [-1, 1]) {
      const face = faceFor(box, axis, sign);
      let polygons = [face.polygon];
      for (const other of neighbours) {
        if (coplanarExterior(face, other) && ownsSurface(box.part, other.part)) continue;
        polygons = polygons.flatMap(polygon => subtractBox(polygon, other));
        if (!polygons.length) break;
      }
      for (const polygon of polygons) for (let i = 1; i < polygon.length - 1; i++) {
        const triangle = [polygon[0], polygon[i], polygon[i + 1]];
        if (Math.hypot(...cross(subtract(triangle[1], triangle[0]), subtract(triangle[2], triangle[0]))) <= EPSILON * EPSILON) continue;
        for (const point of triangle) {
          const relative = subtract(point, box.part.position);
          const local = box.axes.map((vector, i) => dot(relative, vector) / box.part.size[i]);
          positions.push(...point);
          normals.push(...face.normal);
          uvs.push(...uvFor(local, axis, sign));
        }
      }
    }
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    geometry.setAttribute('normal', new Float32BufferAttribute(normals, 3));
    geometry.setAttribute('uv', new Float32BufferAttribute(uvs, 2));
    if (positions.length) { geometry.computeBoundingBox(); geometry.computeBoundingSphere(); }
    result.set(box.part.id, geometry);
  }
  return result;
}

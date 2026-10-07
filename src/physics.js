import { World, Vec3, Body, Box, ConvexPolyhedron, Quaternion, SAPBroadphase } from 'cannon-es';
import { HOUSE, getDoorPose } from './house.js';
import { getAircraftDefinition } from './aircraft.js';

export const STAR_COLLECTION_RADIUS = 0.24;
const EPS = 1e-8;
const xyz = p => Array.isArray(p) ? p : [p.x, p.y, p.z];
const add = (a, b) => a.map((v, i) => v + b[i]);
const sub = (a, b) => a.map((v, i) => v - b[i]);
const mul = (a, t) => a.map(v => v * t);
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const length2 = a => dot(a, a);
const lerp = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const v3 = p => new Vec3(...xyz(p));
const rotate = (p, q) => {
  const tx = 2 * (q.y * p[2] - q.z * p[1]), ty = 2 * (q.z * p[0] - q.x * p[2]), tz = 2 * (q.x * p[1] - q.y * p[0]);
  return [p[0] + q.w * tx + q.y * tz - q.z * ty, p[1] + q.w * ty + q.z * tx - q.x * tz, p[2] + q.w * tz + q.x * ty - q.y * tx];
};
const inverseRotate = (p, q) => rotate(p, new Quaternion(-q.x, -q.y, -q.z, q.w));

function uniqueAxis(list, axis) {
  const squared = length2(axis);
  if (squared < 1e-12) return;
  const normal = mul(axis, 1 / Math.sqrt(squared));
  if (!list.some(existing => Math.abs(dot(existing, normal)) > 1 - 1e-7)) list.push(normal);
}

function describePart(part) {
  const normals = [], edges = [], triangles = [];
  for (const face of part.faces) {
    const [a, b, c] = face.map(i => part.vertices[i]);
    uniqueAxis(normals, cross(sub(b, a), sub(c, a)));
    for (let i = 0; i < face.length; i++) uniqueAxis(edges, sub(part.vertices[face[(i + 1) % face.length]], part.vertices[face[i]]));
    for (let i = 1; i < face.length - 1; i++) triangles.push([a, part.vertices[face[i]], part.vertices[face[i + 1]]]);
  }
  return { ...part, normals, edges, triangles };
}

function insidePart(point, part) {
  return part.faces.every(face => {
    const [a, b, c] = face.map(index => part.vertices[index]);
    return dot(sub(point, a), cross(sub(b, a), sub(c, a))) <= EPS;
  });
}

// Exact translational continuous SAT for a convex paper part and an oriented box.
// Rotation is split into small arcs by advance; translation never tunnels.
function sweepPart(part, orientation, from, displacement, obstacle) {
  const vertices = part.vertices.map(p => rotate(p, orientation));
  const normals = part.normals.map(a => rotate(a, orientation));
  const edges = part.edges.map(a => rotate(a, orientation));
  const axes = [...normals, ...obstacle.axes];
  for (const edge of edges) for (const axis of obstacle.axes) uniqueAxis(axes, cross(edge, axis));
  const relative = sub(from, obstacle.position);
  let enter = 0, leave = 1, normal = [0, 0, 0];
  for (const axis of axes) {
    const projections = vertices.map(v => dot(v, axis));
    const centre = dot(relative, axis);
    const min = Math.min(...projections) + centre, max = Math.max(...projections) + centre;
    const extent = obstacle.half.reduce((sum, half, i) => sum + half * Math.abs(dot(obstacle.axes[i], axis)), 0);
    const velocity = dot(displacement, axis);
    if (Math.abs(velocity) < EPS) {
      if (min > extent + EPS || max < -extent - EPS) return null;
      continue;
    }
    let t1 = (-extent - max) / velocity, t2 = (extent - min) / velocity;
    if (t1 > t2) [t1, t2] = [t2, t1];
    if (t1 > enter) { enter = t1; normal = mul(axis, velocity > 0 ? -1 : 1); }
    leave = Math.min(leave, t2);
    if (enter > leave + EPS) return null;
  }
  return leave >= 0 && enter <= 1 ? { t: Math.max(0, enter), normal } : null;
}

function segmentBox(from, to, obstacle, padding = 0) {
  const relative = sub(from, obstacle.position), delta = sub(to, from);
  const origin = obstacle.axes.map(axis => dot(relative, axis));
  const direction = obstacle.axes.map(axis => dot(delta, axis));
  let enter = 0, leave = 1;
  for (let axis = 0; axis < 3; axis++) {
    const extent = obstacle.half[axis] + padding;
    if (Math.abs(direction[axis]) < EPS) {
      if (Math.abs(origin[axis]) > extent) return null;
      continue;
    }
    let a = (-extent - origin[axis]) / direction[axis], b = (extent - origin[axis]) / direction[axis];
    if (a > b) [a, b] = [b, a];
    enter = Math.max(enter, a); leave = Math.min(leave, b);
    if (enter > leave) return null;
  }
  return enter;
}

function pointTriangle(p, a, b, c) {
  const ab = sub(b, a), ac = sub(c, a), ap = sub(p, a);
  const d1 = dot(ab, ap), d2 = dot(ac, ap);
  if (d1 <= 0 && d2 <= 0) return a;
  const bp = sub(p, b), d3 = dot(ab, bp), d4 = dot(ac, bp);
  if (d3 >= 0 && d4 <= d3) return b;
  const vc = d1 * d4 - d3 * d2;
  if (vc <= 0 && d1 >= 0 && d3 <= 0) return add(a, mul(ab, d1 / (d1 - d3)));
  const cp = sub(p, c), d5 = dot(ab, cp), d6 = dot(ac, cp);
  if (d6 >= 0 && d5 <= d6) return c;
  const vb = d5 * d2 - d1 * d6;
  if (vb <= 0 && d2 >= 0 && d6 <= 0) return add(a, mul(ac, d2 / (d2 - d6)));
  const va = d3 * d6 - d5 * d4;
  if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) return add(b, mul(sub(c, b), (d4 - d3) / (d4 - d3 + d5 - d6)));
  const denominator = 1 / (va + vb + vc);
  return add(a, add(mul(ab, vb * denominator), mul(ac, vc * denominator)));
}

function segmentSegment(p, q, a, b) {
  const u = sub(q, p), v = sub(b, a), w = sub(p, a);
  const aa = dot(u, u), bb = dot(u, v), cc = dot(v, v), dd = dot(u, w), ee = dot(v, w);
  if (aa < EPS) return { t: 0, point: add(a, mul(v, cc > EPS ? clamp(ee / cc, 0, 1) : 0)) };
  const determinant = aa * cc - bb * bb;
  let t = determinant > EPS ? clamp((bb * ee - cc * dd) / determinant, 0, 1) : 0;
  let s = cc > EPS ? (bb * t + ee) / cc : 0;
  if (s < 0) { s = 0; t = clamp(-dd / aa, 0, 1); }
  else if (s > 1) { s = 1; t = clamp((bb - dd) / aa, 0, 1); }
  return { t, point: add(a, mul(v, s)) };
}

// Distance between a star's relative travel segment and a real triangle face.
function segmentTriangle(p, q, a, b, c) {
  const direction = sub(q, p), normal = cross(sub(b, a), sub(c, a));
  const denominator = dot(normal, direction);
  if (Math.abs(denominator) > EPS) {
    const t = dot(normal, sub(a, p)) / denominator;
    if (t >= 0 && t <= 1) {
      const at = lerp(p, q, t), point = pointTriangle(at, a, b, c);
      if (length2(sub(at, point)) < 1e-12) return { distance2: 0, t, point };
    }
  }
  const candidates = [{ t: 0, point: pointTriangle(p, a, b, c) }, { t: 1, point: pointTriangle(q, a, b, c) }];
  for (const [u, v] of [[a, b], [b, c], [c, a]]) candidates.push(segmentSegment(p, q, u, v));
  for (const candidate of candidates) candidate.distance2 = length2(sub(lerp(p, q, candidate.t), candidate.point));
  return candidates.reduce((best, candidate) => candidate.distance2 < best.distance2 ? candidate : best);
}

export function createPhysics(level = HOUSE, aircraft = { form: 'classic', size: 1 }) {
  // Movement is prescribed by the flight controller. Cannon retains the exact
  // compound body for queries; advance performs continuous contacts itself.
  const world = new World({ gravity: new Vec3(0, 0, 0), allowSleep: true });
  world.broadphase = new SAPBroadphase(world);
  const blocks = [], obstacles = [], doorBodies = new Map();
  let definition, parts, lastMotion = [];

  function refreshObstacle(obstacle) {
    obstacle.position = xyz(obstacle.body.position);
    obstacle.axes = [[1, 0, 0], [0, 1, 0], [0, 0, 1]].map(axis => rotate(axis, obstacle.body.quaternion));
    obstacle.body.aabbNeedsUpdate = true;
    obstacle.body.updateAABB();
    obstacle.min = xyz(obstacle.body.aabb.lowerBound); obstacle.max = xyz(obstacle.body.aabb.upperBound);
    world.broadphase.dirty = true;
  }

  function solid(size, position, kind = 'solid', rotation = [0, 0, 0], id) {
    const body = new Body({ mass: 0, shape: new Box(new Vec3(...size.map(n => n / 2))), position: v3(position) });
    body.quaternion.setFromEuler(...rotation, 'XYZ');
    body.kind = kind; body.obstacleId = id;
    world.addBody(body);
    const obstacle = { body, half: size.map(n => n / 2), kind, id };
    refreshObstacle(obstacle); obstacles.push(obstacle);
    return obstacle;
  }

  for (const item of level.obstacles ?? []) solid(item.size, item.position, item.kind ?? 'solid', item.rotation ?? [0, 0, 0], item.id);
  for (const door of level.doors ?? []) {
    const pose = getDoorPose(door, false);
    const obstacle = solid(pose.size, pose.position, 'door', pose.rotation, door.id);
    doorBodies.set(door.id, { door, obstacle, open: false });
  }

  const start = xyz(level.start ?? [0, 1, 0]);
  const plane = new Body({ mass: 1, position: v3(start), linearDamping: 0, angularDamping: 1, fixedRotation: true, allowSleep: false });
  plane.kind = 'plane'; world.addBody(plane);

  function configureAircraft(form = 'classic', size = 1) {
    definition = getAircraftDefinition(form, size); parts = definition.parts.map(describePart);
    while (plane.shapes.length) plane.removeShape(plane.shapes[0]);
    for (const part of parts) {
      // Cannon expects each convex shape's origin to be inside that shape.
      // Its compound offset restores the exact aircraft-local mesh positions.
      const centre = [0, 1, 2].map(axis => part.vertices.reduce((sum, vertex) => sum + vertex[axis], 0) / part.vertices.length);
      plane.addShape(new ConvexPolyhedron({ vertices: part.vertices.map(vertex => v3(sub(vertex, centre))), faces: part.faces }), v3(centre));
    }
    plane.updateMassProperties(); plane.updateBoundingRadius(); plane.aabbNeedsUpdate = true;
    lastMotion = []; world.broadphase.dirty = true;
    return definition;
  }
  configureAircraft(aircraft.form, aircraft.size);

  function setDoorOpen(id, open = true) {
    const entry = doorBodies.get(id);
    if (!entry) return false;
    const pose = getDoorPose(entry.door, open);
    entry.obstacle.body.position.copy(v3(pose.position));
    entry.obstacle.body.quaternion.setFromEuler(...pose.rotation, 'XYZ');
    entry.open = Boolean(open); refreshObstacle(entry.obstacle);
    return true;
  }

  function reset() {
    for (const id of doorBodies.keys()) setDoorOpen(id, false);
    plane.position.copy(v3(start)); plane.previousPosition.copy(plane.position); plane.interpolatedPosition.copy(plane.position);
    plane.quaternion.set(0, 0, 0, 1); plane.previousQuaternion.copy(plane.quaternion); plane.interpolatedQuaternion.copy(plane.quaternion);
    for (const field of ['velocity', 'angularVelocity', 'force', 'torque']) plane[field].setZero();
    plane.collisionFilterMask = -1; plane.aabbNeedsUpdate = true; plane.wakeUp();
    world.accumulator = 0; world.time = 0; world.stepnumber = 0;
    world.contacts.length = 0; world.frictionEquations.length = 0;
    world.collisionMatrix.reset(); world.collisionMatrixPrevious.reset();
    world.broadphase.dirty = true; lastMotion = [];
  }

  function nearby(from, to) {
    const r = definition.boundingRadius;
    return obstacles.filter(obstacle => [0, 1, 2].every(axis =>
      Math.min(from[axis], to[axis]) - r <= obstacle.max[axis] && Math.max(from[axis], to[axis]) + r >= obstacle.min[axis]));
  }

  function firstContact(from, to, orientation) {
    const displacement = sub(to, from);
    let best = null;
    for (const obstacle of nearby(from, to)) {
      for (const part of parts) {
        const hit = sweepPart(part, orientation, from, displacement, obstacle);
        if (hit && (!best || hit.t < best.t)) best = { ...hit, body: obstacle.body };
      }
    }
    return best;
  }

  // Returns a collision and leaves the complete aircraft immediately before it.
  // `collide` is also dispatched once for consumers already using Cannon events.
  // Quaternions must match the rendered model; no hidden orientation offset exists.
  function advance(dt, velocity = plane.velocity, quaternion = plane.quaternion) {
    if (!Number.isFinite(dt) || dt < 0) throw new TypeError('advance requires a non-negative finite timestep');
    const initial = xyz(plane.position), displacement = mul(xyz(velocity), dt);
    const originQ = plane.quaternion.clone(), targetQ = new Quaternion(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
    targetQ.normalize();
    const angle = 2 * Math.acos(clamp(Math.abs(originQ.x * targetQ.x + originQ.y * targetQ.y + originQ.z * targetQ.z + originQ.w * targetQ.w), 0, 1));
    const steps = Math.max(1, Math.min(512, Math.ceil(Math.sqrt(length2(displacement)) / 0.12)), Math.ceil(angle / 0.012));
    plane.previousPosition.copy(plane.position); plane.previousQuaternion.copy(originQ);
    plane.velocity.copy(v3(velocity)); lastMotion = [];
    let current = initial, safeQ = originQ, collision = null;
    for (let step = 0; step < steps; step++) {
      const next = add(initial, mul(displacement, (step + 1) / steps));
      const middleQ = new Quaternion(), nextQ = new Quaternion();
      originQ.slerp(targetQ, (step + 0.5) / steps, middleQ);
      originQ.slerp(targetQ, (step + 1) / steps, nextQ);
      if (plane.collisionFilterMask !== 0) {
        collision = firstContact(current, next, middleQ);
        if (!collision) {
          const endpoint = firstContact(next, next, nextQ);
          if (endpoint) collision = { ...endpoint, t: 0 };
        }
      }
      if (collision) {
        // Small separation makes a shield turnaround possible without embedding.
        const travel = Math.sqrt(length2(sub(next, current)));
        const t = Math.max(0, collision.t - (travel > EPS ? 0.001 / travel : 0));
        const stop = lerp(current, next, t);
        // The swept pose, rather than the preceding arc pose, is the pose that
        // was proven clear at this exact stop point (important for a rebound).
        if (t > 0) safeQ = middleQ;
        lastMotion.push({ from: current, to: stop, orientation: safeQ });
        current = stop;
        break;
      }
      lastMotion.push({ from: current, to: next, orientation: middleQ });
      current = next; safeQ = nextQ;
    }
    plane.position.copy(v3(current)); plane.quaternion.copy(safeQ);
    plane.interpolatedPosition.copy(plane.position); plane.interpolatedQuaternion.copy(plane.quaternion);
    plane.aabbNeedsUpdate = true; world.broadphase.dirty = true;
    world.time += dt; world.stepnumber += steps;
    const result = { collided: Boolean(collision), body: collision?.body ?? null, normal: collision ? v3(collision.normal) : null, steps, safePosition: plane.position.clone() };
    if (collision) {
      plane.velocity.setZero();
      plane.dispatchEvent({ type: 'collide', body: collision.body, contact: { bi: plane, bj: collision.body, ni: v3(collision.normal) } });
    }
    return result;
  }

  function hasLineOfSight(from, to) {
    from = xyz(from); to = xyz(to);
    return !obstacles.some(obstacle => {
      const hit = segmentBox(from, to, obstacle);
      return hit !== null && hit < 1 - 1e-6;
    });
  }

  function canCollectStar(star, previousPosition = plane.previousPosition, extraRadius = 0) {
    const centre = xyz(star.position ?? star);
    const radius = Math.max(0, Number(star.collectRadius ?? STAR_COLLECTION_RADIUS)) + Math.max(0, Number(extraRadius) || 0);
    const previous = xyz(previousPosition);
    // Use substep orientations only when the caller refers to the last advance.
    const motions = lastMotion.length && length2(sub(previous, lastMotion[0].from)) < 1e-8
      ? lastMotion : [{ from: previous, to: xyz(plane.position), orientation: plane.quaternion }];
    for (const motion of motions) {
      const path = sub(motion.to, motion.from), squared = length2(path);
      const closest = lerp(motion.from, motion.to, squared > EPS ? clamp(dot(sub(centre, motion.from), path) / squared, 0, 1) : 0);
      if (length2(sub(centre, closest)) > (radius + definition.boundingRadius) ** 2) continue;
      const p = inverseRotate(sub(centre, motion.from), motion.orientation), q = inverseRotate(sub(centre, motion.to), motion.orientation);
      for (const part of parts) {
        if ((insidePart(p, part) || insidePart(q, part)) && hasLineOfSight(centre, centre)) return true;
        for (const triangle of part.triangles) {
          const hit = segmentTriangle(p, q, ...triangle);
          if (hit.distance2 > radius ** 2 + EPS) continue;
          const surface = add(lerp(motion.from, motion.to, hit.t), rotate(hit.point, motion.orientation));
          // Both normal pickups and magnet pickups respect walls, glass and doors.
          if (hasLineOfSight(surface, centre)) return true;
        }
      }
    }
    return false;
  }

  function traceCamera(from, to, padding = 0.18) {
    from = xyz(from); to = xyz(to);
    let amount = 1;
    for (const obstacle of obstacles) {
      const hit = segmentBox(from, to, obstacle, padding);
      if (hit !== null) amount = Math.min(amount, Math.max(0, hit - 0.015));
    }
    const [x, y, z] = lerp(from, to, amount);
    return { x, y, z };
  }

  function getCeilingAt(position) {
    const from = xyz(position), to = add(from, [0, 50, 0]);
    let ceiling = Infinity;
    for (const obstacle of obstacles) {
      if (!/ceiling|roof|floor|slab/.test(obstacle.kind)) continue;
      const hit = segmentBox(from, to, obstacle);
      if (hit !== null && hit > EPS) ceiling = Math.min(ceiling, from[1] + 50 * hit);
    }
    return ceiling;
  }

  reset();
  return { world, plane, blocks, level, reset, configureAircraft, setDoorOpen, advance, canCollectStar, hasLineOfSight, traceCamera, getCeilingAt,
    get aircraft() { return definition; }, doorBodies };
}

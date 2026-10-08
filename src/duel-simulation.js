import { Quaternion, Vec3 } from 'cannon-es';
import { createPhysics } from './physics.js';
import { getAircraftDefinition } from './aircraft.js';
import { getDoorPose } from './house.js';
import { DUEL_HOUSE, DUEL_OPEN_DOORS, DUEL_RULES, DUEL_SPAWNS } from './duel-arena.js';
import { integrateDuelFlight, sanitizeDuelInput, duelQuaternion } from './duel-flight.js';
export { DUEL_HOUSE, DUEL_OPEN_DOORS, DUEL_RULES, DUEL_SPAWNS } from './duel-arena.js';
export { predictDuelPlayer } from './duel-flight.js';

const EPS = 1e-9;
const definition = getAircraftDefinition('classic', 1);
const vec = p => Array.isArray(p) ? new Vec3(...p) : new Vec3(p.x, p.y, p.z);
const plain = p => ({ x: p.x, y: p.y, z: p.z });
const plainQ = q => ({ x: q.x, y: q.y, z: q.z, w: q.w });
const quat = q => new Quaternion(q.x, q.y, q.z, q.w);
const lerp = (a, b, t) => new Vec3(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t, a.z + (b.z - a.z) * t);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

function compile(vertices, faces) {
  const points = vertices.map(vec), triangles = [], planes = [];
  for (const face of faces) {
    const [a, b, c] = face.map(i => points[i]), normal = b.vsub(a).cross(c.vsub(a)); normal.normalize();
    planes.push({ point: a, normal });
    for (let i = 1; i < face.length - 1; i++) triangles.push([a, points[face[i]], points[face[i + 1]], normal]);
  }
  return { points, triangles, planes };
}
const hulls = definition.parts.map(part => compile(part.vertices, part.faces));

function closestTriangle(p, a, b, c) {
  const ab = b.vsub(a), ac = c.vsub(a), ap = p.vsub(a), d1 = ab.dot(ap), d2 = ac.dot(ap);
  if (d1 <= 0 && d2 <= 0) return a;
  const bp = p.vsub(b), d3 = ab.dot(bp), d4 = ac.dot(bp);
  if (d3 >= 0 && d4 <= d3) return b;
  const vc = d1 * d4 - d3 * d2;
  if (vc <= 0 && d1 >= 0 && d3 <= 0) return a.vadd(ab.scale(d1 / (d1 - d3)));
  const cp = p.vsub(c), d5 = ab.dot(cp), d6 = ac.dot(cp);
  if (d6 >= 0 && d5 <= d6) return c;
  const vb = d5 * d2 - d1 * d6;
  if (vb <= 0 && d2 >= 0 && d6 <= 0) return a.vadd(ac.scale(d2 / (d2 - d6)));
  const va = d3 * d6 - d5 * d4;
  if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) return b.vadd(c.vsub(b).scale((d4 - d3) / (d4 - d3 + d5 - d6)));
  const denominator = 1 / (va + vb + vc);
  return a.vadd(ab.scale(vb * denominator)).vadd(ac.scale(vc * denominator));
}

function quadraticEntry(origin, delta, radius) {
  const a = delta.lengthSquared(), b = origin.dot(delta), c = origin.lengthSquared() - radius * radius;
  if (c <= 0) return 0;
  if (a < EPS) return null;
  const discriminant = b * b - a * c;
  if (discriminant < 0) return null;
  const t = (-b - Math.sqrt(discriminant)) / a;
  return t >= -EPS && t <= 1 + EPS ? clamp(t, 0, 1) : null;
}

// Swept sphere versus triangle face, edge capsules and corner spheres. This
// preserves thin wings and rounded corners rather than expanding a global box.
function sphereTriangle(from, delta, radius, a, b, c, normal) {
  if (from.distanceSquared(closestTriangle(from, a, b, c)) <= radius * radius + EPS) return 0;
  let hit = Infinity;
  const approach = normal.dot(delta), height = normal.dot(from.vsub(a));
  if (Math.abs(approach) > EPS) for (const side of [-1, 1]) {
    const t = (side * radius - height) / approach;
    if (t < 0 || t > 1) continue;
    const projection = from.vadd(delta.scale(t)).vsub(normal.scale(side * radius));
    if (projection.distanceSquared(closestTriangle(projection, a, b, c)) < 1e-12) hit = Math.min(hit, t);
  }
  for (const [start, end] of [[a, b], [b, c], [c, a]]) {
    const axis = end.vsub(start), length = axis.length(); axis.scale(1 / length, axis);
    const relative = from.vsub(start), along = relative.dot(axis), slope = delta.dot(axis);
    const t = quadraticEntry(relative.vsub(axis.scale(along)), delta.vsub(axis.scale(slope)), radius);
    if (t !== null && along + t * slope >= 0 && along + t * slope <= length) hit = Math.min(hit, t);
    const corner = quadraticEntry(relative, delta, radius);
    if (corner !== null) hit = Math.min(hit, corner);
  }
  return hit < Infinity ? hit : null;
}

function sphereHull(from, to, hull, radius) {
  if (hull.planes.every(plane => plane.normal.dot(from.vsub(plane.point)) <= EPS)) return 0;
  const delta = to.vsub(from);
  let hit = Infinity;
  for (const triangle of hull.triangles) {
    const t = sphereTriangle(from, delta, radius, ...triangle);
    if (t !== null) hit = Math.min(hit, t);
  }
  return hit < Infinity ? hit : null;
}

/** Earliest fractional hit of a projectile on the moving, rotating real model. */
export function sweepDuelProjectile(from, to, previous, current, radius = DUEL_RULES.shotRadius) {
  from = vec(from); to = vec(to);
  const start = vec(previous.position), end = vec(current.position), qa = quat(previous.quaternion), qb = quat(current.quaternion);
  const relA = from.vsub(start), relB = to.vsub(end), relativeDelta = relB.vsub(relA);
  const near = relativeDelta.lengthSquared() > EPS ? clamp(-relA.dot(relativeDelta) / relativeDelta.lengthSquared(), 0, 1) : 0;
  if (relA.vadd(relativeDelta.scale(near)).lengthSquared() > (definition.boundingRadius + radius) ** 2) return null;
  const angle = 2 * Math.acos(clamp(Math.abs(qa.x * qb.x + qa.y * qb.y + qa.z * qb.z + qa.w * qb.w), 0, 1));
  const steps = Math.max(1, Math.ceil(angle / .018));
  for (let i = 0; i < steps; i++) {
    const low = i / steps, high = (i + 1) / steps, orientation = new Quaternion();
    qa.slerp(qb, (low + high) / 2, orientation); orientation.conjugate(orientation);
    const a = orientation.vmult(lerp(from, to, low).vsub(lerp(start, end, low)));
    const b = orientation.vmult(lerp(from, to, high).vsub(lerp(start, end, high)));
    let earliest = Infinity;
    for (const hull of hulls) { const t = sphereHull(a, b, hull, radius); if (t !== null) earliest = Math.min(earliest, t); }
    if (earliest < Infinity) return low + earliest / steps;
  }
  return null;
}

function compileWall(part) {
  const [x, y, z] = part.size.map(n => n / 2), position = vec(part.position);
  const quaternion = new Quaternion(); quaternion.setFromEuler(...(part.rotation || [0, 0, 0]), 'XYZ');
  const vertices = [[-x,-y,-z],[x,-y,-z],[x,y,-z],[-x,y,-z],[-x,-y,z],[x,-y,z],[x,y,z],[-x,y,z]];
  const faces = [[3,2,1,0],[4,5,6,7],[0,1,5,4],[2,3,7,6],[1,2,6,5],[3,0,4,7]];
  const corners = vertices.map(p => quaternion.vmult(vec(p)).vadd(position));
  return { position, inverse: quaternion.conjugate(), hull: compile(vertices, faces),
    min: new Vec3(...['x','y','z'].map(axis => Math.min(...corners.map(p => p[axis])))),
    max: new Vec3(...['x','y','z'].map(axis => Math.max(...corners.map(p => p[axis])))) };
}

export function createDuelSimulation({ house = DUEL_HOUSE, spawns = DUEL_SPAWNS } = {}) {
  if (!Array.isArray(spawns) || spawns.length !== 2) throw new TypeError('A duel needs two spawns');
  const doorOpen = door => door.duelOpen ?? DUEL_OPEN_DOORS.includes(door.id);
  const walls = [...house.obstacles, ...house.doors.map(door => getDoorPose(door, doorOpen(door)))].map(compileWall);
  const players = spawns.map((spawn, index) => {
    if (![spawn.x, spawn.y, spawn.z, spawn.heading].every(Number.isFinite)) throw new TypeError('Invalid duel spawn');
    const physics = createPhysics({ ...house, start: spawn }, { form: 'classic', size: 1 });
    return { id: index === 0 ? 'p1' : 'p2', spawn: { ...spawn }, physics };
  });
  let tick, time, accumulator, winner, reason, projectiles, serial;

  function pose(player) { return { position: plain(player.physics.plane.position), quaternion: plainQ(player.physics.plane.quaternion) }; }
  function putAtSpawn(player) {
    player.physics.plane.position.set(player.spawn.x, player.spawn.y, player.spawn.z);
    player.heading = player.spawn.heading; player.verticalSpeed = 0; player.input = { steer: 0, pitch: 0 };
    player.physics.plane.quaternion.copy(duelQuaternion(0, player.heading));
  }
  function reset() {
    tick = time = accumulator = serial = 0; winner = null; reason = ''; projectiles = [];
    for (const player of players) {
      player.physics.reset();
      for (const door of house.doors) player.physics.setDoorOpen(door.id, doorOpen(door));
      putAtSpawn(player); player.hp = DUEL_RULES.hp; player.nextShot = 0;
      player.wallImmuneUntil = -1; player.recoveryUntil = -1; player.recoveryVelocity = new Vec3();
      if (player.physics.advance(0, new Vec3()).collided) throw new Error(`Blocked duel spawn: ${player.id}`);
    }
    return snapshot();
  }
  function wallHit(from, to, radius = DUEL_RULES.shotRadius) {
    let earliest = Infinity;
    for (const wall of walls) {
      if (!['x','y','z'].every(axis => Math.min(from[axis], to[axis]) - radius <= wall.max[axis] && Math.max(from[axis], to[axis]) + radius >= wall.min[axis])) continue;
      const a = wall.inverse.vmult(from.vsub(wall.position)), b = wall.inverse.vmult(to.vsub(wall.position));
      const hit = sphereHull(a, b, wall.hull, radius);
      if (hit !== null) earliest = Math.min(earliest, hit);
    }
    return earliest < Infinity ? earliest : null;
  }
  function outside(position, margin = 0) {
    const b = house.bounds;
    return b && (position.x < b.minX + margin || position.x > b.maxX - margin || position.y < b.minY + margin || position.y > b.maxY - margin || position.z < b.minZ + margin || position.z > b.maxZ - margin);
  }
  function recover(player, velocity, normal) {
    if (time + EPS >= player.wallImmuneUntil) {
      player.hp = Math.max(0, player.hp - DUEL_RULES.wallDamage);
      player.wallImmuneUntil = time + DUEL_RULES.wallCooldown;
    }
    player.recoveryUntil = time + DUEL_RULES.recoverySeconds;
    player.recoveryQuaternion = player.physics.plane.quaternion.clone();
    player.recoveryVelocity = velocity.scale(-.9);
    if (player.recoveryVelocity.lengthSquared() < .05) player.recoveryVelocity = normal?.lengthSquared() > EPS ? normal.scale(1.2) : new Vec3(0, .6, 0);
    player.heading = Math.atan2(-Math.sin(player.heading), -Math.cos(player.heading));
    player.verticalSpeed = Math.max(.15, -player.verticalSpeed * .5);
    player.input = { steer: 0, pitch: 0 };
  }
  function move(player, input, dt) {
    const before = pose(player);
    let velocity, orientation, relocated = false;
    if (time < player.recoveryUntil) {
      velocity = player.recoveryVelocity; orientation = player.recoveryQuaternion;
    } else {
      const movement = integrateDuelFlight({ ...player, position: before.position }, input, dt, house);
      player.heading = movement.heading; player.input = movement.input; player.verticalSpeed = movement.verticalSpeed;
      velocity = vec(movement.velocity); orientation = movement.quaternion;
    }
    const contact = player.physics.advance(dt, velocity, orientation);
    const leftArena = outside(player.physics.plane.position, definition.boundingRadius);
    if (leftArena) {
      player.physics.plane.position.copy(vec(before.position)); player.physics.plane.quaternion.copy(before.quaternion);
    }
    if (contact.collided || leftArena) {
      if (time < player.recoveryUntil) {
        // Rare corner trap: the verified spawn breaks the trap without applying
        // per-frame damage or attempting to push a collider through furniture.
        putAtSpawn(player); player.recoveryUntil = -1; player.wallImmuneUntil = time + DUEL_RULES.wallCooldown;
        relocated = true;
      } else recover(player, velocity, contact.normal);
    }
    const after = pose(player);
    // A safety relocation is discontinuous; do not invent a hitbox sweeping
    // across the whole house between the trapped corner and the spawn.
    return { before: relocated ? after : before, after };
  }
  function finishIfNeeded() {
    if (players.some(player => player.hp <= 0)) {
      winner = players.every(player => player.hp <= 0) ? 'draw' : players.find(player => player.hp > 0).id;
      reason = 'knockout'; return;
    }
    if (time + EPS >= DUEL_RULES.roundSeconds) {
      winner = players[0].hp === players[1].hp ? 'draw' : players[0].hp > players[1].hp ? 'p1' : 'p2'; reason = 'timeout';
    }
  }
  function fixedStep(inputs) {
    const dt = DUEL_RULES.stepSeconds;
    const motion = players.map(player => move(player, sanitizeDuelInput(inputs?.[player.id]), dt));
    const damage = [0, 0], surviving = [];
    for (const shot of projectiles) {
      const targetIndex = shot.owner === 'p1' ? 1 : 0, next = shot.position.vadd(shot.velocity.scale(dt));
      const wall = wallHit(shot.position, next), opponent = sweepDuelProjectile(shot.position, next, motion[targetIndex].before, motion[targetIndex].after);
      if (opponent !== null && (wall === null || opponent < wall - EPS)) { damage[targetIndex] += DUEL_RULES.shotDamage; continue; }
      if (wall !== null) continue;
      shot.position = next; shot.age += dt;
      if (shot.age + EPS < DUEL_RULES.lifetime && !outside(next)) surviving.push(shot);
    }
    projectiles = surviving;
    players.forEach((player, index) => { player.hp = Math.max(0, player.hp - damage[index]); });
    tick++; time = tick * dt; finishIfNeeded();
    if (winner) return;
    for (const player of players) {
      if (!sanitizeDuelInput(inputs?.[player.id]).fire || time + EPS < player.nextShot) continue;
      player.nextShot = time + DUEL_RULES.shotCooldown;
      const direction = player.physics.plane.quaternion.vmult(new Vec3(0, 0, -1)); direction.normalize();
      const centre = player.physics.plane.position, muzzle = centre.vadd(direction.scale(definition.length / 2 + .07));
      // Muzzles near walls must not create a shot on the other side of the wall.
      if (wallHit(centre, muzzle) !== null) continue;
      projectiles.push({ id: `s${++serial}`, owner: player.id, position: muzzle, velocity: direction.scale(DUEL_RULES.shotSpeed), age: 0 });
    }
  }
  function step(inputs = {}, dt = DUEL_RULES.stepSeconds) {
    if (winner || !Number.isFinite(dt) || dt <= 0) return snapshot();
    // Network clients never supply dt; this cap also contains accidental stalls.
    accumulator += Math.min(dt, .1);
    while (accumulator + EPS >= DUEL_RULES.stepSeconds && !winner) {
      accumulator -= DUEL_RULES.stepSeconds; fixedStep(inputs);
    }
    accumulator = Math.max(0, accumulator);
    return snapshot();
  }
  function snapshot() {
    return { tick, time, players: players.map(player => ({ id: player.id, ...pose(player), heading: player.heading, hp: player.hp,
      input: { ...player.input }, verticalSpeed: player.verticalSpeed, recovering: time < player.recoveryUntil })),
      projectiles: projectiles.map(shot => ({ id: shot.id, owner: shot.owner, position: plain(shot.position) })), winner, reason };
  }
  reset();
  return { step, snapshot, reset };
}

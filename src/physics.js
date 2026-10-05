import { World, Vec3, Body, Box, Sphere, SAPBroadphase } from './vendor.js';
import { getLevel, getWalls, PLANE_RADIUS, ROOM_WIDTH, ROOM_DEPTH } from './levels.js';

export function createPhysics(level = getLevel(0)) {
  const world = new World({ gravity: new Vec3(0, -9.82, 0), allowSleep: true });
  world.broadphase = new SAPBroadphase(world);
  world.solver.iterations = 10;
  world.defaultContactMaterial.friction = 0.55;
  world.defaultContactMaterial.restitution = 0.08;
  const blocks = [];

  function solid(size, position, kind = 'solid') {
    const body = new Body({
      mass: 0,
      shape: new Box(new Vec3(...size.map((dimension) => dimension / 2))),
      position: new Vec3(...position),
    });
    body.kind = kind;
    world.addBody(body);
    return body;
  }

  for (const room of level.rooms) {
    solid([ROOM_WIDTH, 0.4, ROOM_DEPTH], [room.x, -0.2, room.z]);
    // The lower ceiling surface is exactly at the room's maximum altitude.
    solid([ROOM_WIDTH, 0.4, ROOM_DEPTH], [room.x, level.ceiling + 0.2, room.z], 'ceiling');
  }
  for (const wall of getWalls(level)) solid(wall.size, wall.position);

  for (const tower of level.towers) {
    for (let layer = 0; layer < tower.layers; layer++) {
      for (let column = 0; column < 3; column++) {
        const rotated = layer % 2 === 1;
        const size = rotated ? [0.43, 0.45, 1.5] : [1.5, 0.45, 0.43];
        const home = new Vec3(
          tower.x + (rotated ? (column - 1) * 0.47 : 0),
          0.225 + layer * 0.455,
          tower.z + (rotated ? 0 : (column - 1) * 0.47),
        );
        const body = new Body({
          mass: 0.24,
          shape: new Box(new Vec3(...size.map((dimension) => dimension / 2))),
          position: home.clone(),
          linearDamping: 0.12,
          angularDamping: 0.2,
          sleepSpeedLimit: 0.12,
          sleepTimeLimit: 1,
        });
        body.kind = 'block';
        world.addBody(body);
        blocks.push({ body, size, home, scored: false });
      }
    }
  }

  const plane = new Body({
    mass: 1.8,
    shape: new Sphere(PLANE_RADIUS),
    position: new Vec3(level.start.x, level.start.y, level.start.z),
    linearDamping: 0,
    angularDamping: 1,
    fixedRotation: true,
    collisionFilterMask: 0,
    allowSleep: false,
  });
  plane.kind = 'plane';
  world.addBody(plane);

  function resetBody(body, home) {
    body.position.copy(home);
    body.previousPosition.copy(home);
    body.interpolatedPosition.copy(home);
    body.quaternion.set(0, 0, 0, 1);
    body.previousQuaternion.copy(body.quaternion);
    body.interpolatedQuaternion.copy(body.quaternion);
    body.velocity.setZero();
    body.angularVelocity.setZero();
    body.force.setZero();
    body.torque.setZero();
    body.aabbNeedsUpdate = true;
    body.wakeUp();
  }

  function reset() {
    for (const block of blocks) {
      resetBody(block.body, block.home);
      block.scored = false;
    }
    resetBody(plane, new Vec3(level.start.x, level.start.y, level.start.z));
    plane.collisionFilterMask = 0;
    world.accumulator = 0;
    world.time = 0;
    world.stepnumber = 0;
    world.lastCallTime = undefined;
    world.contacts.length = 0;
    world.frictionEquations.length = 0;
    world.collisionMatrix.reset();
    world.collisionMatrixPrevious.reset();
    world.bodyOverlapKeeper.current.length = 0;
    world.bodyOverlapKeeper.previous.length = 0;
    world.shapeOverlapKeeper.current.length = 0;
    world.shapeOverlapKeeper.previous.length = 0;
    world.broadphase.dirty = true;
  }

  function countFallen() {
    let count = 0;
    for (const block of blocks) {
      if (!block.scored && (block.body.position.distanceTo(block.home) > 0.55 || Math.abs(block.body.quaternion.w) < 0.92)) {
        block.scored = true;
      }
      if (block.scored) count++;
    }
    return count;
  }

  // Protect against tunnelling during slow frames, in addition to the collider.
  // Returning true lets gameplay apply the same ceiling-contact feedback.
  function enforceCeiling() {
    const maximum = level.ceiling - PLANE_RADIUS;
    if (plane.position.y <= maximum) return false;
    plane.position.y = maximum;
    plane.previousPosition.y = Math.min(plane.previousPosition.y, maximum);
    plane.interpolatedPosition.y = Math.min(plane.interpolatedPosition.y, maximum);
    plane.velocity.y = Math.min(0, plane.velocity.y);
    plane.force.y = Math.min(0, plane.force.y);
    plane.aabbNeedsUpdate = true;
    world.broadphase.dirty = true;
    return true;
  }

  return { world, plane, blocks, solid, reset, countFallen, enforceCeiling, level };
}

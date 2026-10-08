import test from 'node:test';
import assert from 'node:assert/strict';
import { Quaternion, Vec3 } from 'cannon-es';
import { Euler, Quaternion as ThreeQuaternion } from 'three';
import { HOUSE } from '../src/house.js';
import { createPhysics } from '../src/physics.js';
import { flightTuning } from '../src/aircraft.js';
import { createDuelSimulation, DUEL_HOUSE, DUEL_OPEN_DOORS, DUEL_RULES, DUEL_SPAWNS, sweepDuelProjectile } from '../src/duel-simulation.js';
import { duelQuaternion, predictDuelPlayer } from '../src/duel-flight.js';

const dt = DUEL_RULES.stepSeconds;
const tuning = flightTuning('classic', 1);
const levelInput = { steer: 0, pitch: tuning.sinkRate / tuning.pitchRate };
const flatFire = { ...levelInput, fire: true };
const box = (id, size, position, rotation = [0, 0, 0]) => ({ id, kind: 'wall', size, position, rotation });
const emptyHouse = (obstacles = [], doors = []) => ({ obstacles, doors, thermals: [], collectibles: [] });
const parallel = [{ x: 0, y: 1.2, z: 0, heading: 0 }, { x: 20, y: 1.2, z: 0, heading: 0 }];
const facing = [{ x: -2, y: 1.2, z: 0, heading: Math.PI / 2 }, { x: 2, y: 1.2, z: 0, heading: -Math.PI / 2 }];
const pose = (position = { x: 0, y: 0, z: 0 }, quaternion = { x: 0, y: 0, z: 0, w: 1 }) => ({ position, quaternion });
function advance(sim, seconds, inputs = {}) { let state; for (let i = 0; i < Math.round(seconds / dt); i++) state = sim.step(inputs, dt); return state; }

test('duel arena is an independent house with exactly the fixed door policy', () => {
  assert.notEqual(DUEL_HOUSE, HOUSE);
  assert.equal(DUEL_HOUSE.collectibles.length, 0);
  assert.ok(HOUSE.collectibles.length > 0);
  assert.deepEqual(DUEL_OPEN_DOORS, ['dining-terrace', 'living-terrace', 'front-door', 'hall-dining', 'kitchen-hall', 'living-hall', 'dining-kitchen', 'office', 'nursery']);
  for (const door of DUEL_HOUSE.doors) {
    const closed = door.floor === 'ug' || door.id.includes('stairs') || ['hall-cloakroom', 'cloakroom-wc', 'cloakroom-storage', 'bedroom', 'bathroom'].includes(door.id);
    assert.equal(door.duelOpen, !closed, door.id);
    assert.equal(door.signText, closed ? 'ZU' : 'OFFEN', door.id);
    assert.equal(HOUSE.doors.find(item => item.id === door.id).duelOpen, undefined);
  }
  assert.deepEqual(DUEL_HOUSE.openings, HOUSE.openings, 'all outdoor/window routes retain the house geometry');
});

test('every permanently closed duel door physically blocks its central opening', () => {
  for (const door of DUEL_HOUSE.doors.filter(item => !item.duelOpen)) {
    const q = new Quaternion(); q.setFromEuler(...door.rotation, 'XYZ');
    const start = q.vmult(new Vec3(0, 0, .7)).vadd(new Vec3(...door.position));
    const physics = createPhysics({ ...emptyHouse([], [door]), start: start.toArray() });
    physics.plane.quaternion.copy(q);
    const contact = physics.advance(1, q.vmult(new Vec3(0, 0, -1.4)), q);
    assert.equal(contact.collided, true, door.id);
    assert.equal(contact.body.obstacleId, door.id);
  }
});

test('the real terrace spawns have a clear symmetric approach and five shots produce a simultaneous knockout', () => {
  const sim = createDuelSimulation();
  assert.deepEqual(sim.snapshot().players.map(player => player.position), DUEL_SPAWNS.map(({ x, y, z }) => ({ x, y, z })));
  const hitTimes = [];
  let previousHp = 100, state;
  for (let i = 0; i < 90; i++) {
    state = sim.step({ p1: flatFire, p2: flatFire });
    assert.equal(state.players[0].hp, state.players[1].hp);
    assert.equal(state.players.some(player => player.recovering), false, 'terrace furniture must not obstruct the starting approach');
    if (state.players[0].hp !== previousHp) { hitTimes.push(state.time); previousHp = state.players[0].hp; }
    if (state.winner) break;
  }
  assert.equal(hitTimes.length, 5);
  assert.ok(hitTimes[0] > .8 && hitTimes[0] < 1.1);
  assert.ok(state.time < 2.1);
  assert.equal(state.winner, 'draw');
  assert.equal(state.reason, 'knockout');
  assert.deepEqual(state.players.map(player => player.hp), [0, 0]);
  assert.deepEqual(sim.step({ p1: flatFire }, 100), state, 'finished rounds are immutable');
  const clean = sim.reset();
  assert.equal(clean.tick, 0); assert.equal(clean.winner, null); assert.equal(clean.reason, '');
  assert.deepEqual(clean.players.map(player => player.hp), [100, 100]);
  assert.equal(clean.projectiles.length, 0);
});

test('holding fire is rate limited and projectiles expire', () => {
  const sim = createDuelSimulation({ house: emptyHouse(), spawns: parallel });
  const births = [], seen = new Set();
  for (let i = 0; i < 60; i++) {
    const state = sim.step({ p1: flatFire, p2: levelInput });
    for (const shot of state.projectiles) if (!seen.has(shot.id)) { seen.add(shot.id); births.push(state.time); }
  }
  assert.equal(births.length, 6);
  for (let i = 1; i < births.length; i++) assert.ok(births[i] - births[i - 1] + 1e-9 >= DUEL_RULES.shotCooldown);
  assert.equal(advance(sim, 3, { p1: levelInput, p2: levelInput }).projectiles.length, 0);
});

test('shots hit thin wings and fuselage without filling the empty silhouette corners', () => {
  const stationary = pose();
  assert.notEqual(sweepDuelProjectile({ x: .205, y: .009, z: .4 }, { x: .205, y: .009, z: -.4 }, stationary, stationary), null, 'wingtip strike');
  assert.notEqual(sweepDuelProjectile({ x: 0, y: 0, z: 1 }, { x: 0, y: 0, z: -1 }, stationary, stationary), null, 'fast nose/fuselage strike');
  assert.equal(sweepDuelProjectile({ x: .205, y: .08, z: .4 }, { x: .205, y: .08, z: -.4 }, stationary, stationary), null, 'clear above thin paper');
  const corner = { x: .185, y: 0, z: -.117 };
  assert.equal(sweepDuelProjectile(corner, corner, stationary, stationary, .002), null, 'empty delta corner');
});

test('relative sweeps detect moving and banking wings even when both endpoints miss', () => {
  const shot = { x: 0, y: .009, z: .06 };
  const a = pose({ x: -.5, y: 0, z: 0 }), b = pose({ x: .5, y: 0, z: 0 });
  assert.equal(sweepDuelProjectile(shot, shot, a, a), null);
  assert.equal(sweepDuelProjectile(shot, shot, b, b), null);
  assert.notEqual(sweepDuelProjectile(shot, shot, a, b), null);
  const qa = new Quaternion(), qb = new Quaternion();
  qa.setFromEuler(0, 0, -Math.PI / 3); qb.setFromEuler(0, 0, Math.PI / 3);
  const tip = { x: .20, y: .009, z: .065 };
  assert.equal(sweepDuelProjectile(tip, tip, pose(undefined, qa), pose(undefined, qa)), null);
  assert.equal(sweepDuelProjectile(tip, tip, pose(undefined, qb), pose(undefined, qb)), null);
  assert.notEqual(sweepDuelProjectile(tip, tip, pose(undefined, qa), pose(undefined, qb)), null);
});

test('a thin wall absorbs fast shots before the opponent behind it', () => {
  const sim = createDuelSimulation({ house: emptyHouse([box('divider', [.008, 5, 5], [0, 1.2, 0])]), spawns: facing });
  const state = advance(sim, .9, { p1: flatFire, p2: levelInput });
  assert.deepEqual(state.players.map(player => player.hp), [100, 100]);
  assert.ok(state.projectiles.every(shot => shot.position.x < 0), 'no shot can emerge behind the wall');
  const clear = createDuelSimulation({ house: emptyHouse(), spawns: facing });
  assert.ok(advance(clear, .9, { p1: flatFire, p2: levelInput }).players[1].hp < 100, 'same shot corridor without wall hits');
});

test('a muzzle beyond a very close wall cannot spawn a shot through it', () => {
  const sim = createDuelSimulation({ house: emptyHouse([box('divider', [.006, 5, 5], [0, 1.2, 0])]), spawns: [
    { x: -.20, y: 1.2, z: 0, heading: Math.PI / 2 }, { x: 2, y: 1.2, z: 0, heading: 0 },
  ] });
  const state = sim.step({ p1: flatFire, p2: levelInput });
  assert.equal(state.players[0].hp, 90);
  assert.equal(state.projectiles.length, 0);
  assert.equal(state.players[1].hp, 100);
});

test('door state governs both flight and gunfire, with the open leaf still solid', () => {
  const door = { id: 'fixture-door', size: [2.2, 2.2, .055], position: [0, 1.2, 0], rotation: [0, Math.PI / 2, 0], hinge: { position: [0, 1.2, -1.1], angle: Math.PI / 2 } };
  const closed = createDuelSimulation({ house: emptyHouse([], [{ ...door, duelOpen: false }]), spawns: facing });
  const opened = createDuelSimulation({ house: emptyHouse([], [{ ...door, duelOpen: true }]), spawns: facing });
  assert.equal(advance(closed, .9, { p1: flatFire, p2: levelInput }).players[1].hp, 100);
  assert.ok(advance(opened, .9, { p1: flatFire, p2: levelInput }).players[1].hp < 100);
  const closedFlight = createDuelSimulation({ house: emptyHouse([], [{ ...door, duelOpen: false }]), spawns: facing });
  const openFlight = createDuelSimulation({ house: emptyHouse([], [{ ...door, duelOpen: true }]), spawns: facing });
  assert.equal(advance(closedFlight, 1.4, { p1: levelInput, p2: levelInput }).players[0].hp, 90);
  assert.deepEqual(advance(openFlight, 1.4, { p1: levelInput, p2: levelInput }).players.map(player => player.hp), [100, 100]);
  const leafFlight = createDuelSimulation({ house: emptyHouse([], [{ ...door, duelOpen: true }]), spawns: [
    { x: 1, y: 1.2, z: 0, heading: 0 }, { x: 20, y: 1.2, z: 0, heading: 0 },
  ] });
  assert.equal(advance(leafFlight, 1, { p1: levelInput, p2: levelInput }).players[0].hp, 90, 'opened leaf remains collidable beside passage');
});

test('wall contact costs ten HP once and safely retreats into open flight', () => {
  const sim = createDuelSimulation({ house: emptyHouse([box('wall', [10, 5, .02], [0, 1.2, 0])]), spawns: [
    { x: 0, y: 1.2, z: .8, heading: 0 }, { x: 20, y: 1.2, z: 0, heading: 0 },
  ] });
  let contactPosition, state, minZ = Infinity;
  for (let i = 0; i < 80; i++) {
    state = sim.step({ p1: levelInput, p2: levelInput });
    const p = state.players[0]; minZ = Math.min(minZ, p.position.z);
    if (p.hp < 100 && !contactPosition) contactPosition = { ...p.position };
    assert.ok(p.hp >= 90, 'no damage every frame while recovering');
  }
  assert.equal(state.players[0].hp, 90);
  assert.ok(minZ > .16, 'nose remains in front of the wall');
  assert.ok(state.players[0].position.z > contactPosition.z + 2, 'retreat and reversed heading return to free space');
  assert.equal(state.players[0].recovering, false);
  assert.equal(state.winner, null);
});

test('fixed ticks are deterministic across batched and individual calls', () => {
  const a = createDuelSimulation({ house: emptyHouse(), spawns: parallel });
  const b = createDuelSimulation({ house: emptyHouse(), spawns: parallel });
  for (let i = 0; i < 80; i++) {
    const inputs = { p1: { steer: Math.sin(i / 5), pitch: Math.cos(i / 7), fire: i % 3 === 0 }, p2: levelInput };
    a.step(inputs, dt); a.step(inputs, dt); b.step(inputs, 2 * dt);
  }
  assert.deepEqual(a.snapshot(), b.snapshot());
});

test('aircraft crossing each other causes no ramming damage', () => {
  const sim = createDuelSimulation({ house: emptyHouse(), spawns: facing });
  const state = advance(sim, 3, { p1: levelInput, p2: levelInput });
  assert.deepEqual(state.players.map(player => player.hp), [100, 100]);
  assert.ok(state.players[0].position.x > state.players[1].position.x);
});

test('arena boundaries retain both aircraft and rate-limit repeated contact damage', () => {
  const bounds = { minX: -1, maxX: 1, minY: 0, maxY: 3, minZ: -1, maxZ: 1 };
  const sim = createDuelSimulation({ house: { ...emptyHouse(), bounds }, spawns: [
    { x: 0, y: 1.2, z: -.65, heading: 0 }, { x: 0, y: 2, z: .65, heading: Math.PI },
  ] });
  let state;
  for (let i = 0; i < 90; i++) {
    state = sim.step({ p1: levelInput, p2: levelInput });
    for (const player of state.players) {
      assert.ok(Math.abs(player.position.x) < 1 && Math.abs(player.position.z) < 1);
      assert.ok(player.position.y > 0 && player.position.y < 3);
      assert.ok(player.hp >= 70, 'three seconds can cause at most three spaced wall hits');
    }
  }
  assert.ok(state.players.every(player => player.hp < 100));
});

test('round timeout chooses remaining HP and ties draw', () => {
  const tie = createDuelSimulation({ house: emptyHouse(), spawns: parallel });
  const drawn = advance(tie, DUEL_RULES.roundSeconds, { p1: levelInput, p2: levelInput });
  assert.equal(drawn.winner, 'draw'); assert.equal(drawn.reason, 'timeout');
  assert.equal(drawn.time, 180); assert.equal(drawn.tick, 5400);
  const unequal = createDuelSimulation({ house: emptyHouse(), spawns: facing });
  unequal.step({ p1: flatFire, p2: levelInput });
  const result = advance(unequal, DUEL_RULES.roundSeconds, { p1: levelInput, p2: levelInput });
  assert.equal(result.winner, 'p1'); assert.equal(result.reason, 'timeout');
  assert.deepEqual(result.players.map(player => player.hp), [100, 80]);
});

test('invalid inputs and durations cannot poison or fast-forward the state', () => {
  const sim = createDuelSimulation({ house: emptyHouse(), spawns: parallel });
  for (const bad of [NaN, Infinity, -1, '1']) assert.equal(sim.step({}, bad).tick, 0);
  const state = sim.step({ p1: { steer: Infinity, pitch: NaN, fire: 'true' }, p2: { steer: 1e99, pitch: -1e99 } }, 1e99);
  assert.equal(state.tick, 3); assert.equal(state.projectiles.length, 0);
  for (const p of state.players) {
    assert.ok(Object.values(p.position).every(Number.isFinite));
    assert.ok(Object.values(p.quaternion).every(Number.isFinite));
    assert.ok(Math.abs(p.input.steer) <= 1 && Math.abs(p.input.pitch) <= 1);
  }
  const copy = sim.snapshot(); copy.players[0].position.x = 1e9; copy.players[0].input.steer = 100;
  assert.notDeepEqual(sim.snapshot(), copy, 'snapshots do not expose authoritative mutable state');
});

test('quaternion and muzzle agree with the renderer and prediction is bounded and pure', () => {
  const pitch = .23, heading = 1.17, bank = -.35;
  const expected = new ThreeQuaternion().setFromEuler(new Euler(pitch, -heading, bank, 'YXZ'));
  const actual = duelQuaternion(pitch, heading, bank);
  for (const key of ['x', 'y', 'z', 'w']) assert.ok(Math.abs(actual[key] - expected[key]) < 1e-12);
  const sim = createDuelSimulation({ house: emptyHouse(), spawns: parallel });
  const player = sim.snapshot().players[0], unchanged = structuredClone(player);
  const predicted = predictDuelPlayer(player, { steer: 1, pitch: 1, fire: true }, 1000);
  assert.deepEqual(player, unchanged);
  assert.ok(Math.hypot(...['x', 'y', 'z'].map(axis => predicted.position[axis] - player.position[axis])) < .18);
  assert.equal(predicted.hp, 100);
  const state = sim.step({ p1: flatFire });
  const p = state.players[0], shot = state.projectiles[0], direction = new Quaternion(p.quaternion.x, p.quaternion.y, p.quaternion.z, p.quaternion.w).vmult(new Vec3(0, 0, -1));
  const muzzleVector = new Vec3(shot.position.x - p.position.x, shot.position.y - p.position.y, shot.position.z - p.position.z); muzzleVector.normalize();
  assert.ok(muzzleVector.distanceTo(direction) < 1e-12);
});

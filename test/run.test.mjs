import test from 'node:test';
import assert from 'node:assert/strict';
import { createRunState } from '../src/run.js';
const house = { startRoomId: 'living', rooms: [{ id: 'living' }, { id: 'hall' }, { id: 'garden' }], collectibles: [{ id: 'one' }, { id: 'two' }], doors: [{ id: 'hall', threshold: 1 }, { id: 'outside', threshold: 2 }] };
const profile = { owned: ['door:outside', 'boost:lift'], equipped: { boosts: ['lift', 'turbo'] } };
test('stars open remaining doors without consuming stars; duplicate and unknown pickups do nothing', () => {
  const run = createRunState(house, profile, 'run-one');
  assert.deepEqual([...run.opened], ['outside']);
  assert.deepEqual(run.collect('one').map(door => door.id), ['hall']);
  assert.equal(run.collect('one'), null); assert.equal(run.collect('bad'), null);
  assert.equal(run.stars.size, 1); assert.equal(run.nextDoor(), null);
  assert.deepEqual(run.collect('two'), []); assert.equal(run.summary().complete, true);
});
test('room bonuses require actual first entry in this run; start and repeated visits never count', () => {
  const run = createRunState(house, profile, 'run-one');
  assert.deepEqual(run.summary().roomIds, []);
  assert.equal(run.enterRoom('living'), false); assert.equal(run.enterRoom('hall'), true);
  assert.equal(run.enterRoom('hall'), false); assert.equal(run.enterRoom('unknown'), false);
  assert.deepEqual(run.summary().roomIds, ['hall']);
  assert.deepEqual(createRunState(house, profile, 'run-two').summary().roomIds, []);
});
test('purchased doors can be disabled and boost charges renew once per run', () => {
  const run = createRunState(house, { ...profile, useDoorUnlocks: false }, 'run-one');
  assert.equal(run.opened.size, 0); assert.equal(run.nextDoor().id, 'hall');
  assert.equal(run.useBoost(1), null); assert.equal(run.useBoost(0), 'lift'); assert.equal(run.useBoost(0), null);
  assert.equal(createRunState(house, profile, 'run-two').useBoost(0), 'lift');
});

test('multiple floor rectangles belonging to one room only earn one visit', () => {
  const run = createRunState({ ...house, rooms: [...house.rooms, { id: 'hall-south', bonusId: 'hall' }] }, profile, 'run-one');
  assert.equal(run.enterRoom('hall-south'), true);
  assert.equal(run.enterRoom('hall'), false);
  assert.deepEqual(run.summary().roomIds, ['hall']);
});

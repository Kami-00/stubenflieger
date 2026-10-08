import test from 'node:test';
import assert from 'node:assert/strict';
import { HOUSE } from '../src/house.js';
import { createRunState } from '../src/run.js';
import { createProgression, calculateRunScore, PROFILE_KEY } from '../src/progression.js';

test('practice opens every door without purchases and keeps progress local to that flight', () => {
  const profile = { owned: [], useDoorUnlocks: false, equipped: { boosts: [] } };
  const before = structuredClone(profile);
  const run = createRunState(HOUSE, profile, 'practice-test', { practice: true });
  assert.equal(run.practice, true);
  assert.deepEqual([...run.opened], HOUSE.doors.map(door => door.id));
  assert.equal(run.nextDoor(), null);
  for (const star of HOUSE.collectibles) run.collect(star.id);
  for (const room of HOUSE.rooms) run.enterRoom(room.id);
  const summary = run.summary(500, 50);
  assert.equal(summary.practice, true); assert.equal(summary.complete, true);
  assert.equal(calculateRunScore(summary), 0);
  assert.deepEqual(profile, before);
  const normal = createRunState(HOUSE, profile, 'normal-after-practice');
  assert.equal(normal.opened.size, 0); assert.equal(normal.stars.size, 0);
  assert.equal(normal.practice, false); assert.equal(normal.summary().practice, undefined);
});

test('even a recovered practice summary cannot write wallet, discoveries, records or credited runs', () => {
  const data = new Map(), writes = [];
  const storage = { getItem: key => data.get(key) ?? null, setItem(key, value) { writes.push(key); data.set(key, value); } };
  const progression = createProgression(storage);
  progression.creditRun('normal-before-practice', { stars: 0, roomIds: [], seconds: 8 });
  const profile = progression.getProfile(), saved = storage.getItem(PROFILE_KEY), count = writes.length;
  const summary = { practice: true, stars: 96, starIds: HOUSE.collectibles.map(star => star.id), roomIds: HOUSE.rooms.map(room => room.id), seconds: 1000, complete: true };
  for (let attempt = 0; attempt < 3; attempt++) assert.equal(progression.creditRun('practice-test', summary).credited, 0);
  assert.equal(writes.length, count); assert.equal(storage.getItem(PROFILE_KEY), saved);
  assert.deepEqual(progression.getProfile(), profile);
  progression.creditRun('normal-after-practice', { stars: 0, roomIds: [], seconds: 3 });
  assert.equal(progression.getProfile().points, profile.points + 30);
});

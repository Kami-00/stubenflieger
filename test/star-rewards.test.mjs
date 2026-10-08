import test from 'node:test';
import assert from 'node:assert/strict';
import { HOUSE } from '../src/house.js';
import { calculateStarPoints, getStarReward } from '../src/star-rewards.js';

test('normal, furniture, zone and combined stars have the approved base rewards', () => {
  for (const [id, under, zone, basePoints] of [
    ['living-star-1', false, false, 150], ['living-star-5', true, false, 300],
    ['workshop-star-2', false, true, 300], ['workshop-star-1', true, true, 450],
  ]) {
    const reward = getStarReward(id);
    assert.equal(reward.id, id); assert.equal(reward.under, under);
    assert.equal(reward.zone, zone); assert.equal(reward.basePoints, basePoints);
  }
});

test('every basement room and all four stairwells qualify, with one zone bonus per star', () => {
  const rooms = new Map(HOUSE.rooms.map(room => [room.id, room]));
  const stairs = new Set(['cellar-core', 'stairs', 'upper-core', 'attic-core']);
  for (const star of HOUSE.collectibles) {
    assert.equal(getStarReward(star).zone, rooms.get(star.roomId).floor === 'ug' || stairs.has(star.roomId), star.id);
  }
  assert.equal(getStarReward('cellar-core-star-1').basePoints, 300);
});

test('canonical metadata prevents caller overrides and duplicate IDs cannot multiply points', () => {
  assert.equal(getStarReward({ id: 'living-star-1', under: true, roomId: 'workshop' }).basePoints, 150);
  assert.equal(calculateStarPoints(['living-star-1', 'living-star-1', 'workshop-star-1']), 600);
  assert.equal(calculateStarPoints([]), 0);
  assert.throws(() => getStarReward('missing-star'), /Stern/);
  assert.throws(() => calculateStarPoints(['missing-star']), /Stern/);
  for (const value of [null, undefined, {}, [null], [{ id: 'living-star-1' }]]) assert.throws(() => calculateStarPoints(value));
});

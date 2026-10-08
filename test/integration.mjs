import assert from 'node:assert/strict';
import { HOUSE } from '../src/house.js';
import { calculateStarPoints, getStarReward } from '../src/star-rewards.js';
const origin = 'http://127.0.0.1:8796';
async function request(path, body, overrideOrigin) {
  const response = await fetch(origin + path, body === undefined ? {} : {
    method: 'POST', headers: { 'Content-Type': 'application/json', Origin: overrideOrigin ?? origin }, body: JSON.stringify(body),
  });
  return { status: response.status, data: await response.json() };
}
const start = await request('/api/runs', { level: 8 });
assert.equal(start.status, 201);
const score = { run: start.data.run, name: 'Lokaler Test', level: 8, stars: 96, blocks: 156, flightMs: 500 };
const saved = await request('/api/leaderboard', score);
assert.equal(saved.status, 201); assert.equal(saved.data.points, 30005);
const retry = await request('/api/leaderboard', score);
assert.equal(retry.status, 200); assert.equal(retry.data.points, 30005);
assert.equal((await request('/api/leaderboard', { ...score, level: 7, blocks: 100, stars: 80 })).status, 400);
assert.equal((await request('/api/runs', { level: 1 }, 'https://example.invalid')).status, 403);
const ranking = await request('/api/leaderboard');
assert.equal(ranking.status, 200);
assert(ranking.data.entries.some(item => item.name === score.name && item.level === 8 && item.blocks === 156 && item.stars === 96));
for (const asset of ['/', '/game.js', '/style.css']) {
  const response = await fetch(origin + asset); assert.equal(response.status, 200);
}
console.log('Local Worker/D1 integration passed: 156 blocks, 96 stars, correct points, retry, level binding, origin, assets.');
const houseStart = await request('/api/house-runs', {});
assert.equal(houseStart.status, 201);
const houseScore = { run: houseStart.data.run, name: 'Lokaler Hauspilot', stars: 2, blocks: 0, roomIds: ['dining', 'kitchen'], complete: false, flightMs: 500, points: 999999 };
const houseSaved = await request('/api/house-leaderboard', houseScore);
assert.equal(houseSaved.status, 201); assert.equal(houseSaved.data.points, 805);
assert.equal((await request('/api/house-leaderboard', houseScore)).status, 200);
assert.equal((await request('/api/house-leaderboard', { ...houseScore, stars: 3 })).status, 409);
assert.equal((await request('/api/house-leaderboard', { ...houseScore, roomIds: ['unknown'] })).status, 400);
const houseRanking = await request('/api/house-leaderboard');
assert.equal(houseRanking.status, 200);
assert(houseRanking.data.entries.some(item => item.name === houseScore.name && item.rooms === 2 && item.points === 805));
assert(houseRanking.data.entries.every(item => item.level === undefined));
console.log('House Worker/D1 integration passed: room bonus, independent ranking, server scoring, duplicate and invalid room handling.');

const weightedStart = await request('/api/house-runs', { scoreVersion: 2 });
assert.equal(weightedStart.status, 201); assert.equal(weightedStart.data.scoreVersion, 2);
const categoryIds = [[false, false], [true, false], [false, true], [true, true]].map(([under, zone]) => HOUSE.collectibles.find(star => {
  const reward = getStarReward(star); return reward.under === under && reward.zone === zone;
}).id);
const weightedScore = { ...houseScore, run: weightedStart.data.run, name: 'Lokaler Sternpilot', scoreVersion: 2, stars: 4, starIds: categoryIds, firstDiscoveryBonus: 999999 };
assert.equal((await request('/api/house-leaderboard', { ...weightedScore, run: houseStart.data.run })).status, 400);
assert.equal((await request('/api/house-leaderboard', { ...houseScore, run: weightedStart.data.run })).status, 400);
const weightedSaved = await request('/api/house-leaderboard', weightedScore);
assert.equal(weightedSaved.status, 201); assert.equal(weightedSaved.data.points, 1705);
assert.equal((await request('/api/house-leaderboard', { ...weightedScore, starIds: [...categoryIds].reverse() })).status, 200);
const replacementId = HOUSE.collectibles.find(star => !categoryIds.includes(star.id)).id;
assert.equal((await request('/api/house-leaderboard', { ...weightedScore, starIds: [replacementId, ...categoryIds.slice(1)] })).status, 409);
assert.equal((await request('/api/house-leaderboard', { ...weightedScore, starIds: ['unknown', ...categoryIds.slice(1)] })).status, 400);
const currentRanking = await request('/api/house-leaderboard?scoreVersion=2');
assert.equal(currentRanking.data.scoreVersion, 2); assert(currentRanking.data.entries.some(entry => entry.name === weightedScore.name && entry.points === 1705));
assert(!currentRanking.data.entries.some(entry => entry.name === houseScore.name));
const oldRanking = await request('/api/house-leaderboard');
assert.equal(oldRanking.data.scoreVersion, 1); assert(!oldRanking.data.entries.some(entry => entry.name === weightedScore.name));

const fullStart = await request('/api/house-runs', { scoreVersion: 2 });
const allIds = HOUSE.collectibles.map(star => star.id), roomAliases = new Map(HOUSE.rooms.map(room => [room.id, room.bonusId || room.id]));
const rooms = new Set(HOUSE.rooms.map(room => roomAliases.get(room.id))); rooms.delete(HOUSE.startRoomId);
const fullScore = { ...weightedScore, run: fullStart.data.run, name: 'Lokaler Vollflug', stars: allIds.length, starIds: allIds, roomIds: HOUSE.rooms.map(room => room.id), complete: true };
assert(new TextEncoder().encode(JSON.stringify(fullScore)).byteLength > 2048);
const fullSaved = await request('/api/house-leaderboard', fullScore);
assert.equal(fullSaved.status, 201); assert.equal(fullSaved.data.points, calculateStarPoints(allIds) + rooms.size * 250 + 5);
assert.equal((await request('/api/house-leaderboard', { ...fullScore, padding: 'x'.repeat(8192) })).status, 400);
console.log('Weighted house/D1 integration passed: immutable version tickets, all reward classes, no wallet bonus, ID retry binding, isolated old ranking, complete 96-star payload.');

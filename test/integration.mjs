import assert from 'node:assert/strict';
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

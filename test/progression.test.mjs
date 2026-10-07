import test from 'node:test';
import assert from 'node:assert/strict';
import { CATALOG, createProgression, calculateRunScore, PROFILE_KEY } from '../src/progression.js';
import { HOUSE } from '../src/house.js';

function memoryStorage() {
  const data = new Map();
  return { data, fail: false, getItem: key => data.get(key) ?? null,
    setItem(key, value) { if (this.fail) throw new Error('QuotaExceededError'); data.set(key, value); } };
}
const fund = (progression, id = 'funding-run') => progression.creditRun(id, { stars: HOUSE.collectibles.length, seconds: 60, roomIds: HOUSE.rooms.map(room => room.id) });

test('room rewards count newly visited rooms once, not the starting room or merely open doors', () => {
  const other = HOUSE.rooms.find(room => room.id !== HOUSE.startRoomId).id;
  assert.equal(calculateRunScore({ seconds: 0, roomIds: [HOUSE.startRoomId] }), 0);
  assert.equal(calculateRunScore({ stars: 2, blocks: 1, seconds: 2.5, roomIds: [HOUSE.startRoomId, other, other, 'unknown'] }), 675);
  assert.equal(calculateRunScore({ seconds: 6000 }), 600);
  const segment = HOUSE.rooms.find(room => room.bonusId);
  assert.equal(calculateRunScore({ roomIds: [segment.id, segment.bonusId] }), 250);
});

test('run rewards survive reload and duplicate settlement never credits twice', () => {
  const storage = memoryStorage();
  const first = createProgression(storage);
  const summary = { stars: 3, seconds: 10, roomIds: [] };
  assert.equal(first.creditRun('unique-run-1', summary).credited, 550);
  const reloaded = createProgression(storage);
  assert.equal(reloaded.creditRun('unique-run-1', summary).credited, 0);
  assert.equal(reloaded.getProfile().points, 550);
  assert.equal(reloaded.getProfile().highscore, 550);
  assert.equal(reloaded.creditRun('unique-run-2', summary).credited, 550);
  assert.equal(reloaded.getProfile().points, 1100);
  assert.equal(reloaded.getProfile().highscore, 550);
});

test('permanent purchases, equipment and size persist, while purchases leave the highscore intact', () => {
  const storage = memoryStorage(), progression = createProgression(storage);
  const funded = fund(progression).points, originalHighscore = progression.getProfile().highscore;
  for (const id of ['upgrade:size', 'plane:glider', 'effect:mint', 'boost:lift', 'boost:turbo', `door:${HOUSE.doors[0].id}`]) progression.purchase(id);
  progression.equipForm('glider'); progression.equipEffect('mint'); progression.equipBoosts(['lift', 'turbo']); progression.setSize(.55); progression.setPermanentDoorsEnabled(false);
  const reloaded = createProgression(storage).getProfile();
  assert.deepEqual(reloaded.equipped, { form: 'glider', effect: 'mint', boosts: ['lift', 'turbo'], size: .55 });
  assert.equal(reloaded.useDoorUnlocks, false);
  assert.equal(reloaded.highscore, originalHighscore);
  const spent = CATALOG.filter(item => reloaded.owned.includes(item.id)).reduce((sum, item) => sum + item.price, 0);
  assert.equal(reloaded.points, funded - spent);
  assert.throws(() => progression.purchase('upgrade:size'), /bereits/);
});

test('unowned gear, overdrafts, duplicate boosts and unsupported sizes cannot be equipped', () => {
  const progression = createProgression(memoryStorage());
  assert.throws(() => progression.purchase('upgrade:size'), /fehlen/);
  assert.throws(() => progression.equipForm('glider'), /zuerst/);
  assert.throws(() => progression.setSize(.55), /zuerst/);
  fund(progression); progression.purchase('upgrade:size'); progression.purchase('boost:lift');
  for (const size of [.54, 1.51, NaN, Infinity, '1']) assert.throws(() => progression.setSize(size));
  assert.throws(() => progression.equipBoosts(['lift', 'lift']), /verschiedene/);
  assert.throws(() => progression.equipBoosts(['lift', 'turbo']), /zuerst/);
  assert.throws(() => progression.equipBoosts(['lift', 'turbo', 'magnet']), /höchstens/);
  assert.equal(progression.getProfile().equipped.size, 1);
});

test('failed writes neither deduct money nor mark a reward as settled and can be retried', () => {
  const storage = memoryStorage(), progression = createProgression(storage);
  fund(progression); const before = progression.getProfile();
  storage.fail = true;
  assert.throws(() => progression.purchase('upgrade:size'), /Speichern/);
  assert.deepEqual(progression.getProfile(), before);
  assert.throws(() => progression.creditRun('interrupted-run', { stars: 2 }), /Speichern/);
  assert.deepEqual(progression.getProfile(), before);
  assert.equal(progression.getStatus().available, false);
  storage.fail = false;
  assert.equal(progression.creditRun('interrupted-run', { stars: 2 }).credited, 300);
  assert.equal(progression.creditRun('interrupted-run', { stars: 2 }).credited, 0);
  assert.equal(progression.getStatus().available, true);
});

test('two stale views read current storage before spending or settling the same run', () => {
  const storage = memoryStorage(), first = createProgression(storage), second = createProgression(storage);
  first.creditRun('shared-run', { stars: 10 });
  assert.equal(second.creditRun('shared-run', { stars: 10 }).credited, 0);
  first.purchase('boost:lift');
  assert.throws(() => second.purchase('boost:turbo'), /fehlen/);
  assert.equal(second.getProfile().points, 700);
  second.purchase('effect:mint');
  assert.equal(first.refresh().points, 400);
  assert(first.getProfile().owned.includes('effect:mint'));
});

test('unreadable or corrupt storage is reported and never silently overwritten', () => {
  const storage = memoryStorage(); storage.data.set(PROFILE_KEY, '{broken');
  const progression = createProgression(storage);
  assert.equal(progression.getStatus().available, false);
  assert.throws(() => progression.creditRun('valid-run-id', { stars: 1 }), /beschädigt/);
  assert.equal(storage.data.get(PROFILE_KEY), '{broken');
  const denied = createProgression({ getItem() { throw new Error('SecurityError'); } });
  assert.equal(denied.getStatus().available, false);
  assert.throws(() => denied.purchase('effect:mint'), /Speichern/);
});

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
  assert.deepEqual(reloaded.equipped, { form: 'glider', effect: 'mint', boosts: ['lift', 'turbo'], size: .55, color: null });
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

test('v1 migration preserves money, purchases, equipment and receipts without inventing historical discoveries', () => {
  const storage = memoryStorage();
  const old = { version: 1, points: 1234, highscore: 4321, owned: ['plane:classic', 'effect:none', 'plane:glider', 'upgrade:size', 'boost:lift'],
    equipped: { form: 'glider', effect: 'none', boosts: ['lift'], size: .75 }, useDoorUnlocks: false, creditedRuns: ['already-settled-run'] };
  storage.data.set(PROFILE_KEY, JSON.stringify(old));
  const progression = createProgression(storage), profile = progression.getProfile();
  assert.equal(profile.version, 2); assert.equal(profile.points, old.points); assert.equal(profile.highscore, old.highscore);
  assert.deepEqual(profile.owned, old.owned); assert.deepEqual(profile.equipped, { ...old.equipped, color: null });
  assert.equal(profile.useDoorUnlocks, false); assert.deepEqual(profile.discoveredStarIds, []);
  assert.equal(storage.data.get(PROFILE_KEY), JSON.stringify(old), 'reading a v1 profile must not write a migration');
  assert.equal(progression.creditRun('already-settled-run', { stars: 1 }).credited, 0);
  const star = progression.creditStar('first-new-run', 'living-star-1');
  assert.equal(star.bonus, 150); assert.equal(star.points, 1384);
  const saved = JSON.parse(storage.data.get(PROFILE_KEY));
  assert.equal(saved.version, 2); assert.deepEqual(saved.creditedRuns, old.creditedRuns);
  assert.deepEqual(saved.discoveredStarIds, ['living-star-1']);
});

test('first discovery saves only its bonus immediately, then weighted settlement pays its base once', () => {
  const storage = memoryStorage(), progression = createProgression(storage);
  assert.deepEqual(progression.creditStar('weighted-first-run', 'workshop-star-1'), {
    starId: 'workshop-star-1', firstDiscovery: true, basePoints: 450, bonus: 450, totalPoints: 900, credited: 450, points: 450, duplicate: false,
  });
  assert.equal(progression.getProfile().highscore, 0, 'a discovery bonus is never a ranking score');
  const summary = { stars: 1, starIds: ['workshop-star-1'], roomIds: ['workshop'], seconds: 2.5 };
  assert.equal(progression.creditRun('weighted-first-run', summary).credited, 725);
  assert.equal(progression.getProfile().points, 1175); assert.equal(progression.getProfile().highscore, 725);
  const reloaded = createProgression(storage);
  assert.equal(reloaded.creditStar('weighted-first-run', 'workshop-star-1').bonus, 0);
  assert.equal(reloaded.creditRun('weighted-first-run', summary).credited, 0);
  const repeat = reloaded.creditStar('weighted-second-run', 'workshop-star-1');
  assert.equal(repeat.firstDiscovery, false); assert.equal(repeat.totalPoints, 450); assert.equal(repeat.credited, 0);
  assert.equal(reloaded.creditRun('weighted-second-run', summary).credited, 725);
  assert.equal(reloaded.getProfile().points, 1900); assert.equal(reloaded.getProfile().highscore, 725);
});

test('discovery survives reload before settlement and a legacy count-only pending run keeps its original score', () => {
  const storage = memoryStorage(), progression = createProgression(storage);
  progression.creditStar('interrupted-flight', 'living-star-5');
  const reloaded = createProgression(storage);
  assert.deepEqual(reloaded.getProfile().discoveredStarIds, ['living-star-5']);
  assert.equal(reloaded.creditStar('interrupted-flight', 'living-star-5').bonus, 0);
  assert.equal(reloaded.creditRun('interrupted-flight', { stars: 1, starIds: ['living-star-5'] }).credited, 300);
  assert.equal(reloaded.creditRun('old-pending-flight', { stars: 2 }).credited, 300);
  assert.deepEqual(reloaded.getProfile().discoveredStarIds, ['living-star-5']);
  assert.equal(reloaded.getProfile().points, 900);
});

test('failed discovery persistence changes neither money nor history and retry gives exactly one bonus', () => {
  const storage = memoryStorage(), progression = createProgression(storage);
  progression.creditRun('seed-receipt-run', { stars: 1 });
  const before = progression.getProfile(), storedBefore = storage.data.get(PROFILE_KEY);
  storage.fail = true;
  assert.throws(() => progression.creditStar('failed-star-run', 'workshop-star-1'), /Speichern/);
  assert.deepEqual(progression.getProfile(), before); assert.equal(storage.data.get(PROFILE_KEY), storedBefore);
  storage.fail = false;
  assert.equal(progression.creditStar('failed-star-run', 'workshop-star-1').bonus, 450);
  assert.equal(progression.creditStar('failed-star-run', 'workshop-star-1').bonus, 0);
  assert.equal(progression.getProfile().points, 600);
});

test('stale profiles refresh discoveries before crediting, and invalid stars cannot change storage', () => {
  const storage = memoryStorage(), first = createProgression(storage), second = createProgression(storage);
  first.creditStar('first-tab-run', 'living-star-5');
  assert.equal(second.creditStar('second-tab-run', 'living-star-5').bonus, 0);
  second.creditStar('second-tab-run', 'living-star-1');
  assert.deepEqual(first.refresh().discoveredStarIds, ['living-star-5', 'living-star-1']);
  assert.equal(first.getProfile().points, 450);
  const before = storage.data.get(PROFILE_KEY);
  assert.throws(() => first.creditStar('valid-run-id', 'unknown'));
  assert.throws(() => first.creditStar('bad', 'living-star-2'));
  assert.throws(() => first.creditRun('invalid-summary', { stars: 1, starIds: ['unknown'] }));
  assert.equal(storage.data.get(PROFILE_KEY), before);
});

test('weighted scoring counts each star once and never treats a malformed ID list as a legacy summary', () => {
  assert.equal(calculateRunScore({ stars: 999, starIds: ['living-star-1', 'living-star-5', 'workshop-star-1', 'workshop-star-1'] }), 900);
  assert.equal(calculateRunScore({ stars: 999, starIds: [] }), 0);
  assert.throws(() => calculateRunScore({ stars: 1, starIds: null }));
});

test('v2 discovery history remains intact through purchases, including retired house identities', () => {
  const storage = memoryStorage(), progression = createProgression(storage);
  fund(progression); progression.creditStar('discovery-run', 'living-star-1');
  const raw = JSON.parse(storage.data.get(PROFILE_KEY)); raw.discoveredStarIds.push('retired-star-identity');
  storage.data.set(PROFILE_KEY, JSON.stringify(raw));
  progression.purchase('effect:mint');
  assert.deepEqual(createProgression(storage).getProfile().discoveredStarIds, ['living-star-1', 'retired-star-identity']);
});

test('malformed v2 history is reported rather than silently reset and repaid', () => {
  const storage = memoryStorage(), progression = createProgression(storage);
  progression.creditStar('discovery-run', 'living-star-1');
  const raw = JSON.parse(storage.data.get(PROFILE_KEY)); raw.discoveredStarIds = null;
  const corrupt = JSON.stringify(raw); storage.data.set(PROFILE_KEY, corrupt);
  const reloaded = createProgression(storage);
  assert.equal(reloaded.getStatus().available, false);
  assert.throws(() => reloaded.creditStar('another-run', 'living-star-1'), /Profil/);
  assert.equal(storage.data.get(PROFILE_KEY), corrupt);
});

test('one permanent color upgrade costs 2000, then every color change and paper restore are free', () => {
  const storage = memoryStorage(), progression = createProgression(storage);
  assert.equal(CATALOG.find(item => item.id === 'upgrade:color').price, 2000);
  assert.equal(CATALOG.filter(item => item.category === 'colors').length, 1);
  assert.throws(() => progression.setColor('#aabbcc'), /zuerst/);
  assert.equal(progression.setColor(null).equipped.color, null, 'paper never requires ownership');
  const before = fund(progression).points;
  progression.creditStar('color-star-history', 'living-star-1');
  progression.purchase('upgrade:color');
  const expected = before + 150 - 2000, record = progression.getProfile().highscore;
  for (const color of ['#ABCDEF', '#000000', '#ffffff', '#123456']) {
    const chosen = progression.setColor(color);
    assert.equal(chosen.points, expected); assert.equal(chosen.equipped.color, color.toLowerCase());
    assert.equal(chosen.highscore, record); assert.deepEqual(chosen.discoveredStarIds, ['living-star-1']);
  }
  const reloaded = createProgression(storage);
  assert.equal(reloaded.getProfile().equipped.color, '#123456');
  assert.equal(reloaded.setColor(null).points, expected);
  assert.equal(reloaded.getProfile().equipped.color, null); assert(reloaded.getProfile().owned.includes('upgrade:color'));
  assert.throws(() => reloaded.purchase('upgrade:color'), /bereits/);
});

test('old v2 profiles gain null color without losing their existing data or writing on read', () => {
  const storage = memoryStorage(), progression = createProgression(storage);
  fund(progression); progression.creditStar('old-color-profile', 'workshop-star-1'); progression.purchase('boost:lift');
  const raw = JSON.parse(storage.data.get(PROFILE_KEY)); delete raw.equipped.color;
  const previous = JSON.stringify(raw); storage.data.set(PROFILE_KEY, previous);
  const migrated = createProgression(storage).getProfile();
  assert.equal(migrated.version, 2); assert.equal(migrated.equipped.color, null);
  assert.equal(migrated.points, raw.points); assert.deepEqual(migrated.owned, raw.owned);
  assert.deepEqual(migrated.discoveredStarIds, raw.discoveredStarIds);
  assert.equal(storage.data.get(PROFILE_KEY), previous);
});

test('invalid and failed color changes leave the saved equipment and money unchanged', () => {
  const storage = memoryStorage(), progression = createProgression(storage);
  fund(progression); progression.purchase('upgrade:color'); progression.setColor('#6699cc');
  const before = progression.getProfile(), rawBefore = storage.data.get(PROFILE_KEY);
  for (const color of ['red', '#fff', '#ff000080', ' #ff0000', '#xx0000', undefined, 123, {}]) assert.throws(() => progression.setColor(color), /Farbe/);
  assert.deepEqual(progression.getProfile(), before); assert.equal(storage.data.get(PROFILE_KEY), rawBefore);
  storage.fail = true;
  assert.throws(() => progression.setColor('#cc6699'), /Speichern/);
  assert.deepEqual(progression.getProfile(), before); assert.equal(storage.data.get(PROFILE_KEY), rawBefore);
  storage.fail = false;
  assert.equal(progression.setColor('#cc6699').equipped.color, '#cc6699');
  assert.equal(progression.getProfile().points, before.points);
});

test('stored malformed or unowned custom color falls back safely to original paper', () => {
  for (const [owned, color] of [[[], '#ff0000'], [['upgrade:color'], 'url(example)'], [['upgrade:color'], '#AABBCC']]) {
    const storage = memoryStorage(), progression = createProgression(storage);
    progression.setColor(null);
    const raw = JSON.parse(storage.data.get(PROFILE_KEY)); raw.owned.push(...owned); raw.equipped.color = color;
    storage.data.set(PROFILE_KEY, JSON.stringify(raw));
    assert.equal(createProgression(storage).getProfile().equipped.color, color === '#AABBCC' ? '#aabbcc' : null);
  }
});

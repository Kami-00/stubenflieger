import { HOUSE } from './house.js';
import { calculateStarPoints, getStarReward } from './star-rewards.js';

export const ROOM_BONUS = 250;
export const PROFILE_KEY = 'stubenflieger.house-profile.v1';
export const SIZE_RANGE = Object.freeze({ min: .55, max: 1.5, step: .05 });
const baseItems = [
  { id: 'upgrade:size', category: 'upgrades', name: 'Verstellbare Größe', price: 1800, description: '55–150 %: Groß gleitet länger, klein kurvt enger und passt durch kleine Lücken. Die Hitbox wächst mit.' },
  { id: 'boost:lift', category: 'boosts', name: 'Aufwind', price: 800, description: 'Ein kurzer Höhengewinn. Ein Einsatz in jedem Run.' },
  { id: 'boost:turbo', category: 'boosts', name: 'Turbo', price: 1000, description: 'Kurzer Geschwindigkeitsschub. Ein Einsatz in jedem Run.' },
  { id: 'boost:magnet', category: 'boosts', name: 'Sternmagnet', price: 1400, description: 'Zieht nahe, frei erreichbare Sterne an. Ein Einsatz in jedem Run.' },
  { id: 'boost:cushion', category: 'boosts', name: 'Luftpolster', price: 1600, description: 'Fängt nach der Aktivierung eine leichte Berührung ab. Ein Einsatz in jedem Run.' },
  { id: 'plane:classic', category: 'planes', name: 'Klassiker', price: 0, description: 'Gerade Flügelenden und ausgewogenes Flugverhalten.' },
  { id: 'plane:glider', category: 'planes', name: 'Gleiter', price: 1200, description: 'Breite, gerundete Flügel. Längeres Gleiten und gemütlicheres Tempo.' },
  { id: 'plane:dart', category: 'planes', name: 'Pfeil', price: 1800, description: 'Spitze Dreiecksform, höheres Tempo und weitere Kurven.' },
  { id: 'plane:stunt', category: 'planes', name: 'Kunstflieger', price: 2500, description: 'Gerade, kantige Flügel und ein eckiges Leitwerk für enge Kurven.' },
  { id: 'effect:none', category: 'effects', name: 'Ohne Effekt', price: 0, description: 'Die schlichte Papieroptik.' },
  { id: 'effect:mint', category: 'effects', name: 'Minzspur', price: 300, description: 'Eine dezente türkise Flugspur.' },
  { id: 'effect:spark', category: 'effects', name: 'Sternenstaub', price: 700, description: 'Goldenes Funkeln hinter deinem Flieger.' },
  { id: 'effect:confetti', category: 'effects', name: 'Konfettispur', price: 1000, description: 'Eine bunte Spur für deinen Hausflug.' },
];
export const CATALOG = Object.freeze([
  ...baseItems,
  ...HOUSE.doors.map((door, index) => ({
    id: `door:${door.id}`, category: 'doors', name: door.name || door.id,
    price: Math.min(4000, 500 + index * 200), description: 'Bei jedem Run von Anfang an offen, solange du gekaufte Türen aktiviert hast.',
  })),
].map(Object.freeze));
const items = new Map(CATALOG.map(item => [item.id, item]));
const roomAliases = new Map(HOUSE.rooms.map(room => [room.id, room.bonusId || room.id]));
for (const id of roomAliases.values()) roomAliases.set(id, id);
const startRoom = HOUSE.startRoomId || HOUSE.startRoom || HOUSE.rooms[0].id;
const clone = value => JSON.parse(JSON.stringify(value));

export function calculateRunScore(summary = {}) {
  const count = value => Number.isInteger(value) && value > 0 ? value : 0;
  const seconds = Number.isFinite(summary.seconds) ? Math.min(60, Math.max(0, summary.seconds)) : 0;
  const visited = new Set(Array.isArray(summary.roomIds) ? summary.roomIds.map(id => roomAliases.get(id)).filter(id => id && id !== startRoom) : []);
  // Pending flights from before weighted stars only contain a count.
  const starPoints = Object.hasOwn(summary, 'starIds') ? calculateStarPoints(summary.starIds) : count(summary.stars) * 150;
  return starPoints + count(summary.blocks) * 100 + Math.floor(seconds * 10) + visited.size * ROOM_BONUS;
}

function emptyProfile() {
  return { version: 2, points: 0, highscore: 0, owned: ['plane:classic', 'effect:none'],
    equipped: { form: 'classic', effect: 'none', boosts: [], size: 1 }, useDoorUnlocks: true, creditedRuns: [], discoveredStarIds: [] };
}

function parseProfile(raw) {
  if (raw === null) return emptyProfile();
  let profile;
  try { profile = JSON.parse(raw); } catch { throw new Error('Dein gespeichertes Profil ist beschädigt. Es wird nicht überschrieben.'); }
  if (!profile || ![1, 2].includes(profile.version) || !Number.isSafeInteger(profile.points) || profile.points < 0
    || !Number.isSafeInteger(profile.highscore) || profile.highscore < 0 || !Array.isArray(profile.owned)
    || !profile.owned.every(id => typeof id === 'string') || !Array.isArray(profile.creditedRuns)
    || !profile.creditedRuns.every(id => typeof id === 'string') || !profile.equipped
    || (profile.version === 2 && (!Array.isArray(profile.discoveredStarIds) || !profile.discoveredStarIds.every(id => typeof id === 'string')))) {
    throw new Error('Dein gespeichertes Profil konnte nicht gelesen werden. Es wird nicht überschrieben.');
  }
  const owned = [...new Set(['plane:classic', 'effect:none', ...profile.owned])];
  const equipped = profile.equipped;
  const form = items.has(`plane:${equipped.form}`) && owned.includes(`plane:${equipped.form}`) ? equipped.form : 'classic';
  const effect = items.has(`effect:${equipped.effect}`) && owned.includes(`effect:${equipped.effect}`) ? equipped.effect : 'none';
  const boosts = [...new Set(Array.isArray(equipped.boosts) ? equipped.boosts : [])].filter(id => items.has(`boost:${id}`) && owned.includes(`boost:${id}`)).slice(0, 2);
  const size = owned.includes('upgrade:size') && Number.isFinite(equipped.size) ? Math.min(SIZE_RANGE.max, Math.max(SIZE_RANGE.min, equipped.size)) : 1;
  return { version: 2, points: profile.points, highscore: profile.highscore, owned, equipped: { form, effect, boosts, size },
    useDoorUnlocks: profile.useDoorUnlocks !== false, creditedRuns: [...new Set(profile.creditedRuns)],
    // V1 stored no star history. Keep retired IDs so a later house update cannot repay them.
    discoveredStarIds: profile.version === 2 ? [...new Set(profile.discoveredStarIds)] : [] };
}

function requireRunId(runId) {
  if (typeof runId !== 'string' || runId.length < 8 || runId.length > 100) throw new Error('Dieser Run konnte nicht zugeordnet werden.');
}

/** Browser-local purchases. Persist first, then publish the new state to the UI. */
export function createProgression(storage) {
  let profile = emptyProfile(), error = null;
  const storageMessage = 'Speichern im Browser ist gerade nicht möglich. Punkte und Käufe wurden nicht verändert. Bitte erlaube Website-Daten und versuche es erneut.';
  try { if (!storage) storage = globalThis.localStorage; profile = parseProfile(storage.getItem(PROFILE_KEY)); }
  catch (cause) { error = cause.message?.includes('Profil') ? cause.message : storageMessage; }
  function refresh() {
    if (!storage) throw new Error(storageMessage);
    try { profile = parseProfile(storage.getItem(PROFILE_KEY)); error = null; }
    catch (cause) { error = cause.message?.includes('Profil') ? cause.message : storageMessage; throw new Error(error); }
  }
  function persist(next) {
    try { storage.setItem(PROFILE_KEY, JSON.stringify(next)); }
    catch { error = storageMessage; throw new Error(error); }
    profile = next; error = null;
  }
  function getProfile() {
    const { creditedRuns, ...publicProfile } = profile;
    return clone(publicProfile);
  }
  function change(edit) { refresh(); const next = clone(profile); edit(next); persist(next); return getProfile(); }
  function requireOwned(next, id) { if (!next.owned.includes(id) || !items.has(id)) throw new Error('Bitte schalte diesen Artikel zuerst frei.'); }
  return {
    getProfile,
    getStatus: () => ({ available: !error, error }),
    refresh: () => { refresh(); return getProfile(); },
    purchase(id) {
      return change(next => {
        const item = items.get(id);
        if (!item) throw new Error('Diesen Artikel gibt es nicht.');
        if (next.owned.includes(id)) throw new Error('Dieser Artikel ist bereits dauerhaft freigeschaltet.');
        if (next.points < item.price) throw new Error('Dafür fehlen noch Punkte.');
        next.points -= item.price; next.owned.push(id);
      });
    },
    equipForm(form) { return change(next => { requireOwned(next, `plane:${form}`); next.equipped.form = form; }); },
    equipEffect(effect) { return change(next => { requireOwned(next, `effect:${effect}`); next.equipped.effect = effect; }); },
    equipBoosts(boosts) {
      return change(next => {
        if (!Array.isArray(boosts) || boosts.length > 2 || new Set(boosts).size !== boosts.length) throw new Error('Wähle höchstens zwei verschiedene Boosts.');
        boosts.forEach(id => requireOwned(next, `boost:${id}`)); next.equipped.boosts = [...boosts];
      });
    },
    setSize(size) {
      return change(next => {
        requireOwned(next, 'upgrade:size');
        if (!Number.isFinite(size) || size < SIZE_RANGE.min || size > SIZE_RANGE.max) throw new Error('Wähle eine Größe zwischen 55 und 150 %.');
        next.equipped.size = Math.round(size * 100) / 100;
      });
    },
    setPermanentDoorsEnabled(enabled) { return change(next => { next.useDoorUnlocks = Boolean(enabled); }); },
    creditStar(runId, starId) {
      requireRunId(runId);
      const reward = getStarReward(starId);
      refresh();
      const firstDiscovery = !profile.discoveredStarIds.includes(reward.id);
      const bonus = firstDiscovery ? reward.basePoints : 0;
      if (firstDiscovery) {
        const next = clone(profile);
        if (!Number.isSafeInteger(next.points + bonus)) throw new Error('Das Punkteguthaben ist zu groß.');
        next.points += bonus; next.discoveredStarIds.push(reward.id);
        // One storage write commits both the discovery and its bonus. A failed write commits neither.
        persist(next);
      }
      return { starId: reward.id, firstDiscovery, basePoints: reward.basePoints, bonus,
        totalPoints: reward.basePoints + bonus, credited: bonus, points: profile.points, duplicate: !firstDiscovery };
    },
    creditRun(runId, summary) {
      requireRunId(runId);
      refresh();
      const score = calculateRunScore(summary);
      if (!Number.isSafeInteger(score)) throw new Error('Dieses Flugergebnis ist ungültig.');
      if (profile.creditedRuns.includes(runId)) return { credited: 0, points: profile.points, score, duplicate: true };
      const next = clone(profile);
      if (!Number.isSafeInteger(next.points + score)) throw new Error('Das Punkteguthaben ist zu groß.');
      next.points += score; next.highscore = Math.max(next.highscore, score); next.creditedRuns.push(runId);
      persist(next);
      return { credited: score, points: next.points, score, duplicate: false };
    },
  };
}

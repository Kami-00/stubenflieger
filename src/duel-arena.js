import { HOUSE } from './house.js';

const CLOSED_IDS = new Set(['hall-cloakroom', 'cloakroom-wc', 'cloakroom-storage', 'bedroom', 'bathroom']);
const closed = door => door.floor === 'ug' || door.id.includes('stairs') || CLOSED_IDS.has(door.id);

// A separate definition prevents a duel from changing a single-player run.
export const DUEL_HOUSE = structuredClone(HOUSE);
DUEL_HOUSE.collectibles = [];
DUEL_HOUSE.name = 'Papierduell';
DUEL_HOUSE.doors = DUEL_HOUSE.doors.map(door => ({ ...door, duelOpen: !closed(door), signText: closed(door) ? 'ZU' : 'OFFEN' }));
export const DUEL_OPEN_DOORS = Object.freeze(DUEL_HOUSE.doors.filter(door => door.duelOpen).map(door => door.id));
export const DUEL_SPAWNS = Object.freeze([
  Object.freeze({ id: 'p1', x: 2, y: 1.2, z: -2, heading: Math.PI / 2 }),
  Object.freeze({ id: 'p2', x: 12, y: 1.2, z: -2, heading: -Math.PI / 2 }),
]);

export const DUEL_RULES = Object.freeze({
  hp: 100, shotDamage: 20, shotCooldown: .35, shotSpeed: 9, lifetime: 2.5,
  roundSeconds: 180, shotRadius: .025, wallDamage: 10, wallCooldown: 1.25,
  recoverySeconds: .5, stepSeconds: 1 / 30,
});

import { HOUSE } from './house.js';

const CLOSED_IDS = new Set(['hall-cloakroom', 'cloakroom-wc', 'cloakroom-storage', 'bedroom', 'bathroom']);
const closed = door => door.floor === 'ug' || door.id.includes('stairs') || CLOSED_IDS.has(door.id);

// A separate definition prevents a duel from changing a single-player run.
export const DUEL_HOUSE = structuredClone(HOUSE);
DUEL_HOUSE.collectibles = [];
DUEL_HOUSE.name = 'Papierduell';
DUEL_HOUSE.doors = DUEL_HOUSE.doors.map(door => ({ ...door, duelOpen: !closed(door), signText: closed(door) ? 'ZU' : 'OFFEN' }));
export const DUEL_OPEN_DOORS = Object.freeze(DUEL_HOUSE.doors.filter(door => door.duelOpen).map(door => door.id));
export const DUEL_PLAYER_IDS = Object.freeze(['p1', 'p2', 'p3', 'p4', 'p5']);
export const DUEL_PLAYER_COLORS = Object.freeze({ p1: '#68cdb4', p2: '#e48b7e', p3: '#78b9ef', p4: '#ba9bea', p5: '#e9c25d' });
export const DUEL_SPAWNS = Object.freeze([
  Object.freeze({ id: 'p1', x: -3.8, y: 1.5, z: -5.5, heading: 1.85 }),
  Object.freeze({ id: 'p2', x: 17.2, y: 1.5, z: 16, heading: -Math.PI / 2 + .2 }),
  Object.freeze({ id: 'p3', x: 17.2, y: 1.5, z: -5.5, heading: Math.PI - .15 }),
  Object.freeze({ id: 'p4', x: -3.8, y: 1.5, z: 16, heading: .12 }),
  Object.freeze({ id: 'p5', x: 7, y: 1.5, z: 5.6, heading: Math.PI }),
]);

export const DUEL_RULES = Object.freeze({
  minPlayers: 2, maxPlayers: 5,
  hp: 100, shotDamage: 20, shotCooldown: .35, shotSpeed: 9, lifetime: 2.5,
  roundSeconds: 180, shotRadius: .025, wallDamage: 10, wallCooldown: 1.25,
  recoverySeconds: .5, stepSeconds: 1 / 30,
});

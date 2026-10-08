import { HOUSE } from './house.js';

const rooms = new Map(HOUSE.rooms.map(room => [room.id, room]));
const stairRooms = new Set(['cellar-core', 'stairs', 'upper-core', 'attic-core']);
const rewards = new Map(HOUSE.collectibles.map(star => {
  const under = Boolean(star.under);
  // A cellar stairwell has one zone bonus, even though both descriptions apply.
  const zone = rooms.get(star.roomId)?.floor === 'ug' || stairRooms.has(star.roomId);
  return [star.id, Object.freeze({ id: star.id, roomId: star.roomId, under, zone,
    basePoints: 150 + (under ? 150 : 0) + (zone ? 150 : 0) })];
}));

/** Rewards always use the house's permanent identity and metadata. */
export function getStarReward(starOrId) {
  const id = typeof starOrId === 'string' ? starOrId : starOrId?.id;
  const reward = rewards.get(id);
  if (!reward) throw new Error('Dieser Stern gehört nicht zum Haus.');
  return reward;
}

export function calculateStarPoints(starIds) {
  if (!Array.isArray(starIds) || !starIds.every(id => typeof id === 'string')) throw new Error('Die gesammelten Sterne sind ungültig.');
  return [...new Set(starIds)].reduce((sum, id) => sum + getStarReward(id).basePoints, 0);
}

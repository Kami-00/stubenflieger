/** State of one flight. Run stars open doors without spending them. */
export function createRunState(house, profile, id = globalThis.crypto.randomUUID()) {
  const stars = new Set(), visited = new Set(), opened = new Set();
  const starIds = new Set(house.collectibles.map(star => star.id));
  const roomAliases = new Map(house.rooms.map(room => [room.id, room.bonusId || room.id]));
  const roomIds = new Set(roomAliases.values());
  const startRoom = house.startRoomId || house.startRoom || house.rooms[0].id;
  visited.add(startRoom);
  const owned = new Set(profile.owned || []);
  if (profile.useDoorUnlocks !== false) {
    for (const door of house.doors) if (owned.has(`door:${door.id}`)) opened.add(door.id);
  }
  const charges = [...new Set(profile.equipped?.boosts || [])]
    .filter(boost => owned.has(`boost:${boost}`)).slice(0, 2);
  const used = new Set();
  return {
    id, stars, visited, opened, charges, used,
    collect(id) {
      if (!starIds.has(id) || stars.has(id)) return null;
      stars.add(id);
      const newlyOpened = house.doors.filter(door => !opened.has(door.id) && stars.size >= door.threshold);
      for (const door of newlyOpened) opened.add(door.id);
      return newlyOpened;
    },
    enterRoom(id) {
      id = roomAliases.get(id) || id;
      if (!roomIds.has(id) || visited.has(id)) return false;
      visited.add(id); return true;
    },
    useBoost(index) {
      const boost = charges[index];
      if (!boost || used.has(boost)) return null;
      used.add(boost); return boost;
    },
    nextDoor() { return house.doors.filter(door => !opened.has(door.id)).sort((a, b) => a.threshold - b.threshold)[0] || null; },
    summary(seconds = 0, blocks = 0) {
      return { stars: stars.size, starIds: [...stars], blocks, seconds, roomIds: [...visited].filter(id => id !== startRoom), complete: stars.size === starIds.size };
    },
  };
}

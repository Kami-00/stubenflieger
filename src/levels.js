// Physics and rendering share one indoor scale: ten units are a 2.8 m ceiling.
export const METERS_PER_UNIT = 0.28;
export const CEILING_HEIGHT = 10;
export const PLANE_RADIUS = 0.18;
export const ROOM_WIDTH = 26;
export const ROOM_DEPTH = 34;
export const WALL_THICKNESS = 0.3;
export const DOOR_WIDTH = 9;
export const DOOR_HEIGHT = 7.4;

const ROOM_LAYOUT = [
  { x: 0, z: 0, type: 'living' },
  { x: 0, z: -34, type: 'kitchen' },
  { x: 26, z: -34, type: 'office' },
  { x: 26, z: 0, type: 'bedroom' },
  { x: 26, z: -68, type: 'library' },
  { x: 0, z: -68, type: 'workshop' },
  { x: 52, z: -68, type: 'studio' },
  { x: 52, z: -34, type: 'greenhouse' },
];

const LEVEL_NAMES = [
  'Erste Runde', 'Durch die Küche', 'Besuch im Arbeitszimmer',
  'Eine ganze Wohnung', 'Bis zur Bibliothek', 'Große Hausrunde',
  'Das Atelier', 'Das ganze Haus',
];

// These flight marks form several loops at different heights. The centre lines
// through the doors stay clear, and every mark is below the real ceiling.
const MARK_PATH = [
  [-5, 3.8, 8], [0, 4.8, 3], [5, 5.8, -3], [5, 6.8, -9],
  [0, 7.8, -12], [-5, 6.8, -10], [-7, 5.8, -3], [-5, 4.8, 3],
  [0, 3.5, 8], [6, 2.8, 11], [7, 4.2, 5], [2, 6.0, 0],
];

function makeLevel(index) {
  const id = index + 1;
  const rooms = ROOM_LAYOUT.slice(0, id).map((room) => ({ ...room }));
  const collectibles = rooms.flatMap((room, roomIndex) => MARK_PATH.map(([x, y, z], markIndex) => ({
    id: `${id}-${roomIndex + 1}-${markIndex + 1}`,
    x: room.x + x,
    y: y + (roomIndex % 2 ? 0.25 : 0),
    z: room.z + z,
  })));
  const towers = rooms.map((room, roomIndex) => ({
    x: room.x + (roomIndex % 2 ? 5 : -5),
    z: room.z + (roomIndex % 2 ? 6 : -8),
    layers: 5 + (roomIndex % 3),
  }));
  towers.push({ x: 5, z: 6, layers: 5 });
  return {
    id,
    name: LEVEL_NAMES[index],
    rooms,
    ceiling: CEILING_HEIGHT,
    goalBlocks: 12 + index * 8,
    collectibles,
    towers,
    thermals: rooms.map((room, roomIndex) => ({
      x: room.x + (roomIndex % 2 ? -3 : 3),
      z: room.z + (roomIndex % 2 ? 3 : -3),
      r: 2.5,
    })),
    start: { x: 0, y: 2.7, z: 11 },
    bounds: {
      minX: Math.min(...rooms.map((room) => room.x)) - ROOM_WIDTH / 2,
      maxX: Math.max(...rooms.map((room) => room.x)) + ROOM_WIDTH / 2,
      minZ: Math.min(...rooms.map((room) => room.z)) - ROOM_DEPTH / 2,
      maxZ: Math.max(...rooms.map((room) => room.z)) + ROOM_DEPTH / 2,
    },
  };
}

export const LEVELS = LEVEL_NAMES.map((_, index) => makeLevel(index));

// The game uses zero-based indices; the visible level ids are one-based.
export function getLevel(index = 0) {
  return LEVELS[Math.max(0, Math.min(LEVELS.length - 1, Math.floor(Number(index) || 0)))];
}

// Exterior walls are closed. A shared room edge gets two jamb sections and a
// lintel, leaving an actual nine-unit-wide, 7.4-unit-high opening in both worlds.
export function getWalls(level) {
  const rooms = new Map(level.rooms.map((room) => [`${room.x},${room.z}`, room]));
  const seen = new Set();
  const walls = [];
  const edges = [
    { side: 'west', dx: -ROOM_WIDTH, dz: 0, axis: 'z', length: ROOM_DEPTH },
    { side: 'east', dx: ROOM_WIDTH, dz: 0, axis: 'z', length: ROOM_DEPTH },
    { side: 'north', dx: 0, dz: -ROOM_DEPTH, axis: 'x', length: ROOM_WIDTH },
    { side: 'south', dx: 0, dz: ROOM_DEPTH, axis: 'x', length: ROOM_WIDTH },
  ];
  for (const room of level.rooms) {
    for (const edge of edges) {
      const x = room.x + edge.dx / 2;
      const z = room.z + edge.dz / 2;
      const key = `${edge.axis}:${x},${z}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const interior = rooms.has(`${room.x + edge.dx},${room.z + edge.dz}`);
      const addSegment = (length, height, offset, y) => {
        walls.push({
          key: `${key}:${walls.length}`,
          side: edge.side,
          interior,
          door: interior,
          size: edge.axis === 'x' ? [length, height, WALL_THICKNESS] : [WALL_THICKNESS, height, length],
          position: [x + (edge.axis === 'x' ? offset : 0), y, z + (edge.axis === 'z' ? offset : 0)],
        });
      };
      if (interior) {
        const sideLength = (edge.length - DOOR_WIDTH) / 2;
        const sideOffset = (edge.length + DOOR_WIDTH) / 4;
        addSegment(sideLength, level.ceiling, -sideOffset, level.ceiling / 2);
        addSegment(sideLength, level.ceiling, sideOffset, level.ceiling / 2);
        addSegment(DOOR_WIDTH, level.ceiling - DOOR_HEIGHT, 0, (level.ceiling + DOOR_HEIGHT) / 2);
      } else {
        addSegment(edge.length, level.ceiling, 0, level.ceiling / 2);
      }
    }
  }
  return walls;
}

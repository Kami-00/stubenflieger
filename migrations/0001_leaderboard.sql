CREATE TABLE flights (
  id TEXT PRIMARY KEY,
  started_at INTEGER NOT NULL,
  name TEXT,
  blocks INTEGER CHECK(blocks BETWEEN 0 AND 63),
  flight_ms INTEGER CHECK(flight_ms BETWEEN 500 AND 1800000),
  points INTEGER,
  submitted_at INTEGER
);
CREATE INDEX leaderboard_ranking ON flights(points DESC, blocks DESC, flight_ms DESC, submitted_at ASC) WHERE name IS NOT NULL;
CREATE INDEX pending_flights ON flights(started_at) WHERE name IS NULL;

-- Original flights and their scores remain untouched.
CREATE TABLE IF NOT EXISTS flights_v2 (
  id TEXT PRIMARY KEY,
  started_at INTEGER NOT NULL,
  name TEXT,
  blocks INTEGER NOT NULL DEFAULT 0 CHECK (blocks BETWEEN 0 AND 1000),
  stars INTEGER NOT NULL DEFAULT 0 CHECK (stars BETWEEN 0 AND 1000),
  level INTEGER NOT NULL DEFAULT 1 CHECK (level BETWEEN 1 AND 8),
  flight_ms INTEGER CHECK (flight_ms BETWEEN 500 AND 1800000),
  points INTEGER,
  submitted_at INTEGER
);

CREATE INDEX IF NOT EXISTS flights_v2_leaderboard
  ON flights_v2 (points DESC, blocks DESC, flight_ms DESC, started_at ASC)
  WHERE name IS NOT NULL;

CREATE INDEX IF NOT EXISTS flights_v2_pending
  ON flights_v2 (started_at)
  WHERE name IS NULL;

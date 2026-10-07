-- House runs intentionally have their own ranking; old level scores stay intact.
CREATE TABLE IF NOT EXISTS house_runs (
  id TEXT PRIMARY KEY,
  started_at INTEGER NOT NULL,
  name TEXT,
  blocks INTEGER NOT NULL DEFAULT 0 CHECK (blocks >= 0),
  stars INTEGER NOT NULL DEFAULT 0 CHECK (stars >= 0),
  rooms INTEGER NOT NULL DEFAULT 0 CHECK (rooms >= 0),
  room_ids TEXT NOT NULL DEFAULT '[]',
  complete INTEGER NOT NULL DEFAULT 0 CHECK (complete IN (0, 1)),
  flight_ms INTEGER CHECK (flight_ms BETWEEN 500 AND 1800000),
  points INTEGER,
  submitted_at INTEGER
);
CREATE INDEX IF NOT EXISTS house_runs_ranking
  ON house_runs (points DESC, stars DESC, rooms DESC, flight_ms ASC, started_at ASC)
  WHERE name IS NOT NULL;
CREATE INDEX IF NOT EXISTS house_runs_pending
  ON house_runs (started_at) WHERE name IS NULL;

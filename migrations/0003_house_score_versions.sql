-- Preserve all existing count-only scores and pending tickets as version 1.
-- Version 2 stores the exact collected IDs and ranks weighted star rewards.
ALTER TABLE house_runs ADD COLUMN score_version INTEGER NOT NULL DEFAULT 1 CHECK (score_version IN (1, 2));
ALTER TABLE house_runs ADD COLUMN star_ids TEXT NOT NULL DEFAULT '[]';
CREATE INDEX house_runs_version_ranking
  ON house_runs (score_version, points DESC, stars DESC, rooms DESC, flight_ms ASC, started_at ASC)
  WHERE name IS NOT NULL;

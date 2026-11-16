-- 0009: the AI coach's usage log and a small settings table (docs/21-opportunity-assessment.md, N-01).
--
-- coach_log      one row per review asked of the model: who, when, which kind, the model and the tokens it
--                used. It is what the daily budget and the per-member limit are counted from. The member's
--                text and the feedback are never stored here.
-- site_settings  switches the owner changes from the admin page without a deploy. First key: coach_mode
--                ('off' = admins only, 'on' = members too).
-- Safe to run on a live database: both tables are new.

CREATE TABLE IF NOT EXISTS coach_log (
  id                TEXT PRIMARY KEY,
  user_id           TEXT,                       -- NULL for a trial run with the admin token
  day               TEXT NOT NULL,              -- YYYY-MM-DD (UTC), the unit of both limits
  kind              TEXT NOT NULL,              -- interview | cv
  lang              TEXT NOT NULL,
  model             TEXT NOT NULL,
  prompt_tokens     INTEGER NOT NULL DEFAULT 0,
  completion_tokens INTEGER NOT NULL DEFAULT 0,
  neurons           REAL NOT NULL DEFAULT 0,    -- estimated from the tokens and the model's published rate
  ok                INTEGER NOT NULL DEFAULT 1,
  created_at        TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS coach_log_day ON coach_log(day);
CREATE INDEX IF NOT EXISTS coach_log_user_day ON coach_log(user_id, day);

CREATE TABLE IF NOT EXISTS site_settings (
  key         TEXT PRIMARY KEY,
  value       TEXT NOT NULL,
  updated_at  TEXT NOT NULL,
  updated_by  TEXT
);

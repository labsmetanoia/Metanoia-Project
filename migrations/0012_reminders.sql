-- 0012: reminders without e-mail (docs/21-opportunity-assessment.md, N-05).
--
-- calendar_feeds       a member who switches the calendar feed on gets a private address their calendar
--                      app reads (functions/api/calendar). The address carries a signature over the
--                      member id and `version`; resetting the feed raises the version, which makes the
--                      old address stop working. No token is stored.
-- push_subscriptions   one row per browser or installed app where a member turned reminders on
--                      (functions/api/push). The endpoint and the two keys come from the browser; they
--                      let the push service deliver an encrypted message to that device and nothing else.
--                      reminded_day is the last day (Jakarta time) the daily reminder looked at the row.
-- Safe to run on a live database: both tables are new.

CREATE TABLE IF NOT EXISTS calendar_feeds (
  user_id       TEXT PRIMARY KEY,
  version       INTEGER NOT NULL DEFAULT 1,
  created_at    TEXT NOT NULL,
  last_read_at  TEXT
);

CREATE TABLE IF NOT EXISTS push_subscriptions (
  id            TEXT PRIMARY KEY,
  user_id       TEXT NOT NULL,
  endpoint      TEXT NOT NULL UNIQUE,
  p256dh        TEXT NOT NULL,
  auth          TEXT NOT NULL,
  locale        TEXT NOT NULL DEFAULT 'en',
  created_at    TEXT NOT NULL,
  reminded_day  TEXT,
  last_ok_at    TEXT,
  fails         INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS idx_push_user ON push_subscriptions (user_id);
CREATE INDEX IF NOT EXISTS idx_push_day ON push_subscriptions (reminded_day);

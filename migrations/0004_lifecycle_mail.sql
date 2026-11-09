-- 0004: lifecycle mail (Tier 1 stage 3).
--   mail_log         one row per message the platform sent or tried to send; the quota classes
--                    (transactional first, lifecycle capped) and the "send once" rules read it.
--   unsubscribed_at  on users and leads: the one-click unsubscribe link sets it; lifecycle mail
--                    skips the row from then on. Service mail (sign-in links, results) is unaffected.

CREATE TABLE IF NOT EXISTS mail_log (
  id          TEXT PRIMARY KEY,
  class       TEXT NOT NULL,                               -- transactional | lifecycle | internal
  kind        TEXT NOT NULL,                               -- verify, reset, magic, results, weakest, weekly, notify, ...
  ref         TEXT,                                        -- the user or lead the message was about (kind + ref = sent once)
  to_hash     TEXT NOT NULL,                               -- sha-256 of the address: per-recipient counts without a second copy of it
  day         TEXT NOT NULL,                               -- YYYY-MM-DD (UTC) for the daily and monthly quota counts
  status      TEXT NOT NULL,                               -- sent | failed
  reason      TEXT,
  created_at  TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS mail_log_day ON mail_log(day, class, status);
CREATE INDEX IF NOT EXISTS mail_log_kind_ref ON mail_log(kind, ref);

ALTER TABLE users ADD COLUMN unsubscribed_at TEXT;
ALTER TABLE leads ADD COLUMN unsubscribed_at TEXT;

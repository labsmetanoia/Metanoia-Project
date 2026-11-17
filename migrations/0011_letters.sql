-- 0011: letters to members and subscribers (docs/21 N-03).
--   letters        one row per letter, written in both languages in the admin page. A letter starts as a
--                  draft, is queued by the owner, and is then sent in daily batches by the Worker
--                  (server/lib/letters.js) inside the mail caps. Sent letters with show_in_portal = 1
--                  also appear in the portal's Updates panel.
--   letter_sends   one row per letter and recipient, so a batch can stop and resume without sending
--                  twice. rcpt is 'u:<user id>' or 'l:<lead id>'; no address is stored here.
-- The site-wide notice bar needs no table: it is one row in site_settings (key 'notice').

CREATE TABLE IF NOT EXISTS letters (
  id              TEXT PRIMARY KEY,
  subject_en      TEXT NOT NULL,
  subject_id      TEXT NOT NULL,
  body_en         TEXT NOT NULL,
  body_id         TEXT NOT NULL,
  audience        TEXT NOT NULL DEFAULT 'all' CHECK (audience IN ('all', 'members', 'subscribers')),
  status          TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'queued', 'sending', 'sent', 'cancelled')),
  show_in_portal  INTEGER NOT NULL DEFAULT 1,
  total           INTEGER,
  created_by      TEXT,
  created_at      TEXT NOT NULL,
  updated_at      TEXT NOT NULL,
  queued_at       TEXT,
  finished_at     TEXT
);
CREATE INDEX IF NOT EXISTS idx_letters_status ON letters (status, queued_at);

CREATE TABLE IF NOT EXISTS letter_sends (
  letter_id   TEXT NOT NULL,
  rcpt        TEXT NOT NULL,
  status      TEXT NOT NULL CHECK (status IN ('sent', 'failed')),
  created_at  TEXT NOT NULL,
  PRIMARY KEY (letter_id, rcpt)
);

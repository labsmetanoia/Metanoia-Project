-- 0010: access codes for sponsors and campuses (docs/21-opportunity-assessment.md, N-02).
--
-- access_batches      one sponsored cohort: a label, who pays for it, what it opens, how many seats, one
--                     code the sponsor hands to its people, a last day to redeem, and how long access lasts.
-- access_redemptions  one row per member who used the code. The entitlement it created is linked, so
--                     withdrawing a batch can withdraw exactly the access it gave.
--
-- Reporting on a batch is aggregate only and is withheld below a minimum cohort size
-- (server/lib/access-codes.js), in line with the Data Dignity commitments.
-- Safe to run on a live database: both tables are new.

CREATE TABLE IF NOT EXISTS access_batches (
  id              TEXT PRIMARY KEY,
  code            TEXT NOT NULL UNIQUE,          -- e.g. MTN-7K4Q-9XWD; compared without dashes, upper case
  label           TEXT NOT NULL,                 -- "Universitas X · Management 2027"
  sponsor         TEXT,                          -- the organisation paying for it
  product         TEXT NOT NULL DEFAULT 'all',   -- all | the-map | the-pack | the-rope | the-route | the-compass
  plan            TEXT NOT NULL DEFAULT 'enterprise',
  seats           INTEGER NOT NULL,
  redeem_by       TEXT,                          -- last day the code can be used (NULL = no last day)
  access_ends_at  TEXT,                          -- when the access it gives ends (NULL = no end)
  note            TEXT,
  created_by      TEXT,
  created_at      TEXT NOT NULL,
  revoked_at      TEXT
);

CREATE TABLE IF NOT EXISTS access_redemptions (
  id              TEXT PRIMARY KEY,
  batch_id        TEXT NOT NULL REFERENCES access_batches(id) ON DELETE CASCADE,
  user_id         TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  entitlement_id  TEXT,
  redeemed_at     TEXT NOT NULL,
  UNIQUE (batch_id, user_id)
);
CREATE INDEX IF NOT EXISTS access_redemptions_user ON access_redemptions(user_id);

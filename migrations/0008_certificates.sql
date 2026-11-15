-- 0008: certificates of completion (docs/20-platform-audit.md, R-04).
--
-- One row per member and product, created when the member asks for it and the server
-- has confirmed that every core lesson is complete in the member's synced progress.
-- The id is the public reference: /certificate?c=<id> shows the name, the product and
-- the date to anyone who has the link, so the member decides who sees it.
-- Safe to run on a live database: the table is new.

CREATE TABLE IF NOT EXISTS certificates (
  id          TEXT PRIMARY KEY,                 -- 16 random URL-safe characters
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product     TEXT NOT NULL,                    -- the-map | the-pack | the-rope | the-route
  name        TEXT NOT NULL,                    -- the member's display name when it was issued or last refreshed
  lessons     INTEGER NOT NULL,                 -- core lessons completed
  issued_at   TEXT NOT NULL,
  updated_at  TEXT NOT NULL,
  revoked_at  TEXT,
  UNIQUE (user_id, product)
);
CREATE INDEX IF NOT EXISTS certificates_user ON certificates(user_id);

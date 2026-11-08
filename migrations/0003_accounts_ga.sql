-- 0003: accounts open to everyone (Tier 1, stage 1).
--   tokens.kind gains 'magic'   one-time sign-in links (15 minutes, single use)
--   users.founding              1 for accounts created before BETA_ENDS_AT (founding members)
--   identities                  Google / LinkedIn subjects linked to a user
-- Passwordless accounts keep pw_hash = '' (NOT NULL stays; verifyPassword rejects it).
-- SQLite cannot alter a CHECK constraint, so tokens is rebuilt in place; rows are kept.

CREATE TABLE IF NOT EXISTS tokens_v2 (
  token_hash  TEXT PRIMARY KEY,
  kind        TEXT NOT NULL CHECK (kind IN ('verify', 'reset', 'newsletter', 'magic')),
  user_id     TEXT REFERENCES users(id) ON DELETE CASCADE,
  email       TEXT,
  lead_id     TEXT,
  created_at  TEXT NOT NULL,
  expires_at  TEXT NOT NULL,
  used_at     TEXT
);
INSERT INTO tokens_v2 SELECT token_hash, kind, user_id, email, lead_id, created_at, expires_at, used_at FROM tokens;
DROP INDEX IF EXISTS tokens_exp;
DROP TABLE tokens;
ALTER TABLE tokens_v2 RENAME TO tokens;
CREATE INDEX IF NOT EXISTS tokens_exp ON tokens(expires_at);

ALTER TABLE users ADD COLUMN founding INTEGER NOT NULL DEFAULT 0;

CREATE TABLE IF NOT EXISTS identities (
  provider    TEXT NOT NULL,                                -- google | linkedin
  subject     TEXT NOT NULL,                                -- the provider's stable user id ("sub")
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  email       TEXT,                                         -- the address the provider reported at link time
  created_at  TEXT NOT NULL,
  PRIMARY KEY (provider, subject)
);
CREATE INDEX IF NOT EXISTS identities_user ON identities(user_id);

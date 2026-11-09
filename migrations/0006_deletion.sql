-- 0006: account deletion with a confirmation window (Tier 1 stage 5).
--   users.deletion_requested_at   set when a member confirms deletion; sign-in is blocked from then on and the
--                                 scheduled Worker purges the account at its next run at least two hours later,
--                                 always within 24 hours. The e-mail sent at that moment carries a cancel link.
--   tokens.kind                   gains 'delete' (confirm a deletion request from a passwordless account) and
--                                 'undelete' (the cancel link). SQLite cannot alter a CHECK constraint, so the
--                                 table is rebuilt in place, as in 0003.

ALTER TABLE users ADD COLUMN deletion_requested_at TEXT;

CREATE TABLE IF NOT EXISTS tokens_v3 (
  token_hash  TEXT PRIMARY KEY,
  kind        TEXT NOT NULL CHECK (kind IN ('verify', 'reset', 'newsletter', 'magic', 'delete', 'undelete')),
  user_id     TEXT REFERENCES users(id) ON DELETE CASCADE,
  email       TEXT,
  lead_id     TEXT,
  created_at  TEXT NOT NULL,
  expires_at  TEXT NOT NULL,
  used_at     TEXT
);
INSERT INTO tokens_v3 SELECT token_hash, kind, user_id, email, lead_id, created_at, expires_at, used_at FROM tokens;
DROP INDEX IF EXISTS tokens_exp;
DROP TABLE tokens;
ALTER TABLE tokens_v3 RENAME TO tokens;
CREATE INDEX IF NOT EXISTS tokens_exp ON tokens(expires_at);

-- 0002: two more lead kinds.
--   waitlist  the one-field "tell me when accounts open" box on the login and register pages
--   results   "send me my Career Map result" (Tier 0 item 0.4, route to follow)
-- SQLite cannot alter a CHECK constraint, so the table is rebuilt in place.
-- Safe to run on a live database: every row and both indexes are kept.

CREATE TABLE IF NOT EXISTS leads_v2 (
  id            TEXT PRIMARY KEY,
  kind          TEXT NOT NULL CHECK (kind IN ('mentor', 'enterprise', 'newsletter', 'waitlist', 'results')),
  email         TEXT NOT NULL,
  name          TEXT,
  payload_json  TEXT NOT NULL,
  consent_json  TEXT NOT NULL,
  status        TEXT NOT NULL DEFAULT 'new',
  notes         TEXT,
  locale        TEXT,
  source_page   TEXT,
  created_at    TEXT NOT NULL,
  updated_at    TEXT NOT NULL,
  confirmed_at  TEXT
);
INSERT INTO leads_v2 SELECT id, kind, email, name, payload_json, consent_json, status, notes, locale, source_page, created_at, updated_at, confirmed_at FROM leads;
DROP INDEX IF EXISTS leads_kind_status;
DROP INDEX IF EXISTS leads_email;
DROP TABLE leads;
ALTER TABLE leads_v2 RENAME TO leads;
CREATE INDEX IF NOT EXISTS leads_kind_status ON leads(kind, status, created_at);
CREATE INDEX IF NOT EXISTS leads_email ON leads(email);

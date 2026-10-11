-- Metanoia Labs · D1 schema · migration 0001
-- Apply with:  npx wrangler d1 migrations apply metanoia            (production)
--              npx wrangler d1 migrations apply metanoia --local    (local dev)
--
-- Two data worlds that never meet in output:
--   individual  → users, sessions, tokens, leads, progress
--   pseudonymous → events, assessments (keyed by subject_id = HMAC(user or anon id))
--   aggregate   → agg_daily (no individual; rows with n < 20 are never written)

CREATE TABLE IF NOT EXISTS users (
  id                TEXT PRIMARY KEY,                      -- random id, never the e-mail
  email             TEXT NOT NULL UNIQUE,                  -- lower-cased
  name              TEXT NOT NULL,
  pw_hash           TEXT NOT NULL,                         -- pbkdf2-sha256$iterations$salt$hash (base64url)
  role              TEXT NOT NULL DEFAULT 'member',        -- member | mentor | admin
  audience          TEXT,                                  -- student | fresh-graduate | early-professional | mature-professional
  locale            TEXT NOT NULL DEFAULT 'en',
  email_verified_at TEXT,
  consent_json      TEXT NOT NULL,                         -- {terms_version, privacy_version, marketing, consented_at, method}
  marketing_opt_in  INTEGER NOT NULL DEFAULT 0,
  created_at        TEXT NOT NULL,
  updated_at        TEXT NOT NULL,
  last_login_at     TEXT
);

CREATE TABLE IF NOT EXISTS sessions (
  token_hash  TEXT PRIMARY KEY,                            -- sha-256 of the cookie value; the raw token is never stored
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at  TEXT NOT NULL,
  expires_at  TEXT NOT NULL,
  user_agent  TEXT,
  ip_hash     TEXT
);
CREATE INDEX IF NOT EXISTS sessions_user ON sessions(user_id);
CREATE INDEX IF NOT EXISTS sessions_exp  ON sessions(expires_at);

CREATE TABLE IF NOT EXISTS tokens (                        -- one-time links: e-mail verification, password reset, newsletter confirm
  token_hash  TEXT PRIMARY KEY,
  kind        TEXT NOT NULL CHECK (kind IN ('verify', 'reset', 'newsletter')),
  user_id     TEXT REFERENCES users(id) ON DELETE CASCADE,
  email       TEXT,
  lead_id     TEXT,
  created_at  TEXT NOT NULL,
  expires_at  TEXT NOT NULL,
  used_at     TEXT
);
CREATE INDEX IF NOT EXISTS tokens_exp ON tokens(expires_at);

CREATE TABLE IF NOT EXISTS leads (                         -- mentor applications, enterprise inquiries, newsletter sign-ups
  id            TEXT PRIMARY KEY,
  kind          TEXT NOT NULL CHECK (kind IN ('mentor', 'enterprise', 'newsletter')),
  email         TEXT NOT NULL,
  name          TEXT,
  payload_json  TEXT NOT NULL,                             -- the submitted fields, validated server-side
  consent_json  TEXT NOT NULL,                             -- {terms_version, privacy_version, marketing, consented_at, method}
  status        TEXT NOT NULL DEFAULT 'new',               -- new | reviewing | accepted | declined | contacted | archived | confirmed | unsubscribed
  notes         TEXT,
  locale        TEXT,
  source_page   TEXT,
  created_at    TEXT NOT NULL,
  updated_at    TEXT NOT NULL,
  confirmed_at  TEXT                                        -- newsletter double opt-in
);
CREATE INDEX IF NOT EXISTS leads_kind_status ON leads(kind, status, created_at);
CREATE INDEX IF NOT EXISTS leads_email ON leads(email);

CREATE TABLE IF NOT EXISTS progress (                      -- per-user product state, namespaced JSON (cross-device progress)
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  ns          TEXT NOT NULL,                               -- e.g. 'browser' (mirrored local keys), 'career-map', 'compass'
  data_json   TEXT NOT NULL,
  version     INTEGER NOT NULL DEFAULT 1,                  -- client timestamp (ms); newer wins
  updated_at  TEXT NOT NULL,
  PRIMARY KEY (user_id, ns)
);

CREATE TABLE IF NOT EXISTS events (                        -- product events; pseudonymous; purged after 13 months
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  subject_id   TEXT NOT NULL,                              -- HMAC(SUBJECT_KEY, user id or anonymous id)
  name         TEXT NOT NULL,                              -- area.object.action (docs/13-event-dictionary.md)
  props_json   TEXT,
  audience     TEXT,
  locale       TEXT,
  page         TEXT,
  ts           TEXT NOT NULL,                              -- client time (ISO)
  received_at  TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS events_ts ON events(ts);
CREATE INDEX IF NOT EXISTS events_name_ts ON events(name, ts);

CREATE TABLE IF NOT EXISTS assessments (                   -- Career Map results, pseudonymous
  id               TEXT PRIMARY KEY,
  subject_id       TEXT NOT NULL,
  kind             TEXT NOT NULL DEFAULT 'career-map',
  audience         TEXT,
  target_fn        TEXT,
  target_industry  TEXT,
  scores_json      TEXT NOT NULL,                          -- {dimensions:[...], total:0-100, band:'…'}
  ts               TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS assessments_ts ON assessments(ts);

CREATE TABLE IF NOT EXISTS agg_daily (                     -- the only table the Readiness Report and Market Intelligence read
  day        TEXT NOT NULL,
  metric     TEXT NOT NULL,                                -- e.g. 'assessment.total.histogram', 'events.count'
  audience   TEXT NOT NULL DEFAULT '',
  fn         TEXT NOT NULL DEFAULT '',
  industry   TEXT NOT NULL DEFAULT '',
  n          INTEGER NOT NULL,                             -- always >= 20 (k-anonymity threshold)
  value_json TEXT NOT NULL,
  PRIMARY KEY (day, metric, audience, fn, industry)
);

CREATE TABLE IF NOT EXISTS rate_limits (                   -- fixed-window counters for auth and lead routes
  key          TEXT PRIMARY KEY,
  count        INTEGER NOT NULL,
  window_start INTEGER NOT NULL                            -- unix seconds
);

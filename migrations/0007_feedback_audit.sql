-- 0007: member feedback and the admin audit trail.
--
-- feedback     what a visitor or member tells us from the "Feedback" button: a kind, an optional
--              1 to 5 rating, a message and the page it was sent from. user_id is set when the
--              sender was signed in; contact is an optional address a guest chose to leave.
-- admin_audit  one row per admin action that changes or exports data (grants, revocations, lead
--              status changes, member exports, feedback triage), so the owner can see who did what.
--
-- Safe to run on a live database: both tables are new.

CREATE TABLE IF NOT EXISTS feedback (
  id          TEXT PRIMARY KEY,
  user_id     TEXT,
  kind        TEXT NOT NULL CHECK (kind IN ('bug', 'idea', 'content', 'praise', 'other')),
  rating      INTEGER CHECK (rating IS NULL OR (rating BETWEEN 1 AND 5)),
  message     TEXT NOT NULL,
  contact     TEXT,
  page        TEXT,
  locale      TEXT,
  user_agent  TEXT,
  status      TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'reviewing', 'planned', 'done', 'declined')),
  notes       TEXT,
  created_at  TEXT NOT NULL,
  updated_at  TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS feedback_status ON feedback(status, created_at);
CREATE INDEX IF NOT EXISTS feedback_user ON feedback(user_id);

CREATE TABLE IF NOT EXISTS admin_audit (
  id          TEXT PRIMARY KEY,
  ts          TEXT NOT NULL,
  actor       TEXT NOT NULL,
  action      TEXT NOT NULL,
  target      TEXT,
  detail_json TEXT
);
CREATE INDEX IF NOT EXISTS admin_audit_ts ON admin_audit(ts);

-- 0005: entitlements (Tier 1 stage 4).
--   One row per grant: what a member may use, under which plan, from which source, until when.
--   /api/auth/me resolves the rows (server/lib/entitlements.js) and the product gates read the result.
--   While ACCESS_MODE is "beta" every signed-in member may use every product regardless of rows;
--   the rows still record the free tier granted at registration and any admin or enterprise grants,
--   so flipping to "entitlements" later changes nothing retroactively.

CREATE TABLE IF NOT EXISTS entitlements (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product     TEXT NOT NULL,                               -- all | the-map | the-pack | the-rope | the-route | the-compass
  plan        TEXT NOT NULL,                               -- free | beta | founding | member | enterprise
  source      TEXT NOT NULL,                               -- registration | admin:<actor> | founding | enterprise:<lead id> | xendit:<invoice id>
  starts_at   TEXT NOT NULL,
  ends_at     TEXT,                                        -- NULL = no end
  status      TEXT NOT NULL DEFAULT 'active',              -- active | revoked
  note        TEXT,
  granted_by  TEXT,
  created_at  TEXT NOT NULL,
  updated_at  TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS entitlements_user ON entitlements(user_id, status);
CREATE INDEX IF NOT EXISTS entitlements_plan ON entitlements(plan, product, status);

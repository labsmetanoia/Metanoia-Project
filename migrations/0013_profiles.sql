-- 0013: shareable readiness profile (docs/21-opportunity-assessment.md, N-06).
--
-- profiles   one row per member who has opened the Public profile settings. The page is off until the
--            member switches it on, and shows only the items the member ticked: the Career Map band,
--            certificates, lessons completed. The address is /p/<slug>; the slug is random, says nothing
--            about the member, and can be replaced. hidden_by_admin lets the team take a page down
--            (an abusive display name) without touching the member's own choice.
-- Safe to run on a live database: the table is new.

CREATE TABLE IF NOT EXISTS profiles (
  user_id            TEXT PRIMARY KEY,
  slug               TEXT NOT NULL UNIQUE,
  enabled            INTEGER NOT NULL DEFAULT 0,
  show_band          INTEGER NOT NULL DEFAULT 1,
  show_certificates  INTEGER NOT NULL DEFAULT 1,
  show_progress      INTEGER NOT NULL DEFAULT 1,
  hidden_by_admin    INTEGER NOT NULL DEFAULT 0,
  created_at         TEXT NOT NULL,
  updated_at         TEXT NOT NULL
);

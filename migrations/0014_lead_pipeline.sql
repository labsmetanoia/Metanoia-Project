-- 0014: lead pipeline (docs/21-opportunity-assessment.md, N-11).
--
-- Five columns on leads turn the review list into a small sales pipeline for the team:
--   follow_up_on     the day to come back to this lead (YYYY-MM-DD, a Jakarta calendar day)
--   owner            who on the team looks after it (free text, a first name is enough)
--   value_idr        what the deal is worth in rupiah when it is won (enterprise leads)
--   last_contact_at  when the team last wrote or spoke to the lead
--   user_id          the account opened from an accepted mentor application
-- New stages (meeting, proposal, won, lost) need no change here: status has no CHECK constraint.
-- Reply templates live in site_settings under the key lead_templates (migration 0009).
-- Safe to run on a live database: columns are added, no row is rewritten.

ALTER TABLE leads ADD COLUMN follow_up_on TEXT;
ALTER TABLE leads ADD COLUMN owner TEXT;
ALTER TABLE leads ADD COLUMN value_idr INTEGER;
ALTER TABLE leads ADD COLUMN last_contact_at TEXT;
ALTER TABLE leads ADD COLUMN user_id TEXT;
CREATE INDEX IF NOT EXISTS leads_follow_up ON leads(follow_up_on) WHERE follow_up_on IS NOT NULL;

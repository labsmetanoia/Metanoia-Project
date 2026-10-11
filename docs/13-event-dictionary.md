# 13 · Event dictionary

First-party product events accepted by `POST /api/events` and sent through `MT.track(name, props)` (`prototype/js/mt-events.js`). Names are `area.object.action`, lower-case, underscores inside parts. Unknown names are accepted by the API but excluded from aggregates until they are listed here.

**Never put a name, e-mail, free text or identifier in `props`.** The subject is already a keyed hash; props describe the product state, not the person.

| Event | Required props | Optional props | Emitted by |
|---|---|---|---|
| `assessment.career_map.assessment_started` | — | — | Career Map |
| `assessment.career_map.question_answered` | `question`, `answer` (index) | — | Career Map |
| `assessment.career_map.section_completed` | `section` | — | Career Map |
| `assessment.career_map.assessment_completed` | `total_score`, `band` | `direction`, `status`, five dimension scores | Career Map |
| `assessment.career_map.submitted` | `scores` `{ total, band, dims[5] }` | `target_fn`, `status` | Career Map (also written to `assessments`) |
| `assessment.career_map.report_viewed` | — | — | Career Map |
| `assessment.career_map.pdf_downloaded` | — | — | Career Map |
| `assessment.career_map.result_shared` | `platform` | — | Career Map |
| `assessment.career_map.email_submitted` | `has_linkedin` | — | Career Map |
| `assessment.career_map.account_cta_clicked` | `placement` | — | Career Map |
| `lms.lesson.opened` | `pillar`, `module`, `lesson` | — | LMS player (to wire) |
| `lms.module.completed` | `pillar`, `module` | — | LMS player (to wire) |
| `lms.check.answered` | `pillar`, `module`, `lesson`, `correct` | — | LMS player (to wire) |
| `rope.simulation.started` | `persona`, `mode` | — | The Rope (to wire) |
| `rope.simulation.finished` | `persona`, `mode`, `questions`, `minutes` | `score` | The Rope (to wire) |
| `range.company.viewed` | `id` (company slug) | `industry`, `geo` | The Range (to wire) |
| `range.role.viewed` | `id` (opportunity id) | `fn`, `industry` | The Range (to wire) |
| `auth.account.registered` | `audience` | — | server-side (future) |
| `lead.mentor.submitted` | — | — | mentor form (future client echo) |

Batching: up to 50 events per request; the client flushes every 4 s, on 20 queued events, and on page hide via `sendBeacon`. Do-Not-Track and `localStorage mt-consent-analytics = "0"` disable both first-party events and GA4.

Retention: raw events 13 months (deleted by `workers/aggregate`); aggregates indefinitely (`agg_daily`, k ≥ 20).

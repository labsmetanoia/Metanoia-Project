# 12 · Platform Audit & Remediation Roadmap

Consolidates the thirteen audit findings into one prioritised plan. Every item is classified, and every dependency on a third party, a credential, legal review or a business decision is named rather than assumed.

**Legend**

| Mark | Meaning |
|---|---|
| ✔ **Confirmed defect** | Reproduced in the code or on the deployed site. Evidence is cited. |
| ★ **Proposed enhancement** | Not broken, but the audit's goal is not met until it exists. |
| ? **Needs investigation** | Cannot be settled from the repository alone. The question to answer is stated. |
| ⛔ **Dependency** | Something outside this repository must exist first: a service, a credential, a legal opinion or a business decision. |

**Priority order** (as requested): 1 Security & Data Integrity → 2 Core Functionality → 3 Product Integrity → 4 Data & Measurement → 5 Content Accuracy → 6 Brand & Commercial.

**How the work ships.** Three pull requests, in priority order:

| PR | Covers | Tiers |
|---|---|---|
| A — Accounts & lead capture | Items 1, 5, part of 3 | 1, 2 |
| B — Product integrity, claims, counts, search | Items 2, 4, 9, 10, 11, 12, 13 | 3, 5, 6 |
| C — The Range quality & classification | Items 7, 8 | 3, 5 |

Item 6 (data flywheel) is designed in §4 of this document and seeded in PR A (event endpoint and schema). Item 3 (technical roadmap) is §7.

---

## 1 · Security & Data Integrity

### 1.1 Credentials stored in the browser in plain text — ✔ confirmed defect

`prototype/register.html` (`Auth.register`) writes `{ name, email, password, … }` to `localStorage` under `metanoia_user_<email>`; `prototype/login.html` compares the typed password against that stored string. Anyone with access to the device, a browser extension, or an XSS foothold can read every password ever typed into the form. Nothing reaches a server, so "accounts" do not exist across devices and cannot be recovered.

**Remediation (PR A).**
- A shared client, `prototype/js/mt-auth.js`, replaces both page-local `Auth` objects. It talks only to `/api/auth/*` and never stores a password anywhere.
- `functions/api/auth/[[route]].js` (Cloudflare Pages Function) implements register, login, logout, me, and password reset. Passwords are hashed with PBKDF2-SHA-256 (210 000 iterations, 16-byte salt) via WebCrypto; sessions are random 256-bit tokens stored hashed in the database and sent as an `HttpOnly; Secure; SameSite=Lax` cookie. Rate limiting per IP and per e-mail on the auth routes.
- When the API is not deployed (the site is on GitHub Pages today), the pages say so plainly and never fabricate a session. The old mock is removed, and any legacy `metanoia_user_*` keys found in a browser are deleted on first visit.

**Dependencies.**
- ⛔ **Hosting decision**: Pages Functions only run on Cloudflare Pages. The site currently deploys to GitHub Pages via `.github/workflows/deploy-pages.yml`. The project must be attached to Cloudflare Pages (build output `prototype/`, functions in `functions/`) with the same custom domain, or the API must be hosted elsewhere behind `/api/*`. Until that happens, the account features show their honest "not yet available" state.
- ⛔ **Cloudflare D1 database** bound as `DB` (schema in `migrations/0001_init.sql`).
- ⛔ **Secret `SESSION_SECRET`** (any 32+ random bytes) and `ADMIN_TOKEN`.
- ⛔ **Transactional e-mail provider** key (Resend is wired; `RESEND_API_KEY`, `MAIL_FROM`) for verification, password reset and confirmations. Without it the API still works, but says that confirmation e-mails are not yet sent.
- ? **OAuth (Google / LinkedIn)**: buttons stay disabled until client IDs exist; not in scope for PR A.

### 1.2 Consent and privacy statements — ★ enhancement / ⛔ legal

The privacy notice (`prototype/legal/privacy.html`) truthfully says data lives in the browser and names GitHub Pages as the only processor. The moment the API is live, the notice must name Cloudflare (hosting, D1, jurisdiction) and the e-mail provider. PR A adds a flagged paragraph for that change behind an "in preparation" note; publishing it is a ⛔ legal review item. Consent is captured with every submission (terms version, privacy version, marketing opt-in, timestamp, method) and stored with the record.

### 1.3 Data minimisation and retention — ★ enhancement

Schema stores only what each flow needs; events are keyed by a pseudonymous `subject_id`, not e-mail; raw events are purged after 13 months by a scheduled job (stated in the schema and in §4). Export and delete endpoints (`/api/account/export`, `/api/account/delete`) are included so data-subject requests can be honoured without a database console.

---

## 2 · Core Functionality

### 2.1 Mentor application journey — ✔ confirmed defect

`pages/mentors.html` links eight CTAs to `register?role=mentor`. `register.html` shows "Application received" after writing to `localStorage` only. No one is notified, nothing can be reviewed, and the mentor marketplace content ("Explore the Dashboard", "Build Your Mentor Profile") leads to a member portal that has no mentor role.

**Remediation (PR A).** A dedicated application form (`prototype/mentors/apply.html` at `/mentors/apply`) collects name, e-mail, LinkedIn URL, industry/function expertise, years, languages, availability, motivation and consent, and POSTs to `/api/leads/mentor`. The page shows confirmation **only after the server returns 2xx** with the stored application id; otherwise it shows the failure and an e-mail fallback with the typed content. `register?role=mentor` now redirects to the form. Admin review: `/api/admin/leads` (list, filter, status) behind `ADMIN_TOKEN`, rendered by `prototype/admin/index.html` (noindex, not in the route manifest). Notifications: the API e-mails `LEADS_NOTIFY_TO` on every new application when the mail key exists.

**Still open.** ★ A mentor-facing portal (profile, sessions, dashboard) is product work, not a fix; it is sequenced in §7 Phase 2. Until then, the mentor page's four "Explore …" cards are labelled "after acceptance" rather than implying a live dashboard.

### 2.2 Enterprise form — already honest; wiring in PR A

`pages/enterprise.html` already posts to `window.MT_CONTACT.enterpriseEndpoint` and, when it is empty, says "Form delivery is not connected yet" with a mailto fallback (good). PR A points it at `/api/leads/enterprise` by default, keeping the Formspree-style override, and the `/api/health` probe decides which path shows.

### 2.3 Newsletter sign-up — ✔ confirmed defect

Every footer's `.sf-form` opens a `mailto:` with the address in the body. There is no list, no consent record, and no double opt-in. PR A posts to `/api/leads/newsletter` with explicit consent, shows success only after 2xx, and keeps the mailto as the explicit fallback when the API is absent. ⛔ Double opt-in e-mail needs the mail provider key.

### 2.4 Cross-device progress — ★ enhancement, seeded in PR A

Progress lives in `localStorage` (`mt-lms-mods:*`, `compass_*`, Career Map results in `sessionStorage`). PR A adds `/api/progress` (get/put JSON blobs keyed by namespace) and `js/mt-progress.js`, which mirrors the existing local keys to the server when a session exists and merges them back on login (last-write-wins by timestamp). Products keep working offline exactly as today.

### 2.5 Lifecycle communications — ⛔ dependency

Welcome, verification, reset, mentor status, enterprise acknowledgement templates are in `functions/lib/mail.js`. They require `RESEND_API_KEY` and a verified sending domain (SPF/DKIM/DMARC on `metanoialabs.net`). Marketing sequences also need a ⛔ business decision on tool (Resend audiences vs. a dedicated ESP) and are not built here.

### 2.6 Header search opens the Mind Palace — ✔ confirmed defect

The control is `<a class="nav-ico" href="pages/mind-palace" title="Search">`. `js/mob-footer.js` upgrades it to open the Cmd/Ctrl+K palette **only after `mob-footer.js` has mounted**, so a click before that script runs (it is `defer`-loaded and runs after the footer retrofit), on any page that does not load `mob-footer.js`, or inside the mobile sheet where the control is a duplicate `<a>` without the `title`, follows the link to the Mind Palace. PR B binds the palette at the control itself: an inline early handler on every page, a `data-site-search` attribute on both desktop and mobile controls, and an explicit empty and "no results" state with a link to the Mind Palace as the deliberate fallback.

---

## 3 · Product Integrity

### 3.1 Early & Mature Professional products — ✔ inconsistent status labels

Pricing says "Join the waitlist · In development". The product pages (`products/the-map`, `the-pack`, `the-rope`, `the-route`) are reachable from the EP/MP audience pages and carry Student/Fresh Graduate curricula with an "Early access" chip. Two statuses for one thing.

**Decision taken (PR B): label clearly rather than claim tailoring.** The EP/MP audience pages state which pillars are open today and that the curriculum shown is the Student & Fresh Graduate edition; the edition-specific content is listed in `data/build-status.js` under *coming*. ★ The tailored EP/MP curricula (career architecture, lateral moves, leadership before title, salary negotiation at mid-career) are an authoring programme of roughly 4 modules × 2 editions × 4 pillars; sequenced in §7 Phase 2. ⛔ Business decision: whether EP/MP editions are a paid tier at launch or a waitlist-only beta.

### 3.2 The Route — ✔ confirmed mismatch, Option B chosen

`pricing.html` and the homepage mobile string `prep.g4p@m` sell "Scholarships & What's Next: scholarship shortlisting, essay lab, application timeline". The product (`products/the-route`) is career architecture, workplace performance, finance and the second move. Nothing in the content registry covers scholarships.

**Remediation (PR B): reposition the promise to the product (Option B).** Pricing card, homepage strings, Route page description and build-status entry now describe what exists. ★ Option A (a scholarship module set) is recorded as a Phase 2 content item with a scoped outline (shortlisting criteria, statement lab, timeline, referee strategy, funding bodies in Indonesia and abroad) so it is not lost. ⛔ Business decision: whether scholarships belong in The Route or in a separate product.

### 3.3 Unsupported claims — ✔ confirmed

| Where | Claim | Reality | Fix (PR B) |
|---|---|---|---|
| `index.html` `climb.c1p`, `climb.c1p@m` | "Meta remembers your whole climb … calls the next move" | No AI coach with memory ships | Describes the AI interview simulator and coach as they exist today, labelled "in development" where appropriate |
| `index.html` `climb.c2p` | "Matched practice partners at your stage" | No matching exists | Describes peer practice via Basecamp sessions as "coming"; no matching claim |
| `index.html` `base.c1p`, `base.c2p`, `base.lede` | Cohorts of twenty, mentors one conversation away | No cohorts; mentors concierge-only | Rewritten to community intent + "concierge during beta" |
| `index.html` `summit.lede` | "Verified credentials that outrank pedigree" | No credentialing | Rewritten around portfolio evidence and interview readiness |
| `register.html`/`login.html` `.left-props` | "AI coaching, peer matching, and verified credentials" | Same | Lists what the account gives today |
| `pages/enterprise.html` line 1547 | "six to eighteen months of ramp time" | No source in repo | Removed; replaced with a sourced-free statement of the problem and a line that invites the organisation's own numbers (see 5.1) |

### 3.4 Company classification — ✔ confirmed defect (PR C)

`data/range/companies-db.js` maps the sector key `property` to the `energy-industrials` industry, so Agung Podomoro Land appears under Energy & Industrials. Adhi Karya is keyed `ind` ("industrial and manufacturing group") although it is a state-owned construction contractor; the `constr` key exists. The fix adds a `property-construction` industry (Property, Real Estate & Construction) in `data/range/graph.js`, re-keys the affected rows, audits every `ind` row against its description, and documents the framework (§6). Counts on pages are recomputed by the build.

### 3.5 Programmatic company pages — ✔ confirmed repetition (PR C)

`scripts/build-site.py` renders one editorial profile per function (`FN_META.profile`) and one of six "typical process" templates (`O.TYPICAL`). With twelve functions across 768 companies the same sentence recurs hundreds of times, and most pages share four stages. PR C adds industry-aware variants: profile and "what the work is" copy keyed by (function × industry group), and process templates per industry group with stage notes, all still labelled "our reading, not their published process". No invented facts about any company.

---

## 4 · Data & Measurement (item 6 — the flywheel)

### 4.1 Principle

Two data worlds that never meet in output: **individual** (a person's account, progress, assessment, applications) and **aggregate** (what the market and the cohort look like). The enterprise page already promises "aggregate, anonymised, above a minimum cohort threshold". The architecture enforces it structurally, not by policy alone.

### 4.2 Models (D1 schema, `migrations/0001_init.sql`)

| Table | Purpose | Identity |
|---|---|---|
| `users` | account (e-mail, password hash, role, audience, locale, consent versions) | `id` (ULID) |
| `sessions` | hashed session tokens, expiry, user agent | user id |
| `leads` | mentor / enterprise / newsletter submissions with consent JSON and status | e-mail |
| `progress` | per-user namespaced JSON (lms modules, compass, career map) with version | user id |
| `events` | product events: `subject_id` (HMAC of user id with a rotating key, or anonymous id), `name`, `props` JSON, `ts`, `audience`, `locale`, `page` | pseudonymous |
| `assessments` | Career Map results: dimension scores, target function/industry, audience, timestamp | `subject_id` only |
| `agg_daily` | materialised aggregates (counts, score distributions) by day × audience × function × industry; rows below `k = 20` are suppressed | none |

### 4.3 Event standard

`name` is `area.object.action` in snake case, e.g. `lms.module.completed`, `assessment.career_map.submitted`, `range.company.viewed`, `rope.simulation.finished`. Required props per event are listed in `docs/13-event-dictionary.md` (seeded with the first fifteen). The client wrapper is `js/mt-events.js`: `MT.track(name, props)` batches to `/api/events`, respects Do-Not-Track and the marketing-consent flag, and drops silently when the API is absent.

### 4.4 Aggregation and dashboards

A scheduled Worker (`functions/_scheduled` → `npx wrangler` cron, documented, ⛔ needs Cloudflare) rolls `events` and `assessments` into `agg_daily` nightly and deletes raw events older than 13 months. The Talent Readiness Report and Talent Market Intelligence views read **only** `agg_daily`. A `/api/admin/aggregates` endpoint serves them; an internal Metabase/Grafana connection to D1 is ⛔ a tooling decision.

### 4.5 Privacy, consent, retention

- Consent captured per submission; marketing opt-in is separate from service e-mail.
- `subject_id` keys are HMACs with a key that rotates every quarter; the key is a secret, never stored with the data.
- Raw events: 13 months. Assessments: for the life of the account, exportable and deletable. Aggregates: indefinite, because they contain no individual.
- k-anonymity threshold of 20 on every aggregate row; no employer ever receives a row below it. This is what makes the enterprise promise ("never individual scores") a property of the system.

---

## 5 · Content Accuracy

### 5.1 "Six to eighteen months of ramp time" — ✔ confirmed, uncited

Present on `pages/enterprise.html` line 1547 (EN and ID). No source exists in the repository and no published study supporting that exact range is cited. PR B replaces it with a claim-free framing. ? If the team has a source (an internal survey or a published report), the sentence can return with a citation.

### 5.2 Company counts — ✔ confirmed inconsistency

| Place | Says |
|---|---|
| `scripts/build-site.py` line 341 (directory titles) | 675 |
| `data/mindpalace.js` article + `pages/js/mind-palace.js` | 675 |
| `products/the-map/js/range-logo.js` comment | 675 |
| `index.html`, `data/build-status.js`, `products/the-map/index.html`, `pages/js/mind-palace.js` | 768 |
| `data/range/names.json` (generated) | 768 entries |

The database (`data/range/companies-db.js` plus sourced companies in `graph.js`) is the only source of truth. PR B makes the build write `data/range/stats.js` (`window.MT_RANGE_STATS`), renders every count through it (`data-range-stat="companies"`), and adds `scripts/check-range-counts.py` to the integrity gate so a hand-typed count can never drift again. The article keeps its URL slug (links exist) but its title no longer carries a number.

### 5.3 Duplicate URLs with `.html` — already handled; verify

`js/mob-footer.js` `canonicalise()` client-side redirects `/x.html` to `/x`, every page has a `<link rel="canonical">` without the extension, and `sitemap.xml` lists only extensionless URLs. GitHub Pages cannot issue a server-side 301, so both URLs return 200. ⛔ A real 301 needs Cloudflare in front (a `_redirects` file is included in PR B and takes effect on Cloudflare Pages). ? Check Search Console for indexed `.html` duplicates after the move.

### 5.4 `/landing` noindex — verified

`prototype/landing.html` line 5 carries `<meta name="robots" content="noindex,nofollow">` and the route is not in `data/routes.json`, so it is absent from the sitemap. Nothing to fix. A test in PR B asserts both so it stays that way.

---

## 6 · Brand & Commercial

### 6.1 AI coach name "Meta" — ? investigation + ⛔ legal

"Meta" is the trade name of Meta Platforms, Inc., registered in classes that include software and online services, and used in Indonesia. Using it as the name of an AI software feature is a likely conflict. Screening and clearance are ⛔ trademark counsel's call, not this repository's.

**Interim (PR B):** the name is removed from user-facing copy; the feature is called "the Metanoia coach" (descriptive, not a brand). The ID strings drop "Meta Assistant".

**Shortlist for screening** (descriptive of the mountaineering frame, no known tech-platform collisions found in a desk check, which is not a trademark search): *Sherpa* (generic guide; note cultural-appropriation sensitivity), *Belay* (the climber's safety partner), *Cairn* (trail marker), *Piton*, *Rime*. Recommendation: screen *Belay* and *Cairn* first.

### 6.2 Commercial readiness — ⛔ dependencies

Payments (Xendit for Indonesia, Stripe internationally) require merchant accounts, KYC and a legal entity; pricing is free during beta so nothing is blocked today. Terms and privacy are marked draft (`terms_version: '1.0-draft'`) and need ⛔ legal review before paid plans.

### 6.3 Enterprise readiness — ★

Aggregate reporting (§4), a DPA template, security questionnaire answers and SSO are Phase 2–3 items (§7).

---

## 7 · Technical Roadmap (item 3)

| Phase | When | Workstream | Deliverables | Depends on |
|---|---|---|---|---|
| **Now** (PR A–C) | this round | Production readiness, data integrity | Real auth API, hashed credentials, session cookies, lead capture with consent, admin review, events + progress endpoints, honest states, counts from one source, classification framework | Repo only; runs fully once Cloudflare Pages + D1 + secrets exist |
| **Immediate** | 1–2 weeks after merge | Infrastructure | Attach to Cloudflare Pages (same domain), create D1, apply migration, set `SESSION_SECRET`, `ADMIN_TOKEN`, `RESEND_API_KEY`, `LEADS_NOTIFY_TO`; enable `_redirects`; GA4 ID in `data/analytics.js` | ⛔ Cloudflare account, mail provider, GA property |
| **Immediate** | same | Legal | Privacy notice processors paragraph; terms out of draft; trademark screen of coach name | ⛔ counsel |
| **Phase 1** | 1–2 months | Growth infrastructure | Double opt-in, welcome sequence, GA4 + first-party events reconciled, Search Console review of duplicates, uptime + error monitoring (Sentry) | mail key, GA |
| **Phase 1** | same | Data | Nightly aggregation job, event dictionary complete, first Readiness Report from `agg_daily` | Cloudflare cron |
| **Phase 2** | 2–5 months | Product | Mentor portal + concierge matching tooling; EP/MP tailored curricula; Route scholarship module (if chosen); OAuth sign-in | authoring capacity; OAuth client IDs |
| **Phase 2** | same | Commercial | Xendit + Stripe, entitlements in `users`, purchases page wired | ⛔ merchant accounts, legal entity |
| **Phase 3** | 5–9 months | Enterprise | Aggregate dashboards for HR, DPA, SSO (SAML/OIDC), security questionnaire pack | customer contracts |
| **Phase 3** | same | Scale | Move to the planned Next.js/NestJS/Postgres stack (`docs/08`) if traffic or team size requires; the `/api/*` contract defined now is the migration seam | engineering hires |

---

## 8 · Dependency register (everything that is not in this repository)

| Dependency | Needed for | Owner |
|---|---|---|
| Cloudflare Pages project on `metanoialabs.net` (or any host that can run `/api/*`) | every account and lead feature | infrastructure / business |
| Cloudflare D1 database bound as `DB` | same | infrastructure |
| `SESSION_SECRET`, `ADMIN_TOKEN` secrets | auth, admin review | infrastructure |
| `RESEND_API_KEY`, `MAIL_FROM`, `LEADS_NOTIFY_TO`, verified sending domain | verification, reset, confirmations, notifications | infrastructure / marketing |
| GA4 Measurement ID | analytics (`data/analytics.js`) | marketing |
| Google / LinkedIn OAuth client IDs | social sign-in | infrastructure |
| Xendit / Stripe accounts, legal entity, KYC | payments | business / finance |
| Trademark screening of the coach name | brand | legal |
| Privacy notice & terms review | consent validity, processors list | legal |
| Source for any "ramp time" or market statistic | enterprise copy | marketing / research |
| Decision: EP/MP editions paid tier vs. waitlist beta | pricing copy, entitlements | business |
| Decision: scholarships inside The Route or separate | Option A build | product |
| Authoring capacity for EP/MP curricula and Route Option A | Phase 2 content | content |

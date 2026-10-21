# 17 · Backend infrastructure: the most cost-effective stack for accounts, lead capture, analytics and a personal data library

Prepared 21 October 2026. Prices and limits were checked against the vendors' own pages on that date and are quoted in USD unless marked; every figure that could move is marked *verify* and linked in §9. Nothing here commits the company to a vendor: §8 gives the exit path for each one.

## 0 · The recommendation in one table

| Layer | Recommendation | Why this and not the alternative | Monthly cost at launch → at 10k members |
|---|---|---|---|
| Static site + API, one origin | **Cloudflare Pages with Pages Functions** (code already in `functions/api/`), DNS moved from GitHub Pages | The API is written for it; `/api/health` answers from the same origin with no proxy; static requests are free and unmetered; a $5 plan removes every daily cap | $0 → $5 (Workers Paid) |
| Database | **Cloudflare D1** now (schema in `migrations/0001_init.sql`), created with the APAC location hint; **Neon Postgres in Singapore via Hyperdrive** when and only when a Postgres feature is needed | D1 is live the day the project is created, costs nothing at this scale, and the whole API already speaks to it. Postgres adds $5 to $25 a month and a rewrite of the data layer for a benefit the product does not need yet | $0 → $0 to $5 (D1) or $19 to $25 (Postgres) |
| Transactional e-mail | **Resend** (already wired in `server/lib/mail.js`) | 3,000 e-mails a month free; $20 for 50,000; the acknowledgement, magic-link and Career Map mails all go through one key | $0 → $20 |
| Lead capture | **One generic `POST /api/leads`** on the existing route, five lead types, consent and locale stored with every row, acknowledgement mail | The route, storage, rate limits, honeypot and admin review already exist for three types; two types and one dispatcher are missing | $0 |
| Analytics | **First-party events (built, `/api/events`) for the six product events + Umami Cloud for page visits**; Plausible if a hosted dashboard with a support contract is preferred; GA4 only if the marketing team needs ads attribution | First-party data never leaves the origin and needs no cookie banner; Umami's free plan covers 100k page views a month with no cookies and no personal data | $0 → $0 (Umami Hobby) or $9 (Plausible) |
| Accounts | **The existing e-mail + password API, with magic-link sign-in added first, Google sign-in second**; no third-party identity vendor yet | Clerk, Auth0 and Supabase Auth each add a vendor, a script and a data flow to disclose, for features the product does not need before 50k users | $0 |
| Payments (Indonesia) | **Xendit** as primary gateway (QRIS, virtual accounts, e-wallets, cards); Midtrans as the equivalent alternative | Both are local, PCI-handled, no monthly fee, IDR settlement; Stripe Indonesia only accepts virtual-account payments in IDR, no cards | 0 → per transaction (QRIS 0.63%, VA Rp 4,000, cards 2.9% + Rp 2,000, all plus 11% VAT, *verify*) |
| Payments (international, if ever) | **Paddle or Lemon Squeezy** as merchant of record | They collect VAT and sales tax abroad so the company never registers for foreign tax | 0 → about 5% + $0.50 per sale (*verify*) |
| Entitlements | **An `entitlements` table in the same database, read by the existing `MT_AUTH.me` call** | One place that says who may open what; the products already gate on the session | $0 |
| Legal | **UU 27/2022 (PDP Law) with PP 33/2026 in force from 16 January 2027**: privacy notice names every processor, consent per purpose, retention schedule, DPIA for the Career Map and events, breach runbook | Obligations already apply; the implementing regulation adds the DPIA and transfer rules before accounts are at scale | one legal review |

**Total:** $0 a month to launch everything in §2 to §4 on free tiers; about $25 to $35 a month once traffic clears the free tiers (Workers Paid $5, Resend $20, Umami or Plausible $0 to $9); about $45 to $60 a month if Postgres is added. Payments are per transaction only.

## 1 · Where the platform stands today

What exists in the repository and what the site does on GitHub Pages:

| Capability | State |
|---|---|
| `functions/api/` (health, auth, leads, events, progress, account, admin), `server/lib/` (PBKDF2 passwords, hashed sessions, rate limits, Resend mail), `migrations/0001_init.sql` (users, sessions, tokens, leads, progress, events, assessments, agg_daily, rate_limits), `workers/aggregate/` (nightly k-anonymous aggregation, 13-month purge) | Written, reviewed, documented in `docs/14`, never deployed |
| `prototype/js/mt-api.js`, `mt-auth.js`, `mt-events.js`, `mt-progress.js` | In every page; probe `/api/health`; show the honest "not open yet" states when it is absent |
| Hosting | GitHub Pages: static files only, so every account, form and event endpoint is dark |
| Lead types stored | `mentor`, `enterprise`, `newsletter` (CHECK constraint in the schema). Missing: `waitlist`, `careermap-result` |
| Career Map "e-mail me my result" | Posts the form to its `action` and shows "done" regardless of the response; nothing is stored, nothing is sent |
| Analytics | First-party event loader exists; GA4 slot empty; no page-view analytics at all |
| Privacy notice | Names GitHub Pages as the only processor; does not name Google Fonts, cdnjs, Cloudflare, Resend or any analytics vendor |

The single decision that unblocks everything is hosting (§2). Every other item in the request is a day or less of work on top of code that exists.

## 2 · Backend infrastructure and API hosting

### 2.1 The requirement, precisely

`GET https://metanoialabs.net/api/health` must return `{"ok":true}` from the same origin as the static site, so the browser code can keep using relative `/api/...` calls, cookies stay first-party (`SameSite=Lax`, no CORS, no third-party-cookie problems on iOS), and the honest offline states switch themselves off without a code change.

Two ways to get there:

- **Migrate the static site to a host that also runs the API.** One deploy, one origin, one DNS record.
- **Keep GitHub Pages and proxy `/api/*`.** Possible only by putting the domain behind a reverse proxy that can route by path (Cloudflare DNS with a Worker route on `/api/*` in front of GitHub Pages). It works, but it means two deploy pipelines, a proxied origin to debug, and GitHub Pages' certificate behind Cloudflare's. It saves nothing: the Worker route costs the same as Pages Functions.

Recommendation: migrate. The build is already a single command (`python3 scripts/build-site.py`, output `prototype/`), which is exactly what Cloudflare Pages runs.

### 2.2 Options compared

| Option | Region | Database | Pricing (free → first paid tier) | Fit with the code that exists | Verdict |
|---|---|---|---|---|---|
| **A. Cloudflare Pages + Pages Functions + D1** | Edge everywhere for the API; D1 placed with a location hint (`--location apac`, Singapore-adjacent) | D1 (SQLite-compatible, managed, point-in-time restore) | Free: 100k requests/day, 10 ms CPU per call, D1 5M row reads and 100k row writes per day, 5 GB storage. **Paid $5/month**: 10M requests, 25B row reads, 50M row writes per month included, then $0.30 per million requests, $0.001 per million reads, $1 per million writes | Written for it: every route, the schema, the cron worker, the deployment guide | **Recommended now.** Cheapest, zero rewrite, one origin |
| **B. Option A + Postgres in Singapore through Hyperdrive** (Neon or Supabase as the database) | Workers at the edge, Postgres in `ap-southeast-1` | Postgres with pooling and query caching at the edge; Hyperdrive is free (100k queries/day) and included unlimited on the $5 plan | $5 (Workers Paid) + Neon Launch (usage-based, about $0.106 per compute-hour plus $0.35 per GB-month storage; a small always-on database lands around $5 to $20) or Supabase Pro ($25, 8 GB, 100k MAU) | The HTTP layer stays; `env.DB.prepare(...).bind(...)` calls become a Postgres client; about two days of rewriting plus a migration of the schema | **The upgrade path**, taken when a Postgres-only feature is needed (row-level security, JSONB queries, extensions, BI tooling) |
| **C. Supabase as the whole backend** (Postgres + Auth + Edge Functions + Storage) with the static site on Cloudflare Pages or GitHub Pages and `/api/*` proxied to Supabase | Singapore region available at project creation | Postgres | Free: 500 MB database, 50k MAU, projects pause after a week idle. Pro $25/month: 8 GB, 100k MAU, 7-day backups | Replaces the auth, session, lead and event code with Supabase's; Edge Functions are Deno, not Pages Functions; cross-origin unless proxied | Good platform, but it throws away working code and adds a second origin or a proxy. Not cheaper |
| **D. Vercel (static + serverless, `sin1` region) + Neon** | Singapore function region on Pro | Neon Postgres Singapore | Hobby is non-commercial only; **Pro $20 per seat per month** plus usage | Functions must be rewritten from the Pages Functions signature; same-origin is fine | Four times the price of A for the same outcome |
| **E. A small VM or container host (Fly.io, Railway, a Singapore VPS) running Node + Postgres** | Singapore | Self-managed or managed Postgres add-on | $5 to $25 a month plus the database; plus patching, backups and uptime on the team | Everything rewritten as a server; the team owns the operating system | Highest operating burden; only sensible if a long-running process is ever required (it is not: the Rope avatar route is the only heavy call and it is already a Function) |

Reliability and security, briefly: A, B and C run on providers with public uptime history and SOC 2 reports; A and B keep every secret in Cloudflare's secret store and already enforce origin checks, rate limits, hashed sessions and PBKDF2 passwords (`docs/14 §4`). D1's free-tier caps started failing queries outright on 1 September 2026 once exceeded, which is one more reason to take the $5 plan the week accounts open.

### 2.3 Data residency and the Singapore preference

D1 is not pinned to a country; it is placed near the location hint and replicated for reads. Indonesia's PDP Law does not forbid cross-border transfer, it conditions it (adequate protection in the destination, or consent, or a binding agreement); PP 33/2026 adds the transfer arrangements (§6.5). Cloudflare's APAC placement, a processor agreement with Cloudflare, and the privacy notice naming Cloudflare and its region satisfy that for a product of this size. When the company wants a database in a named jurisdiction, option B with Neon or Supabase in `ap-southeast-1` gives it, for $5 to $25 a month.

### 2.4 Migration steps (the "2 to 3 days" in the roadmap)

1. Create the Pages project from the GitHub repository: build `pip install pillow && python3 scripts/build-site.py`, output `prototype`, Python 3.12 and Node 20 in the build environment.
2. `npx wrangler d1 create metanoia --location apac`; paste the id into `wrangler.toml` and `workers/aggregate/wrangler.toml`; `npx wrangler d1 migrations apply metanoia`.
3. Secrets: `SESSION_SECRET`, `SUBJECT_KEY`, `ADMIN_TOKEN`, `RESEND_API_KEY`. Verify `metanoialabs.net` in Resend (SPF, DKIM, DMARC).
4. Deploy `workers/aggregate` (cron 02:15 UTC).
5. Attach the custom domain; move DNS; keep the GitHub Pages workflow until `/api/health` and one real registration succeed on the new host; then disable it. The `_routes.json` file already limits Functions to `/api/*`, so every other request is a free static hit.
6. Take the Workers Paid plan ($5) before announcing anything, so the daily caps cannot fail a sign-up mid-campaign.

## 3 · Centralised lead capture and e-mail automation

### 3.1 Design

One route, one table, one acknowledgement path:

```
POST /api/leads
{ "type": "waitlist" | "enterprise" | "mentor" | "newsletter" | "careermap-result",
  "email": "...", "name": "...",
  "payload": { ...fields specific to the type... },
  "consent": { "terms": true, "marketing": false },
  "locale": "en" | "id", "source_page": "/pricing" }
→ 201 { "ok": true, "id": "01J...", "confirmation_email": true|false }
```

Changes to what exists (`functions/api/leads/[[route]].js`, `migrations/0001_init.sql`, `server/lib/mail.js`):

- Extend the `leads.kind` CHECK constraint to the five types (new migration `0002_lead_types.sql`).
- Add a dispatcher on `POST /api/leads` that validates by type and calls the existing `store()`; keep the three typed routes as aliases so nothing already wired breaks.
- `waitlist` payload: `product` (map, pack, rope, route, compass), `audience`, optional `note`. `careermap-result` payload: `assessment_id` or the scores block, `band`, `audience` (§5).
- Acknowledgement mails: `mailWaitlistReceived`, `mailCareerMapResult`, in both languages, from the same templates module. The server returns `confirmation_email: false` when `RESEND_API_KEY` is absent, and the pages already word their confirmation accordingly.
- Admin: the review page (`/admin/`) lists by `kind`; add the two kinds to its filter.

### 3.2 Wiring the forms

| Surface | Today | Change |
|---|---|---|
| Footer newsletter (every page) | `mailto:` fallback, API path when `/api/health` is up | None; already posts to `/api/leads/newsletter` |
| Enterprise form | Posts to `MT_CONTACT.enterpriseEndpoint`, else the API | Set `enterpriseEndpoint: '/api/leads'` with `type: 'enterprise'` in `data/contact.js` so the API is the default and a form service remains an override |
| Mentor application | Posts to `/api/leads/mentor` | None |
| "Not open yet" boxes on Early and Mature Professional pillars, the Route and Compass promos | Text only | A one-field waitlist form posting `type: 'waitlist'` with the product name |
| Career Map "e-mail me my result" | Fire-and-forget to the form's `action` | Post `type: 'careermap-result'` with the result; show "sent" only on 2xx (§5) |

Effort: one day after §2, as the roadmap says. Cost: zero beyond Resend volume (3,000 mails a month free, then $20 for 50,000).

### 3.3 Consent record

Every row keeps `consent_json` = `{terms_version, privacy_version, marketing, consented_at, method}`. Move the versions out of `1.0-draft` when the notice is published (§6.5). Marketing consent is separate from service mail, and the newsletter stays double opt-in.

## 4 · Privacy-respecting analytics

### 4.1 The six events

All six already have first-party names in `docs/13-event-dictionary.md` and are accepted by `/api/events`, keyed by an HMAC of the user or anonymous id, so no e-mail or IP ever sits next to an event:

| Requested event | First-party name | Emitted today |
|---|---|---|
| Page visit | `site.page.viewed` | No (add to `mt-events.js` on load) |
| Career Map started | `assessment.career_map.started` | Yes (`analytics.track('assessment_started')` maps to it) |
| Career Map completed | `assessment.career_map.submitted` (also writes `assessments`) | Yes |
| Lead captured | `lead.form.submitted` with `type` | Add in the `/api/leads` dispatcher server-side (no browser code) |
| Lesson started | `lms.lesson.opened` | Yes (player) |
| Lesson completed | `lms.lesson.completed` | Yes (player) |

The nightly worker rolls these into `agg_daily` with k = 20 suppression; the admin stats endpoint already reads it. That is the learning loop the roadmap calls "0.3", and it costs nothing.

### 4.2 Page-view analytics vendors compared

| Tool | Cost | Privacy | Implementation | Reporting |
|---|---|---|---|---|
| **Umami Cloud** | Hobby free (100k events a month, one site, 6 months retention, *verify*); Pro $20 (1M events) | No cookies, no personal data, GDPR and PDP-friendly without a banner; data processed by Umami (US) | One script tag in the shared head; custom events possible | Clean dashboard; adequate for a marketing team |
| **Plausible** | $9 a month (10k page views), $19 (100k); no free tier | Same model as Umami; EU-hosted | One script tag | Polished dashboard, goals, funnels, e-mail reports |
| **PostHog** | 1M events a month free, then usage-based | Cookie-less mode available; session replay is personal data and must be off or consented | SDK; heavier script | Product analytics (funnels, retention) that overlap the first-party aggregates |
| **GA4** | Free | Google is a processor; consent banner required for EU visitors; IP handling and ads linkage must be disclosed; `mt-events.js` already gates it behind Do-Not-Track and a consent flag | Measurement ID in `data/analytics.js` | Deep, but most of it unused by a five-person team |
| **Cloudflare Web Analytics** | Free with the hosting | Cookie-less, no personal data | Automatic on Pages | Page views and Core Web Vitals only; no custom events |

Recommendation: first-party events for product behaviour (already built), **Umami Cloud Hobby for page visits** (free, cookie-less, one line), and Cloudflare Web Analytics switched on because it is free. Move to Plausible ($9) if the team wants goals and e-mailed reports from a vendor with a support line. Leave GA4 empty unless paid acquisition starts; the loader already refuses placeholders.

### 4.3 Privacy notice: the processor list to publish

Hosting and API: Cloudflare (Pages, Functions, D1, APAC placement; US company). E-mail: Resend (US). Analytics: Umami Software (US) or Plausible Insights (EU), whichever is chosen; Cloudflare Web Analytics. Fonts: Google Fonts (requests to fonts.googleapis.com and fonts.gstatic.com reveal the visitor's IP to Google; self-hosting the three families removes the processor and is a one-hour change, recommended). Scripts: cdnjs (Cloudflare) on the Career Map page for html2canvas and jsPDF; self-host both to remove the entry. Payments, when live: Xendit or Midtrans (Indonesia). The notice should also state the APAC placement, the 13-month event retention, the account-lifetime retention for assessments, and the export and delete endpoints.

## 5 · Career Map results and personal data storage

### 5.1 Flow

1. The assessment finishes in the browser as today and emits `assessment.career_map.submitted`; the server writes the pseudonymous `assessments` row (exists).
2. "E-mail me my result" posts `type: 'careermap-result'` to `/api/leads` with the e-mail, the consent checkbox, the locale and the result (scores, band, audience, target function and industry). The server stores the lead, links it to the assessment by writing the lead id into a new `assessments.lead_id` column, and sends the result mail through Resend: the band, the five dimension scores, the three next actions, and a link.
3. The link is `/career-map-assessment?result=<token>`, a one-time 60-day token in the existing `tokens` table; opening it re-renders the report from the stored scores (no account needed) and offers "create your account with this e-mail". That is the "retrieval" mechanism, and it reuses the token code written for e-mail verification.
4. If the visitor creates an account, the registration handler claims every `careermap-result` lead with that e-mail and copies the scores into `progress` under the `career-map` namespace, so the result is in the member's library on day one.

### 5.2 Storage and consent

- `assessments` stays pseudonymous; only `lead_id` connects it to an e-mail, and only when the person asked for the mail.
- Consent captured on the form: service mail for the result (required), marketing (optional, separate).
- Retention: lead and assessment for 24 months if no account is created, then purged by the nightly worker; for the account's lifetime otherwise, exportable and deletable through `/api/account/export` and `/api/account/delete`.

### 5.3 Designed for the member library

`progress` is already a per-user, namespaced JSON store with versions (`lms`, `compass`, `career-map`, `rope`). The personal data library is that table plus the entitlements table in §6.3, surfaced in the portal. No new storage system is needed before 50k members; D1 or Postgres both hold it.

## 6 · Accounts, payments, entitlements, legal, ownership

### 6.1 Authentication

| Option | Cost | What it adds | Recommendation |
|---|---|---|---|
| **Existing API** (PBKDF2 passwords, hashed sessions, reset and verification tokens, rate limits) + **magic-link sign-in** (one new token kind, one mail template) + **Google sign-in** later (OAuth code flow in a Function, client id only) | $0 | No vendor, no script, no new processor; the browser client `MT_AUTH` already expects the cookie session | **Do this.** Magic link first because it removes password support tickets and makes the Career Map e-mail the sign-in |
| Supabase Auth | Free to 50k MAU, bundled with Pro $25 | Social providers, MFA, hosted UI | Only if option C in §2 is chosen |
| Clerk | Free to 50k monthly retained users; Pro $25 base, $0.02 per extra user (*verify*) | Hosted UI, organisations, MFA | Adds a US processor and a script to every page for features not needed yet |
| Auth0 | Free to 25k MAU; steep after | Enterprise SSO | For B2B SSO only, years away |

### 6.2 Payments

| Gateway | Fees (excl. 11% VAT unless noted, *verify* with the merchant dashboard) | Methods | Notes |
|---|---|---|---|
| **Xendit** | QRIS 0.63% (VAT-inclusive); virtual accounts Rp 4,000 (BCA via switcher plus the bank's fee); cards 2.9% + Rp 2,000; e-wallets 1.5% to 3.18% by provider; disbursement Rp 2,500; no setup or monthly fee | QRIS, VA, OVO, DANA, ShopeePay, LinkAja, cards, PayLater, invoices, subscriptions | Needs an Indonesian entity; settlement T+7 by default. Invoice API and hosted checkout mean no card data touches the site |
| **Midtrans** (GoTo) | QRIS 0.7% (0% on transactions up to Rp 100,000 under Bank Indonesia's policy from 1 October 2026); cards 2.9% + Rp 2,000; bank transfer about Rp 4,000; no setup fee | Same spread plus GoPay native | Snap hosted checkout; H+1 payout above Rp 50,000 |
| Stripe Indonesia | Not comparable | Virtual account only, IDR only, no cross-border | Not an option for cards or e-wallets today |
| Paddle / Lemon Squeezy (merchant of record) | About 5% + $0.50 per sale (*verify*) | International cards, wallets; they remit foreign VAT | For overseas buyers of the Route scholarship track, if that market opens |

Recommendation: **Xendit**, hosted checkout (Invoice) and its subscription API, with the webhook handled by a new `functions/api/billing/[[route]].js` that verifies the callback token and writes entitlements. Midtrans is a drop-in alternative with the same shape. Prices in the pricing page are already Rp 0 during beta, so billing can ship after accounts without blocking anything.

### 6.3 Entitlements

```sql
CREATE TABLE entitlements (
  id TEXT PRIMARY KEY, user_id TEXT NOT NULL, product TEXT NOT NULL,     -- map | pack | rope | route | compass | all
  plan TEXT NOT NULL,                                                   -- free | beta | member | enterprise
  source TEXT NOT NULL,                                                 -- xendit:<invoice_id> | admin | beta-grant
  starts_at TEXT NOT NULL, ends_at TEXT, status TEXT NOT NULL,          -- active | expired | cancelled
  created_at TEXT NOT NULL, updated_at TEXT NOT NULL
);
```

`GET /api/auth/me` returns the active entitlements; `tool-shell.js` and the product gates read `MT_AUTH.user.entitlements` instead of the `metanoia_premium` session flag. The free tier (Career Map, Module 1 of each product, the Range directory) is an entitlement granted at registration, so the same code path serves free and paid. Enterprise cohorts are a grant with `source = 'enterprise:<org>'` created from the admin page.

### 6.4 Legal and privacy compliance

- **Law**: UU 27/2022 (PDP Law) has applied in full since October 2024; **PP 33/2026**, promulgated 16 July 2026 and in force **16 January 2027**, sets the lawful bases, data-subject rights procedures, high-risk processing and DPIA, breach handling, processor contracts and international transfer arrangements. The supervisory agency is expected to be operating in 2026 to 2027. Penalty clauses were revised by Law 1/2026.
- **What that means for this stack**: (1) consent per purpose, recorded with version and time (built); (2) a privacy notice that names every processor and the transfer basis (§4.3); (3) a DPIA for the Career Map and the events pipeline, because scoring people's readiness is profiling; (4) a breach runbook naming who tells whom within the statutory window; (5) processor agreements: Cloudflare, Resend, the analytics vendor, the payment gateway all publish standard DPAs; (6) retention and deletion as in §5.2; (7) a record of processing activities, which `docs/13` and `docs/14` already approximate.
- **Children**: the Student audience may include people under 18; the registration form should collect date of birth or a majority confirmation and route minors to guardian consent, per the PDP Law's rules on children's data.

### 6.5 Team ownership

| Area | Owner | Standing duties |
|---|---|---|
| Hosting, DNS, secrets, deploys (Cloudflare, GitHub) | Technical lead | Rotate `SUBJECT_KEY` quarterly; review the Cloudflare bill monthly; keep `wrangler` and the build pinned |
| Database and migrations | Technical lead | Migrations only through `migrations/`; weekly D1 export to R2 or a private bucket; restore drill twice a year |
| E-mail deliverability (Resend, DNS records) | Marketing operations | Watch bounce and complaint rates; keep templates bilingual |
| Lead review and response (`/admin/`) | Growth or partnerships | Reply SLA two working days; status kept current so the stats are true |
| Analytics and the event dictionary | Product | New events only through `docs/13`; monthly review of `agg_daily` |
| Privacy, DPIA, notice, data-subject requests | Founder (accountable) with external counsel | Export and delete requests answered from the account endpoints within the statutory time; notice reviewed at every new processor |
| Payments and reconciliation | Finance | Xendit dashboard versus `entitlements` weekly; refunds through the gateway only |

## 7 · Costs by phase

| Phase | Services | Monthly |
|---|---|---|
| Launch (§2 to §5 live, under the free tiers) | Cloudflare Free, D1 Free, Resend Free, Umami Hobby, Cloudflare Web Analytics | **$0** (plus the domain, about $10 a year at Cloudflare Registrar) |
| First campaign (take the paid plans so nothing caps) | Workers Paid $5, Resend Pro $20, Umami Hobby or Plausible $9 | **$25 to $34** |
| Accounts at scale (10k members, cross-device progress, daily mail) | As above; D1 stays inside the $5 plan's included rows at this volume | **$25 to $34** |
| If Postgres is adopted (§2 option B) | Add Neon Launch (about $5 to $20) or Supabase Pro ($25); Hyperdrive included | **$30 to $60** |
| Payments | Per transaction only (§6.2); no fixed fee | 0 fixed |
| Identity vendor, if ever chosen | Clerk Pro $25 or Supabase Pro $25 | +$25 |

Usage-based risks to watch: Resend overage ($0.90 per 1,000 mails over the plan), D1 row writes from chatty event batches (the client already batches, cap stays at 50 per request), Umami events if page views pass 100k a month (then $20 or Plausible $19).

## 8 · Vendor dependency and exit

| Vendor | Lock-in | Exit |
|---|---|---|
| Cloudflare Pages / Functions | Functions use the standard `Request`/`Response` API and one `env.DB` binding | Any Workers-compatible runtime or a thin Node adapter; the static site deploys anywhere |
| D1 | SQLite dialect | `wrangler d1 export` gives a `.sql` file; the schema is plain SQL and loads into Postgres with minor type changes; option B is the planned route |
| Resend | One HTTPS call in `server/lib/mail.js` | Any transactional provider (Postmark, SES, Brevo) by replacing that module |
| Umami / Plausible | One script tag | Remove the tag; first-party events are unaffected |
| Xendit / Midtrans | Webhook handler and invoice calls | Both have the same hosted-checkout shape; entitlements are stored in the company's own table |

## 9 · Sources checked on 21 October 2026

- Cloudflare Workers and Pages Functions pricing and free limits: https://developers.cloudflare.com/workers/platform/pricing/
- Cloudflare D1 pricing and the free-tier enforcement change of 1 September 2026: https://developers.cloudflare.com/d1/platform/pricing/ and https://developers.cloudflare.com/changelog/post/2026-09-01-d1-free-tier-limit-enforcement/
- Cloudflare Hyperdrive pricing (free 100k queries a day, included on Workers Paid): https://developers.cloudflare.com/hyperdrive/platform/pricing/
- Neon pricing (Free, Launch, Scale) and regions (AWS Asia Pacific Singapore): https://neon.com/pricing and https://neon.com/docs/introduction/regions
- Supabase pricing (Free, Pro $25): https://supabase.com/pricing
- Vercel Hobby non-commercial restriction and Pro pricing: https://vercel.com/docs/plans/hobby
- Resend pricing (Free 3,000 a month, 100 a day; Pro $20 for 50,000; $0.90 per 1,000 overage): https://resend.com/pricing
- Umami Cloud, Plausible and PostHog free tiers: https://umami.is/pricing, https://plausible.io/#pricing, https://posthog.com/pricing
- Xendit fees: https://www.xendit.co/en/pricing and https://help.xendit.co/hc/en-us/articles/360039086452
- Midtrans fees and QRIS MDR: https://docs.midtrans.com/docs/pricing and https://docs.midtrans.com/docs/what-is-the-applicable-transaction-fee-for-qris
- Stripe accounts in Indonesia (virtual account and IDR only): https://support.stripe.com/questions/supported-payment-methods-currencies-and-businesses-for-stripe-accounts-in-indonesia
- Clerk pricing: https://clerk.com/pricing
- Indonesia PDP Law implementing regulation PP 33/2026 (RSM client alert, 18 September 2026) and Rajah & Tann update: https://www.rsm.global/indonesia/en/node/439 and https://www.rajahtannasia.com/viewpoints/indonesias-pdp-law-updates-dpa-u-s-trade-related-data-transfers-and-recent-court-rulings/

## 10 · Prioritised implementation roadmap

Effort assumes the technical lead working alone; "day" is a working day.

**Tier 0, week 1: unblock and capture**

| # | Action | Depends on | Effort |
|---|---|---|---|
| 0.1 | Cloudflare Pages project, D1 (`--location apac`), secrets, Resend domain, aggregation worker, DNS cut-over, Workers Paid; `/api/health` returns `{ok:true}` on `metanoialabs.net` (§2.4) | Cloudflare account, Resend account, DNS access | 2 to 3 days |
| 0.2 | Generic `POST /api/leads` with the five types, migration `0002`, acknowledgement templates (EN, ID), waitlist boxes wired, `MT_CONTACT.enterpriseEndpoint` set, admin filter (§3) | 0.1 | 1 day |
| 0.3 | `site.page.viewed` and `lead.form.submitted` events; Umami Hobby tag and Cloudflare Web Analytics on the shared head; privacy notice processor list, self-host fonts and the two cdnjs scripts (§4) | 0.1 | 0.5 day |
| 0.4 | Career Map result mail and retrieval token, `assessments.lead_id`, consent on the form (§5) | 0.2 | 1 day |
| 0.5 | Status table in the roadmap doc: mark Rope and Route live, add Discover and Mind Palace sizes, stamp the date in CI | none | 2 hours |
| 0.6 | Branded 404: **done (PR #411)**; `/about` → `/pages/about` redirect stub: **done in this change** (`prototype/about.html`, the same pattern as the retired product URLs) | none | done |
| 0.7 | Remaining "675": only the Mind Palace article slug `what-675-companies-tell-us` carries it; renaming the slug needs a redirect from the old URL, so either keep the slug or add the redirect in the same change | none | 30 minutes |

**Tier 1, weeks 2 to 5: accounts and the library**

| # | Action | Depends on | Effort |
|---|---|---|---|
| 1.1 | Magic-link sign-in (token kind, template, `/auth/magic`, `/auth/magic/consume`); Google sign-in after; registration claims Career Map results (§6.1, §5.1) | 0.1, 0.4 | 2 days + 1 day |
| 1.2 | Server persistence live for lesson progress, Compass and Career Map through `/api/progress`; export and delete in Settings surfaced; weekly D1 export (§5.3) | 1.1 | 2 days |
| 1.3 | Lifecycle mail: result → weakest gate → weekly nudge, all with unsubscribe, marketing consent respected | 0.4, 1.1 | 2 days |
| 1.4 | DPIA for the Career Map and events; breach runbook; processor agreements filed; privacy notice version 1.0 and consent versions bumped; minors' consent step (§6.4) | counsel | 1 week elapsed, 1 day of work |
| 1.5 | About page with the named team; content freeze on net-new lessons until 0.1 to 0.4 and 1.1 to 1.2 are live | none | as in the existing roadmap |

**Tier 2, weeks 6 to 10: money and access**

| # | Action | Depends on | Effort |
|---|---|---|---|
| 2.1 | `entitlements` table and migration; `/auth/me` returns them; product gates and `tool-shell.js` read them; free tier granted at registration; enterprise grants from admin (§6.3) | 1.1 | 2 days |
| 2.2 | Xendit account (Indonesian entity, KYC), hosted checkout for the member edition, subscription API, webhook route with signature check, reconciliation view in admin (§6.2) | 2.1, legal entity | 3 days + onboarding time |
| 2.3 | Pricing page switches from "Rp 0 during beta" to live prices with the status board auto-stamped | 2.2 | 0.5 day |
| 2.4 | Decide on Postgres (option B) only if a feature needs it; otherwise stay on D1 and revisit at 10k members | metrics | decision |

**Decision needed from the company this week:** the Cloudflare account owner and billing contact, the Resend account owner, confirmation that an Indonesian legal entity exists for the payment gateway, and the counsel who will review the notice and the DPIA. Everything else is in the repository.

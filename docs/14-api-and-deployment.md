# 14 · Accounts, Lead Capture & Data API — deployment guide

The static site (`prototype/`) now ships with a small server layer under `functions/api/` (Cloudflare Pages Functions) backed by a D1 database. It gives the platform real accounts, stored lead capture with consent, first-party product events, cross-device progress and an internal review surface — without a separate backend to run.

**It runs only where Pages Functions run.** GitHub Pages serves the static files alone; on that host every page detects the missing API (via `/api/health`) and shows its honest state: *accounts are not open on this site yet*, guest preview, e-mail fallback for applications and inquiries. Nothing is faked.

## 1. What is deployed where

| Path | Purpose |
|---|---|
| `functions/api/health.js` | `GET /api/health` — the probe every page uses |
| `functions/api/auth/[[route]].js` | register, login, logout, me, request-reset, reset, verify, resend-verify |
| `functions/api/leads/[[route]].js` | mentor applications, enterprise inquiries, newsletter (double opt-in) |
| `functions/api/events.js` | first-party product events (pseudonymous) |
| `functions/api/progress/[[route]].js` | per-user progress namespaces |
| `functions/api/account/[[route]].js` | export, delete, update (data-subject rights) |
| `functions/api/admin/[[route]].js` | lead review and aggregates, bearer `ADMIN_TOKEN` |
| `server/lib/*.js` | shared helpers: WebCrypto PBKDF2, sessions, rate limits, Resend mail |
| `migrations/0001_init.sql` | D1 schema |
| `workers/aggregate/` | nightly k-anonymous aggregation + retention (separate Worker, cron) |
| `prototype/_routes.json` | only `/api/*` invokes Functions; everything else is static |
| `prototype/js/mt-api.js`, `mt-auth.js`, `mt-events.js`, `mt-progress.js` | browser side |
| `prototype/mentors/apply.html` | mentor application form (public route `/mentors/apply`) |
| `prototype/admin/index.html` | internal review page (noindex, not in the sitemap) |

## 2. One-time setup (Cloudflare)

1. **Create the Pages project** from this repository: build command `python3 scripts/build-site.py` (needs `pip install pillow`), output directory `prototype`. Attach the custom domain `metanoialabs.net` and move DNS from GitHub Pages. Keep the GitHub Pages workflow until the switch is verified, then disable it.
2. **Database**: `npx wrangler d1 create metanoia` → paste the id into `wrangler.toml` (both files) → `npx wrangler d1 migrations apply metanoia`.
3. **Secrets** (`npx wrangler pages secret put NAME`):

   | Secret | Required | Purpose |
   |---|---|---|
   | `SESSION_SECRET` | yes | salts the IP hash on sessions; 32+ random bytes |
   | `SUBJECT_KEY` | yes for events | HMAC key that pseudonymises event subjects; rotate quarterly |
   | `ADMIN_TOKEN` | yes for review | bearer token for `/api/admin/*` and `/admin/` |
   | `RESEND_API_KEY` | optional | verification, reset, confirmations, lead notifications |

   Plain variables (already in `wrangler.toml` `[vars]`): `SITE_URL`, `MAIL_FROM`, `LEADS_NOTIFY_TO`.
4. **E-mail**: verify `metanoialabs.net` in Resend (SPF, DKIM, DMARC). Until the key exists the API works and reports `confirmation_email: false`; the pages word their confirmations accordingly.
5. **Aggregation Worker**: `cd workers/aggregate && npx wrangler deploy` with the same `database_id`; it runs daily at 02:15 UTC.
6. **Analytics**: put the GA4 Measurement ID in `prototype/data/analytics.js`. Placeholders are refused by the loader.
7. **Legal**: before launch, update `prototype/legal/privacy.html` to name Cloudflare (hosting, D1, jurisdiction) and Resend as processors, and move the terms/privacy versions out of `1.0-draft` (the consent records carry the version strings from `functions/api/auth` and `functions/api/leads`).

## 3. Local development

```bash
npm i -D wrangler
npx wrangler d1 migrations apply metanoia --local
npx wrangler pages dev prototype --binding SESSION_SECRET=dev --binding SUBJECT_KEY=dev --binding ADMIN_TOKEN=dev --binding SITE_URL=http://127.0.0.1:8788
```

`http://127.0.0.1:8788/register` then creates real rows in `.wrangler/state`. Without the API (`python3 -m http.server` in `prototype/`) the same pages show their offline states.

## 4. Security properties

- Passwords: PBKDF2-SHA-256, 210 000 iterations, 16-byte salt, stored as `pbkdf2-sha256$iter$salt$hash`. A constant-time compare; a dummy hash is verified on unknown e-mails so timing does not reveal account existence.
- Sessions: 256-bit random token in an `HttpOnly; Secure; SameSite=Lax` cookie; only its SHA-256 is stored; 30-day expiry; all sessions revoked on password reset or account deletion.
- CSRF: every state-changing route rejects a mismatched `Origin`. Cookies are `SameSite=Lax`.
- Rate limits (D1 fixed windows): register 10/h per IP; login 30/15 min per IP and 10/15 min per e-mail; reset 10/h; leads 20/h per IP; events 600/10 min.
- Input: JSON only, 64 KB cap (events 128 KB), every field clipped and validated; honeypot `_gotcha` on lead forms.
- No secret ever reaches the browser: the old `localStorage` credential store is removed and purged on first load (`js/mt-auth.js`).
- Pseudonymity: `events.subject_id` = HMAC(`SUBJECT_KEY`, user id or anonymous id). Deleting an account leaves its events unlinkable.
- Aggregates: `agg_daily` rows are written only when a group has 20 or more distinct subjects.

## 5. Endpoints the pages rely on

| Page | Calls |
|---|---|
| `register.html`, `login.html` | `/auth/register`, `/auth/login`, `/auth/me`, `/auth/request-reset`, `/auth/reset` |
| `portal.html`, products, `settings.html` | `/auth/me`, `/progress/browser`, `/auth/logout` |
| `mentors/apply.html` | `/leads/mentor` |
| `pages/enterprise.html` | `/leads/enterprise` (or `data/contact.js` endpoint when set) |
| every footer | `/leads/newsletter` |
| `career-map-assessment.html` | `/events` |
| `admin/index.html` | `/admin/leads`, `/admin/stats` |

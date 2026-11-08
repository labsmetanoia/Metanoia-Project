# 14 · Accounts, Lead Capture & Data API — deployment guide

The static site (`prototype/`) now ships with a small server layer under `functions/api/` (Cloudflare Pages Functions) backed by a D1 database. It gives the platform real accounts, stored lead capture with consent, first-party product events, cross-device progress and an internal review surface — without a separate backend to run.

**It runs only where Pages Functions run.** GitHub Pages serves the static files alone; on that host every page detects the missing API (via `/api/health`) and shows its honest state: *accounts are not open on this site yet* with the waitlist box, e-mail fallback for applications and inquiries. Nothing is faked.

## 1. What is deployed where

| Path | Purpose |
|---|---|
| `functions/api/health.js` | `GET /api/health` — the probe every page uses; `accounts` mirrors `AUTH_ENABLED`, and while it is false the login and register pages show "accounts are not open" with the waitlist box; the products themselves are for signed-in members only |
| `functions/api/auth/[[route]].js` | register, login, logout, me, request-reset, reset, verify, resend-verify |
| `functions/api/leads/[[route]].js` | mentor applications, enterprise inquiries, newsletter (double opt-in), waitlist (login and register pages while accounts are closed; needs `migrations/0002_leads_kinds.sql`) |
| `functions/api/events.js` | first-party product events (pseudonymous) |
| `functions/api/results/[[route]].js` | Career Map "e-mail me my report": stores a `results` lead with scores and answers, sends the summary with a signed 90-day link; `GET /api/results/:id?sig=` rebuilds the report on the assessment page |
| `functions/api/progress/[[route]].js` | per-user progress namespaces |
| `functions/api/account/[[route]].js` | export, delete, update (data-subject rights) |
| `functions/api/admin/[[route]].js` | lead review and aggregates; a signed-in account with the `admin` role (same-origin for writes) or bearer `ADMIN_TOKEN` |
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
   | `ADMIN_TOKEN` | optional | bearer token for `/api/admin/*` and `/admin/`, the fallback when no admin account is signed in (accounts from `ADMIN_EMAILS` open the page by themselves) |
   | `RESEND_API_KEY` | optional | verification, reset, confirmations, lead notifications. Resend shows a key once, at creation: paste it into the Pages secret and the password manager in the same sitting, or create a new one (sending access, domain `metanoialabs.net`) |
   | `TURNSTILE_SECRET_KEY` | optional | secret half of the Turnstile widget "metanoia-forms" (invisible mode); the public site key is in `prototype/data/security.js`. With the secret set, every lead submission and registration must carry a valid token (`js/mt-turnstile.js` obtains one at submit time); without it the check is skipped |
   | `ADMIN_EMAILS` | optional | comma-separated addresses that may register while `AUTH_ENABLED` is `false` ("invite" mode); they get the `admin` role, and an existing account on the list is promoted at its next sign-in. The public pages keep the guest preview |

   Plain variables (already in `wrangler.toml` `[vars]`): `SITE_URL`, `MAIL_FROM`, `LEADS_NOTIFY_TO`, `AUTH_ENABLED`, `MEDIA_BASE`, `BETA_ENDS_AT`.
   Accounts switch (`server/lib/http.js` `accountsMode`): `AUTH_ENABLED=true` → open to everyone; else `ADMIN_EMAILS` set → invite; else closed (`/api/auth/*` answers 404). `/api/health` reports it as `accounts: true | "invite" | false` and the login and register pages word themselves accordingly.
   Passwords: PBKDF2-SHA-256 at 100,000 iterations, the Workers ceiling (deriveBits throws above it); stored hashes carry their own count.
4. **E-mail**: verify `metanoialabs.net` in Resend (SPF, DKIM, DMARC). Until the key exists the API works and reports `confirmation_email: false`; the pages word their confirmations accordingly.
5. **Aggregation Worker**: `cd workers/aggregate && npx wrangler deploy` with the same `database_id`; it runs daily at 02:15 UTC.
6. **Analytics**: put the GA4 Measurement ID in `prototype/data/analytics.js`. Placeholders are refused by the loader.
7. **Legal**: before launch, update `prototype/legal/privacy.html` to name Cloudflare (hosting, D1, jurisdiction) and Resend as processors, and move the terms/privacy versions out of `1.0-draft` (the consent records carry the version strings from `functions/api/auth` and `functions/api/leads`).

### 2b. How a change reaches production (since 2026-11-08)

1. Work happens on a branch; a pull request to `main` runs the integrity check (build, link and punctuation checks). Only green pull requests are merged.
2. Every merge to `main` triggers a Cloudflare Pages production build (project `metanoia-labs`, production branch `main`, Automatic deployments on): clone, `pip install pillow && python3 scripts/build-site.py`, upload. About four minutes. No manual step. GitHub Actions no longer deploy the site; `deploy-pages.yml` is a manual fallback only.
3. During that build `MEDIA_BASE` points the lesson registries at R2 and drops `assets/lms` from the output, and `stamp_assets()` appends `?v=<content hash>` to every local script and stylesheet reference, so a new page never runs against a cached older script.
4. Visibility: HTML, scripts and styles carry `Cache-Control: max-age=600, must-revalidate`, so the edge and browsers pick a deploy up within ten minutes; the stamped references make scripts and styles effectively immediate. Caching → Purge Everything in the Cloudflare dashboard forces it.
5. Media changes (`prototype/assets/lms/**`) are pushed to R2 by `sync-media.yml` on merge. Schema changes (`migrations/*.sql`) are applied by `d1-migrate.yml` on merge (GitHub secrets `CLOUDFLARE_API_TOKEN`, an account token with D1, Workers Scripts and Cloudflare Pages edit rights, expiring 8 November 2027, and `CLOUDFLARE_ACCOUNT_ID`; both set 2026-11-08). The same token drives `deploy-worker.yml` (the nightly aggregation Worker, on changes under `workers/aggregate/`), `d1-backup.yml` (a SQL export of the database every night at 19:47 UTC, encrypted with AES-256 under the `BACKUP_PASSPHRASE` GitHub secret because the repository is public and artifacts are downloadable, kept 90 days as a workflow artifact; restore: `openssl enc -d -aes-256-cbc -pbkdf2 -iter 600000 -in <file>.sql.enc -out backup.sql`, then `wrangler d1 execute metanoia --remote --file backup.sql`) and `health-check.yml` (probes `/api/health` every 30 minutes and opens or closes an issue labelled `outage`).
6. Secrets typed into the dashboard (`ADMIN_EMAILS`, `RESEND_API_KEY`, …) take effect only on the next deployment. Cloudflare shows Retry deployment only on a failed build, so when the latest build is green the trigger is any merge to `main`, a documentation commit included. `/api/health` confirms the result (`mail`, `accounts`).

### 2a. Tier 0 order of work (Cloudflare Pages, zero cost)

Do these in this order; each later step needs the earlier one.

1. **Domain**: Cloudflare → Domains → Add a domain → `metanoialabs.net`, Free plan. Keep the scanned GitHub Pages records (apex `A` ×4, `www` CNAME) and set them to Proxied. Change the nameservers at the registrar. The site keeps serving from GitHub Pages meanwhile.
2. **R2 for the lesson media**: Storage & databases → R2 → Create bucket `metanoia-media` (location hint APAC). Settings → Custom domain → `media.metanoialabs.net`. Create an R2 API token (object read & write, this bucket) and add `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY` as GitHub repository secrets; run the "Sync lesson media to R2" workflow once. Check `https://media.metanoialabs.net/lms/captions-en.vtt` loads.
3. **D1**: Storage & databases → D1 → Create `metanoia` (location APAC). Paste its id into `wrangler.toml` and `workers/aggregate/wrangler.toml`; apply `migrations/0001_init.sql` (D1 console, or `npx wrangler d1 migrations apply metanoia --remote`).
4. **Pages project** (exists: `metanoia-labs`, preview host `metanoia-labs.pages.dev`): Compute → Workers & Pages → `metanoia-labs` → Settings. Framework preset must be **None**; the project was once created with the Next.js preset, whose `npx @cloudflare/next-on-pages` command fails every build. Build command `pip install pillow && python3 scripts/build-site.py`, output directory `prototype`, production branch `main`. Plain variables (`MEDIA_BASE`, `SITE_URL`, `AUTH_ENABLED`, …) live in `wrangler.toml` `[vars]`: once that file exists Pages ignores variables typed into the dashboard, which is how the first production build uploaded the 2 GB media folder and failed on a 35 MiB video. `MEDIA_BASE=https://media.metanoialabs.net` makes the build rewrite the media paths and drop `assets/lms` from the output; without it the build now stops on Pages with a message. Only secrets go in the dashboard, and only the ones the API itself reads: `SESSION_SECRET`, `SUBJECT_KEY`, `ADMIN_TOKEN`, `RESEND_API_KEY`, `ADMIN_EMAILS`, `TURNSTILE_SECRET_KEY` (all set 2026-11-08). Secrets that drive GitHub Actions (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `BACKUP_PASSPHRASE`, the `R2_*` keys) belong in the repository's Actions secrets, never in the Pages project, where they would be exposed to the site's runtime for nothing. `AUTH_ENABLED` is `true` since 2026-11-08 (open registration, Tier 1); `BETA_ENDS_AT = 2026-11-22` is shown on the pricing page and reported by `/api/health`, and nothing locks on that date without an explicit decision on memberships. D1 is bound as `DB` from `wrangler.toml`.
   Set Branch control → preview deployments to None: builds of working branches only spend the 500 free builds a month.
5. **Custom domain on Pages**: Custom domains → `metanoialabs.net` and `www.metanoialabs.net`; Cloudflare replaces the GitHub records with CNAMEs to `metanoia-labs.pages.dev`. Do this only after one production build is green, otherwise the domain answers 522 until it is. Test `/api/health` and one lesson video. Done 2026-11-08; the GitHub Pages workflow is now `workflow_dispatch` only.
   **Rollback to GitHub Pages** (Cloudflare outage): remove both custom domains from the Pages project, delete the two CNAMEs and add, Proxied, apex `A` 185.199.108.153 / .109.153 / .110.153 / .111.153 and `www` CNAME `labsmetanoia.github.io`; run "Deploy prototype to GitHub Pages" by hand if the GitHub copy is stale.
6. **E-mail** (can be later): Resend, domain `mail.metanoialabs.net`, `RESEND_API_KEY` secret, `MAIL_FROM` updated.

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

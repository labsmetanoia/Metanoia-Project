# 14 · Accounts, Lead Capture & Data API — deployment guide

The static site (`prototype/`) now ships with a small server layer under `functions/api/` (Cloudflare Pages Functions) backed by a D1 database. It gives the platform real accounts, stored lead capture with consent, first-party product events, cross-device progress and an internal review surface — without a separate backend to run.

**It runs only where Pages Functions run.** GitHub Pages serves the static files alone; on that host every page detects the missing API (via `/api/health`) and shows its honest state: *accounts are not open on this site yet* with the waitlist box, e-mail fallback for applications and inquiries. Nothing is faked.

## 1. What is deployed where

| Path | Purpose |
|---|---|
| `functions/api/health.js` | `GET /api/health` — the probe every page uses; `accounts` mirrors `AUTH_ENABLED`, and while it is false the login and register pages show "accounts are not open" with the waitlist box; the products themselves are for signed-in members only |
| `functions/api/auth/[[route]].js` | register, login, logout, me, request-reset, reset, verify, resend-verify; magic/request and magic/consume (one-time sign-in links, 15 minutes); sessions list and revoke; oauth/:provider/start and callback (Google, LinkedIn via `server/lib/oauth.js`) |
| `functions/api/leads/[[route]].js` | mentor applications, enterprise inquiries, newsletter (double opt-in), waitlist (login and register pages while accounts are closed; needs `migrations/0002_leads_kinds.sql`) |
| `functions/api/events.js` | first-party product events (pseudonymous) |
| `functions/api/results/[[route]].js` | Career Map "e-mail me my report": stores a `results` lead with scores and answers, sends the summary with a signed 90-day link; `GET /api/results/:id?sig=` rebuilds the report on the assessment page |
| `functions/api/progress/[[route]].js` | per-user progress namespaces |
| `functions/api/account/[[route]].js` | export, delete, update (data-subject rights) |
| `functions/api/admin/[[route]].js` | lead review and aggregates; a signed-in account with the `admin` role (same-origin for writes) or bearer `ADMIN_TOKEN` |
| `server/lib/*.js` | shared helpers: WebCrypto PBKDF2, sessions, rate limits, Resend mail |
| `migrations/0001_init.sql` | D1 schema |
| `workers/aggregate/` | nightly k-anonymous aggregation + retention (separate Worker, cron) |
| `prototype/_routes.json` | only `/api/*` and the public profile pages `/p/*` invoke Functions; everything else is static |
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
   | `GOOGLE_CLIENT_SECRET` | optional | secret half of the Google OAuth client; the client id is `GOOGLE_CLIENT_ID` in `wrangler.toml` `[vars]`. Both set → the "Continue with Google" button is live (§2c) |
   | `LINKEDIN_CLIENT_SECRET` | optional | same for LinkedIn (`LINKEDIN_CLIENT_ID` in `[vars]`) |
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

### 2c. Social sign-in setup (Google, LinkedIn; both free)

Each provider needs an app the account owner creates. Redirect URI for both: `https://metanoialabs.net/api/auth/oauth/<provider>/callback` (the flow runs on the `SITE_URL` host; a start on `www` is redirected there first so the state cookie is sent back).

- **Google**: console.cloud.google.com → create or pick a project → APIs & Services → OAuth consent screen (External, app name Metanoia Labs, support and developer e-mail hello@metanoialabs.net, scopes `openid`, `email`, `profile`; publish the app so sign-in is not limited to test users; no verification is required for these scopes) → Credentials → Create credentials → OAuth client ID → Web application → Authorised JavaScript origins `https://metanoialabs.net`, Authorised redirect URI `https://metanoialabs.net/api/auth/oauth/google/callback`. The client id goes into `wrangler.toml` `GOOGLE_CLIENT_ID`; the client secret into the Pages secret `GOOGLE_CLIENT_SECRET`.
- **LinkedIn**: linkedin.com/developers → Create app (needs a LinkedIn Company Page for Metanoia Labs) → Products → request "Sign In with LinkedIn using OpenID Connect" (approved instantly) → Auth tab → Authorised redirect URL `https://metanoialabs.net/api/auth/oauth/linkedin/callback`. Client ID → `LINKEDIN_CLIENT_ID`; Primary Client Secret → Pages secret `LINKEDIN_CLIENT_SECRET`.
- A new deployment loads the secrets; `/api/health` then reports `oauth: { google: true, linkedin: true }` and the buttons on `/login` and `/register` turn live by themselves. Accounts created this way have no password (`pw_hash` empty) and a row in `identities`; the member can set a password later from the reset flow.

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

### Progress across devices

`mt-progress.js` (loaded by the portal, the products and Settings) mirrors the tracked browser keys to `/api/progress/browser` as a keyed document `{ keys, times, deleted }`: every write is stamped when it happens (`Storage.setItem` is wrapped), removed keys leave a tombstone, and the snapshot is pushed a few seconds after the last write, when the tab is hidden and when the page closes. On load, and when a tab returns after a minute away, the account copy is pulled and applied key by key, the newer write winning; a device that receives new progress right after load reloads once so the product renders with it, later changes raise the `mt:progress` event. The server merges with the same rule (`server/lib/progress.js`), so two devices never overwrite each other wholesale; tombstones expire after 90 days. Keys over 64 KB and anything beyond a 700 KB snapshot stay on the device (Settings shows how many). Device preferences (theme, language, cookie choices) are not synced. Settings, Privacy & Data shows the last sync time and offers a manual sync.

### Lifecycle mail (Tier 1 stage 3)

Two messages beyond the transactional ones, both sent by the scheduled Worker (`workers/aggregate`, 00:30 UTC) through `server/lib/lifecycle.js`:

- **Weakest dimension**: two to five days after a Career Map result whose owner ticked the e-mail option, one message naming the lowest-scoring dimension and the product built for it, with the signed link back to the report.
- **Weekly summary**: for verified members who opted in (the registration checkbox, or Settings › Notifications), a week after joining and at most once a week since: the products they touched, the dimension their Career Map still points at, one link back to the portal.

Rules: every lifecycle message is sent once per (kind, row), only to addresses with marketing consent that have not unsubscribed, and carries a one-click unsubscribe link in the body plus the `List-Unsubscribe` and `List-Unsubscribe-Post` headers. `/api/mail/unsubscribe` (GET from the link, POST from mail clients) sets `unsubscribed_at` on the user or the result lead and shows a short confirmation page; service mail is unaffected. Quota classes: every message is logged in `mail_log` (class, kind, recipient hash, day, status); transactional mail is never held back, lifecycle mail stops at 60 a day and 2,400 a month, under the Resend free tier (100 a day, 3,000 a month). `/api/admin/stats` reports today's and this month's counts per class.

One-time setup: migration `0004_lifecycle_mail.sql` is applied by the D1 workflow on merge. The Worker needs two secrets in Workers & Pages → metanoia-aggregate → Settings → Variables and Secrets: `RESEND_API_KEY` (the same key as the Pages project) and `SESSION_SECRET` (the same value as the Pages project, or the unsubscribe and result links it signs will not verify). A dry run that counts without sending: `curl -H "Authorization: Bearer $ADMIN_TOKEN" "https://metanoia-aggregate.<account>.workers.dev/?job=lifecycle&dry=1"` once the Worker's `ADMIN_TOKEN` secret is set.

### Entitlements (Tier 1 stage 4)

`entitlements` (migration 0005) holds one row per grant: product (`all` or a slug), plan (`free`, `beta`, `founding`, `member`, `enterprise`), source, start, optional end, status. `GET /api/auth/me` (and the register, login and magic-link responses) return the resolved access `{ mode, plan, all, products: { slug: { plan, ends_at, source } }, beta_ends_at, founding }` next to the user; `js/mt-auth.js` mirrors it to `sessionStorage.metanoia_access` and the five product gates read it per product, re-checking when the fresh answer arrives (`mt:access` event). The free tier is written at registration for every sign-up path.

`ACCESS_MODE` in `wrangler.toml` is the switch: `beta` (today) opens every product to every signed-in member regardless of rows, and stays in force past `BETA_ENDS_AT` until it is flipped, so nothing changes on that date by itself; `entitlements` opens a product only with an active row. Rows are written in both modes, so the flip changes nothing retroactively. Settings › Subscription shows the resolved plan and the founding badge (accounts created before the beta end, `users.founding`).

Admin (`/admin/`, Access panel, or the API): `GET /api/admin/users?founding=1` is the founding list (the panel exports it as CSV); `GET /api/admin/entitlements?user=<e-mail or id>` shows a member's grants and resolved access; `POST /api/admin/entitlements { user, product, plan, ends_at?, note? }` grants; `POST /api/admin/entitlements/founding { product?, plan?, ends_at?, note? }` gives every founding member one grant they do not yet hold; `DELETE /api/admin/entitlements/:id` revokes. Stats report the mode, the founding count and the active grants.

### Data rights (Tier 1 stage 5)

- **Export**: `GET /api/account/export` returns everything held about the signed-in member as one JSON file: profile and consent, linked sign-in identities, entitlements, sessions, synced progress, every lead with that address, the log of e-mail sent to it, and the pseudonymous events and assessments that resolve to the account's subject id.
- **Deletion**: a password account confirms with its password; a passwordless account (magic link, Google, LinkedIn) receives a confirmation link valid for one hour (`/api/account/delete/confirm`). On confirmation the account is marked, every device is signed out, sign-in is blocked, and an e-mail with a cancel link goes out (`/api/account/delete/cancel`, valid until the purge). The scheduled Worker purges confirmed requests at least two hours later and at least every six hours, so always within 24 hours: leads, tokens, progress, sessions, identities, entitlements, the mail log for that address and the user row, after one final confirmation e-mail. Events and assessments stay as pseudonymous statistics that no longer resolve to anyone. The login page explains each state (`?deletion=scheduled|cancelled|invalid`).
- **Admin**: `GET /api/admin/users.csv?founding=1` exports members as CSV; `GET /api/admin/funnel?days=30` reports the path from page view to grant (visitors, Career Map started and completed, result e-mailed, accounts created, verified, active, weekly opt-in, grants) with all-time totals including pending deletions. The admin page shows both in the Funnel and Access panels.

### Feedback, audit trail, install (platform audit of 2026-11-15, docs/20)

- **Feedback**: `POST /api/feedback { kind, message, rating?, contact?, page?, locale? }` from `js/mt-feedback.js` (portal, settings, purchases, help). The five products load `js/mt-feedback-lazy.js` instead: a 2 KB launcher that fetches the dialog on first press, so their script budgets hold. Stored in `feedback` (migration 0007); no mail is sent. Ten an hour per address; guests pass Turnstile when it is configured.
- **Admin**: `GET /api/admin/feedback`, `PATCH /api/admin/feedback/:id`, `GET /api/admin/leads.csv`, `GET /api/admin/audit`. Every admin write and export adds a row to `admin_audit`. CSV cells that start with `= + - @` are prefixed with `'`. Bearer-token requests are limited to 300 per fifteen minutes per address.
- **Accounts**: `GET /api/auth/me` answers `200 { user: null }` for a guest. The admin role is given only to a proven address (verification link, magic link, OAuth), never at password registration. A proven sign-in on an unverified password account clears that password and ends its sessions. `/api/rope/avatar/*` needs a signed-in member.
- **Install**: `manifest.webmanifest` at the site root, linked from every page; `js/mt-install.js` (portal) registers the service worker and reveals `[data-install-app]` when the browser offers installation.

### Error reports, owner digest, self-hosted export libraries (short-term roadmap of docs/20, 2026-11-15)

- **Script errors**: `js/mt-errors.js` is on every page (and in `scripts/lib/shell.py` for the generated ones). It posts `site.script.error` to `/api/events`. `GET /api/admin/errors?days=` groups them by message and page; the admin page shows them under **Script errors**.
- **Owner digest**: `server/lib/digest.js`. The aggregation Worker sends it on Mondays at 00:30 UTC (07:30 WIB) to `LEADS_NOTIFY_TO` (set in `workers/aggregate/wrangler.toml`), once per ISO week, logged in `mail_log` as `owner-digest`. `GET /api/admin/digest` previews it, `POST /api/admin/digest` sends it now (audited), and the Worker accepts `?job=digest[&force=1]` with the admin token. It uses about four of the 3,000 free monthly e-mails.
- **Export libraries**: html2canvas 1.4.1 and jsPDF 2.5.1 (both MIT) live in `prototype/js/vendor/` and are fetched only when a visitor downloads the Career Map report. No page loads a script from another host any more, so `cdnjs.cloudflare.com` is gone from the `script-src` policy in `_headers`.

### Sample lesson, certificates, trends (medium-term roadmap of docs/20, 2026-11-15)

- **Sample lesson**: `/products/<the-map|the-pack|the-rope|the-route>/?sample=1` lets a guest read the first lesson. The page gate sets `window.MT_SAMPLE`; `js/lms-player.js` then opens lesson one only, and `js/lms-extras.js` (fetched on demand) adds the bar and the prompt that lead to a free account. The login and register pages offer the sample when the visitor was sent there from one of those products. Progress made in the sample stays in the browser and joins the account once it exists.
- **Certificates**: `POST /api/certificates { product }` issues a certificate when every core lesson (bonus and appendix modules excluded) is complete in the member's synced progress. The lesson list is `data/lms/<product>/manifest.json`, written by the build and read through `env.ASSETS`. `GET /api/certificates/:id` is the public verification used by `certificate.html` (`/certificate?c=<id>`, noindex): name, product, lesson count and date, never the address. Table `certificates` (migration 0008); included in the account export and removed by the account purge.
- **Trends**: `GET /api/admin/trends?days=` returns one number per UTC day for accounts, active members, visitors, Career Map completions, leads, feedback, certificates and script errors. The admin page draws them as inline SVG bar charts under **Trends**.

### AI coach (docs/21 N-01, 2026-11-16)

- **What it is**: one review of one interview answer or one CV bullet by an open model on Cloudflare Workers AI, through the `AI` binding declared in `wrangler.toml`. `server/lib/coach.js` holds the prompts, the parsing and the limits; `functions/api/coach.js` is the member endpoint; `js/mt-coach.js` is the dialog (portal footer, and a row per answer in The Rope's report).
- **Staying free**: Cloudflare gives 10,000 Neurons a day. The site keeps its own budget below that (`COACH_DAILY_NEURONS`, default 8,000) and a per-member limit (`COACH_PER_MEMBER`, default 6), both counted from `coach_log` (migration 0009). On the Workers Free plan a request beyond the allowance fails without charge; on Workers Paid it would be billed, which is why the site budget exists. At about 40 Neurons a review with the default model, the budget is roughly 200 reviews a day.
- **Opening it**: members see nothing until the owner opens it in the admin page (**AI coach**, stored as `site_settings.coach_mode`). Before that, admins can use it in the product and run trials in the admin page to judge quality in both languages. `COACH_ENABLED = "false"` switches it off everywhere.
- **Privacy**: the member's text goes to the model for that one request and is not stored by us. Only counts and token figures are logged. The last feedback per question is kept in the browser (`mt_rope_coach`, synced with progress). The privacy notice has a row for it.
- **Admin API**: `GET /api/admin/coach`, `POST /api/admin/coach/trial`, `POST /api/admin/coach/mode` (audited).
- **Tests**: `COACH_MOCK=1` in `.dev.vars` replaces the model with a fixed reply, so limits, parsing and the interface run in CI without a Cloudflare account. The real model is exercised only in production, from the admin trial.

### Access codes for sponsors and campuses (docs/21 N-02, 2026-11-16)

- **What it is**: the owner creates a batch in the admin page (**Access codes**): a label, a sponsor, what it opens, a number of seats, a last day to redeem and an access end date. The batch has one code, for example `MTN-7K4Q-9XWD`, and a link `/register?code=…`. Billing happens outside the platform.
- **Member side**: `js/mt-access.js` remembers a code that arrives in a link, says so on the sign-up and sign-in pages, and applies it on the first signed-in page (portal or settings), whichever sign-in method was used. Settings → Subscription has an **Access code** box. `POST /api/access/redeem`, `GET /api/access/codes`.
- **What a code gives**: an entitlement with source `code:<batch id>` and the batch's end date. It matters once `ACCESS_MODE` is `entitlements`; during the beta everyone already has access, and the redemption still records which cohort a member belongs to.
- **Sponsor report**: `GET /api/admin/batches/:id/report` and `report.csv`. Counts and averages only: seats used, verified accounts, active members, Career Map completions and average, lessons and certificates per product. It is withheld until `COHORT_MIN` members (default 5) have joined, and any average over fewer members than that is left out. No member is named.
- **Withdrawing**: `PATCH /api/admin/batches/:id { revoked: true }` stops new redemptions; `withdraw_access: true` also revokes the entitlements the batch gave. Every batch action is audited.
- **Data**: tables `access_batches` and `access_redemptions` (migration 0010); redemptions are in the account export and removed by the account purge.

### Letters and announcements (docs/21 N-03, 2026-11-16)

- **Notice bar**: one short line in both languages with an optional link and a last day. The owner sets it in the admin page (**Notice bar**); it is one row in `site_settings` (key `notice`). `GET /api/notice` is public and cacheable for five minutes. `js/mt-notice.js` is on every public page and the portal, not in the lesson products, and draws the line as a card at the bottom of the page. A visitor can close it; the choice is remembered in the browser for that wording only. The last day is counted in Jakarta time. No mail is involved.
- **Letters**: the admin page (**Letters**) holds a composer for a subject and a text in English and Bahasa Indonesia. Plain text; a blank line starts a paragraph and full `https://` links become clickable. **Send me a test** sends both versions to `LEADS_NOTIFY_TO`. **Send** queues the letter; only one letter is under way at a time.
- **Who receives one**: members who opted in to updates and proved their address, and newsletter subscribers who confirmed. One message per address, in the reader's language. A member who switched updates off or used an unsubscribe link gets nothing, even if the same address is on the newsletter list.
- **Sending**: the Worker's 00:30 UTC run sends one batch a day before lifecycle mail (`runLetters` in `server/lib/letters.js`); `POST /api/admin/letters/run` sends today's batch at once. A batch is at most `LETTER_DAILY_CAP` messages (default 45) and never more than the lifecycle budget has left, so letters and lifecycle mail together stay at 60 a day and 2,400 a month. A list of 450 addresses therefore takes ten days. The batch is one call to Resend's batch endpoint and one database batch, which keeps the Worker inside the free plan's limit of 50 outbound requests per run. `letter_sends` records each recipient, so a batch never sends twice and a stopped letter can be told apart from a finished one.
- **Unsubscribe**: every letter carries the one-click link and the `List-Unsubscribe` headers. The link works for members and for newsletter subscribers (`/api/mail/unsubscribe`). A subscriber who signs up again after unsubscribing gets the confirmation message again.
- **Portal**: `GET /api/letters` returns to a signed-in member the letters that have started going out and are marked for the portal; the Updates panel lists them with the badge **Letter**.
- **Data**: tables `letters` and `letter_sends` (migration 0011). `letter_sends` holds account or lead ids, no addresses; the account purge removes a member's rows. Every notice change and letter action is in the audit trail.
- **Checks**: `MAIL_MOCK=1` (local runs and the end-to-end workflow only, ignored when a mail key is set) records a batch as sent without a provider, so the cap and resume logic are tested on every pull request.

### Lesson and funnel analytics (docs/21 N-04, 2026-11-17)

- **What it answers**: which lessons members finish, where they stop, which quiz questions are hardest, how many sample readers ask for an account, and how many members earn a certificate. The admin page shows it under **Lessons**; `GET /api/admin/content?days=30` returns the numbers and `content.csv` one row per lesson.
- **Completion** comes from saved progress (`mt-lms:<product>` in the `browser` progress namespace). It is a state, so it covers every member from their first lesson, including the time before this report existed. The database counts it with `json_each`; no member's document is read into the Function. "Started" is one or more core lessons, "finished" is all of them. The biggest step down is the pair of consecutive lessons with the largest loss of members.
- **Opens, completions in a window and quiz answers** come from events the lesson player sends from 17 November 2026 (`lms.lesson.opened`, `lms.lesson.completed`, `lms.check.answered`; docs/13). The player queues them and `js/mt-events.js` sends them in batches. They carry the product, the lesson and the question number, never text or an identifier. A question is ranked only after five members have answered it, and only a member's first answer counts.
- **Sample funnel**: guests on a sample lesson are counted from `lms.lesson.opened` with `sample: 1`; clicks on "Create a free account" from `lms.sample.join_clicked`; a member who first reads a lesson in a browser that read a sample before from `lms.sample.converted`. The link between sample and account is a flag in that browser (`mt-sample-seen`), never sent to the server.
- **Consent**: Do-Not-Track and a declined analytics choice stop these events, as for every other event. Completion counts do not depend on them.
- **Nightly**: the Worker's aggregation also writes `lms.lesson.opened` and `lms.lesson.completed` per product and lesson to `agg_daily`, only for 20 or more members a day, like every row in that table. Raw events are deleted after 13 months.
- **Scale note**: the completion counts scan every member's progress document inside D1 on each request. That is fine for a few thousand members. Beyond that, move the count into the nightly Worker and store it.

### Reminders without e-mail (docs/21 N-05, 2026-11-17)

- **What members get**: a button **Calendar and reminders** in The Compass (Applications) and in Settings (Notifications). It opens one dialog (`js/mt-reminders.js`, fetched on demand) with three choices. An application's drawer also has **Add dates to my calendar** for that application alone.
- **Calendar file**: built in the browser from the dates on that device: application deadlines, next steps and goal dates, as all-day entries with an alert at 09:00 the day before. It needs no account and no server.
- **Calendar address**: a private `.ics` feed the member's calendar app reads by itself. `GET /api/calendar`, `POST /api/calendar/on | reset | off`, and the feed at `GET /api/calendar/feed.ics?u=<member>&k=<signature>`. The signature is an HMAC over the member id and a version number in `calendar_feeds`; a reset raises the version, so the old address stops at once and no token is stored. The feed holds companies, roles, next steps and goal titles. Notes, documents and scores are not in it. It is `no-store` and not indexed.
- **Notifications on a device**: Web Push, written without a library (`server/lib/push.js`): message encryption per RFC 8291 and the VAPID token per RFC 8292. `GET /api/push`, `POST /api/push/subscribe | unsubscribe | test`. A subscription is accepted only when its address belongs to a known push service (Google, Mozilla, Microsoft, Apple). A member has at most five devices. On iPhone and iPad the site must first be added to the Home Screen.
- **The daily reminder**: the Worker's six-hourly run handles a slice of devices at 00:00, 06:00 and 12:00 UTC (07:00, 13:00 and 19:00 in Jakarta); a device is looked at once a day. A member gets one notification when a deadline, a next step or a goal date falls today or tomorrow, or a habit with a reminder time is scheduled today and not ticked. Nothing due means no notification. The database extracts the three Compass values; the rest of a member's progress is never loaded. A device the push service reports as gone is removed.
- **Keys**: `VAPID_PUBLIC_KEY` (plain text) and `VAPID_PRIVATE_KEY` (secret) on the Pages project and on the Worker. The admin page (**Reminders**) makes the pair in the browser and shows it once; nothing is sent or stored. Until both are set, members are not offered notifications; the calendar parts work without them. A new pair switches every device off until its owner turns reminders on again.
- **Limits on the free plan**: a run sends at most `PUSH_PER_RUN` notifications (default 30), because each is one outbound request and a little CPU. Three runs a day reach about 90 devices with something due. More needs the paid Workers plan, which is a cost decision.
- **Data**: tables `calendar_feeds` and `push_subscriptions` (migration 0012). Both are in the account export (devices without their keys) and removed by the account purge.
- **Checks**: `scripts/qa/push-crypto.js` decrypts the library's output with an independent implementation and verifies the token. `PUSH_MOCK=1` (local runs and the end-to-end workflow only) builds each notification and sends none. The encryption was also checked once against the `web-push` reference library.

### Readiness profile (docs/21 N-06, 2026-11-17)

- **What it is**: one public page per member, `/p/<slug>`, off until the member switches it on in Settings (**Public profile**, `js/mt-profile.js`; `settings?tab=public` opens the tab). The member ticks what it shows: the Career Map band, certificates, lessons completed per course. The link can be copied, shared through the phone's share sheet, replaced, or switched off.
- **Where the content comes from**: the account, at the moment the page is asked for (`server/lib/profile.js`). The band is derived from the member's latest signed-in Career Map result (`assessments`); certificates from `certificates`, each linking to its verification page; lessons from saved progress, counted against the core lessons of each course. Nothing can be typed in. The page never shows an address, a score, dimension results or application data.
- **API**: `GET /api/profile` and `POST /api/profile` for the member's settings, `POST /api/profile/reset` for a new address, `GET /api/profile/<slug>` for the public answer (cacheable for five minutes, 404 when off).
- **The page**: `prototype/profile.html`. `functions/p/[slug].js` serves it at `/p/<slug>` with the member's name in the title and the link-preview tags and the data already in the page; it copies the static file's security headers and adds `noindex`. `_routes.json` therefore sends `/p/*` to Functions. `/profile?p=<slug>` is the same page asking the API. A display name is escaped in the title, the tags, the inline data and the page.
- **Sharing**: copy, the share sheet where the browser has one, WhatsApp and LinkedIn links. The page is in English and Bahasa Indonesia and prints as one page.
- **Moderation**: the admin page (**Public profiles**) lists public pages and can take one down (`PATCH /api/admin/profiles/:slug { hidden }`), audited. The member sees a note in Settings and their own choice is kept.
- **Data**: table `profiles` (migration 0013); in the account export and removed by the account purge. An account awaiting deletion has no public page.

### End-to-end tests in CI (2026-11-15)

`.github/workflows/e2e.yml` runs on every pull request: it builds the site, starts `wrangler pages dev` with a throwaway local D1 (all migrations applied) and runs `scripts/qa/api.js`, `member.js`, the strict crawl and the public journeys. It uses no secret and never touches production. See `scripts/qa/README.md`.

### Static performance layer (Tier 1 stage 6)

- **Registry split**: `scripts/build-site.py` writes `data/lms/<slug>/index.js` (the registry with every lesson reduced to its light fields) and `data/lms/<slug>/lessons/<n>.json` per lesson; both are build outputs (gitignored). The product pages load the index; `js/lms-player.js` fetches a lesson on open (`?v=<registry hash>`), prefetches neighbours, and still accepts a full registry without the `__lazy` marker. The authored registries `data/lms/<slug>.js` stay the only content source.
- **Service worker**: `prototype/sw.js` at the site root, registered by `js/mob-footer.js` after load; `/sw.js` is served with `Cache-Control: no-cache` (see `_headers`). Stamped (`?v=`) and `/assets/` files are cache-first, other static files network-first, HTML and `/api/` untouched. Bump `VERSION` in the file to drop every cached file.
- **Budgets**: `scripts/budgets.json` and `scripts/check-budgets.py`, run as integrity step 14 after the build. Raise a limit only in the change that needs it, with the reason in the commit message.


# 20 · Platform audit, fixes and feature roadmap (15 November 2026)

An end-to-end audit of the Metanoia Labs site and platform: what was tested, what was found, what was fixed in the same change, what was built, and what comes next. Everything here runs on the existing Cloudflare free tier. Nothing in this change adds a cost.

## 1. Scope and method

| Area | How it was tested |
|---|---|
| Links and assets | `scripts/qa/links.py`: 9,489 references in 176 pages resolved on disk |
| Every page, three screens, two languages | `scripts/qa/crawl.js`: 49 pages on desktop (1366), tablet (820) and phone (390), in English and Bahasa Indonesia, against a server running the real API |
| Signed-in experience | A deep sweep of 32 pages as a member, on three screens and two languages: script errors, failed requests, sideways scroll, language leaks, touch-target size |
| Accessibility | axe-core (serious and critical rules) on 32 pages; Lighthouse accessibility |
| Performance | Lighthouse (mobile, throttled) on home, pricing, login, Career Map, help; page weight budgets (`scripts/check-budgets.py`) |
| API, accounts, access control | Code review of `functions/` and `server/lib/`; `scripts/qa/api.js`: 87 checks against a local D1 database with all migrations applied |
| Member journey | `scripts/qa/member.js`: 45 checks through register, products, progress sync to a second device, settings, export, sign-out, sign-in, feedback, admin |
| Infrastructure | Review of `wrangler.toml`, `_headers`, `_routes.json`, `robots.txt`, the service worker, the Worker crons and the seven GitHub workflows |

**Limit of this audit.** The production host is not reachable from the build sandbox. The tests ran against the same code with a local database. Production-only settings (secrets, DNS, the media bucket, mail deliverability, the Google sign-in consent screen) are listed in section 7 for a live check.

## 2. Summary

- The platform is in good working order. No broken internal link, no script error, no failed request and no sideways scroll was found on any page, screen size or language. The whole member journey works end to end.
- The audit found **two serious account-security defects** and **five medium ones**. All seven are fixed and covered by automated tests.
- Accessibility and performance were good on public pages (Lighthouse 100 for accessibility and SEO). Low-contrast small text in the member area and a slow pricing hero are fixed.
- Four features were built and tested: a feedback button with an admin inbox, an admin audit trail, lead export, and install-as-app. Eleven more are specified in the roadmap.

## 3. Findings

Severity: **Critical** (stop and fix), **High** (fix before more members join), **Medium** (fix soon), **Low** (schedule), **Info** (owner decision).

| ID | Area | Finding | Severity | Business impact | Status |
|---|---|---|---|---|---|
| A-01 | Access control | Registering with a password on an address listed in `ADMIN_EMAILS` gave the admin role at once, with no proof of the mailbox. Anyone who knew or guessed an unclaimed admin address could read every lead and export every member. | Critical | Exposure of all member and lead data | **Fixed** |
| A-02 | Accounts | Pre-hijack: a stranger could open a password account on someone else's address. When the real owner later signed in by link or Google, both shared the account and the stranger's password kept working. | High | Account takeover | **Fixed** |
| A-03 | Accounts | The Settings page wrote the member's display name into the page unescaped. Combined with A-02 it let a stranger run script in the owner's session. | Medium | Script injection | **Fixed** |
| A-04 | Cost control | The live-interviewer proxy (`/api/rope/avatar`) accepted calls from anyone. It is off today (no provider key). Once a key is added, strangers could have opened billable sessions. | Medium | Unplanned provider charges | **Fixed** |
| A-05 | Privacy | The password-reset answer differed for known and unknown addresses, so it revealed who has an account. | Medium | Member privacy | **Fixed** |
| A-06 | Quality | Every page view by a guest logged a `401` console error from `/api/auth/me`. It cost Lighthouse best-practice points and hid real errors. | Medium | Search quality signals, debugging noise | **Fixed** |
| A-07 | Accessibility | Small grey text in the portal, products and legal pages had a contrast of 2.6 to 3.4 against 4.5 required (133 elements). | Medium | Readability, WCAG AA | **Fixed** |
| A-08 | Performance | Pricing page: largest paint at 4.9 s on a throttled phone, caused by a 312 KB hero image with no smaller version. | Medium | Bounce on the page that sells | **Fixed** (2.5 s, score 81 to 97) |
| A-09 | Admin | CSV exports did not neutralise cells starting with `=`, `+`, `-` or `@`, so a member-typed name could run as a spreadsheet formula. | Low | Risk to the admin's computer | **Fixed** |
| A-10 | Admin | No limit on admin-token guesses, and no record of admin actions. | Low | Accountability | **Fixed** (limit plus audit trail) |
| A-11 | Accessibility | Settings: profile inputs had no linked labels and the section tabs had no tab roles. Enterprise: source links were told apart by colour alone. | Low | Screen-reader use | **Fixed** |
| A-12 | SEO | `robots.txt` did not exclude `/admin/`, `/api/`, `/settings`, `/purchases`. | Low | Crawl budget, tidy index | **Fixed** |
| A-13 | QA tooling | `scripts/qa/journeys.js` predates open registration and stops at its sign-in step. The crawl script had a fixed browser path and no tablet size. | Low | Regressions go unseen | **Fixed**: `journeys.js` refreshed for hosts with and without the API; `.github/workflows/e2e.yml` runs `api.js`, `member.js`, the strict crawl and the public journeys on every pull request |
| A-14 | Performance | Home page: 2.0 MB total, largest paint 3.2 s, 300 ms blocking time on a throttled phone (score 85). | Low | First impression on slow phones | Open, see R-10 |
| A-15 | Usability | Some touch targets on phones are under 28 px tall: footer legal links, "Read more" toggles in products, "Start" links in The Compass. | Low | Mis-taps | **Fixed**: 123 controls under 24 px on phones, now none (rules at the end of `css/site-ui.css`) |
| A-16 | Accessibility | Product top-bar logo: the accessible name does not match its visible text. | Low | Voice control | **Fixed** |
| A-17 | Dependency | Career Map PDF export loads two libraries from cdnjs. If that host is blocked on a campus network, export fails. | Low | Feature loss for some users | **Fixed** (R-09, follow-up change) |
| A-18 | Legal | 2,321 of 2,588 assets have no licence record and 732 await a model release (`scripts/check-asset-licences.py`). | Info | Launch gate for paid plans | Owner |
| A-19 | Legal | Terms and Privacy are recorded as version `1.0-draft` in every consent. | Info | Needs final text before charging | Owner |
| A-20 | Sign-in | LinkedIn sign-in is off until a client ID is supplied. | Info | One fewer sign-in option | Owner |
| A-22 | Content | When the API cannot be reached, the login and register notes told visitors to leave their e-mail "below" while the waitlist field was hidden. Found while refreshing the journey script. | Low | Confusing during an outage | **Fixed**: the note now says sign-in cannot be reached and gives the e-mail address |
| A-21 | Accounts | Ten wrong passwords lock sign-in for that address for fifteen minutes. A third party can trigger it. Magic-link and Google sign-in are not affected. | Info | Accepted trade-off | No change |

### What the security fixes do

- **A-01.** A password registration is always a member. The admin role is given only when the address is proven: by the verification link, a magic link, Google or LinkedIn. Sign-in with a password promotes an `ADMIN_EMAILS` address only if it is already verified. The `ADMIN_TOKEN` path is unchanged.
- **A-02.** The first proven sign-in on an account whose address was never verified clears its password and ends every earlier session. The owner can set a new password through "Forgot password". A password reset also marks the address as verified.
- **A-03.** Settings escapes the name and address before they reach the page. A test registers a name containing markup and checks Settings, Portal and The Compass.
- **A-04.** The proxy now needs a signed-in member and allows twelve sessions an hour per member.
- **A-05.** The reset answer is the same for every address.
- **A-06.** `/api/auth/me` answers `200 { user: null }` for a guest.

**One thing to know.** If an admin account was opened with a password and its address was never verified, it keeps its role. Its first Google or magic-link sign-in will clear the old password, by design.

## 4. Features built in this change

| Feature | Who benefits | What it does | Where |
|---|---|---|---|
| **Feedback button and inbox** | Members, owner | A button on settings, purchases, help and the five products, and a link in the portal footer, opens a short form: what it is about, an optional 1 to 5 rating, a message. Guests may leave an address. Bilingual, keyboard accessible, clear of the phone tab bar. The admin page lists every message with sender, page and device, with a status and notes, and shows the average rating. | `prototype/js/mt-feedback.js` (and the 2 KB `mt-feedback-lazy.js` launcher on the products, which loads the dialog on first press), `functions/api/feedback.js`, `/api/admin/feedback`, migration 0007 |
| **Admin audit trail** | Owner | Every grant, revocation, lead change, feedback triage and export is recorded with who did it and when, and shown in the admin page. | `admin_audit` table, `/api/admin/audit` |
| **Lead export** | Owner | "Download CSV" on the lead list, filtered by kind and status, built on the server so the export is audited. | `/api/admin/leads.csv` |
| **Install as an app** | Members | A web app manifest with icons and shortcuts, linked from every page. The portal shows "Install app" when the browser allows it. It uses the existing service worker. | `prototype/manifest.webmanifest`, `prototype/js/mt-install.js` |

Feedback costs no mail quota: it is stored in D1 and read in the admin page. Migration `0007_feedback_audit.sql` adds two new tables and changes none. The existing workflow applies it on merge. Until it has run, the new endpoints answer politely and the rest of the site is unaffected.

## 5. Recommended features

Priority weighs business value against effort. Effort: S (a day or less), M (two to four days), L (a week or more). All are zero cost unless stated.

| ID | Feature | Purpose and benefit | Feasibility and dependencies | Effort | Priority |
|---|---|---|---|---|---|
| R-01 ✓ built | **Owner weekly digest** | One e-mail each Monday: new accounts, verified, active members, leads by kind, new feedback, average rating, mail quota used. The owner sees the business without opening the admin page. | Add to the existing 00:30 UTC Worker cron on Mondays; reuse `server/lib/mail.js` and the admin `stats` and `funnel` queries. Uses about four of the 3,000 free monthly e-mails. | S | 1 |
| R-02 ✓ built | **Client error reporting** | Report script errors from real browsers into the events table and show a count by page in the admin page. Reliability problems surface before members report them. | A `window.onerror` hook in `mt-api.js` posting `client.error` to `/api/events`, capped per session; one admin query. | S | 2 |
| R-03 ✓ built | **Sample lesson without sign-in** | Let a visitor read one full lesson per product before registering. Today a guest who opens a product is sent to sign-in. Better product discovery and conversion. | The lesson registry is already split per lesson; mark one lesson per product as open and skip the gate for it. | M | 3 |
| R-04 ✓ built | **Shareable certificate with a verification page** | A completion certificate with a public link that confirms it is real. Members post it on LinkedIn, which brings new visitors. | Sign `{member, product, date}` with HMAC as the Career Map result link does; one public page; no new table needed. | M | 4 |
| R-05 ✓ built | **Trends in the admin page** | Charts of sign-ups, active members and lesson completions over time from `agg_daily`. Shows whether changes work. | Data already aggregated nightly; inline SVG charts, no library. | M | 5 |
| R-06 | **Change e-mail address** | Members cannot change their address today. Fewer support requests and fewer abandoned accounts. | New token kind `email-change`; confirm from the new mailbox; update `users` and `identities`. | S | 6 |
| R-07 | **Referral links** | A personal invite link, with sign-ups attributed to the member. Low-cost growth; later a reward such as an extended pass. | Migration for `referrals`; read the code at registration; one panel in Settings and one in admin. | M | 7 |
| R-08 | **Enterprise cohort view** | A partner admin sees seats used and aggregate readiness for their cohort above a minimum size, as the enterprise page promises. Needed to sell and renew cohorts. | Entitlements already carry a source; add `org` and a partner role; aggregate only, per the Data Dignity commitments. | L | 8 |
| R-09 ✓ built | **Self-host the PDF libraries** | Career Map export works on networks that block CDNs (A-17). | Copy two files into `prototype/js/vendor/`, update the CSP. | S | 9 |
| R-10 | **Home page weight** | Bring the home page under 1.2 MB and largest paint under 2.5 s on phones (A-14). | Poster-first video, smaller hero sources, defer the discover module. | M | 10 |
| R-11 | **Passkeys** | Sign-in with a fingerprint or face, no password. Stronger accounts and faster return visits. | WebAuthn on Workers with a small open-source library; migration for credentials. | L | 11 |
| R-12 | **Payments (Tier 2)** | Paid passes after the beta. | Needs a payment provider. Providers charge per transaction, so this **needs your approval** first. Entitlements are already in place to receive it. | L | After approval |

## 6. Roadmap

**1. Critical, done in this change**
- A-01 to A-06: account security, cost control, privacy, console errors.
- Migration 0007.

**2. Short term, the next two weeks**
- R-01 owner digest, R-02 client error reporting, R-09 self-hosted PDF libraries: **done** in the follow-up change (docs/14, "Error reports, owner digest, self-hosted export libraries").
- A-13 refresh `journeys.js`; run `api.js` and `member.js` in CI with a local D1: **done**.
- A-15 touch targets, A-16 logo label: **done**.
- Owner: live checks in section 7, LinkedIn client ID (A-20).

**3. Medium to long term**
- R-03 sample lesson, R-04 certificates, R-05 trends: **done** (docs/14, "Sample lesson, certificates, trends").
- R-06 change e-mail, R-07 referrals, R-10 home weight.
- R-08 enterprise cohort view, R-11 passkeys.
- R-12 payments, and A-18 and A-19 (asset licences, final legal text) before any paid plan.
- Remove `'unsafe-inline'` from the script policy once inline scripts move to files.

## 7. Live checks for the owner

The sandbox cannot reach production, so please confirm these on the live site after the build:

1. Open `/api/health`. `db`, `session`, `mail`, `magic` and `oauth.google` should be `true`.
2. Sign in to `/admin/`. Open **Feedback** and **Audit trail**. Both should load without "migration 0007 has not run yet".
3. On the portal, press **Feedback**, send a test message, and see it in the admin inbox.
4. Request a password reset for your own address and confirm the e-mail arrives.
5. On a phone in Chrome, open the portal menu and look for **Install app**.

## 8. Test results after the changes

| Check | Result |
|---|---|
| `scripts/qa/api.js` | 87 passed, 0 failed (97 after the follow-up change) |
| `scripts/qa/member.js` | 45 passed, 0 failed (54 after the follow-up change) |
| `scripts/qa/crawl.js`, English and Bahasa Indonesia, three screens | No script error, failed request, broken image or sideways scroll |
| axe-core, serious and critical | Contrast, label and tab findings cleared; one low item left (A-16) |
| Lighthouse, pricing | Performance 81 to 97, largest paint 4.9 s to 2.5 s |
| Lighthouse, login | Best practices 96 to 100 |
| `scripts/integrity-check.sh` | Passed, including size budgets |

## 9. How to run the checks again

```
npx wrangler d1 migrations apply metanoia --local
npx wrangler pages dev --port 8788          # needs a .dev.vars with SESSION_SECRET, SUBJECT_KEY, ADMIN_TOKEN, ADMIN_EMAILS
node scripts/qa/api.js                      # add D1_SQLITE=<path to the local .sqlite file> for the takeover tests
node scripts/qa/member.js
BASE=http://localhost:8788 node scripts/qa/crawl.js
LANG_=id BASE=http://localhost:8788 node scripts/qa/crawl.js
```

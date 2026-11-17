# QA audit scripts

Repeatable checks behind the platform audit. Run them after `python3 scripts/build-site.py`.

| Script | What it does | Run |
|---|---|---|
| `server.js` | Serves `prototype/` the way GitHub Pages does (`/pricing` → `pricing.html`, `/dir/` → `index.html`, misses → `404.html`). Port 8940. | `node scripts/qa/server.js &` |
| `links.py` | Static link audit: every `href`, `src`, `srcset`, `poster` and CSS `url()` in every page (generated Range company pages sampled) resolved on disk. | `python3 -I scripts/qa/links.py` |
| `crawl.js` | Loads every public page on desktop, tablet and phone: page errors, console errors, failed requests, broken images, horizontal overflow, empty titles. `LANG_=id`, `THEME=light`, `GUEST=1` (guest session for the products), `PAGES=/a,/b` to narrow, `BASE=http://localhost:8788` to crawl a server that runs the API. | `node scripts/qa/crawl.js` |
| `api.js` | End-to-end API checks against a server that runs the Functions with a D1 database (`npx wrangler pages dev --port 8788`): health, registration, sessions, the same-origin guard, admin only after a proven address, progress, leads, results, events, feedback, account update / password / export / deletion, the admin API, exports and the audit trail. `D1_SQLITE=<local .sqlite>` adds the account-takeover tests. | `node scripts/qa/api.js` Also the site-wide notice and letters: validation, daily cap, resume on the next day, one message per address, unsubscribe. Also the lessons report: completion from saved progress, first answers only, the sample funnel, CSV. |
| `member.js` | Signed-in journey in a browser against the same server: register, return path, every product, progress to a second device, settings, export, sign-out, password sign-in, feedback as guest and member, a hostile display name, the admin inbox and audit trail, the web app manifest. `SHOTS=<dir>` saves screenshots. | `node scripts/qa/member.js` Also the notice bar on a phone in both languages and a letter in the portal Updates panel. Also the lesson player's events, silence after analytics are declined, and the Lessons panel. |
| `journeys.js` | User journeys: internal links from every public page, theme and language persistence, site search, phone menu, login/register honest states, guest preview, settings, enterprise/mentor/newsletter forms, Help FAQ, Mind Palace search, Range directory filters, company page, the whole career-map assessment; then every lesson in every product, completion, Compass tabs and application entry. Works on both kinds of host: with the API it expects working sign-in and stored forms, without it the honest "cannot be reached" states. Section B (the lessons) needs the host without the API. `ONLY=A` (public) or `ONLY=B` (products). | `node scripts/qa/journeys.js` |

Needs `playwright-core` on the Node path and a Chromium binary (`CHROME=/path/to/chrome` overrides the default). The `/api/health` 404 on every page is expected on GitHub Pages: the API is not deployed there, and the pages say so.

## In CI

`.github/workflows/e2e.yml` starts the site with its Functions and a throwaway local D1, then runs `api.js`, `member.js`, `STRICT=1 crawl.js` and `ONLY=A journeys.js` on every pull request. A manual run or the weekly schedule adds the Bahasa Indonesia crawl and `ONLY=B journeys.js` on the static server. `reset-limits.py` clears the local rate limiter between suites (it needs `D1_SQLITE` and refuses to run without it). The scripts block Turnstile and Web Analytics requests, which behave differently off the production host.

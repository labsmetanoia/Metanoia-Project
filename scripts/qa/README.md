# QA audit scripts

Repeatable checks behind the platform audit. Run them after `python3 scripts/build-site.py`.

| Script | What it does | Run |
|---|---|---|
| `server.js` | Serves `prototype/` the way GitHub Pages does (`/pricing` → `pricing.html`, `/dir/` → `index.html`, misses → `404.html`). Port 8940. | `node scripts/qa/server.js &` |
| `links.py` | Static link audit: every `href`, `src`, `srcset`, `poster` and CSS `url()` in every page (generated Range company pages sampled) resolved on disk. | `python3 -I scripts/qa/links.py` |
| `crawl.js` | Loads every public page on desktop and phone: page errors, console errors, failed requests, broken images, horizontal overflow, empty titles. `LANG_=id`, `THEME=light`, `GUEST=1` (guest session for the products), `PAGES=/a,/b` to narrow. | `node scripts/qa/crawl.js` |
| `journeys.js` | User journeys: internal links from every public page, theme and language persistence, site search, phone menu, login/register honest states, guest preview, settings, enterprise/mentor/newsletter forms, Help FAQ, Mind Palace search, Range directory filters, company page, the whole career-map assessment; then every lesson in every product, completion, Compass tabs and application entry. `ONLY=A` (public) or `ONLY=B` (products). | `node scripts/qa/journeys.js` |

Needs `playwright-core` on the Node path and a Chromium binary (`CHROME=/path/to/chrome` overrides the default). The `/api/health` 404 on every page is expected on GitHub Pages: the API is not deployed there, and the pages say so.

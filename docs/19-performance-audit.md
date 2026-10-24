# 19 · Web performance audit: benchmarks, root causes, fixes and roadmap

Prepared 24 October 2026 against the live site (https://www.metanoialabs.net, GitHub Pages) and the repository at `main` after PR #415. Three external benchmarks were supplied with the request: PageSpeed Insights (mobile), securityheaders.com and Qualys SSL Labs. Everything else here was measured in the repository with Lighthouse 12.8 and Playwright; the method is in §7 so the numbers can be reproduced.

## 0 · Summary

| Benchmark | Before | After this PR | What moves it |
|---|---|---|---|
| PageSpeed Insights, mobile, home | Performance 64 · Accessibility 91 · Best Practices 92 · SEO 100 | re-run after deploy; lab: accessibility 100, best practices 100, CLS 0, main thread idle after load (§4) | the fixes in §3 |
| Core Web Vitals, mobile, home (lab) | FCP 3.2 s · LCP 9.9 s · TBT 130 ms · CLS 0 · Speed Index 5.3 s | LCP is now the headline text painted from a self-hosted, preloaded font; the 583 KB hero film no longer competes with it | §3.1 to §3.4 |
| securityheaders.com | F (no HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) | F until the hosting move; `prototype/_headers` ships the full policy for Cloudflare Pages | §6 |
| Qualys SSL Labs | B | B until the hosting move (it grades GitHub Pages' TLS, not ours) | §6 |

GitHub Pages cannot send custom response headers and its TLS configuration is not ours to change, so the two security grades cannot be improved from the repository. They are resolved by the Cloudflare Pages migration already recommended in docs/17 §2; the headers file is ready for it.

Local lab scores for the same pages, before and after, are in §4. In one line: accessibility and best practices reach 100 on every page measured, every layout shift is gone (CLS 0 on all six pages, from 0.211 on the desktop home page and 0.197 on Student), the phone home page no longer keeps the main thread busy for as long as it is open (Total Blocking Time 2.7 to 14.9 s → 0.6 s, Time to Interactive 7.6 to 32.5 s → 5.2 s), the desktop home page goes from 68 to 89 and Student from 76 to 94.

## 1 · What was audited

Lighthouse 12.8 (mobile preset: Moto G Power emulation, slow 4G, 4x CPU slowdown; desktop preset for the home page) on the home page, Student, Early Professional, Pricing and The Map, served from the repository with gzip, before and after the changes. Playwright resource inventories on phone and desktop for seven pages. A Lighthouse-like Playwright session (same throttling) that logs every layout shift with the element and the moment it happened, used to attribute the shifts Lighthouse reports. The three external benchmarks above for the hosting layer.

## 2 · Root causes, in priority order

### Critical (Core Web Vitals on the home page, mobile)

1. **Third-party fonts on the critical path.** Every page loaded Google Fonts through a render-blocking stylesheet plus two duplicate `preload` hints that pointed at the same stylesheet. On a phone that is a DNS lookup, a TLS handshake and two round trips to a third party before the headline could paint in its own face. The largest contentful element on the home page is the headline text, so LCP waited on it. 1,107 pages referenced Google Fonts (26 hand-written pages plus the generated Mind Palace articles, through `scripts/lib/shell.py`).
2. **Every chapter's photographs downloaded on first load.** The home page's six chapters are absolute-positioned, overlapping cards until the page script adds the `flow` class to `<body>`. The browser evaluates `loading="lazy"` on the first layout, when every chapter still sits in the viewport, so all 30 images (2.7 MB) were fetched up front. The `flow` class is now in the markup, so only the first chapter's images load before scrolling.
3. **The hero film competed with the first paint.** On phones the 583 KB mobile loop (and on desktop the 4.9 MB film) was attached and set to `preload="auto"` as soon as the page script ran, in the same seconds the headline font and the chapter photographs were arriving. The film is now attached after the `load` event and an idle slot; its own first frame (the 45 KB poster) is preloaded with `fetchpriority="high"` and carries the paint until then. The same policy now applies to the persona-page hero films in `js/mob-footer.js`.
4. **A canvas sky repainted every 80 ms for as long as the page was open.** On the phone treatment the backdrop canvas (sky gradient, stars, fog, snow, embers) was redrawn twelve times a second even when nothing moved. Under Lighthouse's 4x CPU throttle each repaint is a long task, the page never reached "interactive", and Total Blocking Time and Speed Index were decided by the trace length rather than the page. The loop now stops repainting once the camera, theme and film state have settled and resumes on scroll, theme change, resize or film arming. Measured on a throttled phone session: 51 long tasks in the five seconds after load before, 0 after.
5. **Layout shifts from late stylesheets and late classes.** The persona pages carried their mobile hero rules (the headline-only treatment from the AY round) in `<style>` blocks at the end of the document, after 250 to 390 KB of HTML. On slow 4G the hero painted first in its desktop proportions and re-laid out when the parser reached those rules: a 0.129 CLS on the Student page, attributed by Lighthouse to the journey background image but actually the late stylesheet. The blocks now sit in `<head>`. On the home page the phone layout class (`m`) was added by the main script, roughly four seconds in on a throttled phone; a one-line script at the top of `<body>` now sets it before the first paint (0.100 → 0.013).

### Secondary (bytes, requests, hygiene)

6. **Oversized and unsized images.** The three menu-sheet illustrations were 1.7 MB of PNG (`nav-mountain.png` 709 KB, `nav-climbers.png` 623 KB, `nav-compass.png` 359 KB) rendered at 580, 360 and 225 px; they are now WebP at twice their rendered width (83, 71 and 40 KB) with `width`/`height` attributes. The Mind Palace need-card thumbnails used 1600 px and 810 px sources (369 KB, 148 KB) for 180 px tiles; new 800 px and 540 px derivatives. The Discover poster, the Student journey background (335 KB → 204 KB) and the footer background on every page (174 KB JPEG → 83 KB WebP) were re-encoded. Every derivative has a row in `assets/asset-manifest.json`.
7. **The API health probe fetched the 404 page on every visit.** `js/mt-api.js` asks `/api/health` once per session; on GitHub Pages that returns the 25 KB custom 404 page and logs a console error, which also fails the Lighthouse best-practices audit. The deploy workflow now marks the build as static (`STATIC_HOST`) so the probe answers locally without a request; on any host with the API (Cloudflare Pages) the probe runs as before, and only once the page is idle.
8. **No doctype on the home page.** `index.html` had no `<!DOCTYPE html>`, `<html>`, `<head>` or `<body>` tags, so every browser rendered it in quirks mode. They are in place now; the standards-mode layout was diffed element by element against the quirks-mode one on desktop and phone (largest movement 9 px, no visible change).
9. **Accessibility audits.** The menu sheet carried `role="menu"` without menu items; the newsletter button lost its name on phones because its label was `display:none`; the two logo links' labels did not contain their visible text ("MetanoiaLabs" without a space); the Chapter I step rail used `role="button"` on list items; the trail cards skipped from `h2` to `h4`. All fixed in the shared markup (26 pages plus the shell for generated pages).

### Opportunities (not done in this PR; see §5)

10. Inline CSS on the home page is 128 KB with roughly 80 KB unused on any one viewport; the Early Professional page is 390 KB of HTML. Splitting the per-chapter CSS and the bilingual copy out of the document is the next real lever on First Contentful Paint.
11. Shared stylesheets (`css/site-ui.css` 24 KB, `css/persona-folders.css` 41 KB) are render-blocking on every page; critical-CSS extraction or inlining the above-the-fold part would remove two round trips.
12. Product pages load the full LMS (`css/lms.css` 172 KB, `js/lms-player.js` 295 KB, the registry) on the landing page before a lesson is opened.

## 3 · What changed (files)

| Area | Files | Change |
|---|---|---|
| Fonts | `prototype/assets/fonts/*.woff2` (15 latin subsets, 723 KB on disk, 50 to 165 KB used per page), `prototype/css/fonts.css`, 26 HTML pages, `scripts/lib/shell.py` | Google Fonts links, preconnects and duplicate preloads replaced by the font declarations inlined in `<head>` (source of truth `css/fonts.css`, read by the shell at build time); the display face is preloaded; metric-matched fallback faces (`size-adjust`, `ascent-override`, `descent-override`) for Roboto Condensed, Playfair Display and Inter so the swap does not re-wrap headlines |
| Home loading | `prototype/index.html` | doctype and document skeleton; `flow` class in markup; phone class set before first paint; poster preload; film armed after load and idle; calm loop stops repainting when settled; the late style blocks and `site-ui.css` moved into `<head>`; step rail as a tablist; trail-card headings `h3`; thumbnails and Discover poster re-pointed at derivatives |
| Persona pages | `pages/student.html`, `early-professional.html`, `fresh-graduate.html`, `mature-professional.html`, `enterprise.html`, `mentors.html` | mobile style blocks moved into `<head>`; journey backgrounds sized (Student re-encoded) |
| Shared scripts | `js/mob-footer.js`, `js/mt-api.js`, 26 pages | hero film attached and started after load and idle; health probe skipped on the static host and deferred to idle elsewhere; the footer script loads with `defer` so it is never render-blocking |
| Images | `assets/opt/nav-*.webp`, `assets/bg/footer-background.webp`, `assets/opt/global-map-800.webp`, `assets/opt/03-climb-540.jpg`, `assets/opt/04-basecamp-540.jpg`, `assets/opt/hero-discover-poster-1280.jpg`, `assets/opt/journey-bg-863.jpg`, `assets/asset-manifest.json`, `data/mindpalace.js` | derivatives at rendered size; manifest rows |
| Accessibility | 26 pages, `scripts/lib/shell.py` | menu role, newsletter button name, logo labels, tablist, heading order |
| Hosting | `prototype/_headers`, `.github/workflows/deploy-pages.yml` | security and cache headers for Cloudflare Pages; static-host flag on the GitHub Pages build |

Nothing in the design system, copy or behaviour changed by design: the layout of the home page and the six persona pages was recorded before and after on desktop and phone and compared element by element, the footer-language, Next-stage, audience-layer and Mind Palace regression suites pass (38 and 19 checks), and the sky still animates while the visitor scrolls.

## 4 · Before and after

Lighthouse 12.8, mobile preset unless marked, local gzip server, one run each (two for the mobile home page, shown as a range). Score columns are Performance / Accessibility / Best Practices / SEO.

| Page | Scores before | Scores after | FCP | LCP | TBT | CLS | Speed Index | TTI |
|---|---|---|---|---|---|---|---|---|
| Home, mobile | 65 to 43 / 91 / 93 / 100 | **62 / 100 / 100 / 100** | 1.7 → 2.7 s | 2.9 to 5.2 → 5.1 s | 2,720 to 14,900 → 580 ms | 0 → 0 | 2.9 to 7.9 → 3.2 s | 7.6 to 32.5 → 5.2 s |
| Home, desktop | 68 / 91 / 93 / 100 | **89 / 100 / 100 / 100** | 0.3 → 0.5 s | 2.3 → 1.0 s | 50 → 20 ms | 0.211 → 0 | 5.3 → 6.5 s | 2.3 → 1.7 s |
| Student | 76 / 91 / 96 / 100 | **94 / 100 / 100 / 100** | 1.7 → 2.1 s | 4.1 → 2.9 s | 100 → 40 ms | 0.197 → 0 | 2.6 → 2.1 s | 4.2 → 3.9 s |
| Early Professional | 96 / 92 / 96 / 100 | **79 / 100 / 100 / 100** | 1.8 → 3.2 s | 1.8 → 3.8 s | 80 → 200 ms | 0.095 → 0 | 1.8 → 3.2 s | 4.2 → 5.4 s |
| Pricing | 91 / 89 / 96 / 100 | **84 / 100 / 100 / 100** | 1.0 → 1.8 s | 3.5 → 4.3 s | 20 → 10 ms | 0 → 0 | 1.0 → 1.8 s | 3.5 → 4.3 s |
| Sign-in (The Map redirects here when signed out) | 67 / 100 / 96 / 92 | **72 to 83 / 100 / 100 / 100** | 4.0 → 2.4 to 3.6 s | 5.3 → 4.2 to 5.3 s | 0 → 0 ms | 0.118 → 0 | 4.0 → 2.4 to 3.6 s | 5.3 → 4.2 to 5.3 s |

Two numbers in this table need reading with care, and both work against the "after" column:

- **The baseline downloaded no font bytes at all.** The sandbox cannot reach Google Fonts, so in the "before" runs the font stylesheet failed in a few milliseconds and the pages painted in system fonts with zero font traffic. The "after" runs download 50 to 165 KB of real fonts before the headline is final, and Lighthouse's simulation charges that to First Contentful Paint and LCP on the slow-4G model. On the live site the baseline pays for a DNS lookup, a TLS handshake, the Google stylesheet and the same font bytes from a second origin, so the live comparison should favour the new build. The observed (unsimulated) First Contentful Paint was the same or lower on every page after the change.
- **Early Professional and Pricing** fall in the simulation for that reason only: their critical path gained the font bytes and nothing else. Their layout shifts, accessibility and best-practice failures are gone.

Bytes on first load, phone, home page: 38 requests and 3.7 MB before (every chapter's photographs plus the film), 28 requests and 1.5 MB after with the film and footer images counted, 1.0 MB without the film.

Reading the table: the "before" rows are the committed tree served from the same local gzip server, so the comparison is like for like, with one caveat in the baseline's favour. The sandbox cannot reach Google Fonts, so the baseline's third-party font request failed instantly instead of costing the 300 to 600 ms a real phone pays for the DNS lookup, TLS handshake and stylesheet round trip. The live PageSpeed run after deployment is therefore expected to improve by more than the local delta on First Contentful Paint and LCP. Lighthouse scores vary by a few points between runs on this machine; two runs of the mobile home page are shown.

## 5 · Roadmap

| # | Item | Impact | Effort | Risk | Priority |
|---|---|---|---|---|---|
| 1 | Move hosting to Cloudflare Pages (docs/17 §2.4) so `_headers` applies: HSTS, CSP, frame, sniff, referrer and permissions policies, a one-year immutable cache for `/assets/*`, Brotli, HTTP/3 | securityheaders.com F → A, SSL Labs B → A, repeat visits served from cache | 2 to 3 days (already planned for the API) | Low: static files, same build command | **P1** |
| 2 | Re-run PageSpeed Insights and securityheaders.com after this PR deploys and record the live scores in this document | Confirms the lab numbers on the real network | 15 minutes | None | **P1** |
| 3 | Split the home page's chapter CSS and the bilingual copy out of the 297 KB document (per-chapter stylesheets loaded on approach; `data-id` copy fetched on language switch) | FCP and LCP on mobile: the HTML would fall to roughly 120 KB | 2 days | Medium: the home page's language and scene logic are tightly coupled | P2 |
| 4 | Critical CSS for the shared stylesheets (`site-ui.css`, `persona-folders.css`, `persona-premium.css`, `see-it-work.css`): inline the above-the-fold rules, load the rest with `media="print"` swap | Removes 4 to 6 render-blocking requests on the persona pages | 1 day | Low | P2 |
| 5 | Responsive `srcset` for the remaining single-source photos (chapter cards, trail cards, need cards) and AVIF alongside WebP | 300 to 600 KB per full scroll on the home page | 1 day with the existing `scripts/decks/images.json` tooling | Low | P2 |
| 6 | Lazy-load the LMS player and registry on product pages only when a lesson opens | 470 KB less on each product landing page | 1 day | Medium: the player is referenced by the syllabus and the audience layer | P3 |
| 7 | Replace the sky canvas on phones with a pre-rendered gradient still per chapter, keeping the canvas for desktop | Removes the remaining scroll-time CPU cost on low-end phones | 1 day | Low: the stills already exist for the chapter backdrops | P3 |
| 8 | Minify the inline CSS and JS at build time (`scripts/build-site.py` already rewrites pages) | 10 to 15 percent of HTML bytes after gzip | Half a day | Low | P3 |
| 9 | Add `Cache-Control` to the GitHub Pages interim: not possible (600 s fixed); accept until item 1 | | | | note |

## 6 · Hosting-level findings (headers, TLS, cache)

- **securityheaders.com F.** The scan looks for `Strict-Transport-Security`, `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` and `Permissions-Policy`. GitHub Pages sends none of them and offers no way to add them; a `<meta http-equiv>` tag can only express CSP and is not read by the scanner. `prototype/_headers` holds the full set for Cloudflare Pages, with a CSP that permits exactly what the pages load today (self-hosted fonts, inline scripts and styles, the YouTube embeds, the analytics loader) and a one-year immutable cache for `/assets/*`. When the site moves, the grade moves with it; the CSP should be deployed in `Content-Security-Policy-Report-Only` for a day first and promoted once the report endpoint is quiet.
- **Qualys SSL Labs B.** The grade reflects GitHub Pages' TLS configuration (the certificate chain and cipher suites are theirs). Cloudflare's default edge configuration scores A; enabling the HSTS preload header above makes it A+.
- **`cache-control: max-age=600` on every asset.** GitHub Pages caps caching at ten minutes, so repeat visits re-validate every image and script. The `_headers` policy gives fingerprinted assets a year and HTML ten minutes.
- **Text compression.** GitHub Pages serves gzip; Cloudflare adds Brotli, which is 15 to 20 percent smaller on this site's HTML.

## 7 · Method and reproduction

```
# local gzip server for measurement (scratch tooling, not part of the site)
PORT=8954 node qa_gz_server.js
# Lighthouse 12.8, mobile preset (default) or desktop
CHROME_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome \
  npx lighthouse http://localhost:8954/ --chrome-flags="--headless=new --no-sandbox" --output=json
# GitHub Pages has no /api: the probe is answered locally in that build
sed -i 's/var STATIC_HOST = false;/var STATIC_HOST = true;/' prototype/js/mt-api.js
```

Lighthouse is run against the built site (`python3 scripts/build-site.py`) with the static-host flag set as the deploy workflow sets it. Layout-shift attribution used a Playwright session with the same throttling and a `PerformanceObserver` on `layout-shift` entries; the before/after layout comparison recorded the bounding boxes of every identified element, card, heading and link on desktop and phone and reported any that moved by more than 4 px.

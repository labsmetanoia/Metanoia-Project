# Mind Palace — Product Strategy & Design Specification

**Metanoia Labs · Professional knowledge and career intelligence platform**
Version 1.0 · 2026-08-17 · Status: adopted; MVP implemented at `/pages/mind-palace.html`

Benchmark studied: McKinsey Insights (featured-insights) — for its underlying principles only.
Nothing in this document copies McKinsey's identity, structure, or content.

---

## 1 · Product strategy

**What Mind Palace becomes.** The knowledge layer of the Metanoia ecosystem: the place a
member (or prospective member) goes when they have a professional question rather than a
product task. Every other Metanoia product is a *doing* surface — The Map orients, The Range
(Explore) investigates opportunities, The Pack and The Rope prepare. Mind Palace is the
*understanding* surface that feeds all of them.

**Strategic role.**

1. **Top of funnel.** It is the only Metanoia surface designed to be visited weekly by people
   who have not bought anything. Content answers real questions; products answer the
   follow-up ("now do it with us"). Every article ends at the pillar that operationalises it.
2. **Retention between product moments.** Preparation products are episodic; questions are
   continuous. Mind Palace gives members a reason to return between milestones.
3. **Trust collateral.** The editorial standard (traced claims, named unknowns, no hype) is
   the same honesty system the products run on. Content is where that standard is most
   visible to outsiders — it *is* the brand argument.
4. **Intelligence substrate.** The taxonomy (stage × topic × format) is the same vocabulary
   as the Career Identity model, which is what makes real personalization possible later
   without a data-science project.

**What it must not become.** A blog (chronological, voicey, unstructured), a news aggregator
(commodity, undifferentiated), or a content-marketing dump (erodes the trust the products
depend on). The test for every piece: *does a specific reader leave knowing what to do next?*

## 2 · Core value proposition

> **Mind Palace — know what's out there, and what to do about it.**
> Practical professional intelligence for every stage of the climb: careers, opportunities,
> skills, and recruitment — written to be acted on, honest about its sources, and connected
> to the tools that turn knowing into doing.

Positioning statement: *For students through experienced professionals navigating the
Indonesian and international job market, Mind Palace is the professional knowledge hub that
turns questions into next steps — unlike news sites and generic career blogs, every piece is
actionable, traceable, and wired into the Metanoia products that execute on it.*

Differentiators, in order: **actionability** (the What → So what → Now what frame is
enforced structurally, not aspirationally), **honesty** (claims trace to sources; unknowns
are named — inherited from the platform's data-dignity rules), **ecosystem** (content lands
on a tool, not a dead end), **bilinguality** (EN/ID as first-class, not translation
afterthought).

## 3 · Information architecture

The proposed 8-category structure was evaluated and **reduced to 6**. Rationale:

- *Featured Insights* is a **surface**, not a category — every category can produce a
  featured piece. Keeping it as a taxonomy node creates orphan content. → It becomes the
  hub's lead slot plus a `featured` flag.
- *Data & Insights* is a **format**, not a topic — a salary analysis is a Career or Market
  piece *in data format*. A data category would compete with every other category for the
  same articles. → It becomes a format (`data`) plus a hub section fed by it.
- *Jobs & Opportunities* stays, but as a distinct **content type** (opportunity radar
  entries with deadlines and official links), because its lifecycle (expiry) differs from
  editorial.

**Adopted taxonomy — two orthogonal axes plus a content type:**

**Topics (6):**
| id | EN | Scope |
|----|----|-------|
| `career` | Career Paths | exploration, planning, transitions, growth |
| `skills` | Skills & Capabilities | technical, soft, emerging, AI-era skills |
| `recruitment` | Getting Hired | CV, assessments, interviews, processes, company hiring |
| `market` | Industry & Market | industry trends, labour market, future of work, companies |
| `worklife` | Professional Life | workplace, productivity, networking, etiquette, balance |
| `opportunities` | Opportunities | internships, scholarships, graduate programmes, fellowships |

**Formats (5):** `guide` (how-to playbook) · `explainer` (concept, decoded) · `data`
(numbers with reading) · `perspective` (argued opinion, attributed) · `radar` (opportunity
entry, dated, expiring).

**Stages (4):** `student` · `fresh-graduate` · `early-professional` · `mature-professional`
— identical ids to the platform's audience editions and the Career Identity model. This
single decision is what makes personalization cheap and coherent.

Navigation = topics. Filtering = topics × formats × stages. Every article carries exactly
one topic, one format, one or more stages.

## 4 · User journey

```
Land (question in mind)
 → orient: hero states what this place is; topic bar + search are one glance away
 → discover: featured lead / topic browse / search / "for your stage" rail
 → read: article states What → Why it matters → What the data says → What to do
 → capture: save (bookmark), reading progress, related pieces at exit
 → act: every article's "Do something about it" block lands on a Metanoia tool
         (Range Explore for exploration pieces, Pack for application pieces, …)
 → return: saved shelf + recently viewed + stage rail make the second visit personal
```

The journey is deliberately shallow: **never more than two clicks from landing to reading**,
and never a dead end — the exits from an article are related reading, the topic page, or a
product.

## 5 · Homepage structure (implemented)

1. **Masthead** — identity, search, stage selector (the personalization control), theme/lang.
2. **Topic bar** — the 6 topics as persistent navigation, sticky on scroll.
3. **Lead insight** — one featured piece, editorial scale (serif display headline, dek,
   kicker). One, not three: hierarchy is a decision.
4. **Second row** — two secondary features, then a 3-up latest grid.
5. **For your stage** — rail filtered by the chosen stage (and by Career Identity industry
   interests when the reader has one on this device — labelled as such).
6. **Opportunity radar** — dated opportunity entries with official links; expired entries
   say so rather than disappearing silently.
7. **The numbers** — data section. MVP charts are computed live from Metanoia's own
   opportunity database (real, verifiable, no fabricated statistics) and labelled with
   exactly that provenance.
8. **Topic index** — all six topics with counts, as the page's table of contents.
9. **Ecosystem hand-off** — "Knowing is half of it" band: Range (Explore) / The Pack /
   The Rope, mapped to what the reader was just reading about.
10. **Editorial standard** — short, visible statement of the rules content follows.

## 6 · Content page (implemented)

Kicker (topic · format · stages) → serif display headline → dek → byline row (author,
date, read time, save, share) → thin reading-progress bar → body in the enforced frame:

- **What's happening** (context, 2–4 paragraphs)
- **Why it matters** (callout)
- **What the data says** (only when sourced; absent otherwise — never decorative numbers)
- **What to do about it** (numbered, concrete, the heart of the piece)
- **Where Metanoia helps** (product hand-off, one honest sentence each)
- **Sources & honesty** (links; explicit "our reading" markers for editorial judgement)

Exit: related pieces (same topic first, then same stage), back to topic.

## 7 · Search & discovery

MVP: instant client-side search over title/dek/tags/body (the corpus ships with the page),
opened from masthead or `/` key, results grouped by topic, zero-result state suggests
topics. Filters on topic pages: format chips × stage chips, counts always visible, one-tap
clear. Discovery besides search: topic bar, stage rail, related-at-exit, saved shelf,
recently viewed. Trending is **editorial** (a curated flag), not fake analytics — the
platform does not display numbers it does not have.

## 8 · Personalization

Principle: personalization is a *filter the reader controls*, never a hidden profile.

- **v1 (shipped):** stage selector persisted on device (`mp-stage`, prefilled from the
  platform's audience choice when present); "For your stage" rail; article stage-fit chips.
- **v1.5 (shipped, passive):** when a Career Identity exists on this device
  (`mt-range-identity`), its preferred industries re-rank the stage rail — labelled
  "using the Career Identity on this device".
- **v2 (future):** consumption-informed ranking (topics you actually read), saved-shelf
  topic weighting, weekly digest assembled from the same signals. All device-local until a
  real account/backend exists; the page must never imply server-side knowledge it lacks.

## 9 · Editorial system

- **Categories/formats/stages** as §3. One topic per piece — forces editorial decisions.
- **Structure** as §6 — the template enforces it; a piece missing "What to do" does not ship.
- **Length**: guides 900–1,500 words; explainers 600–1,000; data pieces led by the chart;
  radar entries ≤120 words + facts (deadline, eligibility, official link).
- **Attribution**: byline required. MVP content is authored as **Metanoia Editorial**; expert
  contributions carry the contributor's name and a one-line credential. No invented authors.
- **Dates**: published + reviewed dates on every piece. Radar entries carry check dates and
  an explicit "verify on the official page" line; expiry renders as an expired state.
- **Claims**: numbers require a named source or the platform's own data; otherwise the
  sentence is rewritten as judgement and marked "our reading". Same rule as the products.
- **Freshness**: every piece re-reviewed at ≤180 days or flagged "aging" automatically.
- **Governance**: registry file is the single source of truth; adding content is a data
  change, not a page change; the banned-strings integrity gate applies to content too.

## 10 · Visual design system

Metanoia's existing system, tuned editorial — *not* a McKinsey clone:

- **Typography**: Playfair Display for display headlines (the platform serif), system sans
  for UI and body; a wider type scale than product pages (clamp 30→56px lead headline);
  65–72ch measure for reading.
- **Grid**: 12-col fluid, max 1200px; lead spans 7/5 with image; secondary 2-up; latest 3-up;
  mobile collapses to a single column with the lead keeping its scale.
- **Cards**: flat editorial cards — kicker, headline, dek, meta; hairline gold borders; hover
  lifts headline color, not the card (editorial restraint vs product-card motion).
- **Imagery**: abstract editorial gradients + the platform's line-icon language per topic;
  no stock photography in MVP (nothing fake-looking).
- **Color**: platform tokens (gold on deep navy; designed light mode); one accent per topic
  used only in kickers and chips — hierarchy stays typographic.
- **Data viz**: hairline bar/row charts, gold scale, every chart titled with its source;
  built inline (SVG), no library.
- **Motion**: fade-up on section entry, progress bar on articles, 200ms token curves;
  reduced-motion respected.
- **Components**: masthead, topic bar, lead/secondary/standard/radar cards, stage chip,
  filter chip, search overlay, article shell, callouts, source block, save button, rail.

## 11 · Mobile UX

Mobile is the primary reading context (commute reading). Decisions, not adaptations:
sticky compact topic bar (horizontal scroll, snap); search full-screen; lead card keeps
display type at readable clamp; 16px minimum body on article pages with 1.7 line-height;
save/share as fixed bottom actions on articles; stage selector one-tap in masthead; grids
collapse to single column, radar to swipeable row; tap targets ≥44px; no hover-dependent
affordances.

## 12 · AI capabilities

| Phase | Capability | Honest implementation |
|-------|-----------|----------------------|
| MVP (shipped) | Instant search, related-content, stage/interest ranking | deterministic, on-device, explainable |
| Next | "Ask Mind Palace" | retrieval over the corpus with cited passages — search that answers, not a chatbot |
| Next | Summaries ("the 30-second version") | pre-authored per piece by editorial, not generated at read time |
| Later | Weekly briefing | assembled from stage + read topics + radar deadlines |
| Later | Skill-gap and opportunity suggestions | joins Career Identity to content taxonomy; every suggestion carries its because |
| Guardrail | — | AI ranks, retrieves, and summarises the corpus; it does not author claims. Recommendations always show their reason. |

## 13 · MVP definition

- **Must have (shipped):** 6-topic IA · hub (lead/secondary/latest/stage rail/radar/own-data
  section/topic index/ecosystem band/editorial standard) · article template with enforced
  frame · instant search · topic pages with format+stage filters · save + recently viewed
  (device-local) · stage personalization · EN/ID · dark/light · mobile-first · 12 seed
  pieces across all topics and formats · integrity-gate compliance.
- **Should have (next):** 30+ piece corpus · pre-authored summaries · expert contributor
  pieces · newsletter capture · per-topic RSS.
- **Could have:** Ask Mind Palace (cited retrieval) · weekly briefing · reading streaks.
- **Future (needs backend):** cross-device profiles · consumption analytics · trend
  detection · true recommendation ranking.

## 14 · Benchmark principles adopted (and rejected)

From McKinsey Insights, **adopted as principles**: one lead insight, not a carousel;
editorial kickers as the scent of information; typographic hierarchy over decoration;
topics as durable navigation rather than dates; format diversity made visible (chart-led vs
prose-led cards); restrained palette with whitespace as structure; "featured" as an
editorial judgement surfaced honestly.

**Deliberately rejected**: gated PDFs (everything reads in place); corporate-author
anonymity in perspective pieces (arguments carry names); infinite-scroll feeds (finishable
sections instead); stock corporate photography (abstract system imagery until real
photography exists); newsletter interstitials that interrupt reading.

Also drawn on: Stripe Guides (actionability), FT (typographic discipline on mobile),
First Round Review (single-topic depth over volume).

## 15 · Implementation prompt

> The following is the production prompt this MVP was built from. It is preserved so the
> next builder (human or AI) inherits intent, not just artefacts.

**Build the Mind Palace page for Metanoia Labs** (`prototype/pages/mind-palace.html` — a
static, zero-backend page in an existing platform).

*Product*: professional knowledge hub per §1–2 above. *IA*: exactly the taxonomy in §3 —
6 topics, 5 formats, 4 stages sharing ids with the platform's audience editions. *Data*: a
single registry `prototype/data/mindpalace.js` (`window.MT_MP = {topics, articles, radar}`),
bilingual (`{en,id}` pairs), each article `{slug, topic, format, stages[], featured?,
trending?, date, reviewed, minutes, title, dek, body sections per §6, sources[], tools[]}`.
Adding content must require touching only this file. *Views*: hash-routed —
`#/` hub (sections per §5, in order), `#/topic/<id>` (filter chips: format × stage, live
counts), `#/read/<slug>` (article per §6 with progress bar, save, share via
navigator.share/clipboard, related), `#/saved` (saved + recently viewed shelves).
*Search*: overlay on `/` key and masthead button; instant, client-side, grouped by topic.
*Personalization*: `mp-stage` on device, prefilled from platform audience key when present;
stage rail re-ranked by `mt-range-identity` preferred industries when available, with the
label "using the Career Identity on this device". *Design*: platform tokens (gold/navy,
`mt-theme` dark default + designed light, `mtLang` EN/ID with data-en/data-id swap +
re-render), Playfair display headlines, editorial cards per §10, inline SVG charts computed
from `data/range/companies-db.js` and labelled as Metanoia's own database. *Honesty*: no
fabricated statistics, authors, quotes, or engagement numbers; trending is an editorial
flag; radar entries carry checked-dates and official links, and expire visibly; banned
strings per the integrity gate. *Chrome*: platform topbar (wordmark, breadcrumb, theme,
lang) and footer links; canonical URL kept. *Mobile*: per §11. *Tests*: Playwright
assertions for every section, route, filter, save persistence, stage switch, language
switch, theme, chart-source label, mobile overflow, and zero page errors.

---

*Maintained by Metanoia Editorial. Changes to taxonomy or editorial rules amend this
document first, then the registry.*

---

## 16. v2 revision — from content library to professional intelligence layer

Adopted in full from stakeholder review (2026-08-22). The north star changed:
Mind Palace is not Metanoia's content page; it is Metanoia's professional
intelligence layer. The value chain it must serve on every surface is
**information → insight → personal relevance → action → Metanoia product**.

### 16.1 Positioning
Brand line (Option A, chosen for simplicity and scalability):
**"Mind Palace — Your guide to the professional world."** Supporting message:
insights, opportunities and practical knowledge from first opportunity to next
move. The hero leads with this plus a central search and two doors:
Explore insights / Explore opportunities.

### 16.2 Homepage storyline (replaces §5 ordering)
1. **Hero + central search** — the search is the product's front door, framed
   as "What are you trying to figure out?" with example questions.
2. **What's worth knowing now** — explicit insight hierarchy: Tier 1 featured
   insight (large), Tier 2 three featured reads (medium), so curation is
   visible; nothing renders with equal weight.
3. **The professional signals** — short, visual, data-first tiles. Every
   figure is computed live from Metanoia's own database with provenance on the
   tile; the signature section stays honest by construction.
4. **Explore by what you need** — need-based doors replace content-type
   navigation: *understand my career / get hired / become better / understand
   the market*. Topics remain as the underlying taxonomy and as secondary
   navigation.
5. **Opportunities worth exploring** — the radar promoted to a first-class
   tabbed module (graduate programmes / internships / scholarships / joint
   recruitment) with a built-in bridge into The Range (Explore).
6. **Practical playbooks** — the how-to shelf.
7. **Perspectives** — opinion pieces; community and practitioner voices are on
   the roadmap and the shelf says so instead of staging fake contributors.
8. **Latest from Mind Palace** — dense chronological editorial list (long tail).
9. **Your next move** — personalized, deterministic routing into the next
   pillar (Career Identity → See What Fits → The Pack / The Rope), with the
   selection logic explained on the surface. Read → explore → prepare →
   practise is the ecosystem chain, not "related articles".

### 16.3 Article frame v2
The frame gains a mandatory personal-relevance layer between judgement and
action: **What is happening → Why it matters → (What the data says) → What
this means for you → What to do.** "What this means for you" is written per
reader stage; the reader's chosen stage is highlighted. This is the layer that
makes a piece distinctly Metanoia rather than generic career content.

### 16.4 Formats as reading experiences
Formats are renamed to editorial products: **Playbook** (step-by-step),
**Explainer**, **Signal** (short data-driven), **Perspective**, **Opportunity**
(radar entries). Roadmap formats — Field Note, Toolkit, Career Brief — join
only when real content of that kind exists; an empty format never ships.

### 16.5 Search as the front door
Search results group **Insights · Opportunities · Do it in Metanoia** so a
query can resolve to reading, to a programme, or to the product where the work
happens. Example questions seed the empty state.


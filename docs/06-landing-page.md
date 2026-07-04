# 06 · Landing Page — Structure & Copy

The landing page has one job: make the visitor feel *seen* within five seconds, then convert that recognition into the free diagnostic. It is a narrative page (problem → truth → mechanism → proof → invitation), not a feature brochure.

A working prototype implementing this document lives at [`prototype/landing.html`](../prototype/landing.html).

**Primary CTA everywhere:** `Get your free Career Map` (the diagnostic). Secondary: `For employers`.

---

## Section 1 — Hero

**Eyebrow:** `THE CAREER OPERATING SYSTEM`

**Headline:**
> **Talent is everywhere. Access isn't. We're fixing that.**

**Subheadline:**
> The knowledge, coaching, mentors, and employer connections that privileged candidates inherit — rebuilt as software, personalized by AI, and open to everyone. Start with a free diagnostic that shows you exactly where you stand and what to do next.

**CTAs:** `Get your free Career Map →` · `Watch how it works (90s)`

**Trust strip (below fold-line):** `Free to start · No credit card · 15 minutes to your personalized 90-day plan`

**Visual:** the product itself — the Readiness Ring animating from 41 → 74 beside a drawn Path with waypoints lighting up. Product-as-hero, not stock imagery.

---

## Section 2 — The Problem (the recognition moment)

**Header:** **You were told it's a meritocracy. Then you sent 200 applications into silence.**

**Body:**
> Here's what nobody tells you: the job market runs on invisible infrastructure. Insider knowledge about how hiring actually works. Someone to practice interviews with. A mentor who's been there. A referral that skips the pile. The confidence that comes from all of the above.
>
> Candidates from elite networks inherit this infrastructure. Everyone else is left to guess — and then told the problem is their CV.
>
> **You are not failing. You've been navigating without the map.**

**Design note:** dark section; the last line renders large, in ember. This is the emotional pivot of the page.

---

## Section 3 — The Turn (what Metanoia is)

**Header:** **Metanoia (μετάνοια): a transformative change of mind. Also: your unfair advantage, democratized.**

**Body:**
> Metanoia rebuilds the entire hidden infrastructure of career success as one platform — an AI career coach that knows your whole journey, real practice with real feedback, a community that has your back, and employers who evaluate what you can *do*, not where you're from.

**Three-up value props:**
1. **Know exactly where you stand.** A 15-minute diagnostic maps your readiness across skills, materials, interviews, network, and market fit — then hands you a personalized 90-day plan. No generic advice, ever.
2. **Practice like the ones who were coached.** Mock interviews with STAR-level feedback. A CV studio with real ATS scoring. Job simulations built with real employers.
3. **Walk in with people behind you.** Practice partners at your stage. Mentors who've made the exact jump you're making. Alumni who hold the door open.

---

## Section 4 — The Ecosystem (how it works)

**Header:** **Five engines. One journey.**

Interactive band — five tabs/cards:

| Engine | One-liner |
|---|---|
| **Compass** | Discover where you're going and the fastest honest path there. |
| **Forge** | Build the CV, interview skills, and verified credentials that open doors. |
| **Circle** | Peers, mentors, and a community that refuses to let you quit. |
| **Bridge** | Get discovered by employers for what you can do — on your terms. |
| **Atlas** | See the market like an insider: demand, skills, salaries, timing. |

**Caption:** `Everything talks to everything. Your progress in one engine unlocks intelligence in the others.`

---

## Section 5 — The Journey (user story walk-through)

**Header:** **From "what's wrong with me?" to "when can you start?"**

Horizontal timeline (the Path motif), five chapters with microcopy:

1. **Orientation** — "Take the diagnostic. See your real position — probably stronger than you think, clearer than you feared."
2. **Preparation** — "Follow your 90-day plan. Watch your readiness score climb as your capability does."
3. **Connection** — "Join a cohort. Trade mock interviews. Meet the mentor who rewrites what you believe is possible."
4. **Transition** — "Apply with verified credentials, insider intelligence, and people vouching for you. Navigate offers like you've done it before."
5. **Alumni** — "Then turn around and hold the map for the next person. That's how this ends the access gap for good."

---

## Section 6 — The AI (intelligence with a why)

**Header:** **AI that coaches you like it knows you. Because it does.**

**Body:**
> Meta, your AI career coach, remembers your whole journey — every practice session, every setback, every win. It tells you the specific next action with the highest leverage, explains every score it gives you, and adapts your plan when the market moves.

**Feature bullets:**
- "Your STAR structure slipped on conflict questions — here's a 15-minute rep to fix it."
- "Demand for your target role in Jakarta is up 23% this quarter. Two skills are driving it."
- "Users at your stage typically land interviews after ~2 more peer sessions and one CV revision."

**Trust line:** `Every score is explainable. Every recommendation has a why. No black boxes about your future.`

---

## Section 7 — Proof (community & outcomes)

**Header:** **Real people. Verifiable outcomes. Published honestly.**

- 3 testimonial cards (name, photo, before → after: "6 months of silence → 3 offers in 5 weeks").
- Live impact stats band: `X diagnostics taken · X peer sessions exchanged · X verified credentials · X placements` + link: `See our full impact dashboard — including the numbers we're still improving.`
- Employer logo strip: `Employers who hire on capability` .

**Design note:** honesty is the differentiator — the impact-dashboard link *is* the trust move.

---

## Section 8 — For Employers (secondary audience band)

**Header:** **Hiring? Meet candidates who've already shown you their work.**

**Body:** `Co-create job simulations, watch verified capability instead of keyword-stuffed CVs, and open a pipeline of candidates you'd never have found on pedigree filters — measured to conversion and quality-of-hire.`

**CTA:** `Explore the employer platform →`

---

## Section 9 — The Mission Close (investor-grade storytelling)

**Header:** **This is bigger than job search.**

**Body:**
> Every generation, an ocean of talent is wasted because the map of opportunity is handed to the few. Metanoia exists to end that — one transformed career at a time, until access to opportunity is infrastructure, like roads and electricity.
>
> Join us early. Not because it's finished — because you'll help build it.

---

## Section 10 — Final CTA

**Headline:** **Your map is 15 minutes away.**

**Sub:** `Free diagnostic. Personalized 90-day plan. No credit card, no spam, no generic advice.`

**CTA:** `Get your free Career Map →`

**Footer:** platform links · employers · universities · mentors · intelligence library · impact · legal (incl. Data Dignity pledge) · language toggle (EN/ID).

---

## Conversion & Craft Notes

- **Above the fold:** headline + product-as-hero + single CTA. Nothing else competes.
- **CTA discipline:** one primary CTA repeated; employer CTA appears exactly twice (nav + section 8).
- **Performance:** static/SSG, <100KB critical path, LCP <1.5s on mid-range mobile — the audience is mobile-first, bandwidth-constrained.
- **SEO:** landing targets brand + category terms; the Intelligence Library carries long-tail organic.
- **A/B roadmap:** hero headline (#3 vs #1 from brand doc), diagnostic CTA label, section 2 length.

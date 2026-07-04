# 04 · UX Structure & Design Direction

## 1. The UX Thesis

**Every screen answers: "What is the user feeling right now, and what do they need next?"**

Metanoia's users often arrive carrying rejection fatigue and self-doubt. The UX must therefore behave like a *guide*, not a *database*: one clear next action, visible growth, warmth without cheerleading, and honesty without harshness. The product should feel like the combination of:

- the craft and calm of top-tier SaaS (Linear, Stripe, Notion),
- the guided-journey feel of great fitness/learning products (Whoop, Duolingo's structure — minus its anxiety mechanics),
- and the belonging of well-run communities (small cohorts, not infinite feeds).

## 2. UX Principles

1. **One next action.** Dashboards lead with "your highest-leverage next step," not a grid of features. Feature breadth is revealed progressively as the journey needs it.
2. **Progress is capability, not activity.** Visualize skills gained and readiness movement, never vanity streaks. "Your interview readiness rose 61 → 74. Here's why."
3. **Warm honesty.** Feedback is specific and direct, wrapped in respect. No inflated praise (it destroys trust), no cold grading (it destroys people).
4. **The system explains itself.** Every score, recommendation, and match shows its reasoning in one tap.
5. **Community feels like a gift economy.** Peer sessions framed as giving; asking for help is designed to feel normal and safe.
6. **Fast and light.** Mobile-first, low-bandwidth tolerant (target market reality), <2s perceived loads, offline-tolerant reading.
7. **Emotionally aware states.** Empty states, rejection moments, and stall periods get deliberately designed compassionate treatments — these are the moments users quit.

## 3. The Emotional Journey → UX Mapping

| Chapter | User feels | UX responds with |
|---|---|---|
| **Arrival** | Demoralized, confused, self-blaming | The reframe ("You are not failing — the system is opaque"); zero-pressure exploration; the free diagnostic as a generous gift |
| **Orientation** | "Where do I stand? What first?" | 15-question diagnostic → visual gap map → *one* specific first action; credible specificity builds trust |
| **Preparation** | Determined but fragile | Forge tools with visible skill growth; small wins engineered early (first CV score lift within day 1) |
| **Connection** | Isolated, needs belonging | Cohort placement, first peer session within week 1, mentor stories; reciprocity framing |
| **Transition** | Anxious, high-stakes | Application command center, interview-day checklists, rejection-recovery flows, offer navigation |
| **Alumni** | Proud, grateful | The mentor invitation as a rite of passage; contribution reputation; "hold the bridge for the next one" |

## 4. Design Language

### 4.1 Foundations

| Token area | Direction |
|---|---|
| **Palette** | `Ink` #0E1B2C (deep indigo-navy base) · `Ember` #F59E0B→#F97316 range (transformation accent, used sparingly for progress & CTAs) · `Bone` #FAF8F5 (warm off-white surfaces) · `Sage` #10B981 (verified/success) · `Mist` #94A3B8 (secondary text). Dark mode is a first-class theme (ink-based, not pure black). |
| **Typography** | Headings: modern grotesque (General Sans / Space Grotesk class), tight tracking, confident sizes (clamp 2.5–4.5rem hero). Body: humanist sans (Inter/Source Sans class) 16–18px, 1.6 line height. Numerals: tabular for scores/data. |
| **Spacing & shape** | 8px grid; generous whitespace; 12–16px radii (soft, human, not bubbly); 1px hairline borders over heavy shadows. |
| **Iconography** | Thin-stroke, geometric, with a cartography motif family (waypoints, routes, contour lines) reserved for journey elements. |
| **Illustration** | Abstract route/map linework + real human photography (people practicing, mentoring, celebrating). Never isometric-corporate-blob people. |
| **Motion** | 150–250ms ease-out for UI; meaningful motion only: scores count up, paths draw, milestones bloom once. `prefers-reduced-motion` respected. |
| **Accessibility** | WCAG 2.2 AA minimum; 4.5:1 text contrast; full keyboard nav; screen-reader-tested flows; Bahasa Indonesia + English from day 1 (i18n architecture, not retrofit). |

### 4.2 Signature UI elements

- **The Readiness Ring** — the user's per-goal readiness score as a ring that fills over the journey; tapping it explodes into the explainable breakdown (CV · interviews · skills · market fit · network).
- **The Path** — the 90-day plan rendered as a drawn route with waypoints (done), the current waypoint (pulsing ember), and the fog beyond (future steps revealed as reached — progressive disclosure as *narrative*).
- **Insight Cards** — Atlas intelligence delivered as swipeable cards ("Demand for data analysts in Jakarta ↑23% this quarter") — insider knowledge as a feed.
- **The Passport** — a beautifully-designed credential wall users are proud to share; doubles as the public profile employers see (with user-controlled visibility).
- **Milestone Moments** — full-screen, once-only celebrations at real milestones (first mock passed, first interview, offer) with cohort reactions.

## 5. Key Screens & Wireframe Concepts

### 5.1 Student Dashboard ("Basecamp")
```
┌────────────────────────────────────────────────────────────────┐
│  Good morning, Rara.                        [Readiness Ring 67]│
│  You're 3 waypoints from Interview-Ready.                      │
├────────────────────────────────────────────────────────────────┤
│  ► NEXT ACTION                                                 │
│  Practice the "Tell me about a conflict" question — your STAR  │
│  structure slipped in your last session.        [Start · 15min]│
├──────────────────────────┬─────────────────────────────────────┤
│  YOUR PATH  (day 34/90)  │  CIRCLE                             │
│  ●──●──●──◉──○──○─▒▒▒    │  • Dimas requested a peer mock, Thu │
│  current: Interview Reps │  • Cohort 12: Sinta got an offer 🎉 │
├──────────────────────────┼─────────────────────────────────────┤
│  ATLAS INSIGHT           │  THIS WEEK                          │
│  UX roles in Jakarta:    │  ▸ 2 peer sessions   ▸ 1 CV rev     │
│  +18% postings this mo.  │  ▸ Simulation: BCA product task     │
└──────────────────────────┴─────────────────────────────────────┘
```
Notes: single hero action; ring top-right always; path is horizontal and narrative; community column humanizes every visit.

### 5.2 Diagnostic Results ("The Map Reveal")
The emotional pivot of onboarding. Full-screen, staged reveal:
1. "Here's what we see" — radar/gap map across 5 dimensions, drawn live;
2. "Here's what it means" — plain-language, validating interpretation;
3. "Here's your first move" — one action, one button. No dashboard dump.

### 5.3 CV Studio
Split view: document editor left; live panel right with ATS score dial, keyword match vs. pasted target job description, and a ranked fix-list ("Quantify the impact in line 3 — try: 'grew X by Y%'"). Every fix links to an inline rewrite assist.

### 5.4 Interview Coach
Session room aesthetic: calm, dark, focused. Question card → record (video/audio/text) → STAR-structured feedback panel (structure ✓ / situation ✓ / task weak / result missing) → pattern tracker across sessions ("You've understated leadership impact in 4 of 6 answers").

### 5.5 Peer Session Flow (Circle)
Match card (shared goal, shared stage, "what you can give each other") → schedule → guided session template (roles: interviewer/candidate, question bank provided, feedback rubric) → mutual gratitude exchange → both Passports credited with contribution.

### 5.6 Mentor Portal Home
One screen: this week's sessions with **AI-prepared mentee briefs** ("Dimas, day 41, stalled at interview stage, strong CV, low confidence after 3 rejections — suggested focus: reframing + one mock"), availability toggle, reputation summary. Nothing else.

### 5.7 Employer Pipeline
Dense, professional: funnel visualization (invited → started → completed → contacted → interviewed → hired), candidate signal cards (verified skills, completion quality percentile — no PII pre-consent), cohort ROI panel (cost-per-qualified-candidate vs. benchmark).

### 5.8 Landing Page
Full structure and copy in [06-landing-page.md](06-landing-page.md); working prototype in [`prototype/landing.html`](../prototype/landing.html).

## 6. Content & Microcopy System

- **Second person, present tense, active.** "You're 3 waypoints from Interview-Ready," never "Users should complete…"
- **Specificity is the brand.** Numbers, names, reasons in every recommendation.
- **Rejection microcopy is pre-designed:** "This one said no. Your readiness didn't drop — the funnel is a numbers game and you're still above the line. Here's what we adjust." 
- **Bilingual voice parity:** Bahasa Indonesia copy written natively (not translated), same warmth register.

## 7. UX Quality Bar (Definition of Done)

Every shipped flow must pass:
1. The 5-second test — a first-time viewer can say what to do next.
2. The emotion test — does this screen respect a user on their 40th rejection?
3. The explanation test — can every number on screen be tapped to reveal "why"?
4. The mobile/low-bandwidth test — usable on a mid-range Android on 3G.
5. The accessibility pass — keyboard, screen reader, contrast.

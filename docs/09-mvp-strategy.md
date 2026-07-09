# 09 · MVP Strategy & Go-to-Market

## 1. MVP Thesis

**Prove one sentence:** *"A person outside elite networks who follows Metanoia's guided journey measurably improves their interview rate — and can feel the transformation happening."*

Not "we built many features." The MVP is the **minimum complete transformation loop**: Diagnose → Plan → Practice → Connect → Measure improvement.

### The wedge
- **Segment:** final-year students & fresh graduates (0–2 yrs) targeting business/tech roles, Indonesia (Jabodetabek first).
- **Why this wedge:** highest pain density, mobile-first, reachable through universities and campus communities, fastest outcome cycles (they're applying *now*), and the founding blueprint's market thesis.
- **Wedge product:** the free Career Map (diagnostic) — a standalone, shareable artifact of genuine value that requires no network effects to be useful on day 1.

## 2. What We're Testing (riskiest assumptions first)

| # | Assumption | Test | Kill/pivot signal |
|---|---|---|---|
| 1 | The access-gap framing *converts* (people feel seen, not lectured) | Landing + diagnostic funnel | Visitor→diagnostic <15% after iteration |
| 2 | AI guidance is specific enough to be trusted | Post-diagnostic "was this accurate?" + plan adoption | Plan adoption <40% |
| 3 | Practice tools produce felt + measurable improvement | CV score lift, mock-session deltas, self-report | No measurable lift in 4 weeks of use |
| 4 | Strangers will practice with strangers (reciprocity works) | Peer session booking & completion rates | <25% of actives ever complete a peer session |
| 5 | The journey retains without gamification junk | W4 retention | <25% W4 retention among activated users |
| 6 | Improvement translates to real-world outcomes | Self-reported interview rates pre/post | No directional movement in 90 days |

Assumptions 1–3 are testable with **zero** employer partnerships — which is why employers are Phase 2.

## 3. MVP Scope Recap

(Full table in [07-features-and-roadmap.md](07-features-and-roadmap.md).) One line: **Compass (diagnostic, pathway, Meta v1) + Forge core (CV Studio, Interview Coach) + Circle light (cohorts, peer mocks) + Intelligence Library + Passport v1.** Everything else is deferred — especially the employer side, native apps, payments, and the mentor marketplace (replaced by founder-led manual mentoring for learning).

## 4. Sequenced 9-Month Plan

| Window | Focus | Exit criteria |
|---|---|---|
| **Wks 1–8 (Phase 0)** | Brand + landing + diagnostic + Passport/auth/event foundations; Intelligence Library seed (30 guides) | 2–3k waitlist; diagnostic completion >70%; "accurate?" >75% yes |
| **Wks 9–16** | Pathway engine + Basecamp + CV Studio; closed alpha (200 users, 2–3 partner campuses) | Day-1 CV score lift for >60% of alpha; qualitative "felt seen" evidence |
| **Wks 17–24** | Interview Coach + cohorts + peer matching; open beta (2k users) | ≥35% weekly active journey participation; peer session NPS >60 |
| **Wks 25–36** | Polish, resilience content, outcome tracking; public launch + first employer conversations (design partners, unpaid) | W4 retention >30%; first 25 attributed interview-rate improvements; 3 employer design partners signed for Phase 2 |

## 5. Go-to-Market (MVP stage)

1. **Campus beachheads:** partnerships with 3–5 university career offices + student organizations (they get free cohort tooling later — start the B2I relationship now).
2. **The Career Map as viral artifact:** shareable diagnostic result cards ("My readiness map") — designed for Instagram/TikTok/LinkedIn.
3. **Intelligence Library SEO/content engine:** bilingual insider-knowledge guides; TikTok/Reels versions of the sharpest insights (the "system honesty" content lane is highly shareable).
4. **Transformation stories from the alpha cohort** — documented from day 1; the marketing asset *is* the mission.
5. **Founder-led community:** the first 200 users get embarrassing levels of personal attention; their outcomes seed everything.

## 6. North-Star & Metric Tree

**North star: Verified Career Progress Events per month** (interviews landed, offers received, placements — reported & later verified).

```
North star
├─ Activation: signup → diagnostic → pathway accepted (target 55%)
├─ Engagement: weekly active journey participation (target 35–40%)
│   ├─ practice actions/user/week (target 3)
│   └─ peer/community sessions/user/month (target 2)
├─ Capability: median readiness delta at 30/60/90 days (target +15 @90d)
├─ Outcomes: self-reported interview rate pre vs post (target 2x @90d)
└─ Love: NPS (target >50) · "felt seen" qualitative panel
```

Guardrail metrics: diagnostic accuracy perception, AI cost/user/month, session no-show rate, moderation incidents.

## 7. Team (MVP stage)

Founder/product · full-stack lead (Next.js/NestJS) · full-stack engineer · AI engineer (FastAPI/LLM, can be fractional) · product designer (brand+UX) · content/community lead (bilingual, owns library + cohorts). Six people, everything else bought (per doc 08 build-vs-buy).

## 8. Funding Narrative Bridge

The MVP is engineered to produce the Phase-2 raise story: *"We can measurably transform career readiness and interview rates for the un-networked, at software margins, with organic acquisition through the artifact itself. Now we add the employer marketplace that monetizes it — on the model Forage already proved globally, in a market they don't serve, with an AI layer they don't have."*

## 9. Honest Risks & Mitigations

| Risk | Mitigation |
|---|---|
| AI advice feels generic → trust collapse | Specificity as the quality bar; eval suites; human review of early outputs; ship narrow-but-deep |
| Community cold-start | Cohorts capped small; founder-seeded; campus partnerships supply pre-connected groups |
| Outcome attribution is noisy | Self-report + verification flow built in from MVP; honesty about limits (publish methodology) |
| Free-tier AI cost blowout | Model routing, caching, depth gating; cost ledger per user from day 1 |
| Incumbent copy (job portals adding AI coach) | Moat = Passport + outcome data + regeneration community, not any single feature; move fast on the flywheel |
| Emotional-stakes product harm | Distress escalation paths, human routing, resilience content reviewed by counseling professionals |

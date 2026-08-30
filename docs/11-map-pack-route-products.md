# The Map, The Pack & The Route — From Placeholder to Product

*Build note for the trilogy round: real curriculum, per-product tools, shared assignment engine, and the honesty positions that bind them.*

---

## 1. What shipped

Following the standard set by The Rope, the three remaining placeholder products are now complete, functional learning experiences. Every lesson keeps the existing syllabus structure (modules, numbering, titles, durations) — the content beneath it is now real, bilingual (EN/ID), and rendered through the shared LMS player's rich-block engine (scenarios, diagrams, weak-vs-strong compares, mistakes panels, glossaries, knowledge checks, in-lesson tool launches).

| Product | Lessons | Flagship tool | Journey |
|---|---|---|---|
| **The Map** (Project Aladdin) | 23, all real | **Personal Audit** — values → energy map → strengths-with-evidence → habit baseline → mission → report | Discover: self-awareness → habits → problem-solving → communication → wellbeing/digital → six industry job simulations, bridging into The Range's career data |
| **The Pack** (Project Maverick) | 34, all real | **Screening Gym** — timed/untimed aptitude drills (39-question authored bank), on-device ATS check (CV vs JD), application pipeline tracker | Get hired: the hiring funnel → documents → tests → FGD → programme strategy → ATS → case interviews → AI tools → etiquette |
| **The Route** (Project Horizon) | 36, all real | **Route Planner** — six-dimension readiness diagnostic with history, 90-day plan builder, win log | Thrive: career architecture → performance → relationships → visibility → promotion → sponsors → second move → money → leadership |

Each product keeps its own identity — the Map audits and explores, the Pack drills and tracks, the Route diagnoses and plans — on one design system: product-specific player skins (each course's backdrop inside the lesson room), the shared gold/glass component language, dark/light themes, EN/ID everywhere, desktop and mobile.

### The learning loop

Every product implements Discover → Learn → Practice → Apply → Reflect → Progress concretely:

- **Learn:** the lessons, sequentially unlocked, with per-module outcomes.
- **Practice:** interactive lessons carry drills with reveal-debriefs; tools carry the repeatable practice (drill sets, simulations, diagnostics).
- **Apply:** registry-declared tool launches inside relevant lessons (`tool:` blocks dispatch to the product's tool); assignments per module through the shared workspace.
- **Reflect:** guided self-review rubrics on assignments; debriefs on every drill; the Map audit's report and the Route diagnostic mirror the learner's own data back.
- **Progress:** lesson/module completion, drill attempt history, diagnostic history deltas, plan day-counters, win-log growth — all locally stored and visible.

## 2. Architecture: content updates never require redevelopment

The brief's key principle is enforced structurally:

- **Content lives in registries** (`data/lms/<slug>.js`): adding depth to any lesson — more sections, new diagrams, new checks — is a data edit. The player renders whatever is declared; no UI work.
- **Drill content lives in `data/pack/aptitude.js`**: every question carries family, options, correct index and a worked explanation in both languages. All UI counts are computed from the bank at runtime.
- **Tools read config/data layers** and store to namespaced localStorage keys (`mt_map_audit`, `mt_pack_gym`, `mt_pack_apps`, `mt_route_plan`, `mt_assign:<slug>`).
- **The assignment workspace is one shared engine** (`js/lms-assign.js`), configured per page (`window.MT_ASSIGN_CFG`); The Rope keeps its original implementation.
- **Type/duration labels on syllabus cards sync from the registry at runtime** (extension in `js/lms-player.js`), so changing a lesson's kind never requires touching page markup.

## 3. Honesty positions (binding, consistent with The Rope's)

- **No fake grading.** Assignments autosave, gate submission on real work, and close with a guided self-review rubric labelled as such. The old "100 points each / feedback within 3 business days" copy is gone platform-wide.
- **No pseudo-psychometrics.** The Personal Audit and Route diagnostic are self-assessments that mirror the user's own ratings back with module recommendations — the UI says so explicitly. Nothing predicts or promises outcomes.
- **Transparent scoring only.** Gym drills score against the visible bank with per-question explanations, and say plainly that they calibrate against this bank, not any employer's norms. The ATS check is a rule-based lint computed on-device, with matched/missing terms fully visible — and states what it cannot know (any specific employer's configuration).
- **Everything on-device.** CV text, drill history, plans, wins, audits — localStorage only; uploads are parsed in the browser by the shared extractor.
- **All counts computed.** Question totals, set counts, attempt counts, assignment counts — computed from data at runtime, never hard-coded claims.

## 4. Follow-ups (not in this build)

- Grow the aptitude bank (target ≥ 30 per family) and add per-industry case libraries to the Map's simulations.
- Wire per-module completion into The Compass dashboard views (data already exported via `mt-lms-mods:<slug>`).
- Export paths: audit report and win-log harvest as PDF for mentor review.
- Peer FGD scheduling through Basecamp once the community backend exists.

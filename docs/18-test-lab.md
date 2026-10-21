# 18 · The Pack · Test Lab: Module 7, Module 12 and the practice bank

Prepared 21 October 2026. This note records what the Test Lab is, where every number in it comes from, what is original and what is generated, and what still needs external validation before anyone treats a figure in it as current. It is the verification register the development brief asked for; read it before changing a threshold, a count or a key.

## 0 · In one paragraph

The Pack now trains the screening-test gate in two places. **Module 7 · Psychometric & Aptitude Test Practice** grew from six to eight lessons (new 7.4 Figural and Spatial Reasoning, new 7.6 Classic Psikotes; the old 7.4, 7.5 and 7.6 became 7.5, 7.7 and 7.8). **Module 12 · Also available · Recruitment Test Lab: TPA, BUMN & SKD CPNS** is a nineteen-lesson bonus module in three tracks (A · TPA 12.1 to 12.6, B · BUMN 12.7 to 12.10, C · SKD CPNS 12.11 to 12.18) with a capstone (12.19). Both run their practice in the **Test Lab**, which replaced the Screening Gym's Drills tab: an original bank of 777 tiered practice items with drills, timed sets, section practice, full-length practice forms (TPA-60, BUMN-T1, SKD-110 CAT), a Kraepelin trainer, an AKHLAK consistency mirror, an error log, a weakness map, a recommendation rule that shows its reason, and a study plan. Nothing in it is an official examination question and nothing in it claims to predict a real score, rank or cut-off.

## 1 · Where things live

| What | Path |
|---|---|
| Versioned config (counts, timing, scoring, thresholds, notices) | `scripts/testlab/config.js` → `prototype/data/pack/testlab/config.json` |
| Hand-authored item sources | `scripts/testlab/bank/{verbal,twk,tkp,akhlak,english,cerita,analitik}.js` |
| Seeded generators | `scripts/testlab/gen/{numerik,penalaran,figural,util}.js` |
| Build and validator | `scripts/testlab/build.js` (writes the JSON tree and the page bundle) |
| Built bank (JSON tree, one file per sub-type) | `prototype/data/pack/testlab/{tpa,skd,bumn}/<family>/<subtype>.json` + `index.json` + `README.md` |
| Page bundle | `prototype/data/pack/testlab.js` (`window.MT_TESTLAB`) |
| Lab engine | `prototype/products/the-pack/js/pack-testlab-core.js` (sets, scoring, reports, storage) and `pack-testlab.js` (screens) |
| Host shell | `prototype/products/the-pack/js/pack-gym.js` (Test Lab · ATS Check · Tracker), `prototype/js/tool-shell.js`, `.tl-*` styles in `prototype/css/tool-shell.css` |
| Lesson content sources | `scripts/testlab/content/{m07,m12a,m12b,m12c1,m12c2,m12c3,m12d}.js`, applied by `apply.js`; assessments by `assess.js`; host page by `page.js` |
| Decks | `scripts/pack-decks/decks/m07.txt`, `m12.txt`, composed by `scripts/pack-decks/compose.js` |
| Learner storage | `localStorage` keys `tl_attempts`, `tl_mocks`, `tl_errorlog`, `tl_plan`, `tl_kraepelin`, `tl_mirror`, `tl_weakness`, `tl_sets`, `tl_formation`; the old `mt_pack_gym` attempts are imported once as legacy rows |
| Progress migration | `migratePack7()` in `prototype/js/lms-player.js` moves completed 7.4/7.5/7.6 to 7.5/7.7/7.8 once per browser |

Rebuild order after a content change: `node scripts/testlab/build.js` → (if lessons changed) `git checkout prototype/data/lms/the-pack.js && node scripts/testlab/content/apply.js && node scripts/pack-decks/compose.js` → `python3 scripts/build-site.py` → `bash scripts/integrity-check.sh`.

## 2 · The bank: what is original, what is generated

Every item carries `label` ("Metanoia practice item. Not an official item or a leak from any examination." / "Soal latihan Metanoia. Bukan soal resmi atau bocoran ujian mana pun."), `status: "draft"`, `review_by`, `sources_consulted` and, for ranked items, `key_notice`. Five commercial preparation files were read for **taxonomy, methods, trap patterns and formats only**; none of their questions, passages, options or explanations was reproduced, and the validator rejects duplicate stems and em dashes.

| Family (bank) | Items | How made | Sub-types |
|---|---|---|---|
| Verbal (tpa) | 100 | hand-authored | sinonim 30, antonim 30, analogi 30, wacana 10 (two original passages) |
| Numerik (tpa) | 213 | seeded generators + hand-authored story and table items | deret_angka, deret_huruf, aritmetika, pq (P vs Q), soal_cerita, tabel_grafik |
| Penalaran (tpa) | 119 | seeded generators + eight hand-authored analytic sets | silogisme, kondisional, ingkaran, analitis |
| Figural (tpa) | 119 | seeded generator; figures are parameter tuples rendered to SVG on the client | deret_gambar, analogi_gambar, beda_gambar, matriks, spasial |
| TWK (skd) | 110 | hand-authored | pancasila, uud, nkri, bti, nasionalisme, integritas, bela_negara, anti_radikalisme, bahasa |
| TKP (skd) | 54 | hand-authored, ranked 5 to 1 | nine per dimension: pelayanan_publik, jejaring_kerja, sosial_budaya, tik, profesionalisme, anti_radikalisme |
| AKHLAK (bumn) | 36 | hand-authored, ranked 5 to 1, plus six mirror pairs | six per value |
| English (bumn) | 26 | hand-authored | structure 14, reading 12 (two original passages) |
| **Total** | **777** | | |

Generated items are deterministic (seeded) so a rebuild reproduces the same bank; the generators over-sample and de-duplicate on stem, passage and figures. Each item has `difficulty` 1 to 3, `time_target_s`, `skill_tags`, `trap_tags`, `track_map` and a structured explanation (`pola`, `langkah`, `jebakan`, `cepat`, optional `alt`, `tag`, optional `verify`).

**Source errors deliberately not inherited** (from the brief's Part 13): invalid syllogisms keyed as valid and nonsense morphology items (File 2); pre-amendment constitutional doctrine and "soal asli" framing (File 4); wrong statute citations for state defence (File 5). The Lab's bela negara items cite UUD 1945 Pasal 27(3) and Pasal 30, UU 3/2002 and UU 23/2019. Syllogism items include forms whose only correct answer is "no certain conclusion can be drawn".

## 3 · The config and the [Verify] register

Every count, duration, point value and threshold the Lab uses sits in `config.json` with `version: 2026.10`, `verified_on: 2026-10-21` and `verified_by: "Metanoia content team (desk check of the sources named below; not an official confirmation)"`. The Lab shows these values in its Config panel with the source line and the mandatory notice: *"Format, item counts, timing, scoring and thresholds change every cycle. Always check the official announcement."* Items that need external validation are listed here, most consequential first.

| # | Value in config | Source as recorded | Status | What validation looks like |
|---|---|---|---|---|
| V1 | SKD: 110 items / 100 min; TWK 30, TIU 35, TKP 45; points TWK/TIU 5 per correct, TKP 1 to 5; max 150/175/225 = 550 | KepmenPAN-RB No. 321 Tahun 2024; PermenPAN-RB No. 6 Tahun 2024; CAT BKN format | **Verify each cycle** | Read the current year's KepmenPAN-RB on nilai ambang batas and the BKN CAT announcement; update `skd.*` and `verified_on`, bump `version` |
| V2 | SKD thresholds: umum 65/80/166; cumlaude total 311 with TIU 85; disabilitas, Papua and Kalimantan formations total 286 with TIU 60 | KepmenPAN-RB No. 321 Tahun 2024 | **Verify each cycle**; formation list is not exhaustive | Same as V1; add or remove formations as the Kepmen names them |
| V3 | SKD:SKB weighting 40:60; invitation multiple ×3; tie-break TKP → TIU → TWK | PermenPAN-RB No. 6 Tahun 2024 | **Verify each cycle** | Same as V1 |
| V4 | BUMN joint recruitment stages; TKD 60 items / 45 min; AKHLAK 30 / 25; English 20 / 20; learning agility | FHCI announcement for the latest RBB cycle; SE-7/MBU/07/2020 (AKHLAK) | **Verify each cycle**; counts vary by cycle and vendor | Read the FHCI announcement and candidate guide for the cycle the member is sitting; the "timed set 40 / 30" and "BUMN-T1" are Metanoia practice formats and say so |
| V5 | TPA-60 (60 items / 45 min; verbal 20, numerik 20, penalaran 12, figural 8) | Metanoia practice format | Not an external claim | None needed; the Lab labels it a Metanoia format and names no institution's test |
| V6 | TKP keys and the 5 to 1 ladder per dimension | Metanoia reasoning keys ("Kunci penalaran Metanoia"); BKN does not publish TKP keys | **Three-reviewer panel pending** (`review_panel` says so on every ranked item) | Two further reviewers score each TKP and AKHLAK ladder blind; keep items with full agreement, rewrite the rest |
| V7 | AKHLAK keys and mirror pairs | Kementerian BUMN AKHLAK guidance; FHCI publishes no key | **Three-reviewer panel pending** | As V6 |
| V8 | TWK legal bases in explanations (UU 12/2011, UU 3/2002, UU 23/2019, UU 5/2018, UU 20/2023, Perpres 7/2021 RAN PE, Tap MPR, UUD 1945 amendments) | Statutes as named in each explanation | Two items carry an explicit `verify` note (integritas: UU 20/2023 implementing regulations; anti_radikalisme: RAN PE successor instrument) | Confirm each citation against the consolidated text on peraturan.go.id or JDIH; check for later amendments |
| V9 | Bahasa Indonesia items under EYD V (2022) | Kepmendikbudristek 0424/I/BS.00.01/2022 (EYD V) | **Verify** edge rules (hyphenation, loan words) against the current PUEBI/EYD edition | Language editor pass |
| V10 | Kraepelin trainer: 30 s × 20 intervals; Pauli described, not simulated | Classic psikotes conventions; instrument names given for orientation only | Not an external claim | The lesson says the Lab does not reproduce copyrighted instruments |
| V11 | CAT pacing (72 s per TIU item, skip at 1.5× target) and weakness bands (red < 50 %, amber < 75 %) | Metanoia coaching rules | Not an external claim | None; labelled as Metanoia rules |

Nothing else in the Lab is presented as a fact about an institution. The three practice forms carry the mandatory wording: *"A Metanoia practice form in a format resembling SKD/TKD; not an imitation of any institution's interface or brand."*

## 4 · Modes, scoring and the recommendation rule

| Mode | What it does | Feedback |
|---|---|---|
| Diagnostic (mixed 40) | Ten items from each TPA family; draws the first weakness map | End-of-set report |
| Drill (sub-type, adaptive) | Serves by tier: up after two right, down after two wrong, up to 20 items | Instant: key, pattern, steps, trap, shortcut, learner tag (knew / gap / time) |
| Timed set (family, figural 12, TKD 40, English 20) | Fixed set, countdown, grid, flag | End of set |
| Section (TWK 30 / TIU 35 / TKP 45) | One SKD section at its configured time | End of section with SKD points |
| Practice form (TPA-60, BUMN-T1 with a three-minute break between TKD and AKHLAK) | Full-length under time | Report with per-section accuracy, completion, pace and cause split |
| SKD-110 CAT and the untimed walkthrough | 110 items, 100 min, grid, flag, review-and-submit, auto-submit at zero | Report against the thresholds of the formation the member selects |
| "4 or 5?" drill (TKP, AKHLAK) | Only the two best options are shown; trains the second-best habit | Instant |
| Kraepelin trainer | Adjacent-digit sums, 30 s intervals, consistency = (max − min) ÷ mean, slope | Per-interval bars |
| AKHLAK mirror | Six paired statements; flags inconsistent self-descriptions | Instant |
| Focus loop | Re-serves the member's own misses | Instant |

Scoring is rule-based: TWK/TIU five points per correct and zero otherwise, TKP and AKHLAK the option weight 1 to 5, everything else one point. The report splits every miss into a cause (knowledge, pace, judgement-second-best, judgement-trap) from accuracy, time versus target and the weight chosen. The recommendation rule reads the weakness map: no attempts → diagnostic; a red sub-type → its drill; amber with slow pace → a timed set; all green → the next form in the member's track. It prints the reason next to the set it proposes.

## 5 · Lessons and assessments

Module 7 (eight lessons, ~395 min) keeps its original seven sections per lesson and adds a router section in 7.1, extra drills in 7.2 and 7.3, the two new lessons, the AKHLAK/BerAKHLAK section in 7.5, CAT pacing and the guessing rule in 7.7, and a Module 12 track choice in the 7.8 case; every lesson launches a Lab preset. Module 12 (nineteen lessons, ~995 min) follows Understand → Learn → Practise → Review → Improve inside each lesson and across each track; 12.19 is a full case study (Raka's ten-week campaign) in the same format as the other Pack cases. The module assessment bank gained four items for Module 7 (now 16, ~18 min) and a new key 12 (30 items, ~30 min, TPA 10 / BUMN 8 / SKD 12, plus a written reflection). Decks: Module 7 has eight decks (two new), Module 12 nineteen; all 214 Pack slides are authored, none derived.

## 6 · QA rules for the Lab

- Run `node scripts/testlab/build.js` after any bank change; it fails on duplicate ids or stems, wrong option counts, answers out of range, weight sets that are not a permutation of 1 to 5, missing `pola`/`langkah`, figural items without assets and any em dash.
- Never add an item without the practice label; never describe an item as official, "asli", leaked or endorsed; never name an institution's interface as the thing being imitated.
- A ranked key (TKP, AKHLAK) ships as draft until two further reviewers agree; `review_panel` stays on the item until then.
- Change a number only in `config.js`, with the source and a new `verified_on`; the Lab, the lessons and the reports read it from there.
- Before each recruitment cycle, work through V1 to V4 and V8 above and bump `version`.
- The Playwright suite in the session scratchpad (`tl_test.js`) covers: clean load, promo counters, Lab home, instant-feedback drill, timed figural, SKD-110 submit and threshold report, BUMN-T1 part 1, Kraepelin, mirror, plan, error log, config, all 27 lessons with their tool panel, the 7.4 launch into the Lab, the `?tool=testlab` deep link in Indonesian and phone width (390 px) without horizontal overflow.

# The Rope — Interview Readiness System

*Strategy note for the Module 7 build: the AI Interview Simulator, the content overhaul, competitive positioning, and the live-assistant decision.*

---

## 1. What shipped

**Core promise:** *Master the toughest interview questions through deliberate practice, structured preparation, and AI-powered feedback.* Philosophy: **confidence is not assumed — it is built through practice.**

The product now covers the full arc **Understand → Prepare → Practice → Perform → Review → Improve → Repeat**:

- **Curriculum (Modules 1–9, 36 lessons, EN/ID, zero placeholders).** Module 1 teaches how interviews actually work (evaluation of fit, capability, judgment, communication, potential — not interrogation). Module 2 builds the story library (STAR-L: Context → Challenge → Action → Result → Learning, with an explicit anti-formula warning). Module 3 teaches the scoring machinery (rubrics, published frameworks, JD decoding). Modules 4–6 cover the HR, technical/user and final rounds, including deconstructing difficult questions and handling skeptical interviewers. Module 7 is the application layer (below). Modules 8–9 carry the journey through offer, negotiation and probation.
- **Question bank** (`prototype/data/rope/questions.js`): ~90 authored questions across ten categories (HR, behavioral, situational, leadership, technical thinking, case-style, difficult cases, role, industry, closing), each with *what it tests* and a coach note, EN+ID. Role- and industry-specific questions are **composed at runtime** from the career graph's 25 directions × 10 industries, so coverage grows with the graph. Sixteen **difficult-case paths** (gaps, pivots, layoffs, overqualification, dismissal, weak academics, …) each carry a reframe → evidence → avoid structure that teaches honest reframing, never scripted personas.
- **AI Interview Simulator** (`prototype/products/the-rope/js/rope-sim.js`), integrated as Module 7's application layer via a registry-declared tool panel — not an isolated tool. The loop is explicit in the UI: **PREPARE → PERFORM → REVIEW → REPEAT.**
  - *Prepare:* one job, one goal — role, industry, seniority, stage, difficulty, session length, target company, plus JD paste and CV upload (read on-device by the shared extractor). A live checklist shows what preparation is missing.
  - *Perform:* practice mode (coaching visible) or live simulation (withheld until debrief). Optional interviewer voice (speech synthesis), optional camera with per-answer recording, optional voice answers with live transcription (Web Speech API, typed fallback everywhere). Adaptive follow-ups react to what the candidate actually said: too short, no metric, "we" hiding "I", no result, rambling, generic — plus probes generated from the candidate's own CV claims and the JD's stated requirements.
  - *Review:* a debrief, not a score. Per answer: strengths, weaknesses, and *what to change*, with transcript stats (words, STAR beats, numbers, fillers, pace). Session level: dimension bars (content / structure / communication), recurring patterns, attempt-by-attempt comparison for retried answers.
  - *Repeat:* the weakest dimension configures the next session's emphasis; history is tracked locally with a progress delta.
- **Fast-Track:** a dedicated "your interview is tomorrow" path — six ruthless priorities, JD mini-analysis, and a 4-question sprint with debrief.

## 2. Honesty and privacy positions (binding)

- **No fabricated numbers.** Every count in the UI (questions, roles, industries, case paths) is computed from the data layer at runtime. The historical "1,000+ jobs across 200+ fields" ambition is preserved as an ambition for the graph to grow into — it is not displayed as a claim anywhere, and must not be until the database supports it.
- **No pseudo-science.** The debrief is a transparent rule-based reading of the candidate's transcript (STAR markers, metrics, fillers, length, pace, lead time to first action). We do **not** fake emotion detection or body-language scores from pixels. Presence is handled honestly: the candidate replays their own recording against a guided self-review, which is also better pedagogy.
- **Everything on-device.** Voice, video and CV text never leave the browser; recordings are discarded when the simulator closes; history lives in localStorage.

## 3. Competitive positioning

Public positioning of the benchmark products (level of generality chosen deliberately — no claims about features we have not verified):

- **Big Interview** — established learning system + practice combo; known for curriculum depth and video-based practice feedback (delivery, pace, fillers).
- **Exponent** — role-specific interview prep (PM/eng/data), strong on peer mock interviews and question banks per role.
- **Rehersa** — voice-first AI mock interviews with adaptive follow-ups.
- **Iris (Unovia)** — conversational AI interviewer positioning ("a conversation, not a question list").
- **CareerUplift** — resume-personalised AI interview practice with structured scoring.

The capability set of an "AI mock interview" is converging (resume-personalised questions, voice, adaptive follow-ups, structured scoring, video feedback). **Metanoia does not win by rebuilding that feature list.** It wins because the simulator sits inside an ecosystem the point products do not have:

> **Career context (The Map/Range: 25 documented directions, honest company data) → Curriculum (9 modules that teach the *why* behind every drill) → Personalised simulation (JD + CV + role from the same graph) → Transparent feedback → Deliberate practice loop → Progress across sessions → Community practice (peer mock framework, Basecamp) → Offer & first-90-days coverage.**

An interview simulator answers "how do I practice?". The Rope answers "how do I *get ready*?" — which includes practice. Positioning line: **don't build another AI interview simulator; build an interview readiness system.** That is what shipped.

## 4. The live "Interview Assistant" — explored, deliberately not built

The brief asked us to explore a second capability: an AI copilot that listens to a *real* interview and privately feeds the candidate suggested answers. Products in this category exist. Our determination:

**We will not build it.** Reasons:

1. **It breaks the assessment.** An interview is an evaluation of the candidate's own judgment and communication. Concealed AI assistance makes the evaluation measure the tool, not the person — the employer's decision is corrupted, and so is the candidate's real readiness.
2. **It typically violates employer policy** and interview terms, exposing users to withdrawal of offers or dismissal for cause when detected — and detection is an arms race the candidate ultimately loses (unnatural latency, gaze patterns, answer style shifts).
3. **It builds nothing the user keeps.** Metanoia's mission is transformation; a whisper-earpiece is the opposite — dependence at the exact moment independence is being tested.
4. **Brand risk.** The Rope's credibility rests on honest instrumentation (see §2). A concealment tool poisons that position.

**Ethical adjacents we may build instead** (roadmap candidates, all transparent to every party):
- *Pre-interview brief:* a one-page pack generated from the user's prep (positioning, three stories, questions to ask, difficult-case sentence) to review before walking in.
- *Post-interview reflection log:* structured self-debrief minutes after a real interview (what was asked, what wobbled), feeding the next simulator session — closing the loop with real-world data the user reports themselves.
- *Explicitly-consented practice with mentors* via Basecamp, which is human assistance done honestly.

The simulator's home screen carries this stance publicly ("Interview integrity" panel), turning a refusal into a differentiator.

## 5. Follow-ups (not in this build)

- Grow the authored bank toward per-direction depth (target: every direction ≥ 10 dedicated questions) and add stage-specific case libraries.
- Bahasa Indonesia speech-recognition quality varies by browser; evaluate a local fallback lexicon for filler detection (partially shipped: ID fillers already detected in text).
- Peer mock matchmaking through Basecamp accounts once the community backend exists.
- Session export (PDF debrief) for mentor review.

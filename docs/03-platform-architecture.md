# 03 · Platform Architecture

This document defines the system-level architecture: portals, services, data flows, and the AI experience layer. It is consistent with (and extends) the founding technical blueprint. Deep technology choices live in [08-technical-architecture.md](08-technical-architecture.md).

## 1. Architecture Principles

1. **Design as microservices, deploy as a monolith** — service boundaries drawn on day 1; physical extraction only when scale demands (Stage 3+).
2. **One identity, many portals** — a single auth/identity system with RBAC powers every surface; a user can be student *and* mentor *and* employer member.
3. **The Passport schema is sacred** — the user profile / career passport data model is the most expensive thing to change later; it is designed for the 5-year vision on day 1.
4. **AI is a layer, not a feature** — every portal consumes the same Intelligence Service; personalization is ambient, not bolted on.
5. **Event-driven from the start** — services communicate via events (`user.completed.simulation` → certificate, notification, analytics, pipeline update), enabling extraction later without rewrites.
6. **Multi-tenant isolation is a security invariant** — employer A must never see employer B's candidates; enforced at the database layer (row-level security), not just application code.

## 2. Multi-Portal Architecture

```
                        ┌────────────────────────────────────────────┐
                        │            PUBLIC WEB (metanoia.xyz)       │
                        │  Landing · Story · For Employers · For     │
                        │  Universities · Intelligence Library(SEO)  │
                        └────────────────────┬───────────────────────┘
                                             │
    ┌───────────────┬────────────────────────┼──────────────────────┬───────────────┐
    ▼               ▼                        ▼                      ▼               ▼
┌─────────┐   ┌───────────┐          ┌──────────────┐        ┌───────────┐   ┌───────────┐
│ STUDENT │   │  MENTOR   │          │   EMPLOYER   │        │ EDUCATOR  │   │   ADMIN   │
│ PORTAL  │   │  PORTAL   │          │    PORTAL    │        │  PORTAL   │   │  PORTAL   │
│ app.*   │   │ mentor.*  │          │  employers.* │        │  edu.*    │   │ internal  │
└────┬────┘   └─────┬─────┘          └──────┬───────┘        └─────┬─────┘   └─────┬─────┘
     └──────────────┴─────────────┬─────────┴──────────────────────┴───────────────┘
                                  ▼
                     ┌─────────────────────────┐
                     │       API GATEWAY       │  (auth validation · rate limiting ·
                     └────────────┬────────────┘   routing · versioning — Stage 3+)
                                  ▼
 ┌────────────────────────────────────────────────────────────────────────────────┐
 │                              SERVICE LAYER                                     │
 │  Auth & Identity · Profile/Passport · Content · AI/Intelligence · Community    │
 │  Notification · Analytics & Outcomes · Files & Assets · Billing · Search       │
 └────────────────────────────────────────────────────────────────────────────────┘
                                  │  (internal event bus)
 ┌────────────────────────────────▼───────────────────────────────────────────────┐
 │                                DATA LAYER                                      │
 │  PostgreSQL (transactional) · Redis (cache/queue/pubsub) · pgvector (embeddings)│
 │  Typesense (search) · ClickHouse (events/analytics) · S3/R2 (objects)          │
 └────────────────────────────────────────────────────────────────────────────────┘
```

### Portal summaries

| Portal | Users | Core jobs | UX priority |
|---|---|---|---|
| **Student Portal** | Seekers at every stage | Onboarding, diagnostic, pathway, Forge tools, Circle community, job discovery, Passport | Emotional warmth, progressive disclosure, "personal guide" feel |
| **Mentor Portal** | Alumni & professional mentors | Availability, session management, mentee context briefs, earnings (paid tier), reputation | Low friction — mentors are time-poor volunteers/pros |
| **Employer Portal** | Employer admins & members | Simulation builder, pipeline management, analytics, job posting, cohort sponsorship, billing | Data density, ROI visibility, professional aesthetic |
| **Educator Portal** | University career offices | Cohort creation, student outcome tracking, curriculum integration, reporting | Simplicity + reporting; SSO (SAML) |
| **Admin Portal** | Metanoia ops team | User/content/partner management, moderation, system health, finance, support | Internal speed (Retool/Metabase acceptable) |

The Mentor Portal is a deliberate fifth portal (extending the blueprint's four): the regeneration flywheel depends on mentoring being frictionless, so mentors get a dedicated, minimal surface rather than a corner of the student app.

## 3. Service Layer

(Condensed here; the founding blueprint's service table is authoritative for implementation detail.)

| Service | Responsibility | Key notes |
|---|---|---|
| **Auth & Identity** | Registration, login, JWT + refresh tokens, OAuth (Google/LinkedIn), SAML SSO (Stage 3), RBAC (8 roles), sessions | NextAuth.js → Keycloak/Auth0. Foundation — build right first. |
| **Profile / Passport** | Profiles, career history, skills, credentials, readiness scores, preferences, privacy controls | PostgreSQL + Redis cache. The sacred schema. |
| **Content** | Simulations, articles, assessment banks, video metadata, versioning, employer content ownership, regional adaptation | Sanity (structured) + PostgreSQL (dynamic) + S3/CDN |
| **AI / Intelligence** | ATS scoring, interview generation & STAR feedback, pathway engine, readiness prediction, market intelligence, embeddings | Python/FastAPI, separate deployable from day 1 (independent scaling); prompt management, caching, rate limiting |
| **Community** | Cohorts, peer matching, session booking, feeds, messaging, mentor availability, reputation | PostgreSQL + Redis pub/sub + WebSockets |
| **Notification** | Email/push/in-app/SMS orchestration, event-driven, preferences, retries | BullMQ event bus; SendGrid/Resend, Firebase, Twilio |
| **Analytics & Outcomes** | Full event stream: usage, completions, applications, responses, offers | → ClickHouse/BigQuery; PostHog product layer. Fuels Atlas + AI training. |
| **Files & Assets** | CV uploads, certificate generation (PDF), media, virus scan, signed URLs | S3/R2; Puppeteer/pdf-lib |
| **Billing** | Employer subscriptions, premium tiers, invoicing, feature gating, usage-based AI billing | Xendit (ID) + Stripe (intl) |
| **Search** | Cross-entity search: simulations, jobs, mentors, resources, community | Typesense → Elasticsearch |

## 4. The AI Experience Layer

The Intelligence Service is one backend, surfaced as distinct experiences per portal:

| Surface | Experience | Underlying capability |
|---|---|---|
| Student | **Meta** (conversational coach), pathway plans, CV scores, interview feedback, "next best action" nudges | LLM orchestration + user context (Passport + event history) + RAG over Intelligence Library |
| Student | Readiness score & prediction | ML models over outcome data (heuristic → learned as data accrues) |
| Mentor | Mentee context brief before each session | Summarization over mentee's journey (privacy-scoped) |
| Employer | Pipeline quality insights, simulation performance analytics, candidate-role match signals | Aggregation + embedding similarity (candidate ↔ role) |
| Educator | Cohort risk flags ("12 students stalled at interview stage") | Outcome analytics + thresholds |
| Admin | Content quality review assist, moderation triage | Classification + LLM review |

**AI architecture rules:**
- All LLM calls go through the Intelligence Service — one place for prompt versioning, evaluation, caching, cost control, and model routing (frontier model for high-stakes coaching; small/cheap models for high-volume generation).
- Every user-facing AI judgment is **explainable** (score breakdowns, cited reasons) and **actionable** (specific next step).
- User AI context is assembled from the Passport + event history via a context service — the coach *remembers the journey*.
- Human-in-the-loop escalation: emotional-distress signals route to resources and human community, never to AI-only responses.

## 5. Key Data Flows

**a) Onboarding → first value (the golden path)**
```
signup → diagnostic (15 q) → Intelligence Service: gap analysis + 90-day pathway
→ Passport initialized with baseline readiness → first 3 actions surfaced
→ event: user.onboarded → cohort matching queued → welcome sequence
```

**b) Simulation completion (the credential loop)**
```
user submits final task → assessment scored (AI + rubric)
→ event: user.completed.simulation
   ├─ Files: certificate generated (PDF, verifiable ID)
   ├─ Passport: credential + skill records appended, readiness recomputed
   ├─ Notification: congratulation + share prompts
   ├─ Analytics: outcome event → ClickHouse
   └─ Bridge: employer pipeline updated (if user opted into discovery)
```

**c) Placement → regeneration (the flywheel moment)**
```
user reports offer accepted → outcome verified → Passport: transition chapter
→ event: user.placed
   ├─ Analytics: placement outcome (public impact dashboard, prediction training)
   ├─ Circle: alumni mentor invitation sequence (the deliberate conversion)
   └─ Employer analytics: attribution to simulations/pipeline
```

**d) Employer discovery (opt-in, privacy-first)**
```
employer defines role requirements → embedding match against opted-in Passports
→ ranked candidate signals (verified skills, completions, readiness — no raw PII until user accepts contact)
→ user notified: "X wants to connect" → user controls the reveal
```

## 6. Security, Privacy & Trust Architecture

- **Row-level security** in PostgreSQL for multi-tenant isolation (employer/educator data).
- **Refresh tokens in HTTP-only cookies; access tokens short-lived (15 min); never localStorage.**
- **Opt-in discovery:** employers see verified signals, not profiles, until the user consents to contact.
- **Data dignity:** no sale of individual user data; institutional insights are aggregate + anonymized with k-anonymity thresholds.
- **AI safety:** coaching guardrails, distress-signal escalation to human resources, no fabricated outcome claims.
- Compliance path: Indonesia PDP Law from day 1; GDPR-grade controls as international expansion nears; SOC 2 when enterprise employers require it (Stage 4).

## 7. Scalability Posture by Stage

| Stage | Deployment shape | Trigger to advance |
|---|---|---|
| 1–2 | Modular monolith (NestJS) + separate FastAPI AI service; managed infra (Vercel/Railway/Supabase) | ~50k MAU or team > 6 engineers |
| 3 | Extract Community + Notification + AI as services; AWS/GCP, containers, Terraform, staging/prod split | Real-time load, employer SLAs |
| 4+ | Kubernetes, multi-region (Jakarta + Singapore), Kafka event streaming, read replicas, 99.9% SLA | Enterprise/government contracts, regional expansion |

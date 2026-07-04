# 08 · Technical Architecture & Stack

This document operationalizes the founding technical blueprint into a build plan. Where the blueprint made a decision, this document keeps it; additions are marked.

## 1. Stack Summary

| Layer | Choice | Stage notes |
|---|---|---|
| Frontend | **Next.js 14+ (App Router) · TypeScript · Tailwind + shadcn/ui** | One monorepo, portal apps share a component library |
| Frontend state/forms | TanStack Query · Zustand · React Hook Form + Zod | |
| Charts | Recharts/Tremor (dashboards); D3/Observable Plot for Atlas later | |
| Backend (primary) | **Node.js + NestJS (TypeScript)** — modular monolith | Modules = future services |
| Backend (AI) | **Python + FastAPI** — separate deployable from day 1 | LangChain-class orchestration, spaCy (Indonesian NLP) |
| Primary DB | **PostgreSQL 16** (Supabase managed → RDS at Stage 3) · Prisma ORM | RLS for multi-tenancy; **not** MySQL/Mongo |
| Cache/queue | **Redis 7** (Upstash → ElastiCache) · BullMQ event bus | From day 1 |
| Vectors | **pgvector** → Pinecone/Weaviate (Stage 4) | |
| Search | **Typesense** → Elasticsearch (Stage 4) | Indonesian tokenization configured |
| Analytics | **PostHog** + ClickHouse (or BigQuery) · Metabase BI | Event schema versioned from day 1 |
| CMS | **Sanity.io** | Employer content studio |
| Auth | **NextAuth.js** → Keycloak/Auth0 (Stage 3) | JWT 15-min + HTTP-only refresh cookies |
| LLMs | **Frontier APIs, dual-vendor (Anthropic Claude + OpenAI)** with model routing | Small models for volume tasks; frontier for high-stakes coaching |
| Embeddings | Hosted embedding API → self-hosted sentence-transformers (Stage 4) | |
| Email | Resend (transactional) + SendGrid (marketing) · React Email | DKIM/SPF/DMARC day 1 |
| Payments | **Xendit (Indonesia) + Stripe (international)** | Never build payments |
| Video | YouTube-unlisted (Stage 1) → Mux/Cloudflare Stream | |
| Storage | Cloudflare R2 → S3 | Signed URLs, AV scan on upload |
| Hosting | Vercel + Railway/Render + Supabase + Cloudflare → AWS/GCP (Stage 3) → Kubernetes multi-region (Stage 4) | |
| CI/CD | GitHub Actions (PR previews, test gate, staged deploys) → ArgoCD (Stage 4) | |
| IaC | Terraform from Stage 3 | |
| Observability | Sentry day 1; Vercel/Railway metrics → Datadog or Grafana stack (Stage 3) | |

## 2. Repository & Code Architecture

**Monorepo (Turborepo + pnpm):**

```
metanoia/
├── apps/
│   ├── web/            # public site + landing (Next.js, SSG-heavy)
│   ├── student/        # app.* portal (Next.js)
│   ├── mentor/         # mentor.* portal
│   ├── employers/      # employers.* portal
│   ├── edu/            # educator portal (Stage 3)
│   └── api/            # NestJS modular monolith
├── services/
│   └── intelligence/   # FastAPI AI service (Python)
├── packages/
│   ├── ui/             # shared design system (shadcn-based, tokens from doc 04)
│   ├── db/             # Prisma schema + client (single source of truth)
│   ├── events/         # typed event contracts (the extraction seam)
│   ├── config/         # eslint/ts/tailwind presets
│   └── i18n/           # EN/ID message catalogs
└── infra/              # Terraform (Stage 3+), GitHub Actions workflows
```

**NestJS module = future microservice.** Each module (auth, passport, content, community, notification, analytics, files, billing, search) owns its tables, exposes an internal interface, and communicates cross-module **only via the typed event bus or public module API** — this discipline is what makes Stage-3 extraction cheap.

## 3. Core Data Model (Passport-centric, v1 sketch)

```
users(id, email, auth_provider, status, locale, created_at)
roles(user_id, role, org_id?)                      -- RBAC, multi-role
passports(id, user_id, headline, visibility, discovery_opt_in)
career_goals(id, passport_id, target_role, region, timeline, active)
readiness_scores(id, goal_id, composite, dims jsonb, computed_at)   -- append-only history
skills(id, passport_id, skill, level, source: self|assessed|verified)
credentials(id, passport_id, type, issuer_org_id, verify_code, issued_at)
pathways(id, goal_id, plan jsonb, version, generated_at)            -- versioned plans
waypoints(id, pathway_id, kind, status, due_week, completed_at)
contributions(id, passport_id, kind: peer_session|mentoring|answer, weight, at)

orgs(id, type: employer|university, name, plan)
org_members(org_id, user_id, org_role)
simulations(id, org_id?, title, status, version)  + sim_tasks, sim_submissions, sim_scores
cohorts(id, org_id?, name, starts_at) + cohort_members
sessions(id, kind: peer|mentor, host_id, guest_id, scheduled_at, status, feedback jsonb)
jobs(id, org_id, ...) · applications(id, passport_id, job_id?, external?, stage, events jsonb)
pipeline_candidates(org_id, passport_id, consent_state, stage)      -- RLS-critical
events(...)                                        -- outbox → ClickHouse
```

Rules: append-only history for scores/outcomes (the AI training asset); soft-delete + audit on user data (PDP/GDPR); `pipeline_candidates.consent_state` gates all employer visibility; RLS policies on every org-scoped table.

## 4. API Architecture

- **REST first** (NestJS controllers), OpenAPI/Swagger from day 1, versioned `/v1/*`.
- **GraphQL added at Stage 3** for employer/educator dashboards only (coexists, never replaces).
- **WebSockets** (Socket.io over Redis pub/sub) for feeds, session rooms, notifications.
- **Internal event bus** (BullMQ) with typed contracts in `packages/events`; Kafka at Stage 4.
- **API Gateway** (Kong or AWS) at Stage 3: auth validation, rate limits, routing, versioning.
- **External/Public API** at Stage 3+: API-key, rate-limited, for university/government integrations — the technical basis of the "infrastructure" positioning.

## 5. AI Integration Architecture

```
portals → api (NestJS) → intelligence service (FastAPI)
                             ├─ Context Assembler: Passport + event history + goal → user context doc
                             ├─ RAG: Intelligence Library + market data (pgvector)
                             ├─ Prompt Registry: versioned prompts, eval suites, A/B
                             ├─ Model Router: task → model tier (cost/quality policy)
                             ├─ Guardrails: safety filters, distress detection → human escalation
                             ├─ Cache: semantic + exact response caching (Redis)
                             └─ Ledger: per-user/per-feature token cost accounting
```

Key practices:
- **Evaluation before scale:** every prompt/feature ships with a golden-set eval (graded rubric); regressions block deploy.
- **Cost envelope:** budget ~$0.10–0.50 per AI session; router + caching enforce it; usage-based gating on free tier depth (generous, but bounded).
- **Explainability contract:** AI endpoints return `{result, reasons[], next_action}` — the UI never shows a bare number.
- **Data flywheel hygiene:** outcome labels (interviews, offers) captured via Application Command Center → training tables from day 1, even if models stay heuristic until Phase 3.
- **Vendor dual-sourcing:** abstraction over ≥2 LLM vendors; no single-provider lock-in for core coaching.

## 6. Security & Compliance

- JWT (15 min) + HTTP-only refresh cookies (30 d); rotate on password change. Never tokens in localStorage.
- RBAC claims in JWT + DB; resource-level permissions checked per request; **PostgreSQL RLS** as the multi-tenant backstop.
- Secrets in platform vaults (Vercel/Railway → AWS Secrets Manager); no secrets in repo.
- Upload pipeline: size/type limits → AV scan → private bucket → signed URLs.
- PII minimization in analytics events; k-anonymity for aggregate Atlas products.
- Compliance ladder: Indonesia PDP → GDPR-grade controls → SOC 2 (Stage 4, enterprise sales).

## 7. Performance & Scale Targets

| Stage | Users | Targets | Infra cost |
|---|---|---|---|
| 1–2 | 0–50k MAU | p95 API <300ms; LCP <1.5s mobile; 99.5% | $200–1k/mo |
| 3 | 50–500k | p95 <250ms; 99.9%; staging/prod parity; DR runbook | $3–8k/mo |
| 4+ | 500k+ / multi-region | 99.9% SLA (employer contracts); Jakarta+Singapore active; read replicas | $15–40k/mo |

Scaling levers in order: CDN/SSG for content → Redis caching → read replicas → service extraction (Community, AI first) → regional sharding. **Never Kubernetes before Stage 4.**

## 8. Technical Roadmap (mirrors product phases)

| Phase | Technical deliverables |
|---|---|
| 0 | Monorepo, design system tokens, auth, Passport schema v1, event schema v1, diagnostic + pathway pipeline, landing (SSG), Sentry/PostHog |
| 1 (MVP) | CV scoring pipeline, interview coach loop, cohort/community module, notification service, prompt registry + evals, admin basics |
| 2 | Simulation engine + certificate generation, employer portal + RLS multi-tenancy, billing (Xendit/Stripe), marketplace scheduling, premium gating |
| 3 | Service extraction (AI, community, notifications), AWS/GCP + Terraform, GraphQL for dashboards, SAML SSO, React Native app, ClickHouse warehouse live, prediction models v1 |
| 4 | Kubernetes + multi-region, Kafka, public API + integrations, credential verification infrastructure, SOC 2, Atlas data products |

## 9. Build vs. Buy Discipline

**Always buy/borrow:** auth flows, payments, email delivery, video infra, CMS, analytics collection, moderation tooling (initially).
**Always build (the moat):** Passport data model, pathway engine, readiness scoring, coaching context/prompt system, peer-matching, simulation assessment, outcome data pipeline.

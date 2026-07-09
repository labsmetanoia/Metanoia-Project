# 05 · Sitemap & Information Architecture

Domain strategy: `metanoia.xyz` (public) · `app.` (student) · `mentor.` · `employers.` · `edu.` · internal admin. All share the identity system; a user's roles determine which portals they can enter.

## 1. Public Website (marketing + SEO)

```
/
├── /                          Landing page (structure & copy → doc 06)
├── /story                     The access-gap manifesto, founding story, mission
├── /how-it-works              The journey: Orientation → Preparation → Connection → Transition → Alumni
├── /platform
│   ├── /compass               Career discovery & AI pathways
│   ├── /forge                 CV Studio, Interview Coach, simulations, assessments
│   ├── /circle                Community, peers, mentorship
│   ├── /bridge                Opportunity & talent marketplace
│   └── /atlas                 Market intelligence
├── /employers                 B2B: value prop, simulation co-creation, pipeline, pricing, case studies
├── /universities              B2I: cohort tooling, outcome dashboards, integration
├── /mentors                   Become a mentor: why, how, who
├── /intelligence              PUBLIC Intelligence Library (SEO engine)
│   ├── /guides/*              How hiring actually works, ATS reality, hidden job market…
│   ├── /market/*              Public market snapshots by role/city
│   └── /stories/*             Alumni transformation stories
├── /impact                    Transparent outcomes dashboard (placements, honest stats)
├── /pricing                   Individual free/premium · employer plans · institutional
├── /about  /careers  /press
├── /legal/{terms,privacy,data-dignity}
└── /login  /signup            → routes into the correct portal by role
```

**SEO strategy note:** `/intelligence` is the organic growth engine — genuinely useful insider-knowledge content (bilingual EN/ID), each article ending in the diagnostic CTA.

## 2. Student Portal (`app.`)

```
app.
├── /onboarding
│   ├── /welcome               The reframe moment
│   ├── /diagnostic            15-question readiness assessment
│   ├── /reveal                Gap map results + interpretation
│   └── /first-step            One action; pathway generated
├── /home                      "Basecamp" dashboard: next action · ring · path · circle · insights
├── /path                      Full 90-day pathway: waypoints, re-planning, weekly intention/reflection
├── /compass
│   ├── /explore               Career/role explorer (demand data, salaries, day-in-the-life)
│   ├── /coach                 Meta — conversational AI coach (persistent, journey-aware)
│   └── /readiness             Score breakdown, history, prediction ("what moves it most")
├── /forge
│   ├── /cv                    CV Studio: editor, ATS scoring vs target JD, versions
│   ├── /interview             Interview Coach: mock sessions, STAR feedback, pattern tracker
│   ├── /cases                 Case & presentation practice
│   ├── /assessments           Aptitude/psychometric prep banks
│   └── /simulations           Catalog → detail → multi-task player → certificate
├── /circle
│   ├── /cohort                My cohort: feed, members, milestones, events
│   ├── /peers                 Peer matching, session scheduling, guided session room
│   ├── /mentors               Mentor marketplace: browse, book, session history
│   ├── /resilience            Rejection-recovery programs, confidence practices
│   └── /communities           Industry/role/city sub-communities, AMAs
├── /bridge
│   ├── /jobs                  Partner listings + referral pathways
│   ├── /applications          Application command center: tracker, follow-ups, offer comparison
│   └── /discovery             Opt-in employer discovery: visibility controls, connection requests
├── /passport                  My verified profile: credentials, skills, readiness history,
│                              contribution reputation, share/export controls
├── /notifications  /settings  (profile, privacy, language, notification prefs, billing/premium)
```

## 3. Mentor Portal (`mentor.`)

```
mentor.
├── /home                      This week: sessions + AI mentee briefs · availability toggle
├── /sessions                  Upcoming/past, notes, guided session templates
├── /mentees                   Ongoing mentees, journey context (privacy-scoped)
├── /availability              Calendar, session types, capacity
├── /impact                    Reputation, outcomes attributed, testimonials
├── /earnings                  (paid mentors) rates, payouts, invoices
└── /settings
```

## 4. Employer Portal (`employers.`)

```
employers.
├── /home                      Pipeline snapshot, active simulations, ROI headline metrics
├── /simulations
│   ├── /builder               Co-creation studio (tasks, videos, model answers, review flow)
│   └── /performance           Completion rates, quality distribution, funnel conversion
├── /pipeline                  Candidate signals (consent-gated), stages, shortlists, contact requests
├── /jobs                      Postings + simulation-linked listings
├── /cohorts                   Sponsorships: branding, reach, outcomes
├── /analytics                 Funnel, quality-of-hire, cost-per-hire, benchmark comparisons
├── /team                      Members & roles (employer_admin / employer_member)
└── /billing  /settings
```

## 5. Educator Portal (`edu.`)

```
edu.
├── /home                      Cohort overview, outcome headlines, risk flags
├── /cohorts                   Create/manage cohorts, invite students, assign pathways
├── /outcomes                  Placement & progress dashboards, exportable reports
├── /curriculum                Embed simulations/pathways into courses; LMS/ERP integration
├── /team  /settings           (SAML SSO configuration lives here)
```

## 6. Admin Portal (internal)

```
admin.
├── /users                     Search, roles, support actions, verification
├── /content                   Simulation review queue, article CMS, assessment banks, versioning
├── /community                 Moderation queue, reports, cohort health
├── /partners                  Employer/university accounts, contracts, onboarding status
├── /intelligence              Prompt/model management, AI eval dashboards, cost monitoring
├── /finance                   Revenue, subscriptions, payouts (mentors)
├── /system                    Service health, queues, error rates, feature flags
└── /impact                    Master outcomes data → public impact dashboard feed
```

## 7. Cross-Portal IA Rules

1. **Role-aware entry:** `/login` routes by role; multi-role users get a portal switcher (top-left, like Slack workspace switch).
2. **The Passport is the join:** the same Passport object renders as "my profile" (student), "mentee brief" (mentor), "candidate signals" (employer, consent-gated), "student record" (educator).
3. **Navigation depth ≤ 3** everywhere in the student portal; the Path and Next Action are always one tap from anywhere (persistent bottom bar on mobile: Home · Path · Forge · Circle · Passport).
4. **Search is global per portal** (Typesense): students search simulations/mentors/jobs/articles in one box.
5. **Notifications center is unified** with per-channel preferences; nudges obey quiet hours.

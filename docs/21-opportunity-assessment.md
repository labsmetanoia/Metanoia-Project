# 21 · Opportunity assessment (16 November 2026)

A second look at the Metanoia Labs ecosystem after the audit and roadmap work in `docs/20-platform-audit.md`. This document recommends what to build next. Nothing here has been built. Every item fits the current architecture (static pages, Pages Functions, D1, the aggregation Worker, Resend) and the zero-cost rule unless it says otherwise.

## 1. Where the platform stands

**In place and tested:** open registration with three sign-in methods, cross-device progress, four lesson products and The Compass, lifecycle mail, entitlements, data rights, feedback inbox, audit trail, error reports, weekly owner digest, trend charts, sample lessons, certificates, install as an app, and an end-to-end test workflow on every pull request.

**Gaps this assessment found:**

| Gap | Evidence |
|---|---|
| Public copy promises AI feedback, AI scoring, session memory and community feedback. No AI service or community exists. | 62 mentions of "AI" on public pages. The interview simulator scores answers on the device with fixed rules (`products/the-rope/js/rope-sim.js`, "entirely on-device"). No function calls a language model. |
| Newsletter subscribers are collected, but nothing can send them a letter. | Double opt-in exists in `/api/leads/newsletter`. No send tool in the admin API or the Worker. |
| Lessons produce no usage data. | `js/lms-player.js` sends no events. The owner cannot see which lessons are finished, skipped or abandoned. |
| The enterprise page sells sponsorships and cohort licences that the product cannot yet deliver. | No organisation, seat or code model in the database. |
| Mentors can apply, and then nothing happens in the product. | Mentor applications are leads only. |
| Home, pricing and audience pages carry no structured data for search engines. | JSON-LD exists only in the generated pages (`scripts/lib/shell.py`). |
| Reminders depend entirely on e-mail. | No calendar export, no web push. |

## 2. Recommendations

Effort: S (a day or less), M (two to four days), L (a week or more). Priority 1 is highest.

### N-01 · Make the AI promise true, or reword it (Priority 1)

- **Purpose.** Close the gap between what the pages promise and what the product does. This is a trust issue first and a feature second.
- **Option A, reword now (S).** Replace "AI feedback", "AI scoring" and "community feedback" with what exists: guided practice with instant rubric scoring on your device. One pass over both languages.
- **Option B, build an AI coach (M).** A new endpoint takes an interview question and the member's answer and returns structured feedback: which parts of the answer structure are present, where it is vague, and one rewritten sentence. The same service reviews a CV bullet in The Pack. "Session memory" becomes the last feedback per question, saved with the member's progress.
- **Key functionality.** Bilingual prompts; a daily cap per member; a daily budget for the whole site; automatic fallback to today's on-device scoring when the cap or budget is reached; nothing stored beyond the feedback itself.
- **Benefits.** The headline feature becomes real. It is the strongest differentiator against free video content.
- **Feasibility.** Cloudflare Workers AI can be bound to Pages Functions and has a free daily allowance. The current figure and the quality of open models in Bahasa Indonesia must be confirmed in a one-day trial before committing. Staying free means hard caps. Member answers would be processed by Cloudflare's model service, so the privacy notice needs a line.
- **Decision (16 November 2026).** Both, in that order. Option A is done: about 100 strings reworded in both languages across 15 files, and integrity gate 15 now fails the build if the copy claims AI scoring, an AI interviewer, session memory or community feedback. Lesson content that discusses AI as a topic is unchanged. Option B is built (docs/14, "AI coach"): it ships closed to members, and the owner opens it from the admin page after judging trial reviews in English and Bahasa Indonesia.

### N-02 · Access codes for sponsors and campuses (Priority 2)

- **Purpose.** Let Metanoia Labs sell a cohort or a campus sponsorship today, invoiced by hand, before any payment provider or full organisation model.
- **Key functionality.** The admin creates a batch of codes with a label, product scope, seat count and expiry. A member redeems a code at registration or in Settings and receives access. The admin sees seats used and, above a minimum cohort size, aggregate progress and readiness for the batch, with CSV export.
- **Benefits.** Turns the enterprise page into something deliverable. First revenue path that needs no payment integration. Aggregate-only reporting keeps the Data Dignity promise.
- **Feasibility.** Builds on entitlements and the audit trail. One migration for batches and redemptions. M.

### N-03 · Letters and announcements (Priority 3)

- **Purpose.** Reach members and subscribers. The beta ends on 22 November and there is no way to tell everyone.
- **Key functionality.** An admin composer for a bilingual letter with a test send. The Worker sends in daily batches inside the mail caps, with one-click unsubscribe. The same text appears in the portal's Updates panel. A site-wide notice bar the admin can switch on with an end date.
- **Benefits.** Retention, launch communication, and the newsletter the site already promises.
- **Feasibility.** Resend's free tier limits volume to 100 a day and 3,000 a month, so a large list takes several days per letter. The notice bar alone is S and needs no mail. Composer and batches are M.

### N-04 · Lesson and funnel analytics (Priority 4)

- **Purpose.** Know what members actually do, so content and product decisions rest on evidence.
- **Key functionality.** The lesson player reports lesson opened, lesson completed and quiz answered. The nightly Worker aggregates them. A Content panel in the admin page shows completion by lesson, the lesson where most members stop, the hardest quiz questions, sample-to-account conversion and certificate rate per product.
- **Benefits.** Shows which lessons to fix first. Gives enterprise conversations real numbers.
- **Feasibility.** The events pipeline, aggregation and admin charts exist. Events stay pseudonymous. S to M.

### N-05 · Reminders without e-mail (Priority 5)

- **Purpose.** Bring members back at the right moment without spending mail quota.
- **Key functionality.** Step one: "Add to calendar" for Compass waypoints, application deadlines and interview dates. Step two: opt-in web push for streaks and deadlines, sent by the Worker through the existing service worker.
- **Benefits.** More return visits and fewer missed deadlines.
- **Feasibility.** Calendar files need no server work (S). Web push is free but needs keys, a subscriptions table and, on iPhones, the installed app (M).

### N-06 · Shareable readiness profile (Priority 6)

- **Purpose.** Give members one link that shows what they have achieved, for a CV, LinkedIn or a recruiter.
- **Key functionality.** An opt-in public page with the member's name, Career Map band, certificates and completed products. The member chooses each item shown and can switch the page off. Share buttons use the phone's share sheet, which reaches WhatsApp.
- **Benefits.** Members promote the platform by using it. It also gives employers a reason to recognise the name.
- **Feasibility.** Reuses the certificate verification pattern. M.

### N-07 · Mentor workspace, first version (Priority 7)

- **Purpose.** Deliver what the mentors page describes.
- **Key functionality.** An accepted application becomes a mentor role. The admin pairs a mentor with a mentee. Both see a shared log of four sessions with the guide for each, and the mentee can share a Career Map summary. Scheduling stays outside the platform at first.
- **Benefits.** The mentor promise becomes real and creates a community asset competitors cannot copy quickly.
- **Feasibility.** New role, pairing table and two pages. Running the programme needs an owner on the team. L.

### Quick wins

| ID | Item | Benefit | Effort |
|---|---|---|---|
| N-08 | Structured data on home, pricing and audience pages | Richer search results | S |
| N-09 | Reply to feedback from the admin page, with saved replies | Closes the loop with members | S |
| N-10 | Ask members who rate 4 or 5 for permission to quote them | Honest social proof | S |
| N-11 | Lead pipeline: follow-up date, owner, reply templates, convert a mentor lead to an account | Fewer dropped leads | S to M |
| N-12 | System panel in admin: last cron run, last backup, database size, mail quota, error rate | Problems seen before members report them | S to M |

### Already on the roadmap

Change of e-mail address, referral links, a lighter home page, the full organisation model (N-02 is its first step), passkeys, and payments. Payments need a provider that charges per transaction and therefore your approval. For Indonesian members the provider should support QRIS, e-wallets and bank transfer.

## 3. Suggested order

1. **This week.** N-01 option A, the notice bar from N-03, N-08.
2. **Next two to three weeks.** N-04, N-02, the composer from N-03, N-09, N-10.
3. **Following month.** N-01 option B after its trial, N-05, N-06, N-11, N-12.
4. **Later.** N-07, the full organisation model, passkeys, payments after approval.

## 4. Decisions needed

1. N-01: reword now, build the AI coach, or both in that order.
2. N-02: the price and terms of a code batch, since billing would be by invoice.
3. N-03: who writes and approves letters, and the wording of the beta-end notice.
4. N-07: who on the team runs mentor pairing.

# Metanoia LMS — Content Layer

This directory is the **single source of truth for all learning content**.
The player (`js/lms-player.js` + `css/lms.css`) renders whatever these
registries declare, so replacing placeholder material never requires
touching the UI.

## Files

| File | Product | Codename |
|------|---------|----------|
| `the-map.js` | The Map | Project Aladdin |
| `the-pack.js` | The Pack | Project Maverick |
| `the-rope.js` | The Rope | Project Nexus |
| `the-route.js` | The Route | Project Horizon |

Each file assigns `window.MT_LMS['<slug>']` with:

```
{
  product, codename,
  media: { video, poster, art, visual, captions: { en, id } },
  modules: [
    { num, title{en,id}, overview{en,id}, outcome{en,id},
      lessons: [
        { n: "1.1", title{en,id}, kind, dur{en,id}, placeholder: true,
          overview, objectives[], takeaways[], check{},
          … kind-specific fields … } ] } ]
}
```

## Lesson kinds and their fields

- **video** — plays `media.video` with `media.poster` and EN/ID subtitle
  tracks (`media.captions`). Extra field: `videoNotes[]`.
- **reading** — `sections[]` rendered as progressive-disclosure expanders.
- **interactive** — `sections[]` plus `steps[]` (observe → decide → reflect
  with a click-to-reveal debrief).
- **slides** — `slides[]` rendered as a keyboard/touch-navigable deck with
  counter and progress bar.
- **visual** — `media.visual` rendered with clickable `hotspots[]`
  (`x`/`y` are percentages on the image).
- **assignment** — a `caseStudy{}` block (below) after the brief's slide
  `material`; "Mark complete" stays gated until the case is submitted.

Every lesson may carry a `check{}` knowledge check and `takeaways[]`.

### Case assignment (`caseStudy{}`)

An interactive, consulting-style case (3.4 Case Assignment — Problem
Solving does: the Hustleton City traffic problem). The registry owns the
brief, the guidance, the prompts and the rubric keywords; the player owns
the mechanics — a four-stop stepper (define → structure → prioritise →
review & submit), a SMART checklist, a visual issue-tree builder, a 2×2
impact/feasibility matrix, a rule-based framework check, autosaved drafts
and a locked submission.

```
caseStudy: {
  key, kicker{en,id}, title{en,id}, lead{en,id}, practice:[pair,…], goal{en,id},
  brief: { quote:{text,who}, email:{from,to,date,subject,paragraphs[],asks[],closing[]},
           facts:[{icon,k,v,hot?}], chart:{title,unit,years[],series:[{key,label,sub,vals[]}],takeaways[],note},
           modes:{title,intro,rows[],cols:[{icon,name,cells[],tone}]} },   // folder tabs
  steps: [
    { id:'define', title, short, guide, questions:[
        { id:'q1', type:'statement', title, help, stem{en,id}, placeholder, example?, min },
        { id:'q2', type:'smart', title, help, items:[{k,name,ask,hint}], reflect? } ] },
    { id:'structure', title, short, guide, stem{en,id},
      issues:[{ id:'q3'|'q4'|'q5', letter:'A'|'B'|'C', title, placeholder }], subLabel, subPlaceholder,
      mece:{ id:'q6', title, help, overlap:{ask,yes,fixed,note}, gap:{ask,yes,fixed,note} } },
    { id:'prioritise', title, short, guide,
      matrix:{ id:'q7', title, ask, help, axes:{x,y,lo,hi}, quadrants:{hh,hl,lh,ll}, quadNotes? },
      review:{ id:'q8', title, ask, help, confirm, changed, rationale, placeholder, min } } ],
  submit: { title, short, lead, button, confirmTitle, confirmBody, confirmYes, confirmNo,
            doneTitle, doneBody, copy, copied, reset, resetConfirm, local },
  review: { measure[], time[], action[], stakeholder[], solution[], dimensions:[{name,words[]}] }
}
```

`review` feeds the framework check: keyword lists (EN and ID) for the
SMART signals on Q1, and `dimensions` for the gap signal on the tree. The
check flags signals — a missing target figure, two issues sharing most of
their wording, an untouched dimension, more than two cards top-right — and
is labelled rule-based, not a grade. Answers live in
`localStorage['mt-lms-case:<slug>:<lesson>']` as
`{ a:{q1…q8}, step, submitted:{at,id} }`; nothing is uploaded. Submitting
locks the answers, unlocks "Mark complete", and offers a copy of the
submission as text.

### Enrichment blocks (`insights{}`, `resources{}`, `journey{}`)

Three optional blocks used across The Pack, The Rope and The Route:

- **insights** — `{ title?, lead?, items:[{h, body, tag?}] }` renders a
  "Field insights" grid (numbered "Insight 01…") after the reading
  sections: practitioner observations that frame the lesson.
- **resources** — `{ title?, lead?, items:[{kind, title, desc, body:[pair,…]}] }`
  renders a "Resource kit" before the knowledge check. `kind` is one of
  `template`, `checklist`, `script`, `prompt`, `worksheet`, `guide`. Each
  item expands to its lines with **Copy text** and **Save as .txt**; a
  `checklist` renders tick boxes whose state persists per member in
  `localStorage['mt-lms-kit:<slug>']`. Nothing leaves the device.
- **journey** — `{ before:{label,desc}, now:{label,desc}, next:{label,desc, lesson?|href?|tool?,mode?, cta?} }`
  renders "Where this sits in your journey" after the takeaways: the step
  before, this module, and the next move. `next.lesson` opens that lesson
  in the player (respecting sequential unlock), `next.href` links to
  another product, `next.tool` dispatches `mt:launch-tool`.

`mistakes` (`{ items:[{h, fix}] }`) is present on every lesson of the
three courses.

### YouTube film (`youtube{}`)

`youtube: { id, kicker{en,id}, title{en,id}, intro{en,id} }` renders a
YouTube video in the lesson player's skin, after the reading blocks and
before the knowledge check (1.3 Foundational Mindset does). A block may
instead carry `videos: [{ id, title?, captions?, dur? }, …]` to play
several videos under one lead-in, each with its own full player and a
"Video N of M" label, the earlier ones handing off to the next (2.1's
second film section does). Set
`youtubePlacement: "after-material"` (or `"after-material:N"`) to play it
straight after the slide material instead, before the lesson's diagrams
and reading blocks; with an array of decks, `"after-material:N"` plays it
after the Nth deck. `youtube` may also be an array of blocks, each with
its own `placement` (2.1 How Your Lens Shapes Your Results runs
Self-Leadership Foundations → film → The Root of Effectiveness → films →
Stages of Maturity → film).
The deck's end card then points at the film, and the film's at the
slides, film or lesson that follow. A poster
facade means nothing from YouTube loads until the member presses play;
the embed then runs with its own controls off and the player's controls
drive the IFrame API (play, scrub, ±10 s, mute, fullscreen, keyboard).
Subtitles come from three sources, in order of preference for the chosen
language: the block's own `captions: { en, id }` VTT files, drawn by the
player exactly like the lesson videos and independent of YouTube; a
caption track the YouTube video has in that language; or YouTube's
automatic translation of any track the video has. The CC menu marks a
language only when none of the three exist, follows the site language,
and remembers the member's choice.

### Slide material (`material{}`)

Any lesson can carry a designed slide deck, shown as a PowerPoint-style
player in the same skin as the intro video player and placed immediately
after the videos' closing takeaways (`videosOutro`):

```
material: {
  kicker{en,id}, title{en,id}, intro{en,id},
  base: "../../assets/lms/the-map/slides/adaptability-",
  slides: [ { title{en,id}, text{en,id} }, … ]
}
```

Intro videos (`videos[]`, with `videosIntro` and `videosOutro`) lead the
lesson by default. Set `videosPlacement: "after-material"` to play them
after the slide material instead, as reinforcement before the knowledge
check (1.2 Learning Intention does); the kicker and the hand-off card
adjust to the placement. `material` may also be an array of decks, and
`videosPlacement: "after-material:N"` places the videos after the Nth
deck, so a lesson can run deck → videos → deck before its reading
sections (1.3 Foundational Mindset does: Mindset 101, Shift our
mindsets, the two videos, Practising APR). Each deck keeps its own seen
state and position.

A `slides` lesson may carry `material{}` instead of the text `slides[]`
(1.2 Learning Intention does); the text deck is only rendered when
`slides[]` is present.

The player derives every image from `base`: `base + lang + '-NN.jpg'`
(1600 px), `-NN-960.jpg` (phones) and `-NN-320.jpg` (thumbnails), so a
deck needs one set of files per language, numbered from `01`. The deck
follows the site language live — switching EN/ID swaps the whole image
set — and `text` is the slide's own words, shown in the "Slide text"
panel and used as the image's alt text.
All strings are bilingual `{en, id}` pairs; the player follows the site's
`mtLang` preference and re-renders on switch.

## Replacing placeholder content

1. Edit the lesson entry in the relevant registry file — text, sections,
   slides, hotspots, checks.
2. For video: point `media.video` (or a per-lesson `video` override you
   add) at the new file, update `media.poster`, and replace the caption
   VTTs in `assets/lms/`.
3. Set `placeholder: false` on the lesson — the placeholder notice
   disappears automatically.

Nothing else needs to change: navigation, progress, completion, locking,
bilingual rendering and responsive behaviour all live in the player.

## Video & slide hosting (zero-cost path)

Placeholder videos reuse MP4s already committed to this repository, so the
prototype costs nothing to serve on GitHub Pages. For production-scale
video, swap `media.video` to any URL — the player does not care where the
file lives. Free-tier options that preserve the "replace the URL, keep the
UI" contract include Cloudflare Stream's free allowance, Bunny Stream's
minimal tier, or unlisted embeds as an interim step.

## Access control — honest status

The current gate (session flag checked by the product pages, sequential
unlock in the player) is **client-side prototype logic, not a security
layer**. On a static host, every asset in this repository is ultimately
fetchable by URL. The architecture is prepared for real authorization:
because all content is resolved through these registries, moving to signed
URLs or an authenticated content endpoint later only means changing the
`media.*` values (or serving these registry files from behind auth) — the
player and page structure stay as they are. Until that backend exists, do
not treat repository-hosted material as protected.

## Progress model

`localStorage['mt-lms:<slug>'] = { "1.1": true, … }` — per-product lesson
completion. The player derives module completion, course percentage, the
sidebar/hero progress bars, and sequential unlocking from this map.
`?demo=true` unlocks everything without recording progress server-side
(there is no server yet).

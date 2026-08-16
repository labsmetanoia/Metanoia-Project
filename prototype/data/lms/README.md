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

Every lesson may carry a `check{}` knowledge check and `takeaways[]`.
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

# Lesson films

Original learning films for the courses, made by Metanoia Labs from start to finish.
A film is written as a spec, drawn by `engine.html`, and rendered to video by `render.js`.
Nothing in a film comes from another publisher: no footage, no stock clip, no borrowed script.

## Make a film

```
node scripts/films/render.js scripts/films/specs/the-map-1-1.json
```

Writes to `prototype/assets/lms/films/`:

| File | What it is |
|---|---|
| `<id>-en.mp4`, `<id>-id.mp4` | 1280 x 720, H.264, one per language |
| `<id>-en.vtt`, `<id>-id.vtt` | the narration lines with their times |
| `<id>-en-poster.jpg`, `<id>-id-poster.jpg` | a frame for the player |
| `<id>-script.md` | the script in both languages and the source note |

Needs `playwright` (Chromium) and `ffmpeg`. A two-minute film takes a few minutes to render.
Options: `--lang en`, `--out <dir>`, `--fps 25`, `--narration <dir>`.

## A spec

`specs/*.json`. A film is a list of scenes. A scene has a `type` and a `say` list: the
narration lines, each in English and Bahasa Indonesia. One line is one beat. The length of a
beat comes from its word count, so each language runs at reading pace. Pictures arrive on beats.

Scene types: `title`, `story` (a drawn place and people, with a headline per beat),
`split` (two ideas side by side), `loop` (steps around a circle), `statement`, `recap`, `end`.
Mark the words that carry the point with `*asterisks*`.
`"quiet": true` on a scene keeps its lines out of the lower third, for scenes whose words are already large on screen.

To add a kind of scene or a new drawn place, add a builder to `BUILD` or `SETS` in `engine.html`.

## Voice

Without a voice the narration is text on screen and the film has a silent track. To add a
voice, record each language reading the lines in `<id>-script.md`, save it as
`<dir>/<id>-<lang>.m4a` and render with `--narration <dir>`. Use only a voice Metanoia Labs
owns or has licensed in writing for commercial use.

## Rules for an original film

1. Write from the lesson's objectives. Do not write with another publisher's film or handout open.
2. Invent the story, the people and the setting. Use no character, company or case from another course.
3. Teach methods under plain names. If a coined name helps, mention it once with its author.
4. Draw every picture here. No footage, no stock clips, no frames from other films.
5. Use only the fonts the site ships (open licences).
6. Fill in `sources` in the spec: how the film was written. It is printed in the script file.

# Lesson films

Original learning films for the courses, made by Metanoia Labs from start to finish.
A film is written as a spec, drawn by `collage/engine.html`, given sound by `collage/audio.py`
and rendered to video by `collage/render.js`. Nothing in a film comes from another publisher:
no footage, no stock clip, no borrowed script, no sampled music, no recorded voice.

## The style

A lesson is told as a journey across a paper map. The camera travels from stop to stop along a
dashed route. Each stop shows one idea with a small set of pieces: a caption card, a cut-out
picture, number tiles, typed labels, handwriting, a stamp. Under it runs a light music bed with
sound effects on each movement (paper, pencil, stamp, typewriter).

## Make a film

```
node scripts/films/collage/render.js scripts/films/collage/specs/the-map-1-1.json
```

Writes to `prototype/assets/lms/films/`:

| File | What it is |
|---|---|
| `<id>-en.mp4`, `<id>-id.mp4` | 1280 x 720, H.264 with AAC sound, one per language |
| `<id>-en.vtt`, `<id>-id.vtt` | the script lines with their times, for subtitles |
| `<id>-en-poster.jpg`, `<id>-id-poster.jpg` | the title card, for the player |
| `<id>-script.md` | the script in both languages and the source note |

Needs `playwright` (Chromium), `ffmpeg`, and `python3` with `numpy`. A ninety-second film takes
about five minutes per language. Options: `--lang en`, `--out <dir>`.

## A spec

`collage/specs/*.json`. A film is a list of figures (`figs`). Every text is given in English and
Bahasa Indonesia. A figure has a `kind`, usually a `card` (the caption, with `*stars*` around the
words that carry the point) and a `vtt` line (the full sentence for the subtitles and the script).

| Kind | What it shows |
|---|---|
| `title` | the opening card |
| `event` | a cut-out picture (`icon`), a typed `label`, optional number `tiles`, a handwritten `note` |
| `sign` | a signpost: an `old` name struck through and a `new` one |
| `stamp` | a stamped `label`, a typed `sub`, handwritten `notes` |
| `pair` | two labels set against each other (`a`, `b`, optional `sign`) |
| `loop` | numbered stops around a circle (`items`, optional `tiles` and `unit`) |
| `steps` | numbered stops along a rising path (`items`) |
| `list` | typed lines (`items`), each optionally ticked (`ok: true`), crossed (`ok: false`) or highlighted (`hi`) |
| `number` | large number `tiles` with a `unit` |
| `strike` | a handwritten line struck out (`old`) and rewritten (`new`) |
| `wide` | the camera pulls back and circles earlier stops (`mark`) |
| `quote` | the closing line, with one word in cut-out `tiles` |
| `turn` | the task for the learner, with a `stamp` |

Pictures available to `event`: envelope, note, laptop, calendar, clock, timer, person, people,
chat, target, chart, book, phone, slides, key, battery, cup, flag. To add one, draw it in `ICON`
in `engine.html`.

## Sound

`collage/audio.py` computes the music and every effect with numpy: plucked bass, electric piano,
a melody, brushes, and the effects that follow the pictures. Each film takes its key and tempo
from its lesson number. There are no samples and no loops from anywhere else, so the sound
belongs to Metanoia Labs.

## Voice

The films carry no spoken narration. To add one, record each language reading the lines in
`<id>-script.md` and mix it over the music. Use only a voice Metanoia Labs owns or has licensed
in writing for commercial use: a team member's own recording, or a synthetic voice whose licence
allows it. Never take a voice from another publisher's video.

## Rules for an original film

1. Write from the lesson's objectives. Do not write with another publisher's film or handout open.
2. Invent the story, the people and the setting. Use no character, company or case from another course.
3. Teach methods under plain names. If a researcher's term helps, mention it once with their name.
4. Draw every picture here. No footage, no stock clips, no frames from other films.
5. Compute every sound here. No sampled music, no effects libraries, no voices from other films.
6. Use only fonts under open licences (Playfair Display, Caveat, Roboto Condensed, JetBrains Mono).
7. Fill in `sources` in the spec: how the film was written. It is printed in the script file.

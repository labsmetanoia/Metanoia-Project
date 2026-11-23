#!/usr/bin/env node
/**
 * Renders a Metanoia Labs lesson film from its spec.
 *
 *   node scripts/films/render.js scripts/films/specs/the-map-1-1.json [--lang en,id] [--out <dir>] [--fps 25] [--narration <dir>]
 *
 * For each language it writes, into --out (default prototype/assets/lms/films):
 *   <id>-<lang>.mp4          1280 x 720, H.264, made frame by frame from engine.html
 *   <id>-<lang>.vtt          the narration lines with their times (captions, and the script a voice would read)
 *   <id>-<lang>-poster.jpg   one frame, for the player
 *   <id>-script.md           the script in both languages, with the source note from the spec
 *
 * --narration <dir>: when <dir>/<id>-<lang>.(m4a|mp3|wav) exists it becomes the sound track.
 * Without it the film gets a silent track, so every player treats it as an ordinary video.
 *
 * Everything in the picture is drawn by engine.html from shapes and the site's own fonts.
 * Needs playwright (Chromium) and ffmpeg on the path.
 */
const fs = require('fs'), path = require('path'), { spawn } = require('child_process');
const { chromium } = require('playwright');

const args = process.argv.slice(2);
const flag = (name, dflt) => { const i = args.indexOf('--' + name); return i >= 0 ? args[i + 1] : dflt; };
const specPath = args.find(a => a.endsWith('.json'));
if (!specPath) { console.error('usage: render.js <spec.json> [--lang en,id] [--out dir] [--fps 25] [--narration dir]'); process.exit(2); }
const ROOT = path.resolve(__dirname, '..', '..');
const OUT = path.resolve(flag('out', path.join(ROOT, 'prototype', 'assets', 'lms', 'films')));
const FPS = parseInt(flag('fps', '25'), 10);
const LANGS = flag('lang', 'en,id').split(',');
const NARR = flag('narration', null);
const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'));

const stamp = s => { const ms = Math.round(s * 1000), h = Math.floor(ms / 3600000), m = Math.floor(ms % 3600000 / 60000), sec = Math.floor(ms % 60000 / 1000); return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}.${String(ms % 1000).padStart(3, '0')}`; };

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, 'engine.html'));
  await page.evaluate(() => document.fonts.ready);
  const scripts = {};
  for (const lang of LANGS) {
    const info = await page.evaluate(([f, l]) => window.film.load(f, l), [spec, lang]);
    await page.evaluate(() => document.fonts.ready);
    const frames = Math.ceil(info.seconds * FPS), base = path.join(OUT, `${spec.id}-${lang}`);
    let sound = null;
    if (NARR) for (const ext of ['m4a', 'mp3', 'wav']) { const p = path.join(NARR, `${spec.id}-${lang}.${ext}`); if (fs.existsSync(p)) sound = p; }
    const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
      ...(sound ? ['-i', sound] : ['-f', 'lavfi', '-i', 'anullsrc=channel_layout=stereo:sample_rate=44100']),
      '-c:v', 'libx264', '-preset', 'slow', '-crf', '20', '-pix_fmt', 'yuv420p', '-r', String(FPS),
      '-c:a', 'aac', '-b:a', sound ? '128k' : '32k', '-shortest', '-movflags', '+faststart', base + '.mp4'], { stdio: ['pipe', 'inherit', 'inherit'] });
    const done = new Promise((res, rej) => ff.on('close', c => (c === 0 ? res() : rej(new Error('ffmpeg exited ' + c)))));
    const posterAt = Math.floor(frames * 0.3);
    const t0 = Date.now();
    for (let i = 0; i < frames; i++) {
      await page.evaluate(t => window.film.seek(t), i / FPS);
      const jpg = await page.screenshot({ type: 'jpeg', quality: 93 });
      if (i === posterAt) fs.writeFileSync(base + '-poster.jpg', jpg);
      if (!ff.stdin.write(jpg)) await new Promise(r => ff.stdin.once('drain', r));
    }
    ff.stdin.end(); await done;
    fs.writeFileSync(base + '.vtt', 'WEBVTT\n\n' + info.cues.map((c, i) => `${i + 1}\n${stamp(c.start)} --> ${stamp(c.end)}\n${c.text}\n`).join('\n'));
    scripts[lang] = info;
    console.log(`${path.basename(base)}.mp4  ${info.seconds.toFixed(1)} s  ${frames} frames  ${(fs.statSync(base + '.mp4').size / 1048576).toFixed(1)} MB  rendered in ${Math.round((Date.now() - t0) / 1000)} s${sound ? '  with narration' : '  silent track'}`);
  }
  await browser.close();
  const title = l => (spec.title && (spec.title[l] || spec.title.en)) || spec.id;
  let md = `# ${title('en')}\n\nFilm \`${spec.id}\` · ${spec.product.en} ${spec.lesson || ''}\n\n**Source note.** ${spec.sources || ''}\n`;
  for (const lang of LANGS) md += `\n## ${lang === 'id' ? 'Bahasa Indonesia' : 'English'} (${Math.round(scripts[lang].seconds)} s)\n\n` + scripts[lang].cues.map(c => `- \`${stamp(c.start).slice(3, 8)}\` ${c.text}`).join('\n') + '\n';
  fs.writeFileSync(path.join(OUT, `${spec.id}-script.md`), md);
})().catch(e => { console.error(e); process.exit(1); });

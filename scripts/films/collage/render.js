#!/usr/bin/env node
/* Render a collage-style lesson film: frames from engine.html, music and effects from audio.py.
   usage: node scripts/films/collage/render.js scripts/films/collage/specs/<film>.json [--lang en,id] [--out dir]
   Writes <id>-<lang>.mp4, .vtt and -poster.jpg, and <id>-script.md. Needs playwright (Chromium), ffmpeg and python3 with numpy. */
const fs = require('fs'), path = require('path'), { spawn, execFileSync } = require('child_process');
const { chromium } = require('playwright');
const args = process.argv.slice(2), flag = (n, d) => { const i = args.indexOf('--' + n); return i >= 0 ? args[i + 1] : d; };
const specPath = args.find(a => a.endsWith('.json')); if (!specPath) { console.error('usage: render.js <spec.json> [--lang en,id] [--out dir]'); process.exit(2); }
const ROOT = path.resolve(__dirname, '..', '..', '..'), OUT = path.resolve(flag('out', path.join(ROOT, 'prototype', 'assets', 'lms', 'films'))), FPS = 25, LANGS = flag('lang', 'en,id').split(',');
const spec = JSON.parse(fs.readFileSync(specPath, 'utf8')), TMP = fs.mkdtempSync(path.join(require('os').tmpdir(), 'film-'));
const stamp = s => { const ms = Math.round(s * 1000), h = Math.floor(ms / 3600000), m = Math.floor(ms % 3600000 / 60000), sec = Math.floor(ms % 60000 / 1000); return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}.${String(ms % 1000).padStart(3, '0')}`; };
/* each film gets its own key and tempo from its lesson number, so a module does not sound like one loop */
const num = String(spec.lesson || '1.1').split('.').map(Number), KEY = ((num[0] * 3 + num[1] * 2) % 7) - 3, BPM = 98 + ((num[0] * 5 + num[1] * 3) % 5) * 3;
(async () => {
  fs.mkdirSync(OUT, { recursive: true }); const browser = await chromium.launch(); const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, 'engine.html')); await page.evaluate(() => document.fonts.ready); const scripts = {};
  for (const lang of LANGS) {
    await page.evaluate(([f, l]) => window.film.load(f, l), [spec, lang]); await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(250);
    const info = await page.evaluate(([f, l]) => window.film.load(f, l), [spec, lang]);   /* built again once the fonts are in, so strips fit their text */
    info.quiet = spec.figs.map((f, i) => (f.kind === 'wide' || f.kind === 'quote' ? info.starts[i] : null)).filter(x => x != null);
    const base = path.join(OUT, `${spec.id}-${lang}`), cues = path.join(TMP, lang + '.json'), wav = path.join(TMP, lang + '.wav'); fs.writeFileSync(cues, JSON.stringify(info));
    execFileSync('python3', [path.join(__dirname, 'audio.py'), cues, wav, String(KEY), String(BPM)]);
    const frames = Math.ceil(info.seconds * FPS), posterAt = Math.round((spec.poster || 2.6) * FPS);
    const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-', '-i', wav, '-c:v', 'libx264', '-preset', 'slow', '-crf', '25', '-pix_fmt', 'yuv420p', '-r', String(FPS), '-c:a', 'aac', '-b:a', '128k', '-shortest', '-movflags', '+faststart', base + '.mp4'], { stdio: ['pipe', 'inherit', 'inherit'] });
    const done = new Promise((res, rej) => ff.on('close', c => (c === 0 ? res() : rej(new Error('ffmpeg exited ' + c))))); const t0 = Date.now();
    for (let i = 0; i < frames; i++) { await page.evaluate(t => window.film.seek(t), i / FPS); const jpg = await page.screenshot({ type: 'jpeg', quality: 93 }); if (i === posterAt) fs.writeFileSync(base + '-poster.jpg', jpg); if (!ff.stdin.write(jpg)) await new Promise(r => ff.stdin.once('drain', r)); }
    ff.stdin.end(); await done;
    fs.writeFileSync(base + '.vtt', 'WEBVTT\n\n' + info.cues.map((c, i) => `${i + 1}\n${stamp(c.start)} --> ${stamp(c.end)}\n${c.text}\n`).join('\n'));
    scripts[lang] = info; console.log(`${path.basename(base)}.mp4  ${info.seconds.toFixed(1)} s  ${(fs.statSync(base + '.mp4').size / 1048576).toFixed(1)} MB  rendered in ${Math.round((Date.now() - t0) / 1000)} s  key ${KEY} bpm ${BPM}`);
  }
  await browser.close();
  const title = l => String((spec.title && (spec.title[l] || spec.title.en)) || spec.id).replace(/\*/g, '');
  let md = `# ${title('en')}\n\nFilm \`${spec.id}\` · The Map ${spec.lesson || ''} · collage style, with music and sound effects\n\n**Source note.** ${spec.sources || ''}\n`;
  for (const lang of LANGS) md += `\n## ${lang === 'id' ? 'Bahasa Indonesia' : 'English'} (${Math.round(scripts[lang].seconds)} s)\n\n` + scripts[lang].cues.map(c => `- \`${stamp(c.start).slice(3, 8)}\` ${c.text}`).join('\n') + '\n';
  fs.writeFileSync(path.join(OUT, `${spec.id}-script.md`), md);
})().catch(e => { console.error(e); process.exit(1); });

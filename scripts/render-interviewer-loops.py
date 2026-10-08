#!/usr/bin/env python3
"""
Render the interviewer loops shipped in prototype/assets/rope/interviewers/
from the live face rig (js/rope-face.js), so the pre-rendered clips match the
real-time performance exactly. Headless Chromium draws each frame through the
same WebGL engine; PyAV encodes them.

Per persona:  <id>-idle.mp4/.webm   10 s, 30 fps — attentive, breathing, blinks, glances
              <id>-talking.mp4/.webm 10 s, 30 fps — speaking a question (no audio)
              <id>-idle.jpg          poster (first idle frame)
These play as the stage's no-WebGL fallback and as previews on the Rope page
and the Customise step. 960×540, H.264 (yuv420p) + VP9.

Usage:  python3 scripts/render-interviewer-loops.py [hr manager exec]
Requires: node + playwright-core (uses the Chromium at PW_CHROME or /opt/pw-browsers/…),
          av (PyAV), Pillow, and a static server for prototype/ on PORT (default 8931).
"""
import os, sys, json, subprocess, base64, io
import av
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'prototype', 'assets', 'rope', 'interviewers')
PORT = os.environ.get('PORT', '8931')
CHROME = os.environ.get('PW_CHROME', '/opt/pw-browsers/chromium-1194/chrome-linux/chrome')
NODE_PATH = os.environ.get('NODE_PATH', '')
FPS, SECS, W, H = 30, 10, 960, 540
TALK = { 'hr': 'Thanks for making the time today. Let us begin. Tell me about yourself, and what brought you to this role.',
         'manager': 'I have read your CV, and I want to hear the details behind it. Walk me through the hardest problem you solved last year.',
         'exec': 'You have my attention for thirty minutes. Make them count. What have you built, and why should it matter to us?' }
GAZE0 = { 'hr': [0.3, 0.05], 'manager': [0.0, 0.0], 'exec': [-0.35, 0.0] }

CAPTURE = r'''
const { chromium } = require('playwright-core');
const [id, mode, text, gaze] = process.argv.slice(2);
(async () => {
  const br = await chromium.launch({ executablePath: process.env.PW_CHROME, args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await br.newPage({ viewport: { width: 1280, height: 720 } });
  await p.goto('http://localhost:' + process.env.PORT + '/rig-harness.html');
  await p.evaluate(([id, g]) => boot(id, JSON.parse(g)), [id, gaze]);
  const frames = await p.evaluate(async ([mode, text]) => {
    const out = []; const FPS = 30, N = FPS * 10, step = 1000 / FPS;
    // settle: a few frames so the smoothed state starts at rest
    for (let k = 0; k < 12; k++) rig.renderAt(-400 + k * step);
    if (mode === 'talking') { rig.setMood('talking'); rig.lips.offline(0); rig.lips.start(text, 0.98); rig.lips.offline(null); }
    for (let i = 0; i < N; i++) {
      const t = i * step;
      if (mode === 'talking') {
        // word boundaries on an estimated clock, like a speech engine reports them
        if (i === 0) { rig._words = text.split(/\s+/); rig._wi = 0; rig._next = 120; }
        if (t >= rig._next && rig._wi < rig._words.length) { rig.lips.offline(t); rig.lips.boundary({ charIndex: text.indexOf(rig._words[rig._wi], rig._ci || 0) }); rig._ci = text.indexOf(rig._words[rig._wi], rig._ci || 0) + 1; rig._next = t + rig._words[rig._wi].length * 64 + 110; rig._wi++; rig.lips.offline(null); }
        if (rig._wi >= rig._words.length && t > rig._next + 600 && t < N * step - 1500 && !rig._restarted) { rig._restarted = true; rig.lips.offline(t); rig.lips.start(text, 0.98); rig.lips.offline(null); rig._wi = 0; rig._ci = 0; rig._next = t + 300; }
        rig.setMood(t > N * step - 900 ? 'idle' : 'talking');
      } else rig.setMood('idle');
      rig.renderAt(t);
      out.push(rig.canvas.toDataURL('image/jpeg', 0.95));
    }
    return out;
  }, [mode, text]);
  process.stdout.write(JSON.stringify(frames));
  await br.close();
})();
'''

HARNESS = os.path.join(ROOT, 'scripts', 'lib', 'rig-harness.html')

def capture(pid, mode):
    import shutil
    shutil.copy(HARNESS, os.path.join(ROOT, 'prototype', 'rig-harness.html'))
    cwd = os.environ.get('CAPTURE_CWD', ROOT)          # a directory whose node_modules holds playwright-core
    script = os.path.join(cwd, '.rig-capture.js')
    with open(script, 'w') as f: f.write(CAPTURE)
    env = dict(os.environ, PW_CHROME=CHROME, PORT=PORT)
    r = subprocess.run(['node', script, pid, mode, TALK[pid], json.dumps(GAZE0[pid])], capture_output=True, env=env, cwd=cwd, timeout=1800)
    os.remove(script); os.remove(os.path.join(ROOT, 'prototype', 'rig-harness.html'))
    if r.returncode: raise SystemExit(r.stderr.decode()[-2000:])
    return [Image.open(io.BytesIO(base64.b64decode(d.split(',')[1]))).convert('RGB').resize((W, H), Image.LANCZOS) for d in json.loads(r.stdout)]

def encode(frames, path, codec, opts):
    out = av.open(path, 'w')
    st = out.add_stream(codec, rate=FPS); st.width = W; st.height = H; st.pix_fmt = 'yuv420p'; st.options = opts
    for im in frames:
        fr = av.VideoFrame.from_image(im)
        for pkt in st.encode(fr): out.mux(pkt)
    for pkt in st.encode(): out.mux(pkt)
    out.close()

def main():
    ids = sys.argv[1:] or ['hr', 'manager', 'exec']
    for pid in ids:
        for mode in ('idle', 'talking'):
            frames = capture(pid, mode)
            encode(frames, os.path.join(OUT, '%s-%s.mp4' % (pid, mode)), 'libx264', {'crf': '23', 'preset': 'slow', 'profile': 'main', 'movflags': '+faststart', 'tune': 'film'})
            encode(frames, os.path.join(OUT, '%s-%s.webm' % (pid, mode)), 'libvpx-vp9', {'crf': '33', 'b': '0', 'row-mt': '1', 'cpu-used': '2'})
            if mode == 'idle': frames[0].save(os.path.join(OUT, pid + '-idle.jpg'), quality=86, optimize=True, progressive=True)
            print(pid, mode, len(frames), 'frames →', os.path.getsize(os.path.join(OUT, '%s-%s.mp4' % (pid, mode))) // 1024, 'KB mp4,', os.path.getsize(os.path.join(OUT, '%s-%s.webm' % (pid, mode))) // 1024, 'KB webm')

if __name__ == '__main__':
    main()

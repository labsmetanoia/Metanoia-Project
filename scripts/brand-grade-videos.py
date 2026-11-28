#!/usr/bin/env python3
"""
Grade the earlier lesson films of The Map towards the Metanoia Labs palette.

For every film a lesson lists under `videoBlocks` (assets/lms/the-map/<name>.mp4 or <name>-brand.mp4)
this writes <name>-brand.mp4 from the ungraded <name>.mp4: same frames, same timing, audio copied
bit-exact. Only the picture changes:

  1. electric blue and cyan move toward the site's deep blue, calmer and a little darker
  2. flat white and light grey sets become the site's warm ivory (--text #F5EFE6)
  3. a gentle S-curve
  4. navy (--bg #0B1120) in the shadows, a touch of gold (--gold #C9A84C) in the highlights
  5. slightly lower saturation overall; warm hues (skin, wood) keep theirs
  6. a soft vignette

Steps 1 to 5 are one colour lookup table, so every film gets exactly the same treatment.

Usage:  python3 scripts/brand-grade-videos.py [--posters] [--jobs 2] [name ...]
        --posters   also grade each film's poster image in place (run once: it is not reversible)
Requires: ffmpeg (libx264, lut3d), numpy
"""
import json, os, re, subprocess, sys, tempfile
from concurrent.futures import ThreadPoolExecutor
import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIR = os.path.join(ROOT, 'prototype', 'assets', 'lms', 'the-map')
NAVY = np.array([0x0B, 0x11, 0x20], np.float32) / 255
GOLD = np.array([0xC9, 0xA8, 0x4C], np.float32) / 255
IVORY = np.array([0xF5, 0xEF, 0xE6], np.float32) / 255
W = np.array([.2126, .7152, .0722], np.float32)
VIGNETTE = 'vignette=a=PI/10'


def rgb2hsv(x):
    mx = x.max(-1); mn = x.min(-1); d = mx - mn
    r, g, b = x[..., 0], x[..., 1], x[..., 2]; m = d > 1e-6; dd = np.where(m, d, 1)
    h = np.where(mx == r, ((g - b) / dd) % 6, np.where(mx == g, (b - r) / dd + 2, (r - g) / dd + 4)) * 60
    return np.where(m, h, 0), np.where(mx > 1e-6, d / np.where(mx > 1e-6, mx, 1), 0), mx


def hsv2rgb(h, s, v):
    h = (h % 360) / 60; i = np.floor(h); f = h - i
    p = v * (1 - s); q = v * (1 - s * f); t = v * (1 - s * (1 - f)); i = i.astype(int) % 6
    return np.stack([np.choose(i, [v, q, p, p, t, v]), np.choose(i, [t, v, v, q, p, p]), np.choose(i, [p, p, t, v, v, q])], -1)


def band(h, lo, hi, soft):
    """1 inside [lo, hi] degrees of hue, with soft edges"""
    return np.clip((h - (lo - soft)) / soft, 0, 1) * np.clip(((hi + soft) - h) / soft, 0, 1)


def grade(x):
    x = x.astype(np.float32)
    # 1. cool colours toward the site's deep blue
    h, s, v = rgb2hsv(x); cool = band(h, 178, 262, 22) * np.clip(s / .25, 0, 1)
    x = hsv2rgb(h + (222 - h) * .50 * cool, s * (1 - .36 * cool), v * (1 - .14 * cool * s))
    # 2. flat white and light grey to warm ivory, a little below paper white so it sits in a dark page
    lum = (x @ W)[..., None]; sat = x.max(-1, keepdims=True) - x.min(-1, keepdims=True)
    hi = np.clip((lum - .62) / .38, 0, 1) * np.clip(1 - sat * 3.2, 0, 1)
    x = x * (1 - hi * .62) + hi * .62 * (IVORY * lum * .975)
    # 3. gentle S-curve
    x = np.clip(x, 0, 1); x = x * x * (3 - 2 * x) * .30 + x * .70
    # 4. split tone
    lum = (x @ W)[..., None]
    sh = np.clip(1 - lum / .42, 0, 1) ** 1.4
    x = x * (1 - sh * .38) + sh * .38 * (NAVY + lum * np.array([.80, .92, 1.18], np.float32))
    hl = np.clip((lum - .58) / .42, 0, 1); x = x + hl * .085 * (GOLD - .52)
    # 5. saturation
    h, s, v = rgb2hsv(np.clip(x, 0, 1)); warm = band(h, 8, 58, 14)[..., None]
    lum = (x @ W)[..., None]; x = lum + (x - lum) * (.88 + .10 * warm)
    return np.clip(x, 0, 1)


def write_cube(path, n=33):
    g = np.linspace(0, 1, n, dtype=np.float32); b, gg, r = np.meshgrid(g, g, g, indexing='ij')   # red varies fastest
    out = grade(np.stack([r, gg, b], -1).reshape(-1, 3))
    with open(path, 'w') as f:
        f.write('TITLE "Metanoia grade"\nLUT_3D_SIZE %d\n' % n)
        for row in out: f.write('%.6f %.6f %.6f\n' % tuple(row))


def films():
    """(name, poster file or None) for every earlier film a lesson lists"""
    s = open(os.path.join(ROOT, 'prototype', 'data', 'lms', 'the-map.js'), encoding='utf-8').read()
    head = "window.MT_LMS['the-map'] = "; a = s.index(head) + len(head); reg = json.loads(s[a:s.rstrip().rfind(';')])
    out = {}
    for m in reg['modules']:
        for l in m['lessons']:
            for blk in l.get('videoBlocks') or []:
                for v in blk['videos']:
                    src = v['src'] if isinstance(v['src'], str) else v['src']['en']
                    if 'assets/lms/the-map/' not in src: continue
                    name = re.sub(r'(-brand)?\.mp4$', '', os.path.basename(src))
                    poster = v.get('poster'); poster = poster if isinstance(poster, str) or poster is None else poster['en']
                    out[name] = os.path.basename(poster) if poster else None
    return out


def run(cmd):
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode: raise SystemExit('ffmpeg failed: %s\n%s' % (' '.join(cmd[:8]), r.stderr[-800:]))


def encode(name, cube):
    src = os.path.join(DIR, name + '.mp4'); dst = os.path.join(DIR, name + '-brand.mp4'); tmp = dst + '.tmp.mp4'
    if not os.path.exists(src): raise SystemExit('no ungraded source for ' + name)
    run(['ffmpeg', '-y', '-loglevel', 'error', '-i', src, '-map', '0:v:0', '-map', '0:a?', '-vf', 'lut3d=%s:interp=tetrahedral,%s' % (cube, VIGNETTE),
         '-c:v', 'libx264', '-crf', '23', '-preset', 'medium', '-profile:v', 'high', '-pix_fmt', 'yuv420p', '-c:a', 'copy', '-movflags', '+faststart', '-fps_mode', 'passthrough', tmp])
    os.replace(tmp, dst)
    return '%s-brand.mp4  %.1f MB' % (name, os.path.getsize(dst) / 1e6)


def grade_poster(poster, cube):
    p = os.path.join(DIR, poster); tmp = p + '.tmp.jpg'
    run(['ffmpeg', '-y', '-loglevel', 'error', '-i', p, '-vf', 'lut3d=%s:interp=tetrahedral,%s' % (cube, VIGNETTE), '-q:v', '3', '-frames:v', '1', '-update', '1', tmp])
    os.replace(tmp, p)


if __name__ == '__main__':
    args = sys.argv[1:]; posters = '--posters' in args; jobs = 2
    if '--jobs' in args: i = args.index('--jobs'); jobs = int(args[i + 1]); del args[i:i + 2]
    only = [a for a in args if not a.startswith('--')]
    todo = {k: v for k, v in films().items() if not only or k in only}
    cube = os.path.join(tempfile.mkdtemp(), 'metanoia.cube'); write_cube(cube)
    with ThreadPoolExecutor(jobs) as ex:
        for line in ex.map(lambda n: encode(n, cube), sorted(todo)): print(line, flush=True)
    if posters:
        done = set()
        for name, poster in sorted(todo.items()):
            if poster and poster not in done and os.path.exists(os.path.join(DIR, poster)): grade_poster(poster, cube); done.add(poster)
        print('posters graded', len(done))
    print('films graded', len(todo))

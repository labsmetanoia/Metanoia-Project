#!/usr/bin/env python3
"""
Mobile hero film derivatives.

Every hero video ships as a 1280×720 landscape file of 1.5–4.8 MB — far too
heavy for a phone on a mobile connection. This script derives, for each one,
a portrait loop built for small screens:

  assets/m/video/<name>-m.mp4   540×960 (9:16 centre crop), 24 fps, ≤ 8 s,
                                H.264 main profile, CRF-tuned, faststart —
                                typically 300–600 KB
  assets/m/video/<name>-m.jpg   540×960 poster from the first frame (~40 KB)

The originals stay untouched as the desktop sources. Re-run whenever a hero
video is replaced. Requires PyAV (pip install av) and Pillow.

Usage: python3 scripts/build-mobile-video.py [--only name]
"""
import json
import os
import sys
from fractions import Fraction

import av
from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'prototype')
OUT = os.path.join(ROOT, 'assets', 'm', 'video')
SOURCES = {
    'fresh-graduate-hero': 'assets/fresh-graduate-hero.mp4',
    'early-professional-hero': 'assets/early-professional-hero.mp4',
    'for-enterprise-hero': 'assets/for-enterprise-hero.mp4',
    'mature-professional-hero': 'assets/mature-professional-hero.mp4',
    'for-mentor': 'assets/for-mentor.mp4',
    'student-hero': 'assets/student-hero.mp4',
    '01-call-v2': 'assets/01-call-v2.mp4',
}
W, H = 540, 960
FPS = 24
MAX_SECONDS = 8
CRF = '30'
# busier footage needs a firmer hand to stay under ~600 KB
CRF_OVERRIDE = {'early-professional-hero': '33'}


def crop_portrait(frame_img):
    """Centre-crop a landscape frame to 9:16 and resize to W×H."""
    sw, sh = frame_img.size
    target_w = int(sh * W / H)
    if target_w > sw:
        target_w = sw
    x0 = (sw - target_w) // 2
    return frame_img.crop((x0, 0, x0 + target_w, sh)).resize((W, H), Image.LANCZOS)


def build(name, rel):
    src = os.path.join(ROOT, rel)
    os.makedirs(OUT, exist_ok=True)
    out_mp4 = os.path.join(OUT, f'{name}-m.mp4')
    out_jpg = os.path.join(OUT, f'{name}-m.jpg')

    inp = av.open(src)
    istream = inp.streams.video[0]
    istream.thread_type = 'AUTO'

    out = av.open(out_mp4, 'w', options={'movflags': '+faststart'})
    ostream = out.add_stream('libx264', rate=FPS)
    ostream.width, ostream.height = W, H
    ostream.pix_fmt = 'yuv420p'
    ostream.codec_context.time_base = Fraction(1, FPS)
    ostream.options = {'crf': CRF_OVERRIDE.get(name, CRF), 'preset': 'slow', 'profile': 'main', 'level': '3.1', 'tune': 'film', 'g': str(FPS * 2)}

    src_fps = float(istream.average_rate) if istream.average_rate else FPS
    step = src_fps / FPS
    next_pick = 0.0
    written = 0
    poster_done = False
    for i, frame in enumerate(inp.decode(istream)):
        if i + 1e-6 < next_pick:
            continue
        next_pick += step
        img = crop_portrait(frame.to_image())
        if not poster_done:
            img.save(out_jpg, 'JPEG', quality=76, optimize=True, progressive=True)
            poster_done = True
        vf = av.VideoFrame.from_image(img)
        vf.pts = written
        vf.time_base = Fraction(1, FPS)
        for pkt in ostream.encode(vf):
            out.mux(pkt)
        written += 1
        if written >= FPS * MAX_SECONDS:
            break
    for pkt in ostream.encode():
        out.mux(pkt)
    out.close()
    inp.close()
    return written, os.path.getsize(out_mp4), os.path.getsize(out_jpg)


def main():
    only = None
    if '--only' in sys.argv:
        only = sys.argv[sys.argv.index('--only') + 1]
    rows = []
    for name, rel in SOURCES.items():
        if only and name != only:
            continue
        frames, vb, pb = build(name, rel)
        print(f'{name:28s} {frames / FPS:.1f}s  video {vb // 1024} KB  poster {pb // 1024} KB')
        rows.append((f'assets/m/video/{name}-m.mp4', vb, 'video', rel))
        rows.append((f'assets/m/video/{name}-m.jpg', pb, 'photo', rel))
    # register the derivatives in the asset manifest
    mp = os.path.join(ROOT, 'assets', 'asset-manifest.json')
    with open(mp, encoding='utf-8') as f:
        m = json.load(f)
    have = {r['file'] for r in m['assets']}
    for file, size, cat, src in rows:
        if file in have:
            for r in m['assets']:
                if r['file'] == file:
                    r['bytes'] = size
            continue
        m['assets'].append({'file': file, 'bytes': size, 'category': cat, 'people': 'unknown',
                            'source': f'derived from {src} (portrait mobile derivative: 540×960 centre crop, ≤8 s loop)',
                            'licence': '', 'licence_proof': '', 'model_release': '', 'status': 'undocumented',
                            'notes': "mobile derivative — inherits the source's licence and model-release status"})
    with open(mp, 'w', encoding='utf-8') as f:
        json.dump(m, f, indent=2, ensure_ascii=False)


if __name__ == '__main__':
    main()

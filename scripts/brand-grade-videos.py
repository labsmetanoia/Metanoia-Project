#!/usr/bin/env python3
"""
Brand-grade the Map 1.1 intro videos (assets/lms/the-map/adaptability-N.mp4).

Writes adaptability-N-brand.mp4 next to each source: same frames, same timing,
audio copied bit-exact; only the picture is graded towards the Metanoia palette —
flat white sets warmed to paper, navy-tinted shadows, a touch of gold in the
highlights, a gentle S-curve, slight desaturation and a soft vignette. Also
refreshes adaptability-N-poster.jpg from the graded picture.

Usage:  python3 scripts/brand-grade-videos.py [1 2 3]
Requires: av (PyAV, ships its own ffmpeg with libx264), numpy, Pillow
"""
import os, sys, time
from fractions import Fraction
import av
import numpy as np
from PIL import Image

SRC = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'prototype', 'assets', 'lms', 'the-map')

NAVY  = np.array([0x0B, 0x15, 0x24], np.float32) / 255   # brand deep navy
GOLD  = np.array([0xC9, 0xA8, 0x4C], np.float32) / 255   # brand gold
PAPER = np.array([0xF4, 0xEF, 0xE4], np.float32) / 255   # warm paper for the flat white sets

_vig = {}
def vignette(h, w):
    k = (h, w)
    if k not in _vig:
        y, x = np.mgrid[0:h, 0:w].astype(np.float32)
        d = np.sqrt(((x / w - .5) * 2) ** 2 + ((y / h - .5) * 2) ** 2)
        _vig[k] = (1 - np.clip((d - .55) / 1.1, 0, 1) ** 2 * .28)[..., None]
    return _vig[k]

def grade(rgb8, strength=1.0):
    x = rgb8.astype(np.float32) / 255
    lum = (x @ np.array([.2126, .7152, .0722], np.float32))[..., None]
    # 1 flat white / light-grey sets → warm paper (only where bright & unsaturated)
    sat = x.max(-1, keepdims=True) - x.min(-1, keepdims=True)
    hi = np.clip((lum - .72) / .28, 0, 1) * np.clip(1 - sat * 4, 0, 1)
    x = x * (1 - hi * .28) + hi * .28 * (PAPER * (lum / np.maximum(lum, 1e-3)))
    # 2 gentle S-curve contrast
    x = np.clip(x, 0, 1)
    x = x * x * (3 - 2 * x) * .35 + x * .65
    # 3 split tone: navy into shadows, gold into highlights
    lum = (x @ np.array([.2126, .7152, .0722], np.float32))[..., None]
    sh = np.clip(1 - lum / .45, 0, 1) ** 1.5
    x = x * (1 - sh * .30) + sh * .30 * (NAVY * (lum / .45 + .15))
    hl = np.clip((lum - .55) / .45, 0, 1)
    x = x + hl * .10 * (GOLD - .5)
    # 4 slight desaturation for a calmer, editorial look
    lum = (x @ np.array([.2126, .7152, .0722], np.float32))[..., None]
    x = lum + (x - lum) * .86
    # 5 vignette
    x = x * vignette(*x.shape[:2])
    out = np.clip(x, 0, 1)
    if strength < 1: out = rgb8.astype(np.float32) / 255 * (1 - strength) + out * strength
    return (out * 255 + .5).astype(np.uint8)


# pointwise part baked into a 128^3 LUT for speed; vignette applied per frame
_lv = np.arange(128, dtype=np.uint8) * 2 + 1
_r, _g, _b = np.meshgrid(_lv, _lv, _lv, indexing='ij')
_saved = vignette
vignette = lambda h, w: np.ones((h, w, 1), np.float32)
LUT = grade(np.stack([_r, _g, _b], -1).reshape(1, -1, 3)).reshape(-1, 3).astype(np.float32)
vignette = _saved

def grade_fast(rgb8):
    idx = (rgb8[..., 0].astype(np.int32) >> 1 << 14) | (rgb8[..., 1].astype(np.int32) >> 1 << 7) | (rgb8[..., 2].astype(np.int32) >> 1)
    return (LUT[idx] * vignette(*rgb8.shape[:2]) + .5).astype(np.uint8)


def encode(n):
    t0 = time.time()
    inp = av.open('%s/adaptability-%d.mp4' % (SRC, n))
    vin, ain = inp.streams.video[0], inp.streams.audio[0]
    fps = vin.guessed_rate or vin.average_rate; tb = vin.time_base
    out = av.open('%s/adaptability-%d-brand.mp4' % (SRC, n), 'w', options={'movflags': 'faststart'})
    vout = out.add_stream('libx264', rate=fps)
    vout.codec_context.time_base = vin.time_base; vout.time_base = vin.time_base
    vout.width, vout.height, vout.pix_fmt = vin.width, vin.height, 'yuv420p'
    vout.options = {'crf': '20', 'preset': 'fast', 'profile': 'high', 'level': '4.0'}
    aout = out.add_stream_from_template(ain)
    frames = 0; poster = False
    for pkt in inp.demux(vin, ain):
        if pkt.stream is ain:
            if pkt.dts is None: continue
            pkt.stream = aout; out.mux(pkt); continue
        for fr in pkt.decode():
            rgb = grade_fast(fr.to_ndarray(format='rgb24'))
            nf = av.VideoFrame.from_ndarray(rgb, format='rgb24')
            nf.pts = fr.pts if fr.pts is not None else frames; nf.time_base = tb
            for p in vout.encode(nf): out.mux(p)
            if not poster and fr.time is not None and fr.time >= 1.0:
                Image.fromarray(rgb).save('%s/adaptability-%d-poster.jpg' % (SRC, n), quality=80, optimize=True, progressive=True); poster = True
            frames += 1
    for p in vout.encode(): out.mux(p)
    out.close(); inp.close()
    print('adaptability-%d-brand.mp4: %d frames in %.0fs' % (n, frames, time.time() - t0))


if __name__ == '__main__':
    for n in [int(a) for a in sys.argv[1:]] or (1, 2, 3):
        encode(n)

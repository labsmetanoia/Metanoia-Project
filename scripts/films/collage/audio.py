"""Original music bed and sound effects for a lesson film, synthesised from scratch with numpy.
No samples, no loops, no third-party audio: every note and every effect is computed here, so the
sound belongs to Metanoia Labs. usage: audio.py <cues.json> <out.wav> [semitones] [bpm]"""
import sys, json, wave, numpy as np
SR = 44100; rng = np.random.default_rng(5)
info = json.load(open(sys.argv[1])); DUR = info['seconds'] + .4; N = int(DUR * SR)
music = np.zeros((N, 2)); fx = np.zeros((N, 2))
def put(buf, t, sig, gain=1.0, pan=0.0):
    i = int(t * SR)
    if i >= N or i < 0: return
    sig = sig[:N - i]; l = gain * (1 - max(0, pan)); r = gain * (1 + min(0, pan))
    buf[i:i + len(sig), 0] += sig * l; buf[i:i + len(sig), 1] += sig * r
def tt(d): return np.arange(int(d * SR)) / SR
def lp(x, n):  # boxcar low-pass
    if n <= 1: return x
    c = np.cumsum(np.concatenate([[0.0], x])); y = (c[n:] - c[:-n]) / n; return np.concatenate([np.full(n - 1, y[0]), y])[:len(x)] if len(y) else x
def hp(x, n): return x - lp(x, n)
def noise(d): return rng.standard_normal(int(d * SR))
KEY = int(sys.argv[3]) if len(sys.argv) > 3 else 0
def hz(m): return 440.0 * 2 ** ((m + KEY - 69) / 12)
# ── instruments ──
def bass(m, d):
    t = tt(d); f = hz(m); e = np.minimum(t / .008, 1) * np.exp(-t / .42)
    return (np.sin(2 * np.pi * f * t) + .45 * np.sin(4 * np.pi * f * t) * np.exp(-t / .2) + .12 * np.sin(6 * np.pi * f * t) * np.exp(-t / .1)) * e
def keys(m, d):
    t = tt(d); f = hz(m); e = np.minimum(t / .006, 1) * np.exp(-t / .55)
    return np.sin(2 * np.pi * f * t + 1.1 * np.sin(2 * np.pi * 2 * f * t) * np.exp(-t / .12)) * e * (1 + .05 * np.sin(2 * np.pi * 5 * t))
def pluck(m, d=.5):
    t = tt(d); f = hz(m); e = np.minimum(t / .003, 1) * np.exp(-t / .16)
    return (np.sin(2 * np.pi * f * t) + .3 * np.sin(2 * np.pi * 4 * f * t) * np.exp(-t / .03)) * e
def hat(acc=1.0): x = hp(noise(.09), 6) * np.exp(-tt(.09) / (.018 + .02 * acc)); return x * (.5 + .5 * acc)
def kick(): t = tt(.28); f = 46 + 70 * np.exp(-t / .035); return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / .11)
def rim(): t = tt(.07); return (np.sin(2 * np.pi * 1750 * t) * .6 + hp(noise(.07), 10) * .5) * np.exp(-t / .014)
# ── the tune: 104 bpm, swung, Dm9 · G13 · Cmaj9 · A7 ──
BPM = int(sys.argv[4]) if len(sys.argv) > 4 else 104; B = 60 / BPM; BAR = 4 * B; SW = .62
CH = [(38, [65, 69, 72, 76]), (43, [65, 69, 71, 76]), (36, [64, 67, 71, 74]), (33, [61, 65, 67, 73])]
WALK = [[38, 45, 41, 42], [43, 47, 50, 37], [36, 43, 40, 34], [33, 40, 37, 39]]
MEL = [[(0, 74), (1.5, 72), (2, 69), (3.5, 67)], [(0.5, 65), (2, 67), (2.5, 69)], [(0, 71), (1, 67), (2.5, 64), (3, 67)], [(1, 69), (1.5, 73), (3, 76)]]
CH2 = [(34, [62, 65, 69, 72]), (33, [61, 64, 67, 72]), (38, [65, 69, 72, 76]), (43, [65, 69, 71, 76])]
WALK2 = [[34, 41, 38, 36], [33, 40, 37, 35], [38, 45, 41, 40], [43, 50, 47, 45]]
MEL2 = [[(0, 77), (1, 74), (2.5, 72)], [(0.5, 73), (2, 76), (3.5, 73)], [(0, 74), (1.5, 72), (2, 69), (3, 65)], [(1, 67), (2.5, 71), (3.5, 74)]]
def at(bar, beat):  # swing the off-beats
    whole = int(beat); frac = beat - whole
    return bar * BAR + (whole + (SW if abs(frac - .5) < 1e-6 else frac)) * B
bars = int(DUR / BAR) + 1; starts = info['starts']; wide = info.get('quiet', [])
for b in range(bars):
    c = b % 4; sec = (b // 8) % 2; root, tones = (CH2 if sec else CH)[c]; walk = (WALK2 if sec else WALK)[c]; mel = (MEL2 if sec else MEL)[c]; t0 = b * BAR
    if t0 > info['seconds'] - 1.0: break
    hush = any(w - .1 <= t0 < w + BAR * .9 for w in wide)        # thin the band on the two wide shots
    for q in range(4): put(music, at(b, q), bass(walk[q] if b >= 1 else root, B * 1.1), .30 if not hush else .22)
    for e in range(8):
        beat = e / 2; acc = 1.0 if beat in (1, 3) else (.55 if e % 2 == 0 else .35)
        if b >= 1 or e % 2 == 0: put(music, at(b, beat), hat(acc), .10 * (.6 if hush else 1), .25)
    if b >= 2 and not hush:
        put(music, at(b, 0), kick(), .34); put(music, at(b, 2), kick(), .26)
        put(music, at(b, 1), rim(), .13, -.2); put(music, at(b, 3), rim(), .15, -.2)
    if b >= 2:
        for hit, dur in ((1.5, 1.4), (3, .9)) if b % 2 == 0 else ((0.5, 1.2), (2.5, 1.3)):
            for k, m in enumerate(tones): put(music, at(b, hit) + k * .006, keys(m, B * dur * 1.6), .055 if not hush else .04, -.3 + .2 * k)
    if b >= 4 and b % 4 != 3 or hush:
        for beat, m in mel: put(music, at(b, beat), pluck(m + 12, .6), .11, .35)
end = info['seconds'] - 2.6
for k, m in enumerate([50, 57, 65, 69, 72, 76]): put(music, end + k * .03, keys(m, 3.0), .09, -.3 + .12 * k)
put(music, end, bass(38, 2.6), .34)
# ── sound effects ──
def paper(d=.35): n = noise(d); x = hp(lp(n, 5), 40); e = np.sin(np.pi * np.linspace(0, 1, len(x))) ** 1.5; return x * e
def whoosh(d=1.0):
    n = noise(d); a = lp(n, 60); b = lp(n, 14); m = np.linspace(0, 1, len(n)); x = a * (1 - m) + b * m; return hp(x, 400) * np.sin(np.pi * m) ** 2
def stamp(): t = tt(.22); return np.sin(2 * np.pi * (70 + 60 * np.exp(-t / .02)) * t) * np.exp(-t / .055) + hp(noise(.22), 8) * np.exp(-t / .007) * .5
def popfx(): t = tt(.12); f = 420 + 520 * (t / .12); return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t / .04)
def tick(p=1.0): t = tt(.03); return (np.sin(2 * np.pi * 2300 * p * t) + hp(noise(.03), 5) * .6) * np.exp(-t / .0045)
def scratch(d=.6): n = noise(d); x = hp(lp(n, 4), 16); t = tt(d)[:len(x)]; return x * (.55 + .45 * np.sin(2 * np.pi * 17 * t + rng.random() * 6)) * np.sin(np.pi * np.linspace(0, 1, len(x))) ** .6
def draw(d=1.0): n = noise(d); x = hp(lp(n, 9), 60); m = np.linspace(0, 1, len(x)); return x * np.sin(np.pi * m) ** .8 * (.7 + .3 * np.sin(2 * np.pi * 9 * m * d))
for c in info['sfx']:
    k, t, d = c['k'], c['t'], c.get('d', .4); pan = float(rng.uniform(-.35, .35))
    if k == 'paper': put(fx, t, paper(max(.25, d)), .55, pan)
    elif k == 'whoosh': put(fx, t, whoosh(1.05), .9, 0)
    elif k == 'stamp': put(fx, t, stamp(), .42, pan)
    elif k == 'pop': put(fx, t, popfx(), .16, pan)
    elif k == 'tick': put(fx, t, tick(), .12, pan)
    elif k == 'type':
        n = max(2, int(d / .13))
        for i in range(n): put(fx, t + i * .13 + float(rng.uniform(-.012, .012)), tick(float(rng.uniform(.85, 1.2))), float(rng.uniform(.07, .12)), -.5)
    elif k == 'scratch': put(fx, t, scratch(max(.4, d)), .34, pan)
    elif k == 'draw': put(fx, t, draw(max(.5, d)), .30, pan)
mix = music * 1.0 + fx * .75
fade = np.ones(N); k = int(1.6 * SR); fade[-k:] = np.linspace(1, 0, k) ** 1.5; fade[:int(.05 * SR)] = np.linspace(0, 1, int(.05 * SR)); mix *= fade[:, None]
mix = np.tanh(mix * 1.6) / 1.6; mix = mix / np.max(np.abs(mix)) * 10 ** (-5.0 / 20)
w = wave.open(sys.argv[2], 'wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes((mix * 32767).astype('<i2').tobytes()); w.close()
print('audio', round(DUR, 1), 's · music rms', round(float(20 * np.log10(np.sqrt(np.mean(music ** 2)) + 1e-9)), 1), 'dB · fx rms', round(float(20 * np.log10(np.sqrt(np.mean(fx ** 2)) + 1e-9)), 1), 'dB')

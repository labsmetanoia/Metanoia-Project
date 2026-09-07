"""
Open Graph card generator (1200x630) for build-generated pages.

Cards are drawn with Pillow in the site's palette: night-navy ground, a gold
rule, a kicker line, the title set in a serif display face, a sub line and the
domain. Fonts come from the build host's DejaVu family, which ships with every
Debian/Ubuntu runner (Playfair and Roboto Condensed are web-only assets).

Output is a palette PNG so that ~700 cards weigh ~15-25 KB each.
"""
import os
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
NAVY = (5, 10, 18)
NAVY2 = (12, 20, 34)
GOLD = (201, 168, 76)
GOLD_B = (240, 216, 120)
TEXT = (245, 239, 230)
MUTED = (150, 160, 175)

_FONT_DIRS = ['/usr/share/fonts/truetype/dejavu', '/usr/share/fonts/dejavu', '/usr/share/fonts/TTF']


def _font(name, size):
    for d in _FONT_DIRS:
        p = os.path.join(d, name)
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()


def _wrap(draw, text, font, max_w):
    words = text.split()
    lines, cur = [], ''
    for w in words:
        t = (cur + ' ' + w).strip()
        if draw.textlength(t, font=font) <= max_w:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def card(path, kicker, title, sub='', tile=None, accent=GOLD):
    """Write a 1200x630 PNG. tile = (monogram, (r,g,b)) draws a logo-style tile."""
    im = Image.new('RGB', (W, H), NAVY)
    d = ImageDraw.Draw(im)
    # soft vertical gradient and a faint gold glow, top-right
    for y in range(H):
        f = y / H
        c = tuple(int(NAVY[i] + (NAVY2[i] - NAVY[i]) * f) for i in range(3))
        d.line([(0, y), (W, y)], fill=c)
    glow = Image.new('RGB', (W, H), NAVY)
    gd = ImageDraw.Draw(glow)
    for r in range(420, 0, -12):
        a = int(26 * (1 - r / 420))
        gd.ellipse([980 - r, -60 - r, 980 + r, -60 + r], fill=(NAVY[0] + a, NAVY[1] + int(a * 0.85), NAVY[2] + int(a * 0.4)))
    im = Image.blend(im, glow, 0.6)
    d = ImageDraw.Draw(im)

    # gold rule and wordmark
    d.rectangle([80, 78, 148, 82], fill=accent)
    f_mark = _font('DejaVuSans-Bold.ttf', 22)
    d.text((80, 100), 'METANOIA LABS', font=f_mark, fill=GOLD_B)

    x = 80
    y = 178
    if tile:
        mono, col = tile
        d.rounded_rectangle([80, 170, 190, 280], radius=26, fill=col)
        f_t = _font('DejaVuSans-Bold.ttf', 46)
        tw = d.textlength(mono, font=f_t)
        d.text((135 - tw / 2, 191), mono, font=f_t, fill=(11, 15, 22))
        x = 222

    f_k = _font('DejaVuSans-Bold.ttf', 24)
    d.text((x, y), kicker.upper(), font=f_k, fill=accent)
    y += 46

    size = 64
    f_h = _font('DejaVuSerif-Bold.ttf', size)
    lines = _wrap(d, title, f_h, W - x - 80)
    while len(lines) > 3 and size > 40:
        size -= 6
        f_h = _font('DejaVuSerif-Bold.ttf', size)
        lines = _wrap(d, title, f_h, W - x - 80)
    lines = lines[:3]
    for ln in lines:
        d.text((x, y), ln, font=f_h, fill=TEXT)
        y += int(size * 1.18)

    if sub:
        f_s = _font('DejaVuSans.ttf', 28)
        sl = _wrap(d, sub, f_s, W - x - 80)[:2]
        y += 14
        for ln in sl:
            d.text((x, y), ln, font=f_s, fill=MUTED)
            y += 38

    f_d = _font('DejaVuSans.ttf', 22)
    d.text((80, 566), 'metanoialabs.net', font=f_d, fill=MUTED)
    d.rectangle([0, H - 6, W, H], fill=accent)

    os.makedirs(os.path.dirname(path), exist_ok=True)
    im.convert('P', palette=Image.ADAPTIVE, colors=96).save(path, optimize=True)

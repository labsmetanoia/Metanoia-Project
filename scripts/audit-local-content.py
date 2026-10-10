#!/usr/bin/env python3
"""
Local-content audit — "global by default, locally tailored where necessary".

Lists where the global-audience surfaces (site pages, product pages, the four
LMS registries, the Rope question data) still carry Indonesia-specific framing
or jargon in their ENGLISH text, so an editor can decide, line by line, whether
each one is an intentional example from one market or a leftover.

Intentionally local experiences are not audited: The Map · Range (Explore,
directory, career graph — data/range/*), the Mind Palace signals, and the Rope
paths whose titles begin "Indonesia ·".

Usage:  python3 scripts/audit-local-content.py            summary per file
        python3 scripts/audit-local-content.py --lines    every hit, with context
        python3 scripts/audit-local-content.py --framing  only titles / headings / intros
Exit code is always 0: this is a report, not a gate.
"""
import re, sys, glob, os

ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'prototype')
LINES = '--lines' in sys.argv
FRAMING = '--framing' in sys.argv

FILES = ([os.path.join(ROOT, f) for f in ('index.html', 'pricing.html', 'help.html')]
         + sorted(glob.glob(ROOT + '/pages/*.html'))
         + sorted(glob.glob(ROOT + '/products/*/index.html'))
         + sorted(glob.glob(ROOT + '/data/lms/*.js'))
         + [ROOT + '/data/rope/paths.js', ROOT + '/data/rope/questions.js', ROOT + '/data/rope/questions-v3.js'])

# markers of Indonesia-specific framing or jargon in English text
MARK = re.compile(r"(?<!Bahasa )\bIndonesian?\b(?! only| subtitles)|\b(BUMN|CPNS|PKWTT?|MBKM|IPK|KKN|BPJS|THR|ODP|UMR|UMK|KTP|NPWP|skripsi|wisuda|magang|orang dalam)\b|\bRp ?\d", re.I)
FRAMING_KEYS = ('title', 'h', 'kicker', 'overview', 'intro', 'short', 'about', 'outcome', 'dossier', 'tag', 'sub', 'desc', 'lede')
EN_JSON = re.compile(r'"(\w+)":\s*\{\s*"en":\s*"((?:[^"\\]|\\.)*)"')
EN_ATTR = re.compile(r'data-en="([^"]*)"')

def english_segments(path, src):
    """yield (line_no, key, text) for English-language text only"""
    if path.endswith('.html'):
        for m in EN_ATTR.finditer(src):
            yield src.count('\n', 0, m.start()) + 1, 'data-en', m.group(1)
        for m in re.finditer(r'content="([^"]*)"', src):
            yield src.count('\n', 0, m.start()) + 1, 'meta', m.group(1)
    elif '/data/lms/' in path:
        for m in EN_JSON.finditer(src):
            yield src.count('\n', 0, m.start()) + 1, m.group(1), m.group(2)
        for m in re.finditer(r'"en":\s*"((?:[^"\\]|\\.)*)"', src):
            yield src.count('\n', 0, m.start()) + 1, 'en', m.group(1)
    else:
        for m in re.finditer(r"P\(\s*'((?:[^'\\]|\\.)*)'|\ben:\s*'((?:[^'\\]|\\.)*)'", src):
            yield src.count('\n', 0, m.start()) + 1, 'en', m.group(1) or m.group(2) or ''

def protected_spans(path, src):
    """Rope paths titled 'Indonesia · …' are intentionally local"""
    spans = []
    if path.endswith('paths.js'):
        for m in re.finditer(r"\{ id: '([^']+)'", src):
            end = src.find("\n      { id: '", m.end()); end = len(src) if end < 0 else end
            if re.search(r"title: P\('Indonesia · ", src[m.start():end]): spans.append((m.start(), end))
    return spans

total = 0
for f in FILES:
    src = open(f, encoding='utf-8').read()
    spans = protected_spans(f, src)
    hits = []
    seen = set()
    for ln, key, text in english_segments(f, src):
        if FRAMING and key not in FRAMING_KEYS: continue
        if (ln, key) in seen: continue
        for m in MARK.finditer(text):
            pos = src.find(text)
            if any(s <= pos < e for s, e in spans): break
            seen.add((ln, key)); hits.append((ln, key, m.group(0), text)); break
    if not hits: continue
    total += len(hits)
    rel = os.path.relpath(f, ROOT)
    print('%4d  %s' % (len(hits), rel))
    if LINES or FRAMING:
        for ln, key, mk, text in hits:
            t = re.sub(r'<[^>]+>', '', text)
            i = max(0, t.lower().find(mk.lower()) - 70)
            print('       L%-6d %-9s …%s…' % (ln, key, t[i:i + 160].replace('\n', ' ')))
print('\n%d English segments still mention Indonesia or local jargon on global-audience surfaces.' % total)
print('Facts attributed to Indonesia ("in Indonesia …", laws, statistics, fictional cases set there) may stay as examples; the rest is editorial work.')

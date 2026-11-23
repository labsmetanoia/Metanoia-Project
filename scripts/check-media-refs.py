#!/usr/bin/env python3
"""
Lesson media must still load after the production build moves it to the media host.

On Cloudflare Pages, scripts/build-site.py (relocate_media) rewrites every reference to
assets/lms/ so it points at MEDIA_BASE, then removes prototype/assets/lms from the output.
A reference it does not reach becomes a missing video or slide on the live site, and nothing
local shows it, because locally the folder is still there. This check fails when:

  1. a shipped file outside the folders the rewrite walks names assets/lms/, or
  2. a script builds a lesson-media path out of pieces ("assets/" + "lms/..."), which the
     rewrite cannot see. Write the path whole: '../../assets/lms/...'.

Run after scripts/build-site.py, so the split lesson files exist. Part of scripts/integrity-check.sh.
"""
import os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROTO = os.path.join(ROOT, 'prototype')
REWRITTEN = (os.path.join('data', 'lms'), 'products')        # the folders relocate_media walks
TEXT = ('.js', '.json', '.html', '.css')
SKIP = (os.path.join('assets', ''), os.path.join('data', 'range', ''))   # the media itself; data with no lesson media
PIECES = re.compile(r"""\+\s*['"]lms/|['"]assets/['"]\s*\+""")

outside, pieces, seen = [], [], 0
for dirpath, dirs, files in os.walk(PROTO):
    rel_dir = os.path.relpath(dirpath, PROTO)
    if any((rel_dir + os.sep).startswith(s) for s in SKIP):
        dirs[:] = []
        continue
    for name in files:
        if not name.endswith(TEXT):
            continue
        rel = os.path.normpath(os.path.join(rel_dir, name))
        try:
            with open(os.path.join(dirpath, name), encoding='utf-8') as fh:
                src = fh.read()
        except (UnicodeDecodeError, OSError):
            continue
        covered = any(rel.startswith(r + os.sep) for r in REWRITTEN) and name.endswith(('.js', '.json', '.html'))
        if 'assets/lms/' in src:
            seen += 1
            if not covered:
                outside.append(rel)
        if name.endswith(('.js', '.html')) and PIECES.search(src):
            pieces.append(rel)

print('── lesson media references ──')
print(f'   {seen} files name lesson media; all must be reached by the production rewrite')
ok = True
if outside:
    ok = False
    print('   ✗ named outside the folders the rewrite walks (add the folder to relocate_media or move the reference):')
    for f in sorted(outside): print('       ', f)
if pieces:
    ok = False
    print("   ✗ a lesson-media path is built from pieces, which the rewrite cannot see (write '../../assets/lms/…' whole):")
    for f in sorted(pieces): print('       ', f)
if not ok:
    print('✗ lesson media check failed')
    sys.exit(1)
print('✓ lesson media check passed')

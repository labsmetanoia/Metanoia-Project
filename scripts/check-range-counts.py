#!/usr/bin/env python3
"""
Company-count drift gate.

The Range database (prototype/data/range/*.js) is the only source of truth
for "N companies". scripts/build-site.py writes the computed totals to
prototype/data/range/stats.js; this check reads them back and fails when any
hand-written page or data file states a different number next to the words
"companies" / "perusahaan" / "employers". Generated output (the Range
directory, Mind Palace pages, search index) is produced from the same totals
and is not scanned.

Run after the build:  python3 scripts/check-range-counts.py
"""
import json
import os
import re
import sys

ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'prototype')
STATS = os.path.join(ROOT, 'data', 'range', 'stats.js')

if not os.path.exists(STATS):
    print('MISSING data/range/stats.js — run python3 scripts/build-site.py first'); sys.exit(1)
stats = json.loads(re.search(r'window\.MT_RANGE_STATS = (\{.*?\});', open(STATS, encoding='utf-8').read()).group(1))
N = stats['companies']

SKIP_DIRS = {'range', 'mind-palace', 'og', 'audit', 'node_modules', 'q', 'lms'}
EXT = ('.html', '.js', '.json')
CONTEXT = re.compile(r'Range|database|basis data|employers|directory|direktori|real companies|perusahaan nyata|own page|halamannya sendiri|explorable|tell us|diceritakan|25 directions|25 arah', re.I)
PAT = re.compile(r'\b(\d{3,4})\s+(?:real\s+|nyata\s+)?(?:companies|company|perusahaan|employers|pemberi kerja)\b', re.I)

fail = 0
checked = 0
for dirpath, dirnames, filenames in os.walk(ROOT):
    dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
    for fn in filenames:
        if not fn.endswith(EXT) or fn in ('search-index.json', 'names.json', 'stats.js', 'companies-db.js'):
            continue
        p = os.path.join(dirpath, fn)
        try:
            s = open(p, encoding='utf-8').read()
        except Exception:
            continue
        for m in PAT.finditer(s):
            # only counts that describe the Range: skip "200 companies with hope", years, cohort sizes
            window = s[max(0, m.start() - 160): m.end() + 160]
            if not CONTEXT.search(window):
                continue
            checked += 1
            n = int(m.group(1))
            if n != N:
                line = s.count('\n', 0, m.start()) + 1
                print(f'COUNT DRIFT {os.path.relpath(p, ROOT)}:{line}: "{m.group(0)}" but the database holds {N} companies')
                fail += 1
print(f'   {checked} count mentions checked against {N} companies ({stats["roles"]} roles, {stats["documented"]} documented processes)')
if fail:
    print(f'✗ range count check FAILED ({fail})'); sys.exit(1)
print('   clean')

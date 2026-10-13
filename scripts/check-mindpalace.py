#!/usr/bin/env python3
"""Mind Palace registry gate: every piece is complete, linked and attributable.

The registry (prototype/data/mindpalace.js) is the single source of truth for
the hub, the static article pages, the RSS feed and the search index, so a
malformed entry breaks four surfaces at once. This check keeps the library
scalable: anyone can add a piece by editing data, and the gate tells them what
is missing before it ships.

Fails on
  · duplicate slugs, unknown topic / format / stage / level / pillar ids
  · missing core frame (title, dek, what, why, act, sources) or empty bilingual text
  · images that do not exist on disk
  · dates that are malformed, in the future, or reviewed before published
  · practice blocks that are incomplete (framework steps, drill prompt and answer)
  · external links that are not https or lack a label and a named publisher
  · reading paths that point at unknown slugs or fall outside three to five pieces
Warns (does not fail) on
  · pieces whose review date is older than 180 days ("review due")

Usage: python3 scripts/check-mindpalace.py
"""
import datetime as dt
import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROTO = os.path.join(ROOT, 'prototype')
PILLARS = {'the-map', 'the-pack', 'the-rope', 'the-route', 'the-compass'}
REVIEW_DAYS = 180


def bil(v):
    return isinstance(v, dict) and str(v.get('en', '')).strip() and str(v.get('id', '')).strip()


def main():
    raw = subprocess.run(['node', os.path.join(ROOT, 'scripts', 'lib', 'export-mindpalace.js')],
                         capture_output=True, text=True, check=True).stdout
    d = json.loads(raw)
    topics = {t['id'] for t in d['topics']}
    formats = set(d['formats'])
    stages = set(d['stages'])
    levels = set(d.get('levels') or {})
    today = dt.date.today()
    errs, due = [], []
    seen = set()

    def err(slug, msg):
        errs.append(f'  {slug}: {msg}')

    for a in d['articles']:
        s = a.get('slug', '?')
        if s in seen:
            err(s, 'duplicate slug')
        seen.add(s)
        if not re.fullmatch(r'[a-z0-9]+(-[a-z0-9]+)*', s):
            err(s, 'slug must be lowercase words joined by hyphens')
        if a.get('topic') not in topics:
            err(s, f'unknown topic {a.get("topic")!r}')
        if a.get('format') not in formats:
            err(s, f'unknown format {a.get("format")!r}')
        if a.get('level') and a['level'] not in levels:
            err(s, f'unknown level {a["level"]!r}')
        for st in a.get('stages') or []:
            if st not in stages:
                err(s, f'unknown stage {st!r}')
        if not a.get('stages'):
            err(s, 'no stages')
        for st in (a.get('means') or {}):
            if st not in stages:
                err(s, f'means for unknown stage {st!r}')
        for k in ('title', 'dek', 'why', 'author'):
            if not bil(a.get(k)):
                err(s, f'{k} missing or not bilingual')
        for k in ('what', 'act'):
            if not a.get(k) or not all(bil(x) for x in a[k]):
                err(s, f'{k} missing or not bilingual')
        if not a.get('sources'):
            err(s, 'no sources: name a source, or say plainly that the piece is editorial judgement')
        for src in a.get('sources') or []:
            if src.get('url'):
                if not src['url'].startswith('https://') or not src.get('label'):
                    err(s, f'source link needs https and a label: {src["url"]}')
            elif not bil(src.get('note')):
                err(s, 'source note missing or not bilingual')
        img = a.get('img', '')
        if not img or not os.path.exists(os.path.join(PROTO, img.replace('../', ''))):
            err(s, f'image not found: {img!r}')
        for k in ('date', 'reviewed'):
            v = a.get(k, '')
            try:
                day = dt.date.fromisoformat(v)
                if day > today:
                    err(s, f'{k} {v} is in the future')
            except ValueError:
                err(s, f'{k} {v!r} is not YYYY-MM-DD')
        try:
            if dt.date.fromisoformat(a['reviewed']) < dt.date.fromisoformat(a['date']):
                err(s, 'reviewed before published')
            if (today - dt.date.fromisoformat(a['reviewed'])).days > REVIEW_DAYS:
                due.append(f'  {s} (reviewed {a["reviewed"]})')
        except (KeyError, ValueError):
            pass
        for t in a.get('tools') or []:
            if t.get('pillar') not in PILLARS or not bil(t.get('why')):
                err(s, f'tool link invalid: {t.get("pillar")!r}')
        fw = a.get('framework')
        if fw and (not bil(fw.get('name')) or not 2 <= len(fw.get('steps') or []) <= 7
                   or not all(bil(x.get('h')) and bil(x.get('d')) for x in fw['steps'])):
            err(s, 'framework needs a bilingual name and 2 to 7 bilingual steps')
        ex = a.get('example')
        if ex and (not bil(ex.get('title')) or not ex.get('paras') or not all(bil(p) for p in ex['paras'])):
            err(s, 'worked example needs a title and bilingual paragraphs')
        dr = a.get('drill')
        if dr and (not bil(dr.get('title')) or not bil(dr.get('prompt')) or not dr.get('answer')
                   or not all(bil(x) for x in dr['answer']) or not isinstance(dr.get('minutes', 10), int)):
            err(s, 'drill needs a title, prompt, model answer and whole-number minutes')
        for q in a.get('reflect') or []:
            if not bil(q):
                err(s, 'reflection prompt not bilingual')
        for f in a.get('further') or []:
            if not str(f.get('url', '')).startswith('https://') or not f.get('label') or not f.get('by'):
                err(s, f'further reading needs https, a label and a named publisher: {f.get("url")}')
        if a.get('further') and not any(src.get('note') for src in a.get('sources') or []):
            err(s, 'external further reading requires a source note saying how it was used')

    for p in d.get('paths') or []:
        reads = p.get('reads') or []
        if not 3 <= len(reads) <= 5:
            errs.append(f'  path {p.get("id")}: {len(reads)} pieces (want 3 to 5)')
        for r in reads:
            if r not in seen:
                errs.append(f'  path {p.get("id")}: unknown slug {r!r}')
        if not bil(p.get('title')) or not bil(p.get('sub')):
            errs.append(f'  path {p.get("id")}: title and sub must be bilingual')

    n = len(d['articles'])
    drills = sum(1 for a in d['articles'] if a.get('drill'))
    print(f'   {n} pieces · {len(topics)} topics · {len(d.get("paths") or [])} reading paths · {drills} drills')
    if due:
        print(f'   review due (> {REVIEW_DAYS} days):')
        print('\n'.join(due))
    if errs:
        print('\n'.join(errs))
        print(f'✗ Mind Palace registry check FAILED ({len(errs)})')
        return 1
    print('   clean')
    return 0


if __name__ == '__main__':
    sys.exit(main())

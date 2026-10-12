#!/usr/bin/env python3
"""Editorial punctuation gate: no em dashes in user-facing copy.

House rule (docs/16-editorial-punctuation.md): the em dash (—) is not used in
headings, body text, descriptions, articles, learning material or any other
user-facing string. A semicolon joins two clauses; a comma or full stop is used
where it keeps the sentence clearer; a colon introduces a definition, a label
or a subtitle; the site's page titles use the middle dot (·).

What is scanned
  prototype/**/*.html, *.js, *.json  (hand-authored sources; generated trees
  such as mind-palace/, products/the-map/range/ and data/range/q/ are built
  from those sources and are checked through them)
  scripts/lib/shell.py               (the shared page shell)

What is ignored
  comment lines (// … , /* … */, * …, <!-- … -->, # …), lines inside <style>
  blocks, and regular-expression literals whose character class lists the
  dash, since those are code rather than copy.

Exit 1 and list every offending line when any em dash remains.
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROTO = os.path.join(ROOT, 'prototype')

SKIP_DIRS = ('/assets/', '/mind-palace/', '/products/the-map/range/', '/data/range/q/', '/node_modules/')
SKIP_FILES = ('/data/search-index.json', '/data/range/stats.js', '/sitemap.xml')
COMMENT = re.compile(r'^\s*(//|/\*|\*|<!--|#)')
REGEX_CLASS = re.compile(r'/(?:[^/\\\n]|\\.)*\[[^\]\n]*—[^\]\n]*\](?:[^/\\\n]|\\.)*/[gimsuy]*')
REGEX_ALT = re.compile(r'/[^/\n]*—[^/\n]*/[gimsuy]*\)')   # .split(/ — | · /)
TRAIL_COMMENT = re.compile(r'(/\*.*?\*/\s*$|//[^\'"]*$)')
PUNCT_SET = re.compile(r'strip\([\'"][^\'"]*—[^\'"]*[\'"]\)')   # a punctuation set handed to strip()


def files():
    for base, dirs, names in os.walk(PROTO):
        for n in sorted(names):
            p = os.path.join(base, n)
            rel = '/' + os.path.relpath(p, PROTO).replace(os.sep, '/')
            if any(s in rel + '/' for s in SKIP_DIRS) or rel in SKIP_FILES:
                continue
            if n.endswith(('.html', '.js', '.json')):
                yield p
    yield os.path.join(ROOT, 'scripts', 'lib', 'shell.py')


def offenders(path):
    kind = 'html' if path.endswith('.html') else 'code'
    in_style = in_block = False
    out = []
    with open(path, encoding='utf-8') as fh:
        for i, ln in enumerate(fh, 1):
            s = ln.strip()
            if kind == 'html':
                if '<style' in ln:
                    in_style = True
                if '</style' in ln:
                    in_style = False
                    continue
            if '/*' in s and '*/' not in s:
                in_block = True
            if in_block:
                if '*/' in s:
                    in_block = False
                continue
            if '—' not in ln:
                continue
            if in_style or COMMENT.match(ln) or REGEX_CLASS.search(ln) or REGEX_ALT.search(ln):
                continue
            code = TRAIL_COMMENT.sub('', ln)          # a trailing /* … */ or // … on a code line
            if '—' not in code or PUNCT_SET.search(code):
                continue
            out.append((i, s[:140]))
    return out


def main():
    total = 0
    for p in files():
        bad = offenders(p)
        if bad:
            total += len(bad)
            rel = os.path.relpath(p, ROOT)
            for i, s in bad:
                print(f'  {rel}:{i}: {s}')
    if total:
        print(f'✗ punctuation check FAILED: {total} em dash(es) in user-facing copy')
        return 1
    print('   clean')
    return 0


if __name__ == '__main__':
    sys.exit(main())

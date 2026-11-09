#!/usr/bin/env python3
"""Size budgets (integrity check step 14; Tier 1 stage 6).

Reads scripts/budgets.json and fails when a page or file grows past its limit:

  pages[<html path>].html_kb    size of the document itself
  pages[<html path>].script_kb  sum of every local <script src> the page loads (generated files included,
                                so this runs after scripts/build-site.py)
  pages[<html path>].style_kb   sum of every local stylesheet
  files[<path>]                 size of one file

Limits are raw bytes in KB (1024), measured on the built tree. Raise a limit deliberately, in the same
change that needs it, with a line in the commit message saying why; never to make a red check green.
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BUDGETS = os.path.join(ROOT, 'scripts', 'budgets.json')
KB = 1024


def size_kb(path):
    return os.path.getsize(path) / KB


def local_refs(html_path, attr_re):
    with open(html_path, encoding='utf-8') as fh:
        src = fh.read()
    base = os.path.dirname(html_path)
    out = []
    for m in attr_re.finditer(src):
        ref = m.group(1).split('?')[0].split('#')[0]
        if not ref or re.match(r'^(https?:)?//', ref) or ref.startswith('data:'):
            continue
        path = os.path.normpath(os.path.join(ROOT, 'prototype', ref.lstrip('/')) if ref.startswith('/') else os.path.join(base, ref))
        out.append((ref, path))
    return out


SCRIPT_RE = re.compile(r'<script[^>]*\ssrc="([^"]+)"', re.I)
STYLE_RE = re.compile(r'<link[^>]*rel="stylesheet"[^>]*\shref="([^"]+)"', re.I)


def main():
    with open(BUDGETS, encoding='utf-8') as fh:
        budgets = json.load(fh)
    failed = []
    rows = []
    for rel, lim in sorted(budgets.get('pages', {}).items()):
        path = os.path.join(ROOT, rel)
        if not os.path.exists(path):
            failed.append(f'{rel}: page missing')
            continue
        html = size_kb(path)
        scripts = local_refs(path, SCRIPT_RE)
        styles = local_refs(path, STYLE_RE)
        missing = [ref for ref, p in scripts + styles if not os.path.exists(p)]
        script = sum(size_kb(p) for _, p in scripts if os.path.exists(p))
        style = sum(size_kb(p) for _, p in styles if os.path.exists(p))
        rows.append((rel, html, script, style, lim))
        for key, val in (('html_kb', html), ('script_kb', script), ('style_kb', style)):
            if key in lim and val > lim[key]:
                failed.append(f'{rel}: {key} {val:.0f} KB over the {lim[key]} KB budget')
        for ref in missing:
            failed.append(f'{rel}: references a missing file {ref}')
    for rel, lim in sorted(budgets.get('files', {}).items()):
        path = os.path.join(ROOT, rel)
        if not os.path.exists(path):
            failed.append(f'{rel}: file missing')
            continue
        val = size_kb(path)
        if val > lim:
            failed.append(f'{rel}: {val:.0f} KB over the {lim} KB budget')
    for rel, html, script, style, lim in rows:
        print(f'   {rel}: html {html:.0f}/{lim.get("html_kb", "-")} KB · scripts {script:.0f}/{lim.get("script_kb", "-")} KB · styles {style:.0f}/{lim.get("style_kb", "-")} KB')
    if failed:
        for f in failed:
            print('   ✗ ' + f)
        return 1
    print('   clean')
    return 0


if __name__ == '__main__':
    sys.exit(main())

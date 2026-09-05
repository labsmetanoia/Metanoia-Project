#!/usr/bin/env python3
"""
Asset licence gate (IP remediation finding F-03).

Every image, video and vector file shipped in prototype/assets must have a row
in assets/asset-manifest.json recording where it came from and under what
licence — plus a model release where a person is identifiable.

Two modes:
  (default)  drift check — fails if an asset is missing from the manifest, or
             a manifest row points at a file that no longer exists. Reports how
             many rows are still undocumented, without failing.
  --strict   launch gate — additionally fails while any row is undocumented.
             Turn this on in CI before public launch.

Usage:
  python3 scripts/check-asset-licences.py [--strict]
"""
import json
import os
import sys

ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'prototype')
MANIFEST = os.path.join(ROOT, 'assets', 'asset-manifest.json')
EXT = ('.jpg', '.jpeg', '.png', '.mp4', '.webm', '.svg', '.vtt')

REQUIRED = ('source', 'licence', 'licence_proof')


def on_disk():
    found = set()
    for dirpath, _, files in os.walk(os.path.join(ROOT, 'assets')):
        for fn in files:
            if fn.lower().endswith(EXT):
                found.add(os.path.relpath(os.path.join(dirpath, fn), ROOT))
    return found


def main():
    strict = '--strict' in sys.argv
    with open(MANIFEST, encoding='utf-8') as f:
        rows = json.load(f)['assets']

    listed = {r['file']: r for r in rows}
    disk = on_disk()

    missing = sorted(disk - set(listed))          # shipped but undeclared
    stale = sorted(set(listed) - disk)            # declared but deleted
    undocumented = sorted(r['file'] for r in rows if r['status'] != 'documented')
    incomplete = sorted(r['file'] for r in rows if r['status'] == 'documented'
                        and not all(str(r.get(k, '')).strip() for k in REQUIRED))
    needs_release = sorted(r['file'] for r in rows if r['people'] in ('likely', 'unknown')
                           and not str(r.get('model_release', '')).strip())

    print('── asset licence check ──')
    print('   %d assets on disk, %d rows in manifest' % (len(disk), len(rows)))
    print('   documented: %d · undocumented: %d' % (len(rows) - len(undocumented), len(undocumented)))
    print('   awaiting a model release: %d' % len(needs_release))

    fail = False
    for label, items in (('not listed in the manifest', missing),
                         ('listed but missing from disk', stale),
                         ('marked documented but missing %s' % ', '.join(REQUIRED), incomplete)):
        if items:
            fail = True
            print('\n   ✗ %d %s:' % (len(items), label))
            for i in items[:20]:
                print('       ', i)
            if len(items) > 20:
                print('        … and %d more' % (len(items) - 20))

    if strict and undocumented:
        fail = True
        print('\n   ✗ %d assets still undocumented (strict mode):' % len(undocumented))
        for i in undocumented[:20]:
            print('       ', i)
        if len(undocumented) > 20:
            print('        … and %d more' % (len(undocumented) - 20))

    if fail:
        print('\n✗ asset licence check failed')
        return 1
    print('\n✓ asset licence check passed'
          + ('' if strict else ' (run with --strict as the launch gate)'))
    return 0


if __name__ == '__main__':
    sys.exit(main())

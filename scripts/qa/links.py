#!/usr/bin/env python3
"""Static link audit: every href/src/srcset/poster/data-src in every HTML file under prototype/ (generated Range
company pages sampled) is resolved GitHub-Pages style and checked on disk. Also checks url(...) in CSS files."""
import os, re, sys, html, collections
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'prototype')
SKIP_DIRS = ('node_modules',)
ATTR = re.compile(r'\b(?:href|src|poster|data-src|data-bg|data-video|data-poster|content)=["\']([^"\']+)["\']', re.I)
SRCSET = re.compile(r'\bsrcset=["\']([^"\']+)["\']', re.I)
CSSURL = re.compile(r'url\(\s*["\']?([^"\')]+)["\']?\s*\)')
def exists(rel):
    p = os.path.join(ROOT, rel.lstrip('/'))
    if os.path.isdir(p): return os.path.exists(os.path.join(p, 'index.html'))
    if os.path.exists(p): return True
    if os.path.exists(p + '.html'): return True
    return False
def resolve(base_dir, u):
    u = html.unescape(u).strip()
    if not u or u.startswith(('#', 'mailto:', 'tel:', 'javascript:', 'data:', 'blob:')): return None
    if re.match(r'^[a-z]+:', u): return ('ext', u)
    if u.startswith('//'): return ('ext', u)
    u = u.split('#')[0].split('?')[0]
    if not u: return None
    if u.startswith('/'): rel = u
    else: rel = '/' + os.path.normpath(os.path.join(base_dir, u)).lstrip('/')
    return ('int', rel)
files = []
for d, dn, fn in os.walk(ROOT):
    dn[:] = [x for x in dn if x not in SKIP_DIRS]
    for f in fn:
        if f.endswith('.html') or f.endswith('.css'):
            files.append(os.path.join(d, f))
# sample the generated range company pages (first 40 + every 40th)
rng = sorted(f for f in files if '/products/the-map/range/' in f and f.count('/') > ROOT.count('/') + 4)
other = [f for f in files if f not in set(rng)]
files = other + rng[:40] + rng[40::40]
bad = collections.defaultdict(list)
ext = set()
n = 0
for f in files:
    rel_dir = '/' + os.path.relpath(os.path.dirname(f), ROOT).replace('\\', '/').strip('.')
    rel_dir = rel_dir if rel_dir != '/.' else '/'
    txt = open(f, encoding='utf-8', errors='replace').read()
    refs = []
    if f.endswith('.css'):
        refs = CSSURL.findall(txt)
    else:
        for m in ATTR.finditer(txt):
            v = m.group(1)
            if m.group(0).lower().startswith('content=') and not (v.startswith('/') or v.startswith('http') or v.startswith('assets') or v.startswith('../')): continue
            refs.append(v)
        for m in SRCSET.finditer(txt):
            refs += [x.strip().split(' ')[0] for x in m.group(1).split(',')]
    for r in refs:
        x = resolve(rel_dir, r)
        if not x: continue
        n += 1
        if x[0] == 'ext': ext.add(x[1]); continue
        if not exists(x[1]): bad[x[1]].append(os.path.relpath(f, ROOT))
print('files', len(files), 'refs', n, 'external', len(ext))
for k in sorted(bad):
    print('MISSING', k, '←', len(bad[k]), 'files:', ', '.join(sorted(set(bad[k]))[:4]))
print('missing targets', len(bad))

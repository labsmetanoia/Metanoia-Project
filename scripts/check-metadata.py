#!/usr/bin/env python3
"""
Metadata gate for every public route in prototype/data/routes.json.

Each page must carry: one <title> (unique across routes), a meta description
of 140-155 characters, a canonical equal to its extensionless URL, og:title,
og:description, og:url (no double slash), og:image, og:type, twitter:card,
and hreflang alternates for en and id. Fails the build otherwise.
"""
import json
import os
import re
import sys

ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'prototype')
SITE = 'https://metanoialabs.net'

with open(os.path.join(ROOT, 'data', 'routes.json'), encoding='utf-8') as f:
    routes = json.load(f)['routes']

fail = 0
titles = {}
for r in routes:
    rel = r['file'].replace('prototype/', '', 1)
    p = os.path.join(ROOT, rel)
    if not os.path.exists(p):
        print(f'MISSING FILE {rel}'); fail += 1; continue
    s = open(p, encoding='utf-8').read()
    head = s[:s.find('</head>')] if '</head>' in s else s[:20000]
    url = SITE + r['path']
    problems = []
    t = re.findall(r'<title>([^<]*)</title>', head)
    if len(t) != 1:
        problems.append(f'{len(t)} <title> tags')
    elif t[0] in titles:
        problems.append(f'title duplicates {titles[t[0]]}')
    else:
        titles[t[0]] = rel
    d = re.search(r'<meta name="description" content="([^"]*)"', head)
    if not d:
        problems.append('no meta description')
    elif not (140 <= len(d.group(1)) <= 155):
        problems.append(f'description {len(d.group(1))} chars (want 140-155)')
    c = re.search(r'<link rel="canonical" href="([^"]*)"', head)
    if not c:
        problems.append('no canonical')
    elif c.group(1) != url:
        problems.append(f'canonical {c.group(1)} != {url}')
    for prop in ['og:title', 'og:description', 'og:url', 'og:image', 'og:type']:
        m = re.search(r'<meta property="' + re.escape(prop) + r'" content="([^"]*)"', head)
        if not m:
            problems.append(f'no {prop}')
        elif prop == 'og:url' and (m.group(1) != url or '//' in m.group(1).replace('https://', '')):
            problems.append(f'og:url {m.group(1)}')
    if not re.search(r'<meta name="twitter:card"', head):
        problems.append('no twitter:card')
    for hl in ['en', 'id']:
        if not re.search(r'hreflang="' + hl + '"', head):
            problems.append(f'no hreflang {hl}')
    if problems:
        fail += 1
        print(f'{rel}: ' + '; '.join(problems))
print(f'   {len(routes)} routes checked')
if fail:
    print(f'✗ metadata check FAILED ({fail})'); sys.exit(1)
print('   clean')

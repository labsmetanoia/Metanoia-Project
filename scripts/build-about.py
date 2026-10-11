#!/usr/bin/env python3
"""The About page (prototype/pages/about.html) is hand-authored.

Since Feedback AW the page is a full source page — the brand narrative
("A platform that grows with you": the laboratory, our story, the ecosystem,
our commitment) built on the same nav, sheet and footer frame as the other
audience pages. It is edited directly, like pages/mentors.html, and is not
generated. Its route in data/routes.json is live (sitemap, search index and
the metadata gate all cover it).

This script therefore does nothing by default. `--placeholder` rewrites the
old "This trail is still being mapped" holding page (noindex); if you ever
use it, also set "exclude": true on the route again.
"""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, 'lib'))
out = os.path.join(os.path.dirname(HERE), 'prototype', 'pages', 'about.html')

if '--placeholder' not in sys.argv:
    print('about.html is hand-authored at', out, '— nothing to do (use --placeholder to write the holding page).')
    sys.exit(0)

import shell
from shell import bi
body = (
    '<div style="min-height:52vh;display:flex;flex-direction:column;justify-content:center;max-width:60ch">'
    '<p class="kicker">' + bi('About Us', 'Tentang Kami') + '</p>'
    '<h1>' + bi('This trail is still being mapped.', 'Jalur ini masih dipetakan.') + '</h1>'
    '<p class="sub">' + bi('The full About Us page is on its way. Until then, the pricing page says plainly where the platform stands today and what is free.',
                            'Halaman Tentang Kami selengkapnya segera hadir. Sementara itu, halaman harga menjelaskan dengan gamblang di mana posisi platform hari ini dan apa yang gratis.') + '</p>'
    '<p class="row" style="margin-top:26px;gap:12px"><a class="btn primary" href="/">' + bi('← Back to Basecamp', '← Kembali ke Basecamp') + '</a>'
    '<a class="btn" href="/pricing">' + bi('What is live today →', 'Apa yang sudah tersedia →') + '</a></p></div>'
)
html = shell.render({
    'title': 'About Us — Metanoia Labs',
    'desc': 'The Metanoia Labs About Us page is still being written. The pricing page says where the platform stands today, what is live, and what is free, always.',
    'path': '/pages/about', 'body': body,
    'crumbs': [('Home', 'Beranda', '/'), ('About Us', 'Tentang Kami', None)],
    'extra_head': '<meta name="robots" content="noindex, nofollow">',
})
with open(out, 'w', encoding='utf-8') as f:
    f.write(html)
print('wrote', out, '(placeholder) — remember to set "exclude": true on the route')

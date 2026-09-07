#!/usr/bin/env python3
"""Write prototype/pages/about.html.

The About page content lives in scripts/lib/about.py and is still under
development, so by default this writes the temporary placeholder (noindex,
excluded from the sitemap and search via data/routes.json). Run with --full
once the content is finalised to publish the real page.
"""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, 'lib'))
import shell
from shell import bi
out = os.path.join(os.path.dirname(HERE), 'prototype', 'pages', 'about.html')

if '--full' in sys.argv:
    import about
    html = about.render()
else:
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
print('wrote', out, '(full)' if '--full' in sys.argv else '(placeholder)')

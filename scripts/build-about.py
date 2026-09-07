#!/usr/bin/env python3
"""Write prototype/pages/about.html from scripts/lib/about.py (content) and
scripts/lib/shell.py (shared page shell). The output is a committed source page."""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, 'lib'))
import about
out = os.path.join(os.path.dirname(HERE), 'prototype', 'pages', 'about.html')
with open(out, 'w', encoding='utf-8') as f:
    f.write(about.render())
print('wrote', out)

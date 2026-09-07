#!/usr/bin/env bash
# Integrity gates from the MVP maturation brief — failing any check blocks merge.
#  1. Zero retired product names (transition notes and the registry excepted)
#  2. Zero asset filenames containing spaces or uppercase characters
#  3. Zero href="#" in production HTML
#  5. Zero retired product names / commercial terms in pages, products, components, i18n
#  6. Commercial copy on every page matches data/commercial.js
#  7. Build outputs exist (the site is built before the gates run)
set -u
cd "$(dirname "$0")/.."
FAIL=0

echo "── 1. retired product names"
# Project codenames (Aladdin/Maverick/Nexus/Horizon) are sanctioned secondary
# identifiers as of the restoration round — only misspellings and retired
# sub-product names remain banned.
RETIRED=(
  'Eksplorasi Puncak Tujuan' 'The Lookout'
  'Project Aladin' 'Aladin Direction Edition'
  'Understanding the Professional World' 'The Application Engine'
  'CV &amp; Resume Studio' 'ATS Screening Mastery' 'Group Discussion Simulation'
  'Psychometric Test Preparation'
  'Case Interview Preparation'
  'Scholarship Preparation' 'The Horizon'
  'Project Compass' 'Personalized Progress Tracker'
)
for name in "${RETIRED[@]}"; do
  # transition notes ("Previously known as …" / "Sebelumnya dikenal sebagai …") are the sole exception
  HITS=$(grep -rn "$name" prototype --include='*.html' 2>/dev/null \
         | grep -v 'Previously known as' | grep -v 'Sebelumnya dikenal sebagai' || true)
  if [ -n "$HITS" ]; then
    echo "RETIRED NAME PRESENT: $name"
    echo "$HITS" | head -5
    FAIL=1
  fi
done
[ $FAIL -eq 0 ] && echo "   clean"

echo "── 2. asset filename hygiene"
BAD=$(find prototype/assets -type f \( -name '* *' -o -name '*[A-Z]*' \) ! -name '*.md' 2>/dev/null || true)
if [ -n "$BAD" ]; then
  echo "NON-HYGIENIC FILENAMES:"; echo "$BAD"; FAIL=1
else
  echo "   clean"
fi

echo '── 3. href="#" in production HTML'
DEAD=$(grep -rn 'href="#"' prototype --include='*.html' 2>/dev/null || true)
if [ -n "$DEAD" ]; then
  echo 'DEAD LINKS:'; echo "$DEAD" | head -10; FAIL=1
else
  echo "   clean"
fi

echo "── 4. legacy project codenames (IP finding F-01/F-06)"
CODE=$(grep -rn "Project Aladdin\|Project Maverick\|Project Nexus\|Project Horizon" prototype \
  --include='*.html' --include='*.js' 2>/dev/null | grep -v "^prototype/pages/products/" || true)
if [ -n "$CODE" ]; then
  echo "RETIRED CODENAMES STILL PRESENT:"; echo "$CODE" | head -10; FAIL=1
else
  echo "   clean"
fi

echo "── 5. retired product names and commercial terms (pages, products, components, i18n)"
# Case-sensitive product-name forms. Lowercase legacy storage keys (maverick_progress …)
# are identifiers that keep members' saved progress readable and are not product names.
BANNED=('Project Aladin' 'Project Aladdin' 'Aladin' 'Aladdin' 'Project Maverick' 'Maverick'
        'Project Nexus' 'Nexus' 'Project Horizon' 'Horizon' 'The Climb' 'The Lookout'
        'Eksplorasi Puncak Tujuan' 'Premium Trail' 'Learning Access' 'Metanoia Premium')
# Allowed: ordinary English uses that are not product names, and transition notes.
ALLOW='Financial Planning Horizon|Previously known as|Sebelumnya dikenal sebagai|time horizon|planning horizon|horizon tahunan|trajectory horizon|annual trajectory'
SCAN=""
for d in prototype/pages prototype/products prototype/components prototype/i18n; do [ -d "$d" ] && SCAN="$SCAN $d"; done
for name in "${BANNED[@]}"; do
  HITS=$(grep -rnw --include='*.html' --include='*.js' --include='*.json' "$name" $SCAN 2>/dev/null \
         | grep -v "^prototype/pages/products/" | grep -v -E "$ALLOW" || true)
  if [ -n "$HITS" ]; then
    echo "BANNED NAME PRESENT: $name"
    echo "$HITS" | head -5
    FAIL=1
  fi
done
[ $FAIL -eq 0 ] && echo "   clean"

echo "── 6. commercial model: every page renders /pricing's copy"
if ! node scripts/check-commercial.js; then FAIL=1; fi

echo "── 7. build outputs present (python3 scripts/build-site.py)"
for f in prototype/sitemap.xml prototype/products/the-map/range/index.html prototype/mind-palace/feed.xml prototype/data/search-index.json prototype/demo.html; do
  if [ ! -f "$f" ]; then echo "MISSING BUILD OUTPUT: $f"; FAIL=1; fi
done
[ $FAIL -eq 0 ] && echo "   clean"

echo "── 8. metadata on every public route"
if ! python3 scripts/check-metadata.py; then FAIL=1; fi

echo "── 9. asset licence manifest"
if python3 scripts/check-asset-licences.py > /tmp/asset-lic.txt 2>&1; then
  sed -n '2,4p' /tmp/asset-lic.txt
else
  cat /tmp/asset-lic.txt; FAIL=1
fi

if [ $FAIL -ne 0 ]; then
  echo "✗ integrity check FAILED"; exit 1
fi
echo "✓ integrity check passed"

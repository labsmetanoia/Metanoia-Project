#!/usr/bin/env bash
# Integrity gates from the MVP maturation brief — failing any check blocks merge.
#  1. Zero retired product names (transition notes and the registry excepted)
#  2. Zero asset filenames containing spaces or uppercase characters
#  3. Zero href="#" in production HTML
set -u
cd "$(dirname "$0")/.."
FAIL=0

echo "── 1. retired product names"
# Project codenames (Aladdin/Maverick/Nexus/Horizon) are sanctioned secondary
# identifiers as of the restoration round — only misspellings and retired
# sub-product names remain banned.
RETIRED=(
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
BAD=$(find prototype/assets -type f \( -name '* *' -o -name '*[A-Z]*' \) ! -name 'README.md' 2>/dev/null || true)
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

if [ $FAIL -ne 0 ]; then
  echo "✗ integrity check FAILED"; exit 1
fi
echo "✓ integrity check passed"

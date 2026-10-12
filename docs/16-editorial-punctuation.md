# 16 · Editorial punctuation

House rule for every user-facing string on the platform: headings, body text,
descriptions, articles, learning material, interface labels, metadata and feeds,
in both English and Bahasa Indonesia.

## The rule

The em dash (—) is not used in user-facing copy.

| Where the dash used to sit | Replace with | Example |
|---|---|---|
| Between two independent clauses | semicolon `;` | "Managers do not announce the experiment; most new hires optimise for the wrong thing." |
| Before a short aside, a conjunction or a tail of fewer than five words | comma `,` | "Keep a Jakarta-based mentor, regardless of where you sit." |
| Before a long second thought that reads as its own sentence | full stop `.` | "The report is public and free. Almost nobody reads it." |
| After a term, label, bold lead-in, or short heading | colon `:` | "<b>Promoted internally</b>: they understand how the place works." / "The one-page memo: write the decision first" |
| Between the parts of a page title | middle dot `·` | `The Rope · Metanoia Labs`, `Mind Palace · Metanoia Labs` |
| Between two numbers (a range) | en dash `–` | "3–5 years", "140–155 characters" |
| Inside a compound word | hyphen `-` | "take-home", "ready-to-send" |

A parenthetical pair ("… — like this — …") becomes a pair of commas, or
parentheses when the aside is a label or an example.

The colon and the middle dot are the two deliberate exceptions to "semicolon,
comma or full stop": a colon introduces a definition, a list or a subtitle, and
the middle dot is the site's existing separator in titles and metadata.

## Where it is enforced

- `scripts/check-punctuation.py` scans every hand-authored `.html`, `.js` and
  `.json` under `prototype/` (plus the shared page shell in
  `scripts/lib/shell.py`) and fails when an em dash appears outside a code
  comment, a `<style>` block or a regular-expression literal. Generated trees
  (`mind-palace/`, `products/the-map/range/`, `data/range/q/`, the search index)
  are built from those sources and are therefore covered through them.
- `scripts/integrity-check.sh` runs it as section 11, so CI blocks a regression.
- `scripts/lib/dedash.py` is the rule-based rewriter used for the October 2026
  sweep (`--check FILES`, `--apply FILES`, `--demo "text"`). It decides between
  semicolon, comma, full stop and colon from the words around each dash, and is
  the tool to run on any imported copy before it lands in the repository.

## Writing new copy

Write the sentence without the dash from the start. If two thoughts need
joining, a semicolon keeps them in one sentence; if the second thought is short,
a comma is enough; if it is long, give it its own sentence. Code comments are
not user-facing and may keep whatever punctuation makes the comment clearest.

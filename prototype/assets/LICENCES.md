# Asset licences

Every image, video and vector file in this directory must have a documented
source and licence before Metanoia Labs launches publicly. This exists because
the September 2026 IP screening found media shipping with no provenance record
(finding F-03) — the largest single unknown in the platform's IP posture.

## How it works

`asset-manifest.json` holds one row per asset:

| field | meaning |
|---|---|
| `file` | path relative to `prototype/` |
| `category` | `photo`, `video`, `graphic`, or `own-artwork` |
| `people` | `likely` / `unlikely` / `unknown` / `no` — whether an identifiable person appears |
| `source` | where the file came from (stock library + item URL, photographer, generator, or "created in-repo") |
| `licence` | the specific licence (e.g. "Pexels Licence", "Artgrid Enterprise", "Owned", "Commissioned — full assignment") |
| `licence_proof` | link or file reference to the receipt, licence certificate, or written assignment |
| `model_release` | reference to the signed release, or `n/a` when no person is identifiable |
| `status` | `documented` once source + licence + proof are filled in; otherwise `undocumented` |
| `notes` | anything a reviewer needs to know |

`scripts/check-asset-licences.py` enforces it:

```bash
python3 scripts/check-asset-licences.py           # drift check — runs in CI today
python3 scripts/check-asset-licences.py --strict  # launch gate — fails while anything is undocumented
```

The drift check runs as step 5 of `scripts/integrity-check.sh`, so an asset can
never be added to the repository without also being declared here. Switch CI to
`--strict` once the manifest is complete; that is the gate that should block
public launch.

## Filling it in

1. **Find the receipt.** For stock, the library's download history has the item
   URL and licence type — paste both. For commissioned work, reference the
   signed assignment. For anything AI-generated, record the generator and the
   terms under which its outputs may be used commercially.
2. **Check for people.** Rows flagged `likely` or `unknown` need a signed model
   release before commercial use, in Indonesia as elsewhere. Where the licence
   covers editorial use only, the asset cannot be used in marketing.
3. **If it cannot be documented, replace it.** An asset whose provenance nobody
   can prove is a liability that grows with the audience. Replacement candidates
   should come from a library with a clear commercial licence and be logged here
   at the moment they are added.

## Priority order

1. Anything with an identifiable person (37 rows currently await a release).
2. Hero videos and full-bleed photography — the most prominent, most copied.
3. Section and card imagery.
4. Icons and vectors authored in-repo — already documented as owned.

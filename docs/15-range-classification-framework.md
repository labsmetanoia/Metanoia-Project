# 15 · The Range — classification framework

How every company in The Range (`prototype/data/range/companies-db.js`, plus the twenty sourced companies in `graph.js`/`opportunities.js`) is filed, and the rules that keep it consistent. Audit item 8 (Adhi Karya filed as industrial/manufacturing, Agung Podomoro Land under Energy & Industrials) was a symptom of two sector keys mapping to the wrong industry; the fix is the framework below, not two row edits.

## 1. Three levels

| Level | Where | Purpose |
|---|---|---|
| **Industry** (11) | `graph.js` → `industries` | What visitors browse and filter by; one directory per industry per geography; one Map Module 6 track where one exists |
| **Sector** (47 keys) | `companies-db.js` → `SECT` | Groups companies that hire the same way: functions open to graduates (`fns`), the typical hiring process (`proc`), and the noun used in the auto-built description |
| **Company** (768 rows) | `companies-db.js` → `ROWS` | `[name, sector, country, logo domain, BUMN?]` — a row carries no claim beyond sector and headquarters |

A company's industry is derived from its sector (`SECT[sector].ind`). Change a sector's industry and every company in it moves; never file an individual row against an industry directly.

## 2. Industries and the sectors inside them

| Industry id | Name | Sectors |
|---|---|---|
| `tech-ecommerce` | Technology & E-commerce | tech, techm, itsvc, tech-id |
| `financial-services` | Financial Services | bank, bank-id, ib, am, fintech, fin-id, ins, multifin, crypto |
| `fmcg-consumer` | FMCG & Consumer Goods | fmcg, fmcg-id, retail, retail-id |
| `professional-services` | Consulting & Professional Services | consult, psdata, hr, audit, law, devorg |
| `energy-industrials` | Energy & Industrials | energy, energy-id, mining, ind, conglom, logi, logi-id, agri |
| `property-construction` | Property, Real Estate & Construction | property, constr |
| `healthcare-pharma` | Healthcare & Pharma | pharma, pharma-id, medtech, hospital |
| `telecom` | Telecommunications | telco, telco-id |
| `media-gaming` | Media, Gaming & Entertainment | media, gaming, agency |
| `travel-hospitality` | Travel & Hospitality | hotel, airline, ota |
| `education` | Education | edu, edu-id |

**Energy & Industrials** is deliberately broad: energy, mining, manufacturing, logistics, agribusiness and the diversified conglomerates that run heavy operations. What unites them is how they hire (engineering and trainee intakes, site postings, BUMN joint recruitment) and what graduates do there (operations, engineering, finance). Property developers and contractors do not share that profile — their work is project- and launch-driven, their commercial side pays on commission, their engineers are civil and MEP — so they are their own industry.

## 3. Filing rules

1. **File by what the company is, not by who owns it.** Jasa Marga is a toll-road builder and operator (`constr`), not an industrial group, whatever its shareholder.
2. **State ownership is a flag, not a sector.** The fifth column marks BUMN; the sector still describes the business. BUMN status changes the typical hiring process note, not the industry.
3. **A conglomerate stays `conglom`** when no single business dominates (CT Corp, Lippo Group, Barito Pacific). When one does, file under it (Sinar Mas Land → `property`; Astra → sourced company under Energy & Industrials because of its automotive and heavy-equipment core).
4. **Indonesian vs. international sectors** (`-id` keys) exist only where graduates are hired differently — officer-development and management-trainee programmes — never to separate companies by nationality for its own sake.
5. **The noun is the only description.** "Indonesian construction and infrastructure company." Nothing about size, prestige, culture or pay is ever generated.
6. **Add a sector before you add a company** that does not fit; never stretch a sector's noun to cover it.

## 4. Changes made in this round

| Company | Was | Now | Why |
|---|---|---|---|
| Adhi Karya, Wijaya Karya, Hutama Karya, PTPP | `ind` (industrial & manufacturing) | `constr` (construction & infrastructure) | State-owned construction contractors |
| Jasa Marga | `ind` | `constr` | Toll-road builder and operator |
| Ciputra Group, Sinar Mas Land, Summarecon | `ind` | `property` | Property developers |
| `property` sector (Pakuwon, Agung Podomoro Land, Lippo Karawaci) | → Energy & Industrials | → Property, Real Estate & Construction | New industry |
| `constr` sector (Waskita Karya, PP (Persero)) | → Energy & Industrials | → Property, Real Estate & Construction | New industry |

Remaining `ind` rows were reviewed: petrochemicals (Indorama, Chandra Asri), heavy equipment (United Tractors, Komatsu, Caterpillar), defence and aerospace, automotive, electrical and industrial groups all describe themselves as manufacturers and belong there.

## 5. Role copy and process notes

- Generic function profiles live in `range-app.js` (`FN_META`). `data/range/fn-industry.js` adds a profile and typical responsibilities for **function × industry** pairs (70 pairs covering every function a sector opens in each industry). Company pages and the app look up the pair first and fall back to the generic profile. The "What gets tested" skills stay per function because interview content varies less by industry than the work does.
- `fn-industry.js` also carries one **process note per industry**, rendered under "How they typically hire" with the same "our reading, not their published process" label. The documented tier (a sourced programme with stage-by-stage detail) is unchanged and still exists only where a source exists.
- None of this adds a fact about a specific employer. The provenance labels (`✓ documented` / `~ typical`) and the "Not yet available for this company" block are untouched.

## 6. Checking the framework

`scripts/check-range-counts.py` keeps every published count equal to the database. A sector whose `ind` is not in `graph.js` would break the build in `export-range.js`; a company whose sector key is unknown breaks `expand()` at load. Adding an industry means: an entry in `graph.js`, an icon and search keywords in `range-app.js`, a `paths.js` relationship block, and a process note in `fn-industry.js` — the build generates the directory, sitemap and social cards from there.

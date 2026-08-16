/**
 * THE RANGE — OPPORTUNITY GRAPH (launch slice)
 * --------------------------------------------
 * 30 opportunities across the three launch clusters, honest by construction:
 *
 *  - process: 'documented'  → stage-by-stage detail from a cited source
 *                             (only Shopee GDP meets this bar today)
 *  - process: 'typical'     → the INDUSTRY-TYPICAL process for this kind of
 *                             role in Indonesia, explicitly labelled as our
 *                             reading (~ INFERRED), never presented as the
 *                             company's actual process (MEAB981 §9.4.2)
 *
 * Programme names appear ONLY where they come from the brief's cited sources.
 * Everywhere else the entry is the honest 'entry programme — see the official
 * careers page' state. Nothing here is generated or guessed; absence is a
 * displayed state, not a gap to improvise over.
 */
window.MT_RANGE_OPPS = (function () {
  var L = function (en, idn) { return { en: en, id: idn }; };

  /* ── industry-typical hiring processes (INFERRED tier) ──
     Sequences use the controlled stage_type vocabulary so the prep bridge
     stays automatic even for typical processes. */
  var TYPICAL = {
    'tech-graduate': {
      label: L('Typical for technology graduate programmes in Indonesia',
               'Umum untuk program graduate teknologi di Indonesia'),
      stages: ['application_screening', 'online_assessment', 'behavioural_interview', 'functional_interview', 'senior_interview']
    },
    'bank-odp': {
      label: L('Typical for bank officer-development programmes in Indonesia',
               'Umum untuk program officer development bank di Indonesia'),
      stages: ['application_screening', 'online_assessment', 'group_case', 'hr_interview', 'panel_interview', 'medical']
    },
    'fmcg-mt': {
      label: L('Typical for FMCG management-trainee programmes in Indonesia',
               'Umum untuk program management trainee FMCG di Indonesia'),
      stages: ['application_screening', 'online_assessment', 'group_case', 'behavioural_interview', 'senior_interview']
    },
    'professional-services': {
      label: L('Typical for professional-services entry roles in Indonesia',
               'Umum untuk peran entry jasa profesional di Indonesia'),
      stages: ['cv_screening', 'online_assessment', 'behavioural_interview', 'senior_interview']
    },
    'bumn-joint': {
      label: L('Typical for BUMN joint-recruitment cycles (FHCI)',
               'Umum untuk siklus rekrutmen bersama BUMN (FHCI)'),
      stages: ['application_screening', 'online_assessment', 'values_interview', 'medical']
    }
  };

  var STAGE_NAMES = {
    application_screening: L('Administrative & application screening', 'Screening administratif & aplikasi'),
    cv_screening: L('CV screening', 'Screening CV'),
    online_assessment: L('Online assessment', 'Asesmen daring'),
    technical_assessment: L('Technical assessment', 'Asesmen teknis'),
    group_case: L('Group case / discussion', 'Kasus / diskusi kelompok'),
    case_interview: L('Case interview', 'Wawancara kasus'),
    behavioural_interview: L('Behavioural interview', 'Wawancara perilaku'),
    functional_interview: L('Functional interview', 'Wawancara fungsional'),
    values_interview: L('Values & culture interview', 'Wawancara nilai & budaya'),
    hr_interview: L('HR interview', 'Wawancara HR'),
    senior_interview: L('Interview with senior leaders', 'Wawancara pemimpin senior'),
    panel_interview: L('Panel interview', 'Wawancara panel'),
    committee_review: L('Selection committee review', 'Tinjauan komite seleksi'),
    medical: L('Medical check', 'Tes kesehatan'),
    offer_negotiation: L('Offer & negotiation', 'Penawaran & negosiasi')
  };

  /* ── the 30 launch opportunities ──
     dir: primary career direction id · role: what you would enter as
     prog: sourced programme id (graph.programmes) or null
     proc: 'documented' | typical-template id
     window: sourced application-window text or null                     */
  var OPPS = [
    /* — documented — */
    { id: 'shopee-gdp', company: 'shopee-id', dir: 'management-trainee',
      role: L('Graduate Development Program', 'Graduate Development Program'),
      prog: 'shopee-gdp', proc: 'documented', hours: L('45–55 hrs/week typical', '45–55 jam/minggu umumnya') },

    /* — sourced programme name, typical process — */
    { id: 'telkom-gptp', company: 'telkom', dir: 'management-trainee',
      role: L('Great People Trainee Program', 'Great People Trainee Program'),
      prog: 'telkom-gptp', proc: 'bumn-joint', hours: null },
    { id: 'unilever-early', company: 'unilever-id', dir: 'brand-management',
      role: L('Early careers (leadership & internships)', 'Early careers (kepemimpinan & magang)'),
      prog: 'unilever-ulip', proc: 'fmcg-mt', hours: null },

    /* — technology & e-commerce — */
    { id: 'shopee-data', company: 'shopee-id', dir: 'data-analytics',
      role: L('Data / business analyst entry roles', 'Peran entry analis data / bisnis'), prog: null, proc: 'tech-graduate', hours: null },
    { id: 'goto-eng', company: 'goto', dir: 'software-engineering',
      role: L('Software engineering entry roles', 'Peran entry rekayasa perangkat lunak'), prog: null, proc: 'tech-graduate', hours: null },
    { id: 'goto-ops', company: 'goto', dir: 'tech-operations',
      role: L('Operations & marketplace roles', 'Peran operasional & marketplace'), prog: null, proc: 'tech-graduate', hours: null },
    { id: 'grab-analytics', company: 'grab-id', dir: 'data-analytics',
      role: L('Analytics & strategy entry roles', 'Peran entry analitik & strategi'), prog: null, proc: 'tech-graduate', hours: null },
    { id: 'grab-ops', company: 'grab-id', dir: 'tech-operations',
      role: L('Operations entry roles', 'Peran entry operasional'), prog: null, proc: 'tech-graduate', hours: null },
    { id: 'traveloka-eng', company: 'traveloka', dir: 'software-engineering',
      role: L('Engineering entry roles', 'Peran entry engineering'), prog: null, proc: 'tech-graduate', hours: null },
    { id: 'traveloka-pm', company: 'traveloka', dir: 'product-management',
      role: L('Associate product roles', 'Peran produk asosiat'), prog: null, proc: 'tech-graduate', hours: null },
    { id: 'blibli-comm', company: 'blibli', dir: 'digital-marketing',
      role: L('Commerce & growth entry roles', 'Peran entry commerce & growth'), prog: null, proc: 'tech-graduate', hours: null },
    { id: 'telkomsel-network', company: 'telkomsel', dir: 'software-engineering',
      role: L('Technology entry roles', 'Peran entry teknologi'), prog: null, proc: 'tech-graduate', hours: null },
    { id: 'telkomsel-digital', company: 'telkomsel', dir: 'digital-marketing',
      role: L('Digital business entry roles', 'Peran entry bisnis digital'), prog: null, proc: 'tech-graduate', hours: null },

    /* — financial services — */
    { id: 'bca-mdp', company: 'bca', dir: 'relationship-banking',
      role: L('Graduate development track', 'Jalur pengembangan lulusan'), prog: null, proc: 'bank-odp', hours: null },
    { id: 'bca-it', company: 'bca', dir: 'software-engineering',
      role: L('IT & digital entry roles', 'Peran entry IT & digital'), prog: null, proc: 'bank-odp', hours: null },
    { id: 'mandiri-odp', company: 'mandiri', dir: 'relationship-banking',
      role: L('Officer development track', 'Jalur officer development'), prog: null, proc: 'bank-odp', hours: null, bumn: true },
    { id: 'mandiri-risk', company: 'mandiri', dir: 'risk-management',
      role: L('Risk entry roles', 'Peran entry risiko'), prog: null, proc: 'bank-odp', hours: null, bumn: true },
    { id: 'bri-odp', company: 'bri', dir: 'relationship-banking',
      role: L('Officer development track', 'Jalur officer development'), prog: null, proc: 'bank-odp', hours: null, bumn: true },
    { id: 'bni-odp', company: 'bni', dir: 'relationship-banking',
      role: L('Officer development track', 'Jalur officer development'), prog: null, proc: 'bank-odp', hours: null, bumn: true },
    { id: 'dbs-analyst', company: 'dbs-id', dir: 'corporate-finance',
      role: L('Graduate analyst roles', 'Peran analis lulusan'), prog: null, proc: 'bank-odp', hours: null },
    { id: 'prudential-actuarial', company: 'prudential-id', dir: 'actuarial-analytics',
      role: L('Actuarial entry roles', 'Peran entry aktuaria'), prog: null, proc: 'professional-services', hours: null },
    { id: 'prudential-finance', company: 'prudential-id', dir: 'corporate-finance',
      role: L('Finance entry roles', 'Peran entry keuangan'), prog: null, proc: 'professional-services', hours: null },
    { id: 'bi-ojk', company: 'ojk-note', dir: 'risk-management',
      role: L('Public-sector selection tracks', 'Jalur seleksi sektor publik'), prog: null, proc: 'bumn-joint', hours: null },

    /* — FMCG & consumer — */
    { id: 'unilever-supply', company: 'unilever-id', dir: 'supply-chain',
      role: L('Supply chain entry roles', 'Peran entry rantai pasok'), prog: null, proc: 'fmcg-mt', hours: null },
    { id: 'nestle-mt', company: 'nestle-id', dir: 'management-trainee',
      role: L('Management-trainee track', 'Jalur management trainee'), prog: null, proc: 'fmcg-mt', hours: null },
    { id: 'nestle-sales', company: 'nestle-id', dir: 'sales-key-account',
      role: L('Sales entry roles', 'Peran entry penjualan'), prog: null, proc: 'fmcg-mt', hours: null },
    { id: 'loreal-mt', company: 'loreal-id', dir: 'brand-management',
      role: L('Management-trainee track', 'Jalur management trainee'), prog: null, proc: 'fmcg-mt', hours: null },
    { id: 'danone-supply', company: 'danone-id', dir: 'supply-chain',
      role: L('Supply chain & operations entry roles', 'Peran entry rantai pasok & operasional'), prog: null, proc: 'fmcg-mt', hours: null },
    { id: 'wings-trade', company: 'wings', dir: 'trade-marketing',
      role: L('Trade marketing & sales entry roles', 'Peran entry trade marketing & penjualan'), prog: null, proc: 'fmcg-mt', hours: null },
    { id: 'mayora-sales', company: 'mayora', dir: 'sales-key-account',
      role: L('Sales & distribution entry roles', 'Peran entry penjualan & distribusi'), prog: null, proc: 'fmcg-mt', hours: null },
    { id: 'mayora-supply', company: 'mayora', dir: 'supply-chain',
      role: L('Supply chain entry roles', 'Peran entry rantai pasok'), prog: null, proc: 'fmcg-mt', hours: null }
  ];

  return { TYPICAL: TYPICAL, STAGE_NAMES: STAGE_NAMES, OPPS: OPPS };
})();

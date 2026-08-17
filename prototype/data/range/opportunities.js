/**
 * THE RANGE — OPPORTUNITY GRAPH v2
 * --------------------------------
 * Companies now carry a geography scope ('id' | 'intl'), a function list,
 * and multiple explorable roles: Company → Function → Role → Opportunity.
 * Role entries are generated from each company's declared functions, so the
 * database extends by editing data only.
 *
 * Integrity rules unchanged (MEAB981 §16.2):
 *  - Stage-by-stage hiring detail exists ONLY where sourced (Shopee GDP).
 *  - Everything else shows the INDUSTRY-TYPICAL process, explicitly labelled
 *    as our reading (~ INFERRED), never as the company's actual process.
 *  - Programme names appear only where they come from cited sources; other
 *    role entries use function-generic labels, never invented programme names.
 *  - Company descriptions are broad public knowledge, source-typed and dated.
 *  - No salary figures anywhere: levels are editorial career analysis; for
 *    compensation the product links out to third-party sources and says so.
 */
window.MT_RANGE_OPPS = (function () {
  var L = function (en, idn) { return { en: en, id: idn }; };

  /* ── industry-typical hiring processes (INFERRED tier) ── */
  var TYPICAL = {
    'tech-graduate': {
      label: L('Typical for technology graduate roles in Indonesia', 'Umum untuk peran graduate teknologi di Indonesia'),
      stages: ['application_screening', 'online_assessment', 'behavioural_interview', 'functional_interview', 'senior_interview']
    },
    'tech-global': {
      label: L('Typical for global technology graduate roles', 'Umum untuk peran graduate teknologi global'),
      stages: ['application_screening', 'online_assessment', 'technical_assessment', 'behavioural_interview', 'senior_interview']
    },
    'bank-odp': {
      label: L('Typical for bank officer-development programmes in Indonesia', 'Umum untuk program officer development bank di Indonesia'),
      stages: ['application_screening', 'online_assessment', 'group_case', 'hr_interview', 'panel_interview', 'medical']
    },
    'fmcg-mt': {
      label: L('Typical for FMCG management-trainee programmes in Indonesia', 'Umum untuk program management trainee FMCG di Indonesia'),
      stages: ['application_screening', 'online_assessment', 'group_case', 'behavioural_interview', 'senior_interview']
    },
    'consulting': {
      label: L('Typical for strategy-consulting entry roles', 'Umum untuk peran entry konsultan strategi'),
      stages: ['cv_screening', 'online_assessment', 'case_interview', 'case_interview', 'senior_interview']
    },
    'professional-services': {
      label: L('Typical for professional-services entry roles in Indonesia', 'Umum untuk peran entry jasa profesional di Indonesia'),
      stages: ['cv_screening', 'online_assessment', 'behavioural_interview', 'senior_interview']
    },
    'bumn-joint': {
      label: L('Typical for BUMN joint-recruitment cycles (FHCI)', 'Umum untuk siklus rekrutmen bersama BUMN (FHCI)'),
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

  /* ── function → generic role label + direction mapping ──
     Generic by design: we never invent company-specific programme names. */
  var FN_ROLES = {
    engineering: { role: L('Software & technology roles', 'Peran perangkat lunak & teknologi'), dir: 'software-engineering' },
    data:        { role: L('Data & analytics roles', 'Peran data & analitik'), dir: 'data-analytics' },
    product:     { role: L('Product roles', 'Peran produk'), dir: 'product-management' },
    design:      { role: L('Design & UX roles', 'Peran desain & UX'), dir: 'ux-design' },
    marketing:   { role: L('Marketing & growth roles', 'Peran pemasaran & growth'), dir: 'digital-marketing' },
    finance:     { role: L('Finance roles', 'Peran keuangan'), dir: 'corporate-finance' },
    operations:  { role: L('Operations & supply roles', 'Peran operasional & rantai pasok'), dir: 'supply-chain' },
    commercial:  { role: L('Sales & commercial roles', 'Peran penjualan & komersial'), dir: 'sales-key-account' },
    people:      { role: L('People & HR roles', 'Peran SDM'), dir: 'hr-people' },
    risk:        { role: L('Risk & assurance roles', 'Peran risiko & asurans'), dir: 'risk-management' },
    strategy:    { role: L('Strategy & consulting roles', 'Peran strategi & konsultan'), dir: 'management-trainee' },
    trainee:     { role: L('Management-trainee track', 'Jalur management trainee'), dir: 'management-trainee' }
  };

  /* ── extra companies beyond the base graph ──
     geo: 'id' | 'intl' · fns: function ids · proc: typical template
     bumn: FHCI joint-recruitment rules apply                            */
  var EXTRA_COMPANIES = [
    /* — Indonesia, expanded — */
    { id: 'astra', name: 'Astra International', industry_id: 'energy-industrials', geo: 'id', proc: 'fmcg-mt', fns: ['trainee', 'finance', 'operations', 'commercial', 'people'],
      desc: L('An Indonesian conglomerate spanning automotive, financial services, heavy equipment and agribusiness.', 'Konglomerat Indonesia yang mencakup otomotif, jasa keuangan, alat berat, dan agribisnis.'), website: 'https://www.astra.co.id' },
    { id: 'pertamina', name: 'Pertamina', industry_id: 'energy-industrials', geo: 'id', proc: 'bumn-joint', bumn: true, fns: ['trainee', 'engineering', 'finance', 'operations'],
      desc: L('Indonesia’s state-owned energy company, spanning upstream, refining and fuel retail.', 'BUMN energi Indonesia, mencakup hulu, pengolahan, dan ritel bahan bakar.'), website: 'https://www.pertamina.com' },
    { id: 'indofood', name: 'Indofood', industry_id: 'fmcg-consumer', geo: 'id', proc: 'fmcg-mt', fns: ['trainee', 'marketing', 'operations', 'commercial', 'finance'],
      desc: L('An Indonesian food company with instant noodles, dairy, snacks and flour businesses.', 'Perusahaan makanan Indonesia dengan bisnis mi instan, susu, camilan, dan tepung.'), website: 'https://www.indofood.com' },
    { id: 'kalbe', name: 'Kalbe Farma', industry_id: 'healthcare-pharma', geo: 'id', proc: 'fmcg-mt', fns: ['trainee', 'marketing', 'operations', 'data'],
      desc: L('An Indonesian pharmaceutical and consumer-health company.', 'Perusahaan farmasi dan kesehatan konsumen Indonesia.'), website: 'https://www.kalbe.co.id' },
    { id: 'sinarmas', name: 'Sinar Mas Group', industry_id: 'energy-industrials', geo: 'id', proc: 'fmcg-mt', fns: ['trainee', 'finance', 'operations', 'commercial'],
      desc: L('An Indonesian group across pulp & paper, agribusiness, financial services and property.', 'Grup Indonesia di bidang pulp & kertas, agribisnis, jasa keuangan, dan properti.'), website: 'https://www.sinarmas.com' },
    { id: 'bukalapak', name: 'Bukalapak', industry_id: 'tech-ecommerce', geo: 'id', proc: 'tech-graduate', fns: ['engineering', 'data', 'product', 'operations'],
      desc: L('An Indonesian e-commerce and online-to-offline platform serving warung and retail.', 'Platform e-commerce dan online-to-offline Indonesia yang melayani warung dan ritel.'), website: 'https://www.bukalapak.com' },
    { id: 'xl-axiata', name: 'XL Axiata', industry_id: 'telecom', geo: 'id', proc: 'tech-graduate', fns: ['engineering', 'data', 'marketing', 'trainee'],
      desc: L('An Indonesian mobile network operator, part of the Axiata group.', 'Operator seluler Indonesia, bagian dari grup Axiata.'), website: 'https://www.xlaxiata.co.id' },
    { id: 'pwc-id', name: 'PwC Indonesia', industry_id: 'professional-services', geo: 'id', proc: 'professional-services', fns: ['risk', 'finance', 'strategy', 'data'],
      desc: L('The Indonesian member firm of the PwC global professional-services network.', 'Firma anggota Indonesia dari jaringan jasa profesional global PwC.'), website: 'https://www.pwc.com/id' },
    { id: 'ey-id', name: 'EY Indonesia', industry_id: 'professional-services', geo: 'id', proc: 'professional-services', fns: ['risk', 'finance', 'strategy', 'data'],
      desc: L('The Indonesian member firm of the EY global professional-services network.', 'Firma anggota Indonesia dari jaringan jasa profesional global EY.'), website: 'https://www.ey.com/id' },
    { id: 'kpmg-id', name: 'KPMG Indonesia', industry_id: 'professional-services', geo: 'id', proc: 'professional-services', fns: ['risk', 'finance', 'strategy'],
      desc: L('The Indonesian member firm of the KPMG global professional-services network.', 'Firma anggota Indonesia dari jaringan jasa profesional global KPMG.'), website: 'https://kpmg.com/id' },
    { id: 'deloitte-id', name: 'Deloitte Indonesia', industry_id: 'professional-services', geo: 'id', proc: 'professional-services', fns: ['risk', 'finance', 'strategy', 'data'],
      desc: L('The Indonesian member firm of the Deloitte global professional-services network.', 'Firma anggota Indonesia dari jaringan jasa profesional global Deloitte.'), website: 'https://www.deloitte.com/id' },
    { id: 'btn', name: 'Bank BTN', industry_id: 'financial-services', geo: 'id', proc: 'bank-odp', bumn: true, fns: ['commercial', 'finance', 'risk', 'trainee'],
      desc: L('An Indonesian state-owned bank focused on housing finance.', 'Bank BUMN Indonesia yang berfokus pada pembiayaan perumahan.'), website: 'https://www.btn.co.id' },

    /* — International — */
    { id: 'google', country: 'us', name: 'Google', industry_id: 'tech-ecommerce', geo: 'intl', proc: 'tech-global', fns: ['engineering', 'data', 'product', 'marketing'],
      desc: L('A global technology company in search, cloud computing, AI and digital products.', 'Perusahaan teknologi global di bidang pencarian, komputasi awan, AI, dan produk digital.'), website: 'https://careers.google.com' },
    { id: 'microsoft', country: 'us', name: 'Microsoft', industry_id: 'tech-ecommerce', geo: 'intl', proc: 'tech-global', fns: ['engineering', 'data', 'product', 'commercial'],
      desc: L('A global technology company in software, cloud and productivity platforms.', 'Perusahaan teknologi global di bidang perangkat lunak, cloud, dan platform produktivitas.'), website: 'https://careers.microsoft.com' },
    { id: 'amazon', country: 'us', name: 'Amazon', industry_id: 'tech-ecommerce', geo: 'intl', proc: 'tech-global', fns: ['engineering', 'data', 'operations', 'product'],
      desc: L('A global technology company in e-commerce, cloud computing and logistics.', 'Perusahaan teknologi global di bidang e-commerce, komputasi awan, dan logistik.'), website: 'https://www.amazon.jobs' },
    { id: 'sea-group', country: 'sg', name: 'Sea Group (Singapore)', industry_id: 'tech-ecommerce', geo: 'intl', proc: 'tech-global', fns: ['engineering', 'data', 'product', 'operations'],
      desc: L('A Southeast Asian technology group spanning e-commerce, gaming and digital finance.', 'Grup teknologi Asia Tenggara yang mencakup e-commerce, gim, dan keuangan digital.'), website: 'https://www.sea.com' },
    { id: 'bytedance', country: 'cn', name: 'ByteDance / TikTok', industry_id: 'tech-ecommerce', geo: 'intl', proc: 'tech-global', fns: ['engineering', 'data', 'product', 'marketing'],
      desc: L('A global technology company operating digital content and social platforms.', 'Perusahaan teknologi global yang mengoperasikan konten digital dan platform sosial.'), website: 'https://jobs.bytedance.com' },
    { id: 'mckinsey', country: 'us', name: 'McKinsey & Company', industry_id: 'professional-services', geo: 'intl', proc: 'consulting', fns: ['strategy', 'data'],
      desc: L('A global management-consulting firm.', 'Firma konsultan manajemen global.'), website: 'https://www.mckinsey.com/careers' },
    { id: 'bcg', country: 'us', name: 'Boston Consulting Group', industry_id: 'professional-services', geo: 'intl', proc: 'consulting', fns: ['strategy', 'data'],
      desc: L('A global management-consulting firm.', 'Firma konsultan manajemen global.'), website: 'https://careers.bcg.com' },
    { id: 'bain', country: 'us', name: 'Bain & Company', industry_id: 'professional-services', geo: 'intl', proc: 'consulting', fns: ['strategy'],
      desc: L('A global management-consulting firm.', 'Firma konsultan manajemen global.'), website: 'https://www.bain.com/careers' },
    { id: 'goldman', country: 'us', name: 'Goldman Sachs', industry_id: 'financial-services', geo: 'intl', proc: 'professional-services', fns: ['finance', 'risk', 'data'],
      desc: L('A global investment bank and financial-services firm.', 'Bank investasi dan firma jasa keuangan global.'), website: 'https://www.goldmansachs.com/careers' },
    { id: 'jpmorgan', country: 'us', name: 'J.P. Morgan', industry_id: 'financial-services', geo: 'intl', proc: 'professional-services', fns: ['finance', 'risk', 'data', 'engineering'],
      desc: L('A global bank spanning investment banking, markets and asset management.', 'Bank global yang mencakup perbankan investasi, pasar, dan manajemen aset.'), website: 'https://careers.jpmorgan.com' },
    { id: 'pg-global', country: 'us', name: 'Procter & Gamble', industry_id: 'fmcg-consumer', geo: 'intl', proc: 'fmcg-mt', fns: ['marketing', 'commercial', 'operations', 'finance'],
      desc: L('A global consumer-goods company with brands across home and personal care.', 'Perusahaan barang konsumen global dengan merek perawatan rumah dan pribadi.'), website: 'https://www.pgcareers.com' },
    { id: 'nestle-global', country: 'ch', name: 'Nestlé (Global)', industry_id: 'fmcg-consumer', geo: 'intl', proc: 'fmcg-mt', fns: ['marketing', 'operations', 'finance', 'commercial'],
      desc: L('The global food and beverage company, with graduate programmes across markets.', 'Perusahaan makanan dan minuman global, dengan program graduate di berbagai pasar.'), website: 'https://www.nestle.com/jobs' }
  ];

  /* functions for the base-graph companies (geo defaults to 'id') */
  var BASE_FNS = {
    'shopee-id':     { fns: ['trainee', 'engineering', 'data', 'product', 'operations', 'marketing'], proc: 'tech-graduate' },
    'goto':          { fns: ['engineering', 'data', 'product', 'operations', 'marketing'], proc: 'tech-graduate' },
    'grab-id':       { fns: ['engineering', 'data', 'operations', 'marketing'], proc: 'tech-graduate' },
    'traveloka':     { fns: ['engineering', 'data', 'product', 'design'], proc: 'tech-graduate' },
    'blibli':        { fns: ['engineering', 'marketing', 'operations', 'commercial'], proc: 'tech-graduate' },
    'telkom':        { fns: ['trainee', 'engineering', 'data', 'product', 'strategy', 'finance', 'marketing'], proc: 'bumn-joint', bumn: true },
    'telkomsel':     { fns: ['engineering', 'data', 'marketing', 'product'], proc: 'tech-graduate' },
    'bca':           { fns: ['trainee', 'commercial', 'engineering', 'data', 'finance', 'risk'], proc: 'bank-odp' },
    'mandiri':       { fns: ['trainee', 'commercial', 'finance', 'risk', 'data'], proc: 'bank-odp', bumn: true },
    'bri':           { fns: ['trainee', 'commercial', 'finance', 'risk'], proc: 'bank-odp', bumn: true },
    'bni':           { fns: ['trainee', 'commercial', 'finance', 'risk'], proc: 'bank-odp', bumn: true },
    'dbs-id':        { fns: ['finance', 'data', 'commercial', 'risk'], proc: 'bank-odp' },
    'prudential-id': { fns: ['finance', 'risk', 'data', 'commercial'], proc: 'professional-services' },
    'ojk-note':      { fns: ['risk', 'finance', 'data'], proc: 'bumn-joint' },
    'unilever-id':   { fns: ['trainee', 'marketing', 'operations', 'commercial', 'finance', 'people'], proc: 'fmcg-mt' },
    'nestle-id':     { fns: ['trainee', 'marketing', 'operations', 'commercial'], proc: 'fmcg-mt' },
    'loreal-id':     { fns: ['trainee', 'marketing', 'commercial', 'finance'], proc: 'fmcg-mt' },
    'danone-id':     { fns: ['operations', 'marketing', 'finance', 'people'], proc: 'fmcg-mt' },
    'wings':         { fns: ['marketing', 'commercial', 'operations'], proc: 'fmcg-mt' },
    'mayora':        { fns: ['commercial', 'operations', 'marketing', 'finance'], proc: 'fmcg-mt' }
  };

  /* merged company list — curated (base graph + extras) plus the scalable DB.
   * Curated entries keep their hand-written descriptions and win on id clash. */
  function domainOf(url) { return (url || '').replace(/^https?:\/\//, '').replace(/\/.*$/, ''); }
  function companies() {
    var G = window.MT_RANGE_GRAPH;
    var base = G.companies.map(function (c) {
      var x = BASE_FNS[c.id] || { fns: ['trainee'], proc: 'professional-services' };
      return { id: c.id, name: c.name, industry_id: c.industry_id, geo: 'id', country: 'id',
        desc: c.description, website: c.website, domain: domainOf(c.website), source_type: c.source_type,
        last_reviewed: c.last_reviewed, fns: x.fns, proc: x.proc, bumn: !!x.bumn };
    });
    var extra = EXTRA_COMPANIES.map(function (c) {
      return { id: c.id, name: c.name, industry_id: c.industry_id, geo: c.geo,
        country: c.geo === 'id' ? 'id' : (c.country || 'us'),
        desc: c.desc, website: c.website, domain: domainOf(c.website), source_type: 'official',
        last_reviewed: '2026-08-16', fns: c.fns, proc: c.proc, bumn: !!c.bumn };
    });
    var out = base.concat(extra);
    var seen = {};
    out.forEach(function (c) { seen[c.id] = true; });
    if (window.MT_RANGE_DB) {
      window.MT_RANGE_DB.expand().forEach(function (c) {
        if (seen[c.id]) return;
        seen[c.id] = true;
        out.push(c);
      });
    }
    return out;
  }

  /* sourced special opportunities (programme names from cited sources only) */
  var SOURCED = [
    { id: 'shopee-gdp', company: 'shopee-id', fn: 'trainee', dir: 'management-trainee',
      role: L('Graduate Development Program', 'Graduate Development Program'),
      prog: 'shopee-gdp', proc: 'documented', hours: L('45–55 hrs/week typical', '45–55 jam/minggu umumnya') },
    { id: 'telkom-gptp', company: 'telkom', fn: 'trainee', dir: 'management-trainee',
      role: L('Great People Trainee Program', 'Great People Trainee Program'),
      prog: 'telkom-gptp', proc: 'bumn-joint' },
    { id: 'unilever-early', company: 'unilever-id', fn: 'trainee', dir: 'brand-management',
      role: L('Early careers (leadership & internships)', 'Early careers (kepemimpinan & magang)'),
      prog: 'unilever-ulip', proc: 'fmcg-mt' }
  ];

  /* full opportunity list: sourced entries + generated Company × Function */
  function opps() {
    var out = SOURCED.slice();
    companies().forEach(function (c) {
      c.fns.forEach(function (fn) {
        var id = c.id + '--' + fn;
        if (SOURCED.some(function (s) { return s.company === c.id && s.fn === fn; })) return;
        var fr = FN_ROLES[fn];
        out.push({ id: id, company: c.id, fn: fn, dir: fr.dir, role: fr.role,
          prog: null, proc: c.proc, bumn: c.bumn });
      });
    });
    return out;
  }

  /* editorial career-level ladder — Metanoia analysis, not market data */
  var LEVELS = [
    { name: L('Entry / Junior', 'Entry / Junior'), scope: L('Owns small, well-defined pieces of work with close guidance.', 'Memegang pekerjaan kecil yang terdefinisi jelas dengan bimbingan dekat.') },
    { name: L('Mid-level', 'Mid-level'), scope: L('Owns a full area or workflow; guides juniors informally.', 'Memegang satu area atau alur kerja penuh; membimbing junior secara informal.') },
    { name: L('Senior', 'Senior'), scope: L('Leads a major vertical end-to-end; shapes how the team works.', 'Memimpin satu vertikal besar ujung-ke-ujung; membentuk cara kerja tim.') },
    { name: L('Lead / Principal', 'Lead / Principal'), scope: L('Drives strategy across teams or domains; multiplies others.', 'Menggerakkan strategi lintas tim atau domain; melipatgandakan orang lain.') }
  ];

  return { TYPICAL: TYPICAL, STAGE_NAMES: STAGE_NAMES, FN_ROLES: FN_ROLES,
    LEVELS: LEVELS, companies: companies, opps: opps };
})();

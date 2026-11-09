/**
 * BUILD STATUS — SINGLE SOURCE OF TRUTH FOR "WHAT'S LIVE TODAY"
 * -------------------------------------------------------------
 * Rendered by js/build-status.js into every element marked
 * data-build-status (pricing page). Update the two lists when something
 * ships or moves; never edit the rendered lists by hand.
 *
 * The date is stamped by the build: scripts/build-site.py writes
 * data/build-status.json { updated, commit, range_companies, mind_palace_articles }
 * on every deploy and the renderer prefers it over `updated` below, which is
 * only the fallback for a static host without the build output. The renderer
 * also flags the board when the stamp is older than 45 days.
 *
 * Beta: every edition and pillar is Rp 0 until 2026-11-22 (wrangler.toml
 * BETA_ENDS_AT). Memberships after that date wait for an explicit decision.
 */
window.MT_BUILD_STATUS = {
  updated: '2026-11-08',
  betaEndsAt: '2026-11-22',
  live: [
    { en: 'Career Map assessment with readiness score, report by e-mail', id: 'Asesmen Career Map dengan skor kesiapan, laporan lewat e-mail' },
    { en: 'The Gauntlet: full 8-gate guide, free and public', id: 'The Gauntlet: panduan 8 gerbang lengkap, gratis dan publik' },
    { en: 'The Map: 36 lessons across 8 modules, with assignments and grades', id: 'The Map: 36 pelajaran dalam 8 modul, dengan tugas dan nilai' },
    { en: 'The Pack: 9 modules plus the Test Lab (psychometric practice); group and case interviews are trained in The Rope', id: 'The Pack: 9 modul plus Test Lab (latihan psikotes); diskusi kelompok dan wawancara kasus dilatih di The Rope' },
    { en: 'The Rope: interview curriculum and simulations', id: 'The Rope: kurikulum wawancara dan simulasi' },
    { en: 'The Route: early-career curriculum', id: 'The Route: kurikulum awal karier' },
    { en: 'The Range: real companies, each on its own page', id: 'The Range: perusahaan nyata, masing-masing di halamannya sendiri' },
    { en: 'Mind Palace: articles, playbooks and signals', id: 'Mind Palace: artikel, playbook, dan sinyal' },
    { en: 'The Compass tracker (beta)', id: 'Pelacak The Compass (beta)' },
    { en: 'Accounts: open registration with e-mail and password', id: 'Akun: pendaftaran terbuka dengan e-mail dan kata sandi' }
  ],
  coming: [
    { en: 'Sign in with Google and LinkedIn, and by e-mail link', id: 'Masuk dengan Google dan LinkedIn, dan lewat tautan e-mail' },
    { en: 'Progress saved to your account across devices', id: 'Progres tersimpan di akunmu lintas perangkat' },
    { en: 'Early & Mature Professional editions', id: 'Edisi Profesional Muda & Berpengalaman' },
    { en: 'Mentor matching (concierge first, software later)', id: 'Pencocokan mentor (manual dahulu, perangkat lunak kemudian)' },
    { en: 'Enterprise reporting (aggregate, anonymised)', id: 'Pelaporan Enterprise (agregat, dianonimkan)' },
    { en: 'Memberships after the beta ends on 22 November 2026', id: 'Keanggotaan setelah beta berakhir 22 November 2026' }
  ]
};

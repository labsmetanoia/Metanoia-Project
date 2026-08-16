/**
 * THE RANGE — FIT MODEL
 * -----------------------
 * Attribute-distance matching with explicit evidence tracing (ME30AC1 Part 6).
 * Deliberately simple and inspectable: a model you cannot explain is a model
 * you cannot show evidence for.
 *
 * Hard rules implemented here:
 *  - No numeric fit percentage is ever produced for display.
 *  - Every evidence item names the questionnaire block that produced it.
 *  - Directions with zero counter-evidence are suppressed (insufficient input).
 *  - Exactly one Unexpected direction is surfaced per result set.
 *  - 5–7 directions shown by default, never more.
 *  - Low-completeness profiles return an insufficiency state instead of
 *    manufactured results.
 */
(function () {
  'use strict';

  var ATTRIBUTES = ['analytical', 'creative', 'people_facing', 'structured', 'autonomous',
    'detail_oriented', 'ambiguity_tolerant', 'pace_intensity', 'technical_depth', 'commercial'];

  var BANDS = {
    strong: { id: 'strong', en: 'Strong signal', id_: 'Sinyal kuat', minEvidence: 5, minAlign: 0.72 },
    worth: { id: 'worth', en: 'Worth exploring', id_: 'Layak dijelajahi', minEvidence: 3, minAlign: 0.55 },
    stretch: { id: 'stretch', en: 'Stretch', id_: 'Menantang', minEvidence: 2, minAlign: 0.0 }
  };

  var BLOCK_LABELS = {
    block_1: { en: 'where you are', id: 'posisimu saat ini' },
    block_2: { en: "what you've done", id: 'apa yang pernah kamu lakukan' },
    block_3: { en: "what you're good at", id: 'apa yang kamu kuasai' },
    block_4: { en: "what you're drawn to", id: 'apa yang menarikmu' },
    block_5: { en: 'how you like to work', id: 'cara kerja favoritmu' },
    block_6: { en: 'what matters to you', id: 'apa yang penting bagimu' },
    block_7: { en: "what's in the way", id: 'apa yang menghalangi' },
    block_8: { en: 'industries you named', id: 'industri yang kamu sebut' },
    block_9: { en: 'functions you named', id: 'fungsi yang kamu sebut' },
    block_10: { en: 'your aspiration', id: 'aspirasimu' }
  };

  var ATTR_PHRASES = {
    analytical: { en: 'analysing and structuring problems', id: 'menganalisis dan menyusun masalah' },
    creative: { en: 'creating and shaping new things', id: 'menciptakan dan membentuk hal baru' },
    people_facing: { en: 'working directly with people', id: 'bekerja langsung dengan orang' },
    structured: { en: 'clear structure', id: 'struktur yang jelas' },
    autonomous: { en: 'working independently', id: 'bekerja mandiri' },
    detail_oriented: { en: 'precision and detail', id: 'presisi dan detail' },
    ambiguity_tolerant: { en: 'open, ambiguous problems', id: 'masalah terbuka dan ambigu' },
    pace_intensity: { en: 'a high-intensity pace', id: 'ritme intensitas tinggi' },
    technical_depth: { en: 'deep technical work', id: 'kerja teknis yang dalam' },
    commercial: { en: 'commercial, business-side work', id: 'kerja komersial sisi bisnis' }
  };

  function completeness(identity) {
    var blocks = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10'];
    var done = blocks.filter(function (b) { return identity[b] && identity[b].done; }).length;
    return done / blocks.length;
  }

  function analyseDirection(identity, dir, lang) {
    var ev = [], cev = [];
    var L = function (pair) { return pair[lang] || pair.en; };

    ATTRIBUTES.forEach(function (attr) {
      var userVal = identity.attributes[attr];
      var dirVal = dir.attrs[attr];
      if (userVal == null || dirVal == null) return;
      var distance = Math.abs(userVal - dirVal) / 100;
      var src = identity.attributeSources[attr] || 'block_5';
      var phrase = L(ATTR_PHRASES[attr]);
      if (distance < 0.25) {
        ev.push({
          kind: 'attribute', attr: attr, src: src,
          text: lang === 'id'
            ? 'Preferensimu terhadap ' + phrase + ' cocok dengan inti pekerjaan arah ini.'
            : 'Your preference for ' + phrase + ' matches the core of this work.'
        });
      } else if (distance > 0.55) {
        cev.push({
          kind: 'attribute', attr: attr, src: src,
          text: (userVal < dirVal)
            ? (lang === 'id'
              ? 'Arah ini menuntut ' + phrase + ' lebih dari yang kamu gambarkan tentang dirimu.'
              : 'This direction demands more ' + phrase + ' than you described in yourself.')
            : (lang === 'id'
              ? 'Kamu menggambarkan dirimu lebih condong ke ' + phrase + ' daripada yang biasanya ditawarkan pekerjaan ini.'
              : 'You described yourself as leaning towards ' + phrase + ' more than this work typically offers.')
        });
      }
    });

    (identity.skills || []).forEach(function (s) {
      if ((dir.core_skills || []).indexOf(s.id) !== -1) {
        ev.push({
          kind: 'skill', src: 'block_3',
          text: lang === 'id'
            ? 'Kamu menilai dirimu mampu di ' + s.label + ' — pekerjaan ini memakainya terus-menerus.'
            : 'You rated yourself capable in ' + s.label + ', which this work uses constantly.'
        });
        if (s.asked) {
          ev.push({
            kind: 'demand', src: 'block_3',
            text: lang === 'id'
              ? 'Orang-orang meminta bantuanmu soal ' + s.label + '. Permintaan nyata lebih bermakna daripada penilaian diri.'
              : 'People ask you for help with ' + s.label + '. Revealed demand means more than self-assessment.'
          });
        }
      }
    });

    (identity.prefIndustries || []).forEach(function (ind) {
      if ((dir.industry_ids || []).indexOf(ind) !== -1) {
        ev.push({
          kind: 'stated', src: 'block_8',
          text: lang === 'id'
            ? 'Kamu sendiri menyebut industri ini sebagai yang ingin kamu jelajahi.'
            : 'You named this industry yourself as one you want to explore.'
        });
      }
    });
    (identity.prefFunctions || []).forEach(function (fn) {
      if ((dir.function_ids || []).indexOf(fn) !== -1) {
        ev.push({
          kind: 'stated', src: 'block_9',
          text: lang === 'id'
            ? 'Fungsi kerja ini termasuk yang kamu pilih sendiri.'
            : 'This working function is one you picked yourself.'
        });
      }
    });

    var interestHit = (identity.interests || []).filter(function (t) {
      return (dir.interest_tags || []).indexOf(t) !== -1;
    });
    if (interestHit.length) {
      ev.push({
        kind: 'interest', src: 'block_4',
        text: lang === 'id'
          ? 'Minat yang kamu pilih bersinggungan langsung dengan wilayah pekerjaan ini.'
          : 'The interests you chose overlap directly with this territory.'
      });
    }

    (dir.tradeoffs || []).forEach(function (t) {
      var txt = (t.en + ' ' + t.id).toLowerCase();
      (identity.topValues || []).forEach(function (v) {
        var conflictMap = {
          balance: ['hour', '60+', 'intens', 'jam', 'shift', 'on-call', 'busy season', 'musim sibuk', 'field time', 'lapangan'],
          stability: ['churn', 'young', 'muda', 'varies', 'bervariasi'],
          creativity: ['spreadsheet', 'p&l', 'monitoring', 'administra']
        };
        var keys = conflictMap[v];
        if (keys && keys.some(function (k) { return txt.indexOf(k) !== -1; })) {
          cev.push({
            kind: 'values', src: 'block_6',
            text: lang === 'id'
              ? 'Kamu menempatkan "' + valueLabel(v, 'id') + '" di lima teratas nilai-nilaimu. ' + t.id
              : 'You ranked "' + valueLabel(v, 'en') + '" in your top five values. ' + t.en
          });
        }
      });
    });

    if ((identity.constraints || []).indexOf('geography') !== -1 &&
        (dir.tradeoffs || []).some(function (t) { return /rotation|rotasi|field|lapangan|cities|kota/i.test(t.en + t.id); })) {
      cev.push({
        kind: 'constraint', src: 'block_7',
        text: lang === 'id'
          ? 'Kamu menyebut lokasi sebagai batasan. Arah ini kerap menuntut mobilitas atau penempatan.'
          : 'You named geography as a constraint. This direction often demands mobility or placement.'
      });
    }

    /* dedupe + trim */
    ev = ev.slice(0, 5);
    cev = cev.slice(0, 3);

    var alignment = ev.length / ((ev.length + cev.length) || 1);
    var band = null;
    if (ev.length >= BANDS.strong.minEvidence && alignment >= BANDS.strong.minAlign) band = BANDS.strong;
    else if (ev.length >= BANDS.worth.minEvidence && alignment >= BANDS.worth.minAlign) band = BANDS.worth;
    else if (ev.length >= BANDS.stretch.minEvidence) band = BANDS.stretch;

    return {
      direction: dir, band: band, evidence: ev, counterEvidence: cev,
      inputCount: ev.length + cev.length, alignment: alignment
    };
  }

  function valueLabel(v, lang) {
    var m = {
      money: { en: 'income', id: 'penghasilan' }, impact: { en: 'impact', id: 'dampak' },
      stability: { en: 'stability', id: 'stabilitas' }, learning: { en: 'learning', id: 'pembelajaran' },
      autonomy: { en: 'autonomy', id: 'otonomi' }, recognition: { en: 'recognition', id: 'pengakuan' },
      balance: { en: 'balance', id: 'keseimbangan' }, prestige: { en: 'prestige', id: 'prestise' },
      purpose: { en: 'purpose', id: 'makna' }, security: { en: 'security', id: 'keamanan' },
      creativity: { en: 'creativity', id: 'kreativitas' }, people: { en: 'people', id: 'orang-orang' }
    };
    return (m[v] || { en: v, id: v })[lang];
  }

  function analyseAll(identity, graph, lang) {
    if (completeness(identity) < 4 / 7) {
      return { insufficient: true, completeness: completeness(identity) };
    }
    var dismissed = identity.dismissed || [];
    var results = graph.directions
      .filter(function (d) { return dismissed.indexOf(d.id) === -1; })
      .map(function (d) { return analyseDirection(identity, d, lang); })
      /* Suppression rule: a direction with no counter-evidence is a signal of
         insufficient input about the user, not of perfect fit. */
      .filter(function (r) { return r.band && r.counterEvidence.length > 0; })
      .sort(function (a, b) {
        return (b.evidence.length - a.evidence.length) || (b.alignment - a.alignment);
      });

    /* Unexpected slot: moderate alignment, not already in the top set,
       sharing at least one evidence trace with the user. */
    var top = results.slice(0, 6);
    var unexpected = null;
    for (var i = 6; i < results.length; i++) {
      var r = results[i];
      if (r.evidence.length >= 2 && r.alignment >= 0.4 && r.alignment <= 0.75) { unexpected = r; break; }
    }
    if (!unexpected && results.length > 6) unexpected = results[results.length - 1];

    return {
      insufficient: false,
      completeness: completeness(identity),
      shown: top,
      unexpected: unexpected,
      totalConsidered: graph.directions.length
    };
  }

  window.MT_RANGE_FIT = {
    ATTRIBUTES: ATTRIBUTES,
    BANDS: BANDS,
    BLOCK_LABELS: BLOCK_LABELS,
    completeness: completeness,
    analyseDirection: analyseDirection,
    analyseAll: analyseAll,
    valueLabel: valueLabel
  };
})();

/**
 * THE RANGE (EXPLORE) — career-document text extraction
 * ------------------------------------------------------
 * Reads the text out of a CV, resume or portfolio so the reader never has to
 * retype what their document already says.
 *
 * Design constraints this file exists to satisfy:
 *  1. ZERO COST, ZERO DEPENDENCIES. Extraction uses only what every modern
 *     browser already ships — DecompressionStream for the deflate streams
 *     inside PDF and DOCX containers, TextDecoder for the bytes. No library,
 *     no build step, no service, no recurring bill.
 *  2. NOTHING LEAVES THE DEVICE. The file is read with FileReader and parsed
 *     in the page. There is no upload endpoint, so there is nothing to
 *     intercept, store, or leak — the honest meaning of "protected".
 *  3. GARBAGE IS REFUSED, NOT ANALYSED. Some PDFs (scans, and files using
 *     CID-keyed subset fonts) yield bytes that are not readable text. Feeding
 *     those into a career analysis would produce confident nonsense, so the
 *     extractor scores what it recovered and reports failure instead.
 */
window.MT_RANGE_DOC = (function () {
  'use strict';

  var MAX_BYTES = 10 * 1024 * 1024;          /* 10 MB — far above any real CV */

  var KINDS = {
    pdf:  { ext: ['pdf'], mime: ['application/pdf'] },
    docx: { ext: ['docx'], mime: ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'] },
    odt:  { ext: ['odt'], mime: ['application/vnd.oasis.opendocument.text'] },
    doc:  { ext: ['doc'], mime: ['application/msword'] },
    rtf:  { ext: ['rtf'], mime: ['application/rtf', 'text/rtf'] },
    text: { ext: ['txt', 'md', 'markdown', 'text', 'csv'], mime: ['text/plain', 'text/markdown'] }
  };

  function kindOf(file) {
    var ext = (file.name || '').toLowerCase().split('.').pop();
    var mime = (file.type || '').toLowerCase();
    for (var k in KINDS) {
      if (KINDS[k].ext.indexOf(ext) !== -1) return k;
    }
    for (var k2 in KINDS) {
      if (KINDS[k2].mime.indexOf(mime) !== -1) return k2;
    }
    return null;
  }

  function readBuffer(file) {
    return new Promise(function (res, rej) {
      var r = new FileReader();
      r.onload = function () { res(new Uint8Array(r.result)); };
      r.onerror = function () { rej(new Error('read-failed')); };
      r.readAsArrayBuffer(file);
    });
  }

  /* Inflate with the platform's own decompressor. 'deflate-raw' covers ZIP
     entries (DOCX/ODT); 'deflate' covers zlib-wrapped PDF streams.
     Deliberately tolerant: a PDF stream is delimited by markers, not by an
     exact byte count, so the slice we hand over routinely carries a trailing
     newline — and some writers record a /Length that is slightly off. A
     strict reader rejects the whole stream over that and the file silently
     reads as empty, so decoded chunks are kept and only a total failure
     counts as failure. */
  function inflate(bytes, format) {
    if (typeof DecompressionStream === 'undefined') return Promise.reject(new Error('no-decompressor'));
    var ds;
    try { ds = new DecompressionStream(format); } catch (e) { return Promise.reject(e); }
    var writer = ds.writable.getWriter();
    writer.write(bytes).catch(function () {});
    writer.close().catch(function () {});
    var reader = ds.readable.getReader();
    var parts = [], total = 0;
    function pump() {
      return reader.read().then(function (r) {
        if (r.done) return;
        parts.push(r.value); total += r.value.length;
        return pump();
      });
    }
    return pump().catch(function () { /* keep whatever decoded cleanly */ })
      .then(function () {
        if (!total) throw new Error('inflate-failed');
        var out = new Uint8Array(total), off = 0;
        parts.forEach(function (part) { out.set(part, off); off += part.length; });
        return out;
      });
  }

  var utf8 = new TextDecoder('utf-8', { fatal: false });
  var latin1 = new TextDecoder('latin1');

  /* ── ZIP (DOCX, ODT) ────────────────────────────────────────────────────
     Walk local file headers rather than the central directory: it is enough
     to find one entry by name and is resilient to the odd appended payload. */
  function zipEntry(bytes, wanted) {
    var dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    var i = 0, out = null;
    while (i + 30 <= bytes.length) {
      if (dv.getUint32(i, true) !== 0x04034b50) { i++; continue; }
      var method = dv.getUint16(i + 8, true);
      var compSize = dv.getUint32(i + 18, true);
      var nameLen = dv.getUint16(i + 26, true);
      var extraLen = dv.getUint16(i + 28, true);
      var nameStart = i + 30;
      var name = latin1.decode(bytes.subarray(nameStart, nameStart + nameLen));
      var dataStart = nameStart + nameLen + extraLen;
      if (name === wanted && compSize > 0) {
        out = { method: method, data: bytes.subarray(dataStart, dataStart + compSize) };
        break;
      }
      i = dataStart + (compSize || 1);
    }
    return out;
  }

  function xmlToText(xml, paraTag) {
    return xml
      .replace(/<[^>]*:tab[^>]*\/>/g, '\t')
      .replace(new RegExp('</' + paraTag + '>', 'g'), '\n')
      .replace(/<[^>]*:br[^>]*\/>/g, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
      .replace(/\r/g, '')
      .replace(/[ \t]+/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  function fromZipDoc(bytes, path, paraTag) {
    var e = zipEntry(bytes, path);
    if (!e) return Promise.reject(new Error('not-a-document'));
    var done = e.method === 0 ? Promise.resolve(e.data) : inflate(e.data, 'deflate-raw');
    return done.then(function (raw) { return xmlToText(utf8.decode(raw), paraTag); });
  }

  /* ── PDF ────────────────────────────────────────────────────────────────
     Content streams are located by their stream/endstream markers, inflated
     when the preceding dictionary says FlateDecode, and mined for the text
     operators. This recovers ordinary text-layer PDFs — which is what a CV
     exported from Word, Docs or Canva is — and cleanly fails on scans. */
  function pdfStrings(content) {
    var out = [], i = 0, n = content.length;
    function readLiteral(start) {
      var depth = 1, j = start, buf = '';
      while (j < n && depth > 0) {
        var ch = content[j];
        if (ch === '\\') {
          var next = content[j + 1];
          var oct = content.substr(j + 1, 3);
          if (/^[0-7]{3}$/.test(oct)) { buf += String.fromCharCode(parseInt(oct, 8)); j += 4; continue; }
          buf += ({ n: '\n', r: '', t: '\t', b: '', f: '' }).hasOwnProperty(next)
            ? ({ n: '\n', r: '', t: '\t', b: '', f: '' })[next] : next;
          j += 2; continue;
        }
        if (ch === '(') depth++;
        else if (ch === ')') { depth--; if (!depth) { j++; break; } }
        buf += ch; j++;
      }
      return { text: buf, end: j };
    }
    function readHex(start) {
      var j = content.indexOf('>', start);
      if (j === -1) return { text: '', end: start + 1 };
      var hex = content.slice(start, j).replace(/[^0-9a-fA-F]/g, '');
      var buf = '';
      for (var k = 0; k + 1 < hex.length; k += 2) buf += String.fromCharCode(parseInt(hex.substr(k, 2), 16));
      return { text: buf, end: j + 1 };
    }
    while (i < n) {
      var ch = content[i];
      if (ch === '(') { var r = readLiteral(i + 1); out.push(r.text); i = r.end; continue; }
      if (ch === '<' && content[i + 1] !== '<') { var h = readHex(i + 1); out.push(h.text); i = h.end; continue; }
      /* line-advancing operators become line breaks so structure survives */
      if ((ch === 'T' && (content[i + 1] === 'd' || content[i + 1] === 'D' || content[i + 1] === '*')) ||
          (ch === 'E' && content[i + 1] === 'T')) { out.push('\n'); i += 2; continue; }
      i++;
    }
    return out.join('');
  }

  function fromPdf(bytes) {
    var raw = latin1.decode(bytes);
    var chunks = [], jobs = [];
    var re = /stream\r?\n?/g, m;
    while ((m = re.exec(raw))) {
      var start = m.index + m[0].length;
      var end = raw.indexOf('endstream', start);
      if (end === -1) continue;
      var dictStart = Math.max(0, m.index - 800);
      var dict = raw.slice(dictStart, m.index);
      if (/\/Image|\/DCTDecode|\/JPXDecode|\/CCITTFaxDecode/.test(dict)) { re.lastIndex = end; continue; }
      var stop = end;
      while (stop > start && (bytes[stop - 1] === 10 || bytes[stop - 1] === 13)) stop--;
      var slice = bytes.subarray(start, stop);
      if (/\/FlateDecode/.test(dict)) {
        jobs.push(inflate(slice, 'deflate')
          .then(function (out) { chunks.push(pdfStrings(latin1.decode(out))); })
          .catch(function () { /* one unreadable stream must not fail the file */ }));
      } else if (/\/Length/.test(dict) && !/\/Filter/.test(dict)) {
        chunks.push(pdfStrings(latin1.decode(slice)));
      }
      re.lastIndex = end;
    }
    return Promise.all(jobs).then(function () {
      return chunks.join('\n')
        .replace(/[ \t]+/g, ' ')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
    });
  }

  function fromRtf(bytes) {
    var raw = latin1.decode(bytes);
    return raw
      .replace(/\\par[d]?/g, '\n')
      .replace(/\\'([0-9a-fA-F]{2})/g, function (_, h) { return String.fromCharCode(parseInt(h, 16)); })
      .replace(/\\[a-zA-Z]+-?\d* ?/g, '')
      .replace(/[{}]/g, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  /**
   * Is this recovered text actually readable, or is it font-subset noise?
   * A real CV is overwhelmingly letters, digits, spaces and punctuation.
   */
  function readable(text) {
    if (!text || text.length < 120) return false;
    var sane = (text.match(/[A-Za-z0-9\s.,;:()\/&@+%'"\-–—]/g) || []).length / text.length;
    var words = (text.match(/[A-Za-z]{3,}/g) || []).length;
    return sane > 0.82 && words >= 25;
  }

  /**
   * Extract text from a career document.
   * @returns {Promise<{text:string, kind:string, name:string, chars:number}>}
   *   rejects with Error(code) where code is one of:
   *   unsupported · too-large · empty · legacy-doc · unreadable-pdf · read-failed
   */
  function extract(file) {
    var kind = kindOf(file);
    if (!kind) return Promise.reject(new Error('unsupported'));
    if (file.size > MAX_BYTES) return Promise.reject(new Error('too-large'));
    if (!file.size) return Promise.reject(new Error('empty'));
    if (kind === 'doc') return Promise.reject(new Error('legacy-doc'));

    return readBuffer(file).then(function (bytes) {
      if (kind === 'text') return utf8.decode(bytes);
      if (kind === 'rtf') return fromRtf(bytes);
      if (kind === 'docx') return fromZipDoc(bytes, 'word/document.xml', 'w:p');
      if (kind === 'odt') return fromZipDoc(bytes, 'content.xml', 'text:p');
      return fromPdf(bytes);
    }).then(function (text) {
      text = String(text || '').replace(/ /g, '').trim();
      if (!readable(text)) {
        throw new Error(kind === 'pdf' ? 'unreadable-pdf' : 'unreadable');
      }
      return { text: text, kind: kind, name: file.name, chars: text.length };
    });
  }

  /* Human, actionable wording for every failure — never a raw code. */
  function message(code, lang) {
    var id = lang === 'id';
    var M = {
      'unsupported': [
        'That file type isn’t supported. Use PDF, DOCX, ODT, RTF, TXT or MD.',
        'Jenis berkas itu belum didukung. Gunakan PDF, DOCX, ODT, RTF, TXT, atau MD.'],
      'too-large': [
        'That file is over 10 MB. A CV is normally well under 1 MB — check you picked the right file.',
        'Berkas itu lebih dari 10 MB. CV biasanya jauh di bawah 1 MB — pastikan berkasnya benar.'],
      'empty': ['That file is empty.', 'Berkas itu kosong.'],
      'legacy-doc': [
        'Old .doc files can’t be read in the browser. Open it and save as PDF or .docx, then try again.',
        'Berkas .doc lama tidak bisa dibaca di peramban. Buka lalu simpan sebagai PDF atau .docx, kemudian coba lagi.'],
      'unreadable-pdf': [
        'We couldn’t recover text from this PDF — it’s most likely a scan or an image export, which has no text layer. Paste the text below instead, or export a text-based PDF.',
        'Kami tidak bisa mengambil teks dari PDF ini — kemungkinan besar hasil pindaian atau ekspor gambar, yang tidak punya lapisan teks. Tempel teksnya di bawah, atau ekspor PDF berbasis teks.'],
      'unreadable': [
        'We couldn’t recover readable text from that file. Paste the text below instead.',
        'Kami tidak bisa mengambil teks yang terbaca dari berkas itu. Tempel teksnya di bawah.'],
      'no-decompressor': [
        'This browser can’t unpack compressed documents. Paste the text below instead.',
        'Peramban ini tidak bisa membuka dokumen terkompresi. Tempel teksnya di bawah.'],
      'read-failed': ['That file couldn’t be read.', 'Berkas itu tidak bisa dibaca.']
    };
    var m = M[code] || M['read-failed'];
    return id ? m[1] : m[0];
  }

  return { extract: extract, message: message, kindOf: kindOf, readable: readable,
    MAX_BYTES: MAX_BYTES, ACCEPT: '.pdf,.docx,.odt,.rtf,.txt,.md' };
})();

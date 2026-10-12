#!/usr/bin/env python3
"""
Editorial punctuation: replace spaced em dashes in user-facing copy.

House rule (2026-10): em dashes are avoided. Where a dash joined two
independent clauses the join becomes a semicolon; where it introduced an
appositive, a tag or a short aside it becomes a comma; a parenthetical pair
becomes a pair of commas; a dash after a bold/italic term or a short label
becomes a colon (the one place a semicolon or comma would be ungrammatical);
a title-style "Topic — Subtitle" becomes "Topic: Subtitle".

Usage:
  python3 scripts/lib/dedash.py --check FILE...      report remaining em dashes
  python3 scripts/lib/dedash.py --apply FILE...      rewrite in place
  python3 scripts/lib/dedash.py --demo "text"        show one transformation

Only the spaced form " — " (and the dash at a line/string edge) is touched.
Regex character classes that list the dash (code that *handles* legacy
copy) and comment lines in source files are left alone.
"""
import re, sys, os

EN_SUBJ = r"(?:i|you|we|they|he|she|it|this|that|these|those|there|here|each|every|most|some|none|nothing|everything|everyone|anyone|one|two|three|the|a|an|your|our|their|his|her|its|my|no|what|who|which|how|when|where|why|interviewers?|candidates?|employers?|people|recruiters?|hr|users?|managers?|companies|silence|nobody|somebody|few|many|all|both|either|neither|half|half)"
EN_VERB = r"(?:is|are|was|were|be|been|being|has|have|had|do|does|did|will|would|can|cannot|could|should|may|might|must|need|needs|means|matters|counts|decides|fails|works|keeps|gets|makes|takes|comes|goes|says|asks|reads|writes|shows|tells|wins|loses|ends|starts|stops|wants|knows|thinks|looks|sounds|seems|stays|becomes|turns|puts|leaves|gives|sets|holds|carries|costs|earns|opens|closes|builds|runs|happens|remembers|arrives|belongs|stands|scores|answers|prepares|separates|changes|follows|depends|lives|exists|lies|tends|helps|hurts|proves|compounds|rewards|punishes|survives|travels|decide|answer|stop|start|keep|get|make|take|come|go|say|ask|read|write|show|tell|win|lose|end|prepare|plan|log|replace|compare|send|confirm|verify|ignore|include|avoid|choose|pick|open|close|state|name|use|treat|let|note|check|run|move|hold|bring|leave|give|put|set|carry|count|report|own|fix|prevent|apply|arrive|remember|never|always|usually|often|rarely|still|already|then|otherwise|rehearse|practise|practice|memorise|mine|map|decode|predict|tick|book|arrive|sleep|eat|rotate|record|rate|sign|accept|decline|negotiate|clarify|thank|pause|summarise|invite|disagree|raise|reach|concentrate|concentrates|preview|previews|reduce|reduces|burn|burns|spend|spends|earn|compete|competes|clear|clears|win|wins|teach|teaches|learn|learns|forget|forgets|lose|loses|cost|pay|pays|protect|protects|signal|signals|measure|measures|track|tracks|turn|expect|expects|tend|tends|look|feel|feels|mean|matter|describe|describes|explain|explains|cover|covers|contain|contains|list|lists|tell|tells|allow|allows|require|requires|produce|produces|create|creates|reveal|reveals|test|tests|watch|watches|hear|hears|notice|notices|treat|treats|judge|judges|punish|reward|rewarding|count|counts|weigh|weighs|differ|differs|vary|varies|grow|grows|fall|falls|rise|rises|drop|drops|move|moves|stay|stays|sit|sits|live|lives|hold|holds|hand|hands|offer|offers|refuse|refuses|agree|agrees|see|sees|find|finds|pick|picks|serve|serves|belong|belongs|fit|fits|suit|suits|work|worked|works|read|reads|decide|decides|compare|compares|follow|follows|lead|leads|bring|brings|happen|happens|continue|continues|return|returns|repeat|repeats|begin|begins|finish|finishes|try|tries|want|wants|hope|hopes|plan|plans|prefer|prefers|choose|chooses|carry|carries|save|saves|share|shares|send|sends|receive|receives|miss|misses|beat|beats|collapse|collapses|escalate|escalates|convert|converts|open|opens|close|closes|arrive|arrives|leave|leaves|get|gets|go|goes|come|comes|become|becomes|seem|seems|appear|appears|remain|remains|sound|sounds|look|looks|stand|stands|rest|rests|lie|lies|depend|depends|rely|relies|consist|consists|exist|exists|apply|applies|belong|belongs|happen|happens|mark|marks|set|sets|put|puts|let|lets|make|makes|keep|keeps|take|takes|give|gives|show|shows|run|runs|build|builds|break|breaks|cut|cuts|draw|draws|drive|drives|form|forms|grow|grows|raise|raises|help|helps|hurt|hurts|prove|proves|compound|compounds)"
ID_VERB = r"(?:adalah|akan|bisa|dapat|sudah|belum|tidak|bukan|jangan|harus|perlu|ada|pernah|masih|sedang|jadi|menjadi|membuat|memberi|mengambil|menjawab|menentukan|memutuskan|menyimpan|mengubah|mengirim|menulis|membaca|memakai|menunggu|melihat|meminta|mencari|menemukan|berarti|berhenti|mulai|lihat|tanyakan|catat|simpan|rencanakan|perbaiki|bandingkan|tulis|gunakan|pakai|pilih|hindari|jawab|siapkan|latih|buat|ingat|verifikasi|bidik|bangun|kumpulkan|ganti|tanya|hitung|baca|kirim|ikuti|susun|tentukan|katakan|sebut|sebutkan|jelaskan|tunjukkan|lakukan|berikan|ambil|biarkan|minta|ajukan|akui|utamakan|cek|periksa|mereka|kami|kita|saya|kamu|ia|dia|itu|ini|setiap|semua|kebanyakan|biasanya|sering|selalu|jarang|lalu|maka|kemudian|sebaliknya|tetap|terus|tinggal|datang|pergi|tahu|ingin|mau|butuh|punya|memiliki|dinilai|dibaca|dihitung|disimpan|dipakai|digunakan|terbaca|terjadi|tersedia|terlihat|berlaku|berbeda|bertahan|berjalan|berakhir|berisi|mengalahkan|memisahkan|menunjukkan|menentukan|menjaga|menghilangkan|memenangkan|membutuhkan|menghasilkan|memberi|memulai|mengakhiri|mengajarkan|mengukur|melatih|menghafal|merekam|menilai|menerima|menolak|menandatangani|mengklarifikasi|berterima|menghubungi|menyusun|menyarankan|menanyakan|memperbaiki|menegosiasikan|membangun|mengundang|meringkas|menyebut|menyampaikan)"
CONJ = r"(?:and|or|but|nor|not|yet|so|dan|atau|tapi|tetapi|bukan|melainkan|namun|yakni|yaitu|i\.e\.|e\.g\.)"

SUBJ_RE = re.compile(r"^(?:[“\"‘'(]*)(" + EN_SUBJ + r"|" + ID_VERB + r")\b", re.I)
VERB_RE = re.compile(r"\b(" + EN_VERB + r"|" + ID_VERB + r")\b", re.I)
CONJ_RE = re.compile(r"^(?:[“\"‘'(]*)" + CONJ + r"\b", re.I)
TERM_RE = re.compile(r"</(?:b|i|strong|em)>$")
WORDS = re.compile(r"[^\W\d_]+", re.U)

def nwords(s):
    return len(WORDS.findall(s))

TAGS = re.compile(r"<[^>]+>")
def plain(s):
    return TAGS.sub('', s).replace('&amp;', '&').replace('&nbsp;', ' ')

def is_clause(after):
    """Does the text after the dash read as an independent clause?"""
    head = after.strip()
    n = nwords(head)
    if n < 3:
        return False
    first = head.split(' ', 1)[0]
    if VERB_RE.search(first) and not CONJ_RE.match(head):
        return True                                   # an imperative or an auxiliary opens it
    w4 = ' '.join(head.split(' ')[:4])
    w8 = ' '.join(head.split(' ')[:8])
    if SUBJ_RE.match(head) and VERB_RE.search(w8):
        return True                                   # a subject and a verb
    return n >= 5 and bool(VERB_RE.search(w4))        # a verb early in a longer clause

def title_like(whole):
    w = whole.strip()
    if len(w) > 110 or nwords(w) > 14:
        return False
    if re.search(r"[.!?…]", w):
        return False
    return bool(re.match(r"^[“\"(]?[A-ZÀ-Ý0-9]", w)) or bool(re.match(r"^<(?:b|i|strong|em)>", w))

def join(before, after, whole, L):
    """Pick the punctuation for one ' — ' given its left and right context within the string.
    Decisions read the plain text (tags stripped); the term rule reads the raw text."""
    braw = before.rstrip()
    b, a = plain(before).rstrip(), plain(after).lstrip()
    if not b:
        return ''                                  # a dash opening a line: drop it
    if not a:
        return '.' if not re.search(r"[.!?:;,]$", b) else ''
    # a question or exclamation on the left: the dash is just a breath
    if re.search(r"[?!][”\"’')]*$", b):
        return ' ' + a[0].upper()                  # caller strips the first char of `a`
    # term or label on the left: "<b>Lie</b> — the only failure…" / "Source B — two postings…"
    if TERM_RE.search(braw) or (nwords(b) <= 3 and not re.search(r"[.!?:;]$", b)):
        return ': '
    # a conjunction, a negation or a short tag: ", and three questions…", ", not a win."
    if CONJ_RE.match(a) or nwords(a) <= 4:
        return ', '
    # an independent clause: a semicolon; a long second clause after a long first: a full stop
    if is_clause(a):
        if nwords(a) >= 14 and nwords(b) >= 10 and re.match(r"^[a-zà-ÿ]", a):
            return '. ' + a[0].upper()
        return '; '
    # a title or heading: "Depth — Preparing for the Third Follow-Up"
    if title_like(plain(whole)) and not re.search(r"[.!?]$", b):
        return ': '
    # otherwise an appositive or elaboration: a comma
    return ', '

DASH = re.compile(r"\s+—\s+|^—\s+|\s+—$|—")

def transform(s, lang='en'):
    """Rewrite every spaced em dash in a plain-text string."""
    if '—' not in s:
        return s
    # page titles "Page — Section — Metanoia Labs": middle dots, the site's own separator
    if re.search(r"Metanoia Labs(\s*\(internal\))?\s*(</title>)?\s*$", s) and s.count('—') <= 3 and nwords(s) <= 24:
        return re.sub(r"\s+—\s+", " · ", s)
    # unspaced dash between digits or words: an en dash (ranges) / a plain hyphen
    s = re.sub(r"(?<=\d)—(?=\d)", "–", s)
    # parenthetical pair " — x — " → ", x, "
    def pair(m):
        inner = m.group(1)
        if nwords(inner) <= 14 and not re.search(r"[.!?;]", inner):
            return ', ' + inner.strip() + ', '
        return m.group(0)
    s = re.sub(r"\s+—\s+([^—]{3,160}?)\s+—\s+", pair, s)
    # remaining single dashes, left to right
    out = ''
    rest = s
    while True:
        m = re.search(r"(\s*)—(\s*)", rest)
        if not m:
            out += rest
            break
        before = out + rest[:m.start()]
        after = rest[m.end():]
        if not m.group(1) and not m.group(2) and before and after and before[-1].isalnum() and after[0].isalnum():
            out += rest[:m.start()] + '-'          # a tight dash between words: a hyphen
            rest = after
            continue
        sep = join(before, after, s, lang)
        if (sep.startswith('. ') or sep.startswith(' ')) and len(sep) in (2, 3):
            out = before.rstrip() + sep[:-1]
            rest = after.lstrip()[1:]
            out += sep[-1]
            continue
        if sep == '':
            out = before.rstrip() if not after.strip() else before
            rest = after.lstrip() if before else after.lstrip()
            if before and after.strip():
                out = before.rstrip() + ' '
            continue
        out = before.rstrip() + sep
        rest = after.lstrip()
    return out

# ─── file handling ─────────────────────────────────────────────────────
COMMENT_LINE = re.compile(r"^\s*(/\*|\*|//|<!--|#)")
REGEX_CLASS = re.compile(r"/(?:[^/\\\n]|\\.)*\[[^\]\n]*—[^\]\n]*\](?:[^/\\\n]|\\.)*/[gimsuy]*")   # a regex literal whose character class lists the dash

JS_LIT = re.compile(r"'(?:[^'\\\n]|\\.)*'|\"(?:[^\"\\\n]|\\.)*\"|`(?:[^`\\]|\\.)*`")
ATTR = re.compile(r'(=")([^"]*—[^"]*)(")')
TAG = re.compile(r"<[^>]*>")

def js_line(ln):
    return JS_LIT.sub(lambda m: m.group(0)[0] + transform(m.group(0)[1:-1]) + m.group(0)[-1], ln)

def html_line(ln):
    ln = TAG.sub(lambda t: ATTR.sub(lambda m: m.group(1) + transform(m.group(2)) + m.group(3), t.group(0)), ln)
    return transform(ln) if '—' in ln else ln

def process_text(text, kind):
    lines = text.split('\n')
    out = []
    in_script = in_style = False
    for ln in lines:
        low = ln.lower()
        if kind == 'html':
            if '<script' in low: in_script = True
            if '<style' in low: in_style = True
        if '—' not in ln:
            out.append(ln)
        elif kind in ('js', 'py') and (COMMENT_LINE.match(ln) or REGEX_CLASS.search(ln)):
            out.append(ln)
        elif kind == 'js':
            out.append(js_line(ln))
        elif kind == 'json':
            out.append(js_line(ln))
        elif kind == 'html' and in_style:
            out.append(ln)
        elif kind == 'html' and in_script:
            out.append(ln if (COMMENT_LINE.match(ln) or REGEX_CLASS.search(ln)) else js_line(ln))
        elif kind == 'html':
            out.append(ln if (ln.lstrip().startswith('<!--')) else html_line(ln))
        else:
            out.append(transform(ln))
        if kind == 'html':
            if '</script' in low: in_script = False
            if '</style' in low: in_style = False
    return '\n'.join(out)

def kind_of(path):
    ext = os.path.splitext(path)[1].lower()
    return {'.js': 'js', '.py': 'py', '.html': 'html', '.json': 'json', '.md': 'md', '.css': 'css'}.get(ext, 'txt')

def main():
    if len(sys.argv) < 2:
        print(__doc__); return 2
    mode = sys.argv[1]
    if mode == '--demo':
        print(transform(' '.join(sys.argv[2:]))); return 0
    files = sys.argv[2:]
    total = 0
    for f in files:
        with open(f, encoding='utf-8') as fh:
            t = fh.read()
        n = t.count('—')
        if mode == '--check':
            if n:
                total += n; print(f'{n:6d}  {f}')
            continue
        if mode == '--apply' and n:
            t2 = process_text(t, kind_of(f))
            if t2 != t:
                with open(f, 'w', encoding='utf-8') as fh:
                    fh.write(t2)
            left = t2.count('—')
            total += n - left
            print(f'{n:6d} → {left:4d}  {f}')
    if mode == '--check':
        print(f'{total} em dashes'); return 1 if total else 0
    print(f'{total} replaced'); return 0

if __name__ == '__main__':
    sys.exit(main())

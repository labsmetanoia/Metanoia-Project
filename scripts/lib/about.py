"""
The About page (/pages/about) — authored here, rendered through the shared
page shell so it carries the standard nav, footer, design tokens, bilingual
sweep and full metadata. Run scripts/build-about.py to (re)write
prototype/pages/about.html; the output is committed as a source page.

Editorial rules for this page: plain, honest, unhurried. No achievement
language, no invented advisors, no stock photography. People are named and
pictured only when they have agreed to be.
"""
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import shell  # noqa: E402
from shell import SITE, bi, bi_html  # noqa: E402

PATH = '/pages/about'
TITLE = 'About Us — Metanoia Labs'
DESC = ('Who is building Metanoia, why it exists, where the platform stands today, how it will make money, '
        'and the commitments we publish: data dignity, cited claims, honest outcomes.')
OG = SITE + '/assets/og/generated/about.png'


def sec(num, en, idn, body):
    return (f'<section class="ab" id="s{num}"><p class="kicker">{num} · {bi(en, idn)}</p>{body}</section>')


def p(en, idn):
    return f'<p>{bi(en, idn)}</p>'


def ph(en, idn):
    return f'<p>{bi_html(en, idn)}</p>'


def body():
    origin = (
        '<!-- FOUNDER: this account is drafted from the brand narrative and the founding documents, not from your biography. '
        'Replace or edit it in your own words before launch; nothing here should be published as yours unless it is. -->'
        + p('I did not start Metanoia because I had a product idea. I started it because of a pattern I could not stop seeing, and could not explain away.',
            'Saya tidak memulai Metanoia karena punya ide produk. Saya memulainya karena sebuah pola yang tidak bisa saya berhenti lihat, dan tidak bisa saya sangkal.')
        + p('Capable people, with the degree and the work ethic they were told would be enough, sending out application after application and hearing nothing back. Then concluding, quietly, that the problem was them. It was not them.',
            'Orang-orang yang mampu, dengan gelar dan etos kerja yang katanya sudah cukup, mengirim lamaran demi lamaran dan tidak mendengar apa-apa. Lalu menyimpulkan, diam-diam, bahwa masalahnya ada pada diri mereka. Bukan mereka masalahnya.')
        + p('What they were missing was never talent. It was the things nobody teaches: how screening actually works, what an interviewer is really scoring, which door to try first, what a fair offer looks like, and someone to ask before the interview that counts. The people who had those things usually had them from a family, a senior alumnus, or a consultant they could afford. Everyone else was navigating without the map.',
            'Yang tidak mereka miliki bukanlah bakat, melainkan hal-hal yang tidak diajarkan siapa pun: bagaimana penyaringan sebenarnya bekerja, apa yang benar-benar dinilai pewawancara, pintu mana yang dicoba lebih dulu, seperti apa tawaran yang wajar, dan siapa yang bisa ditanya sebelum wawancara yang menentukan. Orang yang memilikinya biasanya mendapatkannya dari keluarga, alumni senior, atau konsultan yang mampu mereka bayar. Yang lain berjalan tanpa peta.')
        + p('That is the whole of it. The career operating system exists. It is just not distributed fairly. So I began writing it down — first as documents, then as a prototype, now as the platform you are looking at — for the people it was never handed to.',
            'Itulah intinya. Sistem operasi karier itu ada. Hanya saja tidak dibagikan secara adil. Maka saya mulai menuliskannya — mula-mula sebagai dokumen, lalu sebagai prototipe, kini sebagai platform yang sedang kamu lihat — untuk orang-orang yang tidak pernah menerimanya.')
        + '<p class="sig">' + bi('— The founder, Metanoia Labs', '— Pendiri, Metanoia Labs') + '</p>'
    )
    believe = (
        p('The career operating system already exists. Insider knowledge of how hiring works, practice before the attempts that count, honest feedback, warm introductions, and the confidence that comes from all of that — it is real, and it works.',
          'Sistem operasi karier itu sudah ada. Pengetahuan orang dalam tentang cara kerja rekrutmen, latihan sebelum percobaan yang menentukan, umpan balik yang jujur, perkenalan yang hangat, dan kepercayaan diri yang lahir dari semuanya — itu nyata, dan itu berhasil.')
        + p('It is distributed through well-connected families, senior alumni and expensive consultants. Opportunity ends up being a function of access, not capability.',
            'Ia dibagikan lewat keluarga yang berkoneksi luas, alumni senior, dan konsultan yang mahal. Peluang pun menjadi soal akses, bukan kemampuan.')
        + p('We are building it for everyone else. Not a cheaper version of a coaching service, but the infrastructure itself: written down, honest about what it knows and does not know, connected to real employers, and free to start.',
            'Kami membangunnya untuk semua orang lainnya. Bukan versi murah dari layanan coaching, melainkan infrastrukturnya sendiri: dituliskan, jujur tentang apa yang diketahui dan tidak diketahui, terhubung ke pemberi kerja sungguhan, dan gratis untuk memulai.')
        + p('We also believe the platform only works if people can trust it, which is why every claim on it should trace to a source, every score should come with its reasons, and nobody\'s individual data should ever be sold to an employer.',
            'Kami juga percaya platform ini hanya berfungsi jika orang bisa memercayainya. Karena itu setiap klaim di dalamnya harus bisa ditelusuri ke sumbernya, setiap skor harus disertai alasannya, dan data perorangan siapa pun tidak boleh pernah dijual kepada pemberi kerja.')
    )
    team = (
        p('Right now, Metanoia is one person and a growing group of collaborators.',
          'Saat ini, Metanoia adalah satu orang dan sekelompok kolaborator yang terus bertambah.')
        + p('The founder designs and builds the platform, writes the Mind Palace with editorial reviewers, and does the mentoring by hand while the software catches up. Collaborators contribute reviews of hiring processes they have been through, editorial checks on the Indonesian copy, and the occasional argument about what a page should say.',
            'Sang pendiri merancang dan membangun platform, menulis Mind Palace bersama peninjau editorial, dan melakukan pendampingan secara manual sementara perangkat lunaknya menyusul. Para kolaborator menyumbang tinjauan atas proses rekrutmen yang pernah mereka lalui, pemeriksaan editorial atas salinan bahasa Indonesia, dan sesekali perdebatan tentang apa yang seharusnya dikatakan sebuah halaman.')
        + p('Names and photographs appear here only when the people concerned have agreed to be listed, and nobody is listed who has not. There are no advisors on this page because we do not have any yet.',
            'Nama dan foto muncul di sini hanya jika orang yang bersangkutan setuju untuk dicantumkan, dan tidak ada yang dicantumkan tanpa persetujuan. Tidak ada penasihat di halaman ini karena kami memang belum memilikinya.')
        + '<div class="team"><div class="member"><span class="tile lg" style="--tile:#C9A84C" aria-hidden="true">M</span><div><b>'
        + bi('The founder', 'Pendiri') + '</b><br><span class="muted">' + bi('Product, engineering, editorial, mentoring. Named and pictured here once published in their own words.', 'Produk, rekayasa, editorial, pendampingan. Dinamai dan difoto di sini setelah diterbitkan dengan kata-katanya sendiri.') + '</span></div></div></div>'
    )
    where = (
        p('Stage: beta. What you are using is a working prototype of the platform. The courses, the company directory, the assessment and the Mind Palace are real and public; accounts, payments and mentor matching are not built yet, and anything you save is stored in your own browser rather than on a server.',
          'Tahap: beta. Yang sedang kamu gunakan adalah prototipe platform yang berfungsi. Kursus, direktori perusahaan, asesmen, dan Mind Palace sudah nyata dan publik; akun, pembayaran, dan pencocokan mentor belum dibangun, dan apa pun yang kamu simpan tersimpan di perambanmu sendiri, bukan di server.')
        + '<div data-build-status="styled" class="bs-host"></div>'
        + '<p class="muted">' + bi_html('The same list appears on the <a href="/pricing">pricing page</a>. It is one component fed by one file, so the two cannot disagree.',
                                         'Daftar yang sama muncul di <a href="/pricing">halaman harga</a>. Ini satu komponen yang diberi makan oleh satu berkas, jadi keduanya tidak mungkin berbeda.') + '</p>'
    )
    money = (
        p('Indonesia\'s career-services market has earned a certain suspicion, so here is the answer to the question you are probably asking.',
          'Pasar jasa karier di Indonesia telah menuai kecurigaan tertentu, jadi inilah jawaban untuk pertanyaan yang mungkin sedang kamu ajukan.')
        + '<ul>'
        + '<li>' + bi('Beta is free. Basecamp — the Career Map, your readiness score, the Gauntlet guide, your route outline and the community — is free, always. Everything beyond it is Rp 0 while we build.',
                      'Beta gratis. Basecamp — Career Map, skor kesiapanmu, panduan Gauntlet, kerangka rutemu, dan komunitas — gratis, selamanya. Semua di luar itu Rp 0 selama kami membangun.') + '</li>'
        + '<li>' + bi('Paid editions come at commercial launch: Student, Fresh Graduate, Early Professional and Mature Professional memberships, priced to sit far below a bootcamp and visibly above free.',
                      'Edisi berbayar hadir saat peluncuran komersial: keanggotaan Mahasiswa, Fresh Graduate, Profesional Muda, dan Profesional Berpengalaman, dengan harga jauh di bawah bootcamp dan jelas di atas gratis.') + '</li>'
        + '<li>' + bi('We will tell you before anything changes. Nothing you use for free today will start charging you without notice, and early-access pricing is locked for as long as you stay subscribed.',
                      'Kami akan memberi tahu sebelum ada yang berubah. Tidak ada yang kamu pakai gratis hari ini yang akan tiba-tiba menagih tanpa pemberitahuan, dan harga akses awal dikunci selama kamu tetap berlangganan.') + '</li>'
        + '<li>' + bi('We take no commission from employers for placing you. Enterprise programmes pay for readiness programmes and aggregate, anonymised reporting — never for access to you.',
                      'Kami tidak mengambil komisi dari pemberi kerja karena menempatkanmu. Program Enterprise membayar untuk program kesiapan dan pelaporan agregat yang dianonimkan — tidak pernah untuk akses kepadamu.') + '</li>'
        + '</ul>'
        + ph('The full breakdown, with what is live today and what is not, is on the <a href="/pricing">pricing page</a>.',
             'Rincian lengkapnya, dengan apa yang sudah tersedia hari ini dan apa yang belum, ada di <a href="/pricing">halaman harga</a>.')
    )
    commitments = (
        '<div class="grid">'
        + '<a class="card" href="/legal/data-dignity"><h3>Data Dignity</h3><p class="muted" style="color:var(--t2)">' + bi('We never sell your data and never provide individual scores to employers. Aggregate, anonymised insight only, above a minimum cohort size.', 'Kami tidak pernah menjual datamu dan tidak pernah memberikan skor perorangan kepada pemberi kerja. Hanya wawasan agregat yang dianonimkan, di atas ukuran kohort minimum.') + '</p><span class="muted">' + bi('Read the commitments →', 'Baca komitmennya →') + '</span></a>'
        + '<a class="card" href="/mind-palace/"><h3>' + bi('The citation standard', 'Standar kutipan') + '</h3><p class="muted" style="color:var(--t2)">' + bi('Numbers require a named source or our own database; hiring-process detail is published only where it can be cited; everything else is written as judgement and reads like judgement.', 'Angka memerlukan sumber bernama atau basis data kami sendiri; rincian proses rekrutmen hanya diterbitkan bila bisa dikutip; selebihnya ditulis sebagai pertimbangan dan dibaca sebagai pertimbangan.') + '</p><span class="muted">' + bi('See it in the Mind Palace →', 'Lihat di Mind Palace →') + '</span></a>'
        + '<div class="card"><h3>' + bi('Outcome honesty', 'Kejujuran hasil') + '</h3><p class="muted" style="color:var(--t2)">' + bi('We publish outcome data honestly, including when it disappoints us. We have none to publish yet — this platform is in beta and has not placed anyone. When we do, it goes here, with its method.', 'Kami menerbitkan data hasil dengan jujur, termasuk saat hasilnya mengecewakan kami. Kami belum punya yang bisa diterbitkan — platform ini masih beta dan belum menempatkan siapa pun. Saat sudah ada, hasilnya ditaruh di sini, beserta metodenya.') + '</p></div>'
        + '</div>'
    )
    return (
        f'<p class="kicker">Metanoia Labs</p><h1>{bi("About Us", "Tentang Kami")}</h1>'
        f'<p class="sub">{bi("Who is building this, why, where it stands, how it will make money, and what we have committed to.", "Siapa yang membangun ini, mengapa, di mana posisinya, bagaimana ia akan menghasilkan uang, dan apa yang telah kami janjikan.")}</p>'
        + sec('01', 'The origin', 'Asal mula', origin)
        + sec('02', 'What we believe', 'Yang kami yakini', believe)
        + sec('03', 'The team', 'Tim', team)
        + sec('04', 'Where we are', 'Di mana kami sekarang', where)
        + sec('05', 'How we make money', 'Bagaimana kami menghasilkan uang', money)
        + sec('06', 'Our commitments', 'Komitmen kami', commitments)
        + '<p class="row" style="margin-top:34px;gap:12px"><a class="btn primary" href="/career-map-assessment">' + bi('Take the free Career Map →', 'Ambil Career Map gratis →') + '</a><a class="btn" href="mailto:hello@metanoialabs.net">hello@metanoialabs.net</a></p>'
    )


def render():
    jsonld = [{'@context': 'https://schema.org', '@type': 'AboutPage', 'name': TITLE, 'url': SITE + PATH, 'description': DESC,
               'about': {'@type': 'Organization', 'name': 'Metanoia Labs', 'url': SITE + '/', 'email': 'hello@metanoialabs.net'}}]
    return shell.render({
        'title': TITLE, 'desc': DESC, 'path': PATH, 'og_image': OG, 'body': body(), 'jsonld': jsonld,
        'crumbs': [('Home', 'Beranda', '/'), ('About Us', 'Tentang Kami', None)],
        'extra_css': '.ab{max-width:72ch;margin-top:40px}.ab p{font-size:16.5px;line-height:1.75;color:var(--t2);margin:0 0 14px}.ab ul{padding-left:20px;font-size:16px;line-height:1.7;color:var(--t2)}.ab li{margin-bottom:10px}'
                     '.ab .sig{color:var(--t3);font-style:italic}.team{margin-top:18px}.member{display:flex;gap:14px;align-items:center;border:1px solid var(--line);border-radius:14px;padding:14px 16px}'
                     '.bs-host{margin:18px 0 10px}.ab .grid{max-width:none}.ab .card h3{margin-bottom:6px}.ab .card p{font-size:14px;line-height:1.6;margin-bottom:8px}',
        'extra_js': '<script src="/data/build-status.js"></script><script src="/js/build-status.js"></script>',
    })

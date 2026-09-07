#!/usr/bin/env python3
"""
Build the static, crawlable layer of the Metanoia prototype.

Everything this script writes is a build output (git-ignored) and is
regenerated on every deploy by .github/workflows/deploy-pages.yml before the
site is uploaded to GitHub Pages. Run it locally before serving the prototype:

    python3 scripts/build-site.py            # build everything
    python3 scripts/build-site.py --no-og    # skip the Open Graph cards (faster)

Outputs
  prototype/products/the-map/range/…        The Range company directory:
                                            index, facet pages, pagination
                                            pages and one page per company.
  prototype/data/range/q/…                  Paginated JSON (20 records a page)
                                            for every geography × industry ×
                                            function facet combination.
  prototype/data/range/names.json           Compact name index for the
                                            client-side name filter.
  prototype/mind-palace/…                   Pre-rendered Mind Palace articles,
                                            category pages, index and feed.xml.
  prototype/data/search-index.json          Site search index (Cmd/Ctrl+K).
  prototype/sitemap.xml                     Generated from data/routes.json
                                            plus every generated URL.
  prototype/assets/og/generated/…           1200×630 Open Graph cards.

Sources of truth are the existing data registries (data/range/*.js,
data/mindpalace.js, data/routes.json); this script never edits them.
"""
import argparse
import datetime as dt
import hashlib
import json
import math
import os
import re
import shutil
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
PROTO = os.path.join(ROOT, 'prototype')
sys.path.insert(0, os.path.join(HERE, 'lib'))
import shell  # noqa: E402
from shell import SITE, bi, bi_html, esc, truncate_desc  # noqa: E402

PAGE = 20
RANGE_BASE = '/products/the-map/range/'
MP_BASE = '/mind-palace/'
OG_DIR = os.path.join(PROTO, 'assets', 'og', 'generated')
GENERATED = [
    os.path.join(PROTO, 'products', 'the-map', 'range'),
    os.path.join(PROTO, 'data', 'range', 'q'),
    os.path.join(PROTO, 'data', 'range', 'names.json'),
    os.path.join(PROTO, 'mind-palace'),
    os.path.join(PROTO, 'data', 'search-index.json'),
    os.path.join(PROTO, 'sitemap.xml'),
    os.path.join(PROTO, 'demo.html'),
]

TM_EN = ('Company names and logos are the trademarks of their respective owners, shown here only to identify those companies. '
         'Metanoia Labs is not affiliated with, endorsed by, or a partner of any company listed. Hiring-process detail is published '
         'only where a source exists; everything else is labelled as our reading of what is typical for the sector.')
TM_ID = ('Nama dan logo perusahaan adalah merek dagang pemiliknya masing-masing, ditampilkan di sini semata untuk mengidentifikasi perusahaan tersebut. '
         'Metanoia Labs tidak berafiliasi dengan, tidak didukung oleh, dan bukan mitra dari perusahaan mana pun yang terdaftar. Rincian proses rekrutmen '
         'hanya diterbitkan bila ada sumbernya; selebihnya diberi label sebagai pembacaan kami atas apa yang umum di sektor tersebut.')

FN_SHORT = {  # short chip labels, mirrors the app's split(' ')[0] behaviour but readable
    'engineering': ('Software', 'Perangkat lunak'), 'data': ('Data', 'Data'), 'product': ('Product', 'Produk'),
    'design': ('Design', 'Desain'), 'marketing': ('Marketing', 'Pemasaran'), 'finance': ('Finance', 'Keuangan'),
    'operations': ('Operations', 'Operasi'), 'commercial': ('Commercial', 'Komersial'), 'people': ('People', 'SDM'),
    'risk': ('Risk', 'Risiko'), 'strategy': ('Strategy', 'Strategi'), 'trainee': ('Trainee', 'Trainee'),
}
TILE_COLOURS = ['#C9A84C', '#7BA5C4', '#5FB884', '#D9A05B', '#B08CC9', '#5FA8A0', '#E0B36A', '#8FB3D9', '#9CC49A', '#C98C8C']


# ─────────────────────────────── helpers ───────────────────────────────

def node_json(script):
    out = subprocess.check_output(['node', os.path.join(HERE, 'lib', script)], cwd=ROOT)
    return json.loads(out)


def write(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)


def write_json(path, obj):
    write(path, json.dumps(obj, ensure_ascii=False, separators=(',', ':')))


def git_date(relpath):
    try:
        out = subprocess.check_output(['git', 'log', '-1', '--format=%cs', '--', relpath], cwd=ROOT, stderr=subprocess.DEVNULL).decode().strip()
        if out:
            return out
    except Exception:
        pass
    return dt.date.today().isoformat()


def L(pair, lang='en'):
    if pair is None:
        return ''
    if isinstance(pair, dict):
        return pair.get(lang) or pair.get('en') or ''
    return str(pair)


def monogram(name):
    parts = re.sub(r'\(.*?\)', '', name).strip().split()
    m = (parts[0][0] + (parts[1][0] if len(parts) > 1 else '')).upper() if parts else '?'
    return m


def tile_colour(key):
    h = int(hashlib.md5(key.encode()).hexdigest(), 16)
    return TILE_COLOURS[h % len(TILE_COLOURS)]


def hex_rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def clean_generated():
    for p in GENERATED + [OG_DIR]:
        if os.path.isdir(p):
            shutil.rmtree(p)
        elif os.path.exists(p):
            os.remove(p)


# ─────────────────────────────── The Range ───────────────────────────────

class Range:
    def __init__(self, data, make_og):
        self.d = data
        self.make_og = make_og
        self.ind = {i['id']: i for i in data['industries']}
        self.fn_roles = data['fn_roles']
        self.fn_meta = data['fn_meta']
        self.cc = data['country_names']
        self.programmes = {p['id']: p for p in data['programmes']}
        self.sourced = {c['id']: c for c in data['sourced_companies']}
        cos = data['companies']
        for c in cos:
            c['documented'] = any(r['proc'] == 'documented' for r in c['roles'])
            c['slug'] = c['id']
        # deterministic order: documented processes first, then name
        cos.sort(key=lambda c: (not c['documented'], c['name'].lower()))
        self.cos = cos
        self.by_id = {c['id']: c for c in cos}
        self.urls = []          # (path, lastmod) for the sitemap
        self.data_date = git_date('prototype/data/range/companies-db.js')

    # ---- labels ----
    def country(self, c, lang='en'):
        if c['geo'] == 'id' or c['country'] == 'id':
            return 'Indonesia'
        n = self.cc.get(c['country'])
        if not n:
            return 'International' if lang == 'en' else 'Internasional'
        return re.sub(r'^the ', '', n['en']) if lang == 'en' else n['id']

    def ind_name(self, c, lang='en'):
        return L(self.ind[c['industry_id']]['name'], lang)

    def fn_label(self, fn, lang='en'):
        return L(self.fn_roles[fn]['role'], lang)

    # ---- card record shared by inline HTML and JSON pages ----
    def record(self, c):
        return {
            'id': c['id'], 'n': c['name'], 'ind': c['industry_id'], 'geo': c['geo'], 'cc': c['country'],
            'd': {'en': L(c['desc'], 'en')[:140], 'id': L(c['desc'], 'id')[:140]},
            'f': c['fns'], 'doc': 1 if c['documented'] else 0, 'b': 1 if c['bumn'] else 0,
        }

    def card_html(self, c, lazy=False):
        colour = tile_colour(c['id'])
        desc_en = L(c['desc'], 'en')
        desc_id = L(c['desc'], 'id')
        cut = lambda s: (s[:110] + '…') if len(s) > 110 else s
        chips = ''.join(f'<span class="chip">{esc(FN_SHORT[f][0])}</span>' if True else '' for f in c['fns'][:4])
        chips = ''.join(bi(FN_SHORT[f][0], FN_SHORT[f][1], 'span', 'chip') for f in c['fns'][:4])
        if len(c['fns']) > 4:
            chips += f'<span class="chip">+{len(c["fns"]) - 4}</span>'
        prov = (bi('✓ documented process', '✓ proses terdokumentasi', 'span', 'prov v') if c['documented']
                else bi('~ typical process', '~ proses umum', 'span', 'prov i'))
        return (f'<a class="card co" href="{RANGE_BASE}{c["slug"]}/">'
                f'<div class="row" style="align-items:center;gap:12px;flex-wrap:nowrap"><span class="tile" style="--tile:{colour}">{esc(monogram(c["name"]))}</span>'
                f'<span style="min-width:0"><b style="font-size:14.5px;display:block;line-height:1.3">{esc(c["name"])}</b>'
                f'<span class="muted">{bi(self.ind_name(c), self.ind_name(c, "id"))} · {bi(self.country(c), self.country(c, "id"))}</span></span></div>'
                f'<p class="muted" style="font-size:12.5px;color:var(--t2);margin:10px 0 10px">{bi(cut(desc_en), cut(desc_id))}</p>'
                f'<div class="chips">{chips}</div>'
                f'<div class="row" style="margin-top:10px;font-size:12px">{prov}<span class="muted">{len(c["roles"])} {bi("roles", "peran")}</span>'
                f'<span style="margin-left:auto;color:var(--explore);font-weight:800">{bi("Explore →", "Jelajahi →")}</span></div></a>')

    # ---- facet plumbing ----
    def filtered(self, geo, ind, fn):
        return [c for c in self.cos if (not geo or c['geo'] == geo) and (not ind or c['industry_id'] == ind) and (not fn or fn in c['fns'])]

    def key(self, geo, ind, fn):
        return f'{geo or "all"}-{ind or "all"}-{fn or "all"}'

    def write_json_pages(self):
        geos = ['', 'id', 'intl']
        inds = [''] + list(self.ind.keys())
        fns = [''] + list(self.fn_roles.keys())
        n = 0
        for g in geos:
            for i in inds:
                for f in fns:
                    rows = self.filtered(g, i, f)
                    if not rows:
                        continue
                    pages = max(1, math.ceil(len(rows) / PAGE))
                    for p in range(1, pages + 1):
                        chunk = rows[(p - 1) * PAGE:p * PAGE]
                        write_json(os.path.join(PROTO, 'data', 'range', 'q', self.key(g, i, f), f'p{p}.json'),
                                   {'total': len(rows), 'page': p, 'pages': pages, 'items': [self.record(c) for c in chunk]})
                        n += 1
        write_json(os.path.join(PROTO, 'data', 'range', 'names.json'),
                   [{'id': c['id'], 'n': c['name'], 'ind': c['industry_id'], 'geo': c['geo'], 'cc': c['country'], 'k': len(c['roles']), 'doc': 1 if c['documented'] else 0} for c in self.cos])
        return n

    # ---- directory (index / facet / pagination) pages ----
    INDEX_JS = r"""
(function(){
  var FN={FN_SHORT_JSON};var IND={IND_JSON};var CC={CC_JSON};
  var BASE='{RANGE_BASE}';var PAGE={PAGE};
  var st={STATE_JSON};
  var grid=document.getElementById('grid'),more=document.getElementById('more'),count=document.getElementById('count'),status=document.getElementById('status');
  var names=null,pending=null;
  function lang(){return (window.mtLang&&window.mtLang())||'en';}
  function t(en,id){return lang()==='id'?id:en;}
  function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  function bi(en,id,cls){return '<span'+(cls?' class="'+cls+'"':'')+' data-en="'+esc(en)+'" data-id="'+esc(id)+'">'+esc(lang()==='id'?id:en)+'</span>';}
  function country(r){if(r.geo==='id'||r.cc==='id')return ['Indonesia','Indonesia'];var n=CC[r.cc];return n?[n.en.replace(/^the /,''),n.id]:['International','Internasional'];}
  function mono(n){var p=n.replace(/\(.*?\)/g,'').trim().split(/\s+/);return ((p[0]||'?')[0]+(p[1]?p[1][0]:'')).toUpperCase();}
  var COLS=['#C9A84C','#7BA5C4','#5FB884','#D9A05B','#B08CC9','#5FA8A0','#E0B36A','#8FB3D9','#9CC49A','#C98C8C'];
  function colour(id){var h=0;for(var i=0;i<id.length;i++)h=(h*31+id.charCodeAt(i))>>>0;return COLS[h%COLS.length];}
  function card(r){
    var c=country(r);var ind=IND[r.ind]||{en:r.ind,id:r.ind};var d=r.d||{en:'',id:''};
    var cut=function(s){return s.length>110?s.slice(0,110)+'…':s;};
    var chips=r.f.slice(0,4).map(function(f){return bi(FN[f][0],FN[f][1],'chip');}).join('')+(r.f.length>4?'<span class="chip">+'+(r.f.length-4)+'</span>':'');
    return '<a class="card co" href="'+BASE+r.id+'/"><div class="row" style="align-items:center;gap:12px;flex-wrap:nowrap"><span class="tile" style="--tile:'+colour(r.id)+'">'+esc(mono(r.n))+'</span>'+
      '<span style="min-width:0"><b style="font-size:14.5px;display:block;line-height:1.3">'+esc(r.n)+'</b><span class="muted">'+bi(ind.en,ind.id)+' · '+bi(c[0],c[1])+'</span></span></div>'+
      (d.en?'<p class="muted" style="font-size:12.5px;color:var(--t2);margin:10px 0 10px">'+bi(cut(d.en),cut(d.id))+'</p>':'<p class="muted" style="font-size:12.5px;margin:10px 0 10px">'+bi('Open the company page for the overview.','Buka halaman perusahaan untuk ikhtisarnya.')+'</p>')+
      '<div class="chips">'+chips+'</div><div class="row" style="margin-top:10px;font-size:12px">'+(r.doc?bi('✓ documented process','✓ proses terdokumentasi','prov v'):bi('~ typical process','~ proses umum','prov i'))+
      '<span class="muted">'+(r.k||r.f.length)+' '+bi('roles','peran')+'</span><span style="margin-left:auto;color:var(--explore);font-weight:800">'+bi('Explore →','Jelajahi →')+'</span></div></a>';
  }
  function skeletons(n){var s='';for(var i=0;i<n;i++)s+='<div class="card skc" aria-hidden="true"><div class="row" style="gap:12px;flex-wrap:nowrap"><span class="sk" style="width:44px;height:44px;border-radius:11px"></span><span style="flex:1"><span class="sk" style="display:block;height:14px;width:70%;margin-bottom:8px"></span><span class="sk" style="display:block;height:11px;width:45%"></span></span></div><span class="sk" style="display:block;height:12px;margin:12px 0 6px"></span><span class="sk" style="display:block;height:12px;width:80%"></span><div class="chips" style="margin-top:12px"><span class="sk" style="width:64px;height:24px;border-radius:999px"></span><span class="sk" style="width:52px;height:24px;border-radius:999px"></span><span class="sk" style="width:70px;height:24px;border-radius:999px"></span></div></div>';return s;}
  function key(){return (st.geo||'all')+'-'+(st.ind||'all')+'-'+(st.fn||'all');}
  function setStatus(en,id){status.innerHTML=en?bi(en,id):'';}
  function load(page,append){
    var k=key();var url='/data/range/q/'+k+'/p'+page+'.json';
    if(!append){grid.innerHTML=skeletons(6);}else{grid.insertAdjacentHTML('beforeend',skeletons(3));}
    var pg=document.getElementById('pager');if(pg)pg.hidden=true;var sh=document.getElementById('shown');if(sh)sh.hidden=true;
    more.disabled=true;setStatus('Loading companies…','Memuat perusahaan…');
    var mine=pending=url;
    fetch(url).then(function(r){if(!r.ok)throw new Error(r.status);return r.json();}).then(function(j){
      if(pending!==mine)return;
      var sk=grid.querySelectorAll('.skc');for(var i=0;i<sk.length;i++)sk[i].remove();
      grid.insertAdjacentHTML('beforeend',j.items.map(card).join(''));
      st.page=j.page;st.pages=j.pages;st.total=j.total;
      count.innerHTML=j.total+' '+bi('companies','perusahaan');
      more.disabled=false;more.hidden=j.page>=j.pages;
      more.innerHTML=bi('Show more','Tampilkan lebih banyak')+' · '+(j.total-j.page*PAGE)+' '+bi('remaining','tersisa');
      setStatus('','');
    }).catch(function(){
      var sk=grid.querySelectorAll('.skc');for(var i=0;i<sk.length;i++)sk[i].remove();
      if(!grid.children.length)grid.innerHTML='<div class="note">'+bi('No companies match this combination yet.','Belum ada perusahaan yang cocok dengan kombinasi ini.')+'</div>';
      count.innerHTML='';more.hidden=true;setStatus('','');
    });
  }
  function sync(){
    var q=[];if(st.geo)q.push('geo='+st.geo);if(st.ind)q.push('industry='+st.ind);if(st.fn)q.push('function='+st.fn);
    try{history.replaceState(null,'',location.pathname+(q.length?'?'+q.join('&'):''));}catch(e){}
    var pretty=document.getElementById('pager');if(pretty)pretty.hidden=true;
  }
  function apply(){sync();load(1,false);}
  var sel=function(id){return document.getElementById(id);};
  if(sel('fInd')){sel('fInd').value=st.ind||'';sel('fInd').addEventListener('change',function(){st.ind=this.value;apply();});}
  if(sel('fFn')){sel('fFn').value=st.fn||'';sel('fFn').addEventListener('change',function(){st.fn=this.value;apply();});}
  var geoBtns=document.querySelectorAll('[data-geo]');for(var i=0;i<geoBtns.length;i++)geoBtns[i].addEventListener('click',function(e){e.preventDefault();st.geo=this.getAttribute('data-geo');for(var j=0;j<geoBtns.length;j++)geoBtns[j].classList.toggle('gold',geoBtns[j]===this);apply();});
  more.addEventListener('click',function(){load((st.page||1)+1,true);});
  var q=sel('fQ');
  if(q){q.addEventListener('input',function(){
    var v=this.value.trim().toLowerCase();
    if(!v){more.hidden=(st.page||1)>=(st.pages||1);apply();return;}
    more.hidden=true;var pg=document.getElementById('pager');if(pg)pg.hidden=true;var sh=document.getElementById('shown');if(sh)sh.hidden=true;
    var run=function(){var hits=names.filter(function(r){return r.n.toLowerCase().indexOf(v)!==-1&&(!st.geo||r.geo===st.geo)&&(!st.ind||r.ind===st.ind);}).slice(0,60);
      grid.innerHTML=hits.length?hits.map(function(r){return card({id:r.id,n:r.n,ind:r.ind,geo:r.geo,cc:r.cc,f:[],k:r.k,doc:r.doc,d:null});}).join(''):'<div class="note">'+bi('No company by that name in the directory yet.','Belum ada perusahaan dengan nama itu di direktori.')+'</div>';
      count.innerHTML=hits.length+' '+bi('matches','cocok');};
    if(names){run();}else{grid.innerHTML=skeletons(3);fetch('/data/range/names.json').then(function(r){return r.json();}).then(function(j){names=j;run();});}
  });}
  // A query string means a facet combination with no static page of its own: render it now.
  var params=new URLSearchParams(location.search);
  if(params.has('geo')||params.has('industry')||params.has('function')){
    st.geo=params.get('geo')||'';st.ind=params.get('industry')||'';st.fn=params.get('function')||'';
    if(sel('fInd'))sel('fInd').value=st.ind;if(sel('fFn'))sel('fFn').value=st.fn;
    for(var g=0;g<geoBtns.length;g++)geoBtns[g].classList.toggle('gold',geoBtns[g].getAttribute('data-geo')===st.geo);
    load(1,false);
  }
  document.addEventListener('mt:lang',function(){var s=document.getElementById('fInd');if(s){for(var i=0;i<s.options.length;i++){var o=s.options[i];if(o.dataset.en)o.textContent=lang()==='id'?o.dataset.id:o.dataset.en;}}var f=document.getElementById('fFn');if(f){for(var k=0;k<f.options.length;k++){var oo=f.options[k];if(oo.dataset.en)oo.textContent=lang()==='id'?oo.dataset.id:oo.dataset.en;}}});
  document.dispatchEvent(new CustomEvent('mt:lang',{detail:lang()}));
})();
"""

    def directory_page(self, geo, ind, fn, page, rows):
        total = len(rows)
        pages = max(1, math.ceil(total / PAGE))
        chunk = rows[(page - 1) * PAGE:page * PAGE]
        # path
        if ind and not fn:
            base = f'{RANGE_BASE}industry/{ind}/' if geo != 'intl' else f'{RANGE_BASE}international/industry/{ind}/'
        elif fn and not ind:
            base = f'{RANGE_BASE}function/{fn}/' if geo != 'intl' else f'{RANGE_BASE}international/function/{fn}/'
        elif geo == 'intl':
            base = f'{RANGE_BASE}international/'
        else:
            base = RANGE_BASE
        path = base if page == 1 else f'{base}page/{page}/'
        # copy
        scope_en = 'International' if geo == 'intl' else 'Indonesia'
        scope_id = 'Internasional' if geo == 'intl' else 'Indonesia'
        if ind:
            what_en, what_id = self.ind_name({'industry_id': ind}), self.ind_name({'industry_id': ind}, 'id')
        elif fn:
            what_en, what_id = self.fn_label(fn), self.fn_label(fn, 'id')
        else:
            what_en, what_id = 'All companies', 'Semua perusahaan'
        n_all = len(self.cos)
        n_roles = sum(len(c['roles']) for c in self.cos)
        title = f'{what_en} · {scope_en} — The Range company directory — Metanoia Labs' if (ind or fn or geo == 'intl') else 'The Range — company directory of 675 real employers — Metanoia Labs'
        if page > 1:
            title = f'Page {page} · ' + title
        desc = (f'{total} {what_en.lower() if not fn else what_en.lower()} employers hiring in {scope_en}, with the roles you can enter and how each one typically hires. '
                f'Part of The Range, the Metanoia Labs directory of {n_all} real companies.')
        if not (ind or fn or geo == 'intl'):
            desc = (f'{n_all} real companies, {n_roles} explorable roles, honest hiring-process detail: browse Indonesian and international employers by industry and function, '
                    'and see which ones publish their process.')
        # controls
        ind_opts = '<option value="">All industries</option>' + ''.join(
            f'<option value="{i}" data-en="{esc(L(v["name"]))}" data-id="{esc(L(v["name"], "id"))}"{" selected" if i == ind else ""}>{esc(L(v["name"]))}</option>' for i, v in self.ind.items())
        fn_opts = '<option value="">All functions</option>' + ''.join(
            f'<option value="{f}" data-en="{esc(L(v["role"]))}" data-id="{esc(L(v["role"], "id"))}"{" selected" if f == fn else ""}>{esc(L(v["role"]))}</option>' for f, v in self.fn_roles.items())
        geo_id_href = RANGE_BASE + (f'industry/{ind}/' if ind else f'function/{fn}/' if fn else '')
        geo_intl_href = RANGE_BASE + 'international/' + (f'industry/{ind}/' if ind else f'function/{fn}/' if fn else '')
        controls = (
            '<div class="row" style="margin:22px 0 14px">'
            f'<a class="btn{" gold" if geo != "intl" else ""}" data-geo="id" href="{geo_id_href}" style="{"background:rgba(201,168,76,.14)" if geo != "intl" else ""}">{bi("Indonesia only", "Hanya Indonesia")}</a>'
            f'<a class="btn{" gold" if geo == "intl" else ""}" data-geo="intl" href="{geo_intl_href}" style="{"background:rgba(201,168,76,.14)" if geo == "intl" else ""}">{bi("International", "Internasional")}</a>'
            '</div>'
            '<div class="row" style="margin-bottom:16px">'
            f'<select id="fInd" class="sel" aria-label="Industry">{ind_opts}</select>'
            f'<select id="fFn" class="sel" aria-label="Function">{fn_opts}</select>'
            '<input id="fQ" class="sel" type="search" autocomplete="off" data-ph-en="Filter by name…" data-ph-id="Saring nama…" placeholder="Filter by name…" aria-label="Filter by company name" style="min-width:180px">'
            '</div>')
        # crawlable facet nav
        facet_nav = ('<nav aria-label="Browse by industry" style="margin-top:8px"><p class="micro" style="margin-bottom:8px">' + bi('Browse by industry', 'Jelajahi per industri') + '</p><div class="chips">' +
                     ''.join(f'<a class="chip link" href="{RANGE_BASE}{"international/" if geo == "intl" else ""}industry/{i}/">{bi(L(v["name"]), L(v["name"], "id"))} · {len(self.filtered(geo or "id", i, ""))}</a>' for i, v in self.ind.items()) +
                     '</div><p class="micro" style="margin:16px 0 8px">' + bi('Browse by function', 'Jelajahi per fungsi') + '</p><div class="chips">' +
                     ''.join(f'<a class="chip link" href="{RANGE_BASE}{"international/" if geo == "intl" else ""}function/{f}/">{bi(L(v["role"]), L(v["role"], "id"))} · {len(self.filtered(geo or "id", "", f))}</a>' for f, v in self.fn_roles.items()) +
                     '</div></nav>')
        pager = ''
        if pages > 1:
            prev = (base if page == 2 else f'{base}page/{page - 1}/') if page > 1 else None
            nxt = f'{base}page/{page + 1}/' if page < pages else None
            pager = ('<nav id="pager" class="row" aria-label="Pagination" style="justify-content:center;margin-top:22px;gap:14px">' +
                     (f'<a class="btn" href="{prev}" rel="prev">← {bi("Previous", "Sebelumnya")}</a>' if prev else '') +
                     f'<span class="muted">{bi("Page", "Halaman")} {page} / {pages}</span>' +
                     (f'<a class="btn" href="{nxt}" rel="next">{bi("Next", "Berikutnya")} →</a>' if nxt else '') + '</nav>')
        shown_to = min(page * PAGE, total)
        body = (
            f'<p class="kicker">{bi("The Map · The Range (Explore)", "The Map · The Range (Jelajah)")}</p>'
            f'<h1>{bi(what_en + " · " + scope_en, what_id + " · " + scope_id) if (ind or fn or geo == "intl") else bi("The Range — company directory", "The Range — direktori perusahaan")}</h1>'
            f'<p class="sub">{bi(f"{n_all} real companies, {n_roles} explorable roles, and hiring-process detail published only where a source exists. Browse freely — no account needed. Add your identity in The Map for eligibility signals.", f"{n_all} perusahaan nyata, {n_roles} peran yang bisa dijelajahi, dan rincian proses rekrutmen yang hanya diterbitkan bila ada sumbernya. Jelajahi dengan bebas — tanpa akun. Tambahkan identitasmu di The Map untuk sinyal kelayakan.")}</p>'
            + controls +
            f'<p class="row" style="margin-bottom:12px;font-size:13px"><span id="count" class="muted">{total} {bi("companies", "perusahaan")}</span><span id="status" class="muted" aria-live="polite"></span>'
            f'<span id="shown" class="muted" style="margin-left:auto">{bi(f"Showing 1–{shown_to}", f"Menampilkan 1–{shown_to}")}</span></p>'
            f'<div class="grid" id="grid">{"".join(self.card_html(c) for c in chunk)}</div>'
            f'<div style="text-align:center;margin-top:20px"><button class="btn" id="more" type="button"{" hidden" if page >= pages else ""}>{bi("Show more", "Tampilkan lebih banyak")} · {max(0, total - shown_to)} {bi("remaining", "tersisa")}</button></div>'
            + pager +
            '<div class="note" style="margin-top:30px">' + bi_html(
                'Want eligibility signals against your own profile? Open <a href="/products/the-map/#/explore" style="color:var(--gold-b)">The Range inside The Map</a> — it reads the identity you build there and shows where you would stand for each role. Everything stays on your device.',
                'Ingin sinyal kelayakan terhadap profilmu sendiri? Buka <a href="/products/the-map/#/explore" style="color:var(--gold-b)">The Range di dalam The Map</a> — ia membaca identitas yang kamu bangun di sana dan menunjukkan posisimu untuk tiap peran. Semua tetap di perangkatmu.', 'p') + '</div>'
            + facet_nav +
            f'<p class="tm">{bi(TM_EN, TM_ID)}</p>'
        )
        state = {'geo': geo or 'id', 'ind': ind or '', 'fn': fn or '', 'page': page, 'pages': pages, 'total': total}
        js = (self.INDEX_JS.replace('{FN_SHORT_JSON}', json.dumps({k: list(v) for k, v in FN_SHORT.items()}, ensure_ascii=False))
              .replace('{IND_JSON}', json.dumps({k: v['name'] for k, v in self.ind.items()}, ensure_ascii=False))
              .replace('{CC_JSON}', json.dumps(self.cc, ensure_ascii=False))
              .replace('{RANGE_BASE}', RANGE_BASE).replace('{PAGE}', str(PAGE))
              .replace('{STATE_JSON}', json.dumps(state)))
        crumbs = [('Home', 'Beranda', '/'), ('The Map', 'The Map', '/products/the-map/'), ('The Range', 'The Range', RANGE_BASE if path != RANGE_BASE else None)]
        if path != RANGE_BASE:
            crumbs.append((what_en if (ind or fn) else scope_en, what_id if (ind or fn) else scope_id, None))
        jsonld = [{'@context': 'https://schema.org', '@type': 'CollectionPage', 'name': title, 'url': SITE + path, 'description': truncate_desc(desc),
                   'isPartOf': {'@type': 'WebSite', 'name': 'Metanoia Labs', 'url': SITE + '/'}}]
        html = shell.render({
            'title': title, 'desc': desc, 'path': path, 'og_image': SITE + '/assets/og/generated/range-directory.png',
            'crumbs': crumbs, 'body': body, 'jsonld': jsonld,
            'extra_css': '.sel{background:var(--panel);color:var(--t);border:1px solid var(--line);border-radius:10px;padding:10px 12px;font:inherit;font-size:13.5px;min-height:44px}.sel:focus{outline:none;border-color:var(--line-h)}.btn.gold{background:rgba(201,168,76,.14)}',
            'extra_js': f'<script>{js}</script>',
        })
        write(os.path.join(PROTO, path.lstrip('/'), 'index.html'), html)
        self.urls.append((path, self.data_date, 0.8 if page == 1 else 0.4))

    def write_directory(self):
        n = 0
        combos = [('id', '', ''), ('intl', '', '')]
        combos += [(g, i, '') for g in ('id', 'intl') for i in self.ind.keys()]
        combos += [(g, '', f) for g in ('id', 'intl') for f in self.fn_roles.keys()]
        for geo, ind, fn in combos:
            rows = self.filtered(geo, ind, fn)
            if not rows:
                continue
            pages = max(1, math.ceil(len(rows) / PAGE))
            for p in range(1, pages + 1):
                self.directory_page(geo, ind, fn, p, rows)
                n += 1
        return n

    # ---- company pages ----
    def company_page(self, c):
        colour = tile_colour(c['id'])
        ind_en, ind_id = self.ind_name(c), self.ind_name(c, 'id')
        co_en, co_id = self.country(c), self.country(c, 'id')
        desc_en, desc_id = L(c['desc'], 'en'), L(c['desc'], 'id')
        path = f'{RANGE_BASE}{c["slug"]}/'
        title = f'{c["name"]} — roles, hiring process and eligibility — The Range — Metanoia Labs'
        n_roles = len(c['roles'])
        meta_desc = (f'{c["name"]}: {desc_en.rstrip(".")}. {n_roles} explorable role{"s" if n_roles != 1 else ""} in {ind_en.lower()} ({co_en}), '
                     f'how they {"hire, with a sourced, documented process" if c["documented"] else "typically hire"}, and the preparation that maps to each stage.')
        areas = ''.join(bi(re.sub(r' roles| track', '', self.fn_label(f)), re.sub(r'Peran |Jalur ', '', self.fn_label(f, 'id')), 'span', 'chip') for f in c['fns'])
        # roles
        roles_html = ''
        for r in c['roles']:
            m = self.fn_meta.get(r['fn'], {})
            prog = self.programmes.get(r['prog']) if r.get('prog') else None
            documented = r['proc'] == 'documented'
            resp = ''.join(f'<li>{bi(L(x), L(x, "id"))}</li>' for x in (m.get('resp') or [])[:3])
            skills = ''.join(bi(L(x), L(x, 'id'), 'span', 'chip') for x in (m.get('skills') or [])[:4])
            prog_html = ''
            if prog:
                src = prog.get('source_url')
                prog_html = ('<div class="note" style="margin-top:10px">' +
                             f'<b>{bi(L(prog["name"]), L(prog["name"], "id"))}</b><br>' +
                             (bi(L(prog.get("length")), L(prog.get("length"), "id")) + '<br>' if prog.get('length') else '') +
                             bi(L(prog.get("desc")), L(prog.get("desc"), "id")) +
                             (f'<br><span class="muted">{bi(L(prog.get("window")), L(prog.get("window"), "id"))}</span>' if prog.get('window') else '') +
                             (f'<br><a href="{esc(src)}" rel="noopener nofollow" target="_blank" style="color:var(--gold-b);font-size:12.5px">{bi("Source ↗", "Sumber ↗")}</a>' if src else '') + '</div>')
            roles_html += (
                '<article class="card" style="margin-bottom:12px">'
                f'<div class="row" style="justify-content:space-between"><h3 style="margin:0">{bi(L(r["role"]), L(r["role"], "id"))}</h3>'
                + (bi('✓ documented process', '✓ proses terdokumentasi', 'span', 'prov v') if documented else bi('~ typical process shown', '~ proses umum ditampilkan', 'span', 'prov i')) + '</div>'
                + (f'<p class="muted" style="margin:6px 0 10px;color:var(--t2)">{bi(L(m.get("profile")), L(m.get("profile"), "id"))}</p>' if m.get('profile') else '')
                + (f'<p class="micro" style="margin-bottom:6px">{bi("What the work is", "Apa pekerjaannya")}</p><ul style="padding-left:18px;font-size:13.5px;color:var(--t2);margin-bottom:10px">{resp}</ul>' if resp else '')
                + (f'<p class="micro" style="margin-bottom:6px">{bi("What gets tested", "Apa yang diuji")}</p><div class="chips">{skills}</div>' if skills else '')
                + (f'<p class="muted" style="margin-top:8px">{bi(L(r["hours"]), L(r["hours"], "id"))}</p>' if r.get('hours') else '')
                + prog_html +
                f'<p style="margin-top:12px"><a class="btn" href="/products/the-map/#/opp/{esc(r["id"])}">{bi("See where you would stand →", "Lihat posisimu →")}</a></p>'
                '</article>')
        # hiring process
        tpl = self.d['typical'].get(c['proc'])
        proc_html = ''
        prep_html = ''
        if tpl:
            stages = ''.join(f'<li>{bi(L(self.d["stage_names"][s]), L(self.d["stage_names"][s], "id"))}</li>' for s in tpl['stages'])
            lead = (bi('✓ A sourced, documented process exists for this company — open the marked role above for the stage-by-stage breakdown. The list below is the sector-typical shape for comparison.',
                       '✓ Proses terdokumentasi yang bersumber tersedia untuk perusahaan ini — buka peran bertanda di atas untuk rincian per tahap. Daftar di bawah adalah bentuk umum sektor sebagai pembanding.', 'p', 'prov v')
                    if c['documented'] else
                    bi_html(f'~ {esc(L(tpl["label"]))} — <b>our reading, not their published process</b>.', f'~ {esc(L(tpl["label"], "id"))} — <b>pembacaan kami, bukan proses resmi mereka</b>.', 'p', 'prov i'))
            proc_html = (f'<h2>{bi("How they typically hire", "Cara mereka biasanya merekrut")}</h2><div class="card">{lead}'
                         f'<ol style="padding-left:20px;margin-top:10px;font-size:14px;line-height:1.9">{stages}</ol>'
                         f'<p class="muted" style="margin-top:8px">{bi("Open any role above for what each stage assesses, common failure points, and where you would stand.", "Buka peran mana pun di atas untuk melihat apa yang dinilai tiap tahap, titik kegagalan umum, dan posisimu.")}</p></div>')
            seen, rows = set(), ''
            for s in tpl['stages']:
                mt = self.d['stage_types'].get(s)
                if mt and mt.get('pillar') and (mt['pillar'], L(mt['module'])) not in seen:
                    seen.add((mt['pillar'], L(mt['module'])))
                    pillar = 'The Pack' if mt['pillar'] == 'the-pack' else 'The Rope'
                    rows += f'<a class="chip link gold" href="/products/{mt["pillar"]}/">{pillar} · {bi(L(mt["module"]), L(mt["module"], "id"))} →</a>'
            if rows:
                prep_html = (f'<h2>{bi("Preparation that maps to this company", "Persiapan yang terpetakan ke perusahaan ini")}</h2><div class="card">'
                             f'<p class="muted" style="margin-bottom:10px">{bi("Derived from the hiring stages above — each module prepares a specific stage.", "Diturunkan dari tahap rekrutmen di atas — tiap modul menyiapkan satu tahap spesifik.")}</p><div class="chips">{rows}</div></div>')
        unavailable = ''
        if not c['documented']:
            unavailable = ('<div class="note" style="margin-top:22px"><b>' + bi('Not yet available for this company', 'Belum tersedia untuk perusahaan ini') + '</b><br>' +
                           bi_html('A sourced hiring process · published programme names · sourced eligibility criteria. We only publish what we can cite, so these stay empty until we can. Been through their process? <a href="/help" style="color:var(--gold-b)">Tell us what happened →</a>',
                                   'Proses rekrutmen bersumber · nama program terpublikasi · kriteria kelayakan bersumber. Kami hanya menerbitkan yang bisa dikutip, jadi bagian ini kosong sampai kami bisa. Pernah melewati proses mereka? <a href="/help" style="color:var(--gold-b)">Ceritakan pengalamanmu →</a>') + '</div>')
        # provenance
        src_en = {'official': 'official company careers site', 'directory': 'company directory listing', 'press': 'press coverage'}.get(c.get('source_type') or '', c.get('source_type') or 'company website')
        src_id = {'official': 'situs karier resmi perusahaan', 'directory': 'daftar direktori perusahaan', 'press': 'liputan pers'}.get(c.get('source_type') or '', c.get('source_type') or 'situs web perusahaan')
        prov = (f'<p class="muted" style="margin-top:22px">{bi("Source type", "Jenis sumber")}: {bi(src_en, src_id)}' +
                (f' · {bi("last reviewed", "terakhir ditinjau")} {esc(c["last_reviewed"])}' if c.get('last_reviewed') else '') + '</p>')
        # related
        related = [x for x in self.cos if x['industry_id'] == c['industry_id'] and x['geo'] == c['geo'] and x['id'] != c['id']][:6]
        related_html = ''
        if related:
            related_html = (f'<h2>{bi("More " + ind_en.lower() + " employers · " + co_en, "Pemberi kerja " + ind_id.lower() + " lainnya · " + co_id)}</h2>'
                            f'<div class="grid">{"".join(self.card_html(x) for x in related)}</div>'
                            f'<p style="margin-top:14px"><a class="btn" href="{RANGE_BASE}{"international/" if c["geo"] == "intl" else ""}industry/{c["industry_id"]}/">{bi("All " + ind_en.lower() + " companies →", "Semua perusahaan " + ind_id.lower() + " →")}</a></p>')
        website = c.get('website') or ''
        body = (
            f'<p class="kicker">{bi("The Range · " + ind_en, "The Range · " + ind_id)}</p>'
            f'<div class="row" style="gap:16px;align-items:center;margin:10px 0 8px;flex-wrap:nowrap"><span class="tile lg" style="--tile:{colour}">{esc(monogram(c["name"]))}</span>'
            f'<div style="min-width:0"><h1 style="margin:0">{esc(c["name"])}</h1><div class="chips" style="margin-top:8px">{bi(ind_en, ind_id, "span", "chip gold")}{bi(co_en, co_id, "span", "chip")}'
            + (bi('State-owned (BUMN)', 'BUMN', 'span', 'chip') if c['bumn'] else '') + '</div></div></div>'
            f'<p class="sub" style="margin-top:14px">{bi(desc_en, desc_id)}</p>'
            + (f'<p class="muted" style="margin-top:6px"><a href="{esc(website)}" target="_blank" rel="noopener nofollow" style="color:var(--explore)">{esc(website.replace("https://", "").replace("http://", "").rstrip("/"))} ↗</a></p>' if website else '')
            + f'<h2>{bi("Business areas you can enter", "Area bisnis yang bisa kamu masuki")}</h2><div class="chips">{areas}</div>'
            + f'<h2>{bi("Roles you can explore here", "Peran yang bisa kamu jelajahi di sini")} · {n_roles}</h2>{roles_html}'
            + proc_html + prep_html + unavailable + prov + related_html
            + f'<p class="tm">{bi(TM_EN, TM_ID)}</p>'
        )
        crumbs = [('Home', 'Beranda', '/'), ('The Map', 'The Map', '/products/the-map/'), ('The Range', 'The Range', RANGE_BASE), (c['name'], c['name'], None)]
        og = SITE + f'/assets/og/generated/range/{c["slug"]}.png'
        jsonld = [
            {'@context': 'https://schema.org', '@type': 'WebPage', 'name': title, 'url': SITE + path, 'description': truncate_desc(meta_desc),
             'about': {'@type': 'Organization', 'name': c['name'], **({'url': website} if website else {})},
             'isPartOf': {'@type': 'WebSite', 'name': 'Metanoia Labs', 'url': SITE + '/'},
             **({'dateModified': c['last_reviewed']} if c.get('last_reviewed') else {})},
            {'@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [
                {'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': SITE + '/'},
                {'@type': 'ListItem', 'position': 2, 'name': 'The Map', 'item': SITE + '/products/the-map/'},
                {'@type': 'ListItem', 'position': 3, 'name': 'The Range', 'item': SITE + RANGE_BASE},
                {'@type': 'ListItem', 'position': 4, 'name': c['name'], 'item': SITE + path}]},
        ]
        html = shell.render({'title': title, 'desc': meta_desc, 'path': path, 'og_image': og, 'crumbs': crumbs, 'body': body, 'jsonld': jsonld})
        write(os.path.join(PROTO, path.lstrip('/'), 'index.html'), html)
        self.urls.append((path, c.get('last_reviewed') or self.data_date, 0.6))
        if self.make_og:
            import og as ogmod
            ogmod.card(os.path.join(OG_DIR, 'range', f'{c["slug"]}.png'), f'The Range · {ind_en}', c['name'],
                       f'{co_en} · {n_roles} explorable role{"s" if n_roles != 1 else ""} · ' + ('documented hiring process' if c['documented'] else 'typical hiring process'),
                       tile=(monogram(c['name']), hex_rgb(colour)))

    def build(self):
        n_json = self.write_json_pages()
        n_dir = self.write_directory()
        for c in self.cos:
            self.company_page(c)
        if self.make_og:
            import og as ogmod
            ogmod.card(os.path.join(OG_DIR, 'range-directory.png'), 'The Map · The Range', 'The Range — company directory',
                       f'{len(self.cos)} real companies · honest eligibility · hiring processes published only where sourced')
        return n_json, n_dir, len(self.cos)


# ─────────────────────────────── Mind Palace ───────────────────────────────

NEED_SLUGS = {'understand': 'understand-my-career', 'hired': 'get-hired', 'better': 'become-better', 'market': 'understand-the-market'}


class MindPalace:
    def __init__(self, data, range_data, make_og):
        self.d = data
        self.make_og = make_og
        self.topics = {t['id']: t for t in data['topics']}
        self.arts = sorted(data['articles'], key=lambda a: a['date'], reverse=True)
        self.by_slug = {a['slug']: a for a in self.arts}
        self.range = range_data
        self.urls = []

    def fdate(self, s, lang='en'):
        y, m, d = s.split('-')
        months_en = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        months_id = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
        return f'{int(d)} {(months_id if lang == "id" else months_en)[int(m) - 1]} {y}'

    def img_url(self, a):
        return '/' + a['img'].replace('../', '') if a.get('img') else ''

    def kicker(self, a):
        fmt = self.d['formats'].get(a['format'], {'en': a['format'], 'id': a['format']})
        tp = self.topics[a['topic']]
        return f'<p class="kicker" style="color:{esc(tp["accent"])}">{bi(L(fmt), L(fmt, "id"))} · {bi(L(tp["name"]), L(tp["name"], "id"))}</p>'

    def card(self, a):
        img = self.img_url(a)
        return (f'<a class="card" href="{MP_BASE}{a["slug"]}/">' +
                (f'<img src="{esc(img)}" alt="" loading="lazy" decoding="async" width="640" height="360" style="aspect-ratio:16/9;object-fit:cover;border-radius:10px;margin-bottom:12px">' if img else '') +
                self.kicker(a) + f'<h3 style="font-size:17px;line-height:1.3;margin-top:6px">{bi(L(a["title"]), L(a["title"], "id"))}</h3>'
                f'<p class="muted" style="color:var(--t2);font-size:13.5px;margin:6px 0 10px">{bi(L(a["dek"]), L(a["dek"], "id"))}</p>'
                f'<p class="muted">{bi(self.fdate(a["date"]), self.fdate(a["date"], "id"))} · {a["minutes"]} {bi("min read", "menit baca")}</p></a>')

    def live_chart(self):
        """Static rendering of the 'db-live' chart: industry counts from the Range export."""
        cos = self.range['companies']
        ind = {i['id']: i for i in self.range['industries']}
        counts = {}
        for c in cos:
            counts[c['industry_id']] = counts.get(c['industry_id'], 0) + 1
        rows = sorted(counts.items(), key=lambda kv: -kv[1])
        mx = rows[0][1] if rows else 1
        bars = ''.join(
            f'<div class="row" style="gap:10px;margin:6px 0;flex-wrap:nowrap"><span style="width:46%;font-size:13px">{bi(L(ind[k]["name"]), L(ind[k]["name"], "id"))}</span>'
            f'<span style="flex:1;height:10px;background:rgba(255,255,255,.06);border-radius:6px;overflow:hidden"><span style="display:block;height:100%;width:{round(v / mx * 100)}%;background:var(--gold)"></span></span>'
            f'<b style="width:36px;text-align:right;font-size:13px">{v}</b></div>' for k, v in rows)
        return (f'<div class="card"><p class="micro" style="margin-bottom:10px">{bi("Companies per industry in The Range", "Perusahaan per industri di The Range")} · {len(cos)}</p>{bars}'
                f'<p class="muted" style="margin-top:10px">{bi("Computed at build time from Metanoia’s own curated database (data/range/companies-db.js). Not a market statistic.", "Dihitung saat build dari basis data kurasi milik Metanoia (data/range/companies-db.js). Bukan statistik pasar.")}</p></div>')

    def article_page(self, a):
        tp = self.topics[a['topic']]
        path = f'{MP_BASE}{a["slug"]}/'
        title_en, title_id = L(a['title']), L(a['title'], 'id')
        title = f'{title_en} — Mind Palace — Metanoia Labs'
        desc = L(a['dek'])
        img = self.img_url(a)
        stages = ''.join(bi(L(self.d['stages'][s]), L(self.d['stages'][s], 'id'), 'span', 'chip') for s in a.get('stages', []))
        what = ''.join(f'<p>{bi(L(p), L(p, "id"))}</p>' for p in a.get('what', []))
        means = ''
        if a.get('means'):
            means = (f'<h2>{bi("What this means for you", "Apa artinya bagimu")}</h2><div class="card">' +
                     ''.join(f'<div class="row" style="align-items:flex-start;gap:12px;padding:8px 0;border-bottom:1px solid var(--line)"><b style="min-width:150px;font-size:13px;color:var(--gold-b)">{bi(L(self.d["stages"][s]), L(self.d["stages"][s], "id"))}</b><span style="font-size:14px;color:var(--t2)">{bi(L(a["means"][s]), L(a["means"][s], "id"))}</span></div>'
                             for s in self.d['stages'].keys() if a['means'].get(s)) + '</div>')
        acts = ''.join(f'<li>{bi(L(p), L(p, "id"))}</li>' for p in a.get('act', []))
        tools = ''
        if a.get('tools'):
            names = {'the-map': 'The Map · The Range (Explore)', 'the-pack': 'The Pack', 'the-rope': 'The Rope', 'the-route': 'The Route', 'the-compass': 'The Compass'}
            tools = (f'<h2>{bi("Do it with the pillars", "Kerjakan bersama pilar")}</h2>' +
                     ''.join(f'<a class="card" style="margin-bottom:10px" href="/products/{esc(x["pillar"])}/"><b>{esc(names.get(x["pillar"], x["pillar"]))}</b><br><span class="muted" style="color:var(--t2)">{bi(L(x["why"]), L(x["why"], "id"))}</span></a>' for x in a['tools']))
        sources = ''
        for s in a.get('sources', []):
            if s.get('url'):
                sources += f'<div><a href="{esc(s["url"])}" target="_blank" rel="noopener" style="color:var(--gold-b)">{esc(s.get("label") or s["url"])} ↗</a></div>'
            elif s.get('note'):
                sources += f'<div>{bi(L(s["note"]), L(s["note"], "id"))}</div>'
        chart = self.live_chart() if a.get('chart') == 'db-live' else ''
        related = [x for x in self.arts if x['topic'] == a['topic'] and x['slug'] != a['slug']][:3]
        need_ids = [n['id'] for n in self.d['needs'] if a['topic'] in n['topics']]
        need = next((n for n in self.d['needs'] if n['id'] == need_ids[0]), None) if need_ids else None
        body = (
            self.kicker(a) +
            f'<h1>{bi(title_en, title_id)}</h1>'
            f'<p class="sub" style="font-size:17px">{bi(L(a["dek"]), L(a["dek"], "id"))}</p>'
            f'<p class="muted" style="margin:14px 0 18px">{bi(L(a["author"]), L(a["author"], "id"))} · {bi(self.fdate(a["date"]), self.fdate(a["date"], "id"))} · {a["minutes"]} {bi("min", "mnt")}'
            + (f' · {bi("Reviewed", "Ditinjau")} {bi(self.fdate(a["reviewed"]), self.fdate(a["reviewed"], "id"))}' if a.get('reviewed') and a['reviewed'] != a['date'] else '') + '</p>'
            + (f'<img src="{esc(img)}" alt="{esc(title_en)}" width="1600" height="900" decoding="async" fetchpriority="high" style="aspect-ratio:16/9;object-fit:cover;border-radius:14px;margin-bottom:26px">' if img else '')
            + '<div class="prose">'
            f'<h2>{bi("What is happening", "Apa yang terjadi")}</h2>{what}'
            f'<h2>{bi("Why it matters", "Mengapa penting")}</h2><div class="note">{bi(L(a["why"]), L(a["why"], "id"))}</div>'
            + (f'<h2>{bi("What the data says", "Apa kata data")}</h2>{chart}' if chart else '')
            + means +
            f'<h2>{bi("What to do", "Apa yang harus dilakukan")}</h2><ol class="acts">{acts}</ol>'
            + tools +
            f'<h2>{bi("Sources & provenance", "Sumber & asal data")}</h2><div class="card" style="font-size:13.5px;color:var(--t2)">{sources or bi("Editorial judgement; no external statistics are claimed.", "Pertimbangan editorial; tidak ada statistik eksternal yang diklaim.")}</div>'
            f'<h2>{bi("Written for", "Ditulis untuk")}</h2><div class="chips">{stages}</div>'
            '</div>'
            + (f'<h2>{bi("More in ", "Lainnya di ")}{bi(L(tp["name"]), L(tp["name"], "id"))}</h2><div class="grid">{"".join(self.card(r) for r in related)}</div>' if related else '')
            + '<p class="row" style="margin-top:26px;gap:12px">'
            + (f'<a class="btn" href="{MP_BASE}{NEED_SLUGS[need["id"]]}/">← {bi(L(need["q"]), L(need["q"], "id"))}</a>' if need else '')
            + f'<a class="btn" href="/pages/mind-palace#/topic/{esc(tp["id"])}">{bi("Browse and filter in Mind Palace →", "Jelajahi dan saring di Mind Palace →")}</a></p>'
        )
        crumbs = [('Home', 'Beranda', '/'), ('Mind Palace', 'Mind Palace', MP_BASE), (L(tp['name']), L(tp['name'], 'id'), f'{MP_BASE}{NEED_SLUGS[need["id"]]}/' if need else None), (title_en, title_id, None)]
        og = SITE + f'/assets/og/generated/mind-palace/{a["slug"]}.png'
        jsonld = [{'@context': 'https://schema.org', '@type': 'Article', 'headline': title_en, 'description': desc,
                   'datePublished': a['date'], 'dateModified': a.get('reviewed') or a['date'],
                   'author': {'@type': 'Organization', 'name': L(a['author'])}, 'publisher': {'@type': 'Organization', 'name': 'Metanoia Labs', 'url': SITE + '/'},
                   'image': [og] + ([SITE + img] if img else []), 'mainEntityOfPage': SITE + path, 'inLanguage': ['en', 'id'], 'url': SITE + path},
                  {'@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [
                      {'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': SITE + '/'},
                      {'@type': 'ListItem', 'position': 2, 'name': 'Mind Palace', 'item': SITE + MP_BASE},
                      {'@type': 'ListItem', 'position': 3, 'name': title_en, 'item': SITE + path}]}]
        html = shell.render({'title': title, 'desc': desc, 'path': path, 'og_image': og, 'crumbs': crumbs, 'body': body, 'jsonld': jsonld, 'feed': True,
                             'og_type': 'article', 'published': a['date'], 'modified': a.get('reviewed') or a['date'],
                             'extra_css': '.prose{max-width:72ch}.prose p{font-size:16.5px;color:var(--t2);margin:0 0 14px;line-height:1.7}.acts{padding-left:22px;font-size:16px;color:var(--t2);line-height:1.7}.acts li{margin-bottom:10px}'})
        write(os.path.join(PROTO, path.lstrip('/'), 'index.html'), html)
        self.urls.append((path, a.get('reviewed') or a['date'], 0.7))
        if self.make_og:
            import og as ogmod
            fmt = self.d['formats'].get(a['format'], {'en': a['format']})
            ogmod.card(os.path.join(OG_DIR, 'mind-palace', f'{a["slug"]}.png'), f'Mind Palace · {L(fmt)}', title_en, L(a['dek']), accent=hex_rgb(tp['accent']))

    def category_page(self, need):
        slug = NEED_SLUGS[need['id']]
        path = f'{MP_BASE}{slug}/'
        arts = [a for a in self.arts if a['topic'] in need['topics']]
        q_en, q_id = L(need['q']), L(need['q'], 'id')
        title = f'{q_en} — Mind Palace — Metanoia Labs'
        desc = f'{L(need["sub"]).rstrip(".")}. {len(arts)} pieces from the Metanoia Labs Mind Palace: actionable, honestly sourced, and wired into the products that execute on them.'
        topics = ''.join(f'<a class="chip link gold" href="/pages/mind-palace#/topic/{esc(t)}">{bi(L(self.topics[t]["name"]), L(self.topics[t]["name"], "id"))} →</a>' for t in need['topics'])
        body = (f'<p class="kicker">{bi("Mind Palace · Your question", "Mind Palace · Pertanyaanmu")}</p><h1>{bi(q_en, q_id)}</h1>'
                f'<p class="sub">{bi(L(need["sub"]), L(need["sub"], "id"))}</p><div class="chips" style="margin:16px 0 24px">{topics}</div>'
                f'<div class="grid">{"".join(self.card(a) for a in arts)}</div>'
                f'<p style="margin-top:26px"><a class="btn" href="/pages/mind-palace#/need/{esc(need["id"])}">{bi("Browse and filter in Mind Palace →", "Jelajahi dan saring di Mind Palace →")}</a></p>')
        crumbs = [('Home', 'Beranda', '/'), ('Mind Palace', 'Mind Palace', MP_BASE), (q_en, q_id, None)]
        og = SITE + f'/assets/og/generated/mind-palace/category-{slug}.png'
        jsonld = [{'@context': 'https://schema.org', '@type': 'CollectionPage', 'name': title, 'url': SITE + path, 'description': truncate_desc(desc)}]
        write(os.path.join(PROTO, path.lstrip('/'), 'index.html'), shell.render({'title': title, 'desc': desc, 'path': path, 'og_image': og, 'crumbs': crumbs, 'body': body, 'jsonld': jsonld, 'feed': True}))
        self.urls.append((path, max(a['date'] for a in arts) if arts else dt.date.today().isoformat(), 0.6))
        if self.make_og:
            import og as ogmod
            ogmod.card(os.path.join(OG_DIR, 'mind-palace', f'category-{slug}.png'), 'Mind Palace', q_en, L(need['sub']))

    def index_page(self):
        path = MP_BASE
        title = 'Mind Palace — articles, playbooks and signals — Metanoia Labs'
        desc = 'Every Mind Palace piece at its own address: playbooks, explainers, signals and perspectives on Indonesian graduate hiring, skills, industries and professional life.'
        needs = ''.join(f'<a class="card" href="{MP_BASE}{NEED_SLUGS[n["id"]]}/"><h3>{bi(L(n["q"]), L(n["q"], "id"))}</h3><p class="muted" style="color:var(--t2)">{bi(L(n["sub"]), L(n["sub"], "id"))}</p></a>' for n in self.d['needs'])
        body = (f'<p class="kicker">Mind Palace</p><h1>{bi("Know what’s out there, and what to do about it.", "Tahu apa yang ada di luar sana, dan apa yang harus dilakukan.")}</h1>'
                f'<p class="sub">{bi("Practical professional intelligence for every stage of the climb — written to be acted on, honest about its sources, and connected to the tools that turn knowing into doing.", "Kecerdasan profesional praktis untuk setiap tahap pendakian — ditulis untuk ditindaklanjuti, jujur soal sumbernya, dan terhubung ke alat yang mengubah tahu menjadi bertindak.")}</p>'
                f'<h2>{bi("Start from your question", "Mulai dari pertanyaanmu")}</h2><div class="grid">{needs}</div>'
                f'<h2>{bi("All pieces", "Semua tulisan")} · {len(self.arts)}</h2><div class="grid">{"".join(self.card(a) for a in self.arts)}</div>'
                f'<p class="row" style="margin-top:26px;gap:12px"><a class="btn primary" href="/pages/mind-palace">{bi("Open the Mind Palace hub →", "Buka hub Mind Palace →")}</a><a class="btn" href="{MP_BASE}feed.xml">RSS</a></p>')
        crumbs = [('Home', 'Beranda', '/'), ('Mind Palace', 'Mind Palace', None)]
        jsonld = [{'@context': 'https://schema.org', '@type': 'CollectionPage', 'name': title, 'url': SITE + path, 'description': truncate_desc(desc)}]
        write(os.path.join(PROTO, 'mind-palace', 'index.html'), shell.render({'title': title, 'desc': desc, 'path': path, 'og_image': SITE + '/assets/og/generated/mind-palace/index.png', 'crumbs': crumbs, 'body': body, 'jsonld': jsonld, 'feed': True}))
        self.urls.append((path, max(a['date'] for a in self.arts), 0.8))
        if self.make_og:
            import og as ogmod
            ogmod.card(os.path.join(OG_DIR, 'mind-palace', 'index.png'), 'Metanoia Labs', 'Mind Palace', "Know what's out there, and what to do about it.")

    def feed(self):
        def rfc(d):
            return dt.datetime.strptime(d, '%Y-%m-%d').replace(tzinfo=dt.timezone.utc).strftime('%a, %d %b %Y 00:00:00 +0000')
        items = ''
        for a in self.arts:
            link = SITE + MP_BASE + a['slug'] + '/'
            items += (f'<item><title>{esc(L(a["title"]))}</title><link>{link}</link><guid isPermaLink="true">{link}</guid>'
                      f'<pubDate>{rfc(a["date"])}</pubDate><description>{esc(L(a["dek"]))}</description>'
                      f'<category>{esc(L(self.topics[a["topic"]]["name"]))}</category></item>\n')
        xml = ('<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>'
               f'<title>Mind Palace — Metanoia Labs</title><link>{SITE}{MP_BASE}</link>'
               '<description>Practical professional intelligence for every stage of the climb: careers, skills, recruitment and the Indonesian job market, written to be acted on.</description>'
               f'<language>en</language><atom:link href="{SITE}{MP_BASE}feed.xml" rel="self" type="application/rss+xml"/>\n{items}</channel></rss>\n')
        write(os.path.join(PROTO, 'mind-palace', 'feed.xml'), xml)

    def build(self):
        for a in self.arts:
            self.article_page(a)
        for n in self.d['needs']:
            self.category_page(n)
        self.index_page()
        self.feed()
        return len(self.arts), len(self.d['needs'])


# ─────────────────────────────── sitemap · search ───────────────────────────────

def build_sitemap(manifest, extra):
    entries = []
    for r in manifest['routes']:
        if r.get('exclude'):
            continue
        entries.append((r['path'], git_date(r['file']), r.get('priority', 0.5)))
    entries += extra
    seen = set()
    out = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">']
    for path, lastmod, prio in entries:
        if path in seen:
            continue
        seen.add(path)
        loc = SITE + path
        out.append(f'  <url>\n    <loc>{esc(loc)}</loc>\n    <lastmod>{esc(lastmod)}</lastmod>\n    <priority>{prio:.1f}</priority>\n'
                   f'    <xhtml:link rel="alternate" hreflang="en" href="{esc(loc)}"/>\n    <xhtml:link rel="alternate" hreflang="id" href="{esc(loc)}"/>\n'
                   f'    <xhtml:link rel="alternate" hreflang="x-default" href="{esc(loc)}"/>\n  </url>')
    out.append('</urlset>\n')
    write(os.path.join(PROTO, 'sitemap.xml'), '\n'.join(out))
    return len(seen)


def build_search_index(manifest, rng, mp):
    items = []
    for r in manifest['routes']:
        if r.get('exclude') or r.get('search') is False:
            continue
        items.append({'t': 'page', 'n': r['title'], 'ni': r.get('title_id', r['title']), 's': r.get('sub', ''), 'si': r.get('sub_id', r.get('sub', '')), 'u': r['path'], 'k': r.get('keywords', '')})
    for i in rng.d['industries']:
        items.append({'t': 'industry', 'n': L(i['name']), 'ni': L(i['name'], 'id'), 's': f'{len(rng.filtered("", i["id"], ""))} companies', 'si': f'{len(rng.filtered("", i["id"], ""))} perusahaan', 'u': f'{RANGE_BASE}industry/{i["id"]}/', 'k': ''})
    for f, v in rng.fn_roles.items():
        items.append({'t': 'function', 'n': L(v['role']), 'ni': L(v['role'], 'id'), 's': f'{len(rng.filtered("", "", f))} companies', 'si': f'{len(rng.filtered("", "", f))} perusahaan', 'u': f'{RANGE_BASE}function/{f}/', 'k': f})
    for c in rng.cos:
        items.append({'t': 'company', 'n': c['name'], 'ni': c['name'], 's': f'{rng.ind_name(c)} · {rng.country(c)}', 'si': f'{rng.ind_name(c, "id")} · {rng.country(c, "id")}', 'u': f'{RANGE_BASE}{c["slug"]}/', 'k': c['id']})
    for a in mp.arts:
        items.append({'t': 'article', 'n': L(a['title']), 'ni': L(a['title'], 'id'), 's': L(mp.topics[a['topic']]['name']), 'si': L(mp.topics[a['topic']]['name'], 'id'), 'u': f'{MP_BASE}{a["slug"]}/', 'k': a['slug'].replace('-', ' ')})
    write_json(os.path.join(PROTO, 'data', 'search-index.json'), {'v': 1, 'items': items})
    return len(items)


# ─────────────────────────────── /demo ───────────────────────────────

DEMO_FIXTURE = {
    'name': 'Demo User',
    'seeds': {'careerIntelligence': 58, 'profileStrength': 44, 'interviewReadiness': 51, 'networkCapital': 39, 'careerMindset': 62},
    'apps': 4, 'streak': 2,
    'progress': {'aladin_progress': 2, 'maverick_progress': 1, 'nexus_progress': 0, 'horizon_progress': 0},
}


def build_demo():
    """Derive /demo from the portal at build time: same page, clearly labelled
    fixture data, a permanent banner, no auth gate, noindex. Never at /portal."""
    src = os.path.join(PROTO, 'portal.html')
    with open(src, encoding='utf-8') as f:
        s = f.read()
    gate_start = s.index('<body>\n<script>')
    gate_end = s.index('</script>', gate_start) + len('</script>')
    banner = ('<div class="demo-banner" role="status" aria-live="polite" data-en="Demo — sample data, not a real account" data-id="Demo — data contoh, bukan akun sungguhan">'
              'Demo — sample data, not a real account</div>')
    fixture = ('<body>\n<script>\n/* /demo — fixture data for sales and marketing walkthroughs. Not a real account. */\n'
               'window.MT_DEMO_FIXTURE = ' + json.dumps(DEMO_FIXTURE) + ';\n</script>\n' + banner)
    s = s[:gate_start] + fixture + s[gate_end:]
    s = s.replace('<title>Portal — Metanoia Labs</title>', '<title>Demo — Metanoia Labs</title>')
    s = re.sub(r'<link rel="canonical" href="[^"]*">', '<link rel="canonical" href="https://metanoialabs.net/demo">', s)
    assert '<meta name="robots" content="noindex, nofollow, noarchive">' in s
    assert 'MT_DEMO_FIXTURE' in s and 'demo-banner' in s
    write(os.path.join(PROTO, 'demo.html'), s)


# ─────────────────────────────── main ───────────────────────────────

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--no-og', action='store_true', help='skip Open Graph card generation')
    args = ap.parse_args()
    make_og = not args.no_og
    if make_og:
        try:
            import PIL  # noqa: F401
        except ImportError:
            sys.exit('Pillow is required for Open Graph cards: pip install pillow  (or pass --no-og)')

    clean_generated()
    with open(os.path.join(PROTO, 'data', 'routes.json'), encoding='utf-8') as f:
        manifest = json.load(f)
    range_data = node_json('export-range.js')
    mp_data = node_json('export-mindpalace.js')

    rng = Range(range_data, make_og)
    n_json, n_dir, n_co = rng.build()
    print(f'The Range: {n_co} company pages, {n_dir} directory pages, {n_json} JSON pages')

    mp = MindPalace(mp_data, range_data, make_og)
    n_art, n_cat = mp.build()
    print(f'Mind Palace: {n_art} article pages, {n_cat} category pages, index, feed.xml')

    if make_og:
        import og as ogmod
        ogmod.card(os.path.join(OG_DIR, 'about.png'), 'Metanoia Labs', 'About Us', 'Who is building this, why, where it stands, and what we have committed to.')
    build_demo()
    print('demo.html: derived from portal.html with fixture data')

    n_urls = build_sitemap(manifest, rng.urls + mp.urls)
    print(f'sitemap.xml: {n_urls} URLs')
    n_idx = build_search_index(manifest, rng, mp)
    print(f'search-index.json: {n_idx} entries')
    if make_og:
        n_og = sum(len(fs) for _, _, fs in os.walk(OG_DIR))
        print(f'Open Graph cards: {n_og}')


if __name__ == '__main__':
    main()

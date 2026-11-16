/* End-to-end API checks against a server that runs the Pages Functions with a D1 database
   (`npx wrangler pages dev --port 8788` after `npx wrangler d1 migrations apply metanoia --local`).
   BASE overrides the origin. Exits non-zero when a check fails.

   Covers: health, registration validation, session cookie, sign-in, sign-out, the same-origin
   guard, admin role only after a verified address, progress, leads, Career Map results, events,
   account update / password / export / deletion, the admin API and its token.
   With D1_SQLITE=<path to the local D1 .sqlite file> it also proves the pre-hijack guard (it plants a
   one-time sign-in token directly in the database, which only a local run can do).
   Each run registers fresh addresses (…+<stamp>@example.test), so it can be repeated; the
   registration limiter (10 an hour per address) is the only state that carries over. */
const B = process.env.BASE || 'http://localhost:8788';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'local-admin-token';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.test';
const stamp = Date.now().toString(36);
const crypto = require('crypto'), { execFileSync } = require('child_process');
const sql = (q, args = []) => execFileSync('python3', ['-c', 'import sqlite3,sys,json\nc=sqlite3.connect(sys.argv[1],timeout=10)\nc.execute(sys.argv[2],json.loads(sys.argv[3]))\nc.commit()', process.env.D1_SQLITE, q, JSON.stringify(args)]);
let pass = 0, failN = 0;
const ok = (cond, label, detail) => { if (cond) { pass++; } else { failN++; console.log('FAIL', label, detail === undefined ? '' : JSON.stringify(detail).slice(0, 300)); } };

function client() {
  let jar = '';
  return async function call(method, path, body, headers = {}) {
    const h = { ...headers }; if (jar) h.cookie = jar;
    if (body !== undefined) h['content-type'] = 'application/json';
    if (method !== 'GET' && !('origin' in h)) h.origin = B;
    if (h.origin === null) delete h.origin;
    const r = await fetch(B + path, { method, headers: h, body: body === undefined ? undefined : JSON.stringify(body), redirect: 'manual' });
    const sc = r.headers.getSetCookie ? r.headers.getSetCookie() : [];
    for (const c of sc) { const m = /^mt_session=([^;]*)/.exec(c); if (m) jar = m[1] ? 'mt_session=' + m[1] : ''; }
    const text = await r.text(); let j = null; try { j = JSON.parse(text); } catch (e) {}
    return { status: r.status, j, text, headers: r.headers, setCookie: sc };
  };
}

(async () => {
  const anon = client();
  let r = await anon('GET', '/api/health');
  ok(r.status === 200 && r.j && r.j.ok && r.j.db, 'health', r.j);
  if (!(r.j && r.j.accounts)) { console.log('accounts are closed on this server; account checks skipped'); }

  /* ── registration validation ── */
  const email = `qa+${stamp}@example.test`, pw = 'correct horse battery';
  r = await anon('POST', '/api/auth/register', { name: 'QA', email, password: 'short', terms: true });
  ok(r.status === 400 && r.j.field === 'password', 'register rejects a short password', r.j);
  r = await anon('POST', '/api/auth/register', { name: 'QA', email: 'not-an-email', password: pw, terms: true });
  ok(r.status === 400 && r.j.field === 'email', 'register rejects a bad e-mail', r.j);
  r = await anon('POST', '/api/auth/register', { name: 'QA', email, password: pw });
  ok(r.status === 400 && r.j.field === 'terms', 'register needs the terms', r.j);
  r = await anon('POST', '/api/auth/register', { name: 'QA', email, password: pw, terms: true }, { origin: 'https://evil.example' });
  ok(r.status === 403, 'cross-origin register is refused', r.status);

  /* ── a member ── */
  const m = client();
  r = await m('POST', '/api/auth/register', { name: 'QA Member', email, password: pw, terms: true, audience: 'student', locale: 'id' });
  ok(r.status === 201 && r.j.user && r.j.user.email === email && r.j.user.role === 'member', 'register', r.j);
  ok(r.setCookie.some(c => /HttpOnly/i.test(c) && /SameSite=Lax/i.test(c)), 'session cookie is HttpOnly and SameSite', r.setCookie);
  ok(r.j.access && typeof r.j.access === 'object', 'register returns access', r.j.access);
  r = await m('GET', '/api/auth/me');
  ok(r.status === 200 && r.j.user.email === email && r.j.user.locale === 'id' && !('pw_hash' in r.j.user), 'me', r.j);
  r = await anon('POST', '/api/auth/register', { name: 'QA', email, password: pw, terms: true });
  ok(r.status === 409, 'duplicate registration is refused', r.status);
  r = await anon('GET', '/api/auth/me');
  ok(r.status === 200 && r.j.user === null, 'me for a guest answers 200 with no user (no console error on public pages)', r.status);

  /* ── sign-in ── */
  const m2 = client();
  r = await m2('POST', '/api/auth/login', { email, password: 'wrong password' });
  ok(r.status === 401, 'wrong password', r.status);
  r = await m2('POST', '/api/auth/login', { email: `nobody+${stamp}@example.test`, password: pw });
  ok(r.status === 401, 'unknown address reads the same as a wrong password', r.status);
  r = await m2('POST', '/api/auth/login', { email: email.toUpperCase(), password: pw });
  ok(r.status === 200 && r.j.user.email === email, 'login is case-insensitive on the address', r.j);
  r = await m2('GET', '/api/auth/sessions');
  ok(r.status === 200 && r.j.sessions.length === 2 && r.j.sessions.filter(s => s.current).length === 1, 'two sessions, one current', r.j);
  const other = r.j.sessions.find(s => !s.current);
  r = await m2('DELETE', '/api/auth/sessions/' + other.id);
  ok(r.status === 200, 'revoke the other device', r.j);
  r = await m('GET', '/api/auth/me');
  ok(r.status === 401 || (r.status === 200 && r.j.user === null), 'the revoked device is signed out', r.status);

  /* ── an ADMIN_EMAILS address registered with a password is not an admin until the address is proven ── */
  const adm = client();
  if (process.env.D1_SQLITE) { sql('DELETE FROM sessions WHERE user_id IN (SELECT id FROM users WHERE email = ?)', [ADMIN_EMAIL]); sql('DELETE FROM users WHERE email = ?', [ADMIN_EMAIL]); }
  r = await adm('POST', '/api/auth/register', { name: 'Not Yet Admin', email: ADMIN_EMAIL, password: pw, terms: true });
  if (r.status === 201) {
    ok(r.j.user.role === 'member', 'password registration never grants admin', r.j.user);
    r = await adm('GET', '/api/admin/stats');
    ok(r.status === 401, 'unverified admin address cannot read the admin API', r.status);
  } else {
    ok(r.status === 409, 'admin address already registered', r.status);
    r = await adm('POST', '/api/auth/login', { email: ADMIN_EMAIL, password: pw });
    if (r.status === 200) {
      ok(r.j.user.email_verified || r.j.user.role === 'member', 'unverified admin address stays a member at sign-in', r.j.user);
      if (!r.j.user.email_verified) { r = await adm('GET', '/api/admin/stats'); ok(r.status === 401, 'unverified admin address cannot read the admin API', r.status); }
    }
  }

  /* ── pre-hijack guard: a proven sign-in takes over an account someone opened with a password on that address ── */
  if (process.env.D1_SQLITE) {
    const victim = `victim+${stamp}@example.test`, attacker = client(), owner = client();
    r = await attacker('POST', '/api/auth/register', { name: 'Attacker', email: victim, password: 'attacker password', terms: true });
    ok(r.status === 201, 'attacker pre-registers the victim address', r.status);
    const raw = crypto.randomBytes(32).toString('base64url'), hash = crypto.createHash('sha256').update(raw).digest('hex');
    sql('INSERT INTO tokens (token_hash, kind, user_id, email, created_at, expires_at) VALUES (?, ?, NULL, ?, ?, ?)', [hash, 'magic', victim, new Date().toISOString(), new Date(Date.now() + 600000).toISOString()]);
    r = await owner('POST', '/api/auth/magic/consume', { token: raw });
    ok(r.status === 200 && r.j.user.email === victim && r.j.user.email_verified && r.j.user.has_password === false, 'the mailbox owner signs in by link and the unproven password is cleared', r.j);
    r = await attacker('GET', '/api/auth/me');
    ok(r.status === 200 && r.j.user === null, 'the attacker session is ended', r.j);
    r = await client()('POST', '/api/auth/login', { email: victim, password: 'attacker password' });
    ok(r.status === 401, 'the attacker password no longer works', r.status);
    r = await owner('POST', '/api/auth/magic/consume', { token: raw });
    ok(r.status === 400, 'a sign-in link works once', r.status);
    /* an ADMIN_EMAILS address proven by link becomes admin */
    const raw2 = crypto.randomBytes(32).toString('base64url'), hash2 = crypto.createHash('sha256').update(raw2).digest('hex');
    sql('INSERT INTO tokens (token_hash, kind, user_id, email, created_at, expires_at) VALUES (?, ?, NULL, ?, ?, ?)', [hash2, 'magic', ADMIN_EMAIL, new Date().toISOString(), new Date(Date.now() + 600000).toISOString()]);
    const realAdmin = client();
    r = await realAdmin('POST', '/api/auth/magic/consume', { token: raw2 });
    ok(r.status === 200 && r.j.user.role === 'admin', 'a proven ADMIN_EMAILS address is an admin', r.j && r.j.user);
    r = await realAdmin('GET', '/api/admin/stats');
    ok(r.status === 200 && r.j.actor === ADMIN_EMAIL, 'the proven admin reads the admin API by session', r.status);
    r = await adm('GET', '/api/auth/me');
    ok(r.j && r.j.user === null, 'the earlier unproven session on the admin address is ended', r.j);
  }

  /* ── feedback ── */
  r = await anon('POST', '/api/feedback', { kind: 'bug', message: 'hi' });
  ok(r.status === 400 && r.j.field === 'message', 'feedback needs a real message', r.j);
  r = await anon('POST', '/api/feedback', { kind: 'nonsense', message: 'a long enough message' });
  ok(r.status === 400 && r.j.field === 'kind', 'feedback kind is validated', r.j);
  r = await anon('POST', '/api/feedback', { kind: 'idea', message: 'Guest idea ' + stamp, rating: 9 });
  ok(r.status === 400 && r.j.field === 'rating', 'feedback rating is 1 to 5', r.j);
  r = await anon('POST', '/api/feedback', { kind: 'idea', message: 'Guest idea ' + stamp, rating: 4, contact: `guest+${stamp}@example.test`, page: '/help', locale: 'id' });
  ok(r.status === 201 && r.j.id, 'a guest sends feedback', r.j);
  r = await m2('POST', '/api/feedback', { kind: 'bug', message: '=HYPERLINK("x") member bug ' + stamp, page: '/portal' });
  ok(r.status === 201, 'a member sends feedback', r.j);
  r = await anon('POST', '/api/feedback', { kind: 'bug', message: 'cross site ' + stamp }, { origin: 'https://evil.example' });
  ok(r.status === 403, 'cross-origin feedback is refused', r.status);
  r = await m2('GET', '/api/admin/feedback');
  ok(r.status === 401, 'a member cannot read the feedback inbox', r.status);

  /* ── progress ── */
  r = await anon('GET', '/api/progress');
  ok(r.status === 401, 'progress needs a session', r.status);
  r = await m2('PUT', '/api/progress/qa-notes', { data: { a: 1 }, version: 1 });
  ok(r.status === 200 && r.j.ok, 'progress write', r.j);
  r = await m2('GET', '/api/progress/qa-notes');
  ok(r.status === 200 && r.j.data && r.j.data.a === 1, 'progress read', r.j);
  r = await m2('PUT', '/api/progress/qa-notes', { data: { a: 0 }, version: 0 });
  ok(r.j && r.j.data && r.j.data.a === 1, 'a stale write gets the stored record back', r.j);
  r = await m2('PUT', '/api/progress/' + encodeURIComponent('../x'), { data: {}, version: 1 });
  ok(r.status === 400 || r.status === 404, 'bad namespace', r.status);
  r = await m2('PUT', '/api/progress/qa-big', { data: 'x'.repeat(900 * 1024), version: 1 });
  ok(r.status === 413 || r.status === 400, 'oversized progress is refused', r.status);
  r = await m2('PUT', '/api/progress/browser', { data: { keys: { k1: 'v1' }, times: { k1: 10 }, deleted: {} }, version: 1 });
  ok(r.status === 200, 'keyed progress write', r.j);
  r = await m2('PUT', '/api/progress/browser', { data: { keys: { k2: 'v2' }, times: { k2: 20 }, deleted: {} }, version: 2 });
  ok(r.status === 200 && r.j.data && r.j.data.keys && r.j.data.keys.k1 === 'v1' && r.j.data.keys.k2 === 'v2', 'keyed progress merges per key', r.j);

  /* ── leads ── */
  r = await anon('POST', '/api/leads/newsletter', { email: `news+${stamp}@example.test`, consent: true, source_page: '/' });
  ok((r.status === 200 || r.status === 201) && r.j.ok && r.j.id, 'newsletter', r.j);
  r = await anon('POST', '/api/leads/newsletter', { email: `news2+${stamp}@example.test` });
  ok(r.status === 400 && r.j.field === 'consent', 'newsletter needs consent', r.j);
  r = await anon('POST', '/api/leads/enterprise', { name: 'QA', email: `ent+${stamp}@example.test`, company: 'QA Co', role: 'HR', cohort_size: '20', interest: 'Cohorts', message: 'hello', consent: true });
  ok((r.status === 200 || r.status === 201) && r.j.ok, 'enterprise inquiry', r.j);
  r = await anon('POST', '/api/leads/enterprise', { name: 'QA', email: `ent+${stamp}@example.test`, consent: true });
  ok(r.status === 400 && r.j.field === 'company', 'enterprise needs a company', r.j);
  r = await anon('POST', '/api/leads/mentor', { name: 'QA', email: `men+${stamp}@example.test`, expertise: 'Consulting', years: '7', linkedin: 'https://example.com/in/x', terms: true });
  ok(r.status === 400 && r.j.field === 'linkedin', 'mentor LinkedIn must be linkedin.com', r.j);
  r = await anon('POST', '/api/leads/mentor', { name: 'QA', email: `men+${stamp}@example.test`, expertise: 'Consulting', years: '7', linkedin: 'https://www.linkedin.com/in/x', terms: true, motivation: 'm' });
  ok((r.status === 200 || r.status === 201) && r.j.ok, 'mentor application', r.j);
  r = await anon('POST', '/api/leads/newsletter', { email: `bot+${stamp}@example.test`, consent: true, _gotcha: 'x' });
  ok(r.status === 200 && r.j.id === 'ok', 'honeypot is swallowed', r.j);
  r = await anon('POST', '/api/leads/nothing', { email: `x+${stamp}@example.test` });
  ok(r.status === 404, 'unknown lead kind', r.status);

  /* ── Career Map result by e-mail ── */
  r = await anon('POST', '/api/results', { email: `res+${stamp}@example.test`, total: 640, band: 'x', dims: {}, profile: {}, answers: {} });
  ok(r.status === 400 && r.j.field === 'total', 'result scores are validated', r.j);
  const dimKeys = ['ci', 'ps', 'ir', 'nc', 'cm'], dims = {}; dimKeys.forEach((k, i) => { dims[k] = 6 + i; });
  r = await anon('POST', '/api/results', { email: `res+${stamp}@example.test`, total: 64, band: 'Mid-Mountain', dims, profile: { stage: 'student' }, answers: { q1: 2 } });
  ok((r.status === 200 || r.status === 201) && r.j.url, 'result stored with a signed link', r.j);
  if (r.j && r.j.url) {
    const u = new URL(r.j.url, B);
    const got = await anon('GET', '/api/results/' + u.searchParams.get('result') + '?sig=' + u.searchParams.get('sig'));
    ok(got.status === 200 && got.j.result.total === 64 && !JSON.stringify(got.j).includes('@example.test'), 'the signed link returns the result and never the address', got.j);
    const bad = await anon('GET', '/api/results/' + u.searchParams.get('result') + '?sig=' + '0'.repeat(32));
    ok(bad.status === 404, 'a wrong signature is a 404', bad.status);
  }

  /* ── events ── */
  r = await anon('POST', '/api/events', { anon_id: 'qa-' + stamp + '-0123456789', locale: 'en', events: [{ name: 'site.page.viewed', page: '/qa', ts: new Date().toISOString() }] });
  ok(r.status === 200 || r.status === 202, 'events accepted', r.j);
  r = await anon('POST', '/api/events', { events: 'x' });
  ok(r.status === 400, 'events validated', r.status);
  /* script errors reported by browsers (js/mt-errors.js) */
  const boom = 'QA boom ' + stamp;
  for (const who of ['qa-' + stamp + '-aaaaaaaaaaaa', 'qa-' + stamp + '-bbbbbbbbbbbb']) {
    r = await anon('POST', '/api/events', { anon_id: who, events: [{ name: 'site.script.error', page: '/qa-page', props: { msg: boom, src: '/js/x.js', line: 12, col: 3, stack: 'at x' } }] });
    ok(r.status === 202 && r.j.accepted === 1, 'a script error report is accepted', r.j);
  }

  /* ── account ── */
  r = await m2('POST', '/api/account/update', { name: 'QA Renamed', audience: 'fresh-graduate', locale: 'en', marketing: true });
  ok(r.status === 200 && r.j.user.name === 'QA Renamed' && r.j.user.audience === 'fresh-graduate', 'account update', r.j);
  r = await m2('POST', '/api/account/password', { current: 'nope', password: 'another good password' });
  ok(r.status === 401, 'password change needs the current one', r.status);
  r = await m2('POST', '/api/account/password', { current: pw, password: 'another good password' });
  ok(r.status === 200, 'password change', r.j);
  r = await m2('GET', '/api/auth/me');
  ok(r.status === 200 && r.j.user, 'this device stays signed in after a password change', r.status);
  r = await m2('GET', '/api/account/export');
  ok(r.status === 200 && r.text.includes(email) && !/pw_hash|token_hash/.test(r.text), 'export holds the member, not secrets', r.text.slice(0, 200));
  r = await m2('GET', '/api/admin/stats');
  ok(r.status === 401, 'a member cannot read the admin API', r.status);
  r = await m2('GET', '/api/admin/users.csv');
  ok(r.status === 401, 'a member cannot export members', r.status);

  /* ── admin token ── */
  const A = { authorization: 'Bearer ' + ADMIN_TOKEN };
  r = await anon('GET', '/api/admin/stats', undefined, { authorization: 'Bearer wrong' });
  ok(r.status === 401, 'wrong admin token', r.status);
  r = await anon('GET', '/api/admin/stats', undefined, A);
  ok(r.status === 200 && r.j.users >= 1, 'admin stats', r.j);
  r = await anon('GET', '/api/admin/leads?kind=enterprise&q=' + encodeURIComponent('QA Co'), undefined, A);
  ok(r.status === 200 && r.j.leads.length >= 1, 'admin finds the enterprise lead', r.j && r.j.leads && r.j.leads.length);
  const lead = r.j.leads[0];
  r = await anon('PATCH', '/api/admin/leads/' + lead.id, { status: 'contacted', notes: 'qa' }, A);
  ok(r.status === 200 && r.j.lead.status === 'contacted', 'admin updates a lead', r.j);
  r = await anon('PATCH', '/api/admin/leads/' + lead.id, { status: 'contacted' }, { ...A, origin: 'https://evil.example' });
  ok(r.status === 403, 'cross-origin admin write is refused', r.status);
  r = await anon('GET', '/api/admin/users?q=' + encodeURIComponent(email), undefined, A);
  ok(r.status === 200 && r.j.users.length === 1 && !('pw_hash' in r.j.users[0]), 'admin user search', r.j);
  r = await anon('GET', '/api/admin/users.csv?q=' + encodeURIComponent(email), undefined, A);
  ok(r.status === 200 && /text\/csv/.test(r.headers.get('content-type')) && r.text.includes(email), 'admin CSV', r.text.slice(0, 120));
  r = await anon('GET', '/api/admin/funnel?days=7', undefined, A);
  ok(r.status === 200 && Array.isArray(r.j.steps), 'admin funnel', r.j);
  r = await anon('POST', '/api/admin/entitlements', { user: email, product: 'all', plan: 'founding', note: 'qa' }, A);
  ok(r.status === 201 && r.j.entitlement, 'admin grants access', r.j);
  if (r.j && r.j.entitlement) { r = await anon('DELETE', '/api/admin/entitlements/' + r.j.entitlement.id, undefined, A); ok(r.status === 200, 'admin revokes access', r.j); }
  r = await anon('GET', '/api/admin/leads.csv?kind=enterprise', undefined, A);
  ok(r.status === 200 && /text\/csv/.test(r.headers.get('content-type')) && r.text.includes('QA Co'), 'admin lead export', r.text.slice(0, 120));
  r = await anon('GET', '/api/admin/feedback?q=' + stamp, undefined, A);
  ok(r.status === 200 && r.j.feedback.length === 2 && r.j.feedback.some(f => f.member && f.from === email) && r.j.feedback.some(f => !f.member && f.from === `guest+${stamp}@example.test`), 'admin reads the feedback inbox with who sent what', r.j);
  const fbItem = r.j.feedback[0];
  r = await anon('PATCH', '/api/admin/feedback/' + fbItem.id, { status: 'planned', notes: 'qa' }, A);
  ok(r.status === 200 && r.j.feedback.status === 'planned', 'admin triages feedback', r.j);
  r = await anon('PATCH', '/api/admin/feedback/' + fbItem.id, { status: 'bogus' }, A);
  ok(r.status === 400, 'feedback status is validated', r.status);
  r = await anon('GET', '/api/admin/stats', undefined, A);
  ok(r.status === 200 && typeof r.j.feedback_new === 'number', 'admin stats count new feedback', r.j.feedback_new);
  r = await anon('GET', '/api/admin/audit?limit=50', undefined, A);
  const acts = r.j && r.j.audit ? r.j.audit.map(a => a.action) : [];
  ok(r.status === 200 && ['lead.update', 'users.export', 'entitlement.grant', 'entitlement.revoke', 'leads.export', 'feedback.update'].every(a => acts.includes(a)), 'every admin write and export is in the audit trail', acts);
  r = await m2('GET', '/api/admin/audit');
  ok(r.status === 401, 'a member cannot read the audit trail', r.status);
  /* script errors, grouped */
  r = await anon('GET', '/api/admin/errors?days=1', undefined, A);
  const grp = r.j && r.j.groups ? r.j.groups.find(g => g.msg === boom) : null;
  ok(r.status === 200 && grp && grp.n === 2 && grp.visitors === 2 && grp.page === '/qa-page' && grp.src === '/js/x.js' && grp.line === 12, 'admin sees script errors grouped by message and page with distinct visitors', grp || r.j);
  r = await m2('GET', '/api/admin/errors');
  ok(r.status === 401, 'a member cannot read script errors', r.status);
  /* the owner digest: numbers and text, counts only */
  r = await anon('GET', '/api/admin/digest?days=7', undefined, A);
  ok(r.status === 200 && r.j.digest.accounts.now >= 1 && r.j.digest.errors.total >= 2 && r.j.digest.feedback.new >= 2 && r.j.digest.leads.enterprise >= 1, 'the digest counts accounts, errors, feedback and leads', r.j && r.j.digest);
  ok(r.j && /PEOPLE/.test(r.j.text) && /RELIABILITY/.test(r.j.text) && r.j.text.includes(boom) && !r.j.text.includes('@example.test'), 'the digest text names the top error and holds no member address', r.j && r.j.text.slice(0, 200));
  r = await m2('GET', '/api/admin/digest');
  ok(r.status === 401, 'a member cannot read the digest', r.status);
  r = await anon('POST', '/api/admin/digest', {}, A);
  ok(r.status === 200 || (r.status === 503 && /mail not configured|LEADS_NOTIFY_TO/.test(r.j.error)), 'send-now answers honestly when mail is not configured', r.j);
  r = await anon('POST', '/api/admin/digest', {}, { ...A, origin: 'https://evil.example' });
  ok(r.status === 403, 'cross-origin digest send is refused', r.status);
  r = await anon('GET', '/api/admin/audit?limit=20', undefined, A);
  ok(r.status === 200 && r.j.audit.some(a => a.action === 'digest.send'), 'a manual digest send is in the audit trail', r.j && r.j.audit.map(a => a.action));
  /* a member-typed formula is neutralised in exports */
  await m2('POST', '/api/account/update', { name: '=cmd|calc' });
  r = await anon('GET', '/api/admin/users.csv?q=' + encodeURIComponent(email), undefined, A);
  ok(r.status === 200 && r.text.includes("'=cmd|calc") , 'CSV export neutralises a leading formula character', r.text.slice(-120));

  /* ── AI coach: closed to members until the owner opens it, capped per member, no text echoed back ── */
  const answerEn = 'In my final year I led a five-person team for a case competition. Two weeks before the deadline our analyst left, so I rebuilt the financial model myself and we still reached the final.';
  await anon('POST', '/api/admin/coach/mode', { mode: 'off' }, A);
  r = await anon('GET', '/api/coach');
  ok(r.status === 200 && r.j.available === false, 'the coach is not offered to a guest', r.j);
  r = await anon('POST', '/api/coach', { kind: 'interview', text: answerEn });
  ok(r.status === 401, 'the coach needs a session', r.status);
  r = await m2('GET', '/api/coach');
  ok(r.status === 200 && r.j.available === false, 'the coach is not offered to members before it is opened', r.j);
  r = await m2('POST', '/api/coach', { kind: 'interview', text: answerEn });
  ok(r.status === 403, 'a member cannot use the coach before it is opened', r.status);
  r = await anon('POST', '/api/admin/coach/trial', { kind: 'poem', text: answerEn }, A);
  ok(r.status === 400 && r.j.field === 'kind', 'trial kind is validated', r.j);
  r = await anon('POST', '/api/admin/coach/trial', { kind: 'interview', question: 'Tell me about a time you worked under pressure.', text: answerEn, lang: 'en' }, A);
  ok(r.status === 200 && r.j.feedback && r.j.feedback.structure && typeof r.j.feedback.structure.result === 'boolean' && r.j.feedback.improvements.length >= 1 && r.j.feedback.rewrite, 'an admin trial returns structured interview feedback', r.j);
  r = await anon('POST', '/api/admin/coach/trial', { kind: 'cv', text: 'Bertanggung jawab mengelola akun media sosial himpunan mahasiswa', lang: 'id' }, A);
  ok(r.status === 200 && r.j.feedback.checks && 'measurable' in r.j.feedback.checks && /angka/.test(JSON.stringify(r.j.feedback)), 'a CV bullet trial answers in Bahasa Indonesia with its checks', r.j);
  r = await m2('POST', '/api/admin/coach/mode', { mode: 'on' });
  ok(r.status === 401, 'a member cannot open the coach', r.status);
  r = await anon('POST', '/api/admin/coach/mode', { mode: 'maybe' }, A);
  ok(r.status === 400, 'coach mode is validated', r.status);
  r = await anon('POST', '/api/admin/coach/mode', { mode: 'on' }, A);
  ok(r.status === 200 && r.j.mode === 'on', 'the owner opens the coach to members', r.j);
  r = await m2('GET', '/api/coach');
  ok(r.status === 200 && r.j.available === true && r.j.remaining === r.j.per_member && r.j.per_member >= 1, 'a member now sees the coach and the daily allowance', r.j);
  const perDay = r.j.per_member || 6;
  r = await m2('POST', '/api/coach', { kind: 'interview', text: 'too short' });
  ok(r.status === 400 && r.j.field === 'text', 'a short answer is refused before the model is asked', r.j);
  r = await m2('POST', '/api/coach', { kind: 'interview', text: answerEn }, { origin: 'https://evil.example' });
  ok(r.status === 403, 'cross-origin coach request is refused', r.status);
  r = await m2('POST', '/api/coach', { kind: 'interview', question: 'Tell me about pressure.', text: answerEn, lang: 'en' });
  ok(r.status === 200 && r.j.feedback.strengths.length >= 1 && r.j.usage.remaining === perDay - 1 && !r.text.includes('we still reached the final'), 'a member gets feedback, the allowance drops, and the answer is not echoed back whole', r.j);
  for (let i = 1; i < perDay; i++) await m2('POST', '/api/coach', { kind: 'cv', text: 'Managed the social media accounts of the student association', lang: 'en' });
  r = await m2('POST', '/api/coach', { kind: 'interview', text: answerEn });
  ok(r.status === 429 && r.j.scope === 'member', 'the per-member daily limit holds', r.j);
  r = await anon('GET', '/api/admin/coach?days=3', undefined, A);
  ok(r.status === 200 && r.j.mode === 'on' && r.j.today.neurons > 0 && r.j.today.budget_left < r.j.today.budget && r.j.days[0].calls >= perDay + 2, 'the admin page sees calls and the budget used', r.j && r.j.today);
  r = await anon('GET', '/api/admin/audit?limit=30', undefined, A);
  ok(r.status === 200 && r.j.audit.some(x => x.action === 'coach.mode'), 'opening the coach is in the audit trail', r.status);
  r = await anon('POST', '/api/admin/coach/mode', { mode: 'off' }, A);
  ok(r.status === 200 && r.j.mode === 'off', 'the owner closes the coach again', r.j);

  /* ── certificates of completion ── */
  await m2('POST', '/api/account/update', { name: 'QA Graduate' });
  r = await anon('POST', '/api/certificates', { product: 'the-map' });
  ok(r.status === 401, 'a certificate needs a session', r.status);
  r = await m2('POST', '/api/certificates', { product: 'the-moon' });
  ok(r.status === 400 && r.j.field === 'product', 'certificate product is validated', r.j);
  const mf = await anon('GET', '/data/lms/the-map/manifest.json');
  const core = mf.j && mf.j.lessons ? mf.j.lessons : [];
  ok(core.length > 5, 'the build writes the lesson manifest', mf.status);
  const lmsDoc = done => ({ data: { keys: { 'mt-lms:the-map': JSON.stringify(done) }, times: { 'mt-lms:the-map': Date.now() }, deleted: {} }, version: Date.now() });
  const some = {}; core.slice(0, 3).forEach(n => { some[n] = true; });
  await m2('PUT', '/api/progress/browser', lmsDoc(some));
  r = await m2('POST', '/api/certificates', { product: 'the-map' });
  ok(r.status === 409 && r.j.done === 3 && r.j.total === core.length, 'no certificate while lessons remain, and the answer says how many', r.j);
  const all = {}; core.forEach(n => { all[n] = true; });
  await m2('PUT', '/api/progress/browser', lmsDoc(all));
  r = await m2('POST', '/api/certificates', { product: 'the-map' }, { origin: 'https://evil.example' });
  ok(r.status === 403, 'cross-origin certificate request is refused', r.status);
  r = await m2('POST', '/api/certificates', { product: 'the-map' });
  ok(r.status === 201 && r.j.certificate.name === 'QA Graduate' && r.j.certificate.lessons === core.length && /\/certificate\?c=/.test(r.j.url), 'the certificate is issued once every core lesson is complete', r.j);
  const certId = r.j.certificate ? r.j.certificate.id : 'x';
  r = await anon('GET', '/api/certificates/' + certId);
  ok(r.status === 200 && r.j.certificate.name === 'QA Graduate' && r.j.certificate.product_name === 'The Map' && !r.text.includes('@') && !('user_id' in r.j.certificate), 'anyone with the link can verify it, and it carries no address', r.j);
  await m2('POST', '/api/account/update', { name: 'QA Graduate Renamed' });
  r = await m2('POST', '/api/certificates', { product: 'the-map' });
  ok(r.status === 201 && r.j.certificate.id === certId && r.j.certificate.name === 'QA Graduate Renamed', 'asking again returns the same certificate with the current name', r.j);
  r = await anon('GET', '/api/certificates/AAAAAAAAAAAAAAAA');
  ok(r.status === 404, 'an unknown certificate reference is a 404', r.status);
  r = await m2('GET', '/api/certificates');
  ok(r.status === 200 && r.j.certificates.length === 1, 'a member lists their certificates', r.j);
  r = await m2('GET', '/api/account/export');
  ok(r.status === 200 && r.text.includes(certId), 'the export includes the certificate', r.status);
  /* trends */
  r = await anon('GET', '/api/admin/trends?days=14', undefined, A);
  ok(r.status === 200 && r.j.axis.length === 14 && r.j.series.accounts.length === 14 && r.j.totals.accounts >= 1 && r.j.totals.certificates >= 1 && r.j.totals.feedback >= 2, 'admin trends give one number per day per measure', r.j && r.j.totals);
  r = await m2('GET', '/api/admin/trends');
  ok(r.status === 401, 'a member cannot read trends', r.status);

  /* ── deletion ── */
  r = await m2('POST', '/api/account/delete', { password: 'wrong' });
  ok(r.status === 401, 'deletion needs the password', r.status);
  r = await m2('POST', '/api/account/delete', { password: 'another good password' });
  ok(r.status === 200 && r.j.ok, 'deletion scheduled', r.j);
  r = await m2('GET', '/api/auth/me');
  ok(r.status === 401 || (r.status === 200 && r.j.user === null), 'signed out once deletion is scheduled', r.status);
  r = await client()('POST', '/api/auth/login', { email, password: 'another good password' });
  ok(r.status === 403, 'sign-in is blocked while deletion is pending', r.status);

  /* ── sign-out ── */
  const s = client();
  const e2 = `qa2+${stamp}@example.test`;
  await s('POST', '/api/auth/register', { name: 'QA Two', email: e2, password: pw, terms: true });
  r = await s('POST', '/api/auth/logout');
  ok(r.status === 200, 'logout', r.status);
  r = await s('GET', '/api/auth/me');
  ok(r.status === 401 || (r.status === 200 && r.j.user === null), 'signed out', r.status);

  console.log(`api checks: ${pass} passed, ${failN} failed`);
  process.exit(failN ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });

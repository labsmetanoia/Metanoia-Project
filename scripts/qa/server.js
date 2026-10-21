/* Static server that resolves routes the way GitHub Pages does: /pricing → pricing.html, /dir/ → dir/index.html,
   /dir → 301 to /dir/ when a directory exists, 404.html for misses. Port from PORT (default 8940). */
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = require('path').join(__dirname, '..', '..', 'prototype');
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif', '.mp4': 'video/mp4', '.webm': 'video/webm', '.vtt': 'text/vtt', '.xml': 'application/xml', '.txt': 'text/plain', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ico': 'image/x-icon', '.pdf': 'application/pdf', '.md': 'text/markdown' };
http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split('?')[0].split('#')[0]);
  let p = path.join(ROOT, u);
  if (!p.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  const send = (f, code) => { const t = TYPES[path.extname(f).toLowerCase()] || 'application/octet-stream'; res.writeHead(code || 200, { 'content-type': t }); fs.createReadStream(f).pipe(res); };
  try {
    if (fs.existsSync(p) && fs.statSync(p).isDirectory()) {
      if (!u.endsWith('/')) { res.writeHead(301, { location: u + '/' }); return res.end(); }
      if (fs.existsSync(path.join(p, 'index.html'))) return send(path.join(p, 'index.html'));
    } else if (fs.existsSync(p)) return send(p);
    else if (fs.existsSync(p + '.html')) return send(p + '.html');
  } catch (e) {}
  if (fs.existsSync(path.join(ROOT, '404.html'))) return send(path.join(ROOT, '404.html'), 404);
  res.writeHead(404); res.end('not found');
}).listen(+process.env.PORT || 8940);

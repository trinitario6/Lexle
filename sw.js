// sw.js — all game logic is inline in index.html, no external JS needed
const CACHE = 'wordle-v4';

const PRECACHE = [
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

// ── INSTALL ───────────────────────────────────────────────────────────────────
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE).catch(() => {}))
  );
});

// ── ACTIVATE: delete every other cache ───────────────────────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// ── FETCH ─────────────────────────────────────────────────────────────────────
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // HTML + manifest: network-first so updates are picked up immediately
  const isAppShell = e.request.mode === 'navigate' || url.pathname.endsWith('.json');
  if (isAppShell) {
    e.respondWith(
      fetch(e.request)
        .then(res => { caches.open(CACHE).then(c => c.put(e.request, res.clone())); return res; })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Everything else (icons, fonts): cache-first
  e.respondWith(
    caches.match(e.request).then(hit => hit ||
      fetch(e.request).then(res => {
        caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        return res;
      })
    )
  );
});

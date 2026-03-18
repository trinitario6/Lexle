// sw.js — no hardcoded version; the browser re-installs whenever this file changes.

const CACHE = 'wordle-puzzle';

// Assets to pre-cache on install
const PRECACHE = [
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Nunito+Sans:wght@400;600;700&display=swap',
];

// ── INSTALL: pre-cache static assets only ────────────────────────────────────
self.addEventListener('install', e => {
  self.skipWaiting(); // activate new SW immediately
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE).catch(() => {}))
  );
});

// ── ACTIVATE: clean up any caches this SW didn't create ──────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// ── FETCH strategy ────────────────────────────────────────────────────────────
// HTML + JS: network-first so deployments are picked up immediately.
//            Falls back to cache only when fully offline.
// Everything else (icons, fonts): cache-first for speed.
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isAppFile = e.request.mode === 'navigate' ||
                    url.pathname.endsWith('.js') ||
                    url.pathname.endsWith('.json');

  if (isAppFile) {
    // Network-first
    e.respondWith(
      fetch(e.request)
        .then(res => {
          // Cache a fresh copy for offline fallback
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    // Cache-first (icons, fonts, images)
    e.respondWith(
      caches.match(e.request).then(hit => hit ||
        fetch(e.request).then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
      )
    );
  }
});

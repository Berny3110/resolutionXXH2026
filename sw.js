// sw.js - Service Worker basique pour rendre la PWA installable
self.addEventListener('install', event => {
  self.skipWaiting(); // Force l'activation immédiate
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim()); // Prend le contrôle immédiatement
});

// Optionnel : cache basique pour offline (tu pourras l'améliorer plus tard)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
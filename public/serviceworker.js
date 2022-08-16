const CACHE_NAME = 'startup-cache-v1';
const urlsToCache = ['index.html', 'favicon.ico', 'startup.svg'];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match('index.html'));
    })
  );
});

// Activate SW
self.addEventListener('activate', (event) => {});

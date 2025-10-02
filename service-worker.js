const CACHE_NAME = "olivia-game-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./Olivia.png",
  "./Papa.png",
  "./Gato.gif"
];

// Instalar SW y cachear
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Servir desde cache
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});

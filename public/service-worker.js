const CACHE_NAME = "my-pwa-cache-v1";

const urlsToCache = [

  "/manifest.webmanifest",

  // Tilføj flere filer her, hvis nødvendigt

];



self.addEventListener("install", (event) => {

  event.waitUntil(

    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))

  );

});



self.addEventListener("fetch", (event) => {

  event.respondWith(

    caches

      .match(event.request)

      .then((response) => response || fetch(event.request))

  );

});

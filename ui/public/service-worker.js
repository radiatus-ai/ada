// service-worker.js

const CACHE_NAME = 'city-wireframe-cache-v3';
const MODEL_URLS = [
  'https://storage.googleapis.com/ui-models/sanfrancisco.gltf',
  'https://storage.googleapis.com/ui-models/sanfrancisco.bin',

  'https://storage.googleapis.com/ui-models/chicago.gltf',
  'https://storage.googleapis.com/ui-models/chicago.bin',

  'https://storage.googleapis.com/ui-models/losangeles.gltf',
  'https://storage.googleapis.com/ui-models/losangeles.bin',

  'https://storage.googleapis.com/ui-models/newyork.gltf',
  'https://storage.googleapis.com/ui-models/newyork.bin',

  'https://storage.googleapis.com/ui-models/sanfrancisco.gltf',
  'https://storage.googleapis.com/ui-models/sanfrancisco.bin',

  'https://storage.googleapis.com/ui-models/seattle.gltf',
  'https://storage.googleapis.com/ui-models/seattle.bin',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return Promise.all(
          MODEL_URLS.map((url) =>
            fetch(url, { mode: 'cors', credentials: 'same-origin' }).then(
              (response) => cache.put(url, response)
            )
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200) {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();

        // Check if this is a GLTF file
        if (event.request.url.endsWith('.gltf')) {
          return response.json().then((gltf) => {
            const binUrl = new URL(gltf.buffers[0].uri, event.request.url).href;

            // Fetch and cache the .bin file
            return fetch(binUrl).then((binResponse) => {
              if (binResponse && binResponse.status === 200) {
                return caches.open(CACHE_NAME).then((cache) => {
                  cache.put(binUrl, binResponse.clone());
                  cache.put(event.request, responseToCache);
                  return response;
                });
              }
              return response;
            });
          });
        } else {
          // For non-GLTF files, cache as usual
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        }
      });
    })
  );
});

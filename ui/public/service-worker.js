// const CACHE_NAME = 'ada-3d-models-cache-v1';
// const MODEL_URLS = [
//   // 'https://storage.googleapis.com/ui-models/seattle.gltf',
//   'https://storage.googleapis.com/ui-models/sanfrancisco.gltf',
//   'https://storage.googleapis.com/ui-models/sanfrancisco.bin',
//   // 'https://storage.googleapis.com/ui-models/newyork.gltf',
//   // 'https://storage.googleapis.com/ui-models/chicago.gltf',
//   // 'https://storage.googleapis.com/ui-models/losangeles.gltf',
// ];

// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(MODEL_URLS).catch((error) => {
//         console.error('Failed to cache models:', error);
//       });
//     })
//   );
// });

// self.addEventListener('activate', (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheName !== CACHE_NAME) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request).then((cachedResponse) => {
//       if (cachedResponse) {
//         // If the request is in our MODEL_URLS, always return the cached version
//         if (MODEL_URLS.includes(event.request.url)) {
//           return cachedResponse;
//         }

//         // For other resources, check if we need to refresh the cache
//         return fetch(event.request).then((fetchedResponse) => {
//           if (!fetchedResponse || fetchedResponse.status !== 200) {
//             return cachedResponse;
//           }

//           // Update the cache with the new response
//           caches.open(CACHE_NAME).then((cache) => {
//             cache.put(event.request, fetchedResponse.clone());
//           });

//           return fetchedResponse;
//         }).catch(() => cachedResponse);
//       }

//       // If the resource is not in the cache, fetch it from the network
//       return fetch(event.request).then((response) => {
//         if (!response || response.status !== 200) {
//           return response;
//         }

//         // Cache the fetched resource
//         caches.open(CACHE_NAME).then((cache) => {
//           cache.put(event.request, response.clone());
//         });

//         return response;
//       });
//     })
//   );
// });

// // Periodically update the model cache
// self.addEventListener('periodicsync', (event) => {
//   if (event.tag === 'update-model-cache') {
//     event.waitUntil(updateModelCache());
//   }
// });

// async function updateModelCache() {
//   const cache = await caches.open(CACHE_NAME);
//   for (const url of MODEL_URLS) {
//     try {
//       const response = await fetch(url);
//       if (response.ok) {
//         await cache.put(url, response);
//       }
//     } catch (error) {
//       console.error(`Failed to update cache for ${url}:`, error);
//     }
//   }
// }

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.routing.registerRoute(
    ({request}) => request.destination == 'image',
    new workbox.strategies.NetworkFirst()
);

// const CACHE_NAME = "version-1";
// const urlsToCache = [ 'index.htm', 'logo.png', 'js/script.js','/img/logo/logo.png', 'css/style.css' ];

// const self = this;

// // Install SW
// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then((cache) => {
//                 console.log('Opened cache');

//                 return cache.addAll(urlsToCache);
//             })
//     )
// });

// // Listen for requests
// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request)
//             .then(() => {
//                 return fetch(event.request) 
//                     .catch(() => caches.match('index.htm'))
//             })
//     )
// });

// // Activate the SW
// self.addEventListener('activate', (event) => {
//     const cacheWhitelist = [];
//     cacheWhitelist.push(CACHE_NAME);

//     event.waitUntil(
//         caches.keys().then((cacheNames) => Promise.all(
//             cacheNames.map((cacheName) => {
//                 if(!cacheWhitelist.includes(cacheName)) {
//                     return caches.delete(cacheName);
//                 }
//             })
//         ))
            
//     )
// });



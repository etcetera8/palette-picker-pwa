this.addEventListener('install', event => {
  event.waitUntil(
    caches.open('assets-v2').then(cache => {
      return cache.addAll([
        '/',
        '/js/scripts.js',
        '/styles/styles.css',
        '/index.html'
      ])
    })
  )
});

this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

this.addEventListener('activate', event => {
  let cacheWhitelist = ['assets-v2'];

  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key)
        }
      }));
    })
  );
});
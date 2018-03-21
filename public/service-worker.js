this.addEventListener('install', event => {
  event.waitUntil(
    caches.open('assets-v2').then(cache => {
      return cache.addAll([
        '/',
        '/js/scripts.js',
        '/js/jquery-3.3.1.slim.min.js',
        '/styles/styles.css',
        '/index.html',
        '/assets/lock.png',
        '/assets/unlock.png',
        '/assets/trash.png',
        '/assets/trashHover.png'
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
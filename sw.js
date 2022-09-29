self.addEventListener('install', (event) =>{
    console.log('SW: Instalado');
    const respCache = caches.open('cache-v1').then((cache)=>{
       return cache.addAll([
        '/',
        '/index.html',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
        '/js/app.js',
        'https://reqres.in/api/users?page=2',
        'http://code.jquery.com/jquery-1.9.1.min.js',
        'https://reqres.in/api/users',
        ])
        
    });
    event.waitUntil(respCache);
});


//only cache
self.addEventListener('fetch', (event)=>{
   const respCache = caches.match(event.request);
   event.respondWith(respCache)
})
// Jade Static Ops service worker: exists so Chrome can install the page as an app.
// It never caches anything; every request goes to the network as before.
self.addEventListener('install',function(e){self.skipWaiting();});
self.addEventListener('activate',function(e){self.clients.claim();});
self.addEventListener('fetch',function(e){});

// Jade Static Builds service worker: exists so Chrome can install the link page as an app.
// It never caches anything; every request goes to the network as before.
// Pages re-trigger 2026-11-06: ops/ removed, force rebuild.
self.addEventListener('install',function(e){self.skipWaiting();});
self.addEventListener('activate',function(e){self.clients.claim();});
self.addEventListener('fetch',function(e){});

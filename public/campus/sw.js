const VERSION='douaa-flocons-v2-20261118';const FILES=['./','./index.html','./style.css','./content.js','./app.js','./icon.svg','./manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const req=e.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;e.respondWith(caches.match(req).then(c=>c||fetch(req).then(r=>{if(r.ok&&req.url.startsWith(self.registration.scope)){const clone=r.clone();caches.open(VERSION).then(cache=>cache.put(req,clone))}return r})))})

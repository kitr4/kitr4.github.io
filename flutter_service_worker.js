'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"221e01ef": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.bin": "181fcd1f1573f63d725457ac75e255f7",
"assets/AssetManifest.bin.json": "7260a183cb5c724926fdf679b72eb1a3",
"assets/AssetManifest.json": "e925de4359d0ca17bbd0a79b6c916509",
"assets/assets/app_icon_32.png": "582e778d5c31777411b026fa459abe57",
"assets/assets/github-mark-white.png": "1dee40f2668d5c719eafa2c89296f5e7",
"assets/assets/github-mark-white.svg": "a0b00583d93c2f7084ad151ee0849934",
"assets/assets/github-mark.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/github-mark.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"assets/assets/kitra_cv.jpg": "c0a01393245afde98b90ec7c9f007b60",
"assets/assets/kitra_cv.png": "74b47c77e737878cd63e9761c2c29bf4",
"assets/assets/linkedin.svg": "516e3205803770ca8c710d6a0a54969f",
"assets/assets/li_blue.png": "1b18d461ce75c75fdb4d7b6ec08b3e65",
"assets/assets/li_white.png": "933375fd56532e378d23db0e60f7c792",
"assets/assets/mig_01.png": "6aaa700c1dfe1249233af3b9d9dc42c8",
"assets/assets/picture1.jpeg": "45a760a0447731d3eedfec34c946c187",
"assets/assets/picture2.jpeg": "db27f2df3e3cd20280d3e2e99261306f",
"assets/assets/picture3.jpeg": "a6e28adbe25d35c26e9d28832a4da378",
"assets/assets/picture4.jpeg": "3a45021c962576e8044409f315edf512",
"assets/assets/picture5.jpeg": "77b23b8066f3ed20b029a6cc215c0c86",
"assets/assets/picture6.jpeg": "3bf5e75ffc192d166ff686c5364d43cc",
"assets/assets/placeholder.png": "8d4363bb1f1fa262e4fcbce8c6f97c18",
"assets/FontManifest.json": "01b8108cfebc493da6a2c3bd8dae3bd1",
"assets/fonts/MaterialIcons-Regular.otf": "c0784b0f37baa3c5912ca304b7417ad8",
"assets/NOTICES": "d28bf9d4f25309c688eb1fc865da3514",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "e73f0125ca87ce9b1164d5e8aba546ae",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "3aa91e570e37eb6dc6b2b751b7d09cf5",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "495d7f6b8f7ac5c54e771cb0ad805fbd",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "74b47c77e737878cd63e9761c2c29bf4",
"files/8cd4bb6f": "d41d8cd98f00b204e9800998ecf8427e",
"files/JeppePorsing_CV.pdf": "5c7140e3a75150e481589ead8400f707",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "483ed8a0d92c4d68b2a4fe5e09c84268",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "579581049041eff2486cebc9c3f96b3e",
"/": "579581049041eff2486cebc9c3f96b3e",
"main.dart.js": "009c740a65e3368bbd683d180277b1b6",
"manifest.json": "dfbf54f7e9e3029690354b60df15029b",
"version.json": "ecb1a0a9143862f9b719cff3adaa9cc0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b185038c6e3a1786e0d2bc13d67d1061",
".git/config": "3c7d425663126b1e9a844a6a16e81839",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "99e1c3f8e4c6202e99e4a0e955d70dd9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3175816ae3b32a4712fe1d234104fbe1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1c04462e2690589cdf140413ce694a7a",
".git/logs/refs/heads/main": "1c04462e2690589cdf140413ce694a7a",
".git/logs/refs/remotes/origin/HEAD": "69213518c2976d98ef2ed219ff13a5f1",
".git/logs/refs/remotes/origin/main": "cbce4439db29573ca1f6710e61965475",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/43841de50cc882da45062026cb4b82940e334b": "ee939fff75b0cabffee97e8d5f497563",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/c8ae52c2f858544ea4cc6bcb6863953c0f6fb4": "a2b6586a8abc6970d34ac120fa65acd6",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/56/274162bd78a764da3c81595708f3d5c4847dd5": "8b3498aaec97b7b318b4aa1821ef3523",
".git/objects/56/db3feb4ad890a15c0ef0faebab01bc6d8cbc22": "09b84f18a02afdb86b7f492ba26b4d52",
".git/objects/59/aabf7e652e8d2fdfb5a69636217265ba803223": "7969019a67389d6edcb21ffc2349f219",
".git/objects/5c/913267492cbcd2aaa26c2d97b2cd0e97ba8963": "8c4c1dc9f213737c80db3bd635a197c8",
".git/objects/67/639d69ef4eda1a4519e4f5aa95c0463c72b26d": "4ea2ae84f0e05aba2e2862b5f8c02738",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/78/768daa871e4e2f934b17cca9c3d6c1fda6fc5a": "c4d1d5cafba4d19d83ec8764f939cc6c",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/f184c71f659249e1a5ba0859917353d514bae5": "ab6c8753aaf1bc8b731c8b96e7d3be69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/9b391e6b010462d6c7b19e60625d353dfc7b83": "4b28292d71e30f2787059cf3b2da89d2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/1647d3ebcdab0b8651866e71512ac320679e7d": "62bc0c78a16724e0b69a53ee957b2113",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/main": "c0565edb26d7b91a9949235aad3b6d01",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c0565edb26d7b91a9949235aad3b6d01",
"assets/asset/2.0x/charms-and-hoops.png": "c7a0c8b028b23d5fc5ed1a07cc558357",
"assets/asset/2.0x/hawaiian-necklace.png": "31777228451a56a3abc442ff7308d388",
"assets/asset/2.0x/how-to-buy.png": "268530a701761ae229ad6dad3d9b0c75",
"assets/asset/2.0x/ilas.png": "c53101abd8174c6bb31f90f62f1f2687",
"assets/asset/2.0x/mb-background.png": "de61775af2a140b23121a3e2ca69735e",
"assets/asset/2.0x/memori-chain.png": "705c5fbabed412ae11db740d805fc5e8",
"assets/asset/2.0x/red-chilli.png": "b75f726a36fc6f38e3e28b4e121b16dd",
"assets/asset/2.0x/sea-lover-necklace.png": "5d3d5e60e70ba7413cd66b26fa9810c5",
"assets/asset/2.0x/sunny.png": "e019b93aaaa20f250bffeb4df4f6f84a",
"assets/asset/2.0x/surfboard.png": "ae3f434ea461d73b359e72ebdf335a74",
"assets/asset/2.0x/web-background.png": "27721ddcbdf95db9e31a1c5bab4d3386",
"assets/asset/3.0x/charms-and-hoops.png": "8460d046d510acfd64e34c22879e592e",
"assets/asset/3.0x/hawaiian-necklace.png": "bdafe908ae6079df10ac80a66ed25026",
"assets/asset/3.0x/how-to-buy.png": "3853bcee2c0c970e3adb595670b08dec",
"assets/asset/3.0x/ilas.png": "2bb0389ae266cad44d2a2e02b01e07c2",
"assets/asset/3.0x/mb-background.png": "61d637140320ac59156286ffcdf8114f",
"assets/asset/3.0x/memori-chain.png": "997e9b10162a1cb7c29d985f0b8713f4",
"assets/asset/3.0x/red-chilli.png": "ab91b2b8cb3245151848cd6a8e64ab79",
"assets/asset/3.0x/sea-lover-necklace.png": "32a2f855702d8d5eb0b2da67db340bcf",
"assets/asset/3.0x/starfish-one.png": "309d10db714e27a08c60a93efc045f12",
"assets/asset/3.0x/sunny.png": "4ea7d1a61aed1bf9b2f1a28800ad0259",
"assets/asset/3.0x/web-background.png": "73d552ad21a64fbfad39c01a55aecec9",
"assets/asset/charms-and-hoops.png": "02d7d556f638d3592c278b03e86d2496",
"assets/asset/hawaiian-necklace.png": "f78f54badc13fa78a9a02a7bfefcdf37",
"assets/asset/how-to-buy.png": "cbe5692154ec7264026121f4367741c6",
"assets/asset/mb-background.png": "ce5d99e63e03fd7201e14c13263b992c",
"assets/asset/memori-chain.png": "790d5637339ab106fd60c0a617834bc8",
"assets/asset/red-chilli.png": "05737b37c9b5220b16e1bda2523d5b53",
"assets/asset/sea-lover-necklace.png": "41a286c103e52ae68ac302c1fdc65cac",
"assets/asset/starfish-one.png": "fc5a8c23dbc47672b5beb96dfe6b2b6e",
"assets/asset/sunny.png": "cafec987e386bdf112ba44d2a0b9accb",
"assets/asset/surfboard.png": "444d1e1d9ac808e5bd46ea6e6e70bd8a",
"assets/asset/web-background.png": "7fb887421ececd5cef0dd54ece0027f2",
"assets/AssetManifest.bin": "a6cb0b4ab7620539ac1201064c750e6e",
"assets/AssetManifest.bin.json": "c289e30e87503c245acde7b47c10f57b",
"assets/AssetManifest.json": "c532fe6568b3c12443a1e8c9f18e83c3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "de95310ca305cb9788715c461e69ea73",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "706e9d852854ee24bfa848d1fdfe4b66",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "718143a72528b6b69c8b208c4428e900",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a67d82e720f92f395243076d95459545",
"/": "a67d82e720f92f395243076d95459545",
"main.dart.js": "6fc23df87a8210d1c5ba1fa4338651b0",
"manifest.json": "e779d0b317a6e9e6e316adf1ee053376",
"version.json": "1e1844b7cf0bc7d2a0572506426f5e3f"};
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

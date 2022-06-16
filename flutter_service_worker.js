'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a388eb8197e2777b1857fc48aa32dc8d",
"assets/assets/data/burc_mitoloji.json": "463b800410557f0c5a234bc16c302806",
"assets/assets/images/akrep8.png": "de6fd20a606ca9c8e9ef484b485f2c63",
"assets/assets/images/akrep_buyuk8.png": "3b45ed16a9bec3761018f6d4894c2267",
"assets/assets/images/aslan5.png": "dcd82a769655b05f69f47c2408f14d52",
"assets/assets/images/aslan_buyuk5.png": "50e3d47144e07f89448e78edcede590a",
"assets/assets/images/balik12.png": "4fa6719303a04de6d37eb238407b6247",
"assets/assets/images/balik_buyuk12.png": "85d0507f826e18d748f572af9b6cc0de",
"assets/assets/images/basak6.png": "475073999d906239a71723e778be5ece",
"assets/assets/images/basak_buyuk6.png": "e11098ffcac54ea9129f7d870b4a3430",
"assets/assets/images/boga2.png": "d1fbf0ed41eb7222ecf1edad07880876",
"assets/assets/images/boga_buyuk2.png": "699f800bc4f4036d9146cee6287c9e5b",
"assets/assets/images/diyet_image/akrep.jpg": "77e5cd6d38296913a05789288e9d3467",
"assets/assets/images/diyet_image/aslan.jpg": "c2cac8ec2f0bd43fd4ea59100bb1066f",
"assets/assets/images/diyet_image/balik.jpg": "8e9858ea0e0424f512c0552c4b3d11de",
"assets/assets/images/diyet_image/basak.jpg": "1807fd314c9e53547b7215789b28bb06",
"assets/assets/images/diyet_image/boga.jpg": "df21b29319fa50e0df9f52aa4e653a8a",
"assets/assets/images/diyet_image/ikizler.jpg": "d84d78bb7d8161494afe1b24a912135f",
"assets/assets/images/diyet_image/koc.jpg": "91238c93c514c84d50b4d87eaf77dec7",
"assets/assets/images/diyet_image/kova.jpg": "937a19d5e472ec136681018cfe1fae78",
"assets/assets/images/diyet_image/oglak.jpg": "8bf887cc0bd1cea8ea8046cc7db3a336",
"assets/assets/images/diyet_image/terazi.jpg": "985b81489cc27d554cdc97a3428eb1ff",
"assets/assets/images/diyet_image/yay.jpg": "eda8d26f9b291d513f252615aa392d15",
"assets/assets/images/diyet_image/yengec.jpg": "29cc08641bcec14d4ed82ce3211e1b40",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_buyuk/Akrep.jpg": "4b0bb7bba627eddbc5756450749f8dfe",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_buyuk/Aslan.jpg": "3be09f25af5b565026bccae63f21da19",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_buyuk/Balik.jpg": "f3061a88c093a3cfe593d9d88ba94842",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_buyuk/Basak.jpg": "a0fb71f3e16d6d87dbf26d42b6f317cf",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_buyuk/Boga.jpg": "f29411ab334c40c4d848b60d1cd5905b",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_buyuk/Ikizler.jpg": "6a5e4340e4f2106aab6fc189a53503ae",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_buyuk/Koc.jpg": "8fb2f8b88f80923f7370b32d1711d926",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_buyuk/Kova.jpg": "2058ab37e5ad61be236e804c8d599a45",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_buyuk/Oglak.jpg": "1d899423a3a939bba51f58ae190c9856",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_buyuk/Terazi.jpg": "55aeeb43f033ce7dea1f9ba2127729bc",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_buyuk/Yay.jpg": "80465374392f8aea9929f5080604d76b",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_buyuk/Yengec.jpg": "c972813aa550f06e0d5a5fdbea001940",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_kucuk/Akrep.jpg": "1a5ea7adf2517b77396661e90ab8da8b",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_kucuk/Aslan.jpg": "53cfe08091a1085e222294804418a776",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_kucuk/Balik.jpg": "3003d1da624414baf2028ef81e0e994f",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_kucuk/Basak.jpg": "5fe2fa4a294ab4a356ca6feec730803e",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_kucuk/Boga.jpg": "66b5559a604d5933ed2fb69bdc88a018",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_kucuk/Ikizler.jpg": "4504ae71be2c00fae9f9339c6c26c29f",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_kucuk/Koc.jpg": "93144a7eafb25c78429e43a8c15652bd",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_kucuk/Kova.jpg": "b8708d9961012ec5bcc6d09a9fb5353d",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_kucuk/Oglak.jpg": "fc3ea554565f2df7c4474f71888314c4",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_kucuk/Terazi.jpg": "970ad485496dbc3e8a86cd28978c1167",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_kucuk/Yay.jpg": "1aa14db13c7021822f43c00606344e8f",
"assets/assets/images/gunluk_yorum_image/gunluk_yorum_kucuk/Yengec.jpg": "51b2956da5674b09b16c5a75da1bfaad",
"assets/assets/images/ikizler3.png": "f3d1aaa48decd9d2a99fb74aa1a6462a",
"assets/assets/images/ikizler_buyuk3.png": "0ee79482d99d3b580a3f687e40b2c45a",
"assets/assets/images/koc1.png": "28603f98b563d5b20db617095b4f779e",
"assets/assets/images/koc_buyuk1.png": "4bfc7939c9038abceb1ea327ede96cb8",
"assets/assets/images/kova11.png": "afe567b5fe6fad673e51f4bb390e8da3",
"assets/assets/images/kova_buyuk11.png": "32310db1dd8c9837c100a69b6bbba984",
"assets/assets/images/mitoloji_image/Akrep1.jpg": "96ae4694ad497c8d079833e4b82e2f36",
"assets/assets/images/mitoloji_image/Akrep2.jpg": "888a8c5d2bc791fd2a4e64d662eb556f",
"assets/assets/images/mitoloji_image/Aslan1.jpg": "af35d161b9acb10067abcd37fbc98c0b",
"assets/assets/images/mitoloji_image/Aslan2.jpg": "8acf7fa79f9b260c03f5818596145f6b",
"assets/assets/images/mitoloji_image/Balik1.jpg": "7e91c418ef4667508ab90a5bc227a939",
"assets/assets/images/mitoloji_image/Balik2.jpg": "9cc3744a2fe87c89b0f5a623737b2592",
"assets/assets/images/mitoloji_image/Basak1.jpg": "fb008beb15fa99f396a22ef0266c4c81",
"assets/assets/images/mitoloji_image/Basak2.jpg": "8d373c72fddf50cd16ba94a41c1b1952",
"assets/assets/images/mitoloji_image/Boga1.jpg": "5f91e1f980d445445f262e277cac8bb6",
"assets/assets/images/mitoloji_image/Boga2.jpg": "1c0483145a3893609a3bba9b9e15276f",
"assets/assets/images/mitoloji_image/Ikizler1.jpg": "93942d0128a8b75806c20a71763a7fdc",
"assets/assets/images/mitoloji_image/Ikizler2.jpg": "950f3338042b0f6cde1017b728540345",
"assets/assets/images/mitoloji_image/Koc1.jpg": "303653999b4d20e8516c55e5aa800ff8",
"assets/assets/images/mitoloji_image/Koc2.jpg": "193d3745daf71c288c75697c8da686ae",
"assets/assets/images/mitoloji_image/Kova1.jpg": "23749311706e7899cfb148237c7bfe8c",
"assets/assets/images/mitoloji_image/Kova2.jpg": "7661bb476954e2f12a7b0edf6565067e",
"assets/assets/images/mitoloji_image/Oglak1.jpg": "ec0e8d650ee2ec62cad12454823815b3",
"assets/assets/images/mitoloji_image/Oglak2.jpg": "46c1a98af5dc265154dfd178a81fdf84",
"assets/assets/images/mitoloji_image/Terazi1.jpg": "f1a09ce0767b9e5f80fd89ae1ff4f14b",
"assets/assets/images/mitoloji_image/Terazi2.jpg": "0d8871772c152f4eac2446b3a850223e",
"assets/assets/images/mitoloji_image/Yay1.jpg": "f7d72c3856365b5df9b4941aaa57a568",
"assets/assets/images/mitoloji_image/Yay2.jpg": "5d4cdd38b1f554b20ec802db17f4cf77",
"assets/assets/images/mitoloji_image/Yengec1.jpg": "bca3ecc3558717f8d3223eb0389da0c6",
"assets/assets/images/mitoloji_image/Yengec2.jpg": "abc6edc368511be13fd861abc53062b9",
"assets/assets/images/oglak10.png": "e8aa97eeed72ae414ae2321c9adb3562",
"assets/assets/images/oglak_buyuk10.png": "8a51866868d12b81e404c0be30ee224d",
"assets/assets/images/opening_image/burccemberi.jpg": "fecbd507f77e1666d9e5348e7b166466",
"assets/assets/images/opening_image/diyet.jpg": "0d2ca26e2b60df7a42e6244b95f442de",
"assets/assets/images/opening_image/grup.jpg": "6069e7832db52659c8ef541dde735be8",
"assets/assets/images/opening_image/login.jpg": "ca7ff5f7ffd073614a5a17dbb4facb7d",
"assets/assets/images/opening_image/logout.jpg": "1405142da23854c1b05c3e03b26aa513",
"assets/assets/images/opening_image/mitoloji.jpg": "be59b2fb8c721c6d7bdc09e8d661c4e6",
"assets/assets/images/opening_image/profile.jpg": "8154b2a775eaebd53406f7258cc83b4a",
"assets/assets/images/opening_image/signUp.jpg": "aead88cc8d4b0be1132ef3c3dc39409c",
"assets/assets/images/opening_image/uyum.jpg": "7065e7ab4912c17bc331621522f57f76",
"assets/assets/images/terazi7.png": "8eeb4a083cfa9bce5f313e14250b386a",
"assets/assets/images/terazi_buyuk7.png": "9f146ecc8608ba605651a1dc81524269",
"assets/assets/images/yay9.png": "abd4c1119c37b0a5008b16b66b7c5c0d",
"assets/assets/images/yay_buyuk9.png": "f8ae9669d04b2dd89975e9123365f0ce",
"assets/assets/images/yengec4.png": "5853a4d87b8cf11b6cfb0f89a1c726db",
"assets/assets/images/yengec_buyuk4.png": "939597bdb6208ca57c4a94679e9bcc89",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "cccf8284b5b79b715520688d85b778e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "850b0c4c2c49c69039d851af4062ce5c",
"/": "850b0c4c2c49c69039d851af4062ce5c",
"main.dart.js": "03d918875a0d804992bfa54aa3f8d757",
"manifest.json": "ff093d1873efe9104296d4a6e3412fcd",
"version.json": "f990db7a8650f46197065c85c92e6c61"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

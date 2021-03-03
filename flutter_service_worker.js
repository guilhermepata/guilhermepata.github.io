'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "777ee96a053cbb46ac9e28b3295e2569",
"assets/assets/images/image404_dark.ai": "4e571b8f745f0deb0720ad1ee9cbabe0",
"assets/assets/images/image404_dark.png": "0b038d70682cdc4603f06989d3cced2e",
"assets/assets/images/image404_dark_big.png": "99b1e97117a1b77dde00db525e1ba42e",
"assets/assets/images/image404_light.ai": "120ad9d4910638064356eae1a9de6456",
"assets/assets/images/image404_light.png": "599bf6369ed03360b63a4438d4cbe36d",
"assets/assets/images/image404_light_big.png": "639e2fe91c94982e760a8045725de500",
"assets/assets/images/photo_cropped.jpeg": "9517b31c60afade92865ab8a51921761",
"assets/assets/images/photo_cropped_small.jpeg": "51593c1bb42d58a648651f574f612034",
"assets/assets/posts/in_search_of_gender.md": "0a22c4c36fe010a38a37ab67cac5367f",
"assets/assets/posts/on_the_rights_of_brains.md": "777d4b638ba553927f1b89c44717b920",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/google-fonts/Lora-Bold.ttf": "eec9b1b134bfc16624d240b70db7ed59",
"assets/google-fonts/Lora-BoldItalic.ttf": "1ad2aded60e9b2fa80315e8aab0e0a5d",
"assets/google-fonts/Lora-Italic-VariableFont_wght.ttf": "fd66db567c00ec17273d45b729a36ead",
"assets/google-fonts/Lora-Italic.ttf": "ab2098e1bf41df6b514fdf1f3d4f30b0",
"assets/google-fonts/Lora-Medium.ttf": "c3e2f11036e070e9ea5a4cc2c1169165",
"assets/google-fonts/Lora-MediumItalic.ttf": "f281d9bb9a974ed59f13104278dd1868",
"assets/google-fonts/Lora-Regular.ttf": "c684a3de5c014a61d5139d5b97da99fc",
"assets/google-fonts/Lora-SemiBold.ttf": "6c384a752b937ec93378fe87c2494234",
"assets/google-fonts/Lora-SemiBoldItalic.ttf": "c4d0098ab3fd2e0968cb946a99c92071",
"assets/google-fonts/Lora-VariableFont_wght.ttf": "337fa370c6ba675d1c9d3ba0d1444145",
"assets/google-fonts/MerriweatherSans-Bold.ttf": "3a7c213cfc99896e5dc0c404f86fac32",
"assets/google-fonts/MerriweatherSans-BoldItalic.ttf": "8177395443e8df7295409c97a4e5b924",
"assets/google-fonts/MerriweatherSans-ExtraBold.ttf": "eb9d9d82b5f85d413b0a0ffe11acacef",
"assets/google-fonts/MerriweatherSans-ExtraBoldItalic.ttf": "697c16fdaf25756636632851c7592cb0",
"assets/google-fonts/MerriweatherSans-Italic-VariableFont_wght.ttf": "778dea727a40e17b051a578938bf3d31",
"assets/google-fonts/MerriweatherSans-Italic.ttf": "d9f369ca2cd05f05213fbe6bc360e726",
"assets/google-fonts/MerriweatherSans-Light.ttf": "0ef888f52b5b7e47e90dae4b281bdb1e",
"assets/google-fonts/MerriweatherSans-LightItalic.ttf": "b85556c93447e0bf529ce7a8a5e78dbf",
"assets/google-fonts/MerriweatherSans-Medium.ttf": "9a24ada08dba2954eeb76b4c72d0fb8c",
"assets/google-fonts/MerriweatherSans-MediumItalic.ttf": "7369b35dbd2273589def8d948a706acf",
"assets/google-fonts/MerriweatherSans-Regular.ttf": "814a049a5c780b303d4c0097e30b888a",
"assets/google-fonts/MerriweatherSans-SemiBold.ttf": "dd4f4021d0bbfedd858e7e00fcb6bf41",
"assets/google-fonts/MerriweatherSans-SemiBoldItalic.ttf": "34d8cc273b8295b9fa796f820989c89a",
"assets/google-fonts/MerriweatherSans-VariableFont_wght.ttf": "e7876d99c97d113c390f0f1fae1b8f25",
"assets/google-fonts/Rubik-Black.ttf": "3aba47ab577eb14101eb03ac977e6523",
"assets/google-fonts/Rubik-BlackItalic.ttf": "8cf69a68225e1e451dce1b020f6b5338",
"assets/google-fonts/Rubik-Bold.ttf": "071fcca9ce48f336894f072bae4c2440",
"assets/google-fonts/Rubik-BoldItalic.ttf": "8aa7fa4bac8320541a6a01b558c53879",
"assets/google-fonts/Rubik-ExtraBold.ttf": "4b77292b266f2231d56f432424a86df2",
"assets/google-fonts/Rubik-ExtraBoldItalic.ttf": "fa59927d716d7c9ca34785107a9f83d5",
"assets/google-fonts/Rubik-Italic-VariableFont_wght.ttf": "553a4f4977f96a990f178e16c4f5a0dc",
"assets/google-fonts/Rubik-Italic.ttf": "25387d7be6e19cdf09b5e8b627ddeaf5",
"assets/google-fonts/Rubik-Light.ttf": "a742834a58e74553d141450a7dddf5c0",
"assets/google-fonts/Rubik-LightItalic.ttf": "de021b8d7886b2a0e8c5783d95fb55d5",
"assets/google-fonts/Rubik-Medium.ttf": "11f22f212ab3e9b8e241cbd69d3c43e7",
"assets/google-fonts/Rubik-MediumItalic.ttf": "56ed0c74858b75d48c461069715efcd5",
"assets/google-fonts/Rubik-Regular.ttf": "cd619a4f068dc66cc6e58fe0a91a8a34",
"assets/google-fonts/Rubik-SemiBold.ttf": "75852e6bdc48c05b3c39f4b3b94d2a9c",
"assets/google-fonts/Rubik-SemiBoldItalic.ttf": "54dcba8bf2c662865ee2196d3b66cbfa",
"assets/google-fonts/Rubik-VariableFont_wght.ttf": "86eb98635233be43f682f26bad629f11",
"assets/google-fonts/SourceSerifPro-Black.ttf": "e16e4073196e4e6a0540002e3d20998e",
"assets/google-fonts/SourceSerifPro-BlackItalic.ttf": "a9c126d10371e0d28bdbe999b3b986af",
"assets/google-fonts/SourceSerifPro-Bold.ttf": "04581dec3d9cb979a6b310c83596ea37",
"assets/google-fonts/SourceSerifPro-BoldItalic.ttf": "4822e7b237f518fc4e1099efefbb4bbe",
"assets/google-fonts/SourceSerifPro-ExtraLight.ttf": "5dac2734ba215707eeb4e1c8b34d13b7",
"assets/google-fonts/SourceSerifPro-ExtraLightItalic.ttf": "915847bbd2486512ae8545ad2d4980ef",
"assets/google-fonts/SourceSerifPro-Italic.ttf": "94a662b2800256801a39fb9e419be52a",
"assets/google-fonts/SourceSerifPro-Light.ttf": "f59825df830cac9c62909f8aaae71a3f",
"assets/google-fonts/SourceSerifPro-LightItalic.ttf": "754dfc7145345b65e8a54878b75a1a4b",
"assets/google-fonts/SourceSerifPro-Regular.ttf": "67a017e48d0bf5f7049daafd7ac68697",
"assets/google-fonts/SourceSerifPro-SemiBold.ttf": "b883eaa137d26dec7a3e210a67fedc37",
"assets/google-fonts/SourceSerifPro-SemiBoldItalic.ttf": "f1b3c8069231b4ed735897c94facd602",
"assets/NOTICES": "3b5e29955d5d6319b63c885fcc77cc8a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2e0ff23abe9c2fc79b4a561ac46dc976",
"/": "2e0ff23abe9c2fc79b4a561ac46dc976",
"main.dart.js": "94ce0192589b05488b27744f976ada40",
"manifest.json": "5a9573c9ea7681ddd3617d506a7cbcdc",
"README.md": "16756e36efa16f5767acf72d31e9696f",
"version.json": "de1d870d5c33e155e9ae44cc81764a3d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
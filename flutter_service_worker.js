'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "404.html": "63a2fe5e81f4b0c25f9d2482215193b1",
"assets/AssetManifest.json": "1431430df53627fd4b50e44e07d32592",
"assets/assets/custom-icon/fonts/FeatherIcon.ttf": "6641f6848a4cd425c0da7fd674845926",
"assets/assets/images/image404_dark.ai": "4e571b8f745f0deb0720ad1ee9cbabe0",
"assets/assets/images/image404_dark.png": "0b038d70682cdc4603f06989d3cced2e",
"assets/assets/images/image404_dark_big.png": "99b1e97117a1b77dde00db525e1ba42e",
"assets/assets/images/image404_light.ai": "120ad9d4910638064356eae1a9de6456",
"assets/assets/images/image404_light.png": "599bf6369ed03360b63a4438d4cbe36d",
"assets/assets/images/image404_light_big.png": "639e2fe91c94982e760a8045725de500",
"assets/assets/images/photo_cropped.jpeg": "9517b31c60afade92865ab8a51921761",
"assets/assets/images/photo_cropped_small.jpeg": "51593c1bb42d58a648651f574f612034",
"assets/assets/images/photo_cropped_small_bw.jpg": "8b6f5ba026d004a64b166de766ab2a4a",
"assets/assets/images/photo_cropped_small_bw_2.jpg": "7127e8a7305ad26b6ee818b6e8669822",
"assets/assets/images/photo_old_rotated.jpeg": "c8f323c7db8bda5cd623243d855bedd1",
"assets/FontManifest.json": "3397a1082d1bd3e8b147a6107a2938cc",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Newsreader-Bold.ttf": "d312cdc1a9ae0a29052e912738a0b201",
"assets/fonts/Newsreader-BoldItalic.ttf": "6be153019e13517811c8315b313ac235",
"assets/fonts/Newsreader-ExtraBold.ttf": "b5b790a387b43c4855986f33b5004cfa",
"assets/fonts/Newsreader-ExtraBoldItalic.ttf": "af5c5383068af40a45a45938249b0150",
"assets/fonts/Newsreader-ExtraLight.ttf": "6c431f06bbf2a0e68da4642dc3f3290a",
"assets/fonts/Newsreader-ExtraLightItalic.ttf": "9de0abe750d30169e7c8ab689248ca93",
"assets/fonts/Newsreader-Italic.ttf": "63945fdcbc03224da6ca5869bc73cca9",
"assets/fonts/Newsreader-Light.ttf": "99a54ecb5e322aac48c68efb79e0f9a3",
"assets/fonts/Newsreader-LightItalic.ttf": "909b374b1f063b93b8cf66b409135105",
"assets/fonts/Newsreader-Medium.ttf": "43ab372eb865d4bbd527f169ca4f301e",
"assets/fonts/Newsreader-MediumItalic.ttf": "2b3425871a3b552b6a4ac1c4755053c8",
"assets/fonts/Newsreader-Regular.ttf": "1e88aeff854e3cec2491c77cfbcc5f5f",
"assets/fonts/Newsreader-SemiBold.ttf": "dede6d178592e1c0cd3e630f67b663e6",
"assets/fonts/Newsreader-SemiBoldItalic.ttf": "588bc8d730145c6b00996b477eba37f2",
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
"assets/NOTICES": "6d2fbd6b828ef8c82947771b7ed6447a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "a0adbf2e2d85974e1861989a4bbf085a",
"icons/Icon-192.png": "91dc21a9a508042921b5b247f7211cb5",
"icons/Icon-512.png": "0766fdd6dbeab5f5e4e1441cae51ce50",
"index.html": "cf55ffef8f95e57512e70110344dff2c",
"/": "cf55ffef8f95e57512e70110344dff2c",
"main.dart.js": "649342913e75019eea74c0ea009bbf8d",
"manifest.json": "5a9573c9ea7681ddd3617d506a7cbcdc",
"README.md": "16756e36efa16f5767acf72d31e9696f",
"version.json": "de1d870d5c33e155e9ae44cc81764a3d",
"_redirects": "d19ecd80ec5fc811b86eaf13b749b311"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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

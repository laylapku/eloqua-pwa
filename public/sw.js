// this file is just for testing sw in localhost(which does not necessarily work)

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    url: "android-chrome-192x192.png",
    revision: "250f4e7f705f99e58061ae107c1fb87c"
  },
  {
    url: "apple-touch-icon.png",
    revision: "2348c4a37f2f371e454f3728f3ac3111"
  },
  {
    url: "asset-manifest.json",
    revision: "a217625727a2e5c66b0d0c3a7c336b98"
  },
  {
    url: "browserconfig.xml",
    revision: "b12227034b6bd8dfd0f73fadabf326f8"
  },
  {
    url: "favicon-16x16.png",
    revision: "d702524c336889d2be90c48a5466b65a"
  },
  {
    url: "favicon-32x32.png",
    revision: "c55f47cf2613ab56ab753385a7a63d17"
  },
  {
    url: "favicon.ico",
    revision: "8526c7698ee060a14f2ca39e0e4205d3"
  },
  {
    url: "index.html",
    revision: "c139078ccfff412c855461f23bab3eb8"
  },
  {
    url: "manifest.json",
    revision: "38c8f0b9dced2d8bde3937e06b4a37a5"
  },
  {
    url: "mstile-150x150.png",
    revision: "f25411007dfff6999ea493c4ec6b3674"
  },
  {
    url: "precache-manifest.d347c83cc4e76240f3d8a7a75ba5545c.js",
    revision: "d347c83cc4e76240f3d8a7a75ba5545c"
  },
  {
    url: "safari-pinned-tab.svg",
    revision: "688837b715c529204016aa8888516d47"
  },
  {
    url: "service-worker.js",
    revision: "0ca30cf89c26af1eb68c3d6f8a5bb11e"
  },
  {
    url: "site.webmanifest",
    revision: "c2f552420ee251e4422ca9294463ba95"
  },
  {
    url: "static/avatars/BBush.jpg",
    revision: "1dfa94dd817513c432e2d64dcab0bfb3"
  },
  {
    url: "static/avatars/Bezos.jpg",
    revision: "eab04ca69bcd5f4d98bb921cb2e6fe27"
  },
  {
    url: "static/avatars/Bloomberg.jpg",
    revision: "40c3a8b1450038acef2ba0c658fa5387"
  },
  {
    url: "static/avatars/Bono.jpg",
    revision: "8c7263fc3bcf1e696c818c451a69b740"
  },
  {
    url: "static/avatars/Buffett.jpg",
    revision: "4db68f66cc744056b6b176b7265cf6fc"
  },
  {
    url: "static/avatars/Bush.jpg",
    revision: "4e13c188daf48bb7272eb30b3aad8bd7"
  },
  {
    url: "static/avatars/Byrd.jpg",
    revision: "78abb7ff12b718b8dbabcd03138f154c"
  },
  {
    url: "static/avatars/Chaplin.jpg",
    revision: "fe6ebbc2545f9e18261ad3e78e4056b0"
  },
  {
    url: "static/avatars/Churchill.jpg",
    revision: "17b8793cdd768d42b032bc8bae4390b0"
  },
  {
    url: "static/avatars/Clinton.jpg",
    revision: "a5ff588ff35bcbeba6bf4a54a5f8f88c"
  },
  {
    url: "static/avatars/Eisenhower.jpg",
    revision: "0fa1e2c44b8546e3275e8c27f05b50a4"
  },
  {
    url: "static/avatars/ERoosevelt.jpg",
    revision: "ba0075dcab8fc9f52b07c75c42a3c62e"
  },
  {
    url: "static/avatars/Faulkner.jpg",
    revision: "f73dccb89ae88a7a1f5951b5f46b2922"
  },
  {
    url: "static/avatars/Gandhi.jpg",
    revision: "3e5a0180c14986acf18c8b941234e340"
  },
  {
    url: "static/avatars/Gates.jpg",
    revision: "ba143c020c9a359a7b7473a60f7d5d68"
  },
  {
    url: "static/avatars/Gehrig.jpg",
    revision: "19b5eec5f1de33f0977f8d661306f290"
  },
  {
    url: "static/avatars/HClinton.jpg",
    revision: "4aad45ddb7715a75fe32db0f0810cb5e"
  },
  {
    url: "static/avatars/Jobs.jpg",
    revision: "c276e80e343db193e61a850d64894e60"
  },
  {
    url: "static/avatars/Johnson.jpg",
    revision: "c09063d434f776f62cc77e66f8b4da9b"
  },
  {
    url: "static/avatars/Jordan.jpg",
    revision: "9ec56fc2fce8308aaa2c2d8f7606c2e9"
  },
  {
    url: "static/avatars/Kennedy.jpg",
    revision: "1f8630a9e8a39bdf247d95f014b27e84"
  },
  {
    url: "static/avatars/King.jpg",
    revision: "19d7ceba42fbac5a6dab6a4768332c9c"
  },
  {
    url: "static/avatars/Lincoln.jpg",
    revision: "1594c5af6116605428569727e593fa3e"
  },
  {
    url: "static/avatars/Ma.jpg",
    revision: "93b7b22b3bc6fca26281180afcc5bb2b"
  },
  {
    url: "static/avatars/MacArthur.jpg",
    revision: "526ccf28491bac68b481515b5d0879c8"
  },
  {
    url: "static/avatars/MObama.jpg",
    revision: "5c6458c7d46c818496fcbef48fb57abc"
  },
  {
    url: "static/avatars/Musk.jpg",
    revision: "19cc4a08fb2cb9435d2229af5c9e3309"
  },
  {
    url: "static/avatars/Nixon.jpg",
    revision: "ddf811c7e29a1a1eee3e16b023ef6f66"
  },
  {
    url: "static/avatars/Obama.jpg",
    revision: "517bc9d16daf788eb83db0f6e76b0bb3"
  },
  {
    url: "static/avatars/Page.jpg",
    revision: "51b6100d5ebf8e14b4da5fa55bb0c21a"
  },
  {
    url: "static/avatars/Reagan.jpg",
    revision: "43829b76aad2cf3b987f60db5dddbdbd"
  },
  {
    url: "static/avatars/Roosevelt.jpg",
    revision: "d68dc087cb244ba700584664977b43eb"
  },
  {
    url: "static/avatars/Trump.jpg",
    revision: "d5a76ea229bfff01e079f22a3acdec47"
  },
  {
    url: "static/avatars/Wiesel.jpg",
    revision: "b451a2d9ab560ab9599356302902e9e3"
  },
  {
    url: "static/avatars/Winfrey.jpg",
    revision: "5c6134af523fa44b8ae485b8b8d02dfb"
  },
  {
    url: "static/css/main.f9cc1fcf.chunk.css",
    revision: "b228218bf39757a70ea6449a5219d400"
  },
  {
    url: "static/icons/Acknowledgement.png",
    revision: "4f2d7cedeba65be0c200a7870377e917"
  },
  {
    url: "static/icons/Commencement.jpg",
    revision: "0000727f24d8733d24f937de8e63e3ed"
  },
  {
    url: "static/icons/Eulogies.jpg",
    revision: "13ccd4519f35a9dac19c316435345c1f"
  },
  {
    url: "static/icons/Farewell.jpg",
    revision: "8e184a4c5ed496ffac18bf9e6b95903c"
  },
  {
    url: "static/icons/Inauguration.png",
    revision: "c61cf690c4ac78b928416a2fc5cbbc1a"
  },
  {
    url: "static/icons/Inspirational.png",
    revision: "2546dd3da492ccb55accc1a49c22e04f"
  },
  {
    url: "static/icons/Memorial.png",
    revision: "36e5d12520669fed22f9a086ffea039c"
  },
  {
    url: "static/icons/Patriotic.jpg",
    revision: "d95241454a878d81127a10ccb7d4a227"
  },
  {
    url: "static/icons/Political.png",
    revision: "8b7b20cab5dba8d72e4830f5f8b521f6"
  },
  {
    url: "static/icons/Sermon.png",
    revision: "f6c2f4a76b801a8065978fab6d76ceb1"
  },
  {
    url: "static/icons/Social Responsibility.png",
    revision: "451abd58f09190b42d60be57bfd418c4"
  },
  {
    url: "static/icons/War.png",
    revision: "41a060ba8f0997cbcd70fd3d6cb23acc"
  },
  {
    url: "static/js/2.cde5f14b.chunk.js",
    revision: "2fe2182604252d0cece020613ab23f76"
  },
  {
    url: "static/js/main.da2c00b3.chunk.js",
    revision: "c39815bd89bd439bdf2f4db7d0b65616"
  },
  {
    url: "static/js/runtime~main.aa828788.js",
    revision: "5c230e305b1944a7d554a35bb8bfc64b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

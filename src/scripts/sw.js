/* eslint-disable no-unused-vars */
const { assets } = global.serviceWorkerOption;

import "regenerator-runtime";
import CacheHelper from "./utils/cache-helper";

self.addEventListener("install", (event) => {
  console.log("Installing serviceWorker...");
  event.waitUntil(CacheHelper.cacheAppShell([...assets, "./"]))
});

self.addEventListener("activate", (event) => {
  console.log("Activating serviceWorker");
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});

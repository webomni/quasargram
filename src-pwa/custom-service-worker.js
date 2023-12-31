/* eslint-env serviceworker */

/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.config.js > pwa > workboxMode is set to "injectManifest"
 */

import { clientsClaim } from "workbox-core";
import {
  precacheAndRoute,
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
} from "workbox-precaching";
import { registerRoute, NavigationRoute } from "workbox-routing";
import { StaleWhileRevalidate, NetworkFirst } from "workbox-strategies";

self.skipWaiting();
//clientsClaim();
//cleanupOutdatedCaches();
// Use with precache injection
precacheAndRoute(self.__WB_MANIFEST);

// Non-SSR fallback to index.html
// Production SSR fallback to offline.html (except for dev)
/* if (process.env.MODE !== "ssr" || process.env.PROD) {
  registerRoute(
    new NavigationRoute(
      createHandlerBoundToURL(process.env.PWA_FALLBACK_HTML),
      { denylist: [/sw\.js$/, /workbox-(.)*\.js$/] }
    )
  );
} */

/* registerRoute(({ url }) => {
  url.href.startsWith("https");
}, new StaleWhileRevalidate()); */

registerRoute(({ url }) => url.href.startsWith("http"), new NetworkFirst());

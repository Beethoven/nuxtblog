importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "toquedigital",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.b1054fab23f22a7cb761.js",
    "revision": "2e0689409c08730f305c3bdb61d70a49"
  },
  {
    "url": "/_nuxt/layouts/default.63d5eafbc0f6b1d94a8c.js",
    "revision": "8e736fe0521f1fe5172c9e4c8e90cf97"
  },
  {
    "url": "/_nuxt/manifest.a1c217555622bd7233e7.js",
    "revision": "c85b4c132ce71416f18d1dcf22e79791"
  },
  {
    "url": "/_nuxt/pages/index.0c4dd6e612cd38e77290.js",
    "revision": "24e709195dc975f6b004f9a1013bc311"
  },
  {
    "url": "/_nuxt/vendor.cdcb9826f6299625909d.js",
    "revision": "45ccc0546d5d029ed92218e7ac4ebbea"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')


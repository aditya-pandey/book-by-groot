const iimGroot = "iim-groot-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/images/book-back.jpg",
  "/images/book-cover.jpg",
  "/images/groot-intro.jpg",
  "/images/groot-img-02.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(iimGroot).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
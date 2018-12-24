// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/chriscollins/GitHub/chrisssy.com/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/chriscollins/GitHub/chrisssy.com/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/chriscollins/GitHub/chrisssy.com/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/chriscollins/GitHub/chrisssy.com/src/pages/index.js")),
  "component---src-pages-photos-index-js": preferDefault(require("/Users/chriscollins/GitHub/chrisssy.com/src/pages/photos/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/chriscollins/GitHub/chrisssy.com/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/chriscollins/GitHub/chrisssy.com/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/chriscollins/GitHub/chrisssy.com/.cache/json/404.json"),
  "index.json": require("/Users/chriscollins/GitHub/chrisssy.com/.cache/json/index.json"),
  "photos.json": require("/Users/chriscollins/GitHub/chrisssy.com/.cache/json/photos.json"),
  "404-html.json": require("/Users/chriscollins/GitHub/chrisssy.com/.cache/json/404-html.json")
}
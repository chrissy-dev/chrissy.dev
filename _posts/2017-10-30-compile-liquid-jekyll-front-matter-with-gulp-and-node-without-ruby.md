---
layout: post
title: Compile Jekyll liquid templates and frontmatter with Gulp 
featured_image: /static/gulp-jekyll.jpg

---


Going to keep this short and sweet, this is extremely basic but is very easily expandable using globs, renaming, optimisation etc.

Let’s say we have a Jekyll influenced structure with a layout file `default.html`, a `header.html` include (partial) and the actual page content `example-page.html`.

```
my_project/
├── _includes/
│   └── header.html
├── _layouts/
│   └── default.html
└── page.html
```

Let’s say that the `header.html` include partial looks like this:

```html
<header>I'm the header</header>
```

The `default.html` layout looks like this:

```html
<!DOCTYPE html>
    <html lang="en-GB">
    <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title> 
        { % if page.title % } { { page.title | escape } } { % endif % }
    </title>
    </head>
    <body>
    { { content } }
    </body>
</html>
```

and finally `page.html` looks like this:

***Note:** We are using Front Matter to assign variables that are used in the `layout.html` and the `page.html.`*

```html
---
title: I'm the page title
language: Ruby
---

<h1>I'm compiled without using {{ language | upcase }}</h1>
```

## Dependencies and Gulpfile

```sh
npm install liquid-node event-stream gulp-front-matter gulp --save-dev
```

`gulpfile.js` for compiling:

```js
var engine = new Liquid.Engine,
    es = require('event-stream'),
    frontmatter = require('gulp-front-matter'),
    fs = require('fs'),
    Liquid = require('liquid-node'),
    engine.registerFileSystem(new Liquid.LocalFileSystem('./_includes'))

gulp.task('compile', function() {
    return gulp.src(['./page.html'])
        // only compile pages that have changed
        .pipe(changed('./_site/', {
            extension: '.html'
        }))
        // get the frontmatter, accessible via file.meta
        .pipe(frontmatter({
            property: 'meta'
        })).pipe(es.map(function(file, cb) {
            // if layout is defined in the frontmatter, if not use default.html
            if (file.meta.layout) {
                var template = String(fs.readFileSync('./_layouts/' + file.meta.layout + '.html'))
            } else {
                var template = String(fs.readFileSync('./_layouts/default.html'))
            }
            // run the main layout through node-liquid putting frontmatter in 'page' namespace.
            var mainLayout = engine.parseAndRender(template, {
                page: file.meta,
                content: String(file.contents)
            }).then(function(result) {
                // compile page content with no namespace on the frontmatter
                var mainLayout = engine.parseAndRender(result, file.meta).then(function(final) {
                    file.contents = new Buffer(final)
                    cb(null, file)
                })
            })
        }))
        .pipe(gulp.dest('./_site/'))
  })
  ```
  
  Finally running `gulp compile` will compile your templates.
  
  If you’d like an example on GitHub or anything else added to this let me know in the comments and I’ll get right on it.

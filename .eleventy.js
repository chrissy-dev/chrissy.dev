const {
    DateTime
} = require("luxon");
const htmlmin = require("html-minifier");
const yaml = require("js-yaml");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");
const readingTime = require('eleventy-plugin-reading-time');
// Filters
const webmentionsFilter = require('./src/_filters/webmentions-filter.js');
const likesFilter = require('./src/_filters/likes-filter.js');
var sizeOf = require('image-size');
const ColorThief = require('colorthief');

const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItAnchorToc = require("markdown-it-toc-done-right")

module.exports = function (config) {
    // Folders to copy to build dir (See. 1.1)
    config.addPassthroughCopy("src/static");
    config.addPassthroughCopy("src/log/**/*.{jpg,jpeg}");

    if (process.env.ELEVENTY_ENV === 'production') {
        // Minify HTML output
        config.addTransform("htmlmin", function (content, outputPath) {
            if (outputPath && outputPath.endsWith(".html")) {
                let minified = htmlmin.minify(content, {
                    useShortDoctype: true,
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true
                });
                return minified;
            }
            return content;
        });
    }

    // Markdown Parsing
    config.setLibrary(
        'md',
        markdownIt({
            html: true,
            breaks: true,
            typographer: true
        }).use(markdownItAnchor, {
            permalink: true,
            permalinkSymbol: '#',
            permalinkClass: 'anchor',
            permalinkBefore: true,
            level: 2
        }).use(markdownItAnchorToc, {
            listType: 'ul',
            level: 2
        })
    );

    config.addFilter('likesFilter', likesFilter);
    config.addFilter('webmentionsFilter', webmentionsFilter);

    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    config.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {
            zone: 'utc'
        }).toFormat('yyyy-LL-dd');
    });

    config.addFilter('urlDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {
            zone: 'utc'
        }).toFormat('dd-LL-yyyy');
    });

    config.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(new Date(dateObj), {
            zone: 'utc'
        }).toFormat("dd LLL yyyy");
    });

    config.addFilter("simpleDate", dateObj => {
        return DateTime.fromJSDate(new Date(dateObj), {
            zone: 'utc'
        }).toFormat("dd MMMM yyyy");
    });

    config.addFilter("w3cDate", function (date) {
        return date.toISOString();
    });


    config.addFilter("media", function (filename, page) {
        console.log('FILENAME: ' + filename, 'PAGE: ' + page);

        const path = page.inputPath.split('/')
        if (path.length && path.includes('log')) {
            const subdir = path[path.length - 2]
            return `/static/log/${subdir}/${filename}`
        }
        return filename
    });

    config.addNunjucksAsyncShortcode("photo", function (img) {
        let imgPath = `./src${img.context}${img.src}`;
        let d = sizeOf(imgPath);

        return ColorThief.getColor(imgPath).then(color => {
            return `<figure class="-mx-6 md:mx-0 my-8">
                <div class="relative" style="background-color: rgba(${color},1); padding-bottom: calc(${d.height}/${d.width} * 100%);">
                    <img class="lazy w-full h-full absolute object-cover top-0 left-0" src="/static/image-placeholder.png" data-src="${img.src}">
                    <span style="font-size: 0.5rem;" class="bottom-0 right-0 absolute text-white p-2 uppercase tracking-widest opacity-50">© All Photos Copyright Chris Collins</span>
                </div>
                ${img.caption ? `<figcaption class="py-3 px-6 md:p-4 text-sm dark-mode:bg-gray-900 dark-mode:text-white bg-gray-100 text-black">${img.caption}</figcaption>` : ''}
            </figure>`;
        })
    });

    // Add YAML support for data files
    config.addDataExtension("yaml", contents => yaml.safeLoad(contents));

    config.addPlugin(syntaxHighlight);
    config.addPlugin(pluginRss);
    // config.addPlugin(inclusiveLangPlugin);
    config.addPlugin(readingTime);

    config.addCollection("log", function (collection) {
        return collection.getFilteredByGlob("src/log/**/*.md").sort(function (a, b) {
            return new Date(b.data.date) - new Date(a.data.date);
        });
    });


    return {
        dir: {
            input: "src/",
            output: "dist",
            includes: "_includes",
            layouts: "_layouts"
        },
        templateFormats: ["html", "md", "njk"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: 'njk',

        // 1.1 Enable eleventy to pass dirs specified above
        passthroughFileCopy: true
    };
};
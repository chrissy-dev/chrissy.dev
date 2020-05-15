const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");

const filters = require('./utils/filters.js')
const transforms = require('./utils/transforms.js')
const collections = require('./utils/collections.js')

var sizeOf = require('image-size');
const ColorThief = require('colorthief');

const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItAnchorToc = require("markdown-it-toc-done-right")

module.exports = function (eleventyConfig) {
    // Folders to copy to build dir (See. 1.1)
    let filesToCopy = ["src/static", "src/blog/**/*.{jpg,jpeg,png,gif}", "_redirects", "src/admin"]

    filesToCopy.forEach((file) => {
        eleventyConfig.addPassthroughCopy(file);
    })

    // Filters 
    Object.keys(filters).forEach((filterName) => {
        eleventyConfig.addFilter(filterName, filters[filterName])
    })

    // Transforms
    Object.keys(transforms).forEach((transformName) => {
        eleventyConfig.addTransform(transformName, transforms[transformName])
    })

    // Collections
    Object.keys(collections).forEach((collectionName) => {
        eleventyConfig.addCollection(collectionName, collections[collectionName])
    })

    // Markdown Parsing
    eleventyConfig.setLibrary(
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

    eleventyConfig.addNunjucksAsyncShortcode("photo", function (img) {
        let imgPath = img.context !== undefined ? `./src${img.context}${img.src}` : `./src${img.src}`;
        let d = sizeOf(imgPath);

        let alt = img.alt !== undefined ? img.alt : "";

        return ColorThief.getColor(imgPath).then(color => {
            return `<figure class="-mx-6 md:mx-0 my-8">
                <div class="relative" style="background-color: rgba(${color},1); padding-bottom: calc(${d.height}/${d.width} * 100%);">
                    <img class="lazy w-full h-full absolute object-cover top-0 left-0" src="/static/image-placeholder.png" data-src="${img.src}" alt="${alt}">
                    <span style="font-size: 0.5rem;" class="bottom-0 right-0 absolute text-white p-2 uppercase tracking-widest opacity-50">© All Photos Copyright Chris Collins</span>
                </div>
                ${img.caption ? `<figcaption class="py-3 px-6 md:p-4 text-sm bg-gray-200 text-black">${img.caption}</figcaption>` : ''}
            </figure>`;
        })
    });

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginRss);

    // This allows Eleventy to watch for file changes during local development.
    eleventyConfig.setUseGitIgnore(false);
    // Opts in to a full deep merge when combining the Data Cascade.
    eleventyConfig.setDataDeepMerge(true);
    
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
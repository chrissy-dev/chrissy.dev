const filters = require('./utils/filters.js');
const transforms = require('./utils/transforms.js');
const collections = require('./utils/collections.js');
const shortcodes = require('./utils/shortcodes.js');
const blocks = require('./utils/blocks.js');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const Image = require("@11ty/eleventy-img");
const markdown = require("markdown-it");
const pageAssetsPlugin = require('eleventy-plugin-page-assets');

module.exports = function (eleventyConfig) {
    // Folders to copy to build dir (See. 1.1)
    let filesToCopy = ["src/static/**/*", "src/notes/**/*.{jpg,jpeg,png,gif,webp}", "src/_redirects"]

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

    // Shortcodes
    Object.keys(shortcodes).forEach((shortcodeName) => {
        eleventyConfig.addNunjucksShortcode(shortcodeName, shortcodes[shortcodeName])
    })

    // Blocks
    Object.keys(blocks).forEach((blockName) => {
        eleventyConfig.addPairedShortcode(blockName, blocks[blockName])
    })

    eleventyConfig.addNunjucksAsyncShortcode("Image", async (src, alt) => {
        if (!alt) {
            throw new Error(`Missing \`alt\` on myImage from: ${src}`);
        }

        let stats = await Image(src, {
            widths: [25, 320, 640, 960, 1024],
            formats: ["jpeg"],
            urlPath: "/static/",
            outputDir: "./dist/static/",
        });

        let lowestSrc = stats["jpeg"][0];

        const srcset = Object.keys(stats).reduce(
            (acc, format) => ({
                ...acc,
                [format]: stats[format].reduce(
                    (_acc, curr) => `${_acc} ${curr.srcset} ,`,
                    ""
                ),
            }), {}
        );

        const source = `<source type="image/jpeg" data-srcset="${srcset["jpeg"]}" >`;

        const img = `<img class="lazy w-full" 
                            alt="${alt}"
                            src = "${lowestSrc.url}"
                            data-src="${lowestSrc.url}"
                            data-sizes='(min-width: 1024px) 1024px, 100vw'
                            data-srcset="${srcset["jpeg"]}"
                            width="${lowestSrc.width}"
                            height="${lowestSrc.height}">`;

        return `<picture> ${source} ${img} </picture>`;
    });

		eleventyConfig.addPlugin(pageAssetsPlugin, {
		        mode: "directory",
		        	recursive: true,
		        	assetsMatching: "*.jpg|*.png",
		        	hashAssets: false,
		        	postsMatching: "src/logbook/*/*.md",
		});

    eleventyConfig.setLibrary("md", markdown({
        html: true,
        breaks: true,
        linkify: true
    }).use(require('markdown-it-footnote')));

    // This allows Eleventy to watch for file changes during local development.
    eleventyConfig.setUseGitIgnore(false);
    // Opts in to a full deep merge when combining the Data Cascade.
    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginRss);

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
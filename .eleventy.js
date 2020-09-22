const filters = require('./utils/filters.js');
const transforms = require('./utils/transforms.js');
const collections = require('./utils/collections.js');
const shortcodes = require('./utils/shortcodes.js');
const blocks = require('./utils/blocks.js');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
    // Folders to copy to build dir (See. 1.1)
    let filesToCopy = ["src/static", "src/notes/**/*.{jpg,jpeg,png,gif,webp}", "src/_redirects"]

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
const { DateTime } = require("luxon");
const htmlmin = require("html-minifier");
const yaml = require("js-yaml");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");

// Filters
const webmentionsFilter = require('./src/_filters/webmentions-filter.js'); 
const likesFilter = require('./src/_filters/likes-filter.js'); 

module.exports = function (eleventyConfig) {
    // Folders to copy to build dir (See. 1.1)
    eleventyConfig.addPassthroughCopy("src/static");
    
    if (process.env.ELEVENTY_ENV === 'production') {
        // Minify HTML (including inlined CSS and JS) 
        eleventyConfig.addTransform("compressHTML", function (content, outputPath) {
            if (outputPath.endsWith(".html")) {
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
    
    eleventyConfig.addFilter('likesFilter', likesFilter); 
    eleventyConfig.addFilter('webmentionsFilter', webmentionsFilter); 
  
    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
      return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });
  
    eleventyConfig.addFilter("readableDate", dateObj => {
      return DateTime.fromJSDate(new Date(dateObj), {zone: 'utc'}).toFormat("dd LLL yyyy");
    });
  
    eleventyConfig.addFilter("simpleDate", dateObj => {
      return DateTime.fromJSDate(new Date(dateObj), {zone: 'utc'}).toFormat("dd.LL.yy");
    });
    
    eleventyConfig.addFilter("w3cDate", function(date) {
      return date.toISOString();
    });

    // Add YAML support for data files
    eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(inclusiveLangPlugin);

    eleventyConfig.addCollection("log", function (collection) {
        return collection.getFilteredByGlob("src/_hiking/*.md").sort(function (a, b) {          
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

        // 1.1 Enable eleventy to pass dirs specified above
        passthroughFileCopy: true
    };
};

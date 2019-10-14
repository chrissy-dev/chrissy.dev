require('dotenv').config();

const htmlmin = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");
const { DateTime } = require("luxon");
const webmentionsFilter = require('./src/_filters/webmentions-filter.js'); 
const likesFilter = require('./src/_filters/likes-filter.js'); 
const ENV = process.env.ELEVENTY_ENV;

module.exports = function (eleventyConfig) {
  // Folders to copy to build dir (See. 1.1)
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/static");

  if (ENV === 'production') {
    // Minify HTML output
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
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
    return DateTime.fromJSDate(new Date(dateObj), {zone: 'utc'}).toFormat("dd/LL/yy");
  });
  
  eleventyConfig.addFilter("w3cDate", function(date) {
    return date.toISOString();
  });

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(inclusiveLangPlugin);

  return {
    dir: {
      input: "src/",
      output: "dist",
      includes: "_includes"
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",

    // 1.1 Enable elventy to pass dirs specified above
    passthroughFileCopy: true
  };
};
const htmlmin = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const beautify = require('js-beautify').html;
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
  else {
    // Pretty Output
    eleventyConfig.addTransform("beautifyHTML", function (content, outputPath) {
      if (outputPath.endsWith(".html")) {
        let beautified = beautify(content, {
          indent_size: 2,
          space_in_empty_paren: true
        });
        return beautified;
      }
      return content;
    });
  }

  // Ordinal date filter
  eleventyConfig.addFilter("ordinal", function(date) {
    return date + (date > 0 ? ['th', 'st', 'nd', 'rd'][(date > 3 && date < 21) || date % 10 > 3 ? 0 : date % 10] : '');
  });

  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    dir: {
      input: "src/",
      output: "dist",
      includes: "_includes"
    },
    templateFormats: ["html", "md", "liquid"],
    htmlTemplateEngine: "liquid",

    // 1.1 Enable elventy to pass dirs specified above
    passthroughFileCopy: true
  };
};
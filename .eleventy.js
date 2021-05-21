const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const beautify = require("js-beautify").html;

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("source/static");

	eleventyConfig.addCollection("log", function (collectionApi) {
		return collectionApi.getFilteredByGlob("source/logbook/**/*.md").sort(function (a, b) {
			return a.date - b.date;
		});
	});

	eleventyConfig.addCollection("notes", function (collectionApi) {
		return collectionApi.getFilteredByGlob("source/notes/**/*.md").sort(function (a, b) {
			return a.date - b.date;
		});
	});

	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});

	eleventyConfig.addTransform("prettyOutput", function (content, outputPath) {
		// Eleventy 1.0+: use this.inputPath and this.outputPath instead
		if (outputPath && outputPath.endsWith(".html")) {
			let beautifed = beautify(content, {
				indent_size: 2,
				space_in_empty_paren: true
			});
			return beautifed;
		}

		return content;
	});

	eleventyConfig.setLibrary("md", markdownIt({
		html: true,
		breaks: true,
		linkify: true
	}).use(require('markdown-it-figure')));

	return {
		dir: {
			input: "source/",
			output: "dist",
			includes: "_includes",
			layouts: "_layouts"
		},
		templateFormats: ["html", "md", "njk"],
		htmlTemplateEngine: "njk",
		passthroughFileCopy: true
	};
};
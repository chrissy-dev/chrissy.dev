const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("source/static");
	eleventyConfig.addPassthroughCopy("source/notes/**/*.{jpg,jpeg}");

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

	eleventyConfig.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
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
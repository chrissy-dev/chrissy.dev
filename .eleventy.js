const {
	DateTime
} = require("luxon");
const {
	minify
} = require("terser");
const markdownIt = require("markdown-it");
const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("source/static");
	eleventyConfig.addPassthroughCopy("source/notes/**/*.{jpg,jpeg,png}");

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

	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
		// Eleventy 1.0+: use this.inputPath and this.outputPath instead
		if (outputPath && outputPath.endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true
			});
			return minified;
		}

		return content;
	});

	eleventyConfig.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
	});

	eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (code, callback) {
		try {
			const minified = await minify(code);
			callback(null, minified.code);
		} catch (err) {
			console.error("Terser error: ", err);
			// Fail gracefully.
			callback(null, code);
		}
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
const htmlmin = require("html-minifier");

module.exports = {
  row: (content) => {
    return htmlmin.minify(
      `<div class="flex items-stretch -mx-3 lg:-mx-6">
        ${content}
      </div>`, {
        collapseWhitespace: true
      });
  },

  col: (content) => {
    return htmlmin.minify(
      `<div class="flex-1 h-full items-stretch px-3 lg:px-6">
        ${content}
      </div>`, {
        collapseWhitespace: true
      });
  }
};
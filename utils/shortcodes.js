const htmlmin = require("html-minifier");

module.exports = {
  photo: (image) => {
    let alt = image.alt !== undefined ? image.alt : "";
    let caption = image.caption !== undefined ? image.caption : false;

    return htmlmin.minify(
      `<figure class="w-full mb-6 lg:mb-12">
          <img class="w-full h-full object-cover" src="${image.src}" alt="${alt}">
          ${caption ? `<figcaption>${caption}</figcaption>` : ``}
        </figure>`, {
      collapseWhitespace: true
    });
  }
};
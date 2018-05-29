module.exports = {
  content: ['./public/**/*.html', './src/**/*.js'],
  css: ['./src/static/tailwind.css'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-z0-9-:\/]+/g)
        }
      },
      extensions: ['html', 'js'],
    },
  ],
}

const fg = require('fast-glob');

module.exports = async () => {
  const photos = await fg(['./src/blog/**/*.{jpg,jpeg,png,gif}'], {
    caseSensitiveMatch: false
  });
  
  const removeString = str => str.replace('./src', '');  
  return photos.map(removeString);
};

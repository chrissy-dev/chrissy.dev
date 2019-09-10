const Jimp = require('jimp');
const path = require("path");
const glob = require('fast-glob');
/**
 * Resize + optimize images.
 *  
 * @param String input directory path (no trailing slash), relative to cwd
 * @param String output directory path (no trailing slash), relative to cwd
 */

const optimise = async (inputDir, outputDir) => {
  console.log(`Attempting to generate images...`);

  const images = await glob.sync([`${inputDir}/**/*.jpg`]);

  console.log(`Images: [${images}]`);

  await Promise.all(
    images.map(async imgPath => {
      const image = await Jimp.read(imgPath);
      const fileName = path.basename(imgPath, '.jpg');

      await image.quality(80) // set JPEG quality
      await image.writeAsync(`${outputDir}/${fileName}_optimised.jpg`); 
      console.log(`Generated: ${outputDir}/${fileName}_optimised.jpg`);
      
      await image.resize(1920, Jimp.AUTO) // resize
      await image.quality(80) // set JPEG quality
      await image.writeAsync(`${outputDir}/${fileName}_fullhd.jpg`); 
      console.log(`Generated: ${outputDir}/${fileName}_fullhd.jpg`);

      await image.resize(1280, Jimp.AUTO) // resize
      await image.quality(80) // set JPEG quality
      await image.writeAsync(`${outputDir}/${fileName}_hd.jpg`); 
      console.log(`Generated: ${outputDir}/${fileName}_hd.jpg`);

      await image.cover(560, 560) // resize
      await image.quality(80) // set JPEG quality
      await image.writeAsync(`${outputDir}/${fileName}_560.jpg`); 
      console.log(`Generated: ${outputDir}/${fileName}_560.jpg`);
    })
  );
};

optimise('./src/assets/images/photos', './dist/assets/images/photos');
const Jimp = require('jimp');
const path = require("path");
const glob = require('fast-glob');
const fs = require('fs');

/**
 * Resize + optimize images.
 *  
 * @param String input directory path (no trailing slash), relative to cwd
 * @param String output directory path (no trailing slash), relative to cwd
 */

const optimise = async (images, outputDir) => {
  let toOptimise = [];

  images.map(image => {
    const fileName = path.basename(image, '.jpg') || path.basename(image, '.JPG');

    if (!fs.existsSync(`${outputDir}/${fileName}_optimised.jpg`)) { 
      toOptimise.push(image);
      console.log(`Added ${fileName} to queue`)
    }
  })

  await Promise.all(    
    toOptimise.map(async imgPath => {
      const image = await Jimp.read(imgPath);
      const fileName = path.basename(imgPath, '.jpg') || path.basename(imgPath, '.JPG');
      
        // await image.quality(80) // set JPEG quality
        // await image.writeAsync(`${outputDir}/${fileName}_optimised.jpg`);
        // console.log(`Generated: ${outputDir}/${fileName}_optimised.jpg`);
  
        await image.resize(1920, Jimp.AUTO) // resize
        await image.quality(80) // set JPEG quality
        await image.writeAsync(`${outputDir}/${fileName}_fullhd.jpg`);
        console.log(`Generated: ${outputDir}/${fileName}_fullhd.jpg`);
  
        // await image.resize(1280, Jimp.AUTO) // resize
        // await image.quality(80) // set JPEG quality
        // await image.writeAsync(`${outputDir}/${fileName}_hd.jpg`);
        // console.log(`Generated: ${outputDir}/${fileName}_hd.jpg`);
  
        await image.cover(560, 560) // resize
        await image.quality(80) // set JPEG quality
        await image.writeAsync(`${outputDir}/${fileName}_560.jpg`);
        console.log(`Generated: ${outputDir}/${fileName}_560.jpg`);
    })
  );
};

(async function () {
  await glob([`src/assets/images/photos/*.jpg`]).then(files => optimise(files, `src/assets/images/photos/optimised`));
})();
const Jimp = require('jimp');
const glob = require("glob")
const path = require("path");
const chalk = require('chalk');
/**
 * Resize + optimize images.
 *  
 * @param String input directory path (no trailing slash), relative to cwd
 * @param String output directory path (no trailing slash), relative to cwd
 */

const optimise = async (inputDir, outputDir) => {
  const images = glob.sync(`${inputDir}/**/*.jpg`);

  await Promise.all(
    images.map(async imgPath => {
      const image = await Jimp.read(imgPath);
      const fileName = path.basename(imgPath, '.jpg');

      await image.quality(80) // set JPEG quality
      await image.writeAsync(`${outputDir}/${fileName}_optimised.jpg`); 
      console.log(chalk.green('Generated') + ': ' + chalk.underline.bold(`${outputDir}/${fileName}_optimised.jpg`));
      
      await image.resize(1920, Jimp.AUTO) // resize
      await image.quality(80) // set JPEG quality
      await image.writeAsync(`${outputDir}/${fileName}_fullhd.jpg`); 
      console.log(chalk.green('Generated') + ': ' + chalk.underline.bold(`${outputDir}/${fileName}_fullhd.jpg`));

      await image.resize(1280, Jimp.AUTO) // resize
      await image.quality(80) // set JPEG quality
      await image.writeAsync(`${outputDir}/${fileName}_hd.jpg`); 
      console.log(chalk.green('Generated') + ': ' + chalk.underline.bold(`${outputDir}/${fileName}_hd.jpg`));

      await image.cover(560, 560) // resize
      await image.quality(80) // set JPEG quality
      await image.writeAsync(`${outputDir}/${fileName}_560.jpg`); 
      console.log(chalk.green('Generated') + ': ' + chalk.underline.bold(`${outputDir}/${fileName}_560.jpg`));
    })
  );
};

optimise('src/assets/images/photos', 'dist/assets/images/photos');
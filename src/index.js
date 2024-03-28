// Install required library by running:
// npm install imagemin imagemin-pngquant imagemin-mozjpeg

const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');

/**
 * Function to optimize images using imagemin
 * @param {string} inputPath - Path to the input image
 * @param {string} outputPath - Path to save the optimized image
 */
async function optimizeImage(inputPath, outputPath) {
  try {
    const files = await imagemin([inputPath], {
      destination: outputPath,
      plugins: [
        imageminMozjpeg({
          quality: 75,
        }),
        imageminPngquant({
          quality: [0.6, 0.8],
        }),
      ],
    });

    console.log('Images optimized successfully:', files);
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

module.exports = optimizeImage;
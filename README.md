# Image Optimizer Utility

This package provides a simple utility for optimizing images for the web to improve performance using the imagemin library, along with imagemin-pngquant and imagemin-mozjpeg plugins.

## Installation

To use this package, you can install it via npm:

```bash
npm install image-optimizer-utility
```

This package requires the following dependencies:

- imagemin
- imagemin-pngquant
- imagemin-mozjpeg

You can install these dependencies by running:

```bash
npm install imagemin imagemin-pngquant imagemin-mozjpeg
```

## Usage

```javascript
const optimizeImage = require('image-optimizer-utility');

// Provide the path to input image and output path for optimized image
optimizeImage('input/path/image.jpg', 'output/path/');
```

This utility function will optimize the input image and save the optimized version to the specified output path.

## License

This package is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
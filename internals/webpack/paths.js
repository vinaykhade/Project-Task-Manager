import path from 'path';

module.exports = {
  root: path.resolve(__dirname, '../', '../'),
  outputPath: path.resolve(__dirname, '../', '../', 'build'),
  entryPath: path.resolve(__dirname, '../', '../', 'app/app.js'),
  templatePath: path.resolve(__dirname, '../', '../', 'app/index.html'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};

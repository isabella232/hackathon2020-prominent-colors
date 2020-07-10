const Vibrant = require("node-vibrant");

const getPalette = async (pathToImage) => {
  const vibrantImage = new Vibrant(pathToImage);
  const colorPalette = await vibrantImage.getPalette();

  return colorPalette;
};

const getSerializablePalette = async (pathToImage) => {
  const palette = await getPalette(pathToImage);

  // convert palette to JSON-serializable object
  const serializablePalette = Object.keys(palette).reduce((acc, swatchName) => {
    const swatch = palette[swatchName];

    acc[swatchName] = {
      hsl: swatch.getHsl(),
      population: swatch.getPopulation(),
      rgb: swatch.getRgb(),
      hex: swatch.getHex(),
      titleTextColor: swatch.getTitleTextColor(),
      bodyTextColor: swatch.getBodyTextColor(),
    };

    return acc;
  }, {});

  return serializablePalette;
};

module.exports = {
  getPalette,
  getSerializablePalette,
};

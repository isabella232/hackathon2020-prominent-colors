const Vibrant = require("node-vibrant");

const getPalette = async (pathToImage) => {
  const vibrantImage = new Vibrant(pathToImage);
  const colorPalette = await vibrantImage.getPalette();

  if (process.env.NODE_ENV === "debug-run") {
    console.debug(colorPalette);
    console.info("success");
  }

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

if (process.env.NODE_ENV === "debug-run") {
  getPalette("sample-images/vogue-uk_5d544f04d9c06a0008db33f0_1024.jpg").catch(
    console.error
  );
}

module.exports = {
  getPalette,
  getSerializablePalette,
};

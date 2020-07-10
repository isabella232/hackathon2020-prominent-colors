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

if (process.env.NODE_ENV === "debug-run") {
  getPalette("sample-images/vogue-uk_5d544f04d9c06a0008db33f0_1024.jpg").catch(
    console.error
  );
}

module.exports = {
  getPalette,
};

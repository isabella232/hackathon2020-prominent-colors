import { promises as fs } from "fs";
import { getSerializablePalette } from "../../src";

const width = "256";
const pathToImages = `../sample-images/${width}`;

export const getSampleImageData = async (filename) => {
  const palette = await getSerializablePalette(`${pathToImages}/${filename}`);

  // vogue-uk_5d544f044653570008cec696.jpg => 5d544f044653570008cec696
  const id = filename.split(".")[0].split("_").reverse()[0];

  return {
    id,
    width,
    palette,
  };
};

export const getSampleImageFilenames = async () => {
  const filenames = await fs.readdir(pathToImages);
  const imageFilenames = filenames.filter((string) =>
    string.toLowerCase().endsWith(".jpg")
  );
  return imageFilenames;
};

export const getAllSampleImageData = async () => {
  const imageFilenames = await getSampleImageFilenames();

  const imageData = {};

  for (const filename of imageFilenames) {
    imageData[filename] = await getSampleImageData(filename);
  }

  return imageData;
};

import { promises as fs } from "fs";
import { getSerializablePalette } from "../../src";

const pathToImages = "../sample-images";

export const getSampleImageData = async (filename) => {
  const palette = await getSerializablePalette(`${pathToImages}/${filename}`);

  const id = filename.split("_")[1];
  const width = filename.split("_")[2].split(".")[0];

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

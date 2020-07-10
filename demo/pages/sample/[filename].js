import {
  getSampleImageData,
  getSampleImageFilenames,
} from "../../io/sampleImageData";
import Sample from "../../components/Sample";

const Home = ({ imageData }) => {
  return (
    <main>
      <Sample data={imageData} />
    </main>
  );
};

export const getStaticProps = async ({ params }) => {
  const imageData = await getSampleImageData(params.filename);

  return {
    props: {
      imageData,
    },
  };
};

export const getStaticPaths = async () => {
  const filenames = await getSampleImageFilenames();

  const paths = filenames.map((filename) => ({ params: { filename } }));

  return {
    paths,
    fallback: false,
  };
};

export default Home;

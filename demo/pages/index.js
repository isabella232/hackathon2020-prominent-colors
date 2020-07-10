import { Fragment } from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>hackathon2020-prominent-colors-demo</title>
      </Head>

      <main>
        <h1 className="title">
          Welcome to hackathon2020-prominent-colors-demo
        </h1>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Fragment>
  );
};

export default Home;

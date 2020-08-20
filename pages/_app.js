import React from "react";
import Head from "next/head";

const _app = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default _app;

import React from 'react';
import { Lazy } from 'react-lazy';
import Head from 'next/head';

function FontLoader() {
  return (
    <Lazy>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
    </Lazy>
  );
}

export default FontLoader;

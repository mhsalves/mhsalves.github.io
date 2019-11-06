import React from 'react';
import { Lazy } from 'react-lazy';
import Head from 'next/head';

function FontLoader() {
  return (
    <Lazy>
      <Head>
        <link href="/fonts.css" rel="preload" as="style" />
      </Head>
    </Lazy>
  );
}

export default FontLoader;

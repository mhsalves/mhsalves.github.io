import React, { memo } from 'react';
import Head from 'next/head';

const data = {
  title: 'Matheus Alves Developer',
  type: 'website',
  currentUrl: 'https://matheusalves.dev/',
  image: 'https://matheusalves.dev/my-photo-wide.jpg',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat nulla at sapien dictum, gravida fringilla risus commodo. Quisque velit elit, vestibulum sit amet efficitur at, fringilla a justo.',
};

function Share() {
  return (
    <Head>
      <meta property="og:title" content={data.title} key="meta-og-title" />
      <meta property="og:type" content={data.type} key="meta-og-type" />
      <meta property="og:url" content={data.currentUrl} key="meta-og-url" />
      <meta property="og:image" content={data.image} key="meta-og-image" />
      <meta property="og:image:secure_url" content={data.image} key="meta-og-image-secure-url" />
      <meta property="og:description" content={data.description} key="meta-og-description" />
    </Head>
  );
}

export default memo(Share);

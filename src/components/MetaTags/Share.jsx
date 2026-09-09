import React, { memo } from 'react';
import Head from 'next/head';

const data = {
  title: 'Matheus Alves — Senior Software Engineer',
  type: 'website',
  currentUrl: 'https://matheusalves.dev/',
  image: 'https://matheusalves.dev/my-photo-wide.jpg',
  description: 'Senior Software Engineer in Manaus. Building for the web since 2012, from React architecture and micro-frontends to leading front-end teams, and working with Mendix.',
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
      <meta name="twitter:card" content="summary_large_image" key="meta-twitter-card" />
      <meta name="twitter:title" content={data.title} key="meta-twitter-title" />
      <meta name="twitter:description" content={data.description} key="meta-twitter-description" />
      <meta name="twitter:image" content={data.image} key="meta-twitter-image" />
    </Head>
  );
}

export default memo(Share);

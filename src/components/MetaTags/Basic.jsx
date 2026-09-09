import React, { memo } from 'react';
import { string } from 'prop-types';
import Head from 'next/head';

function Basic(props) {
  const { title, description } = props;

  return (
    <Head>
      <title key="meta-title">{title}</title>
      <meta name="description" content={description} key="meta-description" />
      <meta name="author" content="Matheus Alves" key="meta-author" />
    </Head>
  );
}

Basic.propTypes = {
  title: string,
  description: string,
};

Basic.defaultProps = {
  title: 'Matheus Alves — Senior Software Engineer',
  description: 'Senior Software Engineer in Manaus. Building for the web since 2012, from React architecture and micro-frontends to leading front-end teams, and working with Mendix.',
};

export default memo(Basic);

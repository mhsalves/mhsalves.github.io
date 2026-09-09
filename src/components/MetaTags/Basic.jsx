import React, { memo } from 'react';
import { string } from 'prop-types';
import Head from 'next/head';

function Basic(props) {
  const { title, description } = props;

  return (
    <Head>
      <title key="meta-title">{title}</title>
      <meta name="description" content={description} key="meta-description" />
    </Head>
  );
}

Basic.propTypes = {
  title: string,
  description: string,
};

Basic.defaultProps = {
  title: 'Matheus Alves',
  description: 'Enjoy the Matheus Alves postfolio',
};

export default memo(Basic);

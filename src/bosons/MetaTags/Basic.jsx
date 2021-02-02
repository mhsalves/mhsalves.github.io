import React from 'react';
import { string } from 'prop-types';

function Basic(props) {
  const { title, description } = props;

  return (
    <>
      <title>{title}</title>
      <meta content="description">{description}</meta>
    </>
  );
}

Basic.propTypes = {
  title: string,
  description: string,
};

Basic.propTypes = {
  title: 'Matheus Alves',
  description: 'Enjoy the Matheus Alves postfolio',
};

export default Basic;

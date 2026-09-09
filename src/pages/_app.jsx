import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalCSS from 'styles/global';
import themes from 'styles/themes';
import FontLoader from 'styles/FontLoader';

function MySpiderApp(props) {
  /* eslint-disable react/prop-types */
  const { Component, pageProps } = props;

  return (
    <React.StrictMode>
      <ThemeProvider theme={themes.base}>
        <FontLoader />
        <GlobalCSS />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default MySpiderApp;

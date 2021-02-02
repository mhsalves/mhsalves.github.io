import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalCSS from '../bosons/globalCSS';
import themes from '../bosons/themes';
import FontLoader from '../bosons/FontLoader';

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

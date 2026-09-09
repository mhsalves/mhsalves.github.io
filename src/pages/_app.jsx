import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalCSS from 'styles/global';
import themes from 'styles/themes';
import FontLoader from 'styles/FontLoader';
import { LanguageProvider } from 'i18n';

function MySpiderApp(props) {
  /* eslint-disable react/prop-types */
  const { Component, pageProps } = props;

  return (
    <React.StrictMode>
      <ThemeProvider theme={themes.base}>
        <LanguageProvider>
          <FontLoader />
          <GlobalCSS />
          <Component {...pageProps} />
        </LanguageProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default MySpiderApp;

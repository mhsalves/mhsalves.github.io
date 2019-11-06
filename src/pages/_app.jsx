import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalCSS from '../bosons/globalCSS';
import themes from '../bosons/themes';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (ctx) {
      pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    }

    return { pageProps };
  }

  render() {
    const {
      Component, pageProps,
    } = this.props;

    return (
      <React.StrictMode>
        <ThemeProvider theme={themes.base}>
          <GlobalCSS />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.StrictMode>
    );
  }
}

export default MyApp;

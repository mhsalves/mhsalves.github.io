import React from 'react';
import { ThemeProvider } from 'styled-components';
import themes from 'styles/themes';

const Wrapped = (Component) => {
  const WithTheme = (props) => (
    <ThemeProvider theme={themes.base}>
      <Component {...props} />
    </ThemeProvider>
  );

  WithTheme.displayName = 'WithTheme';

  return WithTheme;
};

export default Wrapped;

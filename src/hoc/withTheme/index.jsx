import React from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../../bosons/themes';

const Wrapped = (Component) => (props) => (
  <ThemeProvider theme={themes.base}>
    <Component {...props} />
  </ThemeProvider>
);

export default Wrapped;

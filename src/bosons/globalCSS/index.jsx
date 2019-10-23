import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import reset from './reset';

const globalCSS = createGlobalStyle`
  ${reset}
  ${normalize}
`;

export default globalCSS;

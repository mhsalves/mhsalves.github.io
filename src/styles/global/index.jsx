import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import reset from './reset';

const globalCSS = createGlobalStyle`
  ${reset}
  ${normalize}

  html {
    scroll-behavior: smooth;
  }

  /* Smooth scrolling is motion too. */
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }

  body {
    background-color: #FFFFFF;
  }

  /* The header is fixed, so anchored sections need room to clear it. */
  [id] {
    scroll-margin-top: 72px;
  }

  *:focus-visible {
    outline: 3px solid #3399FF;
    outline-offset: 2px;
  }
`;

export default globalCSS;

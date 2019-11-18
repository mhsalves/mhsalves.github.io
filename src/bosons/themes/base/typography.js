import { css } from 'styled-components';
import breakpoints from './breakpoints';

const family = {
  nunito: 'Nunito Sans, sans-serif',
};

const scales = {
  mobile: 1.2,
  tablet: 1.333,
};

const fontSize = (scale) => ({
  small: '.8125rem',
  medium: '1rem',
  large: `${scale}rem`,
  big: `${scale ** 2}rem`,
  huge: `${scale ** 3}rem`,
});

const lineHeight = (scale) => ({
  small: '1rem',
  medium: '1.5rem',
  large: '1.5rem',
  big: `${Math.ceil((scale ** 2) * 2) / 2}rem`,
  huge: `${Math.ceil((scale ** 3) * 2) / 2}rem`,
});

const common = css`
  font-family: ${family.nunito};
`;

const sizeScaled = (size) => css`
  font-size: ${fontSize(scales.mobile)[size]};
  line-height: ${lineHeight(scales.mobile)[size]};

  ${breakpoints.md} {
    font-size: ${fontSize(scales.tablet)[size]};
    line-height: ${lineHeight(scales.tablet)[size]};
  }
`;

const display = css`
  ${common}
  font-size: 2.5rem;
  line-height: 3rem;

  ${breakpoints.md} {
    font-size: 4.5rem;
    line-height: 5rem;
  }
`;

const h2 = css`
  ${common}
  ${sizeScaled('huge')}
`;

const h3 = css`
  ${common}
  ${sizeScaled('big')}
`;

const lead = css`
  ${common}
  ${sizeScaled('large')}
`;

const normal = css`
  ${common}
  ${sizeScaled('medium')}
`;

const small = css`
  ${common}
  ${sizeScaled('small')}
`;


export default {
  display,
  h2,
  h3,
  lead,
  normal,
  small,
};

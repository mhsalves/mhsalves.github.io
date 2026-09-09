import React, { memo } from 'react';
import { number, string } from 'prop-types';

/**
 * Monogram used in the header and as the site favicon. Drawn with paths rather
 * than text so it renders the same everywhere, including at favicon sizes.
 */
function Logo(props) {
  const { size, title } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      focusable="false"
    >
      <rect width="64" height="64" rx="15" fill="#3399FF" />
      <g
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 46V21l10 13 10-13v25" />
        <path d="M37 46l8-25 8 25" />
      </g>
    </svg>
  );
}

Logo.propTypes = {
  size: number,
  title: string,
};

Logo.defaultProps = {
  size: 36,
  title: 'Matheus Alves',
};

export default memo(Logo);

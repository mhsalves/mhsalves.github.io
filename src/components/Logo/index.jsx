import React, { memo } from 'react';
import { number, oneOf, string } from 'prop-types';

/**
 * Monogram: a pair of glasses over the "MA" initials.
 *
 * Drawn with paths rather than text so it renders identically everywhere,
 * including at favicon sizes. Two variants:
 *
 *   badge — blue rounded square, white marks. Used on light backgrounds.
 *   light — no plate, white marks only. Used on the dark footer.
 */
function Logo(props) {
  const { size, title, variant } = props;

  const isBadge = variant === 'badge';
  const stroke = '#FFFFFF';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label={title}
      focusable="false"
    >
      {isBadge && <rect width="64" height="64" rx="15" fill="#3399FF" />}

      <g
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Glasses */}
        <g strokeWidth="3.5">
          <circle cx="20" cy="24" r="9" />
          <circle cx="44" cy="24" r="9" />
          <path d="M29 24h6" />
          <path d="M11 21L6 18" />
          <path d="M53 21l5-3" />
        </g>

        {/* Initials */}
        <g strokeWidth="4">
          <path d="M16 51V39l7 7 7-7v12" />
          <path d="M35 51l6.5-12L48 51" />
          <path d="M38.2 46h6.6" />
        </g>
      </g>
    </svg>
  );
}

Logo.propTypes = {
  size: number,
  title: string,
  variant: oneOf(['badge', 'light']),
};

Logo.defaultProps = {
  size: 36,
  title: 'Matheus Alves',
  variant: 'badge',
};

export default memo(Logo);

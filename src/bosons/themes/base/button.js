import { css } from 'styled-components';

const normal = css`
  padding: 0.625rem 1.5rem;
  ${({ theme: { typography } }) => typography.normal}
`;

const small = css`
  padding: 0.375rem 1rem;
  ${({ theme: { typography } }) => typography.small}
`;

const common = css`
  border-radius: 2rem;
  color: ${({ theme: { colors } }) => colors.white.normal};
  text-transform: uppercase;
  cursor: pointer;

  ${({ isSmall }) => css`
    ${isSmall && small}
    ${!isSmall && normal}
  `}
`;

const primary = css`
  ${common}
  background-color: ${({ theme: { colors } }) => colors.primary.normal};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.primary.dark};
  }
`;

const secondary = css`
  ${common}
  background-color: ${({ theme: { colors } }) => colors.secondary.normal};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.secondary.dark};
  }
`;

export default {
  primary,
  secondary,
};

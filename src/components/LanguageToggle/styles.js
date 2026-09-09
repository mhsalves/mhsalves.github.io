import styled, { css } from 'styled-components';

const Group = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 2px;
  border: 1px solid ${({ theme: { colors } }) => colors.white.dark};
  border-radius: 999px;
`;

const Option = styled.button`
  ${({ theme: { typography } }) => typography.small}
  border: 0;
  border-radius: 999px;
  padding: 4px 10px;
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme: { colors } }) => colors.secondary.normal};
  transition: background-color 200ms ease, color 200ms ease;

  ${({ isActive }) => isActive && css`
    background-color: ${({ theme: { colors } }) => colors.primary.normal};
    color: ${({ theme: { colors } }) => colors.white.normal};
  `}

  &:hover:not([aria-pressed='true']) {
    color: ${({ theme: { colors } }) => colors.coal.dark};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export default {
  Group,
  Option,
};

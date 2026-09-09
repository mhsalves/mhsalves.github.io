import styled from 'styled-components';

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;

  ${({ theme: { breakpoints } }) => breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme: { breakpoints } }) => breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;
  padding: 24px;
  border: 1px solid ${({ theme: { colors } }) => colors.white.dark};
  border-radius: 12px;
  background-color: ${({ theme: { colors } }) => colors.white.normal};
  text-decoration: none;
  transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme: { colors } }) => colors.primary.normal};
    box-shadow: 0 12px 24px rgba(78, 70, 102, 0.12);
    transform: translateY(-2px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover,
    &:focus-visible {
      transform: none;
    }
  }
`;

const Name = styled.h3`
  ${({ theme: { typography } }) => typography.normal}
  color: ${({ theme: { colors } }) => colors.coal.dark};
  margin: 0;
  word-break: break-word;
`;

const Description = styled.p`
  ${({ theme: { typography } }) => typography.small}
  color: ${({ theme: { colors } }) => colors.coal.normal};
  margin: 0;
  flex: 1;
`;

const Language = styled.span`
  ${({ theme: { typography } }) => typography.small}
  color: ${({ theme: { colors } }) => colors.primary.dark};
`;

const More = styled.a`
  ${({ theme: { typography } }) => typography.normal}
  display: inline-block;
  margin-top: 24px;
  color: ${({ theme: { colors } }) => colors.primary.dark};
  text-decoration: none;
  border-bottom: 2px solid transparent;

  &:hover,
  &:focus-visible {
    border-bottom-color: ${({ theme: { colors } }) => colors.primary.normal};
  }
`;

export default {
  Grid,
  Card,
  Name,
  Description,
  Language,
  More,
};

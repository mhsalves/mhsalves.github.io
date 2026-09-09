import styled from 'styled-components';

const Description = styled.p`
  ${({ theme: { typography } }) => typography.lead}
  color: ${({ theme: { colors } }) => colors.coal.normal};
  max-width: 56ch;
  margin: 0;
`;

const Action = styled.a`
  ${({ theme: { button } }) => button.primary}
  display: inline-block;
  margin-top: 28px;
  text-decoration: none;
  transition: background-color 200ms ease;
`;

const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  list-style: none;
  margin: 28px 0 0;
  padding: 0;
`;

const Link = styled.a`
  ${({ theme: { typography } }) => typography.normal}
  color: ${({ theme: { colors } }) => colors.primary.dark};
  text-decoration: none;
  border-bottom: 2px solid transparent;

  &:hover,
  &:focus-visible {
    border-bottom-color: ${({ theme: { colors } }) => colors.primary.normal};
  }
`;

const Location = styled.p`
  ${({ theme: { typography } }) => typography.small}
  color: ${({ theme: { colors } }) => colors.secondary.normal};
  margin: 24px 0 0;
`;

export default {
  Description,
  Action,
  Links,
  Link,
  Location,
};

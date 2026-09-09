import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  justify-content: center;
  padding: 32px 16px;
  background-color: ${({ theme: { colors } }) => colors.coal.dark};

  ${({ theme: { breakpoints } }) => breakpoints.md} {
    padding: 40px 24px;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  max-width: ${({ theme: { widths } }) => widths.max};
`;

const Name = styled.p`
  ${({ theme: { typography } }) => typography.small}
  color: ${({ theme: { colors } }) => colors.white.dark};
  margin: 0;
`;

const Links = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Link = styled.a`
  ${({ theme: { typography } }) => typography.small}
  color: ${({ theme: { colors } }) => colors.white.normal};
  text-decoration: none;
  border-bottom: 1px solid transparent;

  &:hover,
  &:focus-visible {
    border-bottom-color: ${({ theme: { colors } }) => colors.primary.normal};
  }
`;

export default {
  Container,
  Inner,
  Name,
  Links,
  Link,
};

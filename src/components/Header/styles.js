import styled from 'styled-components';

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 12px 16px;
  background-color: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.white.dark};
  z-index: 10;

  ${({ theme: { breakpoints } }) => breakpoints.md} {
    padding: 12px 24px;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  max-width: ${({ theme: { widths } }) => widths.max};
`;

const Home = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: none;

  ${({ theme: { breakpoints } }) => breakpoints.md} {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.a`
  ${({ theme: { typography } }) => typography.small}
  color: ${({ theme: { colors } }) => colors.coal.normal};
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;

  &:hover,
  &:focus-visible {
    color: ${({ theme: { colors } }) => colors.coal.dark};
    border-bottom-color: ${({ theme: { colors } }) => colors.primary.normal};
  }
`;

export default {
  Container,
  Inner,
  Home,
  Nav,
  NavList,
  NavLink,
};

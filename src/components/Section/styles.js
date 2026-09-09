import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 48px 16px;

  ${({ theme: { breakpoints } }) => breakpoints.md} {
    padding: 88px 24px;
  }

  &:nth-of-type(even) {
    background-color: ${({ theme: { colors } }) => colors.white.dark};
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: ${({ theme: { widths } }) => widths.max};
`;

const Header = styled.header`
  margin-bottom: 32px;

  ${({ theme: { breakpoints } }) => breakpoints.md} {
    margin-bottom: 48px;
  }
`;

const Eyebrow = styled.p`
  ${({ theme: { typography } }) => typography.small}
  color: ${({ theme: { colors } }) => colors.primary.normal};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin: 0 0 8px;
`;

const Title = styled.h2`
  ${({ theme: { typography } }) => typography.h3}
  color: ${({ theme: { colors } }) => colors.coal.dark};
  margin: 0;
`;

export default {
  Container,
  Inner,
  Header,
  Eyebrow,
  Title,
};

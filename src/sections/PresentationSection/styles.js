import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 576px;

  display: flex;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: ${({ theme: { zIndex } }) => zIndex.presentation.fade};
  }

  background: url('presentation.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  z-index: ${({ theme: { zIndex } }) => zIndex.presentation.content};

  ${({ theme: { breakpoints } }) => `
    ${breakpoints.sm} {
      max-width: 540px;
    }
    ${breakpoints.md} {
      max-width: 720px;
    }
    ${breakpoints.lg} {
      max-width: 960px;
    }
  `}
`;

const Title = styled.h1`
  ${({ theme: { typography } }) => typography.display}
  color: ${({ theme: { colors } }) => colors.white.dark};

  text-align: center;
  margin: 0;
  margin-bottom: 2rem;
`;

const TitleHighlight = styled.strong``;

const Subtitle = styled.p`
  ${({ theme: { typography } }) => typography.lead}
  color: ${({ theme: { colors } }) => colors.white.normal};

  text-align: justify;
  line-height: 2rem !important;

  ${({ theme: { breakpoints } }) => breakpoints.md} {
    text-align: center;
  }

  margin: 0;
  margin-bottom: 2rem;
`;

const Button = styled.a`
  ${({ theme: { button } }) => button.primary}
`;

export default {
  Container,
  Content,
  Title,
  TitleHighlight,
  Subtitle,
  Button,
};

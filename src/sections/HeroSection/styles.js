import styled, { css, keyframes } from 'styled-components';

const riseIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: none; }
`;

/* Entrance animation for above-the-fold content, which the scroll observer
   would never get to animate. Skipped entirely for reduced motion. */
const entrance = (order) => css`
  @media (prefers-reduced-motion: no-preference) {
    opacity: 0;
    animation: ${riseIn} 700ms ease forwards;
    animation-delay: ${order * 110}ms;
  }
`;

const Container = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 96px 16px 48px;
  overflow: hidden;

  ${({ theme: { breakpoints } }) => breakpoints.md} {
    padding: 120px 24px 72px;
  }
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  background: url('presentation.jpg') center center / cover no-repeat;
  z-index: ${({ theme: { zIndex } }) => zIndex.presentation.fade - 1};
`;

const Fade = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    140deg,
    rgba(49, 43, 69, 0.92) 0%,
    rgba(49, 43, 69, 0.78) 45%,
    rgba(40, 102, 168, 0.72) 100%
  );
  z-index: ${({ theme: { zIndex } }) => zIndex.presentation.fade};
`;

const Content = styled.div`
  position: relative;
  z-index: ${({ theme: { zIndex } }) => zIndex.presentation.content};
  width: 100%;
  max-width: ${({ theme: { widths } }) => widths.max};
`;

const Greeting = styled.p`
  ${({ theme: { typography } }) => typography.lead}
  color: ${({ theme: { colors } }) => colors.white.dark};
  margin: 0 0 4px;
  ${entrance(0)}
`;

const Name = styled.h1`
  ${({ theme: { typography } }) => typography.display}
  color: ${({ theme: { colors } }) => colors.white.normal};
  margin: 0;
  ${entrance(1)}
`;

const Headline = styled.p`
  ${({ theme: { typography } }) => typography.h3}
  color: ${({ theme: { colors } }) => colors.primary.normal};
  margin: 8px 0 0;
  ${entrance(2)}
`;

const Description = styled.p`
  ${({ theme: { typography } }) => typography.lead}
  color: ${({ theme: { colors } }) => colors.white.dark};
  max-width: 46ch;
  margin: 24px 0 0;
  ${entrance(3)}
`;

const Location = styled.p`
  ${({ theme: { typography } }) => typography.small}
  color: ${({ theme: { colors } }) => colors.white.dark};
  margin: 16px 0 0;
  ${entrance(3)}
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
  ${entrance(4)}
`;

const PrimaryAction = styled.a`
  ${({ theme: { button } }) => button.primary}
  display: inline-block;
  text-decoration: none;
  transition: background-color 200ms ease;
`;

const SecondaryAction = styled.a`
  ${({ theme: { button } }) => button.secondary}
  display: inline-block;
  text-decoration: none;
  transition: background-color 200ms ease;
`;

const Social = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  margin: 28px 0 0;
  padding: 0;
  ${entrance(5)}
`;

const SocialLink = styled.a`
  ${({ theme: { typography } }) => typography.normal}
  color: ${({ theme: { colors } }) => colors.white.normal};
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-color 200ms ease;

  &:hover,
  &:focus-visible {
    border-bottom-color: ${({ theme: { colors } }) => colors.primary.normal};
  }
`;

export default {
  Container,
  Background,
  Fade,
  Content,
  Greeting,
  Name,
  Headline,
  Description,
  Location,
  Actions,
  PrimaryAction,
  SecondaryAction,
  Social,
  SocialLink,
};

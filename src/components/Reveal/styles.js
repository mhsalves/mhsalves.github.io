import styled, { css, keyframes } from 'styled-components';

const riseIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: none; }
`;

/**
 * The element is always visible. Entering the viewport only adds an animation
 * that plays *from* transparent, so if the observer never runs the content is
 * simply there, unanimated — it can never be left invisible.
 */
const Item = styled.div`
  ${({ state, delay }) => state === 'animate' && css`
    @media (prefers-reduced-motion: no-preference) {
      animation: ${riseIn} 600ms ease both;
      animation-delay: ${delay}ms;
    }
  `}
`;

export default {
  Item,
};

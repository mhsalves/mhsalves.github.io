import styled from 'styled-components';

const Text = styled.p`
  font-size: 1.333rem;
  line-height: 1.5rem;
  margin: 0;
  ${({ theme: { typography } }) => typography.lead}

  ${({ theme: { breakpoints } }) => breakpoints.sm} {
    margin: 24px auto;
    max-width: ${({ theme: { widths } }) => widths.max};
  }
`;

export default {
  Text,
};

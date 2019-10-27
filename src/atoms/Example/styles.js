import styled from 'styled-components';

const Text = styled.p`
  font-size: 1.333rem;
  line-height: 1.5rem;
  margin: 0;

  ${({ theme: { breakpoints } }) => breakpoints.sm} {
    margin: 24px;
  }
`;

export default {
  Text,
};

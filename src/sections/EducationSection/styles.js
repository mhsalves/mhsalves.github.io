import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 16px;

  ${({ theme: { breakpoints } }) => breakpoints.md} {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
`;

const Item = styled.li`
  padding: 24px;
  border-radius: 12px;
  background-color: ${({ theme: { colors } }) => colors.white.normal};
  border: 1px solid ${({ theme: { colors } }) => colors.white.dark};
  height: 100%;
`;

const School = styled.h3`
  ${({ theme: { typography } }) => typography.normal}
  color: ${({ theme: { colors } }) => colors.coal.dark};
  margin: 0;
`;

const Course = styled.p`
  ${({ theme: { typography } }) => typography.small}
  color: ${({ theme: { colors } }) => colors.coal.normal};
  margin: 6px 0 0;
`;

const Period = styled.p`
  ${({ theme: { typography } }) => typography.small}
  color: ${({ theme: { colors } }) => colors.secondary.normal};
  margin: 8px 0 0;
`;

export default {
  List,
  Item,
  School,
  Course,
  Period,
};

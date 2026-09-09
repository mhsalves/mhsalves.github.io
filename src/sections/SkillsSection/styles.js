import styled from 'styled-components';

const Groups = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  ${({ theme: { breakpoints } }) => breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
`;

const Group = styled.div``;

const GroupName = styled.h3`
  ${({ theme: { typography } }) => typography.normal}
  color: ${({ theme: { colors } }) => colors.coal.dark};
  margin: 0 0 12px;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Tag = styled.li`
  ${({ theme: { typography } }) => typography.small}
  color: ${({ theme: { colors } }) => colors.coal.normal};
  background-color: ${({ theme: { colors } }) => colors.white.normal};
  border: 1px solid ${({ theme: { colors } }) => colors.white.dark};
  border-radius: 999px;
  padding: 6px 14px;
`;

const Extras = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-top: 40px;

  ${({ theme: { breakpoints } }) => breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
`;

const Item = styled.li`
  ${({ theme: { typography } }) => typography.small}
  color: ${({ theme: { colors } }) => colors.coal.normal};
`;

const ItemName = styled.span`
  color: ${({ theme: { colors } }) => colors.coal.dark};
`;

export default {
  Groups,
  Group,
  GroupName,
  Tags,
  Tag,
  Extras,
  List,
  Item,
  ItemName,
};

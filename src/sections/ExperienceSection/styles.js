import styled from 'styled-components';

const Timeline = styled.ol`
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0 0 0 24px;
  display: grid;
  gap: 32px;

  /* The spine of the timeline. */
  &::before {
    content: '';
    position: absolute;
    top: 6px;
    bottom: 6px;
    left: 5px;
    width: 2px;
    background-color: ${({ theme: { colors } }) => colors.white.dark};
  }

  ${({ theme: { breakpoints } }) => breakpoints.md} {
    padding-left: 32px;
  }
`;

const Entry = styled.li`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: -24px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme: { colors } }) => colors.primary.normal};

    ${({ theme: { breakpoints } }) => breakpoints.md} {
      left: -32px;
    }
  }
`;

const Company = styled.h3`
  ${({ theme: { typography } }) => typography.lead}
  color: ${({ theme: { colors } }) => colors.coal.dark};
  margin: 0;
`;

const Meta = styled.p`
  ${({ theme: { typography } }) => typography.small}
  color: ${({ theme: { colors } }) => colors.secondary.normal};
  margin: 2px 0 0;
`;

const Description = styled.p`
  ${({ theme: { typography } }) => typography.normal}
  color: ${({ theme: { colors } }) => colors.coal.normal};
  max-width: 68ch;
  margin: 12px 0 0;
`;

const Roles = styled.ul`
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
  display: grid;
  gap: 4px;
`;

const Role = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 12px;
  align-items: baseline;
`;

const RoleTitle = styled.span`
  ${({ theme: { typography } }) => typography.normal}
  color: ${({ theme: { colors } }) => colors.coal.dark};
`;

const RolePeriod = styled.span`
  ${({ theme: { typography } }) => typography.small}
  color: ${({ theme: { colors } }) => colors.secondary.normal};
`;

export default {
  Timeline,
  Entry,
  Company,
  Meta,
  Description,
  Roles,
  Role,
  RoleTitle,
  RolePeriod,
};

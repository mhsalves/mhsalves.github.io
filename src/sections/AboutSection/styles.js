import styled from 'styled-components';

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: start;

  ${({ theme: { breakpoints } }) => breakpoints.md} {
    grid-template-columns: 320px 1fr;
    gap: 56px;
  }
`;

const Photo = styled.img`
  width: 100%;
  max-width: 320px;
  border-radius: 16px;
  display: block;
`;

const Text = styled.div`
  display: grid;
  gap: 16px;
`;

const Paragraph = styled.p`
  ${({ theme: { typography } }) => typography.normal}
  color: ${({ theme: { colors } }) => colors.coal.normal};
  margin: 0;
`;

const Highlights = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  list-style: none;
  margin: 16px 0 0;
  padding: 0;
`;

const Highlight = styled.li`
  border-left: 3px solid ${({ theme: { colors } }) => colors.primary.normal};
  padding-left: 12px;
`;

const HighlightValue = styled.p`
  ${({ theme: { typography } }) => typography.lead}
  color: ${({ theme: { colors } }) => colors.coal.dark};
  margin: 0;
`;

const HighlightLabel = styled.p`
  ${({ theme: { typography } }) => typography.small}
  color: ${({ theme: { colors } }) => colors.secondary.normal};
  margin: 0;
`;

export default {
  Content,
  Photo,
  Text,
  Paragraph,
  Highlights,
  Highlight,
  HighlightValue,
  HighlightLabel,
};

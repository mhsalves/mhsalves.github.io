import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  max-width: ${({ theme: { widths } }) => widths.max};

  padding: 16px;

  ${({ theme: { breakpoints } }) => breakpoints.md} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 48px;
    padding: 48px;
  }
`;

const Image = styled.img`
  max-width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoContent = styled.div`
  display: grid;
  grid-gap: 32px;
`;

const TitleContent = styled.div`
  display: block;
`;

const Title = styled.h2`
  ${({ theme: { typography } }) => typography.h2}
  display: inline-block;

  border-top: 4px solid ${({ theme: { colors } }) => colors.primary.normal};
  padding-top: 16px;
  box-sizing: border-box;
`;

const Description = styled.p`
  ${({ theme: { typography } }) => typography.normal}
`;

const SubDescription = styled.p`
  ${({ theme: { typography } }) => typography.small}
`;

export default {
  Container,
  Content,
  Image,
  InfoContainer,
  InfoContent,
  TitleContent,
  Title,
  Description,
  SubDescription,
};

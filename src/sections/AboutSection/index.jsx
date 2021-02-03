import React from 'react';

import Style from './styles';
import data from './data';

function AboutSection() {
  return (
    <Style.Container id="about-me">
      <Style.Content>
        <Style.Image src="my-photo.jpg" />
        <Style.InfoContainer>
          <Style.InfoContent>
            <Style.TitleContent>
              <Style.Title>{data.title}</Style.Title>
            </Style.TitleContent>
            <Style.Description>{data.description}</Style.Description>
            <Style.SubDescription>{data.subDescription}</Style.SubDescription>
          </Style.InfoContent>
        </Style.InfoContainer>
      </Style.Content>
    </Style.Container>
  );
}

export default AboutSection;

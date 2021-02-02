import React, { memo } from 'react';

import data from './data';
import Style from './styles';

function PresentationSection() {
  return (
    <Style.Container>
      <Style.Content>
        <Style.Title>
          {data.prefixTitle}
          <Style.TitleHighlight>{data.myName}</Style.TitleHighlight>
        </Style.Title>
        <Style.Subtitle>{data.description}</Style.Subtitle>
        <Style.Button>{data.moreButton}</Style.Button>
      </Style.Content>
    </Style.Container>
  );
}

export default memo(PresentationSection);

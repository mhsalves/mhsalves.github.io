import React, { memo } from 'react';

import useTranslate from '../../bosons/i18n/useTranslate';

import Style from './styles';
import langPtBr from './lang/ptBr';
import langEnUS from './lang/enUs';

function PresentationSection() {
  const translate = useTranslate(langPtBr, langEnUS);

  return (
    <Style.Container>
      <Style.Content>
        <Style.Title>
          {translate.prefixTitle}
          <Style.TitleHighlight>{translate.myName}</Style.TitleHighlight>
        </Style.Title>
        <Style.Subtitle>{translate.description}</Style.Subtitle>
        <Style.Button>{translate.moreButton}</Style.Button>
      </Style.Content>
    </Style.Container>
  );
}

export default memo(PresentationSection);

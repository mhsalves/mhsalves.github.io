import React, { memo } from 'react';

import { LANGUAGES, useLanguage } from 'i18n';

import Style from './styles';

const groupLabel = {
  en: 'Language',
  pt: 'Idioma',
};

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Style.Group role="group" aria-label={groupLabel[language] || groupLabel.en}>
      {LANGUAGES.map((option) => (
        <Style.Option
          key={option.code}
          type="button"
          lang={option.code}
          title={option.name}
          isActive={option.code === language}
          aria-pressed={option.code === language}
          onClick={() => setLanguage(option.code)}
        >
          {option.label}
        </Style.Option>
      ))}
    </Style.Group>
  );
}

export default memo(LanguageToggle);

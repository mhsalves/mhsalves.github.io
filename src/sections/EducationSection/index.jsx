import React, { memo } from 'react';

import Section from 'components/Section';
import Reveal from 'components/Reveal';
import { useTranslation } from 'i18n';

import data from './data';
import Style from './styles';

function EducationSection() {
  const content = useTranslation(data);

  return (
    <Section id="education" eyebrow={content.eyebrow} title={content.title}>
      <Style.List>
        {content.items.map((item, index) => (
          <Style.Item key={`${item.school}-${item.period}`}>
            <Reveal delay={index * 70}>
              <Style.School>{item.school}</Style.School>
              <Style.Course>{item.course}</Style.Course>
              <Style.Period>{item.period}</Style.Period>
            </Reveal>
          </Style.Item>
        ))}
      </Style.List>
    </Section>
  );
}

export default memo(EducationSection);

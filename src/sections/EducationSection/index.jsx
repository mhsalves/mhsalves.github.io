import React, { memo } from 'react';

import Section from 'components/Section';
import Reveal from 'components/Reveal';

import data from './data';
import Style from './styles';

function EducationSection() {
  return (
    <Section id="education" eyebrow={data.eyebrow} title={data.title}>
      <Style.List>
        {data.items.map((item, index) => (
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

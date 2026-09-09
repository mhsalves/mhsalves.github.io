import React, { memo } from 'react';

import Section from 'components/Section';
import Reveal from 'components/Reveal';
import { useTranslation } from 'i18n';

import data from './data';
import Style from './styles';

function SkillsSection() {
  const content = useTranslation(data);

  return (
    <Section id="skills" eyebrow={content.eyebrow} title={content.title}>
      <Style.Groups>
        {content.groups.map((group, index) => (
          <Reveal key={group.name} delay={(index % 2) * 70}>
            <Style.Group>
              <Style.GroupName>{group.name}</Style.GroupName>
              <Style.Tags>
                {group.items.map((item) => (
                  <Style.Tag key={item}>{item}</Style.Tag>
                ))}
              </Style.Tags>
            </Style.Group>
          </Reveal>
        ))}
      </Style.Groups>

      <Style.Extras>
        <Reveal>
          <Style.Group>
            <Style.GroupName>{content.languagesTitle}</Style.GroupName>
            <Style.List>
              {content.languages.map((language) => (
                <Style.Item key={language.name}>
                  <Style.ItemName>{language.name}</Style.ItemName>
                  {` — ${language.level}`}
                </Style.Item>
              ))}
            </Style.List>
          </Style.Group>
        </Reveal>

        <Reveal delay={70}>
          <Style.Group>
            <Style.GroupName>{content.certificationsTitle}</Style.GroupName>
            <Style.List>
              {content.certifications.map((certification) => (
                <Style.Item key={certification}>{certification}</Style.Item>
              ))}
            </Style.List>
          </Style.Group>
        </Reveal>
      </Style.Extras>
    </Section>
  );
}

export default memo(SkillsSection);

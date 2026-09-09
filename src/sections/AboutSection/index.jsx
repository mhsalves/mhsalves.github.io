import React, { memo } from 'react';

import Section from 'components/Section';
import Reveal from 'components/Reveal';
import { useTranslation } from 'i18n';

import data from './data';
import Style from './styles';

function AboutSection() {
  const content = useTranslation(data);

  return (
    <Section id="about" eyebrow={content.eyebrow} title={content.title}>
      <Style.Content>
        <Reveal>
          <Style.Photo src={data.photo} alt={content.photoAlt} />
        </Reveal>

        <Reveal delay={80}>
          <Style.Text>
            {content.paragraphs.map((paragraph) => (
              <Style.Paragraph key={paragraph.slice(0, 40)}>
                {paragraph}
              </Style.Paragraph>
            ))}

            <Style.Highlights>
              {content.highlights.map((highlight) => (
                <Style.Highlight key={highlight.label}>
                  <Style.HighlightValue>{highlight.value}</Style.HighlightValue>
                  <Style.HighlightLabel>{highlight.label}</Style.HighlightLabel>
                </Style.Highlight>
              ))}
            </Style.Highlights>
          </Style.Text>
        </Reveal>
      </Style.Content>
    </Section>
  );
}

export default memo(AboutSection);

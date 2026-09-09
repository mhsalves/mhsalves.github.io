import React, { memo } from 'react';

import Section from 'components/Section';
import Reveal from 'components/Reveal';

import data from './data';
import Style from './styles';

function AboutSection() {
  return (
    <Section id="about" eyebrow={data.eyebrow} title={data.title}>
      <Style.Content>
        <Reveal>
          <Style.Photo src={data.photo.src} alt={data.photo.alt} />
        </Reveal>

        <Reveal delay={80}>
          <Style.Text>
            {data.paragraphs.map((paragraph) => (
              <Style.Paragraph key={paragraph.slice(0, 40)}>
                {paragraph}
              </Style.Paragraph>
            ))}

            <Style.Highlights>
              {data.highlights.map((highlight) => (
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

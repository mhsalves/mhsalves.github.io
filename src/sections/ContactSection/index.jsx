import React, { memo } from 'react';

import Section from 'components/Section';
import Reveal from 'components/Reveal';
import { useTranslation } from 'i18n';

import data from './data';
import Style from './styles';

function ContactSection() {
  const content = useTranslation(data);

  return (
    <Section id="contact" eyebrow={content.eyebrow} title={content.title}>
      <Reveal>
        <Style.Description>{content.description}</Style.Description>

        <Style.Action
          href={content.action.href}
          target="_blank"
          rel="noreferrer noopener"
        >
          {content.action.label}
        </Style.Action>

        <Style.Links>
          {data.links.map((link) => (
            <li key={link.href}>
              <Style.Link
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {link.label}
              </Style.Link>
            </li>
          ))}
        </Style.Links>

        <Style.Location>{content.location}</Style.Location>
      </Reveal>
    </Section>
  );
}

export default memo(ContactSection);

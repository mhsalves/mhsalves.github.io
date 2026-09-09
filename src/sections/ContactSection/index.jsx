import React, { memo } from 'react';

import Section from 'components/Section';
import Reveal from 'components/Reveal';

import data from './data';
import Style from './styles';

function ContactSection() {
  return (
    <Section id="contact" eyebrow={data.eyebrow} title={data.title}>
      <Reveal>
        <Style.Description>{data.description}</Style.Description>

        <Style.Action href={data.action.href}>{data.action.label}</Style.Action>

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

        <Style.Location>{data.location}</Style.Location>
      </Reveal>
    </Section>
  );
}

export default memo(ContactSection);

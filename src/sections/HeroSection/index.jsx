import React, { memo } from 'react';

import { useTranslation } from 'i18n';

import data from './data';
import Style from './styles';

function HeroSection() {
  const content = useTranslation(data);

  return (
    <Style.Container id="top">
      <Style.Background aria-hidden="true" />
      <Style.Fade aria-hidden="true" />
      <Style.Content>
        <Style.Greeting>{content.greeting}</Style.Greeting>
        <Style.Name>{content.name}</Style.Name>
        <Style.Headline>{content.headline}</Style.Headline>
        <Style.Description>{content.description}</Style.Description>
        <Style.Location>{content.location}</Style.Location>

        <Style.Actions>
          <Style.PrimaryAction href={content.actions.primary.href}>
            {content.actions.primary.label}
          </Style.PrimaryAction>
          <Style.SecondaryAction href={content.actions.secondary.href}>
            {content.actions.secondary.label}
          </Style.SecondaryAction>
        </Style.Actions>

        <Style.Social>
          {data.social.map((link) => (
            <li key={link.href}>
              <Style.SocialLink
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {link.label}
              </Style.SocialLink>
            </li>
          ))}
        </Style.Social>
      </Style.Content>
    </Style.Container>
  );
}

export default memo(HeroSection);

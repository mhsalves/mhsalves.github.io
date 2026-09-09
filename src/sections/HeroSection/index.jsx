import React, { memo } from 'react';

import data from './data';
import Style from './styles';

function HeroSection() {
  return (
    <Style.Container id="top">
      <Style.Background aria-hidden="true" />
      <Style.Fade aria-hidden="true" />
      <Style.Content>
        <Style.Greeting>{data.greeting}</Style.Greeting>
        <Style.Name>{data.name}</Style.Name>
        <Style.Headline>{data.headline}</Style.Headline>
        <Style.Description>{data.description}</Style.Description>
        <Style.Location>{data.location}</Style.Location>

        <Style.Actions>
          <Style.PrimaryAction href={data.actions.primary.href}>
            {data.actions.primary.label}
          </Style.PrimaryAction>
          <Style.SecondaryAction href={data.actions.secondary.href}>
            {data.actions.secondary.label}
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

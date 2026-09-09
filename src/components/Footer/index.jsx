import React, { memo } from 'react';

import profile from 'data/profile';

import Style from './styles';

const links = [profile.links.linkedin, profile.links.github];

function Footer() {
  return (
    <Style.Container>
      <Style.Inner>
        <Style.Name>{profile.name}</Style.Name>

        <Style.Links>
          {links.map((link) => (
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
      </Style.Inner>
    </Style.Container>
  );
}

export default memo(Footer);

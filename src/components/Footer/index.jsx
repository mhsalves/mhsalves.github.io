import React, { memo } from 'react';

import Logo from 'components/Logo';
import profile from 'data/profile';
import { useTranslation } from 'i18n';

import Style from './styles';

const links = [profile.links.linkedin, profile.links.github];

const data = {
  en: { home: 'Back to top' },
  pt: { home: 'Voltar ao topo' },
};

function Footer() {
  const content = useTranslation(data);
  const year = new Date().getFullYear();

  return (
    <Style.Container>
      <Style.Inner>
        <Style.Identity>
          <Style.Home href="#top" aria-label={content.home}>
            <Logo size={40} variant="light" />
          </Style.Home>

          <Style.Meta>
            <Style.Name>{profile.name}</Style.Name>
            <Style.Year>
              ©
              {' '}
              {year}
            </Style.Year>
          </Style.Meta>
        </Style.Identity>

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

import React, { memo } from 'react';

import Logo from 'components/Logo';
import LanguageToggle from 'components/LanguageToggle';
import { useTranslation } from 'i18n';

import Style from './styles';

const data = {
  en: {
    home: 'Back to top',
    nav: 'Sections',
    items: [
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  pt: {
    home: 'Voltar ao topo',
    nav: 'Seções',
    items: [
      { label: 'Sobre', href: '#about' },
      { label: 'Experiência', href: '#experience' },
      { label: 'Projetos', href: '#projects' },
      { label: 'Competências', href: '#skills' },
      { label: 'Contato', href: '#contact' },
    ],
  },
};

function Header() {
  const content = useTranslation(data);

  return (
    <Style.Container>
      <Style.Inner>
        <Style.Home href="#top" aria-label={content.home}>
          <Logo size={36} />
        </Style.Home>

        <Style.Actions>
          <Style.Nav aria-label={content.nav}>
            <Style.NavList>
              {content.items.map((item) => (
                <li key={item.href}>
                  <Style.NavLink href={item.href}>{item.label}</Style.NavLink>
                </li>
              ))}
            </Style.NavList>
          </Style.Nav>

          <LanguageToggle />
        </Style.Actions>
      </Style.Inner>
    </Style.Container>
  );
}

export default memo(Header);

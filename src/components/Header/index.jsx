import React, { memo } from 'react';

import Logo from 'components/Logo';

import Style from './styles';

const items = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  return (
    <Style.Container>
      <Style.Inner>
        <Style.Home href="#top" aria-label="Back to top">
          <Logo size={36} />
        </Style.Home>

        <Style.Nav aria-label="Sections">
          <Style.NavList>
            {items.map((item) => (
              <li key={item.href}>
                <Style.NavLink href={item.href}>{item.label}</Style.NavLink>
              </li>
            ))}
          </Style.NavList>
        </Style.Nav>
      </Style.Inner>
    </Style.Container>
  );
}

export default memo(Header);

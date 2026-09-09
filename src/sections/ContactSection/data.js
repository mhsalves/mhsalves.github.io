import profile from 'data/profile';

const en = {
  title: 'Let\'s talk',
  eyebrow: 'Contact',
  description: 'I am always happy to talk about front-end architecture, building teams, or the JavaScript community in Manaus. LinkedIn is the quickest way to reach me.',
  action: { label: 'Message me on LinkedIn', href: profile.links.linkedin.href },
  location: 'Manaus, Amazonas, Brazil',
};

const pt = {
  title: 'Vamos conversar',
  eyebrow: 'Contato',
  description: 'Gosto de conversar sobre arquitetura de front-end, formação de times e a comunidade de JavaScript em Manaus. O LinkedIn é o jeito mais rápido de me achar.',
  action: { label: 'Fale comigo no LinkedIn', href: profile.links.linkedin.href },
  location: 'Manaus, Amazonas, Brasil',
};

const links = [profile.links.github];

export default { en, pt, links };

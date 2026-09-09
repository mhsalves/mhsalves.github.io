import profile from 'data/profile';

const en = {
  greeting: 'Hello, I\'m',
  name: profile.name,
  headline: 'Senior Software Engineer',
  description: 'I have been building for the web since 2012 — from PHP and native mobile apps to React architecture, micro-frontends and leading front-end teams. These days I work with Mendix too.',
  location: 'Manaus, Amazonas, Brazil',
  actions: {
    primary: { label: 'Let\'s talk', href: '#contact' },
    secondary: { label: 'See my work', href: '#projects' },
  },
};

const pt = {
  greeting: 'Olá, eu sou o',
  name: profile.name,
  headline: 'Engenheiro de Software Sênior',
  description: 'Construo para a web desde 2012 — de PHP e apps nativos a arquitetura React, micro-frontends e liderança de times de front-end. Hoje também trabalho com Mendix.',
  location: 'Manaus, Amazonas, Brasil',
  actions: {
    primary: { label: 'Vamos conversar', href: '#contact' },
    secondary: { label: 'Veja meu trabalho', href: '#projects' },
  },
};

const social = [profile.links.linkedin, profile.links.github];

export default { en, pt, social };

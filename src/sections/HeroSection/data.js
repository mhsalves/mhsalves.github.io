import profile from 'data/profile';

const greeting = 'Hello, I\'m';
const name = profile.name.replace(/ ([^ ]*)$/, ' $1');
const headline = `${profile.role} at ${profile.company}`;

const description = 'I have been building for the web since 2012 — from PHP and native mobile apps to React architecture, micro-frontends and leading front-end teams.';

const actions = {
  primary: { label: 'Get in touch', href: '#contact' },
  secondary: { label: 'See my work', href: '#projects' },
};

const social = [profile.links.linkedin, profile.links.github];

export default {
  greeting,
  name,
  headline,
  description,
  location: profile.location,
  actions,
  social,
};

import profile from 'data/profile';

const title = 'Projects';
const eyebrow = 'Open source';

const projects = [
  {
    name: 'next-ghpages-template',
    description: 'Template combining GitHub Pages, React and server-side rendering with Next.js. This very site started from it.',
    language: 'JavaScript',
    href: 'https://github.com/mhsalves/next-ghpages-template',
  },
  {
    name: 'poc-client-website-remote',
    description: 'Proof of concept for a "remote" micro-frontends approach.',
    language: 'TypeScript',
    href: 'https://github.com/mhsalves/poc-client-website-remote',
  },
  {
    name: 'client-website-boilerplate',
    description: 'Module template for micro-frontend systems.',
    language: 'TypeScript',
    href: 'https://github.com/mhsalves/client-website-boilerplate',
  },
  {
    name: 'react-basic-project',
    description: 'Educational repository built for teaching React.',
    language: 'JavaScript',
    href: 'https://github.com/mhsalves/react-basic-project',
  },
  {
    name: 'react-library-example-code-splitting',
    description: 'Example library for testing code splitting with React.',
    language: 'JavaScript',
    href: 'https://github.com/mhsalves/react-library-example-code-splitting',
  },
  {
    name: 'yugioh-fb-catalog',
    description: 'Tools for retrieving data from Yu-Gi-Oh! Forbidden Memories.',
    language: 'TypeScript',
    href: 'https://github.com/mhsalves/yugioh-fb-catalog',
  },
];

const more = {
  label: 'See all repositories on GitHub',
  href: profile.links.github.href,
};

export default {
  title,
  eyebrow,
  projects,
  more,
};

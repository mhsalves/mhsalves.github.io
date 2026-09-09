import profile from 'data/profile';

const repositories = [
  { name: 'next-ghpages-template', language: 'JavaScript' },
  { name: 'poc-client-website-remote', language: 'TypeScript' },
  { name: 'client-website-boilerplate', language: 'TypeScript' },
  { name: 'react-basic-project', language: 'JavaScript' },
  { name: 'react-library-example-code-splitting', language: 'JavaScript' },
  { name: 'yugioh-fb-catalog', language: 'TypeScript' },
];

const descriptions = {
  en: {
    'next-ghpages-template': 'Template combining GitHub Pages, React and server-side rendering with Next.js. This very site started from it.',
    'poc-client-website-remote': 'Proof of concept for a "remote" micro-frontends approach.',
    'client-website-boilerplate': 'Module template for micro-frontend systems.',
    'react-basic-project': 'Educational repository built for teaching React.',
    'react-library-example-code-splitting': 'Example library for testing code splitting with React.',
    'yugioh-fb-catalog': 'Tools for retrieving data from Yu-Gi-Oh! Forbidden Memories.',
  },
  pt: {
    'next-ghpages-template': 'Template que junta GitHub Pages, React e renderização no servidor com Next.js. Este site nasceu dele.',
    'poc-client-website-remote': 'Prova de conceito de uma abordagem de micro-frontends "remotos".',
    'client-website-boilerplate': 'Template de módulo para sistemas de micro-frontends.',
    'react-basic-project': 'Repositório educacional feito para ensinar React.',
    'react-library-example-code-splitting': 'Biblioteca de exemplo para testar code splitting com React.',
    'yugioh-fb-catalog': 'Ferramentas para extrair dados do Yu-Gi-Oh! Forbidden Memories.',
  },
};

const build = (language) => repositories.map((repository) => ({
  ...repository,
  description: descriptions[language][repository.name],
  href: `https://github.com/mhsalves/${repository.name}`,
}));

const en = {
  title: 'Projects',
  eyebrow: 'Open source',
  projects: build('en'),
  more: { label: 'See all repositories on GitHub', href: profile.links.github.href },
};

const pt = {
  title: 'Projetos',
  eyebrow: 'Código aberto',
  projects: build('pt'),
  more: { label: 'Ver todos os repositórios no GitHub', href: profile.links.github.href },
};

export default { en, pt };

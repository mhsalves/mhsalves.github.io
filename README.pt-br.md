# mhsalves.github.io

Meu site pessoal e portfólio, no ar em **[matheusalves.dev](https://matheusalves.dev/)**.

É um site estático feito com [NextJS](https://nextjs.org/) e [styled-components](https://styled-components.com/), exportado como HTML/CSS/JS puro e servido pelo [GitHub Pages](https://pages.github.com/) a partir da pasta `docs/` da branch `main`, sob o domínio customizado `matheusalves.dev`.

*Leia em outras línguas: [English](README.md), [Português Brasileiro](README.pt-br.md)*

## Tecnologias

- [NextJS](https://nextjs.org/) como framework React, usado em modo de exportação estática.
- [styled-components](https://styled-components.com/) para estilos e temas.
- [Jest](https://jestjs.io/) + [Enzyme](https://enzymejs.github.io/enzyme/) para testes, com cobertura mínima de 100%.
- [ESLint](https://eslint.org/) (configuração airbnb) para o lint.
- [CircleCI](https://circleci.com/) para rodar a suíte de testes a cada push.

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20.x (versão usada atualmente no projeto)
- [npm](https://www.npmjs.com/) 10.x

O `yarn.lock` também está versionado, mas está desatualizado — instalar via Yarn 1 hoje gera uma árvore em que a suíte de testes não consegue iniciar, então prefira o npm.

## Rodando localmente

Clone o repositório e instale as dependências:

```bash
git clone git@github.com:mhsalves/mhsalves.github.io.git
cd mhsalves.github.io
npm install --legacy-peer-deps
```

> O `--legacy-peer-deps` é necessário: o projeto usa React 17 enquanto o `enzyme-adapter-react-16` ainda declara peer dependency de React 16, então um `npm install` normal falha com erro `ERESOLVE`.

Suba o servidor de desenvolvimento:

```bash
npm run dev
```

O site fica disponível em [http://localhost:3000](http://localhost:3000) com hot reload.

Para conferir a saída de produção localmente, gere o build e suba o servidor de produção:

```bash
npm run build
npm start
```

## Scripts disponíveis

| Script | O que faz |
| --- | --- |
| `npm run dev` | Sobe o servidor de desenvolvimento do NextJS na porta 3000. |
| `npm run build` | Gera o bundle de produção em `dist/.next`. |
| `npm start` | Serve o build de produção localmente. |
| `npm run export` | Exporta o build como site estático em `docs/`. |
| `npm run eslint` | Roda o lint em todos os arquivos `.js` e `.jsx` de `src/`. |
| `npm test` | Roda a suíte do Jest com cobertura. |
| `npm run release:gp` | Faz build, export e commit do site estático para o GitHub Pages. Veja [DEPLOY.pt-br.md](DEPLOY.pt-br.md). |
| `npm run release:netlify` | Faz build e export do site, sem as etapas do GitHub Pages. |

## Estrutura do projeto

```
src/
├── bosons/      Blocos base (temas, CSS global, meta tags, carregamento de fontes)
├── components/  Componentes reutilizáveis
├── hoc/         Higher-order components (ex.: withTheme)
├── pages/       Páginas do NextJS (_app, _document, index)
├── public/      Arquivos estáticos copiados para a raiz do site
└── sections/    Seções da página (PresentationSection, AboutSection)

docs/            Site estático exportado e publicado pelo GitHub Pages (gerado)
dist/            Saída de build do NextJS (gerada, ignorada pelo git)
.jest/           Configuração e setup do Jest
```

## Testes

```bash
npm test
```

A cobertura mínima está em 100% para branches, funções, linhas e statements no arquivo `.jest/config.js`, então qualquer queda de cobertura quebra a suíte.

## Deploy

O site é publicado no GitHub Pages a partir da pasta `docs/` da branch `main`. O processo completo está documentado em **[DEPLOY.pt-br.md](DEPLOY.pt-br.md)** ([English](DEPLOY.md)).

## Licença

[MIT](LICENSE)

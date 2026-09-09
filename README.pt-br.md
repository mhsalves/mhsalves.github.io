# mhsalves.github.io

Meu site pessoal e portfólio, no ar em **[matheusalves.dev](https://matheusalves.dev/)**.

Um site estático feito com [NextJS](https://nextjs.org/) e
[styled-components](https://styled-components.com/), exportado como HTML/CSS/JS
puro e servido pelo [GitHub Pages](https://pages.github.com/) a partir da pasta
`docs/` da branch `main`, sob o domínio customizado `matheusalves.dev`.

*Leia em outras línguas: [English](README.md), [Português Brasileiro](README.pt-br.md)*

## Tecnologias

- [NextJS](https://nextjs.org/) como framework React, em modo de exportação estática
- [styled-components](https://styled-components.com/) para estilos e temas
- [Jest](https://jestjs.io/) para testes, com cobertura mínima de 100%
- [ESLint](https://eslint.org/) com o `eslint-config-next`

## Começando

```bash
yarn install
npm run dev
```

O site sobe em [http://localhost:3000](http://localhost:3000).

## Documentação

O resto está em [`specs/`](specs/README.md):

- [**Arquitetura**](specs/architecture.md) — como o `src/` é organizado e onde cada arquivo novo deve ficar
- [**Desenvolvimento**](specs/development.pt-br.md) ([English](specs/development.md)) — pré-requisitos, scripts, testes e lint
- [**Deploy**](specs/deploy.pt-br.md) ([English](specs/deploy.md)) — como o site chega ao GitHub Pages

## Licença

[MIT](LICENSE)

# mhsalves.github.io

My personal website and portfolio, live at **[matheusalves.dev](https://matheusalves.dev/)**.

A static site built with [NextJS](https://nextjs.org/) and
[styled-components](https://styled-components.com/), exported to plain
HTML/CSS/JS and served by [GitHub Pages](https://pages.github.com/) from the
`docs/` folder of the `main` branch, under the custom domain `matheusalves.dev`.

*Read in other languages: [English](README.md), [Português Brasileiro](README.pt-br.md)*

## Stack

- [NextJS](https://nextjs.org/) as the React framework, in static export mode
- [styled-components](https://styled-components.com/) for styling and theming
- [Jest](https://jestjs.io/) for tests, with 100% coverage thresholds
- [ESLint](https://eslint.org/) with `eslint-config-next`

## Quick start

```bash
yarn install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

## Documentation

Everything else lives in [`specs/`](specs/README.md):

- [**Architecture**](specs/architecture.md) — how `src/` is organised and where a new file belongs
- [**Development**](specs/development.md) ([pt-br](specs/development.pt-br.md)) — requirements, scripts, tests and linting
- [**Deploy**](specs/deploy.md) ([pt-br](specs/deploy.pt-br.md)) — how the site reaches GitHub Pages

## License

[MIT](LICENSE)

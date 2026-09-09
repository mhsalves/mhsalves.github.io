# mhsalves.github.io

My personal website and portfolio, live at **[matheusalves.dev](https://matheusalves.dev/)**.

It is a static site built with [NextJS](https://nextjs.org/) and [styled-components](https://styled-components.com/), exported to plain HTML/CSS/JS and served by [GitHub Pages](https://pages.github.com/) from the `docs/` folder of the `main` branch, under the custom domain `matheusalves.dev`.

*Read in other languages: [English](README.md), [Português Brasileiro](README.pt-br.md)*

## Stack

- [NextJS](https://nextjs.org/) as the React framework, used in static export mode.
- [styled-components](https://styled-components.com/) for styling and theming.
- [Jest](https://jestjs.io/) + [Enzyme](https://enzymejs.github.io/enzyme/) for tests, with 100% coverage thresholds.
- [ESLint](https://eslint.org/) with `eslint-config-next`, the framework's own preset, for linting.

## Requirements

- [Node.js](https://nodejs.org/) 20.x
- [Yarn](https://yarnpkg.com/) 4.18.0 — pinned by the `packageManager` field, and committed to `.yarn/releases`

You do not need to install that exact Yarn yourself: the release is versioned in the repository and `.yarnrc.yml` points at it, so any Yarn already on your machine hands off to it. If you have none, enable the one bundled with Node:

```bash
corepack enable
```

## Running locally

Clone the repository and install the dependencies:

```bash
git clone git@github.com:mhsalves/mhsalves.github.io.git
cd mhsalves.github.io
yarn install
```

> Prefer Yarn, since it matches the committed `yarn.lock`. If you install with npm instead, use `npm install --legacy-peer-deps`: the project runs React 17 while `enzyme-adapter-react-16` still declares a React 16 peer dependency, so a plain `npm install` stops with an `ERESOLVE` error.

Start the development server:

```bash
npm run dev
```

The site is then available at [http://localhost:3000](http://localhost:3000) with hot reload enabled.

To check the production output locally, build it and start the production server:

```bash
npm run build
npm start
```

## Available scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Starts the NextJS development server on port 3000. |
| `npm run build` | Builds the production bundle into `dist/.next`. |
| `npm start` | Serves the production build locally. |
| `npm run export` | Exports the build as a static site into `docs/`. |
| `npm run eslint` | Lints every `.js` and `.jsx` file under `src/`. |
| `npm test` | Runs the Jest suite with coverage. |
| `npm run release:gp` | Builds, exports and commits the static site for GitHub Pages. See [DEPLOY.md](DEPLOY.md). |
| `npm run release:netlify` | Builds and exports the site, without the GitHub Pages steps. |

## Project structure

```
src/
├── components/  Reusable UI (Header, Footer, Logo, LanguageToggle, MetaTags, Reveal, Section)
├── sections/    Page sections (Hero, About, Experience, Projects, Skills, Education, Contact)
├── data/        Content shared by more than one section (profile)
├── i18n/        Language context for the EN / PT toggle
├── styles/      Theme tokens, global CSS and font loading
├── pages/       NextJS pages (_app, _document, index)
├── public/      Static assets copied to the site root
└── test-utils/  Helpers imported only by specs (withTheme)

docs/            Exported static site published by GitHub Pages (generated)
dist/            NextJS build output (generated, git-ignored)
.jest/           Jest configuration and setup files
```

[`specs/architecture.md`](specs/architecture.md) documents these folders in
detail, including the rule for where a new file belongs.

## Tests

```bash
npm test
```

Coverage thresholds are set to 100% for branches, functions, lines and statements in `.jest/config.js`, so a drop in coverage fails the suite.

## Deploy

The site is published to GitHub Pages from the `docs/` folder of the `main` branch. The full process is documented in **[DEPLOY.md](DEPLOY.md)** ([Português Brasileiro](DEPLOY.pt-br.md)).

## License

[MIT](LICENSE)

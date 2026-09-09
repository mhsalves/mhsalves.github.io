# Development

Getting the project running, and what each script does.

*Read in other languages: [English](development.md), [Português Brasileiro](development.pt-br.md)*

## Requirements

- [Node.js](https://nodejs.org/) 20.x
- [Yarn](https://yarnpkg.com/) 4.18.0 — pinned by the `packageManager` field, and committed to `.yarn/releases`

You do not need to install that exact Yarn yourself: the release is versioned in
the repository and `.yarnrc.yml` points at it, so any Yarn already on your
machine hands off to it. If you have none, enable the one bundled with Node:

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

> Prefer Yarn, since it matches the committed `yarn.lock`. If you install with
> npm instead, use `npm install --legacy-peer-deps`: the project runs React 17
> while `enzyme-adapter-react-16` still declares a React 16 peer dependency, so a
> plain `npm install` stops with an `ERESOLVE` error.

Start the development server:

```bash
npm run dev
```

The site is then available at [http://localhost:3000](http://localhost:3000)
with hot reload enabled.

To check the production output locally, build it and start the production
server:

```bash
npm run build
npm start
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Starts the NextJS development server on port 3000. |
| `npm run build` | Builds the production bundle into `dist/.next`. |
| `npm start` | Serves the production build locally. |
| `npm run export` | Exports the build as a static site into `docs/`. |
| `npm run eslint` | Lints every `.js` and `.jsx` file under `src/`. |
| `npm test` | Runs the Jest suite with coverage. |
| `npm run release:gp` | Builds the site and opens the deploy pull request. See [deploy.md](deploy.md). |
| `npm run release:gp:setup` | Recreates `docs/.nojekyll` and `docs/CNAME`. |
| `npm run release:gp:publish` | Runs `scripts/deploy.sh` on its own. |
| `npm run release:netlify` | Builds and exports the site, without the GitHub Pages steps. |

## Tests

```bash
npm test
```

Coverage thresholds are set to 100% for branches, functions, lines and
statements in `.jest/config.js`, so a drop in coverage fails the suite.

Specs live next to the code they cover, in `__tests__/` folders. Where a new
file belongs is covered in [architecture.md](architecture.md).

## Linting

```bash
npm run eslint
```

The config is `eslint-config-next`, the framework's own preset. It reports
warnings for `import/no-anonymous-default-export` across the `data.js` and
`styles.js` files, which follow that pattern deliberately; warnings do not fail
the command.

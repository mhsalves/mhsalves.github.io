# `src/` architecture

How the code under `src/` is organised today, the problems with that shape, and
the simpler structure this project should move to.

This is a spec, not a description of the repository as it stands: the "Target"
section is not implemented yet. The "Today" section is accurate as written.

## Scope

The site is small on purpose — one route, two page sections, a theme. The
architecture should stay boring enough that any React developer can open the
folder and guess where things live. Anything that needs a paragraph of
explanation before it makes sense is too clever for a site this size.

## Today

```
src/
├── bosons/            Design-system primitives and app-wide concerns
│   ├── FontLoader/    Injects the web font
│   ├── globalCSS/     Reset + normalize + global rules
│   ├── MetaTags/      Basic.jsx (title/description), Share.jsx (Open Graph)
│   └── themes/        Design tokens, composed in themes/base/index.js
├── components/        Empty — only a .gitkeep
├── hoc/
│   └── withTheme/     Wraps a component in ThemeProvider
├── pages/             Next routes: _app.jsx, _document.jsx, index.jsx
├── public/            Images served from the site root
└── sections/          PresentationSection/, AboutSection/
```

### Conventions that already work

These are good and the target structure keeps them.

- **A unit is a folder with an `index.jsx`.** Importers write
  `sections/AboutSection`, never a path to an inner file. The folder is the
  public surface; everything else in it is private.
- **Co-location.** A section keeps its markup (`index.jsx`), its styled
  components (`styles.js`) and its copy (`data.js`) side by side. Changing a
  section means touching one folder.
- **`styles.js` exports one object.** Components read as `<Style.Container>`,
  `<Style.Title>`, which makes it obvious at a glance which elements are styled
  and which are plain.
- **Tests sit next to the code** in `__tests__/`, with `__mock__/` and
  `__snapshots__/` beside them.
- **Design tokens are plain objects** composed in `themes/base/index.js` and
  read through the styled-components theme:
  `${({ theme: { breakpoints } }) => breakpoints.md}`. No token is hardcoded in
  a section.

### What does not work

- **`bosons/` does not mean anything.** The name is borrowed from particle
  physics without the rest of the vocabulary, so it carries no information: you
  cannot guess from the name that it holds the theme, the global CSS, the font
  loader *and* the `<head>` tags. Those are four unrelated concerns sharing a
  folder because there was nowhere else to put them.
- **`components/` is empty.** It has been a `.gitkeep` since the project
  started. An empty folder is a promise the code never kept.
- **`hoc/withTheme` is only used by tests.** Nothing in the app calls it —
  `_app.jsx` wraps the tree in `ThemeProvider` directly. It lives in
  application code but is test infrastructure, and only
  `themes/base/__tests__/button.spec.jsx` imports it.
- **Imports climb too far.** That same spec reaches its helper with
  `../../../../hoc/withTheme`. There is no `jsconfig.json`, so every import is
  relative and every file move rewrites paths in unrelated files.
- **`sections/` and `components/` are not clearly different.** A section is a
  page-level component. Without a rule for which folder a new file belongs in,
  the split is a coin flip.

## Target

Same ideas, names that explain themselves:

```
src/
├── components/        Reusable UI, used by more than one section
│   └── MetaTags/      Basic.jsx, Share.jsx
├── sections/          Page-level blocks composed by a route
│   ├── PresentationSection/
│   └── AboutSection/
├── styles/            Everything about how the app looks, globally
│   ├── theme/         Design tokens (was bosons/themes)
│   ├── global/        Reset + normalize (was bosons/globalCSS)
│   └── FontLoader/    Web font loading (was bosons/FontLoader)
├── pages/             Next routes. Thin: compose sections, nothing else
├── public/            Static assets
└── test-utils/        Helpers for specs only (withTheme)
```

The rules that make it decidable:

| Question | Answer |
| --- | --- |
| Used by two or more sections? | `components/` |
| A block a route drops in whole? | `sections/` |
| Decides how the whole app looks? | `styles/` |
| Only ever imported by a `.spec.jsx`? | `test-utils/` |
| A route? | `pages/`, and it should stay thin |

### Mapping

| Today | Target | Why |
| --- | --- | --- |
| `bosons/themes/` | `styles/theme/` | It is the design-token source |
| `bosons/globalCSS/` | `styles/global/` | Global CSS is a styling concern |
| `bosons/FontLoader/` | `styles/FontLoader/` | Loading a font is styling |
| `bosons/MetaTags/` | `components/MetaTags/` | It renders `<head>` markup; it is a component |
| `hoc/withTheme/` | `test-utils/withTheme/` | Only specs import it |
| `components/.gitkeep` | *(deleted)* | The folder gets real contents |
| `sections/*` | unchanged | Already right |
| `pages/*` | unchanged | Already right |

`hoc/` disappears. One HOC used by one spec does not need a category of its own,
and if a second HOC ever shows up it can be a plain `components/` wrapper or a
hook.

### Absolute imports

Add a `jsconfig.json` at the repository root so `src` is the import base:

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

Next 12 reads this natively, no webpack config needed. Then the four-level climb
becomes:

```js
import withTheme from 'test-utils/withTheme';
import themes from 'styles/theme';
```

Moving a file stops rewriting imports in files that did not change.

## Migration plan

Each step is separately verifiable — run `yarn run test`, `yarn run eslint` and
`yarn run build` after each, and commit before starting the next. Nothing here
changes behaviour, so the snapshots must keep passing untouched at every step.
If a snapshot changes, something moved that should not have.

1. **Add `jsconfig.json`** with `baseUrl: src`. Nothing moves yet; confirm a
   single absolute import resolves in both Jest and the build before going on.
   Jest needs `modulePaths` or `moduleDirectories` pointing at `src` to agree
   with it — settle that here, while there is only one import to debug.
2. **`bosons/themes` → `styles/theme`.** The largest move and the only one with
   tests attached, so do it alone. `__tests__/`, `__mock__/` and
   `__snapshots__/` travel with it.
3. **`bosons/globalCSS` → `styles/global`** and **`bosons/FontLoader` →
   `styles/FontLoader`**. Only `_app.jsx` imports these.
4. **`bosons/MetaTags` → `components/MetaTags`**, and delete
   `components/.gitkeep`. Only `pages/index.jsx` imports these.
5. **`hoc/withTheme` → `test-utils/withTheme`**, then remove the empty `hoc/`
   and `bosons/` folders.
6. **Rewrite the remaining relative imports** to absolute ones, now that every
   file is at its final path.

Order matters: aliases first means later moves touch one import line each
instead of cascading through the tree.

## Notes

- The `.spec.jsx` files must keep passing with the coverage gate in
  `.jest/config.js` at 100% for branches, functions, lines and statements. A
  file move changes coverage paths, not coverage numbers.
- `pages/` stays thin. If a route grows logic beyond composing sections, that
  logic belongs in the section, not the route.
- This layout has no `utils/` or `lib/` folder because the project currently has
  no shared helpers. Add one when there is a second caller, not before.

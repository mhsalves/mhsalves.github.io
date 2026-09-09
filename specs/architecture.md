# `src/` architecture

How the code under `src/` is organised, the rules for deciding where a new file
goes, and why the previous layout was replaced.

This describes the repository as it stands.

## Scope

The site is small on purpose — one route, two page sections, a theme. The
architecture should stay boring enough that any React developer can open the
folder and guess where things live. Anything that needs a paragraph of
explanation before it makes sense is too clever for a site this size.

## Structure

```
src/
├── components/        Reusable UI
│   ├── Header/        Fixed nav bar
│   ├── Footer/
│   ├── Logo/          Monogram, also the favicon artwork
│   ├── LanguageToggle/ EN / PT switch, lives in the header
│   ├── MetaTags/      Basic.jsx (title/description), Share.jsx (Open Graph)
│   ├── Reveal/        Fade-up on scroll
│   └── Section/       Shared section shell: spacing, width, heading
├── sections/          Page-level blocks composed by a route
│   ├── HeroSection/
│   ├── AboutSection/
│   ├── ExperienceSection/
│   ├── ProjectsSection/
│   ├── SkillsSection/
│   ├── EducationSection/
│   └── ContactSection/
├── data/              Content shared by more than one section
│   └── profile.js     Name, role, location, contact links
├── i18n/              Language context, provider and useTranslation hook
├── styles/            Everything about how the app looks, globally
│   ├── themes/        Design tokens, composed in themes/base/index.js
│   ├── global/        Reset + normalize
│   └── FontLoader/    Web font loading
├── pages/             Next routes: _app.jsx, _document.jsx, index.jsx
├── public/            Images and favicon served from the site root
├── test-utils/        Helpers imported only by specs (withTheme)
└── jsconfig.json      Makes src the import base
```

### Where does a new file go?

| Question | Answer |
| --- | --- |
| Used by two or more sections? | `components/` |
| Content, not UI, used by two or more sections? | `data/` |
| Translatable copy for one section? | that section's `data.js`, as `{ en, pt }` |
| A block a route drops in whole? | `sections/` |
| Decides how the whole app looks? | `styles/` |
| Only ever imported by a `.spec.jsx`? | `test-utils/` |
| A route? | `pages/`, and it should stay thin |

If a route grows logic beyond composing sections, that logic belongs in the
section, not the route.

## Conventions

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
- **`themes` is plural** because the module exports a registry, used as
  `themes.base`.

### Imports

**Crossing a module boundary uses an absolute path. Staying inside one stays
relative.**

```js
import themes from 'styles/themes';        // another module
import Style from './styles';              // this module's own file
import breakpoints from '../breakpoints';  // the spec's own subject
```

The three remaining `../` imports are specs reaching the file they test, one
level up from `__tests__/`. That relationship is clearer relative than spelled
out in full, so it stays.

Absolute imports come from `src/jsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

The location matters. The npm scripts run `next build src`, so `src` is the
project directory Next reads its config from — a `jsconfig.json` at the
repository root is ignored and the build fails with
`Module not found: Can't resolve 'sections/PresentationSection'`.

Next 12 reads this natively, no webpack config needed. Jest does not read
`jsconfig.json` at all, so `.jest/config.js` mirrors it with
`moduleDirectories: ['node_modules', '<rootDir>/src']`. **Both have to agree**:
change one and you must change the other, or specs and the build will disagree
about what resolves.

## Languages

The page ships in English and Portuguese, English being what the HTML is
exported with. Because the site is a static export there is no locale routing:
`i18n/` holds a React context, and a reader's choice is applied on the client
and remembered in `localStorage`.

Each section keeps its own copy in its `data.js`, shaped as `{ en, pt }`, and
reads it with `useTranslation(data)`. A missing translation falls back to
English rather than rendering blank. Anything language-neutral — a photo
filename, a repository name, the social links — sits outside the two halves and
is imported directly.

## Why this replaced the old layout

The previous structure was:

```
src/
├── bosons/       FontLoader, globalCSS, MetaTags, themes
├── components/   Empty — only a .gitkeep
├── hoc/          withTheme
├── pages/
├── public/
└── sections/
```

- **`bosons/` did not mean anything.** The name was borrowed from particle
  physics without the rest of the vocabulary, so it carried no information: you
  could not guess it held the theme, the global CSS, the font loader *and* the
  `<head>` tags. Four unrelated concerns shared a folder because there was
  nowhere else to put them. They now sit in `styles/` and `components/`, where
  the name says what is inside.
- **`components/` was empty** — a `.gitkeep` and a promise the code never kept.
  It now holds `MetaTags`.
- **`hoc/withTheme` was only used by tests.** Nothing in the app called it;
  `_app.jsx` wraps the tree in `ThemeProvider` directly. Test infrastructure was
  living in application code, so it moved to `test-utils/`. `hoc/` disappeared
  with it: one HOC used by one spec does not need a category of its own.
- **Imports climbed too far.** A spec reached its helper with
  `../../../../hoc/withTheme`. Every file move rewrote paths in files that had
  not changed. `jsconfig.json` fixed that first, before anything moved.

## Notes

- The migration was done in five commits, one per move, each verified with
  `yarn run test`, `yarn run eslint` and `yarn run build`. The three snapshots
  passed untouched at every step — that was the check that only paths moved and
  no behaviour did.
- The coverage gate in `.jest/config.js` stays at 100% for branches, functions,
  lines and statements. A file move changes coverage paths, not coverage
  numbers.
- There is no `utils/` or `lib/` folder because the project has no shared
  helpers. Add one when there is a second caller, not before.

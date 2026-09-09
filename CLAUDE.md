# CLAUDE.md

Instructions for Claude Code working in this repository.

## Documentation language

**The English files are the source of truth. Read those, and cite those.**

Documentation lives in [`specs/`](specs/README.md). Bilingual docs come in
pairs:

| Source of truth | Translation |
| --- | --- |
| `README.md` | `README.pt-br.md` |
| `specs/development.md` | `specs/development.pt-br.md` |
| `specs/deploy.md` | `specs/deploy.pt-br.md` |

`specs/architecture.md` is English only.

The `*.pt-br.md` files exist so Brazilian readers have a version in their own
language. They are **translations, not sources**:

- Do not read a `*.pt-br.md` to answer a question or establish a fact. Open the
  English file instead, even when the conversation is in Portuguese.
- If the two ever disagree, the English file is correct and the translation is
  stale.
- When you change an English file, mirror the change into its `.pt-br.md` so the
  translation does not drift. A decision is recorded in the English file; the
  translation only follows it.
- Never record something *only* in a `.pt-br.md`.

Commit messages in this repository are written in Portuguese. That is unrelated
to the above — it is a writing convention, not a source of truth.

## Deploying

**Never push to `main`.** A deploy is a build plus a pull request titled
`deploy: version X.Y.Z`; merging that pull request is what publishes the site.
The process is in [`specs/deploy.md`](specs/deploy.md).

## Where code goes

`specs/architecture.md` has a table for deciding which folder a new file belongs
in. Follow it rather than inventing a location.

## Commands

```bash
yarn install     # Yarn 4, pinned via packageManager and .yarn/releases
npm run dev      # dev server on :3000
npm test         # Jest, 100% coverage thresholds — a drop fails the suite
npm run eslint   # eslint-config-next; warnings are expected, errors are not
npm run build    # production bundle into dist/.next
```

# Deploying to GitHub Pages

How [matheusalves.dev](https://matheusalves.dev/) gets published.

*Read in other languages: [English](deploy.md), [Português Brasileiro](deploy.pt-br.md)*

## How it works

This repository is a **user site** (`mhsalves.github.io`), so GitHub Pages serves it directly from this repository instead of a separate `gh-pages` branch. The publishing source is:

- **Branch:** `main`
- **Folder:** `/docs`

That means the exported static site is committed to the repository, inside `docs/`. Whatever sits in `docs/` on `main` is what visitors see. There is no build step running on GitHub's side — the build happens locally and the result reaches `main` through a pull request.

```
src/  ──(next build)──>  dist/.next  ──(next export)──>  docs/  ──(pull request)──>  main ──> Pages ──> matheusalves.dev
```

There is no `gh-pages` branch, and no `docs` branch either. An old `docs` branch
once held a build at the repository root; it was abandoned when the site moved
to `main` + `/docs`, and has been removed. It is archived at the tag
`archive/docs-branch` if it is ever needed again.

Two files in `docs/` exist only to make Pages behave:

- **`docs/CNAME`** — contains `matheusalves.dev`, which is what binds the custom domain to the site. Without it, Pages falls back to `mhsalves.github.io`.
- **`docs/.nojekyll`** — disables Jekyll processing. This is required: NextJS puts its assets in `_next/`, and Jekyll skips directories starting with an underscore, which would break every script and stylesheet on the site.

Both files are regenerated on every release, because the export step wipes `docs/` before writing to it.

## Releasing

**A deploy is a build plus a pull request. Nothing is pushed straight to
`main`.**

From an up-to-date `main` with a clean working tree:

```bash
npm version patch --no-git-tag-version   # or minor / major
npm run release:gp
```

That builds the site and opens a pull request titled **`deploy: version X.Y.Z`**
against `main`, where `X.Y.Z` is the `version` in `package.json`. **Merging that
pull request is what publishes the site** — GitHub Pages picks up the new
`docs/` on `main` within about a minute.

Doing it this way means every deploy has a reviewable diff and a version number,
and `main` only ever moves through a merge.

## What `release:gp` does

`release:gp` is a chain of four smaller scripts, defined in `package.json`:

| Step | Script | What happens |
| --- | --- | --- |
| 1 | `npm run build` | `next build src` compiles the production bundle into `dist/.next` (git-ignored). |
| 2 | `npm run export` | `next export -o docs/ src` renders the app to static HTML/CSS/JS in `docs/`, clearing the folder first. |
| 3 | `npm run release:gp:setup` | Recreates `docs/.nojekyll` and writes `matheusalves.dev` into `docs/CNAME`. |
| 4 | `npm run release:gp:publish` | Runs `scripts/deploy.sh`: creates `deploy/vX.Y.Z`, commits `docs/` as `deploy: version X.Y.Z`, pushes, and opens the pull request. |

Each step can be run on its own, which is useful when debugging a broken release.

`scripts/deploy.sh` refuses to run when anything outside `docs/` is uncommitted,
so a deploy branch only ever carries the built site. If `docs/` came out
identical to what is already committed, it stops and tells you there is nothing
to deploy. It uses the `gh` CLI to open the pull request and prints the command
and a compare link if `gh` is unavailable.

### Versioning

The version in `package.json` names the release, so bump it before deploying —
`npm version patch --no-git-tag-version` for a content change, `minor` for new
sections or features. Deploying twice without bumping reuses the same branch
name, which the script will reuse rather than duplicate.

## Verifying before you merge

Before merging the deploy pull request, check the export locally instead of trusting the diff:

```bash
npx serve docs
```

Then open [http://localhost:3000](http://localhost:3000) (or whichever port is printed) and confirm the page renders with its styles and images. Also worth a quick look:

```bash
cat docs/CNAME        # should be exactly: matheusalves.dev
ls -a docs/.nojekyll  # should exist
git show --stat       # review what the deploy commit touched
```

Once the pull request is merged, GitHub Pages usually publishes within a minute. The deployment status is visible in the repository's **Settings → Pages** section and under the **Deployments** tab.

## Configuring Pages from scratch

If the Pages configuration is ever lost or set up on a new repository:

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
3. Choose branch `main` and folder `/docs`, then save.
4. Under **Custom domain**, enter `matheusalves.dev` and save — this writes `docs/CNAME` for you.
5. Enable **Enforce HTTPS** once the certificate has been issued.

The domain's DNS must point at GitHub Pages: an `ALIAS`/`ANAME` record for the apex domain to `mhsalves.github.io`, or `A` records to GitHub's Pages IP addresses. See [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Troubleshooting

**The site loads without any styling.** `docs/.nojekyll` is missing, so Jekyll is dropping the `_next/` folder. Re-run `npm run release:gp:setup` and push.

**The custom domain stopped working.** `docs/CNAME` was lost in the export, or it holds more than one line. It must contain exactly `matheusalves.dev`. Note that `release:gp:setup` appends to the file, so if a stale `CNAME` ever survives an export the domain can end up duplicated — delete the file and re-run the step.

**Nothing changed after pushing.** Confirm the release commit actually contains files under `docs/` (`git show --stat`), and that Pages is still pointing at `main` / `/docs` in **Settings → Pages**.

**A `dist/` folder appears in the diff.** It should not — `dist/` is git-ignored. If it shows up, check `.gitignore` before committing.

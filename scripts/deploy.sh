#!/usr/bin/env bash
#
# Publishes the exported site through a pull request instead of a direct push
# to main. Run it after `next build` and `next export` have refreshed docs/ —
# `yarn release:gp` chains all of that together.
#
# It creates deploy/vX.Y.Z from the current commit, commits docs/ as
# "deploy: version X.Y.Z", pushes, and opens the pull request. Merging that
# pull request is what puts the new site live.

set -euo pipefail

VERSION="$(node -p "require('./package.json').version")"
BRANCH="deploy/v${VERSION}"
TITLE="deploy: version ${VERSION}"

# The deploy branch should carry the built site and nothing else, so stop if
# anything outside docs/ is uncommitted.
DIRTY="$(git status --porcelain -- . ':(exclude)docs' || true)"
if [ -n "$DIRTY" ]; then
  echo "Uncommitted changes outside docs/:"
  echo "$DIRTY"
  echo
  echo "Commit or set them aside first — a deploy should only carry docs/."
  exit 1
fi

if [ -z "$(git status --porcelain -- docs)" ]; then
  echo "docs/ is unchanged: the built site already matches what is committed."
  echo "Nothing to deploy."
  exit 0
fi

if git show-ref --verify --quiet "refs/heads/${BRANCH}"; then
  echo "Reusing existing branch ${BRANCH}"
  git checkout "$BRANCH"
else
  git checkout -b "$BRANCH"
fi

git add docs
git commit -m "$TITLE"
git push -u origin "$BRANCH"

echo
if command -v gh > /dev/null 2>&1 \
  && gh pr create --base main --head "$BRANCH" --title "$TITLE" \
       --body "Build exportado da versão ${VERSION}. Merge nesta PR publica o site no GitHub Pages."; then
  echo "Pull request opened. Merging it publishes the site."
else
  echo "Branch pushed. Open the pull request to finish the deploy:"
  echo "  gh pr create --base main --head ${BRANCH} --title \"${TITLE}\""
  echo "  https://github.com/mhsalves/mhsalves.github.io/compare/main...${BRANCH}?expand=1"
fi

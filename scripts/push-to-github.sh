#!/usr/bin/env bash
# Pro Lead Maker — push the redesign to GitHub
# Run from any bash (Git Bash / WSL):
#   bash scripts/push-to-github.sh

set -euo pipefail

REPO_DIR="${REPO_DIR:-$(pwd)}"
REPO_URL="https://github.com/Leadwork/proleadmaker-website.git"
BRANCH="main"
MSG="Major redesign: light theme, new copy, MDX blog system (12 posts), Calendly, repeated CTAs"

cd "$REPO_DIR"

if [ ! -d .git ]; then
  echo "▶ Initializing git repo..."
  git init
fi

if git remote get-url origin >/dev/null 2>&1; then
  CURRENT=$(git remote get-url origin)
  if [ "$CURRENT" != "$REPO_URL" ]; then
    git remote set-url origin "$REPO_URL"
    echo "▶ Updated remote to $REPO_URL"
  fi
else
  git remote add origin "$REPO_URL"
  echo "▶ Added remote $REPO_URL"
fi

git branch -M "$BRANCH"

echo "▶ Staging changes..."
git add .

if git diff --cached --quiet; then
  echo "ℹ Nothing to commit. Working tree clean."
else
  git commit -m "$MSG"
  echo "✓ Committed."
fi

echo "▶ Pushing to origin/$BRANCH..."
git push -u origin "$BRANCH"

echo "✅ Push complete. Vercel/Netlify should auto-deploy from main."

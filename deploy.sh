#!/bin/bash

#deprecated: old version of deploying before docker
set -e 

echo "Building..."

# Create empty orphan branch
git checkout --orphan temp-deploy-branch
git rm -rf --cached .

yarn build

# Only add .output
git add -f .output
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
git push production temp-deploy-branch:main --force

# Force switch back to main (ignore untracked files warning)
git checkout -f main

# Delete the temp branch
git branch -D temp-deploy-branch

echo "✅ Deployment complete!"
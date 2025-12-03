#!/bin/bash

# Create a temporary branch with build
git checkout -b temp-deploy-branch

# Build and force-add output
# yarn build
git add -f .output
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Push only this branch
git push production temp-deploy-branch:main --force

# Clean up
git checkout main
git branch -D temp-deploy-branch

echo "✅ Deployment complete!"
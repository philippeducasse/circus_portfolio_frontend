#!/bin/bash

echo "Building locally..."
yarn build

if ! yarn build; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✓ Build successful!"

# Force add .output (even though it's in .gitignore)
git add -f .output

git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

echo "Pushing to production..."
git push production main

# Undo the commit locally (keep your main branch clean)
git reset HEAD~1
git checkout -- .output

echo "✓ Deployment complete!"
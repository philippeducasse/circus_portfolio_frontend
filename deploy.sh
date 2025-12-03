#!/bin/bash

echo "Building locally..."
yarn build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✓ Build successful!"

# Create orphan branch (empty, no history)
git checkout --orphan production

# Remove all tracked files from staging
git rm -rf --cached .

# Only add .output
git add -f .output

git commit -m "Build: $(date '+%Y-%m-%d %H:%M:%S')"

echo "Pushing to VPS..."
git push production production:main --force

git checkout main

echo "✓ Deployment complete!"
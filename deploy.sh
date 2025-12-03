#!/bin/bash

echo "Building locally..."
yarn build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✓ Build successful!"

git checkout -B production

# Force add build files (ignored in main branch)
git add -f .output

git commit -m "Build: $(date '+%Y-%m-%d %H:%M:%S')"

echo "Pushing to VPS..."
git push production production:main --force

git checkout main

echo "✓ Deployment complete!"
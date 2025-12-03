#!/bin/bash
set -e

echo "Building locally..."
yarn build

# Create a temp folder and clone the repo
TMP_DIR=$(mktemp -d)
git clone . "$TMP_DIR"

cd "$TMP_DIR"

# Copy build artifacts into the clone
cp -r ../.output .

git add -f .output
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

git push production main

echo "✓ Deployment complete!"

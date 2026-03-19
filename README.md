- [ ] Live site [www.philippeducasse.com](https://philippeducasse.com)


# Deployment

uses docker, builds the image through the deploy.yaml
git push origin main:production

# Todo:

-crop abb5 to fit other hero images

# DEPRECATED

## run yarn deploy to trigger deployment

The project is deployed onto a bare git folder on ~/git

file: /home/ubuntu/git/hooks/post-receive

```
#!/bin/bash

TARGET_DIR="/var/www/philocircus"
GIT_DIR="$HOME/git"
BRANCH="main"
export NODE_ENV=production

echo "Deploying to $TARGET_DIR..."

# Checkout the latest code into the target dir
git --work-tree=$TARGET_DIR --git-dir=$GIT_DIR checkout -f main
cd $TARGET_DIR


pm2 restart philocircus || pm2 start node --name "philocircus" -- .output/server/index.mjs # from memory

```

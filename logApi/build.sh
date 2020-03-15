#!/bin/bash
set -ex

node -v
yarn install
yarn build
rm -rf node_modules
yarn install --production


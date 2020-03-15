#!/bin/bash
set -ex

# if type pm2 2>/dev/null; 
# then
#     echo 'pm2 exit'
# else
#     echo 'install pm2'
#     npm i -g pm2
# fi

# pm2 start ./dist/main.js
source ~/.bash_profile
# source ~/.bashrc

nohup pm2 delete all &
sleep 3s
nohup pm2 startOrReload ecosystem.json --env ${DEPLOY_ENV} &

# pm2 startOrReload ecosystem.json --env ${DEPLOY_ENV}

# export DEPLOY_ENV=${DEPLOY_ENV}
 
#  nohup node ./dist/main.js > /var/log/mms-design.log 2>&1 &   
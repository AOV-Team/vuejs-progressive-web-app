#!/bin/bash

echo "Node.js setup"
echo "Installing NodeJS 6.x..."
sudo apt-get remove --purge nodejs npm
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs > /dev/null 2>&1
echo "Finished installing NodeJS"

#
# BOWER
#

sudo npm install -g bower > /dev/null 2>&1

#
# INSTALL PROJECT DEPS
#

npm install > /dev/null 2>&1
bower install > /dev/null 2>&1

#
# INSTALL GLOBAL NODE PACKAGES
#

sudo npm install -g pm2 > /dev/null 2>&1
sudo npm install -g webpack@1.13.3 > /dev/null 2>&1

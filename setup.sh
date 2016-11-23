echo "Node.js setup"
echo "Installing NodeJS 6.x..."
sudo apt-get remove --purge nodejs npm
echo
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
echo
sudo apt-get install -y nodejs
echo "Finished installing NodeJS"

#
# BOWER
#

sudo npm install -g bower
echo

#
# INSTALL PROJECT DEPS
#

npm install
echo
bower install
echo

#
# INSTALL GLOBAL NODE PACKAGES
#

sudo npm install -g pm2
echo
sudo npm install -g webpack@1.13.3
echo

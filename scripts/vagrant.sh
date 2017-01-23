#!/bin/bash

# Open ports
sudo iptables -I INPUT -p tcp --dport 3000 -j ACCEPT > /dev/null
sudo iptables -I INPUT -p tcp --dport 9090 -j ACCEPT > /dev/null

printf "alias dev='npm run dev'\n" >> ~ubuntu/.bash_profile

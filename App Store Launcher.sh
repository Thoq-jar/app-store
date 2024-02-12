#!/bin/bash

clear

echo "----------------------------------------------------"
echo "Welcome to the App Store!"
echo "Developed by Thoq"
echo "Firefox Edition, Please Ensure firefox is installed!"
echo "Installer launching in 3 secs..."
echo "----------------------------------------------------"

sleep 3

echo -n "Installing the App Store!"
for i in {1..14}; do
    echo -n "."
    sleep 0.1
    done
echo "----------------------------------------------------"

git clone https://github.com/Thoq-jar/app-store.git
cd app-store
sleep 1

echo "----------------------------------------------------"
echo -n "Running the App Store!"
for i in {1..14}; do
    echo -n "."
    sleep 0.1
    done
echo "----------------------------------------------------"
cd app-store
chmod +x index.html
open -a "Firefox" index.html
open ./index.html
sleep 60

echo "----------------------------------------------------"
echo "Thanks for using my app store!"
echo "Developed by Thoq"
echo "----------------------------------------------------"

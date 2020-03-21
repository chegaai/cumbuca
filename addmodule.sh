#!/bin/bash
if [ -z $1 ]; then
    echo "Usage: ./addmodule module-name"
    exit 1
fi

MODULE_URL="git@github.com:chegaai/$1.git"

read -p "This will add and initialize $MODULE_URL as $1. Press ctrl+c to abort."

set -x
git submodule add $MODULE_URL $1
git submodule update --init -- $1
git add .gitmodules
git commit -m "Add $1 as submodule"
git push -u origin master
set +x
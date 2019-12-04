#!/bin/bash
if [ -z $1 ]; then
    echo "Usage: ./removemodule module-name"
    exit 1
fi

read -p "This will remove and deinit $1. Press ctrl+c to abort."

set -x
git submodule deinit $1
git rm $1
git commit -m "Removed $1 as submodule"
git push -u origin master
set +x

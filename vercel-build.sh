#!/bin/bash
bundle exec jekyll build
echo "==== Generated Site Structure ===="
find _site -type f -name "*.html" | sort
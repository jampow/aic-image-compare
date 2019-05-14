#!/usr/bin/env bash
rm -f images/*.jpg

node generate-config.js | curl -K -

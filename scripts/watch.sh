#!/bin/sh

node_modules/.bin/watchify src/index.js \
  --detect-globals false \
  --extension=.jsx \
  --external classnames \
  --external react \
  --outfile 'derequire > build/index.js' \
  --standalone HireFormsForm \
  --transform [ babelify --plugins object-assign ] \
  --verbose

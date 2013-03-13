#!/bin/sh

#
# coffeelint all the coffee files
#

CONFIG=.coffeelint-config.json
COFFEELINT=`which coffeelint`

if [ -x $COFFEELINT ]; then
  echo "Running coffeelint"
  exec $COFFEELINT -f $CONFIG `find app | grep "\.coffee$"`
else
  echo "Coffeelint not found"
  1
fi


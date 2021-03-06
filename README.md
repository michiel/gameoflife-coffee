[![Build Status](https://travis-ci.org/michiel/gameoflife-coffee.png)](https://travis-ci.org/michiel/gameoflife-coffee)

# Game of Life

Conway's Game of Life in CoffeeScript.

The game grid has an implementation that is separate from the rendering
implementations. It's tested using mocha/chai and PhantomJS with some npm
configuration to have the tests run on TravisCI.

The gh-pages branch has a semi-built copy of the project that lags behind the
master branch and can be found online
[here](http://michiel.github.com/gameoflife-coffee).

You can find a text demo running [here](http://michiel.github.com/gameoflife-coffee),
a canvas board running [here](http://michiel.github.com/gameoflife-coffee/index-canvas.html) and a 
RaphaelJS board [here](http://michiel.github.com/gameoflife-coffee/index-raphael.html)

To get up and running, use node/npm and install yeoman and grunt

Use yeoman / grunt to build

 * $ yeoman server
 * $ yeoman build
 * $ yeoman test

Wikipedia has a nice [entry on Conway's Game of Life](http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/michiel/gameoflife-coffee/trend.png)](https://bitdeli.com/free "Bitdeli Badge")


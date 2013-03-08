var liveGrid = [
  ['alive', 'alive', 'alive', 'alive', 'alive'],
  ['alive', 'alive', 'alive', 'alive', 'alive'],
  ['alive', 'alive', 'alive', 'alive', 'alive'],
  ['alive', 'alive', 'alive', 'alive', 'alive'],
  ['alive', 'alive', 'alive', 'alive', 'alive']
];

var oscillatorGrid = [
  ['alive', 'alive', 'alive', 'alive', 'alive'],
  ['alive', 'alive', 'alive', 'alive', 'alive'],
  ['alive', 'dead',  'dead',  'dead',  'alive'],
  ['alive', 'alive', 'alive', 'alive', 'alive'],
  ['alive', 'alive', 'alive', 'alive', 'alive']
];

var stillGrid = [
  ['alive', 'alive', 'alive', 'alive', 'alive'],
  ['alive', 'dead',  'dead',  'alive', 'alive'],
  ['alive', 'dead',  'dead', 'alive', 'alive'],
  ['alive', 'alive', 'alive', 'alive', 'alive'],
  ['alive', 'alive', 'alive', 'alive', 'alive']
];

describe('Cycles', function() {

  it('should have a dead cell after two cycles', function() {
    var grid = new GameOfLifeGrid({
      height : 5,
      width  : 5,
      grid   : liveGrid
    });
    var g = grid.grid;

    grid.cycle();
    assert.equal(g[4][4], 'dead');

    grid.cycle();
    assert.equal(g[4][4], 'dead');
  });

  it('should switch on and off with an oscillator pattern', function() {
    var grid = new GameOfLifeGrid({
        height : 5,
        width  : 5,
        grid   : oscillatorGrid
      });
    var g = grid.grid;

    grid.cycle();
    assert.equal(g[2][1], 'dead');

    grid.cycle();
    assert.equal(g[2][1], 'dead');

    grid.cycle();
    assert.equal(g[2][1], 'dead');
  });

  it('should remain static with a still pattern', function() {
    var grid = new GameOfLifeGrid({
      height : 5,
      width  : 5,
      grid   : stillGrid
    });
    var g = grid.grid;

    grid.cycle();
    assert.equal(g[2][1], 'dead');

    grid.cycle();
    assert.equal(g[2][1], 'dead');

    grid.cycle();
    assert.equal(g[2][1], 'dead');
  });

});


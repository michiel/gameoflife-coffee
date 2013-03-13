var firstGrid = [
  ['alive', 'alive', 'alive', 'alive', 'alive'],
  ['alive', 'alive', 'alive', 'alive', 'alive'],
  ['alive', 'alive', 'alive', 'alive', 'alive'],
  ['alive', 'alive', 'alive', 'alive', 'alive'],
  ['alive', 'alive', 'alive', 'alive', 'alive']
];

var secondGrid = [
  ['dead', 'dead', 'dead', 'dead', 'dead'],
  ['dead', 'dead', 'dead', 'dead', 'dead'],
  ['dead', 'dead', 'dead', 'dead', 'dead'],
  ['dead', 'dead', 'dead', 'dead', 'dead'],
  ['dead', 'dead', 'dead', 'dead', 'dead']
];

describe('Instantiations', function() {

  it('should not share variables between instantiations', function() {
    var grid1 = new GameOfLifeGrid({
      height : 5,
      width  : 5,
      grid   : firstGrid
    });

    var g1 = grid1.grid;

    var grid2 = new GameOfLifeGrid({
      height : 5,
      width  : 5,
      grid   : secondGrid
    });

    var g2 = grid2.grid;

    assert.notEqual(g1[4][4], g2[4][4]);
  });

});


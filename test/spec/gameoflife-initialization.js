var liveGrid = [
  ['alive', 'alive', 'alive', 'alive', 'alive'],
  ['alive', 'alive', 'alive', 'alive', 'alive'],
  ['alive', 'alive', 'alive', 'alive', 'alive'],
  ['alive', 'alive', 'alive', 'alive', 'alive'],
  ['alive', 'alive', 'alive', 'alive', 'alive']
];

describe('Game of Life Grid', function() {
  describe('Initialization', function() {

    it('should be an empty grid', function() {
      var grid = new GameOfLifeGrid();
      assert.equal(grid.grid[0][0], 'dead');
    });

    it('should still be an empty grid', function() {
      var grid = new GameOfLifeGrid();
      var g = grid.grid;
      assert.equal(g[g.length - 1][g.length - 1], 'dead');
    });

    it('should accept height and width in the constructor', function() {
      var grid = new GameOfLifeGrid({
        height : 5,
        width  : 5
      });
      var g = grid.grid;
      assert.equal(g.length, 5);
      assert.equal(g[0].length, 5);
    });

    it('should accept a grid[][] in the constructor', function() {
      var grid = new GameOfLifeGrid({
        height : 5,
        width  : 5,
        grid   : liveGrid
      });
      var g = grid.grid;
      assert.equal(g[4][4], 'alive');
    });

  });
});


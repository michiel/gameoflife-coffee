(function() {
  var GameOfLifeBoard;

  GameOfLifeBoard = (function() {

    function GameOfLifeBoard(args) {
      if (args == null) {
        args = {};
      }
      this.grid = new GameOfLifeGrid(args);
      this.$node = args.node;
      this.init(args);
    }

    GameOfLifeBoard.prototype.init = function(args) {
      if (args == null) {
        args = {};
      }
    };

    GameOfLifeBoard.prototype.cycle = function() {
      return this.grid.cycle();
    };

    GameOfLifeBoard.prototype.randomize = function() {
      return this.grid.randomize();
    };

    return GameOfLifeBoard;

  })();

  window.GameOfLifeBoard = GameOfLifeBoard;

}).call(this);

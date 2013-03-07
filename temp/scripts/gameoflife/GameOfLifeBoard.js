(function() {
  var GameOfLifeBoard;

  GameOfLifeBoard = (function() {

    function GameOfLifeBoard(args) {
      if (args == null) {
        args = {};
      }
      this.height = args.height || 40;
      this.width = args.width || 40;
      this.grid = new GameOfLifeGrid({
        height: this.height,
        width: this.width
      });
    }

    GameOfLifeBoard.prototype.cycle = function() {
      return this.grid.cycle();
    };

    GameOfLifeBoard.prototype._boardBuffer = "";

    GameOfLifeBoard.prototype._print = function(str) {
      return this._boardBuffer += str;
    };

    GameOfLifeBoard.prototype.printBoard = function() {
      var board, height, width, _i, _j, _ref, _ref1, _results, _results1,
        _this = this;
      width = (function() {
        _results = [];
        for (var _i = 0, _ref = this.width - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this);
      height = (function() {
        _results1 = [];
        for (var _j = 0, _ref1 = this.height - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; 0 <= _ref1 ? _j++ : _j--){ _results1.push(_j); }
        return _results1;
      }).apply(this);
      board = this.grid.grid;
      width.forEach(function() {
        return _this._print("-");
      });
      this._print("\n");
      height.forEach(function(val, i) {
        _this._print("|");
        board[i].forEach(function(val, j) {
          if (val === "alive") {
            return _this._print("X");
          } else {
            return _this._print(".");
          }
        });
        return _this._print("|\n");
      });
      width.forEach(function() {
        return _this._print("-");
      });
      return this._print("\n");
    };

    return GameOfLifeBoard;

  })();

  window.GameOfLifeBoard = GameOfLifeBoard;

}).call(this);

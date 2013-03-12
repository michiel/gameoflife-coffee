(function() {
  var GameOfLifeText,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  GameOfLifeText = (function(_super) {

    __extends(GameOfLifeText, _super);

    function GameOfLifeText() {
      return GameOfLifeText.__super__.constructor.apply(this, arguments);
    }

    GameOfLifeText.prototype._boardBuffer = "";

    GameOfLifeText.prototype._print = function(str) {
      return this._boardBuffer += str;
    };

    GameOfLifeText.prototype.printBoard = function() {
      var board, height, width, _i, _j, _ref, _ref1, _results, _results1,
        _this = this;
      width = (function() {
        _results = [];
        for (var _i = 0, _ref = this.grid.width + 1; 0 <= _ref ? _i <= _ref : _i >= _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this);
      height = (function() {
        _results1 = [];
        for (var _j = 0, _ref1 = this.grid.height - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; 0 <= _ref1 ? _j++ : _j--){ _results1.push(_j); }
        return _results1;
      }).apply(this);
      board = this.grid.grid;
      this._boardBuffer = "";
      width.forEach(function() {
        return _this._print("-");
      });
      this._print("\n");
      board.forEach(function(val, i) {
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

    return GameOfLifeText;

  })(GameOfLifeBoard);

  window.GameOfLifeText = GameOfLifeText;

}).call(this);

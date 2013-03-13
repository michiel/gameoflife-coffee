(function() {
  var GameOfLifeCanvas,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  GameOfLifeCanvas = (function(_super) {
    var ctxt;

    __extends(GameOfLifeCanvas, _super);

    function GameOfLifeCanvas() {
      return GameOfLifeCanvas.__super__.constructor.apply(this, arguments);
    }

    GameOfLifeCanvas.prototype.cellSize = 3;

    GameOfLifeCanvas.prototype.colors = {
      dead: '#000',
      alive: '#6f6'
    };

    ctxt = null;

    GameOfLifeCanvas.prototype.init = function(args) {
      if (args == null) {
        args = {};
      }
      this.grid = new GameOfLifeGrid({
        height: Math.floor(this.$node.height() / this.cellSize),
        width: Math.floor(this.$node.width() / this.cellSize)
      });
      return ctxt = this.$node[0].getContext('2d');
    };

    GameOfLifeCanvas.prototype.render = function() {
      var _this = this;
      return this.grid.grid.forEach(function(row, x) {
        return row.forEach(function(val, y) {
          return _this.cell(x * _this.cellSize, y * _this.cellSize, 3, _this.colors[val]);
        });
      });
    };

    GameOfLifeCanvas.prototype.cell = function(x, y, size, color) {
      ctxt.fillStyle = color;
      return ctxt.fillRect(x, y, x + size, y + size);
    };

    return GameOfLifeCanvas;

  })(GameOfLifeBoard);

  window.GameOfLifeCanvas = GameOfLifeCanvas;

}).call(this);

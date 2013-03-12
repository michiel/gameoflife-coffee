(function() {
  var GameOfLifeRaphael,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  GameOfLifeRaphael = (function(_super) {

    __extends(GameOfLifeRaphael, _super);

    function GameOfLifeRaphael() {
      return GameOfLifeRaphael.__super__.constructor.apply(this, arguments);
    }

    GameOfLifeRaphael.prototype.cells = [];

    GameOfLifeRaphael.prototype.colors = {
      'dead': '#333',
      'alive': '#6f6'
    };

    GameOfLifeRaphael.prototype.init = function(args) {
      var _this = this;
      if (args == null) {
        args = {};
      }
      this.paper = Raphael("gameoflife", 200, 200);
      return this.cells = this.grid.grid.map(function(row, x) {
        return row.map(function(val, y) {
          return _this.paper.circle(x * 5, y * 5, 2);
        });
      });
    };

    GameOfLifeRaphael.prototype.printBoard = function() {
      var _this = this;
      return this.grid.grid.forEach(function(row, x) {
        return row.forEach(function(val, y) {
          return _this.cells[x][y].animate({
            'fill': _this.colors[val],
            'stroke': "#000"
          }, 300);
        });
      });
    };

    return GameOfLifeRaphael;

  })(GameOfLifeBoard);

  window.GameOfLifeRaphael = GameOfLifeRaphael;

}).call(this);

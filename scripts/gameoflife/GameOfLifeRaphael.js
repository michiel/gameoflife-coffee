(function() {
  var GameOfLifeRaphael,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  GameOfLifeRaphael = (function(_super) {
    var cells, colors, paper;

    __extends(GameOfLifeRaphael, _super);

    function GameOfLifeRaphael() {
      return GameOfLifeRaphael.__super__.constructor.apply(this, arguments);
    }

    GameOfLifeRaphael.prototype.size = 12;

    GameOfLifeRaphael.prototype.radius = 6;

    paper = null;

    cells = [];

    colors = {
      'dead': '#333',
      'alive': '#6f6'
    };

    GameOfLifeRaphael.prototype.init = function(args) {
      var _this = this;
      if (args == null) {
        args = {};
      }
      paper = Raphael(this.$node[0], this.height + this.radius, this.width + this.radius);
      return cells = this.grid.grid.map(function(row, x) {
        return row.map(function(val, y) {
          var circle;
          circle = paper.circle(x * _this.size + _this.radius, y * _this.size + _this.radius, _this.radius);
          return circle.attr('stroke', '#000');
        });
      });
    };

    GameOfLifeRaphael.prototype.render = function() {
      var _this = this;
      return this.grid.grid.forEach(function(row, x) {
        return row.forEach(function(val, y) {
          return cells[x][y].animate({
            'fill': colors[val]
          }, 200);
        });
      });
    };

    return GameOfLifeRaphael;

  })(GameOfLifeBoard);

  window.GameOfLifeRaphael = GameOfLifeRaphael;

}).call(this);

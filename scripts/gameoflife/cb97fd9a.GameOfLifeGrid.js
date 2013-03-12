(function() {
  var GameOfLifeGrid;

  GameOfLifeGrid = (function() {

    GameOfLifeGrid.prototype.grid = [];

    GameOfLifeGrid.prototype.lastGrid = [];

    function GameOfLifeGrid(args) {
      if (args == null) {
        args = {};
      }
      this.width = args.width || 40;
      this.height = args.height || 40;
      if (args.grid != null) {
        this.grid = this.cloneGrid(args.grid);
      } else {
        this.grid = this.initGrid();
      }
    }

    GameOfLifeGrid.prototype.initGrid = function() {
      var _i, _ref, _results,
        _this = this;
      return (function() {
        _results = [];
        for (var _i = 1, _ref = this.height; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this).map(function() {
        var _i, _ref, _results;
        return (function() {
          _results = [];
          for (var _i = 1, _ref = _this.width; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this).map(function() {
          return 'dead';
        });
      });
    };

    GameOfLifeGrid.prototype.cloneGrid = function(grid) {
      return grid.map(function(col) {
        return col.map(function(val) {
          return val;
        });
      });
    };

    GameOfLifeGrid.prototype._cellStatus = function(x, y) {
      if (x === -1) {
        x = this.height - 1;
      } else if (x === this.height) {
        x = 0;
      }
      if (y === -1) {
        y = this.width - 1;
      } else if (y === this.width) {
        y = 0;
      }
      return this.lastGrid[x][y];
    };

    GameOfLifeGrid.prototype._neighbours = function(x, y) {
      var count, range,
        _this = this;
      count = {
        dead: 0,
        alive: 0
      };
      range = [-1, 0, 1];
      range.forEach(function(i) {
        return range.forEach(function(j) {
          if (!(i === 0 && j === i)) {
            switch (_this._cellStatus(x + i, y + j)) {
              case 'alive':
                return count.alive++;
              case 'dead':
                return count.dead++;
            }
          }
        });
      });
      return count;
    };

    GameOfLifeGrid.prototype._cycle = function() {
      var _this = this;
      return (this.lastGrid = this.cloneGrid(this.grid)).forEach(function(column, x) {
        return column.forEach(function(row, y) {
          var locals;
          locals = _this._neighbours(x, y);
          switch (_this.lastGrid[x][y]) {
            case 'alive':
              if (locals.alive < 2 || locals.alive > 3) {
                return _this.grid[x][y] = 'dead';
              }
              break;
            case 'dead':
              if (locals.alive === 3) {
                return _this.grid[x][y] = 'alive';
              }
          }
        });
      });
    };

    GameOfLifeGrid.prototype.randomize = function() {
      return this.grid = this.grid.map(function(row) {
        return row.map(function() {
          if (Math.floor(Math.random() * 10) % 3 === 0) {
            return 'alive';
          } else {
            return 'dead';
          }
        });
      });
    };

    GameOfLifeGrid.prototype.cycle = function() {
      return this._cycle();
    };

    return GameOfLifeGrid;

  })();

  window.GameOfLifeGrid = GameOfLifeGrid;

}).call(this);

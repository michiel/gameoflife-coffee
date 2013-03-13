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

    GameOfLifeGrid.prototype._neighbours = function(x, y) {
      var cellStatus, count, grid, height, width,
        _this = this;
      height = this.height;
      width = this.width;
      grid = this.lastGrid;
      cellStatus = function(x, y) {
        if (x === -1) {
          x = height - 1;
        } else if (x === height) {
          x = 0;
        }
        if (y === -1) {
          y = width - 1;
        } else if (y === width) {
          y = 0;
        }
        return grid[x][y];
      };
      count = 0;
      for (var i=-1;i<2;i++) {
      for (var j=-1;j<2;j++) {
        if (!(i == 0 && j == 0)) {
          if (cellStatus(x+i, y+j) === 'alive') {
            count++;
          }
        }
      }
    };

      return count;
    };

    GameOfLifeGrid.prototype._cycle = function() {
      var _this = this;
      return (this.lastGrid = this.cloneGrid(this.grid)).forEach(function(column, x) {
        return column.forEach(function(row, y) {
          var alive;
          alive = _this._neighbours(x, y);
          if (_this.lastGrid[x][y] === 'alive') {
            if (alive < 2 || alive > 3) {
              return _this.grid[x][y] = 'dead';
            }
          } else {
            if (alive === 3) {
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

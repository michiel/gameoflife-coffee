(function() {
  var GameOfLifeGrid;

  GameOfLifeGrid = (function() {

    GameOfLifeGrid.prototype.grid = [];

    GameOfLifeGrid.prototype.oldGrid = [];

    function GameOfLifeGrid(args) {
      if (args == null) {
        args = {};
      }
      this.height = args.height || 40;
      this.width = args.width || 40;
      this.grid = this.initGrid();
    }

    GameOfLifeGrid.prototype.initGrid = function() {
      var _i, _ref, _results,
        _this = this;
      return (function() {
        _results = [];
        for (var _i = 1, _ref = this.width; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this).map(function() {
        var _i, _ref, _results;
        return (function() {
          _results = [];
          for (var _i = 1, _ref = _this.height; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--){ _results.push(_i); }
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
      if (this.oldGrid[x] && this.oldGrid[x][y]) {
        return this.oldGrid[x][y];
      } else {
        return 'dead';
      }
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
          if (!(i !== 0 && j === i)) {
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
      this.oldGrid = [];
      this.grid.forEach(function(column, x) {
        _this.oldGrid.push([]);
        return column.forEach(function(row, y) {
          return _this.oldGrid[x].push(_this.grid[x][y]);
        });
      });
      return this.oldGrid.forEach(function(column, x) {
        return column.forEach(function(row, y) {
          var locals;
          locals = _this._neighbours(x, y);
          switch (_this.oldGrid[x][y]) {
            case 'alive':
              if (locals.alive < 2 || locals.alive > 3) {
                return _this.grid[x][y] = "dead";
              }
              break;
            case 'dead':
              if (locals.alive === 3) {
                return _this.grid[x][y] = "alive";
              }
          }
        });
      });
    };

    GameOfLifeGrid.prototype.randomize = function() {
      var _this = this;
      return this.grid.forEach(function(row, x) {
        return row.forEach(function(column, y) {
          if (Math.floor(Math.random() * 10) % 3 === 0) {
            return _this.grid[x][y] = 'alive';
          } else {
            return _this.grid[x][y] = 'dead';
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

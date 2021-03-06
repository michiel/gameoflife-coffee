class GameOfLifeGrid

  grid     : []
  lastGrid : []

  constructor : (args = {})->
    @width  = args.width or 40
    @height = args.height or 40
    if args.grid?
      @grid = @cloneGrid(args.grid)
    else
      @grid = @initGrid()

  initGrid : ->
    [1..@height].map =>
      [1..@width].map =>
        'dead'

  cloneGrid : (grid)->
    grid.map (col)->
      col.map (val) ->
        val

  cellStatus : (x, y)->
    if x is -1
      x = @height - 1
    else if x is @height
      x = 0

    if y is -1
      y = @width - 1
    else if y is @width
      y = 0

    @lastGrid[x][y]

  _neighbours : (x, y)->

    living = 0

    for i in [-1..1]
      for j in [-1..1]
        if not (i is 0 and j is 0)
          if @cellStatus(x+i, y+j) is 'alive'
            living++

    living

  _cycle : ->
    (@lastGrid = @cloneGrid @grid).forEach (column, x)=>
      column.forEach (row, y)=>
        alive = @_neighbours x, y
        if @lastGrid[x][y] is 'alive'
          if alive < 2 or alive > 3
            @grid[x][y] = 'dead'
        else
          if alive is 3
            @grid[x][y] = 'alive'

  randomize : ->
    @grid = @grid.map (row)->
      row.map ->
        if Math.floor((Math.random() * 10)) % 3 is 0
          'alive'
        else
          'dead'

  cycle : ->
    @_cycle()


(exports ? this).GameOfLifeGrid = GameOfLifeGrid

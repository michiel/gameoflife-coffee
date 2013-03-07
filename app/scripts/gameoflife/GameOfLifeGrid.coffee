class GameOfLifeGrid

    grid    : []
    oldGrid : []

    constructor : (args = {})->
        @height = args.height or 40
        @width  = args.width or 40
        @grid = @initGrid()

    initGrid : ()->
        [1..@width].map ()=>
            [1..@height].map =>
                'dead'

    cloneGrid : (grid)->
        grid.map (col)->
            col.map (val) ->
                val

    _cellStatus : (x, y)->
        if @oldGrid[x] and @oldGrid[x][y]
            return @oldGrid[x][y]
        else
            return 'dead'

    _neighbours : (x, y)->
        count =
            dead  : 0
            alive : 0

        range = [-1..1]

        range.forEach (i)=>
            range.forEach (j)=>
                if not (i isnt 0 and j is i)
                    switch @_cellStatus(x+i, y+j)
                        when 'alive' then count.alive++
                        when 'dead' then count.dead++
        count

    _cycle : ()->
        @oldGrid = @cloneGrid @grid

        @oldGrid.forEach (column, x)=>
            column.forEach (row, y)=>
                locals = @_neighbours x, y
                switch @oldGrid[x][y]
                    when 'alive'
                        if locals.alive < 2 or locals.alive > 3
                            @grid[x][y] = "dead"
                    when 'dead'
                        if locals.alive is 3
                            @grid[x][y] = "alive"

    randomize : ()->
        @grid.forEach (row, x)=>
            row.forEach (column, y)=>
                if Math.floor((Math.random() * 10)) % 3 is 0
                    @grid[x][y] = 'alive'
                else
                    @grid[x][y] = 'dead'

    cycle : ()->
        @_cycle()


window.GameOfLifeGrid = GameOfLifeGrid

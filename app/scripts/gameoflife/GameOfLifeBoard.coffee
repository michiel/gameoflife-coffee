class GameOfLifeBoard

    constructor : (args = {})->
        @height = args.height or 40
        @width  = args.width or 40
        @grid = new GameOfLifeGrid
            height : @height
            width  : @width
            
    cycle : ()->
        @grid.cycle()

    _boardBuffer : ""

    _print : (str)->
        @_boardBuffer += str

    printBoard : ()->
        width  = [0..@width-1]
        height = [0..@height-1]
        board  = @grid.grid

        width.forEach ()=>
            @_print "-"

        @_print "\n"

        height.forEach (val, i)=>
            @_print "|"
            board[i].forEach (val, j)=>
                if val is "alive"
                    @_print "X"
                else
                    @_print "."
            @_print "|\n"

        width.forEach ()=>
            @_print "-"

        @_print "\n"


window.GameOfLifeBoard = GameOfLifeBoard

class GameOfLifeText extends GameOfLifeBoard

  _boardBuffer : ""

  _print : (str)->
    @_boardBuffer += str

  render : ->
    width  = [0..@grid.width+1]
    height = [0..@grid.height-1]
    board  = @grid.grid

    @_boardBuffer = ""

    width.forEach =>
      @_print "-"

    @_print "\n"

    board.forEach (row)=>
      @_print "|"
      row.forEach (val)=>
        if val is "alive"
          @_print "X"
        else
          @_print "."
      @_print "|\n"

    width.forEach =>
      @_print "-"

    @_print "\n"


(exports ? this).GameOfLifeText = GameOfLifeText

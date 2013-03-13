class GameOfLifeCanvas extends GameOfLifeBoard

  cellSize : 3
  ctxt     : null

  colors :
    dead  : '#000'
    alive : '#6f6'

  init : (args = {})->
    @grid  = new GameOfLifeGrid
      height : Math.floor @$node.height() / @cellSize
      width  : Math.floor @$node.width() / @cellSize

    @ctxt = @$node[0].getContext '2d'

  render : ()->

    @grid.grid.forEach (row, x)=>
      row.forEach (val, y)=>
        @cell x * @cellSize , y * @cellSize, 3, @colors[val]

  cell : (x, y, size, color)->
    @ctxt.fillStyle = color
    @ctxt.fillRect(x, y, x+size, y+size)


window.GameOfLifeCanvas = GameOfLifeCanvas

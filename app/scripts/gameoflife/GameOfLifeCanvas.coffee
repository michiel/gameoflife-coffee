class GameOfLifeCanvas extends GameOfLifeBoard

  cellSize : 3

  colors :
    dead  : '#000'
    alive : '#6f6'

  ctxt   = null

  init : (args = {})->
    @grid  = new GameOfLifeGrid
      height : Math.floor @$node.height() / @cellSize
      width  : Math.floor @$node.width() / @cellSize

    ctxt = @$node[0].getContext '2d'

  render : ->
    @grid.grid.forEach (row, x)=>
      row.forEach (val, y)=>
        @cell x * @cellSize , y * @cellSize, @cellSize, @colors[val]

  cell : (x, y, size, color)->
    ctxt.fillStyle = color
    ctxt.fillRect(x, y, x+size, y+size)


window.GameOfLifeCanvas = GameOfLifeCanvas

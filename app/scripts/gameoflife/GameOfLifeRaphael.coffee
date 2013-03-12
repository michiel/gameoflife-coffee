class GameOfLifeRaphael extends GameOfLifeBoard

  cells : []

  colors :
    'dead'  : '#333'
    'alive' : '#6f6'
  
  init : (args={})->
    @paper = Raphael "gameoflife", 200, 200

    @cells = @grid.grid.map (row, x)=>
      row.map (val, y)=>
        @paper.circle x * 5, y * 5, 2

  printBoard : ()->
    @grid.grid.forEach (row, x)=>
      row.forEach (val, y)=>
        @cells[x][y].animate
          'fill' : @colors[val]
          'stroke' : "#000"
        , 300


window.GameOfLifeRaphael = GameOfLifeRaphael

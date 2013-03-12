class GameOfLifeRaphael extends GameOfLifeBoard

  cells  : []
  size   : 12
  radius : 5

  colors :
    'dead'  : '#333'
    'alive' : '#6f6'
  
  init : (args={})->
    @paper = Raphael @$node[0], @height + @radius, @width + @radius

    @cells = @grid.grid.map (row, x)=>
      row.map (val, y)=>
        @paper.circle x * @size + @radius, y * @size + @radius , @radius

  printBoard : ()->
    @grid.grid.forEach (row, x)=>
      row.forEach (val, y)=>
        @cells[x][y].attr
          'fill' : @colors[val]
          'stroke' : "#000"


window.GameOfLifeRaphael = GameOfLifeRaphael

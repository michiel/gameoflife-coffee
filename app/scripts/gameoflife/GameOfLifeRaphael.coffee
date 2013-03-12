class GameOfLifeRaphael extends GameOfLifeBoard

  cells  : []
  size   : 12
  radius : 6

  colors :
    'dead'  : '#333'
    'alive' : '#6f6'
  
  init : (args={})->
    @paper = Raphael @$node[0], @height + @radius, @width + @radius

    @cells = @grid.grid.map (row, x)=>
      row.map (val, y)=>
        circle = @paper.circle x * @size + @radius,
          y * @size + @radius,
          @radius
        circle.attr 'stroke', '#000'

  printBoard : ()->
    @grid.grid.forEach (row, x)=>
      row.forEach (val, y)=>
        @cells[x][y].animate
          'fill' : @colors[val]
        , 200


window.GameOfLifeRaphael = GameOfLifeRaphael

$ ->

  board = new GameOfLifeRaphael
    height : 50
    width  : 25
    node   : $ "#gameoflife"

  board.randomize()

  run = ->
    board.render()
    board.cycle()
    setTimeout run, 500

  run()





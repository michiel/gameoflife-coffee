
$ ()->

  board = new GameOfLifeRaphael
    height : 50
    width  : 25
    node   : $ "#gameoflife"

  window.board = board

  board.randomize()

  run = ()->
    board.printBoard()
    board.cycle()
    setTimeout run, 500

  run()





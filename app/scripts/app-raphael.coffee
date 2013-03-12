
$ ()->

  board = new GameOfLifeRaphael
    height : 50
    width  : 50
    node   : $ "#gameoflife"

  window.board = board

  board.randomize()

  run = ()->
    board.printBoard()
    board.cycle()
    setTimeout run, 300

  run()





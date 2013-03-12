$ ()->

  board = new GameOfLifeCanvas
    height : 35
    width  : 85
    node   : $ "#gameoflife"

  window.board = board

  board.randomize()

  run = ()->
    board.printBoard()
    board.cycle()
    setTimeout run, 200

  run()





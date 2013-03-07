$ ()->

  window.board = new GameOfLifeBoard
    height : 10

  board.grid.randomize()

  run = ()->
    board.printBoard()
    board.cycle()

    $("#gameoflife").html "<pre>#{board._boardBuffer}</pre>"

  setInterval run, 1000



$ ()->

  board = new GameOfLifeText
    height : 35
    width  : 85

  board.randomize()

  run = ()->
    board.printBoard()
    board.cycle()

    $("#gameoflife").html "<pre>#{board._boardBuffer}</pre>"
    setTimeout run, 200

  run()


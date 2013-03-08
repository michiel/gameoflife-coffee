$ ()->

    board = new GameOfLifeBoard
        height : 15
        width  : 15

    board.randomize()

    run = ()->
        board.printBoard()
        board.cycle()

        $("#gameoflife").html "<pre>#{board._boardBuffer}</pre>"

    setInterval run, 100



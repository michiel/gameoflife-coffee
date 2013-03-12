(function() {

  $(function() {
    var board, run;
    board = new GameOfLifeText({
      height: 35,
      width: 85
    });
    board.randomize();
    run = function() {
      board.printBoard();
      board.cycle();
      return $("#gameoflife").html("<pre>" + board._boardBuffer + "</pre>");
    };
    return setInterval(run, 200);
  });

}).call(this);

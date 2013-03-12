(function() {

  $(function() {
    var board, run;
    board = new GameOfLifeCanvas({
      height: 35,
      width: 85,
      node: $("#gameoflife")
    });
    window.board = board;
    board.randomize();
    run = function() {
      board.printBoard();
      board.cycle();
      return setTimeout(run, 200);
    };
    return run();
  });

}).call(this);

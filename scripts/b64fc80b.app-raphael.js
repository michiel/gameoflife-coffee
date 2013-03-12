(function() {

  $(function() {
    var board, run;
    board = new GameOfLifeRaphael({
      height: 50,
      width: 50,
      node: $("#gameoflife")
    });
    window.board = board;
    board.randomize();
    run = function() {
      board.printBoard();
      board.cycle();
      return setTimeout(run, 300);
    };
    return run();
  });

}).call(this);

(function() {

  $(function() {
    var board, run;
    board = new GameOfLifeRaphael({
      height: 50,
      width: 25,
      node: $("#gameoflife")
    });
    board.randomize();
    run = function() {
      board.render();
      board.cycle();
      return setTimeout(run, 500);
    };
    return run();
  });

}).call(this);

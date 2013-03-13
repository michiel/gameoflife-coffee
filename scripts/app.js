(function() {

  $(function() {
    var board, run;
    board = new GameOfLifeText({
      height: 35,
      width: 85
    });
    board.randomize();
    run = function() {
      board.render();
      board.cycle();
      $("#gameoflife").html("<pre>" + board._boardBuffer + "</pre>");
      return setTimeout(run, 200);
    };
    return run();
  });

}).call(this);

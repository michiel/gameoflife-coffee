(function() {

  window.board = new GameOfLifeBoard();

  board.grid.randomize();

  board.cycle();

  board.printBoard();

  console.log(board._boardBuffer);

}).call(this);

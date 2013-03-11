class GameOfLifeBoard

  constructor : (args = {})->
    @grid = new GameOfLifeGrid args
      
  cycle : ()->
    @grid.cycle()

  randomize : ()->
    @grid.randomize()


window.GameOfLifeBoard = GameOfLifeBoard

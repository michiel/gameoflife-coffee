class GameOfLifeBoard

  constructor : (args = {})->
    @grid  = new GameOfLifeGrid args
    @$node = args.node
    @init args
      
  init : (args = {})->

  cycle : ()->
    @grid.cycle()

  randomize : ()->
    @grid.randomize()


window.GameOfLifeBoard = GameOfLifeBoard

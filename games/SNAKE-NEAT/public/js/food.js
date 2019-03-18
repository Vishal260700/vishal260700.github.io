/*
Code From - Vishal Agarwal
Github - https://github.com/Vishal260700
LinkedIn - linkedin.com/in/vishal-agarwal-42a6a015a/
*/
class Food {

  constructor (game) {
    const availablePositions = game.getAvailablePositions()
    this.position = availablePositions[Math.floor(Math.random() * availablePositions.length)]
  }

}

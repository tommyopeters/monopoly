import Player from "./Player";
import Dice from "./Dice";

export default class Game {
  constructor(SpaceList) {
    this.Players = [];
    this.SpaceList = SpaceList;
    this.diceRollNumber = 0;
  }

  start(players) {
    players.forEach(player => {
      this.Players.push(
        new Player(
          player.name,
          1500,
          this.Players.length,
          player.icon,
          player.color
        )
      );
    });

    this.startTurn();
  }
  startTurn() {
    let dice = this.diceroll;
    this.movePlayer(dice);
    // this.resolveSpace();
  }

  diceroll() {
    let dice = new Dice();
    dice.rollDice();
    this.diceRollNumber++;
    //
    console.log(dice);
    return dice;
  }
  //INCOMPLETE FUNCTION
  movePlayer(dice) {
    this.Players[0].move(dice.diceNumber);
    while (this.Players[0].currentPosition < this.Players[0].finalPosition) {
      //move player by one space
    }
  }
  resolveSpace(resolveSpace) {
    resolveSpace();
  }
}

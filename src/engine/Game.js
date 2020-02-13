import Player from './Player'
import Dice from './Dice'

export default class Game{
    constructor(){
        this.Players = [];
    }

    start(players){
        players.forEach(player => {
            this.Players.push(new Player(player.name, 1500, this.Players.length, player.icon, player.color))
        })        
    }
    startTurn(){
        let dice = this.diceroll;

        this.movePlayer(dice);

    }

    diceroll(){
        let dice = new Dice();
        dice.rollDice();
        return dice;
    }
    movePlayer(dice){
        this.Players[0].move(dice.diceNumber);
        while(this.Players[0].currentPosition < this.Players[0].finalPosition){
            //move player by one space
        }
    }
}
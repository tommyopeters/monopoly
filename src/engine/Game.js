import Player from './Player'
import Dice from './Dice'
import SpaceList from './SpaceList.json'

export default class Game{
    constructor(){
        this.Players = [];
        this.Spaces = SpaceList
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
    //INCOMPLETE FUNCTION
    movePlayer(dice){
        this.Players[0].move(dice.diceNumber);
        while(this.Players[0].currentPosition < this.Players[0].finalPosition){
            //move player by one space
        }
    }
    resolveSpace(){

    }
}
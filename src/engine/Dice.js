export default class Deck{
    constructor(){
        this.dieOne = 0;
        this.dieTwo = 0;
        this.diceNumber = 0
        this.double = false;
    }

    rollDice=()=>{
        this.dieOne = getRandomNumber(1,6);
        this.dieTwo = getRandomNumber(1,6);
        this.diceNumber = this.dieOne + this.dieTwo;
        this.checkForDouble()
    }
    checkForDouble = () => {
        if(this.dieOne === this.dieTwo && this.dieOne !== 0){
            this.double = true;
        }else{
            this.double = false;
        }
    }
}
function getRandomNumber(min, max){
   return Math.floor(Math.random() * (max - min +1) + min)
}
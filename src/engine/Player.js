export default class Player{
    constructor(name, wallet, id, icon, color){
        this.name = name;
        this.properties = [];
        this.wallet = wallet;
        this.debt = 0;
        this.id = id;
        this.icon = icon;
        this.color = color;
        this.jailed = false;

        this.currentPosition = 0;
        this.finalPosition = 0;

    }
    
    addProperties(ids){
        ids.forEach(id => {
            this.properties.push(id)
        })
    }
    removeProperties(ids){
        this.properties.filter(element => !ids.includes(element))
    }
    move(diceNumber){
        this.finalPosition = (this.currentPosition + diceNumber) % 40;
    }
}
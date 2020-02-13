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
    addMoney(amount){
        if(this.debt > 0){
            if(this.debt > amount){
                this.debt -= amount;
                return
            }else{
                amount -= this.debt;
                this.debt = 0
                this.addMoney(amount)
            }
        }else{
            this.wallet += amount;
        }
    }
    deductMoney(amount){
        if(this.wallet > amount){
            this.wallet -= amount
        }else{
            amount -= this.wallet;
            this.wallet = 0;
            this.debt += amount;
        }
    }
}
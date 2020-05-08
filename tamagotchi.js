// console.log('tamagotchi file is loaded');

class Tamagotchi {
    constructor(foodInTummy, restedness, health) {
        this.foodInTummy = 10
        this.restedness = 10
        this.health = 10
    }
    cry() {
        this.foodInTummy--;
        console.log(this.foodInTummy)
        console.log('Waaahhh!!!!')
    }

}

const tam1 = new Tamagotchi()
const tam2 = new Tamagotchi()

tam1.cry();
tam2.cry()

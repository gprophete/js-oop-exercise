// console.log('tamagotchi file is loaded');

class Tamagotchi {
    constructor(foodInTummy, restedness, health, name, creatureType) {
        this.foodInTummy = 10
        this.restedness = 10
        this.health = 10
        this.name = name
        this.creatureType = creatureType
    }
    cry() {
        this.foodInTummy--;
        console.log(this.foodInTummy)
        console.log('Waaahhh!!!!')
    }

}

const tam1 = new Tamagotchi(Hidru, Faeries)
const tam2 = new Tamagotchi(Stomera, Goblins)

tam1.cry();
tam2.cry()

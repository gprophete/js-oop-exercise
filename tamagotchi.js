// console.log('tamagotchi file is loaded');

class Tamagotchi {
    constructor(name, creatureType) {
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
    puke() {
        this.foodInTummy--;
        console.log(this.foodInTummy +" "+ "hullabaloo")
    }

    yawn(){
        this.restedness--;
        console.log(this.name +" "+ "has current restedness of:" +" "+ this.restedness)
    }

    start(){
        const hungerTimer = setInterval(cry(), 6000);
        console.log (hungerTimer)
        const yawnTimer = setInterval(yawn(), 10000);
        console.log(yawnTimer)
        const sickTimer = setInterval(puke(), 20000);
        console.log(sickTimer)
    }

    stop(){
        const clear = clearInterval(hungerTimer, yawnTimer, sickTimer)
        console.log(clear)
    }

}

const tam1 = new Tamagotchi('Hidru', 'Faeries')
const tam2 = new Tamagotchi('Stomera', 'Goblins')

tam1.cry();
tam2.cry();
tam1.puke();
tam2.puke();
tam1.yawn();
tam2.yawn();



console.log(tam1.yawn())

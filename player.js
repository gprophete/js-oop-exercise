console.log('player file is loaded');

class Player {
  constructor(name) {
    this.name = name;
  }

  feedTamagotchi(tamagotchi) {
    tamagotchi.foodInTummy++;
    console.log('YUM!!! ' + tamagotchi.name + ' has been fed and now has: ' + tamagotchi.foodInTummy + ' in the tummy');
  }

  medicateTamagotchi(tamagotchi) {
    tamagotchi.health++;
    console.log(tamagotchi.name + ' has been medicated and now has health: ' + tamagotchi.health);
  }

  knockOutTamagotchi(tamagotchi) {
    tamagotchi.restedness++;
    console.log(tamagotchi.name + ' got some Zzzzs! Restedness: ' + tamagotchi.restedness);
  }
}

const player = new Player('Neo');

player.feedTamagotchi(tam1)

player.medicateTamagotchi(tam2)

player.knockOutTamagotchi(tam1)


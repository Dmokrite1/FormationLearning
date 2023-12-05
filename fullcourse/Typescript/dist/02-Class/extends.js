"use strict";
class Player {
    constructor(health, mana, name) {
        this.health = health;
        this.mana = mana;
        this.name = name;
        console.log(this.name);
    }
}
const dummyPlayer = new Player(42, 42, 'bidon');
class Warrior extends Player {
    attack() {
        console.log('Arghhhhhhhhhhh');
        console.log(this.mana);
    }
}

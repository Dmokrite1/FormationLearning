class Player{
    constructor(private health: number,
                protected mana: number,
                private name:string){
                    console.log(this.name);
                    
                }
}
// on ne peux accèder à la propriété name qu'à l'intérieur de la class Player car les propriétés sont private
const dummyPlayer = new Player(42, 42, 'bidon')
//console.log(dummyPlayer.mana);

class Warrior extends Player {
    attack() {
        console.log('Arghhhhhhhhhhh');
        // contrairement à aux propriétés private, mana est protected et donc accessible dans toutes les class qui extends Player
        console.log(this.mana);
    }
}

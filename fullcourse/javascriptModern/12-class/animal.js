/*
*héritage, une class enfant peut hériter des propriétés et des method d'une class parent
/exemple : class animal(parent) et class chien(enfant)
*/

export class Animal{
    constructor(nom, age){
        this.nom = nom;
        this.age = age;
        this.stamina = 100;
        this.bide = [];
    }

    info(){
        console.log(`c'est un ${this.nom}!`);
    }

    run(){
        this.stamina -= 50;
        return this.stamina;
    }

    sleep(){
        this.stamina += 30;
        return this.stamina;
    }


    //pour remplir un tableau pas besoin de get
    eat(manger){
        this.bide.push(manger);
        return this.bide;
    }

    poop(){
        this.bide = [];
        return this.bide;
    }

    round(){
        return "je tourne en rond"
    }
}
//extends la clé qui permet de faire l'héritage
class MyDog extends Animal{
    constructor(name, number, race){
        super(name, number); //le mot key "super" permet d'appeler le constructor de la class parent et de lui passé les paramétres (name=name, number=age) cependant il est conséillé d'use les mêmes noms pour les paramétres afin d'éviter les erreurs
        this.race= race;
    }

    aboyer(){
        return "ouaf, ouaf le iench";
    }

    round(){
        return super.round() + " et je suis content"
    }
}

export default MyDog;

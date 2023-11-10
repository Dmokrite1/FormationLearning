/*
*class, pour créer une class il faut définir avec la clé class
/création d'une class nécessite un constructor, celui-ci permet de définir les propriétés
/this fait reference à l'instance de l'objet en cours
*/
import MyDog, { Animal } from "./animal.js";

class dog{
    
    constructor(name, race, age){
        this.name = name;
        this.race = race;
        this.age = age;
        //on attache au contexte une nouvelle propriété qui contiendra la valeur de ce que l'on reçoit
        this.proprietaire = "patrick";
    }
    aboyer(){
        console.log(`Le chien ${this.name} qui est un ${this.race} fait ouaf`);
    }

    //on peux rappeller une autre method en commençant par this
    caliner(){
        console.log("chien, toi venir c'est sauce aigre-douce");
        this.aboyer();
    }
    //getter est une method qui permet de récupèrè une propriété de l'objet
    get proprio(){
        return this.proprietaire;
    }

    //getter permet aussi de faire des petites instructions
    get named(){
        if(this.name === undefined){
            return console.log('error');
        }
        return this.name;
    }

    //le setter permet de modifié des données dans une propriété de l'objet
    set nickname(value){
        this.nick = value;
    }
    get nickname(){
        //le setter et le getter ne peuvent avoir le même nom que les variables get/set = nickname et this.nick = variable
        return this.nick;
    }
    //avant de recevoir la valeur nous pouvons la traiter et renvoyer la réponse à ce traitement
    get humanAge(){
        return this.age*7
    }
};

//on instancie une class en utilisant la key "new"
const rex = new dog("rex", "berger allemand", 7);
console.log(rex);

//appelle de la method
rex.aboyer();
rex.caliner();

//récupèrer la valeur d'une propriété
console.log(rex.name);
console.log(rex.proprio);
console.log(rex.named);
//pour utilisé le setter on l'appelle de cette manière
rex.nickname = "iench"
console.log(rex.nickname);
console.log(rex.humanAge);

const poupe = new MyDog("Poupe", 5, "Cihuahua");
console.log(poupe);

const patrick = new Animal("Patrick", 13);
console.log(patrick);

console.log(poupe.aboyer());
//console.log(patrick.aboyer());   <====== type error, reprend la classe Animal mais pas Dog donc ne peux pas aboyer car les héritages ne se font qu'en remontant fille => mere

console.log(poupe.run());
console.log(poupe.sleep());
console.log(poupe.sleep());
console.log(poupe.sleep());
console.log(poupe.eat("croquette"));
console.log(poupe.eat("hotdog"));
console.log(poupe.poop());
console.log(poupe.round());
console.log(`Je suis Patrick et ${patrick.round()}`);

/*
*hérité native class de JS comme Array, String, Map
*/

class collectionManga extends Array{
    constructor(name, ...items){
        super(...items);
        this.name = name;
    }
    add(manga){
        this.push(manga);
    }
}

const mangas = new collectionManga("Les mangas c'est super",
{name : "One piece", rating: 1},
{name : "Dragon Ball Z", rating: 2},
{name : "One Punch Man", rating: 3},
{name : "Samurai Champloo", rating: 4},
{name : "Trigun", rating: 5});
console.log(mangas);

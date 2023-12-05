"use strict";
class Pomme {
    getDescription() {
        return `Je suis une pomme ${this.color}. Je mesure ${this.size}`;
    }
    constructor(color, size) {
        this.color = color;
        this.size = size;
    }
}
const pommeDeBruno = new Pomme("rouge", "une demi souris logitech de haut");
pommeDeBruno.acidity = undefined;
const pommeApple = new Pomme('verte', "un quart de souris logitech");
pommeApple.acidity = "0, c'est un logo pas une pomme";
console.log(pommeDeBruno.getDescription());
console.log(pommeApple.getDescription());
class Poire {
    constructor(color, size) {
        this.color = color;
        this.size = size;
    }
    getDescription() {
        return `Je suis une poire ${this.color}. Je mesure ${this.size}`;
    }
}
const Papaye = {
    color: 'burlywood',
    size: "3 souris Logitech",
    getDescription: () => {
        return `Je suis de la papaye`;
    }
};
function logFruitColor(fruit) {
    console.log('color :', fruit.color);
}
logFruitColor(Papaye);
logFruitColor(pommeApple);
class Personne {
    constructor(nom) {
        this.nom = nom;
    }
}
class Employe extends Personne {
    constructor(nom, codeEmploye) {
        super(nom);
        this.codeEmploye = codeEmploye;
    }
    afficherDetails() {
        console.log(`Nom: ${this.nom}, Code Employé: ${this.codeEmploye}`);
    }
}
let employe = new Employe("John Doe", 12345);
employe.afficherDetails();

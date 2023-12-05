interface Fruit {
    color: string;
    size: string;
    getDescription: () => string;
}

class Pomme implements Fruit{  // La classe doit respectée les arguments dans l'interface (color, size, getDescription)
    //declare acidity: string | undefined; // declare permet de déclarer sans valeur 
    acidity: string | undefined; 
    color: string;
    size: string;

    getDescription() {
        return `Je suis une pomme ${this.color}. Je mesure ${this.size}`;
    }
    
    constructor(color: string, size: string) {
       this.color = color;
       this.size = size;
    }
}

const pommeDeBruno = new Pomme("rouge", "une demi souris logitech de haut");
pommeDeBruno.acidity = undefined;

const pommeApple = new Pomme('verte', "un quart de souris logitech");
pommeApple.acidity = "0, c'est un logo pas une pomme"

console.log(pommeDeBruno.getDescription());
console.log(pommeApple.getDescription());

class Poire implements Fruit {
    constructor(public color: string, public size: string) {}
    
    getDescription() {
        return `Je suis une poire ${this.color}. Je mesure ${this.size}` 
    }
}
// Respecte le minimum de l'interface, elle ne demande pas forcément que la variable soit une classe
const Papaye: Fruit = {
    color: 'burlywood',
    size: "3 souris Logitech",
    getDescription: () => {
        return `Je suis de la papaye`;
    }
}
// Quelle recoive un objet ou une instance de class notre function renverra le même résultat tant que l'argument respecte l'interface fruit
function logFruitColor(fruit: Fruit) {
    console.log('color :', fruit.color);
}

logFruitColor(Papaye);
logFruitColor(pommeApple);

class Personne {
    protected nom: string;

    constructor(nom: string) {
        this.nom = nom;
    }
}

// Classe dérivée (héritant de Personne)
class Employe extends Personne {
    private codeEmploye: number;

    constructor(nom: string, codeEmploye: number) {
        // Appel du constructeur de la classe de base (Personne)
        super(nom);
        
        // Initialisation de la propriété propre à Employe
        this.codeEmploye = codeEmploye;
    }

    // Méthode utilisant la propriété protégée
    afficherDetails(): void {
        console.log(`Nom: ${this.nom}, Code Employé: ${this.codeEmploye}`);
    }
}

// Création d'une instance de Employe
let employe = new Employe("John Doe", 12345);

// L'accès à la propriété nom n'est pas possible depuis l'extérieur
// console.log(employe.nom); // Erreur de compilation

// Mais la méthode afficherDetails peut accéder à la propriété protégée
employe.afficherDetails(); // Affiche "Nom: John Doe, Code Employé: 12345"

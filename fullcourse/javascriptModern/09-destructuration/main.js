/*
* La destructuration
*/

const person = {
    firstname: "Patrick",
    lastname: "Sebastien",
    hobby: "casse-burne",
    achievement: "nothing",
    github: "laynmdream"
};


/*
*récupèrer une donnée dans un objet
/const firstname = person.firstname
*/

const{firstname, lastname, github} = person;
console.log(firstname, lastname, github);
console.log(`my name is ${lastname}, ${firstname} ${lastname}`);

/*
*Destructuration dans un objet nester
*/

const seb = {
    firstname: "Sebastien",
    lastname: "Carton",
    hobby: "Chanter la cariocca",
    links: {
        social:{
            facebook: "https://facebook.com/sebou",
            twitter: "https://twitter.com/"
        },
        web: {
            blog: "https://legras.github.io",
            github: "https://github.io/grasebou"
        }
    },
};

const {twitter, facebook} = seb.links.web;
console.log(github);

//rename variable
const {github: hub, blog: website} = seb.links.web;
console.log(hub, website);

//definir des valeurs par défaut
const {hobby, favori = "love cats"} = seb;
console.log(hobby, '&' ,favori);
console.log(seb);

/*
*destructuration d'un tableau
/sur un tableau chaque nouvelle variable sera associé à l'endroit ou elle est call
*/

const user = [
    "Bruno",
    "pas fan",
    "de js",
    "nous a fait",
    13
];

const [prenom, nom, cours, nous, note] = user;
console.log(prenom, nom, cours, nous, note);

/*
*swapping inversé
*/

let champion = 'bruno';
let age = 64;

[champion, age] = [age, champion];
console.log(champion, age);

/*
* destructuration des functions
*/

const convertCurrency = (amount) => {
    const converted = {
        usd: amount * 1.12,
        gbp: amount * 0.9,
        yen: amount * 120,
        euro: amount * 44.99,
    };
    return converted;
};
console.log(convertCurrency(1));

//récupère la key de l'objet et converti à l'intérieur de la fonction
const {usd : dollar} = convertCurrency(15);
console.log('convertCurrency', dollar);

const {euro, yen} = convertCurrency(3);
console.log('convertion :', euro, 'eur', 'font', yen, 'yen');

//destructuré dans l'argument d'une function
const formation = {
    name: 'backend',
    description: 'formation de développeur',
    students: ["Amand", "Steve"]
};

const getStudents = ({students, name, description : desc})=>{
    return `les étudiants  ${students.join(' et ')} font la formation de ${name} : qui consiste en une ${desc}` 
}

console.log(getStudents(formation));

/*
*rest operator
/l'opérateur de repos et représenté par ... il permet de rassembler les élements restant d'un objet ou d'un tableau
*/

const team = ["Gilles", "Stéphane", "Vincent", "Amaury", "Romain", "Sébastian"];

const [boss, support, ...employes] = team;
console.log(boss);
console.log(support);
console.log(employes);

//exemple avec une function
const vatCalculator = (vat, ...montants) => {
    return montants.map(montant => montant*vat)
};
console.log(vatCalculator(0.5, 186, 18, 20, 200, 3));

//sur l'objet
const user1 = {
    firstName: 'Sacha',
    age1: '30',
    job: 'pokémon',
    bestfriend: 'Patrick'
}

const {firstName, age1, ...rest} = user1;
console.log((`${firstName} à ${age1} et est un ${rest.job}. il va souvent avec son meilleur ami, ${rest.bestfriend} fumé des chichas`));

/*
*exercice
/avec la destructuration créé 3 variables: menu(qui correspond a name), size et sauce
/faites le aussi avec les sauces
*/
const mcDo = {
    name: "CBO (chicken bacon onion",
    size: "large",
    sauce: ["andalouse", "mayo", "ketchup"]
}

const {name: menu, size: taille, sauce: sauces} = mcDo;
console.log(`Menu : ${menu}, Taille : ${taille}, Sauces : ${sauces.join(', ')}`);

const [sauce1, sauce2, sauce3] = sauces
console.log(`Sauce 1 : ${sauce1}, Sauce 2 : ${sauce2}, Sauce 3 : ${sauce3}`);

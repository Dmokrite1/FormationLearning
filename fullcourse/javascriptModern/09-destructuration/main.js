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

const {gbp : euro, yen} = convertCurrency(25);
console.log('convertion :', euro, 'euro', 'font', yen, 'yen');

//destructuré dans l'argument d'une function
const formation = {
    name: 'backend',
    description: 'formation de développeur',
    students: ["amand", "steve"]
};

const getStudents = ({students, name, description : desc})=>{
    return `les étudiants  ${students.join(' et ')} font la formation de ${name} : qui consiste en une ${desc}` 
}

console.log(getStudents(formation));

/*
*spread operator
*/

const featured = ["Marghartitta", "Romana", "Napolitan", "Regina", "Bolognése"];
const special = ["Nutella", "Banane", "Moelen", "Fricandelle"];

const pizzas = [...featured, "vegan c'est le mal", ...special];
console.log("les pizzas pref d'Enzo", pizzas);

//objet

const user = {
    username: "Audrey",
    profil: "mangeuse de serpents",
};
const userUpdated = {
    ...user,
    passion: "le serpent d'Adrien",
    abra: "abra"
};

console.log('userUpdate', userUpdated);

//possibilité
const personnesPresentes = document.querySelectorAll("#people p");
console.log(personnesPresentes);

/*
*ne fonctionne pas
/let myArray = personnesPresentes.map(audrey=>audrey)
/console.log(myArray);
*/

/*
*fonctionne comme ça
*/
const myArray = [...personnesPresentes];
console.log(myArray);
let myMap = myArray.map(audrey => console.log(audrey));

/*
*exercice
/a l'aide de la decomposition(spread) recrée un nouvel objet qui va se presenter comme ceci: const user = {
        firstname: "jacky",
        lastname: "michel",
        job: "try harder",
        address: {
            street: "rue de la jungle",
            numéro: 17,
            city: "Gotham City"
        }
}
*/

const address = {
    street: "rue de la jungle",
    numéro: 17,
    city: "Gotham City"
};

const user1 = {
    firstname: "Jacky",
    lastname: "Michel",
    job: "Try Harder",
};

const jacky = {
    ...user1,
    address: {
        ...address, cp: 95210
    }
};
console.log(jacky);


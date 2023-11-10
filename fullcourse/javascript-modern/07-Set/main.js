/*
*Set 
*/

let = arrayOfNumbers = [1, 2, 2, 10, 45, 45, 6, 7, 4, 10, 10, 10, 5, 7, 8, 9, 9, 9];
console.log('array of number', arrayOfNumbers);

let setOfNumbers = new Set(arrayOfNumbers);
console.log(setOfNumbers);

//setOfNumbers.map((number) => console.log(number)) <=====Erreur obligatoire ce sont des entries

for(const number of setOfNumbers){  // par contre on peut itérer avec un for
    console.log(number);
};

//console.log(setOfNumbers[2])  <======= il n'est pas possible de récupèrer une entries (pas d'index)

setOfNumbers.add(100);   //<========= par contre on peux add, attention de ne pas rajouté un doublons car le Set fonctionne toujours
console.log(setOfNumbers); 

setOfNumbers.delete(100); //<======= et on peux bien entendu delete
console.log(setOfNumbers);

/*
*has() La méthode .has(key) est utilisée pour vérifier si une clé spécifique existe dans un objet Map. Elle renvoie true si la clé existe dans le Map et false sinon.
*/
console.log('le set ne contient pas de 100 :', setOfNumbers.has(100));

console.log('le set contient', setOfNumbers.size); //<======= donne le nombres d'éléments

/*
*le Set ne fonctionne qu'avec des tableaux de primitives: string, numbers et boolean
*/
let arrayOfObjects = [
    {
        name: 'toto',
        age: 20
    },
    {
        name: 'titi',
        age: 25
    },
    {
        name: 'tata',
        age: 30
    },
    {
        name: 'tata',
        age: 35
    },
    {
        name: 'tata',
        age: 30
    }
];

let setOfObjects = new Set(arrayOfObjects);
console.log('set of object', setOfObjects); // ne supprime pas les doublons

/*
*Warning la methode est sensible à la case
*/

let arrayOfStrings= ['Amaury','Greg', 'Patrick', 'Audrey', 'audrey', 'Amand', 'Amaury'];
let setOfStrings = new Set(arrayOfStrings);
console.log('noms', setOfStrings);

let goodSetOfStrings = new Set(arrayOfStrings.map(string=>string.toLocaleLowerCase()));
console.log('good set of string', goodSetOfStrings);

/*
*le set peut être suivi d'un from
*/

let arrayOfStringsForSet = Array.from(goodSetOfStrings);
arrayOfStringsForSet.map(string => console.log(string));

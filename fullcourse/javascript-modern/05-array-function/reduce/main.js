/*
*vieille façon
*/

//const numbers = [10, 20, 30];

/*
let somme = 0;
for(var i = 0; i < numbers.length; i++);
{
    somme += numbers[i]
}
console.log(somme);
*/

/*
*Nouvelle façon
*/

/*
const somme2 = numbers.reduce((total, number) => total + number, 0);
console.log(somme2)
*/

/*
const strings=['la', ' ', 'chartreuse', ' ', 'est', ' ', 'verte']
const concat = strings.reduce((accumulator, currentValue) =>
{return accumulator + currentValue}, 'oui ')

console.log(concat)
*/

/*
const people = [
    { name: 'Vincenzo', age: 80 },
    { name: 'Redha', age: 60 },
    { name: 'Marcello', age: 40 },
];

const newPeople = people.reduce((tableau, person) => {
    tableau.push(person.name);
    return tableau;
}, []); // spécifier un tableau initial vide comme deuxième argument de reduce

console.log(newPeople);
*/

/*
* Exercice compte les fruits en utilisant le reduce
*/

/*
const fruits = ["banane", "cerise", "pomme", "orange", "banane", "pomme", "ananas", "cerise", "melon", "pomme", "pomme", "figue"];

const fruitCount = fruits.reduce((accumulator, fruit) => {
    if (accumulator[fruit]){
        accumulator[fruit] += 1;
    } else {
        accumulator[fruit] = 1;
    }
    return accumulator;
}, {});
console.log(fruitCount)
*/



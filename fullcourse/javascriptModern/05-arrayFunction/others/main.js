/*
* Some
* le some renvoi un booléen true/false si l'élement existe dans le tableau
*/

/*
const backend = [
    { name: 'Redha', age: 25},
    { name: 'Bruno', age: 78},
    { name: 'Denis', age: 12},
];

let adultPresence = backend.some((t) => {
    return t.age >= 18;
});
console.log("il y a des adultes ici? ", adultPresence);
* le some peut s'enchainer avec d'autres array function mais il sera obligatoirement à la fin de chaine car il ne renvoi que ture/false
let vioc = backend.some((t)=> t.age >65);
console.log('il y a des viocs', vioc);
*/

/*
*every
*/

/*
let oldEnought = backend.every(b => b.age>= 12);
console.log('Ont ils tous plus de 12 ans? ', oldEnought);

let canAllDriveCar = backend.every(b => b.age> 18);
console.log('Peuvent-ils tous conduire une voiture', canAllDriveCar);
*/

/*
*sort
*/

//tri le tableau à partir de l'age et return les ages dans l'ordre croissant
/*
let sortByAge = backend.sort((a, b) => {
    return a.age - b.age;
}).map(b=> console.log(`${b.name} à ${b.age}`))
*/

/*
*flat
*/

/*
let numbers = [1, 2, 3, 4, 5,[6, 7, 8, 9]]
let flatArray = numbers.flat()

console.log(flatArray);
*/

/*
let numbers = [1, 2, 3, 4, 5,[6, 7, [8, 9]]]
let flatArray2 = numbers.flat(2)

console.log(flatArray2);
*/

/*
*flatMap
*/

/*
* affiche mot par mots

let arrayOfString = ["Salut les filles", "on ne parle pas de Bruno", "C'est Jacques qui l'a dit"]
let arrayOfWords = arrayOfString.flatMap(s=>{
    return s.join()
})
console.log(arrayOfWords);
*/

/*
*flatMap + split + join affiche la phrase complète
let arrayOfString = ["Salut les filles", "on ne parle pas de Bruno", "C'est Jacques qui l'a dit"];

let joinedString = arrayOfString.flatMap(s => s.split(" ")).join(" ");

console.log(joinedString);
*/


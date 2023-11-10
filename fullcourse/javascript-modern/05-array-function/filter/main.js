/*
*filter
*/

/*
* façon moche
*/
/*
let ages = [15, 25, 30, 35, 40, 50, 55, 60, 69];
let filteredAge = [];

for (let i = 0; i < ages.length; i++){
    if(ages[i]> 25) filteredAge.push(ages[i]);
};

console.log(filteredAge);
*/

/*
*nouvelle façon
*/

/*
let ages = [15, 25, 30, 35, 40, 50, 55, 60, 69];
let filteredAge = ages.filter(age => age > 35);

console.log(filteredAge);
*/

/*
let team = ['Sacha', 'Greg', 'Amant', 'Audray', 'maxime', 'Jacques', 'Vincenzo'];
const team2 = team.filter(member => member.length >= 5);

console.log(team2);
*/

/*
const people = [
    {name: 'vincenzo', age: 80},
    {name: 'Redha', age: 40},
    {name: 'Franck', age: 150},
    {name: 'Amand', age: 15}
];

const newPeople = people.filter(person => person.age> 45);
console.log(newPeople);
*/

/*
*on peux chain comme ici un .map et un .filter (map modifie les valeurs du tableau et filter va filtrer dans le tableau)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNumbers = numbers.map(number => number * number).filter(number => number%2 === 0);
console.log(squaredNumbers)
*/

/*
*exercice filtrer les nombres pairs
*/

/*
const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nombresPairs = nombres.filter(nombre => nombre % 2 === 0);

console.log(nombresPairs);
*/

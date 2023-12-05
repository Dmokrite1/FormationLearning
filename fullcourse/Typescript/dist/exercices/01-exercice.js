"use strict";
class Chien {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const monChien = new Chien("Machin", 3);
const monChat = {
    name: 'truc',
    age: 2,
};
function getAgeSum(animals) {
    let ageTotal = 0;
    const animalsName = [];
    for (const animal of animals) {
        ageTotal += animal.age;
        animalsName.push(animal.name);
    }
    console.log(`Ensemble, les animaux ${animalsName.join(' et ')} ont ${ageTotal} ans`);
}
getAgeSum([monChien, monChat]);

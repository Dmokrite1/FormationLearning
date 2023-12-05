interface Animal {
    name: string;
    age: number;
}

class Chien implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const monChien = new Chien("Machin", 3);

const monChat: Animal = {
    name: 'truc',
    age: 2,
};

function getAgeSum(animals: Animal[]) {
    let ageTotal = 0;
    const animalsName: string[] = [];

    for (const animal of animals) {
        ageTotal += animal.age;
        animalsName.push(animal.name);
    }

    console.log(`Ensemble, les animaux ${animalsName.join(' et ')} ont ${ageTotal} ans`);
}

getAgeSum([monChien, monChat]);

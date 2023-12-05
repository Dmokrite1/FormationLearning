"use strict";
const fruit = "banane";
const color = "mauve";
let myNumber = 42;
let isActive = true;
let example = '42';
example = 42;
const alcool = ['Chartreuse', 'rhum'];
const jerk = [42, "banane"];
const tuple = [42, "H2G2"];
const player = {
    name: 'Ninja',
    toString: () => "player: Ninja",
};
const colorRGB = {
    red: 255,
    blue: 255,
    green: 47,
    opacity: 1
};
const adminRole = "admin";
function sum(a, b) {
    return a + b;
}
let result = sum(40, 2);
function sum1(a, b) {
    return a + b;
}
function bark() {
    console.log('bark');
}
let result1 = sum1(40, 2);
function weirdSum(number1, number2) {
    if (typeof number1 === 'string') {
        number1 = Number(number1);
    }
    return number1 + number2;
}
function stringify(nbr, lastArg, turnToSentence) {
    if (turnToSentence) {
        return `${nbr} est un nombre`;
    }
    return Number.toString();
}
const nbrAsString = stringify(42);
const nbrAsSentence = stringify(42, undefined, true);
const nbrTest = stringify(42, true);
function infiniteSum(...numberList) {
    let result = 0;
    console.log('liste de nombre', numberList);
    for (const nbr of numberList) {
        result += nbr;
    }
    return result;
}
infiniteSum(2, 2, 4);
infiniteSum(40, 2);
infiniteSum(40, 40, 160, 1097);
const badWay = 'pas terrible';
let goodway = 'inconnu';
if (typeof goodway === 'string') {
    goodway = goodway.toUpperCase;
}
function effectuerAppelAPI(callback) {
    callback();
}
function gift(age, opengift) {
    opengift('chatgpt', age);
}
gift(1, (name, age) => {
    console.log(`Joyeux anniversaire ${name}, tu as ${age} ans`);
    return;
});
const varUnknown = "banane";
const password = varUnknown;
const fakeNBR = "20";
const viewMode = 'grid';
const viewUserList = 'list';
const newUser = {
    firstname: "Dirk",
    lastname: "Vadehors",
    age: 42
};

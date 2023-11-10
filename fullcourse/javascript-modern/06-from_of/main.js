/*
*from, le from permet de convertir un objet itérable
*/

let words = document.querySelectorAll('p');
console.log(words); //ici on récup les noeuds 'node' html

words = Array.from(words); // on convertit la liste node en array
console.log(words);

const arrayOfWords = words.map(w => w.innerText);
console.log(arrayOfWords);

/*
*Sur une chaine de caractère
*/

const str = 'hello world';
const chars = Array.from(str);
console.log(chars);

/*
*avec une method en callback
*/

const phrase = "greg danse le mia sur la plage"; //from contient une fonction map (on peux donc modifier la phrase dans l'array avec un split)
const words2 = Array.from(phrase.split(' '), w=> w.toUpperCase());
console.log(words2);

/*
*of, le of permet de créée un tableau à partir d'un nombre d'argument variable quelque soit le type
*/

const arguments = Array.of(3, 45, 2, true, "patrick", false, "sexe", {name:"poulette"});
console.log(arguments);

/*
*exercice à partir de cette phrase créée un tableau avec un mot sur 3 en majuscule
*/

const patrick = "Patrick aime le gras, le gras c'est la vie";
const resultat = Array.from(patrick.split(' '), (mot, index) => {
    if (index % 3 === 0) {
        return mot.toUpperCase();
    }
    return mot;
}).join(' ');

console.log(resultat);

/*
const patrick = "Patrick aime le gras, le gras c'est la vie";
const response = Array.from(patrick.split(' '), (w, index) => {
    if (index % 3 ) {
        return w.toUpperCase();
    }
    return w;
});
console.log(response);
*/

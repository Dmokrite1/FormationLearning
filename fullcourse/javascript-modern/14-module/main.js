/*
*module, l'import des modules, voir config.js pour l'export
/l'import par défaut n'a pas besoin d'accolade, url et myUrl sont des import déclaré parce qu'elles sont nommées dans le fichier d'origine
*/
import {user as userDestructured} from "./destructured.js"
import John, {myUrl, url} from "./config.js";
import {user, john, createA} from "./user.js"

console.log(John);
console.log(url);  //variable
console.log(myUrl());  //function
console.log(myUrl("https://temu.com"))

const newUser = user(
    "enzo",
    "enzo.ferrari@f40.com",
    "https://vroum.it"
)

const {nom, age, isHuman} = userDestructured;
const ville = userDestructured.ville

console.log(nom, age, isHuman);
console.log(ville);
    
console.log(newUser);
console.log(john);
console.log(john.website);
console.log(createA(john.email));
console.log(userDestructured);
/*
*Map, le map permet de construire une structure de données qui associe une clé à une valeur pour former une sorte de dictionnaire
*/

let myMap = new Map();

console.log(myMap);

/*
*avec un tableau
*/

let team = ['ammaury', 'amand', 'denis', 'steve'];
let teamMap = new Map(team.map((name, index) =>
[index, name]));
console.log(teamMap);

let object = new Map(
    [
        ["name", "Audrey"], 
        ["age", 20]
    ]);
console.log(object);

/*
*les arrayfunctions ne fonctionne pas
/object.map(o=> console.log(o));
*/

/*
*parcourir la map
/<=======(for in) ne fonctionne pas
*/

object.forEach((value, key) => {
    console.log('forEach', key, value);
});

for(const [key, value] of object){
    console.log('for of', key, value);
};

//Get pour récupèrer une valeur dans la map
console.log(object.get('name'));

//add value on the map
object.set(4, 'greg');     //<======= key + valeur
console.log("set", object);

console.log(object.get(4));

//if we add a value on the existing key, the value change
object.set (4, "Amand");
console.log(object);

//delete a value on the map, we using delete
object.delete(4);
console.log("Amand s'en va", object);

//vérifier if a key exist use method has
console.log("Amand est encore là ?", object.has(4));

//verifier le nombre key value existant dans le map
console.log('il y a : ', object.size, 'valeur');

//vider le map
object.clear();
console.log(object);
console.log(object.size);

/*
*Exercice: gestion des étudiants
/créée une new map called "étudiants" 
/dont la clé sera le nom des étudiants et la valeur sera leur note en js (nbr) 
/+ add 4 étudiants 
/+ afficher la note d'un étudiant 
/+ afficher le nbr étudiants dans le map 
/+ afficher la moyenne des notes 
/+ supprimer un étudiant dans le map
*/

const etudiants = new Map();

etudiants.set("Amand", 18);
etudiants.set("Patrick", 20);
etudiants.set("Vincenzo", 15);
etudiants.set("Amaury", 15);

const noteEtudiant = etudiants.get("Vincenzo");
console.log("La note de Vincenzo est " + noteEtudiant);

const nombreEtudiants = etudiants.size;
console.log("Le nombre d'étudiants est " + nombreEtudiants);

let sommeNotes = 0;
etudiants.forEach((note) => {
  sommeNotes += note;
});
const moyenneNotes = sommeNotes / nombreEtudiants;
console.log("La moyenne des notes est " + moyenneNotes);

etudiants.delete("Vincenzo");
console.log("Vincenzo est encore là ?", etudiants.has("Vincenzo"));








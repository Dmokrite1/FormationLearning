//var
/*function hello(){
    var message = "hello world"
}
console.log(message)
*/
// Les portées
let x = 5;
var y = 10;

function porter1(){
    document.getElementById("p1").innerHTML = `depuis porter1(): <br> x = ${x} <br> y = ${y}`;
};

porter1();

function porter2(){
let a = 1;
var b = 2;
document.getElementById("p2").innerHTML = `depuis porter2(): <br> a = ${a} <br> b = ${b}`;
console.log(`a = ${a} et b = ${b}`);
};
porter2();

const presentation = 'la belle équipe';
const triptyk = ['sacha', 'patrick', 'maxime'];
for (let i = 0; i < triptyk.length; i++){
    console.log(`${triptyk[i]}!`);
};

function presentationDunTexte(){
    const texte = 'on ne badine pas avec les cours';
    let team = ['sacha', 'patrick', 'maxime'];
    console.log(texte);
    team.push('moussa');
    for (let i = 0; i < team.length; i++){
        console.log(team[i])
    }
}
presentationDunTexte();
texte = 'elle est ou la poulette'
console.log(texte)

//team.push('marie')  Erreur à cout sur car la variable est dans la function

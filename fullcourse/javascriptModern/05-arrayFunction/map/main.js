let team = ['Sacha', 'Greg', 'Amant', 'Audray', 'maxime', 'Jacques', 'Vincenzo'];

/*
*for basic
*/

for(let i = 0; i < team.length; i++){
    console.log(team[i]);
}

/*
*forEach
*/

team.forEach((element, index) => {
    console.log(element + '-' + index);
});

/*
*map
*/

/*
const team2 = team.map((element, index) => `${element} ${index} est un jedi reconnu`);
console.log(team2);

const team3 = team.map(element => {
    let change = `${element} est un jedi reconnu`;
    return change;
});
console.log(team3);

const arrayNumber = [2, 3, 4, 5];
const newArray = arrayNumber.map (element=>{
    const double = element*2;
    console.log(double);
    return double;
});

console.log(`new array`, newArray);

const image = [
    {height: '34px', width: '67px', color: 'rgb127, 255, 0'},
    {height: '34px', width: '67px', color: 'rgb127, 255, 0'},
    {height: '34px', width: '67px', color: 'rgb127, 255, 0'},
]

const heights = image.map(image => image.height)
console.log(heights)
*/

/*
*Ma version qui fonctionne
*/

/*
const swapWord = "bonjour je suis maxime et je suis un jedi";
const mots = swapWord.split(' ');

const motMaj = mots.map((mot, index) => {
    if (index % 2 === 0) {
        return mot.toUpperCase();
    } else {
        return mot;
    }
});

const modify = motMaj.join(' ');
console.log(modify);
*/

/*
*corrigé
*/

/*
const swapWord = (string) => {
    const words = string.split(" ");
    const newString = words.map((word, index) => {
        if(index % 2 === 0){
            return word.toUpperCase()
        }else {
            return word
        }
    })
    return newString.join(' ')
}
console.log(swapWord("bonjour je suis maxime et je suis un jedi"));
*/

/*
*ultra condensé
*/

/*
const swapSword = (string) =>

string.split(' ').map((word, index) => index%2? word.toUpperCase() : word).join(' ')
console.log(swapSword("bonjour je suis maxime et je suis un jedi"))
*/

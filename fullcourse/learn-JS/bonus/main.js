/* -------------------------------------------------------------------------- */
/*                                     map                                    */
/* -------------------------------------------------------------------------- */

const numbers = [1,2,3,4];

const doubleNumbers = [];

for(item of numbers){
    doubleNumbers.push(item*2);
}
console.log(doubleNumbers);

const myDoubleNumbers = numbers.map(function(nbr){
    return nbr *2;
})
console.log(myDoubleNumbers);


/* -------------------------------------------------------------------------- */
/*                                   filter                                   */
/* -------------------------------------------------------------------------- */

const ages = [12, 22, 34,41,55,67,70, 78, 85, 99];

const filteredAges = [];

for(let item of ages ){
    if(item > 65){
        filteredAges.push(item)
    }
}

console.log(filteredAges);

const myFilteredAges = ages.filter(function(item){
    return item > 65;
})

/* -------------------------------------------------------------------------- */
/*                                    find                                    */
/* -------------------------------------------------------------------------- */

const users = [
    {
        id:1,
        name:"Vince"
    },
    {
        id:2,
        name:"Amant"
    },
    {
        id:3,
        name:"Bruno"
    },
    {
        id:4,
        name:"Redha"
    },
    {
        id:5,
        name:"Steve"
    },
];

let user;

for(let item of users ){
    if(item.name.toLowerCase() === "bruno"){
        user = item;
    }
}
console.log(user);


let user2 = users.find(function(item){
    return item.name === "Redha";
})
user2 = user2.name;
console.log(user2);


/* -------------------------------------------------------------------------- */
/*                               arrow function                               */
/* -------------------------------------------------------------------------- */

/*
const newNumbers = [1,2,3,5];
*/
// const doubleNewNumbers = newNumbers.map(function(item){
//     return item*2;
// });

/*
const doubleNewNumbers = newNumbers.map(item => item*2);

const doubleNewNumbers2 = newNumbers.map((item, mdrMonIndex) => {
    console.log(mdrMonIndex);
    return item*2;
});


let div = document.querySelector("div");

const markup = `
    <ul>
    ${doubleNewNumbers.map(item => `
        <li>
        mon double number est ${item}
        </li>
    `).join("")}
    </ul>
`;

div.innerHTML = markup;
*/

let form1 = document.getElementById("form1")
let form2 = document.getElementById("form2")

form1.addEventListener("submit", (event)=>{
    event.preventDefault();
    let myForm = new FormData(form1);
    let lastName = myForm.get("lastName");
    let firstName = myForm.get("firstName"); 
});



form2.addEventListener("submit", (event) =>{
    let array = []
    event.preventDefault();
    let myForm = new FormData(form2);
   /*
    for(let [key, value] of myForm.entries()){
        if(value === "on"){
            array.push(key)
        }  
    }
    */
   for(let key of myForm.keys()){
    array.push(key)
   }
    console.log(array);
});

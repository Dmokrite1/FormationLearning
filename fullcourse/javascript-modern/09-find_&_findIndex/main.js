const users = [
    {
        id:1,
        name: "Aurelie"
    },
    {
        id:2,
        name: "Patrick"
    },
    {
        id:3,
        name: "Andy"
    },
    {
        id:4,
        name: "Lucas"
    },
    {
        id:5,
        name: "Bwajamin"
    },
]

let user  = users.find(function(user){
    return user.name == "Bwajamin" ;
})

console.log(`Nous avons retrouvé ${user.name}`);

//find retourne les élément qui correspond à la condition

/*-----------------*//*-----------------*//*-----------------*/

//le find sur un objet

const posts = [
    {
        id:1,
        title: "Premier post",
    },
    {
        id:2,
        title: "Second post",
    },
    {
        id:3,
        title: "Troisieme post",
    },
    {
        id:4,
        title: "Quatrieme post",
    },
    {
        id:5,
        title: "Cinquieme post",
    },]

let post = posts.find((post)=>{
    return post.id == 3;
})

console.log(`Le ${post.title} a été trouvé`);

/*-----------------*//*-----------------*//*-----------------*/

//le find avec plusieurs condition

const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Doe', age: 22 }
  ];
  
  const foundPerson = people.find(person => person.age > 25 && person.name.startsWith('J'));
  
  console.log(foundPerson);

/*-----------------*//*-----------------*//*-----------------*/

//find index

//reprenons notre premier tableau d'objet users

let userIndex = users.findIndex(function(user){
    return user.name == "Bwajamin"
})
console.log(userIndex);

//le findIndex retournera l'index de l'élément qui correspond à la condition



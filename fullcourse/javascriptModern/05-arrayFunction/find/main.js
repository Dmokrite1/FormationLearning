/*
*find
*/

const people = ['greg', 'franck', 'redha', 'amand', 'audray'];
let copain = people.find((person) => {return person === 'redha'});

console.log(copain);

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

    let post = posts.find((post) => post.id === 3);
    //recherche dans le tableau et retourne l'objet contenant l'id 3
    console.log(post);

    const backend = [
        { name: 'Redha', age: '25'},
        { name: 'Bruno', age: '15'},
        { name: 'Denis', age: '30'},
    ]

    const foundBruno = backend.find(bruno => bruno.age<30 && bruno.name.startsWith('B'));
    console.log('ne parlons pas de ', foundBruno);

    //récupèrer l'index de la valeur recherché dans le tableau
    let userIndex = backend.findIndex((person) => {
        return person.name === 'Denis'});

    console.log('Denis index ', userIndex);




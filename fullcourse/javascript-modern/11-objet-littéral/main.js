let user = {
    firstname: "jacky",
    lastname: "michel",
    isHuman: true,
    birth: new Date(1992, 11, 17),
    //les Objets littéraux peuvent contenir des méthodes
    getAge(){
        const date = new Date();
        const year = date.getFullYear();
        return year - this.birth.getFullYear();
    },
    //Objet nesté
    favorites: {
        food: "pizza",
        drink: "coca-cola zéro",
        sport: "gladiator"
    },
    //Objet littéraux peuvent avoir des tableaux
    friends: ["patrick", "maxime", "phillip", "gonzague"],
    links:{
        social:{
            facebook: "https//www.facebook.com",
            twitter: "https://twitter.com",
        },
        web:{
            blog: "https://www.github.io",
            github: "https://www.github.io",
        }
    }
};

//getDay donne le jour de la semaine et getDate donne le numéro du jour de la semaine
console.log(user.firstname);
console.log(`${user['birth'].getDate()}/${user['birth'].getMonth()}/${user['birth'].getFullYear()}`);

//annotation pointée ou crocheté fonctionne aussi avec les méthodes
console.log(user.getAge());
console.log(user["getAge"]());

//objet nested
console.log(user.links.social.facebook);
console.log(user['links']['social']["twitter"]);

const twitter = "twitter";
console.log(user['links']['social']);

//accéder à la key
const key = Object.keys(user);
console.log(key);  //récup toutes les keys de l'objet

const nestedKeys = Object.keys(user.links);
console.log(nestedKeys);

//value 
const values = Object.values(user);
console.log(values);

const father = 'gilles';
user.father = father;
console.log(user);

//tableau
user.friends.push('amaury');
console.log(user.friends);
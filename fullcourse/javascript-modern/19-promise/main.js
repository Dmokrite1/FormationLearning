/*
* promise = une promesse attendra que le code soit executé pour renvoyer le résultat
*/

/*
*construire une promesse
*/

const rejectPromise = new Promise((resolve, reject) => {
    reject("Bruno est un traître");
});

rejectPromise.then((result) => console.log(result)).catch((error) => {
    console.log("error message:", error);
});

const resolvePromise = new Promise((resolve, reject) => {
    resolve("Steve est heureux");
});

resolvePromise.then((result) => console.log("message réussi :", result)).catch((error) => {
    console.log("error message:", error);
});


//on est bien async les réussites d'affichent avant les erreurs et manipuler le résultat via la méthode .then

const manipulation = new Promise((resolve, reject) => {
    resolve("Le lion est mort ce soir.");
});

manipulation
    .then((result) => {
        return `${result} Et Mofasa est content`;
    })
    .then((r) => {
        return `${r}. Mettre du texte`;
    })
    .then((result) => {
        return `${result}. Encore du texte`;
    })
    .then((bruno) => {
        throw new Error(bruno);
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("Finish him!"));  //finally fonctionnera toujours que l'on ai un resultat ou une erreur

/*
*les erreurs sont imbriquées    
    (result1) => { 
        (result2) => {
            (result3) => {   
                return result3 = result2 + données 
            }
            return result2 = result1 + données
        }
        return result1
    }
*/

/*
*const posts = [
    {
      title: "J'aime le cours de Patrick et il est beau",
      author: "Maxime",
      id: 1,
    },
    {
      title: "Patrick est un peu Brouillon",
      author: "Franck",
      id: 2,
    },
    {
      title: "Je n'écoute pas ce qui est dit",   
      id: 3,
    },
];
  
const authors = [
    {
      name: "Maxime",
      email: "maxime_unicorn@gmail.com",
      bio: "J'aime les licornes et les barbies",
    },
    {
      name: "Franck",
      email: "vasy.francky@yahoo.be",
      bio: "Je danse le mia",
    },
    {
      name: "Amand",
      email: "Amand.ine@yolo.eu",
      bio: "je suis un flemmard",
    },
];

const getPostById=(id)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const post = posts.find(post => post.id ===id);
            post ? resolve(post) : reject("Aucun post trouver")
            console.log("post", post)
        }, 2000)
    })
}

  getPostById(3)//ici nous avons une promesse qui est resolve
  getPostById(4)// ici nous avons une promesse qui est reject

const findAuthor = (post, ms) =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const authorDetails = authors.find((author)=> author.name === post.author)
            authorDetails ? resolve(authorDetails) : reject("Aucun auteur trouvé pour le post");
            console.log("AuthorDetails", authorDetails);
        }, ms)
    })
}

findAuthor(posts[0], 3000)
findAuthor(posts[2], 4000)
*/

/*
* Promise all c'est un tableau de promesses, si une promesse est rejeté toutes les promesses sont rejetées même si elles fonctionnent
*/

const weather = new Promise((resolve, _reject) => {
    setTimeout(() => {
        resolve({
            temp: 29, condition: "il pleut de ouf"
        })
    }, 4000)
})

const tweets = new Promise((resolve, reject) => {
    setTimeout(() => {resolve([
        "il pleut everyday",
        "C'est ça la Belgique"
    ])
    }, 5000)
})

const screens = new Promise((resolve, reject) => {
    reject("prout Bruno")
})
Promise.all([weather, tweets, screens]).then((responses) => {
    console.log("promise all");
    console.log(responses);
}).catch((error) => console.error(error))

/*
*Promise.allSettled
*/

Promise.allSettled([weather,tweets,screens]).then((responses) => {
    console.log("promise all");
    console.log(responses);
}).catch((error) => console.error(error))

/*
*  Vous allez créer une fonction breath (avec un paramètre qui sera la durée) qui va retourner une promesse.
*  Dans cette promesse, vous devrez vérifier si la durée est de - de 500, si c'est le cas, alors vous effectuez un reject avec le message suivant et vous l'affichez:
* "Perdu pas assez longtemps"
* Dans le cas où c'est + de 500, vous faites un setTimeout (de la durée reçue en paramètre) où vous ferez un resolve avec le message suivant et vous l'affichez:
* "Respiration retenue pendant: ${duration}ms !"
Les durées à vérifier dans l'ordre sont :
1200
2000
580
700
220
1800
*/

/*
*ma version
const breath = (duration) => {
    return new Promise((resolve, reject) => {
        if (duration < 500) {
            reject(`Error: respiration retenue pendant: ${duration}ms !`);
        } else {
            setTimeout(() => {
                resolve(`Respiration retenue pendant: ${duration}ms !`);
            }, duration)
        }
    });
}

const durations = [1200, 2000, 580, 700, 220, 1800];

durations.map((duration) => {
    breath(duration)
    .then((message) => console.log(message))
    .catch((error) => console.error(error))
})
*/

/*
*correction du formateur
*/

/*
const breath = (duration) => {
    return new Promise((resolve, reject) => {
        if (duration > 500) reject("Perdu, pas assez de temps");
        setTimeout(() => {
            resolve(`Respiration retenue pendant: ${duration}ms !`);
        }, duration);
    });
};

breath(1200)
.then((result) => {
    console.log(result);
    return breath(2000);
})
.then((result) => {
    console.log(result);
    return breath(580);
})
.then((result) => {
    console.log(result);
    return breath(700);
})
.then((result) => {
    console.log(result);
    return breath(220);
})
.then((result) => {
    console.log(result);
    return breath(1800);
})
.catch((err) => console.error(err));
*/

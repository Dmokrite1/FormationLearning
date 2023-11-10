/*
*async - await
*function async attend de recevoir les données ainsi que de pouvoir les traitées sans stopper l'application
*/

async function myFunction(){
    return "hello"
};

myFunction().then((result) => console.log(result));

const myOtherFunction = async () => {
    return "world"
}

myOtherFunction().then((result) => console.log(result))

/*
*nous pouvons créées des promesses
*/

const myThirdFunction = async () => {
    return Promise.resolve("Amand - in - game")
}

myThirdFunction().then((result) => console.log(result))

/*
*async nous assure de renvoyer une promesse, async a besoin d'un 2ieme mots clés pour être complète le await
*/

const awaitFunction = async() => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Amaury attend cela"),8000)
    })
    let result = await promise //la function fait une pause jusqu'à ce que la promesse soit résolu et renvoi le résultat
    console.log(result);
}

awaitFunction()

/*
*Try-Catch vérifie si notre code fonctionne, si pas il renvoi une erreur
*/

const addition = (a,b) => {
    if(typeof a === "number" && typeof b === "number"){
        return a+b;
    }else{
        throw new Error("les deux params doivent être des nombres");
    }
}
//ici la function réussie
try{
    const result = addition(1,2);
    console.log("addition", result);
}catch(err){
    console.error(err);
}
//ici la function va raté
try{
    const result = addition(1, "deux")
    console.log(('addition', result));
}catch(err){
    console.error(err)
}finally{
    console.log("fin de l'addition");
}


/*
*async et try catch
*/

const soustraction =  async (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a - b;
    } else {
        throw new Error("les deux params doivent être des nombres");
    }
}

const result1= soustraction(1,2)
const result2 = soustraction(1, "trois")

const tryCatchMethod = async (result)=>{
    try {
        await result;
        console.log(await soustraction (1,2));
        console.log(result);
    } catch (error) {
        console.log("Erreur dans la soustraction");
        console.error(error);
    }
}

tryCatchMethod(result1);
tryCatchMethod(result2);

async function getUrl(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        throw new Error("tu te fous de qui?");
    } catch (err) {
        console.error(err);
    }
}

getUrl("https://jsonplaceholder.typicode.com/todos");
getUrl("http://no-such-url")

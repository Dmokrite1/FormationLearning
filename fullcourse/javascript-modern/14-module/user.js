/*
* function qui retourne un objet
*/
const user = (username, email, website)=>{
    return{
        username,
        email,
        blog: website
    }
}

/*
*function qui retourne un email
*/
const createMyAvatar = (email)=>{
    return `https://lescrados.com/avatar/${email}`
}

const john = {
    username: "John",
    email: "j.doe@hotmail.com",
    website: "https://john.com"
}

//ici dans l'export on renomme createMyAvatar en createA qui sera use dans l'import
export{user, john, createMyAvatar as createA}
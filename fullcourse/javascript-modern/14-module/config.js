/*
*exporter une variable
*/
export const url = "https://triptyk.eu";

/*
*exporter une function, (??)= par défaut la donnée dérrière sera executé si lien est = à undefined
*/
export const myUrl = (lien) =>{
    const currentUrl = lien ?? "https://www.amazon.be";
    return currentUrl;
}

/*
*lorsque l'on a un élément seul dans un fichier nous pouvons passer par le default
*/
export default{
    user: "John",
    pwd: "Backend"
}
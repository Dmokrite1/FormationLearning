class application{
    constructor(url, token){
        this.url = url;
        this.token = token;
        this.response = document.querySelector(".container h2")
        this.answer = document.querySelector(".container p")
    }
    init(){
        this.getJoke
    }
    getJoke(){
        fetch(this.url,{
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then((result) => result.json()).then((data) =>{
            console.log(data);
            this.joke = data;
            this.render();
        })
    }
    render(){
        this.response.innertext = this.joke.joke;
        this.answer.innertext = this.joke.answer
    }
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzY5NTI3NDk2NzMwMjE0NDMxIiwibGltaXQiOjEwMCwia2V5IjoiRjRNT205UXUxcW9RSzMwNXp2Sm5yQTRMdE9rUXBXcjdRbnJlZTJVNHUwS2tHT2lEUm4iLCJjcmVhdGVkX2F0IjoiMjAyMy0wMy0xNFQyMToyMDo1NSswMDowMCIsImlhdCI6MTY3ODgyODg1NX0.8g5w2SLwtX9OpbrMM3Bnlkvi0Fo7_PXJWNgAB_g6OB4";
const url = "https://www.blagues-api.fr/api/type/dark/random";
const app = new application(url, token);
app.init

document.querySelector(".container button").addEventListener("click", ()=>{
    app.getJoke()
})
const fruit: string = "banane";
const color = "mauve";  // Pas obligé de typé l'évidence, il sait que c'est un string

let myNumber: number = 42;
let isActive: boolean = true;

let example: string | number = '42';
example = 42 // On peut le réassigner comme number

const alcool: string[] = ['Chartreuse', 'rhum'];
//const alcool: Array<string> = ['Chartreuse', 'rhum'];

const jerk: Array<string | number> = [42, "banane"]; // Tableau avec string et/ou number

/*
*Tuple, tableau qui a un nombre défini d'élément
*/

const tuple: [number, string] = [42, "H2G2"];
//object javascript
const player: object = {
    name: 'Ninja',
    toString: () => 
        "player: Ninja",
}

const colorRGB: {
    red: number,
    green: number,
    blue: number,
    //le ? rend la propriété optionnelle
    opacity?:number,
} = {
    red:255,
    blue: 255,
    green: 47,
    opacity: 1
}

/*
*Enum
*/

const enum Roles {
    User = "user",
    Admin = "admin"
}

const adminRole: Roles = Roles.Admin;

/*
* Function
*/

function sum(a:number, b:number): number {
    return a + b;
}

let result = sum(40, 2);
// same example with more type
function sum1(a:number, b:number): number {
    return a + b;
}
// void ne renvoi rien (on pourra log mais rien return)
function bark():void {
    console.log('bark');  
}

let result1: number = sum1(40, 2);
// typescript comprends que si c'était un string avant ma variable devient un number
function weirdSum(number1: string | number, number2: number): number {
    if(typeof number1 ==='string') {
        number1 = Number(number1)
    }
    return number1 + number2
}
// Les arguments optionnelles(?) doivent toujours se trouvé à la fin des arguments
function stringify(nbr: number, lastArg?: boolean, turnToSentence?: boolean) {
    if(turnToSentence) {
        return `${nbr} est un nombre`
    }
    return Number.toString();
}
// On n'est pas obligé de spécifier le deuxième argument car la propriété est optionnelle
const nbrAsString = stringify(42);
const nbrAsSentence = stringify(42, undefined, true);
const nbrTest = stringify(42, true);

function infiniteSum(...numberList: number[]) {
    let result = 0;
    console.log('liste de nombre', numberList);
    
    for(const nbr of numberList) {
        result += nbr
    }
    return result;
}

infiniteSum(2, 2, 4);
infiniteSum(40, 2);
infiniteSum(40, 40, 160, 1097);
// Mauvaise façon de faire
const badWay: any = 'pas terrible';
// Bonne façon de faire
let goodway: unknown = 'inconnu';
if (typeof goodway === 'string') {
    goodway = goodway.toUpperCase
}

function effectuerAppelAPI(callback: () => void): void {
    // Logique de l'appel API asynchrone, si vous avez une fonction de rappel à utiliser dans des opérations asynchrones et que cette fonction de rappel ne renvoie pas de résultat, vous pouvez la typer avec void.
    callback(); 
}

function gift(age: number, opengift: (name: string, age:number)=> void){
    opengift('chatgpt', age);
}
gift(1, (name: string, age: number)=>{
    console.log(`Joyeux anniversaire ${name}, tu as ${age} ans`);
    return;
})

/*
* Assertions 
/ prudence, les assertions de type doivent être utilisées avec prudence, car elles contournent la vérification de type statique du compilateur. Si l'assertion est incorrecte, cela peut entraîner des erreurs d'exécution.
*/

const varUnknown: unknown = "banane";
const password: string = varUnknown as string;

// ne pas faire 
const fakeNBR = "20" as unknown as number;
//console.log(fakeNBR.toFixed());

type ViewMode = 'list' | 'grid' | 'kanban';
type User = {
    firstname: string,
    lastname: string,
    age: number
}

const viewMode: ViewMode = 'grid';
const viewUserList: ViewMode = 'list'

const newUser: User = {
    firstname: "Dirk",
    lastname: "Vadehors",
    age: 42
}

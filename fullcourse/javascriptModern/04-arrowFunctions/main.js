let cafetiere = '';

const parentFunction = (childFunction) =>{
    cafetiere = '... et cherche toujours le bouton de la cafetiere';
    setTimeout(() => {
        console.log('maxhime est un backend');
        childFunction();
        (() => {console.log(cafetiere);      //  <===== function anonyme
        })();

    }, 2000);
    console.log("voici mascime");
};

/*
const childFunction = () => {
    console.log("il est expert en drop sql et en rm -rf *");
};
*/

const childFunction=()=> console.log('il est expert en drop sql et en rm -rf *');

parentFunction(childFunction);

const x = 2;
const y = 3;
const z = 4;

const addition = () => x+y+z;

console.log(addition());

const multiple = (a)=> a*x;
console.log(multiple(2));

const soustraction = (a,b) => a- b- x;
console.log(soustraction(10,y));

const add = (a,b) => {
    let e = 0;
    e=a+b;
    e=b+y;
    return e;
}
console.log('add', add(2,5));

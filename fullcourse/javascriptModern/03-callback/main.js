/*
*function callback 
est une function passée dans une autre function en tant qu'argument,
qui est ensuite summon à l'intérieur de la function iexterne pour accomplir une routine ou une action
*/

function parentFunction(childFunction){
    setTimeout(() => {
        console.log('maxim est un backend');
        childFunction();
    }, 2000);
    console.log("voici maxime");
};

function childFunction(){
    console.log("il est expert en drop sql et en rm -rf *");
};
parentFunction(childFunction);

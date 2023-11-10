/*
*ma façon qui fonctionne
*/

/*
const presentation = 'Bienvenue parmi nous';
let triptyk = ['sacha', 'patrick', 'maxime', 'gilles', 'sebastien'];

function usePresentation(personne, hi) {
    setTimeout(() => {
    console.log(`${presentation}, ${personne}!`);
    hi();
    }, 500);
    }

const hiAll = (i) => {
    if (i < triptyk.length) {
        usePresentation(triptyk[i], () => {
            hiAll(i + 1);
        });
    }
}

hiAll(0);
*/

/*
*correction
*/

const welcome = 'Bienvenue parmi nous';
let triptyk = ['sacha', 'patrick', 'maxime', 'gilles', 'sebastien'];

const seeWelcome = (welcome) => welcome;

const name = (team, seeWelcome) => {
    for (let i = 0; i < triptyk.length; i++) {
        const fullMessage = `${seeWelcome(welcome)} ${triptyk[i]}`;
        setTimeout(() => console.log(fullMessage), (i + 1) * 500); 
    }
}

name('team', seeWelcome);




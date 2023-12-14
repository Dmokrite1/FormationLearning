/*
import { EventEmitter } from "events";

const eCampus = new EventEmitter();
let count = 10;

function countdown() {
    const startCountdown = setInterval(() => {
        console.log(`Décompte: ${countdown}s`);
        count--;

        if (count === 0) {
            clearInterval(startCountdown);
            eCampus.emit('password');
        }
    }, 1000);
}

eCampus.on('password', () => {
    const correctPassword = 'campus'
    const testPassword = 'campus'

    if (testPassword === correctPassword) {
        console.log("Félicitations !! Vous avez sauvé l'E-Campus");
    }else{
        console.log("Mauvais password !! So long everybody");
    }
})

countdown();
*/

import { EventEmitter } from "stream";
import readline from 'readline';

const eCampus = new EventEmitter();
let count = 10;

function startCountdown() {
    const countdownInterval = setInterval(() => {
        console.log(`Décompte: ${count}s`);
        count--;

        if (count === 0) {
            clearInterval(countdownInterval);
            eCampus.emit('countdownEnd');
        }
    }, 1000);
}

function promptForPassword() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Entrez le mot de passe : ', (enteredPassword) => {
        rl.close();
        
        const correctPassword = 'campus';

        if (enteredPassword === correctPassword) {
            eCampus.emit('passwordCorrect');
        } else {
            eCampus.emit('passwordIncorrect');
        }
    });
}

startCountdown();

eCampus.on('countdownEnd', () => {
    console.log('Le décompte est terminé. Veuillez entrer le mot de passe.');
    promptForPassword();
});

eCampus.on('passwordCorrect', () => {
    console.log("Félicitations !! Vous avez sauvé l'E-Campus");
});

eCampus.on('passwordIncorrect', () => {
    console.log("Mauvais password !! So long everybody");
});


/*
import { EventEmitter } from "stream";

const bombPassword = 'bomb';
const bomb = new EventEmitter();

bomb.on('passwordRequest', () => {
    console.log('Entrez le mot de passe :');
    process.stdin.once('data', (data) => {
        let password = data.toString().trim();
        if (password === bombPassword) {
            bomb.emit('desactivated'); // Correction ici
        } else {
            bomb.emit('explode');
        }
    });
});

bomb.once('desactivated', () => {
    console.log("J'aurais pas parié sur toi !!");
});

bomb.once('explode', () => {
    console.log("So long everybody");
});

let secondeBeforeExplode = 10;

const bombInterval = setInterval(() => {
    if (secondeBeforeExplode > 0) { // Correction ici
        console.log(`il reste ${secondeBeforeExplode} secondes avant explosion`);
    } else {
        clearInterval(bombInterval);
        console.log('So long everybody');
    }
    secondeBeforeExplode--;
}, 1000);
*/

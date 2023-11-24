const apiUrl = 'https://pokebuildapi.fr/api/v1';

// Fonction pour obtenir un nombre aléatoire entre min et max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour obtenir 50 Pokémon de manière aléatoire
async function getRandomPokemons() {
    const randomPokemons = [];

    for (let i = 0; i < 50; i++) {
        const randomId = getRandomNumber(1, 898); // Il y a actuellement 898 Pokémon
        const pokemonUrl = `${apiUrl}/pokemon/${randomId}`;
        
        try {
            const response = await fetch(pokemonUrl);
            const data = await response.json();
            randomPokemons.push(data);
        } catch (error) {
            console.error(`Erreur lors de la récupération du Pokémon ${randomId}: ${error.message}`);
        }
    }

    return randomPokemons;
}

getRandomPokemons().then(randomPokemons => {
    console.log(randomPokemons);
});

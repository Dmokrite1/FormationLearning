/*
* version corrigé
*/

// Effectue une requête GET à l'API Triptyk
fetch('https://triptyk-api-dev.triptyk.eu/api/v1/posts', {
    method: 'GET',
}).then(response => {
    // Traite la réponse en tant que texte
    response.text().then(stringResponse => {
        // Parse le texte de la réponse en JSON
        const responseAsJson = JSON.parse(stringResponse) as {
            data: {
                attributes: {
                    title: string;
                }
            }[]
        };

        // Affiche dans la console les titres extraits de la réponse JSON
        console.log(responseAsJson.data.map(entity => entity.attributes.title));
    })
})

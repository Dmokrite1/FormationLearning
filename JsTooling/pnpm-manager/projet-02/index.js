import { Image } from 'image-js';

export async function transformImg(degrees) {
        // Charger l'image de manière asynchrone
        let img = await Image.load('otter_banana.png');

        // Appliquer la conversion en niveaux de gris et la rotation
        let grey = img.grey().rotate(degrees);

        // Sauvegarder l'image transformée de manière asynchrone
        await grey.save('dilatedImg.png');
}

import { transformImg } from "projet-02";

let numberDegrees = process.argv[2];

console.log('vous avez passé', numberDegrees, "°");

numberDegrees = parseInt(numberDegrees);

if (numberDegrees < 0) {
    console.log('le nombre doit être positif');
    process.exit(1);
}

transformImg(numberDegrees)
  .then(() => console.log("Dilaté avec succès"))
  .catch(error => console.log('Erreur :', error));

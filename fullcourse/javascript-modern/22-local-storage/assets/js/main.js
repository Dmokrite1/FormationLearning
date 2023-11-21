import Accueil from "./components/accueil.js";
import Header from "./components/header.js";
import Store from "./services/store.js";

customElements.define("main-home", Accueil);
customElements.define("main-header", Header);

const form = document.querySelector('form');
const store = new Store(); // Créez une instance de Store

// Ajout de l'événement submit au formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const yearValue = parseInt(this.querySelector('#year').value, 10);
    const ratingValue = parseInt(this.querySelector('#rating').value, 10);

    if (!this.querySelector('#name').value || !this.querySelector('#author').value || !this.querySelector('#year').value || !this.querySelector('#rating').value || !this.querySelector('#comment').value) {
        alert('Veuillez remplir tous les champs');
        return;
    }

    // Vérification si les valeurs sont des nombres positifs
    if (isNaN(yearValue) || yearValue < 0 || isNaN(ratingValue) || ratingValue < 0) {
        alert('Veuillez entrer des valeurs numériques positives pour l\'année et la note.');
        return;
    }

    store.addBook({
        name: this.querySelector('#name').value,
        author: this.querySelector('#author').value,
        year: yearValue,
        rating: ratingValue,
        comment: this.querySelector('#comment').value
    });

    this.reset();
});

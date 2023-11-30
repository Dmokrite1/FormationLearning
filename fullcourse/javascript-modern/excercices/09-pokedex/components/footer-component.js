class FooterComponent extends HTMLElement {
    constructor() {
        super();

        // Créez un Shadow DOM
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
                // Définissez le contenu HTML et CSS du composant
                this.shadowRoot.innerHTML = `
                <div>
                    <img src="./img/pok.jpg" alt="Logo">
                </div>
                <div class="user-cards">
                    <div class="user-card">User 1</div>
                    <div class="user-card">User 2</div>
                    <div class="user-card">User 3</div>
                </div>
            `;
    }
}

// Enregistrez le composant personnalisé
customElements.define('footer-component', FooterComponent);
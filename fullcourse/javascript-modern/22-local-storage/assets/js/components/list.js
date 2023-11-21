import Store from "../services/store.js";

export default class List extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1 class="text-4xl my-8 text-center bg-blue-200">Liste des livres</h1>
            <ul class="list w-full mt-8"></ul>`;
        
        // Appel de la méthode deleteItem
        this.deleteItem();
    }

    generateList = (list) => {
        const store = new Store();
        const books = store.getBooks();
        list.innerHTML = "";

        if (!books.length) {
            list.innerHTML = "Il n'y a pas de livre";
            return;
        }

        for (const book of books) {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="flex w-1/2 justify-between mt-1 bg-blue-200">
                    <p>${book.author} - ${book.comment} - ${book.title} - ${book.year} || ${book.rating}/10</p>
                    <button class="delete-btn text-red-600" id="${book.title}">X</button>
                </div>`;
            list.appendChild(li);
        }
        this.deleteItem()
    }

    deleteItem = () => {
        const list = document.querySelector('.list');
        const deleteBtn = document.querySelectorAll('.delete-btn');
        
        deleteBtn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const store = new Store();
                store.deleteOneBook(e.target.id);
                this.generateList(list);
            });
        });
    }
}

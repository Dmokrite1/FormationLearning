import Store from "../services/store.js";
import Accueil from "../components/accueil.js";
import { describe, expect, test } from "vitest";
import { JSDOM } from 'jsdom';

class LocalStorageMock {
    constructor() {
        this.store = {}
    }

    getItem(key) {
        return this.store[key] || null
    }

    setItem(key, value) {
        this.store[key] = String(value)
    }

    removeItem(key) {
        delete this.store[key]
    }
}

global.localStorage = new LocalStorageMock();

const store = new Store();

describe("test main page", () => {
    test('it adds a new book', () => {
        customElements.define("main-home", Accueil);
        const dom = new JSDOM('<body></body>');
        dom.window.document.body.appendChild(new Accueil());
        const name = dom.window.document.querySelector('input[name="name"]');
        const year = dom.window.document.querySelector('input[name="year"]');
        const rating = dom.window.document.querySelector('input[name="rating"]');
        const author = dom.window.document.querySelector('input[name="author"]');
        const comment = dom.window.document.querySelector('textarea[name="comment"]');
        name.value = "test";
        year.value = 1998;
        rating.value = 6;
        author.value = "truc";
        comment.value = "truc et machin";
        const form = dom.window.document.querySelector('form')
        form.addEventListener('submit', function (e) {
            const formData = new FormData(this)
            e.preventDefault()
            store.addBook({
                name: formData.get('name'),
                year: Number(formData.get('year')),
                rating: Number(formData.get('rating')),
                author: formData.get('author'),
                comment: formData.get('comment')
            })
        })
        const submitEvent = new dom.window.Event('submit')
        form.dispatchEvent(submitEvent)
        expect(store.getBooks()).toEqual([{ title: "test", year: 1998, rating: 6, author: "truc", comment: "truc et machin"}])
    })
})

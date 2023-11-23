import Store from "../services/store.js"
import { describe, expect, test, beforeEach} from "vitest"

class LocalStorageMock{
    constructor(){
        this.store = {}
    }

    clear(){
        this.store = {}
    }

    getItem(key){
        return this.store[key] || null
    }

    setItem(key, value){
        this.store[key] = String(value)
    }

    removeItem(key){
        delete this.store[key]
    }
}

global.localStorage = new LocalStorageMock();

const booksForDeleteTest = [
    {title: 'test', year: 2021, rating:5, author:"Jacques", comment: "rsfsfzf"},
    {title: 'test1', year: 2021, rating:5, author:"Marcel", comment: "svsgszgvsg"},
    {title: 'test2', year: 2021, rating:5, author:"PetitPied", comment: "sgvsgvsgv"}
]

beforeEach(()=>{
    localStorage.clear()
})

const store = new Store();

describe('test localStorage', ()=>{
    test('its return empty array if no element found', ()=>{
        const books = store.getBooks();
        expect(books).toEqual([])
    })

    test('its adding an element to the store', ()=>{
        store.addBook({name: "test3", year:2023, rating:5, author: "pouet", comment: "shut-up"})
        const books = store.getBooks()
        expect(books).toEqual([{title: "test3", year:2023, rating:5, author: "pouet", comment: "shut-up"}])
    })

    test('its deleting an element to the storage', ()=>{
       localStorage.setItem('books', JSON.stringify(booksForDeleteTest)) 
       store.deleteOneBook('test');
       const books = store.getBooks();
       expect(books).toEqual([
        {title: 'test1', year: 2021, rating:5, author:"Marcel", comment: "svsgszgvsg"}, 
        {title: 'test2', year: 2021, rating:5, author:"PetitPied", comment: "sgvsgvsgv"}
        ]) 
    })

    test("its deleting all elements to the storage", ()=>{
        localStorage.setItem('books', JSON.stringify(booksForDeleteTest))
        store.deleteBooks('test')
        const books = store.getBooks();
        expect(books).toEqual([]) 
    })
})

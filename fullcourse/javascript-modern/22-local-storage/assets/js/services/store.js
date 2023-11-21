export default class Store {
    getBooks(){
        let books;
        if(localStorage.getItem('books')===null){
            books = []
        }else{
            books = JSON.parse(localStorage.getItem('books'))  //Récupère et parse (converti en tableau/objet)
        }
        return books
    }

    addBook({author,name, year, rating, comment}){
        const books = this.getBooks();
        books.push({
            title: name,
            author,
            year,
            rating,
            comment
        })
        localStorage.setItem("books", JSON.stringify(books)) //set les livres et les convertis en string
    }

    deleteOneBook(title) {
        const books = this.getBooks();
        const updatedBooks = books.filter(book => book.title !== title);// Filtrer les livres pour ne conserver que ceux dont le titre ne correspond pas à celui à supprimer
        
        localStorage.setItem('books', JSON.stringify(updatedBooks)); // Mettre à jour le localStorage avec la nouvelle liste de livres
    }

    deleteBooks(){
        localStorage.removeItem('books')
    }
}

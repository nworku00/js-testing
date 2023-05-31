class Library  {
    constructor() {
    this.books=[]
    }
    displayBooks() {
        return this.books
    }
    addBooks(book) {
        this.books.push(...book)
    }
    issueBooks(book) {
        let foundBook = this.books.find(b => b.title == book)
        return foundBook ? this.books.pop() : 'book not found';
    }
}

module.exports = {
    Library
}
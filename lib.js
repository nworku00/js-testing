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
        return foundBook ? foundBook.quantity-- : 'book not found';
    }
    returnBooks(book) {
        let foundBook = this.books.find(b => b.title == book)
        return foundBook ? foundBook.quantity++ : 'wrong library four-eyes';
    }
}

module.exports = {
    Library
}
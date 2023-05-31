const { Library } = require('./lib');
describe('The Library', () => {
    test('contains books', () => {
        let library = new Library()
        expect(library.displayBooks()).toEqual([])
    });
    test('adds books', () => {
        let library = new Library()
        library.addBooks([{title:'Percy Jackson', author:'Rick'}])
        expect(library.displayBooks()).toEqual([{title:'Percy Jackson', author:'Rick'}])
    })
    test('issue books', () => {
        let library = new Library()
        library.addBooks([{ title: 'Percy Jackson', author: 'Rick' }])
        library.issueBooks('Percy Jackson')
        expect(library.displayBooks()).toEqual([])
    })
})
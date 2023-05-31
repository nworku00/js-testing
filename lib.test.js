const { Library } = require('./lib');
describe('The Library', () => {
    test('contains books', () => {
        let library = new Library()
        expect(library.displayBooks()).toEqual([])
    });
    test('adds books', () => {
        let library = new Library()
        library.addBooks([{title:'Percy Jackson', author:'Rick', quantity:5}])
        expect(library.displayBooks()).toEqual([{title:'Percy Jackson', author:'Rick', quantity:5}])
    })
    test('issue books', () => {
        let library = new Library()
        library.addBooks([{ title: 'Percy Jackson', author: 'Rick', quantity:5 }])
        library.issueBooks('Percy Jackson')
        expect(library.displayBooks()).toEqual([{ title: 'Percy Jackson', author: 'Rick', quantity:4 }])
    })
    test('return books', () => {
        let library = new Library()
        library.addBooks([{ title: 'Percy Jackson', author: 'Rick', quantity:5 }])
        library.issueBooks('Percy Jackson')
        library.returnBooks('Percy Jackson')
        expect(library.displayBooks()).toEqual([{ title: 'Percy Jackson', author: 'Rick', quantity:5 }])
    })
    
})
const { multiply, add, subtract } = require('./add');
describe('check numbers function', () => { 
    test('expect product of 2 numbers', () => {
        expect(multiply(4,3)).toBe(12)
    })
    test('negative check', () => {
        expect(multiply(4,-3)).toBe('no negatives')
    })
    test('sum', () => {
        expect(add(4,3)).toBe(7)
    });
    test('expect diff of 2 numbers', () => {
        expect(subtract(4,3)).toBe(1)
    })
    test('sub negative check', () => {
        expect(subtract(4,13)).toBe('no negative differences')
    })
 })

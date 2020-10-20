const calculator = require('./calculator')

test('Adding', () => {
    expect(calculator.add(3, 5)).toBe(8);
})

test('Subtract', () => {
    expect(calculator.subtract(9, 4)).toBe(5);
})

test('Multiply', () => {
    expect(calculator.multiply(5, 2)).toBe(10);
})

test('Divide', () => {
    expect(calculator.divide(8, 2)).toBe(4);
})
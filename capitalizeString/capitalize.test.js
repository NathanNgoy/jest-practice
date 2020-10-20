const capitalize = require('./capitalize')

test('Capitalize first letter of string', () => {
    expect(capitalize('capitalize this sentence')).toBe('Capitalize this sentence')
})

test('Must input a string', () => {
    expect(capitalize(111)).toBe('Please input a string')
})
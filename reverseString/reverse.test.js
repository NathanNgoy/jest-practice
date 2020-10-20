const reverse = require('./reverse')

test('Reverse string #1', () => {
    expect(reverse('reverse this')).toBe('siht esrever');
})

test('Reverse string #2', () => {
    expect(reverse('How does this look')).toBe('kool siht seod woH');
})

test('Should only work with string' , () => {
    expect(reverse(111)).toBe('Please input a string');
})
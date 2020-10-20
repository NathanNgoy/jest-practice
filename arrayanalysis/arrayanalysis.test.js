const analysis = require('./arrayanalysis')
const array = [1, 2, 3, 4, 6]

test("returns object: average, min, max, length", () => {
    const expectedResult = {
        average: 3.2,
        min: 1,
        max: 6,
        length: 5
    }

    expect(analysis(array)).toEqual(expectedResult);
})
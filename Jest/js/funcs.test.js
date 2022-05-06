const calc = require('./funcs')

test("Calculate sum of 5 and 3", () => {
    expect(calc(5,3)).toBe(15);
});
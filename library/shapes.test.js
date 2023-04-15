const shapes = require("./shapes.js");

// Example test, run with "npx jest ./library/shapes.test.js"
describe("Triangle", () => {
    it("should return 'triangle'", () => {
        const newTriangle = new shapes.Triangle();

        expect(newTriangle.debug()).toEqual("triangle");
    });
});
const shapes = require("./shapes.js");

// run with "npx jest ./library/shapes.test.js"
describe("Render shape", () => {
    describe("Circle", () => {
        it("should produce a line of svg that creates a circle", () => {
            const circle = new shapes.Circle("abc", "white", "blue");
            const shapeLine = circle.render();
            const correctCode = `<circle cx="150" cy="100" r="80" fill="blue" />`

            expect(shapeLine).toEqual(correctCode);
        });
    });
    describe("Triangle", () => {
        it("should produce a line of svg that creates a triangle", () => {
            const triangle = new shapes.Triangle("abc", "white", "blue");
            const shapeLine = triangle.render();
            const correctCode = `<polygon points="50,150 150,0 250,150" fill="blue" />`

            expect(shapeLine).toEqual(correctCode);
        });
    });
    describe("Square", () => {
        it("should produce a line of svg that creates a square", () => {
            const square = new shapes.Square("abc", "white", "blue");
            const shapeLine = square.render();
            const correctCode = `<rect x="75" y="25" width="150" height="150" fill="blue" />`

            expect(shapeLine).toEqual(correctCode);
        });
    });
});



describe("Render framework", () => {
    describe("Circle", () => {
        it("should produce an entire svg element for a circle", () => {
            const circle = new shapes.Circle("abc", "white", "blue");
            const circleFrame = circle.renderFramework();
            const correctFramework = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="blue" />

    <text x="150" y="115" font-size="60" text-anchor="middle" fill="white">abc</text>

</svg>`;

            expect(circleFrame).toEqual(correctFramework);
        });
    });
});
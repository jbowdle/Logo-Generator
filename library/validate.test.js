const Validate = require("./validate.js");

// run with "npx jest ./library/validate.test.js"
describe("Text validation", () => {
    describe("Text longer than 3 characters", () => {
        it("should return an error message", () => {
            const validate = new Validate();
            const result = validate.validateText("longstring");

            expect(result).toEqual("Text must be 3 characters or less");
        });
    }); 
    describe("Text has three character", () => {
        it("should return true", () => {
            const validate = new Validate();
            const result = validate.validateText("abc");

            expect(result).toEqual(true);
        });
    }); 
}); 

describe("Color validation", () => {
    describe("Invalid color input", () => {
        it("should return an error message", () => {
            const validate = new Validate();
            const result = validate.validateColor("notAColor");

            expect(result).toEqual("Invalid color");
        });
    });
    describe("Valid color input", () => {
        it("should return true", () => {
            const validate = new Validate();
            const result = validate.validateColor("black");

            expect(result).toEqual(true);
        });
    });
    describe("Valid color input with whitespace and capitalization", () => {
        it("should return true", () => {
            const validate = new Validate();
            const result = validate.validateColor("  L i  Ght Yello w   ");

            expect(result).toEqual(true);
        });
    });
});
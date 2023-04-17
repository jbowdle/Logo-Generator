const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./library/shapes.js");
const Validate = require("./library/validate.js");

// checks if text is three characters or less
const validateText = new Validate().validateText;
// checks if colors matches list of valid colors
const validateColor = new Validate().validateColor;

// removes all whitespace and changes to lowercase from the input
// regex expression: /s denotes whitespace, + matchs one or more of /s, g makes the search iterative
const inputCorrector = function(input) {
    return input.replaceAll(/\s+/g, '').toLowerCase();
}

const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter logo text (must be three characters or less):",
        validate: validateText,
    },
    {
        type: "input",
        name: "textColor",
        message: "Please enter text color:",
        validate: validateColor,
    },
    {
        type: "list",
        name: "shape",
        message: "Please choose a shape:",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please choose the color of the shape:",
        validate: validateColor,
    },
]

console.log("Welcome to the logo generator!");
inquirer   
    .prompt(questions)
    .then((data) => {
        const filename = `./examples/logo.svg`;

        // removes spaces and converts to lowercase to ensure colors can be used in the svg file
        const textColor = inputCorrector(data.textColor);
        const shapeColor = inputCorrector(data.shapeColor);

        // variable to hold the xml code for the svg file
        let framework;

        switch (data.shape) {
            case "circle":
                framework = new shapes.Circle(data.text, textColor, shapeColor).renderFramework();
                break;
            case "triangle":
                framework = new shapes.Triangle(data.text, textColor, shapeColor).renderFramework();
                break;
            case "square":
                framework = new shapes.Square(data.text, textColor, shapeColor).renderFramework();
                break;
        }

        fs.writeFile(filename, framework, (err) =>
            err ? console.error(err) : console.log("Generated logo.svg"));
    });
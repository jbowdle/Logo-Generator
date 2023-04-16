// TODO: link in validateText
// figure out way to allow users to redo prompts that fail the validators

const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./library/shapes.js");
const Validate = require("./library/validate.js");

const validateColor = new Validate().validateColor;

const inputCorrector = function(input) {
    return input.replaceAll(/\s+/g, '').toLowerCase();
}

const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter logo text (must be three characters or less):"
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
        const filename = `./examples/${data.text}.svg`;

        const textColor = inputCorrector(data.textColor);
        const shapeColor = inputCorrector(data.shapeColor);
        let framework;

        switch (data.shape) {
            case "circle":
                framework = new shapes.Circle(data.text, textColor, shapeColor).render();
                break;
            case "triangle":
                framework = new shapes.Triangle(data.text, textColor, shapeColor).render();
                break;
            case "square":
                framework = new shapes.Square(data.text, textColor, shapeColor).render();
                break;
        }

        fs.writeFile(filename, framework, (err) =>
            err ? console.error(err) : console.log("Logo generated!"));
    });
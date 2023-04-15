const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./library/shapes.js");

const newCircle = new shapes.Circle();
const newTriangle = new shapes.Triangle();
const newSquare = new shapes.Square();

newCircle.debug();
newTriangle.debug();
newSquare.debug();

const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter logo text (must be three characters or less):"
    },
    {
        type: "input",
        name: "text-color",
        message: "Please enter text color:"
    },
    {
        type: "list",
        name: "shape",
        message: "Please choose a shape:",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input",
        name: "shape-color",
        message: "Please choose the color of the shape:"
    },
]

console.log("Welcome to the logo generator!");
inquirer   
    .prompt(questions)
    .then((data) => {
        const filename = `./examples/${data.text}.svg`;

        fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
            err ? console.error(err) : console.log("Logo generated!"));
    });
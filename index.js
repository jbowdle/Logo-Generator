const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./library/shapes.js");

const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter logo text (must be three characters or less):"
    },
    {
        type: "input",
        name: "textColor",
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
        name: "shapeColor",
        message: "Please choose the color of the shape:"
    },
]

console.log("Welcome to the logo generator!");
inquirer   
    .prompt(questions)
    .then((data) => {
        const filename = `./examples/${data.text}.svg`;

        let framework;

        switch (data.shape) {
            case "circle":
                framework = new shapes.Circle(data.text, data.textColor, data.shapeColor).render();
                break;
            case "triangle":
                framework = new shapes.Triangle(data.text, data.textColor, data.shapeColor).render();
                break;
            case "square":
                framework = new shapes.Square(data.text, data.textColor, data.shapeColor).render();
                break;
        }

        fs.writeFile(filename, framework, (err) =>
            err ? console.error(err) : console.log("Logo generated!"));
    });
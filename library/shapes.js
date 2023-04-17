// TODO: 
// add shape class to extend classes?
// Refine shapeFrameworks

class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        throw new Error("Child class must implement a render() method");
    }

    renderFramework() {
        const shapeLine = this.render();

        const shapeFramework = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    ${shapeLine}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`;
        return shapeFramework;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

    render() {
        return `<polygon points="0,200 150,0 300,200" fill="${this.shapeColor}" />`;
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

    render() {
        return `<rect width="150" height="150" fill="${this.shapeColor}" />`;
    }
}

module.exports = {
    Circle: Circle,
    Triangle: Triangle,
    Square: Square
}
class Shape {
    constructor(){
        
    }
}

class Circle extends Shape {
    // debug
    debug() {
        console.log("circle");
        return "circle"
    }
}

class Triangle extends Shape {
    // debug
    debug() {
        console.log("triangle");
        return "triangle"
    }
}

class Square extends Shape {
    // debug
    debug() {
        console.log("square");
        return "square"
    }
}

module.exports = {
    Circle: Circle,
    Triangle: Triangle,
    Square: Square
}
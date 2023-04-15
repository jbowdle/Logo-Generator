class Shape {
    constructor(){
        
    }
}

class Circle extends Shape {
    // debug
    debug() {
        console.log("circle");
    }
}

class Triangle extends Shape {
    // debug
    debug() {
        console.log("triangle");
    }
}

class Square extends Shape {
    // debug
    debug() {
        console.log("square");
    }
}

module.exports = {
    Circle: Circle,
    Triangle: Triangle,
    Square: Square
}
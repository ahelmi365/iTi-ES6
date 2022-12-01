// console.log("Rectangle.js");

import { Shape } from "./Shape.js"

export class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }

    toString(){
        // console.log("toString() from rec");
        console.log(`The Area of this Rectangle is ${this.getArea()}`);
        console.log(`The Perimeter of this Rectangle is ${this.getPerimeter()}`);

    }
}
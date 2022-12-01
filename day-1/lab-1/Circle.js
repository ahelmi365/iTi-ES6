import { Shape } from "./Shape.js";

export class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.round((Math.PI) * (this.radius ** 2),2);
    }
    getPerimeter() {
        return Math.round( 2 * Math.PI * this.radius, 2);
    }

    toString(){
        console.log(`The Area of this Circle is ${this.getArea()}`);
        console.log(`The Perimeter of this Circle is ${this.getPerimeter()}`);

    }
}
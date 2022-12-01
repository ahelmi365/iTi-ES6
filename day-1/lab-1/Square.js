import { Shape } from "./Shape.js";

export class Square extends Shape{
    constructor(side){
        super();
        this.side = side;
    }

    getArea(){
        return this.side**2;
    }

    getPerimeter(){
        return this.side * 4;
    }

    toString(){
        console.log(`The Area of this Square is ${this.getArea()}`);
        console.log(`The Perimeter of this Square is ${this.getPerimeter()}`);

    }
}
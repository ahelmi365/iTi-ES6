// console.log("Main.js");

import { Shape } from "./Shape.js";
import { Rectangle } from "./Rectangle.js";
import { Square } from "./square.js";
import { Circle } from "./Circle.js";

var rec =  new Rectangle(10, 5);
// console.log(rec.getArea());
// console.log(rec.getPerimeter());
rec.toString()
// console.log(rec);

// document.write(rec)
// =====================

console.log("=====================");

var sqr = new Square(5);
sqr.toString();


console.log("=====================");

var circ =  new Circle(7);
// // console.log("🚀 ~ file: main.js:26 ~ circ", circ)
circ.toString();



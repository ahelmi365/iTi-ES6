var i = 10;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

console.log("-------------------------------------------------");
// -----------------------------------
var i = 10;

(function () {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
})()

console.log(i);

console.log("-------------------------------------------------");
// -----------------------------------

var i = 10;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

console.log("-------------------------------------------------");

function printVar() {
    var f = 100;
    console.log(f);
}
printVar()
console.log(f);

console.log("-------------------------------------------------");

if (4 > 2) {
    var s = "test"
}

console.log(s);

console.log("-------------------------------------------------");

if (4 > 2) {
    let s = "test"
}

console.log(s);

console.log("-------------------------------------------------");

if (4 > 2) {
    const s = "test"
}

console.log(s);

console.log("-------------------------------------------------");


const obj = {
    name: 'Ali',
    age: 33
}
obj.sport = "sporty"
console.log(obj);
console.log(Object.entries(obj));


console.log("-------------------------------------------------");



var s = "menna"

console.log(s.startsWith("m"));
console.log(s.endsWith("A"));
console.log(s.includes("m"));

console.log(`my name is ${s}`);


console.log("-------------------------------------------------");


let person = {
    name: "Ali",
    age: 33,

    printMe: function () {
        // console.log(this.name, this.age);
        setTimeout(function x() {
            // this here point to window opject
            console.log(this.name, this.age);
        }, 1000)
    }

}
person.printMe()

console.log("-------------------------------------------------");

person = {
    name: "Ali",
    age: 33,

    printMe: function () {
        let self = this; // self pattern / this pattern
        setTimeout(function () {
            console.log(self.name, self.age);
        }, 1000)
    }

}
person.printMe()

console.log("-------------------------------------------------");

person = {
    name: "Ali",
    age: 33,

    printMe: function () {
        setTimeout(() => { // using arrow function
            // this here point to the outer object <person>
            console.log(this.name, this.age);
        }, 1000)
    }

}
person.printMe()



console.log("-------------------------------------------------");

// destructring

// destructring lists
var arr = ["Ali", 35]

var [name, age] = arr;

console.log(name, age);
// --------------------


// destructring objects
var obj = {
    name: "Taha",
    age: 45
}

var { name: n, age: a } = obj;
console.log(n, a);

console.log("-------------------------------------------------");

// spread operator ...
var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]

var arr3 = [...arr1, ...arr2]

console.log(arr3);

console.log("-------------------------------------------------");
// spread operator ... with max,min 

var arr1 = [1, 2, 3]
console.log(Math.max(arr1)); // NaN
console.log(Math.max(...arr1));
console.log(Math.min(...arr1));
console.log(math.sum(...arr1));

console.log("-------------------------------------------------");



console.log("-------------------------------------------------");
// get sum of list-items using reduce function:
var arr1 = [1, 2, 3, 4]
const sum1 = arr1.reduce((a, b) => a + b, 0)
console.log(sum1);

// the same example explained with NO initial value=0:
var arr1 = [2, 4, 6, 8]
const sum2 = arr1.reduce((a, b) => {
    console.log(`a is ${a}, b is ${b}, a + b is ${a + b}`);
    return a + b;
});

console.log(sum2);

console.log("--------------------------");

// the same example explained:
var arr1 = [2, 4, 6, 8]
const sum3 = arr1.reduce((a, b) => {
    console.log(`a is ${a}, b is ${b}, a + b is ${a + b}`);
    return a + b;
}, 0);

console.log(sum3);

// get product of list-items using reduce function:
var arr1 = [1, 2, 3, 4]
const product = arr1.reduce((a, b) => a * b, 1)
console.log(product);
console.log(typeof product);


console.log("-------------------------------------------------");

// ...rest parameter : in function body only
// rest parameter must be last parameter

function test1(x, y, z) {
    console.log(arguments);
}

test1(1, 2, 3)


function test2(...myParams) {
    console.log(myParams);
}

test2(1, 2, 3)


console.log("-------------------------------------------------");

// array methods
// filter()

var arr1 = [1990, 1991, 1995, 1996, 1997, 1998, 1999, 2000]

var arr2 = arr1.filter(function (elm) {
    return elm > 1997;
});
console.log(arr2);

//  is the same as:
var arr3 = arr1.filter(elm => elm > 1997)
console.log(arr3);

console.log("-------------------------------------------------");

// array methods
// find()
// it returns the first element that matches the condition
// otherwise it returns undefined

var arr1 = [1990, 1991, 1995, 1996, 1997, 1998, 1999, 2000]

var element = arr1.find(elm => elm == 1991)

console.log(element);

console.log("-------------------------------------------------");

// array methods
// findIndex()
// returns the index of the first occurance that matches the condition
// Otherwise it retunrs -1


var arr1 = [1990, 1991, 1995, 1996, 1997, 1998, 1999, 2000]
var index = arr1.findIndex(elm => elm == 1998)

console.log(index);

console.log("-------------------------------------------------");

// array methods
// map()
var arr1 = [1987, 1991, 1995, 1996, 1997, 1998, 1999, 2000]
var thisYear = new Date().getFullYear();

var arr2 = arr1.map(elm => thisYear - elm)

console.log(arr1);
console.log(arr2);

console.log("-------------------------------------------------");

// array copy
// Array.from()
var arr1 = [1987, 1991, 1995, 1996, 1997, 1998, 1999, 2000]

var arr2 = Array.from(arr1);
console.log(arr1, arr2);
console.log(arr1 === arr2);


console.log("-------------------------------------------------");

// array method
// every()

var arr1 = [1991, 1995, 1996, 1997, 1998, 1999, 2000]

var allAbove1990 = arr1.every(elm => elm > 1990)
console.log(allAbove1990);

var allBelow2000 = arr1.every(elm => elm < 2000)
console.log(allBelow2000);

console.log("-------------------------------------------------");

// array method
// some()

var arr1 = [1991, 1995, 1996, 1997, 1998, 1999, 2000]

var anyAbove1999 = arr1.some(elm => elm > 1999);
console.log((anyAbove1999));

var anyBelow1991 = arr1.some(elm => elm < 1991);
console.log(anyBelow1991);

console.log("-------------------------------------------------");


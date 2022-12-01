
// Swap 2 var
var x = 5;
var y = 10

var [x, y] = [y, x];

console.log(x, y);
// ===========================================================

function getMaxMin(arr) {
    return [Math.max(...arr), Math.min(...arr)]
}

var myArr = [1, 2, 3, 4, 5, 6];

var [arrMax, arrMin] = getMaxMin(myArr);

console.log(arrMax);
console.log(arrMin);

// ===========================================================

var arr = ["apple", "strawberry", "banana", "orange", "mango"];
// console.log(typeof arr[0] === "Number");
console.log(arr);

// a. test that every element in the given array is a string
const isStaring = arr.every(elm => typeof elm === "string");
console.log(isStaring);


// b. test that some of array elements starts with "a"
const startWithA = arr.some(elm => elm.startsWith("a"));
console.log(startWithA);


// c. generate new array filtered from the given array 
// with only elements that starts with "b" or "s"

var startWithBorS = arr.filter(elm => elm.startsWith("b") | elm.startsWith("s"));
console.log(startWithBorS);


// d. generate new array each element of the new array contains a string
// declaring that you like the give fruit element

var newArr = arr.map(elm => `I like ${elm}`);
// console.log(newArr);

// e. use forEach to display all elements of the new array from previous point

newArr.forEach(elm => console.log(elm));

// ===========================================================






// ===========================================================

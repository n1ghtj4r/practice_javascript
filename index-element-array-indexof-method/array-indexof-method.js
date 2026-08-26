//array.indexOf(element, fromIndex)

let fruits = ["apple", "banana", "orange", "banana"];
let index = fruits.indexOf("banana");
console.log(index); // 1

//If the element you're searching for is not found in the array, indexOf() returns -1. For example
let fruits_1 = ["apple", "banana", "orange"];
let index_1 = fruits_1.indexOf("grape");
console.log(index_1); // -1

//second argument refers to staring index search
let colors = ["red", "green", "blue", "yellow", "green"];
let index_2 = colors.indexOf("green", 3);
console.log(index_2); // 4
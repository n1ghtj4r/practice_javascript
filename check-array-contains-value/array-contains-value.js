//checking string value from the array
let fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false

console.log("\n");

//checking string value from the array, case sensitive
let fruits_1 = ["apple", "banana", "orange"];
console.log(fruits_1.includes("banana")); // true
console.log(fruits_1.includes("Banana")); // false

console.log("\n");

//checking string value from the array, value and staring index of array
let numbers = [10, 20, 30, 40, 50, 30, 60];
console.log(numbers.includes(30, 3)); // true
console.log(numbers.includes(30, 4)); // true

console.log("\n");

//checking string value from the array, with string and integer values
let mixedArray = [1, "2", 3, "4", 5];
console.log(mixedArray.includes(2));  // false
console.log(mixedArray.includes("2")); // true
//array.splice(startIndex, itemsToRemove, item1, item2)

let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let removed = fruits.splice(2, 2);

//removing index
console.log(fruits);  // ["apple", "banana", "kiwi"]
console.log(removed); // ["orange", "mango"]

console.log('\n');

//replacing new index from the list
let colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "purple");

console.log(colors); // ["red", "yellow", "purple", "green", "blue"]

console.log('\n');

let numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 2, 6, 7, 8);

console.log(numbers); // [1, 6, 7, 8, 4, 5]

console.log('\n');

let original = [1, 2, 3, 4, 5];
let copy = [...original];
copy.splice(2, 1, 6);

console.log(original); // [1, 2, 3, 4, 5]
console.log(copy);     // [1, 2, 6, 4, 5]

console.log('\n');

let fruits_1 = ["apple", "banana", "orange", "mango"];
let indexToRemove = fruits_1.indexOf("orange");
if (indexToRemove !== -1) {
    fruits_1.splice(indexToRemove, 1);
}

console.log(fruits_1); // ["apple", "banana", "mango"]

console.log('\n');

let array = [1, 2, 3, 4, 5];
array.splice(0);

console.log(array); // []
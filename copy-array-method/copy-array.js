//copy of array, with concat()
const originalArray = [1, 2, 3];
const copyArray = [].concat(originalArray);

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false

console.log("\n");

// Another method to create a shallow copy is the slice() method. 
// When called without arguments, slice() returns a shallow copy of the entire array. 
// Here's how it works
const originalArray_1 = [1, 2, 3];
const copyArray_1 = originalArray_1.slice();

console.log(copyArray_1); // [1, 2, 3]
console.log(copyArray_1 === originalArray_1); // false

console.log("\n");

// The spread operator (...), introduced in ES6, 
// provides another concise way to create shallow copies of arrays. 
// Here's an example
const originalArray_2 = [1, 2, 3];
const copyArray_2 = [...originalArray_2];

console.log(copyArray_2); // [1, 2, 3]
console.log(copyArray_2 === originalArray_2); // false

console.log("\n");

//Using the spread operator (...), with a push() method, to add new value from the index.
const originalArray_3 = [1, 2, 3];
const copyArray_3 = [...originalArray_3];

copyArray_3.push(4);
console.log(originalArray_3); // [1, 2, 3]
console.log(copyArray_3);     // [1, 2, 3, 4]
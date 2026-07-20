let word = "Hello!";
let repeatedWord = word.repeat(3);
console.log(repeatedWord);  // "Hello!Hello!Hello!"

console.log("\n");

//word = "Test";
//console.log(word.repeat(-1));  // Throws RangeError: Invalid count value

//console.log("\n");

//word = "Test";
//console.log(word.repeat(Infinity));  // Throws RangeError: Invalid count value

//console.log("\n");

word = "Test";
console.log(word.repeat(2.5));  // "TestTest"

console.log("\n");

word = "Test";
console.log(word.repeat(0));  // ""

console.log("\n");

let count = 4;
word = "Test";
repeatedWord = word.repeat(count);
console.log(repeatedWord); // TestTestTestTest
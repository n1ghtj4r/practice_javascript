let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");

console.log(result);  // true

console.log("\n");

let phrase = "JavaScript is awesome!";
let result = phrase.includes("Awesome");

console.log(result);  // false

console.log("\n");

let text = "Hello, JavaScript world!";
let result = text.includes("JavaScript", 7);

console.log(result);  // true
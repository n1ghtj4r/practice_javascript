let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");

console.log(result);  // true

console.log("\n");

phrase = "JavaScript is awesome!";
result = phrase.includes("Awesome");

console.log(result);  // false

console.log("\n");

let text = "Hello, JavaScript world!";
result = text.includes("JavaScript", 7);

console.log(result);  // true
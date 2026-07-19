let greeting = "   Hello, world!   "; //white space here
console.log(greeting);

console.log("\n");

let message = "   Hello!   ";
console.log(message); // "   Hello!   "
let trimmedMessage = message.trim();
console.log(trimmedMessage);  // "Hello!"

console.log("\n");

greeting = "   Hello!   ";
console.log(greeting);  // "   Hello!   "
trimmedStart = greeting.trimStart();
console.log(trimmedStart);  // "Hello!   "

console.log("\n");

greeting = "   Hello!   ";
console.log(greeting);  // "   Hello!   "
trimmedEnd = greeting.trimEnd();
console.log(trimmedEnd);  // "   Hello!"
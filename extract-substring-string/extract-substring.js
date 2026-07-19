let message = "Hello, world!";
let greeting = message.slice(0, 5);

console.log(greeting);  // Hello

console.log("\n");

message = "Hello, world!";
let world = message.slice(7);

console.log(world);  // world!

console.log("\n");

message = "JavaScript is fun!";
let lastWord = message.slice(-4);

console.log(lastWord);  // fun!

console.log("\n");

message = "I love JavaScript!";
let language = message.slice(7, 17);

console.log(language);  // JavaScript
function greet() {
  console.log("Hello, Jessica!");
}

greet(); // "Hello, Jessica!"

console.log("\n");

function greet_1(name) {
  console.log("Hello, " + name + "!");
}
greet_1("Alice"); // Hello, Alice!
greet_1("Nick"); // Hello, Nick!

console.log("\n");

function doSomething() {
  console.log("Doing something...");
}
let result = doSomething();
console.log(result); // undefined

console.log("\n");

function calculateSum(num1, num2) {
  return num1 + num2;
}
console.log(calculateSum(3, 4)); // 7

console.log("\n");

const sum = function (num1, num2) {
  return num1 + num2;
};
console.log(sum(3, 4)); // 7

console.log("\n");

function greetings(name = "Guest") {
  console.log("Hello, " + name + "!");
}
greetings(); // Hello, Guest!
greetings("Anna"); // Hello, Anna!
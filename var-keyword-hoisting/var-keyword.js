// When you declare a variable with var, it becomes function-scoped or globally-scoped. 
// This means that if you declare a variable inside a function using var it's only accessible within that function. 
// However if you declare it outside any function, it becomes a global variable accessible throughout your entire script.
// This behavior can sometimes lead to unexpected results and make your code harder to understand.

// A problem with var is that it allows you to redeclare the same variable multiple times without throwing an error. 
// This can lead to accidental overwrites and make debugging more difficult.

var num = 5;
console.log(num); // 5

// This is allowed and doesn't throw an error
var num = 10;
console.log(num); // 10

console.log("\n");/////////////////////////////////////////////////////////////////////

// The most significant issue with var is its lack of block scoping. 
// Variables declared with var inside a block like an if statement or a for loop are still accessible outside that block.

if (true) {
  var num = 5;
}
console.log(num); // 5

// This behavior can lead to unintended variable leaks and make your code more prone to bugs.

// Due to these issues, modern JavaScript development has largely moved away from var in favor of let and const. 
// These keywords provide block scoping which aligns more closely with how scoping works in many other programming languages.

// They also don't allow redeclaration within the same scope helping to prevent accidental overrides.

// While var is still part of JavaScript and works in all browsers, 
// it's generally recommended to use let and const in modern JavaScript development. 
// They provide clear scoping rules, help prevent common pitfalls, and make your code's behavior more predictable.
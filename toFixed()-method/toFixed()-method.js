let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"

console.log("\n");

console.log((3.14159).toFixed(3));  // "3.142"
console.log((3.14449).toFixed(3));  // "3.144"
console.log((3.14550).toFixed(3));  // "3.146"

console.log("\n");

let num_1 = 3.14159;
console.log(num_1.toFixed()); // "3"

console.log("\n");

let price = 19.99;
let taxRate = 0.08;
let total = price + (price * taxRate);

console.log("Total: $" + total.toFixed(2)); // "Total: $21.59"
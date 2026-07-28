let globalVar = "I'm a global variable";
function printGlobalVar() {
    console.log(globalVar);
}
printGlobalVar(); // "I'm a global variable"

console.log("\n");

function greet() {
    let message = "Hello, local scope!";
    console.log(message);
}
greet(); // "Hello, local scope!"
// console.log(message); // This will throw an error

console.log("\n");

if (true) {
    let blockVar = "I'm in a block";
    console.log(blockVar); // "I'm in a block"
}
//console.log(blockVar); // This will throw an error
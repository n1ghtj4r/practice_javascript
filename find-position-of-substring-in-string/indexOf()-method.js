let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("awesome!");
console.log(position); // 14

console.log("\n");

sentence = "JavaScript is awesome!";
position = sentence.indexOf("fantastic");
console.log(position); // -1

console.log("\n");

sentence = "JavaScript is awesome, and JavaScript is powerful!";
position = sentence.indexOf("JavaScript", 10);
console.log(position); // 27

console.log("\n");

console.log("freeCodeCamp".indexOf("F")) // -1
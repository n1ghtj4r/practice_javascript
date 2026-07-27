console.log(parseFloat("3.14"));     // 3.14
console.log(parseFloat("3.14 abc")); // 3.14
console.log(parseFloat("3.14.5"));   // 3.14
console.log(parseFloat("abc 3.14")); // NaN

console.log("\n");

console.log(parseInt("42"));       // 42
console.log(parseInt("42px"));     // 42
console.log(parseInt("3.14"));     // 3
console.log(parseInt("abc123"));   // NaN

console.log("\n");

console.log(parseFloat("  3.14"));  // 3.14
console.log(parseInt("  42"));      // 42

console.log("\n");

console.log(parseFloat("+3.14"));  // 3.14
console.log(parseInt("-42"));      // -42
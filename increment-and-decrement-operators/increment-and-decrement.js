let x = 5;

console.log(++x); // 6
console.log(x); // 6

console.log("\n");

let y = 5;

console.log(y++); // 5
console.log(y); // 6

console.log("\n");

let x_1 = 5;
console.log(--x_1); // 4
console.log(x_1); // 4

let y_1 = 5;
console.log(y_1--); // 5
console.log(y_1); // 4

console.log("\n");

let a = 5;
let b = ++a;
console.log(b); // 6 (a was incremented before assignment)

let c = 5;
let d = c++;
let result_after_assign = c;
console.log(d); // 5 (c was incremented after assignment)
console.log(result_after_assign);
const str = '42';
const strToNum = +str;
console.log(strToNum); // 42
console.log(typeof str); // string
console.log(typeof strToNum); // number

console.log("\n");

const str_1 = '42';
const strToNegativeNum = -str_1;
console.log(strToNegativeNum); // -42
console.log(typeof str_1); // string
console.log(typeof strToNegativeNum); // number

console.log("\n");

let isOnline = true;
console.log(!isOnline); // false

let isOffline = false;
console.log(!isOffline); // true

console.log("\n");

const num = 5; // The binary for 5 is 00000101
console.log(~num); // -6

console.log("\n");

const result = void (2 + 2);
console.log(result); // undefined

// <a href="javascript:void(0);">Click Me</a>

console.log("\n");

const value = 'Hello world';

console.log(typeof value); // string
const result = 5 + '10';

console.log(result); // 510
console.log(typeof result); // string

console.log("\n");

const result_1 = '10' + 5;

console.log(result_1); // 105
console.log(typeof result_1); // string

console.log("\n");

const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number

console.log("\n");

const subtractionResult_2 = 'abc' - 5;
console.log(subtractionResult_2); // NaN
console.log(typeof subtractionResult_2); // number

const multiplicationResult_2 = 'abc' * 2;
console.log(multiplicationResult_2); // NaN
console.log(typeof multiplicationResult_2); // number

const divisionResult_2 = 'abc' / 2;
console.log(divisionResult_2); // NaN
console.log(typeof divisionResult_2); // number

console.log("\n");

const result1 = true + 1;
console.log(result1); // 2
console.log(typeof result1); // number

const result2 = false + 1;
console.log(result2); // 1
console.log(typeof result2); // number

const result3 = 'Hello' + true;
console.log(result3); // "Hellotrue"
console.log(typeof result3); // string

console.log("\n");

const result1_3 = null + 5;
console.log(result1_3); // 5
console.log(typeof result1_3); // number

const result2_3 = undefined + 5;
console.log(result2_3); // NaN
console.log(typeof result2_3); // number
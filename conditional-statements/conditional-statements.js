if (null) {
  console.log("This will not run.");
}

if ("freeCodeCamp") {
  console.log("This will run.");
}

console.log("\n");

const age = 22;

if (age >= 18) {
 console.log("You're eligible to vote"); // You're eligible to vote
}

console.log("\n");

const age_1 = 15;

if (age_1 >= 18) {
 console.log("You're eligible to vote"); // Code not running because age is less than 18
}

console.log("\n");

const age_2 = 15;

if (age_2 >= 18) {
 console.log("You're eligible to vote");
} else {
 console.log("You're not eligible to vote"); // You're not eligible to vote
}

console.log("\n");

const score = 87;

if (score >= 90) {
 console.log('You got an A'); 
} else if (score >= 80) {
 console.log('You got a B'); // You got a B
} else if (score >= 70) {
 console.log('You got a C');
} else {
 console.log('You failed! You need to study more!');
}

console.log("\n");

const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`);
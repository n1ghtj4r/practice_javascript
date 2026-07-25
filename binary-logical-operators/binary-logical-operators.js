const result = true && 'hello';
console.log(result); // hello

console.log("\n");

const result_1 = 0 && 3;
console.log(result_1); // 0

console.log("\n");

const result_2 = false && 0;
console.log(result_2); // false

console.log("\n");

if (2 < 3 && 3 < 4) {
 console.log('The if block runs'); 
} else {
 console.log('The else block runs');
} 

console.log("\n");

const result_3 = 'This is truthy' || false;
console.log(result_3); // This is truthy

console.log("\n");

const result_4 = 0 || 'This is truthy';
console.log(result_4); // This is truthy

console.log("\n");

let userInput;
if (userInput || 'Guest') {
 console.log('A user is present');
} else {
 console.log('No user detected');
}

console.log("\n");

const result_5 = null ?? 'default';
console.log(result_5); // default

console.log("\n");

const userSettings = {
 theme: null,
 volume: 0,
 notifications: false,
};

let theme = userSettings.theme ?? 'light';
console.log(theme); // light
let str = "hello";
let charArray = str.split("");
console.log(charArray); // ["h", "e", "l", "l", "o"]

charArray = ["h", "e", "l", "l", "o"];
charArray.reverse();
console.log(charArray); // ["o", "l", "l", "e", "h"]

let reversedArray = ["o", "l", "l", "e", "h"];
let reversedString = reversedArray.join("");
console.log(reversedString); // "olleh"
let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);

//If you simply use quotes inside a string without escaping them, 
// it can cause an error because JavaScript will think you're trying to end the string.

console.log("\n")

//For example, this will cause an error:
//*****
//let statement = "She said, "Hello!"";
//*****

//To fix this, you can escape the inner quotes by placing a backslash (\) before them:
let statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"

console.log("\n")

//Here's another example using single quotes:

let quote = 'It\'s a beautiful day!';
console.log(quote); // It's a beautiful day!
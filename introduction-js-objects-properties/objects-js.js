//These pieces of information are called properties, and they consist of a name (or key) and a value.

//const exampleObject = {
 // propertyName: value,
//}

//This object-centric nature of JavaScript is one of the reasons it's such a flexible and powerful language. 
// Let's look at how you can create an object

const person_1 = {
  name: "Alice",
  age: 30,
  city: "New York"
};

//objectName.propertyName
//Here's how you would use dot notation with our person object
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

console.log(person.name);  // Alice
console.log(person.age);   // 30

//Bracket notation, on the other hand, allows you to access object properties using a string inside square brackets. 
// Here's how you would use bracket notation

console.log("\n");

const person_2 = {
  name: "Alice",
  age: 30,
  city: "New York"
};

console.log(person_2["name"]); // Alice
console.log(person_2["age"]); //  30

//Bracket notation is more flexible than dot notation because it allows you to use property names that aren't valid JavaScript identifiers. 
// For example, if you had a property name with spaces or that starts with a number, you'd need to use bracket notation

console.log("\n");

const oddObject = {
  "1stProperty": "Hello",
  "property with spaces": "World"
};

console.log(oddObject["1stProperty"]);  // Hello
console.log(oddObject["property with spaces"]);  // World

//Another advantage of bracket notation is that it allows you to use variables to access properties dynamically

console.log("\n");

const person_3 = {
  name: "Alice",
  age: 30,
  city: "Wonderland"
};

let propertyName = "city";
console.log(person_3[propertyName]); // Wonderland
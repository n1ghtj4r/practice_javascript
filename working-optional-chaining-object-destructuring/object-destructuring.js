// At its core, object destructuring is about unpacking values from objects into distinct variables. 
// Instead of accessing object properties one by one, you can extract multiple properties in a single statement. 
// This can make your code cleaner and more efficient.

// Let's start with an example to illustrate how object destructuring works

const person = { name: "Alice", age: 30, city: "New York" };

const { name, age } = person;

console.log(name); // Alice
console.log(age);  // 30

// In this example, we're extracting the name and age properties from the person object and assigning them to variables with the same names.

// One of the powerful aspects of object destructuring is that you can assign the extracted values to variables with different names. 
// This is particularly useful when you're working with objects that have property names that might conflict with existing variables 
// or when you want to use a different name

let person_1 = { name: "Alice", age: 30, city: "New York" };

let { name: personName, age: personAge } = person_1;

console.log(personName); // Alice
console.log(personAge); //  30

// In this case, we're extracting the name property and assigning it to a variable called personName, 
// and doing the same with age and personAge.

// Object destructuring also allows you to set default values. If a property 
// doesn't exist in the object you're destructuring, you can specify a fallback value

let person_2 = { name: "Alice", age: 30, city: "New York" };
let { name_1, age_1, country = "Unknown" } = person_2;

console.log(country); // Unknown

// Here, since country doesn't exist in our person object, it gets the default value Unknown.

// Another common case is nested object destructuring. You can destructure 
// properties nested inside other objects by using another set of braces

const recipe = {
  name: "Chocolate Cake",
  ingredients: {
    flour: "2 cups",
    sugar: "1 cup"
  }
};

// Extract `flour` from `ingredients`
const { ingredients: { flour } } = recipe;

console.log(flour); // "2 cups"

// This is equivalent to accessing the property directly

const flour_1 = recipe.ingredients.flour;
console.log(flour_1); // "2 cups"

// Now, let's talk about the shorthand notation in object destructuring. When you're creating objects,
// especially when the property names match variable names, you can use a shorthand syntax

let name_2 = "Bob";
let age_2 = 25;

let person_3 = { name_2, age_2 };

console.log(person_3); // { name: "Bob", age: 25 }

// The code above takes the properties with the same name as our variables and assigns them the values of those variables.

// This shorthand notation is particularly useful when you're returning objects from functions or creating objects with multiple properties

function createPerson(name, age) {
  return { name, age };
}

let person_4 = createPerson("Charlie", 35);
console.log(person_4); // { name: "Charlie", age: 35 }

// Object destructuring and the shorthand object notation are powerful features that can make your code more concise and easier to read.
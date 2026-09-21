// Primitive data types are the simplest form of data in JavaScript. They include number, bigint, string, boolean, null, 
// undefined, and symbol. These types are called "primitive" because they represent single values and are not objects.

// When you work with primitive data types, you're dealing directly with their values. 
// For example, when you create a variable with a primitive value, that value is stored directly in the variable.

// Primitive values are immutable, which means once they are created, their value cannot be changed. However, 
// you can reassign a new value to the variable. Here's an example of working with primitive data types

let num1 = 5;
let num2 = num1;
num1 = 10;

console.log(num2); // 5

// In this example, we are assigning a primitive value (5) from num1 to num2. This creates an independent copy of the value. 
// As a result, any changes made to the original variable (num1) do not affect the copy (num2).

console.log("\n");/////

// Non-primitive data types, on the other hand, are more complex. In JavaScript, these are objects, which include regular objects, 
// arrays, and functions. Unlike primitives, non-primitive types can hold multiple values as properties or elements.

// When you create a variable with a non-primitive value, what's stored in the variable is actually a reference to the location 
// in memory where the object is stored, not the object itself. This leads to some important differences in behavior. 
// Here's an example with non-primitive types

const originalPerson = { name: "John", age: 30 };
const copiedPerson = originalPerson;

originalPerson.age = 31;

console.log(copiedPerson.age); // 31

// In this example we have an object called originalPerson with two properties of name and age. 
// We then assign the originalPerson object to a variable called copiedPerson.

// Then we update the age value for the originalPerson object. 
// When we log the age property of copiedPerson object it shows the updated value.

// But why is that happening? This occurs because both originalPerson and copiedPerson are referencing the same object in memory.
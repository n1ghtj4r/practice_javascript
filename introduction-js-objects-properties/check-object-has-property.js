// We'll explore some common approaches: the hasOwnProperty() method, t
// he Object.hasOwn() method, the in operator, and checking against undefined.

// Let's start with the hasOwnProperty() method. This method returns a boolean indicating whether 
// the object has the specified property as its own property. Here's an example.

const person = {
  name: "Alice",
  age: 30
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("job")); // false

// In this example, we have an object called person with two properties: name and age. 
// To check if name is a property in the person object, we use the hasOwnProperty() method. 
// Since name is a property, it will return true. But when we use the hasOwnProperty() to check if job is a property, 
// it will return false because it does not exist in the object.

// Object.hasOwn() is the modern, recommended way to check if an object has a property as its own (not inherited). 
// Think of it as an upgraded, safer version of hasOwnProperty(). The syntax is Object.hasOwn(object, propertyName) 
// — you pass the object as the first argument and the property name as the second.

//Example here

console.log("\n"); //////

const person_1 = {
  name: "Alice",
  age: 30
};

console.log(Object.hasOwn(person_1, "name")); // true
console.log(Object.hasOwn(person_1, "job")); // false

// In this example, Object.hasOwn(person, "name") returns true because name exists directly on the person object. 
// Object.hasOwn(person, "job") returns false because job was never added to the object.

// A very important thing to understand is that Object.hasOwn() only checks if the property exists 
// — it does not care about the property's value. This means it still returns true even when the value is 0, false, null, or undefined:

//Example here

console.log("\n"); //////

const user = {
  username: "coder123",
  score: 0,
  isActive: false,
  nickname: null
};

// Object.hasOwn() correctly reports these all exist
console.log(Object.hasOwn(user, "score"));    // true  (value is 0, but property exists)
console.log(Object.hasOwn(user, "isActive")); // true  (value is false, but property exists)
console.log(Object.hasOwn(user, "nickname")); // true  (value is null, but property exists)
console.log(Object.hasOwn(user, "email"));   // false (property was never added)

// Danger! Using if() directly gives wrong results for falsy values
if (user.score) {
  console.log("Has score"); // This will NOT print even though score exists!
}

// Safe! Object.hasOwn() gives correct result
if (Object.hasOwn(user, "score")) {
  console.log("Has score:", user.score); // Has score: 0
}

// Another way to check for the existence of a property in an object is to use the in operator. Like hasOwnProperty(),
// the in operator will return true if the property exists on the object. Here's how you can use it

console.log("\n"); //////

const person_2 = {
  name: "Bob",
  age: 25
};
console.log("name" in person_2);  // true

// In this example, "name" in person returns true because name is a property of person.

// The third method involves checking if a property is undefined. This approach can be useful,
// but it has some limitations. Here's an example 

console.log("\n"); //////

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

console.log(car.brand !== undefined); // true
console.log(car.color !== undefined); // false

// In this code, we check if car.brand and car.color are not undefined. This works because accessing a non-existent property on an object returns undefined. 
// However, this method can give false negatives if a property explicitly has the value undefined.
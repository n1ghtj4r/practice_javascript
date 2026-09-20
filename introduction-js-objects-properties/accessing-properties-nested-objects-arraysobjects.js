// Accessing properties from nested objects involves using the dot notation or bracket notation,
// much like accessing properties from simple objects. However, you'll need to chain these accessors to drill down into the nested structure.

// For example, let's consider a nested object representing a person with contact information
 
const person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};

console.log(person);

// To access Alice's work phone number, you would chain the property accessors like this

console.log("\n"); ///////////

const person_1 = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};

console.log(person_1.contact.phone.work); // "098-765-4321"

// You can also use bracket notation, which is particularly useful when property names include spaces or special characters, 
// or when you're using variables to access properties

console.log("\n"); ///////////

const person_2 = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};

console.log(person_2['contact']['phone']['work']); // "098-765-4321"

// Now, let’s take a look at how we can access data where one of the object properties has the value of an array. 
// Here is a modified person object that includes an array of addresses

console.log("\n"); ///////////

const person_3 = {
  name: "Alice",
  age: 30,
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" }
  ]
};

console.log(person);

// Here is an example of how to access Alice's work address city

console.log("\n"); ///////////

const person_4 = {
  name: "Alice",
  age: 30,
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" }
  ]
};

console.log(person_4.addresses[1].city); // "Workville"

// In this example, person.addresses refers to the array of addresses. To access the second address in that array, 
// we use bracket notation and index 1. Then, we use dot notation to access the city from that address object.
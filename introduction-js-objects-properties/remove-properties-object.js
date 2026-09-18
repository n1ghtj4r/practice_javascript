// When you use delete, it removes the selected property from the object. Here's an example of how to use the delete operator

const person = {
  name: "Alice",
  age: 30,
  job: "Engineer"
};

delete person.job;

console.log(person.job); // undefined

// In this example, we start with a person object that has three properties: name, age, and job. Then, 
// we use the delete operator to remove the job property. After the deletion, the person object no longer has the job property.

console.log("\n");//////////

// Another way to remove properties is by using destructuring assignment with rest parameters. 
// This approach doesn't actually delete the property, but it creates a new object without the specified properties

const person_1 = {
  name: "Bob",
  age: 25,
  job: "Designer",
  city: "New York"
};

const { job, city, ...remainingProperties } = person_1;

// { name: "Bob", age: 25 }
console.log(remainingProperties);

// In this example, we use destructuring to extract job and city from the person object, 
// and collect the remaining properties into a new object called remainingProperties. 
// This creates a new object without the job and city properties.
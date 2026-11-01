// Naming variables and functions is an important aspect of writing clean, readable and maintainable code. 
// Good naming practices makes your code self-documenting reducing the need 
// for extensive comments and making it easier for other developers including your future self to understand your code.

// Let's start with general naming conventions in JavaScript. In previous lessons you learned about using camel case for variable names. 
// For boolean variables, it's a common practice to use prefixes such as is, has, or can. 
// This immediately tells the reader that the variable is a boolean:

let isLoading = true;
let hasPermission = false;
let canEdit = true;

console.log(isLoading)
console.log(hasPermission)
console.log(canEdit)

// For functions the name should clearly indicate what the function does. It's often helpful to start with a verb:

function getUserData(){
  /* ... */
}

function calculateTotal(){
  /* ... */
}

function validateInput(){
  /* ... */
}

// For functions that return a boolean often called predicates, you can use the same is, has, or can prefixes:

function isValidEmail(email) {
  /* ... */
}

function hasRequiredFields(form) {
  /* ... */
}

// When you have functions that retrieve data it's common to start with the word get:

function getProductDetails(productId) {
  /* ... */
}

function getUserProfile(userId) {
  /* ... */
}

// When you have functions that set data it's common to start with the word set:

function setUserPreferences(preferences) {
  /* ... */
}

function setPageTitle(title) {
  /* ... */
}

// For event handler functions, you might prefix with handle or suffix with handler:

function handleClick(){
  /* ... */
}

function onSubmit(){
  /* ... */
}

function keyPressHandler(){
  /* ... */
}

// An event handler is an action that happens after an event has happened like a button click. 
// You will learn about that in future lessons.

// When naming iterator variables and loops, it's common to use single letters 
// like i, j, or k, but for nested loops or more complex iterations more descriptive names can be helpful:

//for (let i = 0; i < array.length; i++) {
  /* ... */
//}

//for (let studentIndex = 0; studentIndex < students.length; studentIndex++) {
  /* ... */
//}

// For array names consider using plural nouns to indicate that the variable contains multiple items:

console.log("\n");//////////////////////////////////////////////////////////////////////////

const colors = ['red', 'green', 'blue'];
const userNames = ['Alice', 'Bob', 'Charlie'];

console.log(colors)
console.log(userNames)
// Remember the goal is to make your code as self explanatory as possible.
// A good rule of thumb is that if you need to add a comment to explain what a variable or function does,
// you might want to consider renaming it to something more descriptive.
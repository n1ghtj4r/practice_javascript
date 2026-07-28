function greetings(name) {
  console.log("Hello, " + name + "!");
}
greetings("ver");

//arrow function
const greetings_1 = (name) => {
  console.log("Hello, " + name + "!");
};
greetings_1("jan");

//no parentheses, if parameter list only has one paramete
const greetings_2 = name => {
  console.log("Hello, " + name + "!");
};
greetings_2("ver .");

//if your arrow function has no parameters
const greetings_3 = () => {
  console.log("Hello");
};
greetings_3();

//if your function body only contains a single line of code
const greetings_4 = name => console.log("Hello, " + name + "!");
greetings_4("tua");

// This will produce syntax errors 
//function greetings name console.log("Hello, " + name + "!");

//arrow function syntax to calculate the area
const calculateArea = (width, height) => {
  const area = width * height;
  return area;
};
console.log(calculateArea(5, 3)); // 15

//clean function process
const calculateArea_1 = (width, height) => {
  return width * height;
}; 
console.log(calculateArea_1(5, 3)); // 15

//If you tried to remove the curly braces and place the calculation on the same line, then you would get an Uncaught SyntaxError: Unexpected token 'return' message
//const calculateArea = (width, height) => return width * height;

//when you remove that return statement, the error will disappear and the function will still implicitly return the calculation.
const calculateArea_2 = (width, height) => width * height;
console.log(calculateArea_2(2, 2));//4 
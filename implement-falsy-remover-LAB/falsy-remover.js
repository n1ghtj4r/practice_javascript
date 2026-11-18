function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer(["ako", "at", "ikaw", 5]));
console.log(bouncer(["ako", "at", "siya", true, 10]));
console.log(bouncer(["ako", "at", "ako", false]));
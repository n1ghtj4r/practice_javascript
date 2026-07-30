function booWho(bool) {
  return typeof bool === "boolean";
}

console.log(booWho(true));      // Output: true
console.log(booWho(false));     // Output: true
console.log(booWho("hello"));   // Output: false
console.log(booWho(42));        // Output: false
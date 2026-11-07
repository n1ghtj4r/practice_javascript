function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); // 8
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));       // undefined
console.log(findElement([1, 2, 3, 4], function(num) { return num > 2; }));             // 3
console.log(findElement(["hello", "world", "javascript"], function(str) { return str.length > 5; })); // "javascript"
console.log(findElement(["cat", "dog", "bird"], function(str) { return str.length > 10; })); // undefined
console.log(findElement([2, 4, 6, 8], function(num) { return num % 2 === 0; }));       // 2
console.log(findElement([], function(num) { return num > 0; }));                      // undefined
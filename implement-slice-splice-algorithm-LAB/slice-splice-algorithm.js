function frankenSplice(arr1, arr2, n) {
  const result = arr2.slice(); // make a copy of arr2
  for (let i = 0; i < arr1.length; i++) {
    result.splice(n + i, 0, arr1[i]);
  }
  return result;
}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
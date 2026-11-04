function largestOfAll(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    result.push(max);
  }
  return result;
}

console.log(largestOfAll(1, 31, 543, 7684, 23, 2));
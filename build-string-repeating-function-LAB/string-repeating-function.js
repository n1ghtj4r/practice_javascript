function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }
  
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

console.log(repeatStringNumTimes("*", 3));        // ***
console.log(repeatStringNumTimes("abc", 3));      // abcabcabc
console.log(repeatStringNumTimes("abc", 4));      // abcabcabcabc
console.log(repeatStringNumTimes("abc", 1));      // abc
console.log(repeatStringNumTimes("*", 8));        // ********
console.log(repeatStringNumTimes("abc", -2));     // (empty string)
console.log(repeatStringNumTimes("abc", 0));      // (empty string)
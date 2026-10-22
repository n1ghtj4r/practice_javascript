function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    // Check if the next character code is not consecutive
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      // Return the missing letter
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  // No missing letter found
  return undefined;
}

console.log(fearNotLetter("abce"))
function pyramid(pattern, rows, inverted) {
  let result = "\n";

  for (let i = 0; i < rows; i++) {
    // Determine the current row index depending on orientation
    const rowIndex = inverted ? rows - 1 - i : i;

    // Number of pattern characters in this row
    const numChars = 2 * rowIndex + 1;

    // Number of leading spaces to center the row
    const spaces = " ".repeat(rows - 1 - rowIndex);

    // Build the row (no trailing spaces)
    result += spaces + pattern.repeat(numChars) + "\n";
  }

  return result;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));
function getAverage(scores) {
  let sum = 0;
  for (let score of scores) {
    sum += score;
  }
  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);

  if (hasPassingGrade(studentScore)) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); // 71.7
console.log(getGrade(100)); // "A+"
console.log(getGrade(85));  // "B"
console.log(hasPassingGrade(75)); // true
console.log(hasPassingGrade(50)); // false

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// Class average: 71.7. Your grade: F. You failed the course.

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
// Class average: 50.8. Your grade: A+. You passed the course.
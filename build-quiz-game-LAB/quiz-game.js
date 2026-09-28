const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris"],
    answer: "Paris"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Math",
    question: "What is 7 multiplied by 8?",
    choices: ["54", "56", "64"],
    answer: "56"
  },
  {
    category: "Technology",
    question: "What does HTML stand for?",
    choices: ["HyperText Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language"],
    answer: "HyperText Markup Language"
  }
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

// --- Test the Quiz Game ---

const randomQuestion = getRandomQuestion(questions);
console.log("Random Question:");
console.log("Category:", randomQuestion.category);
console.log("Question:", randomQuestion.question);
console.log("Choices:", randomQuestion.choices);
console.log("Correct Answer:", randomQuestion.answer);

console.log("\n--- Computer's Turn ---");
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Computer chose:", computerChoice);

console.log("\n--- Result ---");
console.log(getResults(randomQuestion, computerChoice));

// Extra test to force a correct and incorrect result
console.log("\n--- Forced Correct ---");
console.log(getResults(randomQuestion, randomQuestion.answer));

console.log("\n--- Forced Wrong ---");
const wrongChoice = randomQuestion.choices.find(c => c !== randomQuestion.answer);
console.log(getResults(randomQuestion, wrongChoice));
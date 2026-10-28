function isPalindrome(word) {
  const lower = word.toLowerCase();
  return lower === lower.split("").reverse().join("");
}

function findPalindromeBreaks(words) {
  const breaks = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }
  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length || phraseLength <= 0) {
    return [];
  }

  const phraseMap = new Map();

  // Collect all start indices for each unique phrase
  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");
    if (!phraseMap.has(phrase)) {
      phraseMap.set(phrase, []);
    }
    phraseMap.get(phrase).push(i);
  }

  // Collect start indices only for phrases that appear more than once
  const result = [];
  for (const indices of phraseMap.values()) {
    if (indices.length > 1) {
      result.push(...indices);
    }
  }

  // Return sorted unique indices (in case of any overlap handling)
  return [...new Set(result)].sort((a, b) => a - b);
}

function analyzeTexts(texts, phraseLength) {
  if (!texts || texts.length === 0) {
    return [];
  }

  return texts.map(words => ({
    repeatedPhrases: findRepeatedPhrases(words, phraseLength),
    palindromeBreaks: findPalindromeBreaks(words)
  }));
}

// --- Test isPalindrome ---
console.log("--- isPalindrome ---");
console.log(isPalindrome("racecar"));// true
console.log(isPalindrome("Level"));// true (case-insensitive)
console.log(isPalindrome("hello"));// false

// --- Test findPalindromeBreaks ---
console.log("\n--- findPalindromeBreaks ---");
console.log(findPalindromeBreaks(["level", "hello", "racecar", "world"])); // [1, 3]
console.log(findPalindromeBreaks(["kayak", "level"]));// []
console.log(findPalindromeBreaks([]));// []

// --- Test findRepeatedPhrases ---
console.log("\n--- findRepeatedPhrases ---");
const words = ["the", "cat", "sat", "the", "cat"];
console.log(findRepeatedPhrases(words, 2));// [0, 3]
console.log(findRepeatedPhrases(words, 5));// [] (phraseLength >= length)

// --- Test analyzeTexts ---
console.log("\n--- analyzeTexts ---");
const texts = [
  ["level", "hello", "racecar"],
  ["the", "cat", "sat", "the", "cat"]
];
console.log(analyzeTexts(texts, 2));
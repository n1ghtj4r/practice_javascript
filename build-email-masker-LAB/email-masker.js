function maskEmail(email) {
  const firstLetter = email.slice(0, 1);
  const atIndex = email.indexOf("@");
  const middlePart = email.slice(1, atIndex - 1);
  const lastLetter = email.slice(atIndex - 1, atIndex);
  const domain = email.slice(atIndex);
  
  return firstLetter + "*".repeat(middlePart.length) + lastLetter + domain;
}

const email = "apple.pie@example.com";

console.log(maskEmail(email));
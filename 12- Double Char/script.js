//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  return str
    .split("")
    .map((s) => s.repeat(2))
    .join("");
}

console.log(doubleChar("Cat"));






//Another Solution

function doubleChar(str) {
  let result = "";
  for (const char of str) {
    result += char + char;
  }
  return result;
}



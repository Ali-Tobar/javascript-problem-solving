function remove(string) {
  if (string.endsWith("!")) {
    return string.slice(0, -1);
  } else {
    return string;
  }
}

console.log(remove("Hi! Hi!"));





//Another Solution Using Ternaty Operator
function remove2(string) {
  return string.endsWith("!") ? string.slice(0, -1) : string;
}
console.log(remove2("Hi! Hi!"));

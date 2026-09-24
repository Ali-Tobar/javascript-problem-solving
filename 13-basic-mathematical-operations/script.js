function basicOp(operation, value1, value2) {
  if (operation === "+") return value1 + value2;
  if (operation === "-") return value1 - value2;
  if (operation === "*") return value1 * value2;
  if (operation === "/") return value1 / value2;
  return 0;
}
console.log(basicOp("*", 10 , 5));


// Another Solution 

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}

// Another Solution 
function basicOp(operation, value1, value2) {
  const operations = {
    "+": value1 + value2,
    "-": value1 - value2,
    "*": value1 * value2,
    "/": value1 / value2,
  };

  return operations[operation] ?? 0;
}
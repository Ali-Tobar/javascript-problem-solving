// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?


//Solution
function numberToString1(num) {
  return num.toString();
}

console.log(numberToString1(1234));




//Another Solution 
function numberToString2(num) {
  return String(num);
}
console.log(numberToString2(1234));



//Another Solution 2
function numberToString3(num) {
  return num + "";
  // or:
  // return "" + num;
}
console.log(numberToString3(1234));




// Another Solution 3
function numberToString4(num) {
  return `${num}`;
}
console.log(numberToString4(1234));
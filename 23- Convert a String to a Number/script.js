const stringToNumber = function (str) {
  return Number(str);
};
console.log(stringToNumber("123"));




// Another Solution 
const stringToNumber2 = function (str) {
  return +str;
};
console.log(stringToNumber2("123"));




//Another Solution 
const stringToNumber3 = function (str) {
  return parseInt(str, 10);
};
console.log(stringToNumber3("123"));




//Another Solution 
const stringToNumber4 = function (str) {
  return str * 1; 
  // or: return str - 0;
};
console.log(stringToNumber4("123"));
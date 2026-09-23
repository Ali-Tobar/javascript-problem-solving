/*Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/


// --Solution--

//Create Empty String
//Take The number Argument and Loop thought it
// Add Tha String to The Empty one


function repeatStr(n , s){
 let newString = '';
 for(let i = 0; i < n ;i++){
   newString += s;
 }
 return newString;
}

console.log(repeatStr(5 ,"A"));









// Another Solution 
function repeatString(num , str){
   return str.repeat(num);
}
console.log(repeatString(20 , " Ali "))
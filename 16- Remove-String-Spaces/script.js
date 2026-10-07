// Description:
// Write a function that removes the spaces from the string, then return the resultant string.

// Examples (Input -> Output):

// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

// Solution
function noSpace(x) {
  let result = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      result += x[i];
    }
  }
  return result;
}

console.log(noSpace("dhedjsjsjj ejddeidscj dcdi i 1 2  3 4 5 5 6  "));


// Another Solution 

function notSpace(y){
  return y.split(" ").join("");
}
console.log(notSpace("dhedjsjsjj ejddeidscj dcdi i 1 2  3 4 5 5 6  "));



//Another Solution 
function noSpace(x) {
  return x.replaceAll(" ", "");
}
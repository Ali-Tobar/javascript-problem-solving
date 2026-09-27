//You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
  let initValue = 0;
  for(let i = 0; i < arr.length ; i++){
   if(arr[i] > 0){
      initValue += arr[i];
   }
  }
  return initValue;
}
console.log(positiveSum([-1,-5,5,10]));



//Another Solution

function positiveSum2(arr) {
  let total = 0;
  for (let num of arr) {
    if (num > 0) {
      total += num;
    }
  }
  return total;
}


//Another Solution
function positiveSum3(arr) {
  return arr.reduce((acc, current) => {
    return current > 0 ? acc + current : acc;
  }, 0);
}
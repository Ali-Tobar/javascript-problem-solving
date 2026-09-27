// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

// check if Empty value return 0
//find the highest number
//find the lowest number
// filter the array
// sum all numbers in array

function SumWithoutTheHighestAndTheLowestNumber(array) {
  if (array == null) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, current) => acc + current, 0);
}
console.log(
  SumWithoutTheHighestAndTheLowestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
);



//Another Solution important 
function sumArray(array) {
  if (!Array.isArray(array) || array.length <= 2) return 0;

  const min = Math.min(...array);
  const max = Math.max(...array);
  const totalSum = array.reduce((acc, current) => acc + current, 0);

  return totalSum - min - max;
}

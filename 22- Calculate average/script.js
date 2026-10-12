function findAverage(array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }

  let average = result / array.length;
  if (!isNaN(average)) {
    return average;
  } else {
    return 0;
  }
}

console.log(findAverage([1, 2, 3, 4]));






//Another Solution 
function findAverage(array) {
  if (array.length === 0) return 0;
  return array.reduce((acc, curr) => acc + curr, 0) / array.length;
}
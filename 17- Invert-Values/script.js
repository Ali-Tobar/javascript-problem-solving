function invert(array) {
  let inverted = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      inverted.push(array[i] * -1);
    }
  }
  return inverted;
}

console.log(invert([1, 2, 3, 4, 5]));









// Another Solution

function inv(arr) {
  return arr.map((n) => -n);
}

console.log(inv([1, 2, 3, 4, 5]));

function countBy(x, n) {
  let z = [];

  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }

  return z;
}

console.log(countBy(1, 10));



//Another Solution 
function countBy(x, n) {
  return Array.from({ length: n }, (_, index) => (index + 1) * x);
}
function monkeyCount(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }

  return result;
}
console.log(monkeyCount(10));


// Another Solution 

function monkeyCount2(n) {
  return Array.from({ length: n }, (_, index) => index + 1);
}

console.log(monkeyCount(10));
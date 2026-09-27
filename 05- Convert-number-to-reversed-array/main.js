// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitze(n) {
  return n
    .toString()
    .split("")
    .map((x) => Number(x))
    .reverse();
}
console.log(digitze(8910));

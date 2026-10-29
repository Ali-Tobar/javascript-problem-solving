function rentalCarCost(d) {
  let total = d * 40;
  if (d >= 7) {
    total -= 50;
  } else if (d >= 3) {
    total -= 20;
  }
  return total;
}
console.log(rentalCarCost(7));


//Another Solution 
const rentalCarCost = (d) => d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
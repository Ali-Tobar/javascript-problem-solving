function bonusTime(salary, bonus) {
  if (bonus) {
    return "£" + salary * 10;
  } else {
    return "£" + salary;
  }
}
console.log(bonusTime(10000, true));  // £100000



// Another Solution Using Ternary Operator with Template Literals
function bonusTime2(salary, bonus) {
  return `£${bonus ? salary * 10 : salary}`;
}
console.log(bonusTime2(10000, true));     // £100000
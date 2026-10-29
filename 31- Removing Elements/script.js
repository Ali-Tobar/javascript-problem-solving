function removeEveryOther(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));











// Another Solution
function removeEveryOther2(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {                // i += 2
    result.push(arr[i]);
  }
  return result;
}
console.log(removeEveryOther2(["Keep", "Remove", "Keep", "Remove", "Keep"]));




// Another Solution 
function removeEveryOther3(arr) {
  return arr.filter((_, index) => index % 2 === 0);
}
console.log(removeEveryOther3(["Keep", "Remove", "Keep", "Remove", "Keep"]));

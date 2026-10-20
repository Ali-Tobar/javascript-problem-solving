function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
  }
}
console.log(switchItUp(1));  // One






//Another Solution  Using Array Index Lookup
function switchItUp2(number) {
  const words = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  return words[number];
}
console.log(switchItUp2(1));  // One





// Another Solution Using Object Lookup Table
const numbersMap = {
  0: "Zero", 1: "One", 2: "Two", 3: "Three", 4: "Four",
  5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine"
};

function switchItUp3(number) {
  return numbersMap[number];
}
console.log(switchItUp3(1)); // One
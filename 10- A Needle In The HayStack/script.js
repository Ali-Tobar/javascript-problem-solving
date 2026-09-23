// function findNeedle(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "needle") {
//       return "found the needle at position " + i;
//     }
//   }
// }
// console.log(
//   findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]),
// );




// Another Solution 

function findNeedle(array) {
  return "found the needle at position " + array.indexOf("needle");
}
console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "randomJunk", "needle"]),
);


// Clean Code

function findNeedle(array) {
  const position = array.indexOf("needle");
  return `found the needle at position ${position}`;
}





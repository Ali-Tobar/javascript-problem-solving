function areYouPlayingBanjo(name) {
  if (name.charAt(0) === "R" || name.charAt(0) === "r") {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

console.log(areYouPlayingBanjo("Robert")); // Robert plays banjo
console.log(areYouPlayingBanjo("ringo")); // ringo plays banjo
console.log(areYouPlayingBanjo("Ali")); // Ali does not play banjo



//Another Solution 
function areYouPlayingBanjo2(name) {
  return name.charAt(0) === "R" || name.charAt(0) === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}
console.log(areYouPlayingBanjo2("Robert")); // Robert plays banjo
console.log(areYouPlayingBanjo2("ringo")); // ringo plays banjo
console.log(areYouPlayingBanjo2("Ali")); // Ali does not play banjo





//Another Solution 
function areYouPlayingBanjo3(name) {
  return name.toLowerCase().startsWith("r")
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}
console.log(areYouPlayingBanjo3("Robert")); // Robert plays banjo
console.log(areYouPlayingBanjo3("ringo")); // ringo plays banjo
console.log(areYouPlayingBanjo3("Ali")); // Ali does not play banjo
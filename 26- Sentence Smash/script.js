


function smash (words) {
  let sentence = "";
  for(let i = 0; i < words.length; i++){
        sentence += words[i].trim() + " ";
  }
  return sentence;
   
};

console.log(smash(['hello', 'world', 'this', 'is', 'great']));
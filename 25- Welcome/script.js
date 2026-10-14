


// function welcome(language){
//  const languages = {
//   english: "Welcome",
//   czech: "Vitejte",
//   danish: "Velkomst",
//   dutch: "Welkom",
//   estonian: "Tere tulemast",
//   finnish: "Tervetuloa",
//   flemish: "Welgekomen",
//   french: "Bienvenue",
//   german: "Willkommen",
//   irish: "Failte",
//   italian: "Benvenuto",
//   latvian: "Gaidits",
//   lithuanian: "Laukiamas",
//   polish: "Witamy",
//   spanish: "Bienvenido",
//   swedish: "Valkommen",
//   welsh: "Croeso"
// };
// if(languages.hasOwnProperty(language)){
//   return languages[language];
// }else{
//  return languages["english"];
// }
// }
// console.log(welcome("germ"));



// Another Solution 
const languages = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso"
};

function welcome(language) {
  return languages[language] || languages.english;
}
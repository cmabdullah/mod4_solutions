// *******************************/
//********************************/
 /*******start programming********/
//********************************/
// *******************************/



// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yunus_Khan
Good Bye Jbbar
Hello Latiful_Islam
Good Bye Jihadul
Good Bye Jasim
Good Bye Jubayer
Hello Rakib
Hello Fahad
Hello Latif
Hello Habib
Good Bye Jamal



*/

(function () {

var names = ["Yunus_Khan" , "Jbbar", "Latiful_Islam", "Jihadul", "Jasim", "Jubayer", "Rakib", "Fahad", "Latif", "Habib" , "Jamal"];

for (var i = 0; i < names.length; i++) {


  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();

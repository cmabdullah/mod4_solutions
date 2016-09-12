
(function(window){

var helloSpeaker = {} ; //empty object @abu




var speakWord = "Hello ";// DO NOT attach the speakWord variable to the 'helloSpeaker' object. @abu







    helloSpeaker.speak =  function(name) {
  console.log(speakWord  + name);
}

window.helloSpeaker = helloSpeaker;


})(window);



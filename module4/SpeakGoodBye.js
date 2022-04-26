// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// xxSTEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// DO NOT attach the speakWord variable to the 'byeSpeaker' object.

// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// function speak(name) {
//   console.log(speakWord + " " + name);
// }
// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.

(function(window) {

  var byeSpeaker = {};

var speakWord = "Good Bye";

byeSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}

window.byeSpeaker = byeSpeaker;

})(window);
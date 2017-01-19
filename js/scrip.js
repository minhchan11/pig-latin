//BUSINESS LOGIC:
var userInput = 0;
var stringChar = [];
var vowels = ["a","e","i","o","u"];
function verify() {

  for (var i = 0; i < stringChar.length; i++) {
  vowels.forEach(function(vowel) {
    if (check = false && stringChar[0] !== vowel) {
      console.log("check worked");
      check = true
    if ((check = false && stringChar[0] === "q") && (stringChar[1] === vowels[4])) {
      console.log("qu detected");
    } else if (check = false && stringChar[1] !== vowel ) {
      console.log("double");
    }
    } else if ( check = false &&stringChar[0] !== vowel) {
      console.log(true);
    }
  });
outputString=stringChar.join("");
}}

//USER INTERFACE:
$(document).ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();
    userInput = $("#usertext").val();
    stringChar = userInput.split("");
    verify(stringChar);
  });
});

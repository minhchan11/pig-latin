//BUSINESS LOGIC:
var userInput = 0;
var stringChar = [];
var vowels = ["a","e","i","o","u"];
var outputString = 0;
var sentence = 0;
var eachword = 0;
var newwords = [];
var letter = [];
var j = 0;

function verify() {
  for (var j = 0; j <= newwords.length; j++) {
    newwords.map(function(newword) {
      letter.push(newword[j].split(""));
    console.log(letter);
    });
    for (var index = 0; index < vowels.length; index++) {
          if ((letter[j][0]) === vowels[index]) {


          } else {
              if ((letter[j][j] === "q") && (letter[j][j+1] === vowels[4])) {


              } else if (letter[j][1] !== vowels[index]) {


              }
            }

    }
  };


//     outputString=stringChar.join("");
};
// };

//USER INTERFACE:
$(document).ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();
    sentence = $("#usertext").val();
    eachword = sentence.split(" ");
    newwords.push(eachword);
    console.log(newwords);
    console.log(newwords.length);
    verify(letter);
  });
});

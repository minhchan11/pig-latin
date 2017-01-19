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
  for (var j = 0; j <= newwords.length+3; j++) {
    console.log(newwords.length);
    newwords.map(function(newword) {
      letter.push(newword[j].split(""));
    });
    for (var index = 0; index < vowels.length; index++) {
          console.log(letter[j]);
          if ((letter[j][0]) === vowels[index]) {
            console.log("first vowel");
          } else {
              if ((letter[j][j] === "q") && (letter[j][j+1] === vowels[4])) {
                console.log(" q u");
              } else if (letter[j][1] !== vowels[index]) {
                console.log("hooray");
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
    eachword= sentence.split(" ");
    newwords.push(eachword);
    console.log(newwords)
    verify(letter);
  });
});

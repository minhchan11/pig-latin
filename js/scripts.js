//BUSINESS LOGIC:
//Define strings and arrays to be used
var stringChar1 = 0;
var stringChar2 = 0;
var stringChar3 = 0;
var vowels = ["a","e","i","o","u","A","I","E","O","U"];
var sentence = 0;
var eachword = 0;
var result1 = 0;
var result2 = 0;
var Output = [];

function verify() {
  var output = [];
  eachword= sentence.split(" ");
  for (var j = 0; j < eachword.length; j++) {
    stringChar1 = eachword[j].charAt(0); // define variable for comparison
    stringChar2 = eachword[j].charAt(1);
    stringChar3 = eachword[j].charAt(2);
    if (vowels.indexOf(stringChar1) >-1 ) {
      result1 = eachword[j].concat("ay");
      output.push(result1);
    } else {
      if (vowels.indexOf(stringChar1) === -1 && (stringChar2 === "q"||stringChar2 === "u")) { //for "qu" at the beginning
      result2 = (eachword[j].slice(3)).concat(stringChar1+"quay")
    } else if (stringChar1 === "q" && stringChar2 === "u") {
      result2 = (eachword[j].slice(2)).concat("quay")
    } else if (vowels.indexOf(stringChar1) === -1 && vowels.indexOf(stringChar2) === -1 ) { //double consonants
      result2 = (eachword[j].slice(2)).concat(stringChar1+stringChar2+"ay")
    } else { result2 = (eachword[j].replace(stringChar1,"")).concat(stringChar1+"ay"); //single consonants
  }
  output.push(result2);
}
}
}

//USER INTERFACE:
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    sentence = $("#usertext").val();
    verify();
    $(".piglatin").show();
    Output = output.join(" ");
    $("#result").text(Output);
  });
});

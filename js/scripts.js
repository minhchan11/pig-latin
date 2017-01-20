//BUSINESS LOGIC:
var stringChar1 = 0;
var stringChar2 = 0;
var stringChar3 = 0;
var vowels = ["a","e","i","o","u","A","I","E","O","U"];
var sentence = 0;
var eachword = 0;

function verify() {
    eachword= sentence.split(" ");
    for (var j = 0; j < eachword.length; j++) {
    stringChar1 = eachword[j].charAt(0);
    stringChar2 = eachword[j].charAt(1);
    stringChar3 = eachword[j].charAt(2);
        if (vowels.indexOf(stringChar1) >-1 ) {
          result = eachword[j].concat("ay");
        } else {
          if (vowels.indexOf(stringChar1) === -1 && (stringChar2 === "q"||stringChar2 === "u")) {
            result = (eachword[j].slice(3)).concat(stringChar1+"quay")
          } else if (stringChar1 === "q" && stringChar2 === "u") {
            result = (eachword[j].slice(2)).concat("quay")
          } else if (vowels.indexOf(stringChar1) === -1 && vowels.indexOf(stringChar2) === -1 ) {
              result = (eachword[j].slice(2)).concat(stringChar1+stringChar2+"ay")
          } else { result = (eachword[j].replace(stringChar1,"")).concat(stringChar1+"ay");
          }


}
}
}


//     outputString=stringChar.join("");
// };
// };

//USER INTERFACE:
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    sentence = $("#usertext").val();
    verify();
  });
});

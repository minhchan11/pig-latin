//BUSINESS LOGIC:
var stringChar1 = 0;
var stringChar2 = 0;
var vowels = ["a","e","i","o","u","A","I","E","O","U"];
var sentence = 0;
var eachword = 0;

function verify() {
    eachword= sentence.split(" ");
    for (var j = 0; j < eachword.length; j++) {
    stringChar1 = eachword[j].charAt(0);
    stringChar2 = eachword[j].charAt(1);
        if (vowels.indexOf(stringChar1) >-1 ) {
          result1 = eachword[j].concat("ay");
          console.log(result1);
        } else {
          //   if ((vowels.indexOf(stringChar1) === -1) && (vowels.indexOf(stringChar2) === -1 )) {
          //   result3 = (eachword[j].slice(0,2)).concat(stringChar1+stringChar2+"ay")
          //   console.log(result3);
          // }
          // else {
          if (vowels.indexOf(stringChar1) === -1 && vowels.indexOf(stringChar2) === -1 ) {
              result3 = (eachword[j].slice(2)).concat(stringChar1+stringChar2+"ay")
              console.log(result3);
              }
          else if ( vowels.indexOf(stringChar1) === -1 )
          { result2 = (eachword[j].replace(stringChar1,"")).concat(stringChar1+"ay");
          console.log(result2); }


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

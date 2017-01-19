//BUSINESS LOGIC:
var stringChar1 = 0;
var stringChar2 = 0;
var vowels = ["a","e","i","o","u","A","I","E","O","U"];
var sentence = 0;
var eachword = 0;
var result1 = 0


function verify() {
    eachword= sentence.split(" ");
    for (var j = 0; j < eachword.length; j++) {
    stringChar1 = eachword[j].charAt(0);
    stringChar2 = eachword[j].charAt(1);
      for (var i = 0; i < vowels.length; i++) {
        if (stringChar1 === vowels[i]) {
          result1 = eachword[j].concat("ay");
          console.log(result1);
    } else {
      if (stringChar2 !== )
    result2 = (eachword[j].replace(stringChar1,"")).concat(stringChar1+"ay")
    console.log(result2);
  }
}

}
}
    // for (var i = 0; i < vowels.length; i++) {
    //       // if (stringChar === vowels[i]) {
    //         console.log(stringChar);
            // console.log(vowels[i]);
    //         console.log("vowel");
    //         alert("vowels");
    //       } else {
    //         return false;
    // //           if ((letter[j][j] === "q") && (letter[j][j+1] === vowels[4])) {
    // //             console.log(" q u");
    // //             alert("vowels");
    // //           } else if (letter[j][1] !== vowels[index]) {
    // //             console.log("hooray");
    // //             alert("vowels");
    //           }
            // }

    // }



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

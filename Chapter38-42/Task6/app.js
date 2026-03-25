var vowels = ["a", "e", "i", "o", "u"];
var userInput = prompt("Enter your sentence :").toLowerCase();
var minusVowels = "";

function chkVowels() {
  for (var i = 0; i < userInput.length; i++) {
    var ch = userInput[i];
    var isVowel = false;
    for (var j = 0; j < vowels.length; j++) {
      if (ch === vowels[j]) {
        isVowel = true;
        break;
      }
    }
    if (isVowel === false) {
      minusVowels += ch;
    }
}
    return minusVowels;
  }


console.log(chkVowels());

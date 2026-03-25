var vowels = ["a", "e", "i", "o", "u"];
var userInput = prompt("Enter your sentence :").toLowerCase();

function checkVowelsPairs(){
  var count = 0;
  for (var i = 0; i < userInput.length - 1; i++){
switch (userInput[i]) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    var next = userInput[i+1];
    if (
      next === "a" ||
      next === "e" ||
      next === "i" ||
      next === "o" ||
      next === "u" 
    )
    {
      count++
    }
    
    break;

  
}
  }
  return count;
}
console.log(userInput);
var result = checkVowelsPairs();
console.log(result)

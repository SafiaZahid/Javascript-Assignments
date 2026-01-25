//Task 11: 

var userInput = prompt("Enter a word :");
var firstChar = userInput.charAt(0);
console.log(firstChar);

var restOfString = userInput.slice(1);
console.log(restOfString);

var titleCased = (firstChar.toUpperCase() + restOfString.toLowerCase());
alert ("Title cased wod : " + titleCased);
//var titleCased = userInput.charAt(0).toUpperCase() + userInput.slice





    

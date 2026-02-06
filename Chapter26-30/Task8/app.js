var generateNumber = Math.round(Math.random()*10);
console.log(generateNumber);
var input = +prompt("Guess the number between 0 and 10");
var guess = "";

if (input ===generateNumber){
guess ="Congratulations! You guessed the number.";
}
else {
guess = "Sorry! The correct number was " + generateNumber + ", Try Again.";
}
document.write("<h3>" + guess + "</h3>")




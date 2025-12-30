var secretnum = 3;
var guessnum = Number(prompt("Guess the secret number between 1 and 10"));

if (secretnum == guessnum){
 document.write("<h1 style = 'color: blue';> Bingo! Correct answer.</h1>");
}
else if (guessnum + 1 == secretnum || guessnum - 1 == secretnum){
    document.write("<h1 style = 'color: lightgreen';> Close enough to the correct answer.</h1>");
}
else{
    document.write("<h1 style = 'color: red';> Wrong Answer. Try Again!</h1>");
}
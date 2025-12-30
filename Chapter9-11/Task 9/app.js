var guessnum = prompt("Enter a number:");
var dividedBy = (guessnum % 2);

if (dividedBy === 0) {
    document.write("<h3>It is an EVEN number.</h3>");
}
else{
    document.write("<h3>It is an ODD number. </h3>");
}
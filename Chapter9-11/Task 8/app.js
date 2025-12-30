var guessnum = prompt("Enter a number:");
var dividedBy = (guessnum % 3);

if (dividedBy === 0) {
    document.write("The number is divisible by 3.");
}
else{
    document.write("The number is not divisible by 3.");
}
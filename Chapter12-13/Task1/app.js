var char = prompt("Enter a character:");
var charCode = char.charCodeAt(0);

if (charCode >= 49 && charCode <= 57){
    document.write("You entered a number.");
}
else if(charCode >= 65 && charCode <= 90){
    document.write("You entered a capital letter.");
}
else if(charCode >= 97 && charCode <= 122){
    document.write("You entered a small letter.");
}
else{
    document.write("You entered a special character.");
};
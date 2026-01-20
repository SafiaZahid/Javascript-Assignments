var fName = prompt("Enter your first name:");
var lName = prompt("Enter your last name:");


var fNletter = fName.slice(0,1).toUpperCase();
var lNLetter = lName.slice(0,1).toUpperCase();

var fullName = fNletter+fName.slice(1).toLowerCase() + " " + lNLetter+lName.slice(1).toLowerCase();


alert ("Hello " + fullName);


    

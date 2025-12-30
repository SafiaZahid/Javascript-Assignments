var correctPassword = "js123456"

var userPassword = prompt("Enter the password");

if (userPassword == ""){
    document.write("Please enter your password");
}
else if (userPassword == correctPassword){
    document.write("Correct! the password you entered matches the original password");
}else{
    document.write("Incorrect password");
}


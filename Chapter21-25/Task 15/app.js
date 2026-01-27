    //Task 15: 

var password = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890qwertyuiopasdfghjklzxcvbnm";
var userPassword = prompt ("Enter your password");

while (true){
    if (userPassword.length < 6){
        alert("Your password is too short. It must be at least 6 characters long.");
    }
    else if (userPassword.charCodeAt(0) >= 48 && userPassword.charCodeAt(0) <= 57){
alert("Your password should not begin with a number.");
}
else {
    var hasNumber = false;
    var hasLetter = false;
    for (var i = 0; i < userPassword.length; i++){
        var code = userPassword.charCodeAt(i);
        if (code >= 65 && code <=90 || code >= 97 && code <= 122){
            hasLetter = true
        }
if (code >= 48 && code <= 57 ){
    hasNumber = true;
}
    }
    if (hasLetter && hasNumber) {
        alert("Password accepted ✅");
        break;
      } else {
        alert("Password must contain both letters and numbers");
      }
    }
    userPassword = prompt ("Enter your password");
}








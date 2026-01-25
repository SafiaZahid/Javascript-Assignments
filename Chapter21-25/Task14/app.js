//Task 13: 

var userName = prompt ("Enter your name : ");
var invalid = false;

for (var i = 0; i<userName.length; i++){
    charCode = userName.charCodeAt(i);
    if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64){
        invalid = true;
        break;
    }
}
if (invalid === true){
alert ("Please enter a valid user name");
}
else{
    alert ("Welcome " + userName + " To our website");
}






    

//Task 4:
document.write("<h2 style = 'color: orange;'> Learn Your Tables </h2>");
var userNum = +prompt ("Enter a number to show its multiplication table:" , 5) || 5;

var tableLen = +prompt ("Enter the length of the desired table : " , 10) || 10;
document.write("<h3 style = 'color: grey;'> Multiplication Table of " + userNum + " </h3>");

for (var i = 1; i <= tableLen; i++){
    document.write(userNum +" x " + i + " = " + (userNum * i) + "<br>")
};



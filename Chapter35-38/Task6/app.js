//Task 6
function factorial (){
    var firstNum = +prompt("Enter the desired factorial number");
var result = 1;

for (i = 1; i <= (firstNum); i++){
result = result * i;


};
alert("The factorial of " + firstNum + " is " + result);
};
factorial();

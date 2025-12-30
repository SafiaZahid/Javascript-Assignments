document.write("<h1 style = 'color : orange;'><u>Simple Calculator</u></h1>");

var firstNum =  Number (prompt("Enter the first number:"));
var secondNum =   Number(prompt("Enter the second number:"));
var operator = prompt ("Enter an operator(+, -, *, /, %):");

if (operator == "+"){
var result = (firstNum + secondNum);
// document.write("The result is " + result);
}
else if (operator == "-"){
    var result = (firstNum - secondNum);
    // document.write("The result is " + result);
    } 
else if (operator == "*"){
    var result = (firstNum * secondNum);
    // document.write("The result is " + result);
    } 
    else if (operator == "/"){
        var result = (firstNum / secondNum);
        // document.write("The result is " + result);
        } 
        else if (operator == "%"){
            var result = (firstNum % secondNum);
            // document.write("The result is " + result);
            }
    // else {
    //     document.write("Invalid operator");
    // };

    //document.write("The result is " + result);
if ( operator =="+" || operator == "-" || operator == "*" || operator == "/" || operator == "%"){
    document.write("<h2 style = 'color : green;'> The result is " + result + "</h2>");
}
else{
    document.write("<h2 style = 'color : red;'> Invalid operator </h2>");
}
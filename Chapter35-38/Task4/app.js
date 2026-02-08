function calculator(){
    var num1 = +prompt("Enter the first number:");
    var num2 = +prompt("Enter the second number:");
    var num3 = +prompt("Enter the third number:");
    var operator = prompt("Enter the operator (+, -, *, /):");
    var result;
    
    if (operator === "+"){
        result = (num1 + num2 + num3);
    }
    else if (operator === "-"){
        result = (num1 - num2 - num3);
    }
    else if (operator === "*"){
        result = (num1 * num2 * num3);
    }
    else if (operator === "/"){
        result = (num1 / num2 / num3);
    }

    alert("The result is: " + result);


};
calculator();
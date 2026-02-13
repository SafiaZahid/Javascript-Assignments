var display = document.getElementById('display');
var firstNumber ;
var operator;

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function setOperator(op) {
if (display.value == "") return;

firstNumber = display.value;
operator = op;

display.value = firstNumber + " " + operator + " ";
}


function calculate() {
// var [firstNum, operator, secondNum] = 
var parts = display.value.split(' ');
var firstNum = Number(parts[0]);
    var operator = parts[1];
    var secondNum = Number(parts[2]);
    var result;


if (operator == "+"){
    result = firstNum + secondNum;
}else if (operator == "-"){
    result = firstNum - secondNum;
    } else if (operator == "*"){
       result = firstNum * secondNum;
    } else if (operator == "/"){   
        if (Number(secondNum) == 0) {
            display.value = "Error";
            return;
          } 
        result = firstNum / secondNum;
    }
    display.value = result;
}
var a = 10;
document.write("<h3>Result:</h3>");
document.write("The value of a is : " +  a);
document.write("<br>--------------------------------------<br>");
//++a;
document.write("The value of ++a is : " + ++a +"<br>");
document.write("Now, The value of ++a is : 11" );

document.write("<br>--------------------------------------<br>");

document.write("Now, The value of ++a is : 11 <br>" );
document.write("The value of ++a is : " + ++a +"<br>");

document.write("<br>--------------------------------------<br>");
document.write("Now, The value of --a is :" + --a +"<br>" );
document.write("The value of --a is : 11 <br>");

document.write("--------------------------------------<br>");
document.write("The value of a-- is :" + a-- +"<br>" );
document.write("The value of --a is :" + a-- +"<br>");
document.write("________________________________________________________________________<br>");

//Task 2

var a = 2;
var b = 1 ;
var result = --a - --b + ++b + b--;

var step1 = --a;
var step2 = --b;
var step3 = ++b;
var step4 = b--;

document.write("<br>The value of --a = " + step1);
document.write("<br>The value of --a - --b = " + (step1 - step2));
document.write("<br>The value of --a - --b + ++b = " + (step1 - step2 + step3));

document.write("<br>The result is =" + result);















// var x, y;

var a = +prompt("Enter first number:");
var b = +prompt("Enter second number:");

if (a > b){
document.write( a + " is greater than " + b);
}
else if( a < b){
    document.write( b + " is greater than " + a);

}
else if ( a = b){
    document.write(a + " = " + b);
}
else {
    document.write("Invalid input");
}
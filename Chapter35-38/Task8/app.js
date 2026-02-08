function rightAngleTriangle(){
    var base = +prompt("Enter base ");
    var perpendicular = +prompt("Enter perpendicular");
    function square(Inputs){
      return Inputs * Inputs; 
}

var hypoteneusSquare = square(base) + square(perpendicular);
var hypoteneus = Math.round(Math.sqrt(hypoteneusSquare))
alert ("The hypotenuse of the triangle is: " + hypoteneus);
}
rightAngleTriangle();
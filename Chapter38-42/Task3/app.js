function calculateS (a, b, c){
var  s = (a + b + c) / 2;
    return s;
}

//console.log(calculateS(3, 4, 5));
function areaOfTriangle(a, b , c){
    var s = calculateS(a, b, c);
    var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;

}
console.log(areaOfTriangle(12, 15, 10));
var dollar = 0;
var sar = 25;

// 1 dollar = 104.80 Rs.
// 1 sar = 28 Rs.
var sarToPk = sar* 28;
var dollarToPk = dollar*104.8;

var totalAmt = sarToPk + dollarToPk;

document.write("<h1> Currency in PKR </h1>")
document.write("Total Currency in PKR = " + totalAmt);
var price1 = 45;
var price2 = 15;
var orderQuantity1 = 5;
var orderQuantity2 = 7;
var shipchrg = 200;
var cost1 = price1 * orderQuantity1;
var cost2 =  price2 * orderQuantity2;

document.write("<h1> Shopping Cart </h1>");
document.write("Price of item 1 = " + price1 + "<br>");
document.write("Price of item 2 = " + price2 + "<br>");
document.write("Quantity of item 1 is " + orderQuantity1 + "<br>");
document.write("Quantity of item 2 is " + orderQuantity2 + "<br>");
document.write("shipping Charges = " + shipchrg  + "<br>");
document.write("Cost of your order 1 = " + cost1 + "<br>");
document.write("Cost of your order 2 = " + cost2 + "<br>");
document.write("Total Cost of your order = " + (cost1+cost2 +shipchrg));




document.write("<h1> The Lifetime Supply Calculator </h1>");
var snack = "Chocolate";
var currentAge = 46;
var maxAge = 52;
var dayEstimate = 3;

var lifetimeSupply = (maxAge - currentAge) * 365 * dayEstimate;

document.write("Favorite Snack = " + snack +"<br>");
document.write("Current Age = " + currentAge +"<br>");
document.write("Estimated Maximum Age = " + maxAge +"<br>");
document.write("Amount of Snack per day = " + dayEstimate +"<br>");
document.write("You will need " + lifetimeSupply + " chocolate to last you until the ripe old age of " + maxAge +" years.");



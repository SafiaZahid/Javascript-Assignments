document.write("<h1>Traffic light, Traffic light!! What do you mean??🚦🚦 🔴🟡🟢 🚦🚦 </h1><br><br>");

var color = prompt ("Enter any traffic light color(only one):");

if (color ==="red"){
    document.write(" <h2>🔴 Must Stop!! </h2>");
}
else if (color === "yellow"){
    document.write(" <h2>🟡 Ready to Move!! </h2>");
}
else if (color === "green"){
    document.write(" <h2>🟢 Move Now!! </h2>");
}
else{
    document.write(" <h2>Invalid Color, Please enter red, yellow or green 🔴🟡🟢.</h2>");
}
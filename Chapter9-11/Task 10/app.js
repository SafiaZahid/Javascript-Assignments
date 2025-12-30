document.write("<h1>Weather Report</h1>");

var temp = prompt("What is the tempeture outside?");

if (temp > 40){
    document.write("<h2>It is too hot outside 🌞 🥵 🌞.</h2>");
}
else if (temp >30){
    document.write("<h2>The weather today is normal 🤗.</h2>");
}
else if(temp > 20){
    document.write("<h2>Today's weather is cool 😎.</h2>");
}
else{
    document.write("<h2>OMG! Today's weather is so cool 🥶.</h2>");
};
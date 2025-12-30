var fuel = prompt("How much fuel is remaining in your Car🚗 🚙 🏎️ 🚓?(in litres) ");

if (fuel <= 0.25 ){
    document.write("<h3 style = 'color: red' > Please refill the fuel in your car!!!⛽⛽⛽ </h3>");
}
else{
    document.write("<h3 style = 'color: green' > You are good to go!! Safe travels! </h3>");
}
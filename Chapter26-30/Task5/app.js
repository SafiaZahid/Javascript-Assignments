var generateValue = Math.random();
var improvedValue =(generateValue * 2) +1;
var coinValue = Math.floor(improvedValue);
var coin = "";

if (coinValue === 2){
    document.write(coinValue + "<br>");
//     document.write("Random coin Value =  Heads");
coin = "Heads";
}
else{
    document.write(coinValue + "<br>");
    // document.write("Random coin Value =  Tails");
    coin = "Tails";
};
document.write("Random coin Value = " + coin);




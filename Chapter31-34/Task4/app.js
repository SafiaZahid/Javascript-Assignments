var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var date = new Date();
console.log(date);


var day = date.getDay();

if (day === 0 || day === 6){
    alert("It's Fun day!");
}
else{
    alert("It's a working day.");
}







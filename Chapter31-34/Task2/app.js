var months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


var date = new Date();
console.log(date);


var month = date.getMonth();
var currentMonth = months[month];
//document.write("<h3>The current Month is  : " + currentMonth + "<h3>");
alert("Current Month : "+ currentMonth);






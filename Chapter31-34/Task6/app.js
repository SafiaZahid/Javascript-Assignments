var date = new Date();
var milliSec = date.getTime();
console.log(milliSec);

var minutes = milliSec / 60000;
console.log(minutes);

document.write ("<h3 >Current Date and Time : " + date + "</h3>");
document.write ("<h3>Milliseconds since January 1, 1970 : " + milliSec + "</h3>");
document.write ("<h3>Minutes since January 1, 1970 : " + minutes + "</h3>");










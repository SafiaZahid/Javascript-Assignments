var date = new Date();
console.log(date);

var laterDate = new Date("January 1, 2026");
var diff = date.getTime() - laterDate.getTime();
console.log(diff);
var diffSec = Math.round(diff /1000);
console.log(diffSec);
document.write("On Reference date <b><u>" + date + " , " + diffSec + "sec </u></b>had passed since beginning of 2026");



















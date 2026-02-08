var date = new Date();
console.log(date);

var firstRamadan = new Date("february 18, 2026");
console.log(firstRamadan);

// var diff = firstRamadan - date;
// console.log(diff);
var diff = firstRamadan.getTime() - date.getTime();
console.log(diff);

var days = Math.round(diff / (1000 * 60 * 60 * 24));// 1000 milliseconds = 1 second, 60 seconds = 1 minute, 60 minutes = 1 hour, 24 hours = 1 day
console.log(days);
alert("There are " + days + " days left until the first day of Ramadan!");

















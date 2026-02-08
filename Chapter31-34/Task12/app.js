var date = new Date();
console.log("Current Date : " + date);

// var hour = date.getHours();
// console.log("Current Hour : " + hour);

// var oneHourAgo = hour - 1;
// console.log(oneHourAgo);

//var oneHourAgo = new Date(date.getTime() - (60 * 60 * 1000))
//console.log("1 hour ago, it was : " + oneHourAgo);
// one hour ago = - 3600000
// one day ago = - 3600000 *24
// one month ago = - 3600000 * 24 * 30
// one year ago = - 3600000 * 24 * 365
// one hundred year ago  = - 3600000 * 24 *  365 * 100

// var oneHundredYearsAgo = new Date(date.getTime() - ( 3600000 * 24 *  365 * 100));
// console.log(oneHundredYearsAgo);

var oneHundredYearsAgo = new Date(date);
oneHundredYearsAgo.setFullYear(date.getFullYear()) - 100;
console.log("100 years ago, it was : " + oneHundredYearsAgo);
document.write("<h3>Current Date : " + date + "<h3>");
document.write("<h3>100 years ago, it was : " + oneHundredYearsAgo + "</h3>");




















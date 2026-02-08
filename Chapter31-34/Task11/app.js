var date = new Date();
console.log("Current Date : " + date);

// var hour = date.getHours();
// console.log("Current Hour : " + hour);

// var oneHourAgo = hour - 1;
// console.log(oneHourAgo);

var oneHourAgo = new Date(date.getTime() - (60 * 60 * 1000))
console.log("1 hour ago, it was : " + oneHourAgo);



















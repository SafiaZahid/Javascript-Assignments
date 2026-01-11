//Task 8:

document.write("<h3>The Largest Number in an Array </h3>");

var numbers = [24, 53, 78, 91, 12];
var largestNum = numbers[0];

for (var i = 1; i <= numbers.length; i++) {
  if (largestNum < numbers[i]) {
    largestNum = numbers[i];
  }
}
document.write("Array items : " + numbers + "<br>");
document.write("The Largest number is " + largestNum);


//Task 9: 

document.write("<h3>The Smallest Number in an Array </h3>");


var smallestNum = numbers[0];

for (var i = 1; i < numbers.length; i++) {
  if (smallestNum > numbers[i]) {
   smallestNum = numbers[i];
  }
}
document.write("Array items : " + numbers + "<br>");
document.write("The Smallest number is " + smallestNum);


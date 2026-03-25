var WorkingHours = Number(prompt("Enter number of hours you worked: "))


function calculateOverTime(hours) {
  if (hours > 40){
    var overTime = hours - 40;
   var overTimePay = overTime * 12;
return `Your overtime pay is ${overTimePay}`;

  }
  else {
    return `No Overtime`
  }
}
console.log(calculateOverTime(WorkingHours))
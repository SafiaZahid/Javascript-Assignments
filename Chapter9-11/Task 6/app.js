var eng = +prompt("Please input your English score;");
var math = +prompt("Please input your Math score;");
var urdu = +prompt("Please input your Urdu score;");
var total = eng + urdu + math;
var maxNum = 300;
var percentage = (total / maxNum) * 100;

// document.write("<h1 style = 'color:blue;'><u> Marks Sheet</u></h1>");
// document.write("<h3 style = 'color:grey;'> Max. Marks = " + maxNum + " </h3>");
// document.write("<h3 style = 'color:grey;'> Marks Obtained = " + total + "</h3>");
// document.write("<h3 style = 'color:grey;'> Percentage = " + percentage + "%</h3>");

// if (percentage >= 80){
//     document.write("<h3 style = 'color:grey;'> Grade = A+ </h3>");
// }
// else if(percentage > 70){
//     document.write("<h3 style = 'color:grey;'> Grade = A </h3>");
// }
// else if(percentage > 60){
//     document.write("<h3 style = 'color:grey;'> Grade = B </h3>");
// }
// else if(percentage > 50){
//     document.write("<h3 style = 'color:grey;'> Grade = C </h3>");
// }
// else if(percentage > 40){
//     document.write("<h3 style = 'color:grey;'> Grade = D </h3>")
// }
// else {
//     document.write("<h3 style = 'color:grey;'> Grade = FAIL</h3>")
// };

// if (percentage >= 80){
//     document.write("<h3 style = 'color:grey;'> Remarks = Welldone!! </h3>");
// }
// else if (percentage > 70){
//     document.write("<h3 style = 'color:grey;'> Remarks = Keep it Up!! </h3>");
// }
// else if  (percentage > 60){
//     document.write("<h3 style = 'color:grey;'> Remarks = You Need to Improve!! </h3>");
// }
// else if (percentage > 50){
//     document.write("<h3 style = 'color:grey;'> Remarks = Work Hard!! </h3>");
// }
// else if (percentage > 40){
//     document.write("<h3 style = 'color:grey;'> Remarks = Work Hard!! </h3>");
// }
// else {
//     document.write("<h3 style = 'color:grey;'> Remarks = Better Luck Next time!! </h3>");
// }

// document.write("<h1 style = 'color:blue;'><u> Marks Sheet</u></h1>");
// document.write("<h3 style = 'color:grey;'> Max. Marks = " + maxNum + " </h3>");
// document.write(
//   "<h3 style = 'color:grey;'> Marks Obtained = " + total + "</h3>"
// );
// document.write(
//   "<h3 style = 'color:grey;'> Percentage = " + percentage + "%</h3>"
// );

// var grade, remarks;
// if (percentage >100){
//     grade = document.write("<h3 style = 'color:grey;'> Grade = Invalid </h3>");
//     remarks = document.write("<h3 style = 'color:grey;'> Remarks = Enter Marks out of hundred. </h3>");
// }
// else if (percentage >= 80) {
//   grade = document.write("<h3 style = 'color:grey;'> Grade = A+ </h3>");
//   remarks = document.write("<h3 style = 'color:grey;'> Remarks = Welldone!! </h3>");
// } else if (percentage > 70) {
//   grade = document.write("<h3 style = 'color:grey;'> Grade = A </h3>");
//   remarks = document.write("<h3 style = 'color:grey;'> Remarks = Keep it Up!! </h3>");
// } else if (percentage > 70) {
//   grade = document.write("<h3 style = 'color:grey;'> Grade = B </h3>");
//   remarks = document.write("<h3 style = 'color:grey;'> Remarks = You Need to Improve!! </h3>");
// } else if (percentage > 60) {
//   grade = document.write("<h3 style = 'color:grey;'> Grade = C </h3>");
//   remarks = document.write("<h3 style = 'color:grey;'> Remarks = Work Hard!! </h3>");
// } else if (percentage > 50) {
//   grade = document.write("<h3 style = 'color:grey;'> Grade = C </h3>");
//   remarks = document.write("<h3 style = 'color:grey;'> Remarks = Work Hard!! </h3>");
// } else if (percentage > 40) {
//   grade = document.write("<h3 style = 'color:grey;'> Grade = D </h3>");
//   remarks = document.write("<h3 style = 'color:grey;'> Remarks = Work Hard!! </h3>"
//   );
// } else {
//   grade = document.write("<h3 style = 'color:grey;'> Grade = FAIL </h3>");
//   remarks = document.write("<h3 style = 'color:grey;'> Remarks = Sorry! Better Luck Next Time.</h3>");
// };

document.write("<h1 style = 'color:blue;'><u> Marks Sheet</u></h1>");
document.write("<table border = '1' cellspacing = '20' cellpadding = '20'><tr><th> Max. Marks </th><td> " + maxNum + " </td></tr>");
document.write("<tr><th>  Marks Obtained  </th><td>" + total + "</td></tr>");
document.write("<tr><th> Percentage </th><td> " + percentage + "%</td></tr>");

var grade, remarks;
if (percentage >100){
    grade = document.write("<tr><th> Grade </th><td> Invalid </td></tr>");
    remarks = document.write("<tr><th> Remarks </th><td> Enter Marks out of hundred. </td></tr>");
}
else if (percentage >= 80) {
  grade = document.write("<tr><th> Grade </th><td> A+ </td></tr>");
  remarks = document.write("<tr><th> Remarks </th><td> Welldone!! </td></tr>");
} else if (percentage > 70) {
  grade = document.write("<tr><th> Grade </th><td> A </td></tr>");
  remarks = document.write("<tr><th> Remarks </th><td> Keep it Up!! </td></tr>");
} else if (percentage > 70) {
  grade = document.write("<tr><th> Grade </th><td> B </h3>");
  remarks = document.write("<tr><th> Remarks </th><td> You Need to Improve!! </h3>");
} else if (percentage > 60) {
  grade = document.write("<tr><th> Grade </th><td> C </td></tr>");
  remarks = document.write("<tr><th> Remarks </th><td> Work Hard!! </td></tr>");
} else if (percentage > 50) {
  grade = document.write("<tr><th> Grade </th><td> C </td></tr>");
  remarks = document.write("<tr><th> Remarks </th><td> Work Hard!! </td></tr>");
} else if (percentage > 40) {
  grade = document.write("<tr><th> Grade </th><td> D </td></tr>");
  remarks = document.write("<tr><th> Remarks </th><td> Work Hard!! </td></tr>"
  );
} else {
  grade = document.write("<tr><th> Grade </th><td> FAIL </td></tr>");
  remarks = document.write("<tr><th> Remarks </th><td> Sorry! Better Luck Next Time.</td></tr></table>");
};

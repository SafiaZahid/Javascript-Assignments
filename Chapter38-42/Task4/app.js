var MaxMarks = 300;

var sub1 = Number(prompt("Enter marks for subject 1:"));
var sub2 = Number(prompt("Enter marks for subject 2:"));
var sub3 = Number(prompt("Enter marks for subject 3:"));
var obtainedMarks = sub1 + sub2 + sub3;

 function averageScore(sub1, sub2, sub3){
 return (sub1 + sub2 + sub3) / 3;
} 

 function percentageScore(obtainedMarks, MaxMarks){
    return (obtainedMarks / MaxMarks) * 100;
}
function result (){
    console.log("The average score is " + averageScore(sub1, sub2, sub3));
    console.log("The percentage score is " + percentageScore(obtainedMarks, MaxMarks) + "%");
}

result();
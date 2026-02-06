var generateNum = Math.random();
var improvedNum =(generateNum * 6) +1;
var numOnDice = Math.floor(improvedNum);
console.log(numOnDice);

// var diceFace = "";
// if(numOnDice === 1){
//     diceFace = "●";
// } else if(numOnDice === 2){
//     diceFace = "● ●";
// } else if(numOnDice === 3){
//     diceFace = "● ● ●";
// } else if(numOnDice === 4){
//     diceFace = "● ●\n● ●";
// } else if(numOnDice === 5){
//     diceFace = "● ●\n●\n● ●";
// } else if(numOnDice === 6){
//     diceFace = "● ●\n● ●\n● ●";
// }

// document.querySelector('.box').innerText = diceFace;
document.write("Random Dice Value : " + numOnDice);



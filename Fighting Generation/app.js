var char1 = document.getElementById("char1")
var char2 = document.getElementById("char2")
var containerWidth = window.innerWidth
var charWidth = 100


var left = 0;
var right = 1050;

function animateChar(event){
  console.log(event.keyCode)
  if(event.keyCode === 39 && left < containerWidth - charWidth){
    left += 10
    char1.style.left = left + "px"
    char1.src = "https://www.fightersgeneration.com/nz7/char/breakers/sho-kamui-dash.gif"
    char1.style.transform = "scaleX(1)"
    setTimeout(() => {
      char1.src = "https://www.fightersgeneration.com/nz7/char/breakers/sho-kamui-standing-attacks.gif"
    }, 1000);
  }
  if(event.keyCode === 37 && left > 10){
left -= 10
char1.style.left = left + "px"
char1.src = "https://www.fightersgeneration.com/nz7/char/breakers/sho-kamui-dash.gif"
char1.style.transform = "scaleX(-1)"
setTimeout(() => {
  char1.src = "https://www.fightersgeneration.com/nz7/char/breakers/sho-kamui-karate-taunt.gif"
}, 1000);
  }
  if (event.keyCode === 38 ){
    char1.src = "https://www.fightersgeneration.com/nz7/char/breakers/sho-kamui-standing-attacks.gif"
    setTimeout(() => {
      char1.src = "https://www.fightersgeneration.com/nz7/char/breakers/sho-kamui-karate-taunt.gif"
    }, 1000);
  }

//CHAR2
//D key
  if(event.keyCode === 68 && right < containerWidth - charWidth){
    right += 10
    char2.style.left = right + "px"
    char2.src = "https://www.fightersgeneration.com/nz7/char/breakers/dao-long/dao-long-breakers-dash.gif"
    char2.style.transform = "scaleX(1)"
    setTimeout(() => {
      char2.src = "https://www.fightersgeneration.com/nz7/char/breakers/dao-long/dao-long-breakers-cmon.gif"
    }, 1000);
  }

  //A key
  if(event.keyCode === 65 && right > 0){
    right -= 10
    char2.style.left = right + "px"
    char2.src = "https://www.fightersgeneration.com/nz7/char/breakers/dao-long/dao-long-breakers-dash.gif"
    char2.style.transform = "scaleX(-1)"
    setTimeout(() => {
      char2.src = "https://www.fightersgeneration.com/nz7/char/breakers/dao-long/dao-long-breakers-cmon.gif"
    }, 1000);
      }

      if (event.keyCode === 87 ){
        char2.style.height = "200px"
        char2.src = "https://www.fightersgeneration.com/nz7/char/breakers/dao-long/dao-long-breakers-win.gif"
        setTimeout(() => {
          char2.src = "https://www.fightersgeneration.com/nz7/char/breakers/dao-long/dao-long-breakers-cmon.gif"
        }, 1000);
      }

}
window.onkeydown = animateChar

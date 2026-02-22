var count = 0;
var  counter = document.getElementById("counter");
function addCounter(){
    count = count + 1;
    counter.innerHTML = count;
}
function lessCounter(){
    count = count - 1
    counter.innerHTML = count;

}
function reset(){
    count = 0
    counter.innerHTML = count;

}
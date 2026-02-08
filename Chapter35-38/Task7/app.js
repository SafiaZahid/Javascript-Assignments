function count (){
    var counterStart = +prompt ("Enter a number to start the count from; ");
    var counterEnd = +prompt ("Enter a number to stop the count at; ");
    for (var i = counterStart; i <= counterEnd; i++){
        document.write(i + "<br>");
    }

}
count();
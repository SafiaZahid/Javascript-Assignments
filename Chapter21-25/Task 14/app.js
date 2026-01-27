    //Task 14: 

    var bakeryItems = [ "Cake", "Apple pie", "Cookies", "Chips", "patties" ];

    var userInput = prompt ("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
    var found = false;

    for (var i = 0; i <= bakeryItems.length; i++){
        if (bakeryItems[i].toLowerCase() === userInput.toLowerCase()){
            alert(userInput + " is available at index " + i + " in our bakery");
            found = true;
            break;
    }
}
    if (!found){
        alert("We are sorry. " + userInput + " is not available in our bakery");
    }




var bakeryItems =["cake" , "apple pie", "cookie", "chips", "patties"];

var userInput = prompt ("Welcome to ABC Bakery 🥨🥨🧁🧁🥨🥨!!! \n What do you want to order Sir/Ma'am?");
userInput = userInput.toLowerCase();
for (var i = 0; i < bakeryItems.length ; i++){
    if (userInput === bakeryItems[i]){
        document.write (userInput + " is available at index " + i + " in our bakery ");
    }
}; 

document.write("We are sorry. " + userInput + " is not available in our bakery");


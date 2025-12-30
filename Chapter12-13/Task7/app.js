var greeting;

var time = prompt ("Enter the current hour (0000-2359):");

if (time >= 0 && time < 1200){
    greeting = "Good Morning!☀️☕️☕️☀️";
}
else if (time >= 1200 && time < 1700){
    greeting = ("Good Afternoon!🌞😎😎🌞");
}
else if (time >= 1700 && time < 2100){
 greeting = ("Good Evening!🌙✨✨🌙");
}
else if (time >= 2100 && time <= 2359){
    greeting =("Good Night! 🥱🛌🥱");
}
else{
    greeting = ("Invalid time entered.");
};

document .write("<h1 style = 'color: orange'> " + greeting + "</h1>");

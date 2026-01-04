//Task a:

var colors = [];
console.log (colors);
document.write("Initial colors array: " + colors + "<br>");

//adding colors at the end of the array
var color1 = prompt ("Enter the first color of your choice:");
colors.push(color1);
console.log (colors);
document.write("After adding first color: " + colors + "<br>");

//Task b:
var color2 = prompt ("Enter the last color of your choice:");
colors.push(color2);
console.log (colors);
document.write("After adding second color: " + colors + "<br>");

//Task c:
//adding colors at the beginning of the array
//var color3 = prompt ("Add two more colors to the beginning of your choice list:");
colors.unshift("Purple", "Orange");
console.log (colors);
document.write("After adding two colors at the beginning: " + colors + "<br>");

//Task d:
//Removing the first color from the array
//var color = prompt ("Remove one color from the beginning of your choice list:");
colors.shift();
console.log (colors);
document.write("After removing the first color: " + colors + "<br>");

//Task e:
//Removing the last color from the array
//var color = prompt ("Remove one color from the end of your choice list:");
colors.pop();
console.log(colors);
document.write("After removing the last color: " + colors + "<br>");

//Task f:
// Adding a color at a specific index
var index = prompt ("Enter the index number where you want to add a color: (0-1)");
var color = prompt ("Enter the color you want to add:");

if (index == 0){
    colors.unshift(color);
    }
else {
    colors.push(color);
};
console.log (colors);
document.write("After adding color at index " + index + ": " + colors + "<br>");

//Task g:

//Removing color(s) from a specific index
var removeIndex = prompt ("Enter the index number from where you want to remove color(s): (0-4)");
var removeCount = prompt ("Enter the number of colors you want to remove:");
colors.splice(removeIndex, removeCount);
console.log (colors);
document.write("After removing " + removeCount + " color(s) from index " + removeIndex + ": " + colors + "<br>");








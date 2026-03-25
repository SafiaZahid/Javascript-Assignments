var userDistance = Number(prompt("Enter the distance:"));
// function toMeters (km){
//   //1Km = 1000m

// var distanceInMeters = km * 1000
// return (`The distance is ${distanceInMeters}m`)
// }
// console.log(toMeters(userDistance))

// function toCentiMeters (km){
//   //1km = 100,000cm

// var distanceInCentiMeters = km * 100000
// return (`The distance is ${distanceInCentiMeters}cm`)
// }
// console.log(toCentiMeters(userDistance))

// function toFeet (km){
//   //1km = 3280.84feet

// var distanceInFeet = km * 3280.84
// return (`The distance is ${distanceInFeet}feet`)
// }
// console.log(toFeet(userDistance))

// function toInches (km){
//   //1km = 39370.1inches

// var distanceInInches = km * 39370.1
// return (`The distance is ${distanceInInches}inches`)
// }
// console.log(toInches(userDistance))

function convertAll(km) {
  var distanceInMeters = km * 1000;
  var distanceInCentiMeters = km * 100000;
  var distanceInFeet = km * 3280.84;
  var distanceInInches = km * 39370.1;

  return `The Distance is:
    Meters = ${distanceInMeters}m
    Centimeters = ${distanceInCentiMeters}cm
    Feet = ${distanceInFeet}feet
    Inches = ${distanceInInches}inches`;
}
console.log(convertAll(userDistance));

function leapYear (year){
    if ((year % 4 ===0 && year % 100 !== 0) || year % 400 === 0 ){
        return console.log (year + " is a leap year.");

    }
    else{
        return console.log (year + " is not a leap year.");
    }
}
leapYear(2024);
leapYear(2023);
leapYear(1990);
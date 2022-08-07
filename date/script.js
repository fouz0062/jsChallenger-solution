//Check if two dates fall on the exact same day
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
function myFunction(a, b) {
    return a.getDay() == b.getDay() ? true : false;
}

//Check if two dates are equal
// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
function myFunction(a, b) {
    return a.getTime() == b.getTime();
}

//Calculate difference between two dates in hours, minutes, and seconds
// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds
function myFunction(a, b) {
    var dte = {};
    dte.hrs = Math.abs(a.getHours() - b.getHours());
    dte.min = Math.abs(a.getMinutes() - b.getMinutes());
    dte.sec = Math.abs(a.getSeconds() - b.getSeconds());
    return dte;
}

//Check if one date is earlier than another
// Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise
function myFunction(a, b) {
    return a.getTime() < b.getTime() ? true : false;
}
//----------------------------------------------
//Return the number of days between two dates
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
function myFunction(a, b) {
    return Math.abs((a.getTime() - b.getTime()) / (60 * 60 * 24 * 1000));
}
//---------------------------------
//Add n days to an existing date
// Write a function that takes as argument a date instance (a) and a number (b)
// It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC
function myFunction(a, b) {
    var c = a.getTime() / (60 * 60 * 24 * 1000);
    return (c + b) * 24 * 60 * 60 * 1000;
}
//--------------------------------
//Check if two dates are within 1 hour from each other
// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise
function myFunction(a, b) {
    var c = a.getHours() * 60 + a.getMinutes();
    var d = b.getHours() * 60 + b.getMinutes();
    return Math.abs(c - d) / 60 <= 1 ? true : false;
}
//a

function myFunction(a, b) {
    return Math.abs(a - b) / 1000 / 60 <= 60;
}
//---------------------------------------------
//Return the next nearest quarter hour of a date
// Write a function that takes a Date instance as argument
// It should return the next nearest quarter hour in minutes
// For example, if the given date has the time 10:01 the function should return 15

function myFunction(date) {
    let d = date.getMinutes();
    if (d < 15) {
        d = 15;
    } else if (d < 30) {
        d = 30;
    } else if (d < 45) {
        d = 45;
    }
    return d;
}

//a
function myFunction(date) {
    const quarter = 15 * 60 * 1000;
    const closestQuarter = new Date(Math.round(date / quarter) * quarter);
    const nextQuarter =
        closestQuarter.getTime() < date.getTime() ?
        new Date(closestQuarter.getTime() + quarter) :
        closestQuarter;
    return nextQuarter.getMinutes();
}
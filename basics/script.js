//How many times does a character occur?
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a, b) {
    return b.split(a).length - 1;
}

//Find next higher natural number that is divisble by y
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
function myFunction(x, y) {
    while (x % y !== 0) {
        x++;
    }
    return x;
}
//Insert character after every n characters (backwards)
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
function myFunction(a, b) {
    a = a.split("").reverse();
    var i = 0;
    var c = [];
    while (i < a.length) {
        if (i % 3 == 2) {
            c.push(b + a[i].toString());
        } else {
            c.push(a[i].toString());
        }
        i++;
    }
    return c.reverse().join("");
}

function myFunction(a, b) {
    let result = [];
    let rest = a;
    while (rest.length) {
        result.push(rest.slice(-3));
        rest = rest.slice(0, -3);
    }
    return result.reverse().join(b);
}

function myFunction(a, b) {
    return a
        .split("")
        .reverse()
        .map((val, index) => {
            return index % 3 == 2 ? b + val : val;
        })
        .reverse()
        .join("");
}

//----------------------------------------------
//Clear up the chaos behind these strings
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
//Your solution
function myFunction(a, b) {
    var c = a
        .charAt(0)
        .toUpperCase()
        .concat(
            a.concat(b.split("").reverse().join("")).replaceAll("%", "").substring(1)
        );

    return c;
}

//a

function myFunction(a, b) {
    const func = (x) => x.replace("%", "");
    const first = func(a);
    const second = func(b).split("").reverse().join("");
    return first.charAt(0).toUpperCase() + first.slice(1) + second;
}
//-----------------------------------------
//Find the correct word by incrementing letters in alphabet
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
function myFunction(str) {
    var d = str.split("");
    var temp = d.map((val) => {
        return String.fromCharCode(val.charCodeAt(0) + 1);
    });
    return temp.join("");
}

//a
function myFunction(str) {
    const arr = [...str];
    const correctedArray = arr.map((e) =>
        String.fromCharCode(e.charCodeAt() + 1)
    );
    return correctedArray.join("");
}
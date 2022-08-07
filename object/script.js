//Accessing object properties three

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
function myFunction(obj, key) {
    return obj[key];
}

//-------------------------------------------------------
//Accessing object properties two

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor
function myFunction(obj) {
    return obj["prop-2"];
}

//---------------------------------------------------------
//Creating Javascript objects one
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object
function myFunction(a) {
    const dummy = {
        key: a,
    };
    return dummy;
}

//--------------------------------
//Creating Javascript objects two
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
function myFunction(a, b) {
    const d = {
        [a]: b,
    };
    return d;
}
//------------------------------------------

//Check if property exists in object
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise
function myFunction(a, b) {
    return a.hasOwnProperty(b);
}

//----------------------------------------------

//Extract keys from Javascript object
// Write a function that takes an object (a) as argument
// Return an array with all object keys
function myFunction(a) {
    return Object.keys(a);
}

//------------------------------------------
//Extract keys from Javascript object

// Write a function that takes an object (a) as argument
// Return an array with all object keys
function myFunction(a) {
    return Object.keys(a);
}
//=----------------------
//Creating Javascript objects three

//// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

function myFunction(a, b) {
    let c = {};
    for (let i = 0; i < a.length; i++) {
        c[a[i]] = b[i];
    }
    return c;
}
//------------------------------------
//Replace empty strings in object with null values
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object
function myFunction(obj) {
    let d = Object.keys(obj);
    for (let i = 0; i <= d.length; i++) {
        if (obj[d[i]] == "" || obj[d[i]] == " ") {
            obj[d[i]] = null;
        }
    }
    return obj;
}

//--------------------------------------
//Merge two objects with matching keys
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'
function myFunction(x, y) {
    y["d"] = y["b"];
    delete y["b"];
    return {...x, ...y };
}

//----------------------
//Sum object values
//// Write a function that takes an object (a) as argument
// Return the sum of all object values

function myFunction(a) {
    let d = Object.keys(a);
    var e = 0;
    for (let i = 0; i < d.length; i++) {
        e = e + a[d[i]];
    }
    return e;
}
//---------------------------------------

//Add property to each object in array

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array
function myFunction(arr, str) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].continent = str;
    }
    return arr;
}

//------------------------------------------
//Remove a property from an object
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'
function myFunction(obj) {
    delete obj.b;
    return obj;
}

//------------------------------------------
//Swap object keys and values
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
function myFunction(obj) {
    var a = Object.keys(obj);
    var b = Object.values(obj);
    var c = {};
    for (let i = 0; i < a.length; i++) {
        c[b[i]] = a[i];
    }
}
//-----------------------------------------
//Multiply all object values by x
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
function myFunction(a, b) {
    var c = Object.values(a);
    var d = Object.keys(a);
    var e = {};
    for (let i = 0; i < c.length; i++) {
        e[d[i]] = c[i] * b;
    }
    return e;
}
//--------------------
//Check if property exists in object and is truthy
// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise
function myFunction(a, b) {
    return a[b] != null || a[b] != undefined ? true : false;
}
//a
function myFunction(a, b) {
    return Boolean(a[b]);
}

//Extracting information from objects
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

function myFunction(obj) {
    let person = {};
    for (prop in obj) {
        if (prop == "fn" || prop == "ln") {
            person[prop] = obj[prop];
        }
        if (prop == "size") {
            person[prop] = obj[prop] + "cm";
        }
        if (prop == "weight") {
            person[prop] = obj[prop] + "kg";
        }
    }
    return person;
}

//a
function myFunction(obj) {
    return {
        fn: obj.fn,
        ln: obj.ln,
        ...(obj.size && { size: `${obj.size}cm` }),
        ...(obj.weight && { weight: `${obj.weight}kg` }),
    };
}
//----------------------------------
//Convert array to object with counter
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array
function myFunction(a) {
    let b = {};
    for (let i = 0; i < a.length; i++) {
        if (b.hasOwnProperty(a[i]) == false) {
            b[a[i]] = 1;
            console.log(a[i]);
        } else {
            b[a[i]] = parseInt(b[a[i]]) + 1;
        }
    }
    return b;
}
//a
function myFunction(a) {
    return a.reduce((acc, cur) => {
        return {...acc, [cur]: (acc[cur] || 0) + 1 };
    }, {});
}
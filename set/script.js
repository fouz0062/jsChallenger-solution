//Delete element from Set
// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result

function myFunction(set, val) {
    set.delete(val);
    return set;
}

//-----------------------------------
//Creating Javascript Sets
// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result
function myFunction(a, b, c) {
    var s = new Set();
    s.add(a);
    s.add(b);
    s.add(c);
    return s;
}
//-------------------------------------
//Check if value is present in Set
// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set
function myFunction(set, val) {
    return set.has(val);
}
//------------------------------
//Convert a Set to Array
// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array
function myFunction(set) {
    let arr = [];
    for (val of set) {
        arr.push(val);
    }
    return arr;
}

//a
function myFunction(set) {
    return [...set];
}
//---------------------------------------------------
//Get union of two sets
// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code
function myFunction(a, b) {
    return new Set([...a, ...b]);
}
//a
function myFunction(a, b) {
    const result = new Set(a);
    b.forEach((el) => result.add(el));
    return result;
}
//--------------------------------------------------
Add multiple elements to Set
// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set
function myFunction(set, arr) {

    return new Set([...set, ...arr]);
}
//a
function myFunction(set, arr) {
    arr.forEach((e) => set.add(e));
    return set;
}
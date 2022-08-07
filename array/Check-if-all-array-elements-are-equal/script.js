// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
function myFunction(arr) {
    var arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i]);
    }
    return (arr.join() === arr2.join()) ? true : false;
}

var dt = myFunction([true, true, true, true]);

console.log(dt);

//sol2

function
myFunction(arr) {

    return arr.every((val) => val === arr[0]);
}
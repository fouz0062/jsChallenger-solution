// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function myFunction(arr) {
    var dt = arr.length;
    var a = 0;
    for (let i = 0; i < dt; i++) {
        a += arr[i];
    }
    return a / dt;
}
//Sum up all array elements with values greater than


// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
function myFunction(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b) {
            result.push(a[i]);
        }
    }
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }
}
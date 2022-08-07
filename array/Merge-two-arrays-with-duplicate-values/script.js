//Merge two arrays with duplicate values

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

//sol 1

function myFunction(a, b) {
    let arr = a.concat(b);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.length === 0) {
            result.push(arr[i]);
        }
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result.sort((a, b) => a - b);
}

//sol 2

function myFunction(a, b) {
    let arr = a.concat(b);
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] = 1;
    }
    let arr2 = Object.keys(result).map((v) => parseInt(v)); // .map ((v) => +v);
    return arr2.sort((a, b) => a - b);
}

//sol 3 
function myFunction(a, b) {
    let arr = a.concat(b);
    let arr2 = [...new Set(arr)];
    return arr2.sort((a, b) => a - b);
}

///---------------------------------------
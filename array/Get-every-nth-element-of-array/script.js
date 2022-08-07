//Get every nth element of array

// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

// function myFunction(a, n) {
//     let arr = [];
//     for (let i = n; i < a.length; n += n) { arr.push(a[n - 1]) }
//     return arr;
// }

function myFunction(a, n) {
    let arr = [];
    a.map((val) => {
        if ((a.indexOf(val) + 1) % n === 0) {
            arr.push(val);
        }
    })
}

//--------------------------------------
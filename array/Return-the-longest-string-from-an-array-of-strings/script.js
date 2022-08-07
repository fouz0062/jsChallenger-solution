//Return the longest string from an array of strings
// Write a function that takes an array of strings as argument
// Return the longest string
function myFunction(arr) {
    let st = '';
    arr.map((str) => {
        if (str.length > st.length) {
            st = str;
        }
    });
    return st;
}